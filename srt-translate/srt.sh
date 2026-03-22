#!/bin/bash

# --- CONFIGURATION ---
SOURCE_DIR="0_source"
CAPTION_INPUTS_DIR="1_caption_inputs"
FINISHED_DIR="2_finished_captions"
SOURCE_JSON="$SOURCE_DIR/source.json"

# 44 ISO 639-1 language codes
languages=("ar" "az" "bg" "bn" "ca" "cs" "da" "de" "el" "en" "es" "et" "eu" "fa" "fi" "fr" "ga" "gl" "he" "hi" "hu" "id" "it" "ja" "ko" "ky" "lt" "lv" "ms" "nb" "nl" "pt-BR" "pl" "pt" "ro" "ru" "sk" "sl" "sq" "sv" "th" "tl" "tr" "zh-Hans")
# ========================================================
# SCRIPT 1: INITIALIZATION
# ========================================================
echo "Initializing environment..."

mkdir -p "$SOURCE_DIR"
mkdir -p "$CAPTION_INPUTS_DIR"
mkdir -p "$FINISHED_DIR"

for lang in "${languages[@]}"; do
    mkdir -p "$lang"
done

if [ ! -f "$SOURCE_JSON" ]; then
    cat <<EOF > "$SOURCE_JSON"
{
  "title": "Template Title",
  "description": "Template Description",
  "captions": [{"lineOne": 1, "lineTwo": "00:00:01,000 --> 00:00:04,000", "lineThree": "Sample"}]
}
EOF
fi

# ========================================================
# SCRIPT 2: BATCH PROCESSING & TIMESTAMP FILING
# ========================================================

shopt -s nullglob
input_files=("$CAPTION_INPUTS_DIR"/*.json)

if [ ${#input_files[@]} -eq 0 ]; then
    echo "No JSON files found in $CAPTION_INPUTS_DIR."
#   exit 0
fi

for input_file in "${input_files[@]}"; do
    input_filename=$(basename "$input_file")
    input_basename="${input_filename%.*}"
    
    # Generate timestamp: YYYY-MM-DD_HHMMSS
    TIMESTAMP=$(date +"%Y-%m-%d_%H%M%S")
    
    echo "Processing: $input_filename"

    BASE_TITLE=$(jq -r '.title' "$input_file")
    BASE_DESC=$(jq -r '.description' "$input_file")

    for lang in "${languages[@]}"; do
        target_dir="$lang/$input_basename"
        mkdir -p "$target_dir"

        # Create the timestamp file: 0_TIMESTAMP.txt
        touch "$target_dir/0_${TIMESTAMP}.txt"

        # 1. Translate Title & Description
        curl -s -X POST "http://localhost:5000/translate" -H "Content-Type: application/json" \
            -d "{\"q\": \"$BASE_TITLE\", \"source\": \"en\", \"target\": \"$lang\"}" | jq -r '.translatedText' > "$target_dir/title.txt"

        curl -s -X POST "http://localhost:5000/translate" -H "Content-Type: application/json" \
            -d "{\"q\": \"$BASE_DESC\", \"source\": \"en\", \"target\": \"$lang\"}" | jq -r '.translatedText' > "$target_dir/description.txt"

        # 2. Assemble SRT
        translated_title=$(cat "$target_dir/title.txt")
        clean_title="${translated_title// /_}"
        srt_path="$target_dir/${clean_title}.${lang}.srt"
        > "$srt_path"

        jq -c '.captions[]' "$input_file" | while read -r block; do
            l1=$(echo "$block" | jq -r '.lineOne')
            l2=$(echo "$block" | jq -r '.lineTwo')
            l3=$(echo "$block" | jq -r '.lineThree')

            t3=$(curl -s -X POST "http://localhost:5000/translate" -H "Content-Type: application/json" \
                -d "{\"q\": \"$l3\", \"source\": \"en\", \"target\": \"$lang\"}" | jq -r '.translatedText')

            echo -e "$l1\n$l2\n$t3\n" >> "$srt_path"
        done
    done

    # Move processed file to finished folder
    mv "$input_file" "$FINISHED_DIR/"
    echo "Completed $input_filename. Logged at 0_${TIMESTAMP}.txt"
done

echo "Batch processing complete."

