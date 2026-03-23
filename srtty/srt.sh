#!/bin/bash

# --- CONFIGURATION ---
SOURCE_DIR="0_source"
CAPTION_INPUTS_DIR="1_caption_inputs"
FINISHED_DIR="2_finished_captions"

# New Output Folders
SRT_OUT="3_srt_output"
TITLE_OUT="4_title_output"
DESC_OUT="5_description_output"

# 44 ISO 639-1 language codes
languages=("ar" "az" "bg" "bn" "ca" "cs" "da" "de" "el" "en" "es" "et" "eu" "fa" "fi" "fr" "ga" "gl" "he" "hi" "hu" "id" "it" "ja" "ko" "ky" "lt" "lv" "ms" "nb" "nl" "pt-BR" "pl" "pt" "ro" "ru" "sk" "sl" "sq" "sv" "th" "tl" "tr" "zh-Hans")

# Initialize environment
mkdir -p "$SOURCE_DIR" "$CAPTION_INPUTS_DIR" "$FINISHED_DIR" "$SRT_OUT" "$TITLE_OUT" "$DESC_OUT"

shopt -s nullglob
input_files=("$CAPTION_INPUTS_DIR"/*.json)

if [ ${#input_files[@]} -eq 0 ]; then
    echo "No JSON files found in $CAPTION_INPUTS_DIR."
    exit 0
fi

# Counter for the [numeral] part
file_count=1

for input_file in "${input_files[@]}"; do
    input_filename=$(basename "$input_file")
    echo "Processing: $input_filename"

    BASE_TITLE=$(jq -r '.title' "$input_file")
    BASE_DESC=$(jq -r '.description' "$input_file")

    for lang in "${languages[@]}"; do
        echo " - Translating to $lang..."

        # 1. Translate and Save TITLE to its own folder
        curl -s -X POST "http://localhost:5000/translate" -H "Content-Type: application/json" \
            -d "{\"q\": \"$BASE_TITLE\", \"source\": \"en\", \"target\": \"$lang\"}" | jq -r '.translatedText' > "$TITLE_OUT/${lang}.${file_count}.txt"

        # 2. Translate and Save DESCRIPTION to its own folder
        curl -s -X POST "http://localhost:5000/translate" -H "Content-Type: application/json" \
            -d "{\"q\": \"$BASE_DESC\", \"source\": \"en\", \"target\": \"$lang\"}" | jq -r '.translatedText' > "$DESC_OUT/${lang}.${file_count}.txt"

        # 3. Assemble and Save SRT to its own folder
        srt_path="$SRT_OUT/${lang}.${file_count}.srt"
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

    # Move processed file and increment counter
    mv "$input_file" "$FINISHED_DIR/"
    ((file_count++))
done

echo "Done! Check folders 3, 4, and 5 for your files."
