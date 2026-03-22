#!/bin/bash

# --- CONFIGURATION ---
API_URL="http://localhost:5000/translate"
SOURCE_LANG="en"

# Your specific 44 languages (Code and Name)
declare -A langs
langs=(
    ["ar"]="Arabic" ["az"]="Azerbaijani" ["bg"]="Bulgarian" ["bn"]="Bengali"
    ["ca"]="Catalan" ["cs"]="Czech" ["da"]="Danish" ["de"]="German"
    ["el"]="Greek" ["en"]="English" ["es"]="Spanish" ["et"]="Estonian"
    ["eu"]="Basque" ["fa"]="Persian" ["fi"]="Finnish" ["fr"]="French"
    ["ga"]="Irish" ["gl"]="Galician" ["he"]="Hebrew" ["hi"]="Hindi"
    ["hu"]="Hungarian" ["id"]="Indonesian" ["it"]="Italian" ["ja"]="Japanese"
    ["ko"]="Korean" ["ky"]="Kyrgyz" ["lt"]="Lithuanian" ["lv"]="Latvian"
    ["ms"]="Malay" ["nb"]="Norwegian_Bokmal" ["nl"]="Dutch" ["pt-BR"]="Portuguese_Brazil"
    ["pl"]="Polish" ["pt"]="Portuguese_Portugal" ["ro"]="Romanian" ["ru"]="Russian"
    ["sk"]="Slovak" ["sl"]="Slovenian" ["sq"]="Albanian" ["sv"]="Swedish"
    ["th"]="Thai" ["tl"]="Tagalog" ["tr"]="Turkish" ["zh-Hans"]="Chinese_Simplified"
)

# --- INPUT ---
echo "1. Enter the VIDEO TITLE (Single line, then press Enter):"
read -r TITLE

echo "2. Paste the VIDEO DESCRIPTION (Press Enter then Ctrl+D when finished):"
DESCRIPTION=$(cat)

if [ -z "$TITLE" ] || [ -z "$DESCRIPTION" ]; then
    echo "Error: Title or Description is empty. Exiting."
    exit 1
fi

# --- FUNCTION ---
translate_text() {
    local text="$1"
    local target_code="$2"
    
    # Use jq to build JSON safely to handle special characters and newlines
    local payload=$(jq -n --arg q "$text" --arg src "$SOURCE_LANG" --arg tgt "$target_code" \
        '{q: $q, source: $src, target: $tgt, format: "text"}')
        
    curl -s -X POST "$API_URL" \
        -H "Content-Type: application/json" \
        -d "$payload" | jq -r '.translatedText // empty'
}

# --- PROCESSING ---
echo "Starting batch translation for 44 languages..."

for code in "${!langs[@]}"; do
    name="${langs[$code]}"
    echo "Translating to $name ($code)..."

    # Translate Title
    T_TITLE=$(translate_text "$TITLE" "$code")
    if [ -n "$T_TITLE" ]; then
        echo "$T_TITLE" > "${name}_Title.txt"
    fi

    # Translate Description
    T_DESC=$(translate_text "$DESCRIPTION" "$code")
    if [ -n "$T_DESC" ]; then
        echo "$T_DESC" > "${name}_Description.txt"
    fi
done

echo "Success! Check the folder for your [Language]_Title.txt and [Language]_Description.txt files."
