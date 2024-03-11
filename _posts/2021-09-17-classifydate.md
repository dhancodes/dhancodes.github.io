---
title: "Organize Your Files Automatically: A Bash Script Based on Creation Date"
date: 2021-09-17
permalink: /posts/2021/09/classifydate/
tags:
  - bash
  - organisation
---
In today's digital age, managing and organizing files can quickly become overwhelming. Locating specific files can be a time-consuming task, especially when dealing with a large number of documents, photos, or other digital assets. To streamline your file organization process, I've developed a bash script that automatically classifies files into respective year and month folders based on their creation date. This script simplifies file management and ensures a well-organized file structure. Let's dive into the details of this handy script!


```bash
#!/usr/bin/env bash

# Create a folder structure to classify files by YEAR and MONTH.
# Aliased as 'sortdate'

for file in *; do
    if [ -f "$file" ]; then
        filename="$file"
        year=$(date -r "$file" +%Y)
        month=$(date -r "$file" +'%m %B')
        destination="$year/$month"

        mkdir -p "$destination" && mv "$filename" "$destination"
    fi
done

```

## Explanation:
The script revolves around a for loop that iterates through each item in the current directory. It performs the following steps:

1. File Validation:
The script verifies if the item is a regular file using the [ -f "$file" ] condition. This ensures that only files are considered for classification, excluding directories and other special files.

1. Extraction of Date Information:
The date command is utilized to extract the creation date of the file.
The date -r option retrieves the creation date of the file specified by $file.
Two variables, year and month, are assigned the extracted year (+%Y) and month (+%m %B) respectively. The latter format includes both the month number and the full month name for better folder naming.

1. Destination Folder Creation:
The destination folder path is constructed by concatenating the year and month variables.
The mkdir -p command is used to create the destination folder if it doesn't already exist. The -p flag ensures that parent directories are created as needed.

1. File Movement:
The mv command moves the file `($filename)` to the destination folder `($destination)`.

Conclusion:
By utilizing this script, you can automate the process of organizing files
based on their creation date. This simplifies file management and allows for
easier access to specific files within a well-structured directory hierarchy.
Whether you want to organize documents, photos, or any other files, this script
will save you time and effort.

Note: When running scripts, exercise caution and ensure you have a backup of your files before making any changes to their locations.
{: .notice}


