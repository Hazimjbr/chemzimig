#!/bin/bash
# Remove previous text file if it exists
rm -f all_text_unit11.txt
touch all_text_unit11.txt

# Loop through all Unit 11 images
for i in $(seq -w 1 24); do
  filename="/tmp/file_attachments/11_page-00${i}.jpg"
  if [ -f "$filename" ]; then
    echo "Processing $filename..."
    # Using tesseract to extract Arabic text
    tesseract "$filename" stdout -l ara >> all_text_unit11.txt
    echo -e "\n\n" >> all_text_unit11.txt
  fi
done
echo "Text extraction complete. Output saved to all_text_unit11.txt"
