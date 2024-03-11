---
title: "Streamlining Research Workflow: Organizing Papers and eBooks"
date: 2023-05-29
permalink: /posts/2023/05/29/Organizing_research/
tags:
  - Workflow
  - Bash
toc: true
---

When dealing with large collections of
files, such as research papers or ebooks,
finding and opening the right file can be
a time-consuming task. In this blog post,
we'll explore a Bash script that
streamlines this process by providing a
convenient menu for selecting and opening
PDF or DJVU files. With just a few
modifications, you can adapt the script
to suit your specific needs. 

## Setting Up the Script: 
Let's start by
setting up the Bash script. Create a new
file called "open_files.sh" and open it
in a text editor. Copy and paste the
following code into the file:


```bash
#!/usr/bin/env bash

# Set the directories where your files are located
papers_dir=~/PhD/PDFs
ebooks_dir=~/Dropbox/eBooks

# Save find result to arrays
mapfile -t paper_array < <(find "$papers_dir" -type f \( -iname "*.pdf" -o -iname "*.djvu" \))
mapfile -t ebook_array < <(find "$ebooks_dir" -type f \( -iname "*.pdf" -o -iname "*.djvu" \))

# Combine the arrays into a single array
combined_array=("${paper_array[@]}" "${ebook_array[@]}")

# Check if the combined array is empty
if [[ ${#combined_array[@]} -eq 0 ]]; then
    echo "No files found in the specified directories."
    exit 1
fi

# Declare an associative array to store filenames and paths
declare -A files

# Populate the files array
for file_path in "${combined_array[@]}"; do
    filename=$(basename "$file_path")
    files["$filename"]=$file_path
done

# Generate a list of filenames for the selection menu
gen_list() {
    for file_name in "${!files[@]}"; do
        echo "$file_name"
    done
}

# Prompt the user to select a file
selected_file=$(gen_list | rofi -dmenu -i -sorting-method fzf -sort -no-custom -location 0 -p "Select File")

# Open the selected file using xdg-open
if [[ -n "$selected_file" ]]; then
    xdg-open "${files[$selected_file]}"
fi

```

## Customization:
Now that the script is set up, you can customize it to fit your workflow:

1. **Adjust the directory paths:** Modify the`papers_dir` and `ebooks_dir` variables to match the directories where your files are located. For example, you might have research papers in one directory and ebooks in another. Update these paths accordingly.

2. **Add more file types:** By default, the script searches for PDF and DJVU files. If you have files of different formats, such as EPUB or MOBI, you can modify the find commands to include those extensions as well.

3. **Customize the selection menu:** The script uses the rofi utility to display a selection menu. You can modify the options passed to the rofi command to change the appearance or behavior of the menu. Refer to the rofi documentation for more information on available options.

## Conclusion
With this Bash script, selecting and opening PDF or DJVU files
becomes a breeze. By customizing the directories, file types, and selection
menu, you can adapt the script to your specific needs. This simple yet powerful
tool can significantly enhance your productivity when dealing with large
collections of files. Give it a try and streamline your file access workflow!
