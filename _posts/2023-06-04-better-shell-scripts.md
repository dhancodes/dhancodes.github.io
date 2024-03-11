---
title: 3 Ways to Be Better at Shell Scripting
date: 2023-06-04
permalink: /posts/2023/06/04/Being_better_at_scripting/
tags:
  - Workflow
  - bash
toc: true
---
In the journey of Homo sapiens, we have constantly sought to simplify our daily
lives. Automation has become the epitome of intelligence, and scripting plays a
crucial role in achieving that automation. In this blog post, we will delve
into the art of scripting and explore three ways to enhance your skills as a
command-line Jedi.

## More Macho Man is Here: TLDR and Cheat.sh
If you find yourself frustrated with lengthy and complex man pages, fear not!
TLDR (Too Long; Didn't Read) and [cheat.sh](https://cheat.sh) come to your rescue. TLDR provides
concise and practical help pages, while Cheat.sh is a website
packed with numerous examples. You can even integrate Cheat.sh into your
terminal by adding a simple function to your bashrc/zshrc file. 

```bash
wtis(){
	curl -s "cheat.sh/$1" | less -R
}
```

Now you can
search and clarify your command-line doubts right from the terminal itself.

##  How to Understand Scripts Better: Explainshell
When encountering unfamiliar scripts, it's natural to feel bewildered. But fret
no more! [Explain shell](https://explainshell.com/) comes to your aid. This
website helps you unravel the hidden intentions behind shell scripts. Simply
paste a command or script, and Explainshell breaks it down into understandable
components, explaining each element's purpose and functionality. Understanding
scripts has never been easier!

## How to Make Your Scripts Better: Shellcheck
Improving your scripts is a constant endeavor. Fortunately, `Shellcheck` is here
to assist you. This powerful tool analyzes your script and provides warnings
and suggestions to help you identify and rectify potential issues. By
incorporating Shellcheck into your workflow, you can remove edge cases, enhance
code quality, and make your scripts more robust. 

For Vim users, consider
adding Shellcheck to a Vim key binding.

## Conclusion:
Mastering shell scripting opens up a world of automation and efficiency in your
daily tasks. By leveraging TLDR, Cheat.sh, Explainshell, and Shellcheck
, you can enhance your scripting skills, understand complex scripts,
and write more robust and error-free code. Embrace these tools, and embark on
your journey to becoming a command-line Jedi. 

May the scripts be with you!
