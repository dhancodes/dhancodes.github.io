---
title: A update on my markdown workflow
date: 2026-09-16
permalink: /posts/2026/09/14/_A_update_on_my_markdown_workflow/
tags:
  - markdown
  - pdfs
toc: true
---

Markdown as a presentation tool, with minor changes in your workflow.

I write almost everything in Markdown now — notes, slides, this blog. Not
because it's fashionable, but because it gets out of the way. Plain text,
version-controllable, editable in any editor, and it outlives whatever app was
trendy when you wrote it. The one thing that used to send me back to LaTeX or
PowerPoint was producing a nicely typeset PDF or a slide deck at the end. Turns
out you don't need to leave Markdown for that either —
[Pandoc](https://pandoc.org) handles both.

## Markdown to PDF

Pandoc converts a Markdown file straight into a properly typeset PDF, using
LaTeX as the engine under the hood without you having to write any LaTeX
yourself:

```sh
pandoc notes.md --pdf-engine=xelatex \
  -V geometry:"a4paper,margin=25mm" \
  -V mainfont="TeX Gyre Heros" \
  -o notes.pdf
```

A few flags worth knowing:

- `--pdf-engine=xelatex`: lets you use system fonts (`mainfont`, `monofont`)
  instead of being stuck with Computer Modern.
- `-V geometry:...`: page size and margins, same syntax as LaTeX's
  `geometry` package.
- `--highlight-style=kate`: nicer syntax highlighting for code blocks than
  the default.
- `-V linkcolor:blue`: makes links visibly blue instead of the default
  boxed/black links in the PDF.

The result reads like a proper typeset document — headers, tables, code
blocks, footnotes, citations if you use them — from a file you could just as
easily read as plain text.

## Markdown to slides

The same file (or a slightly restructured one, split by `#`/`##` headers
into slides) can become a Beamer presentation:

```sh
pandoc slides.md -t beamer -V theme=metropolis -o slides.pdf
```

Metropolis is a clean, modern Beamer theme — no clip art, no gradients, just
readable slides. This has mostly replaced Keynote/PowerPoint for me for
technical talks: I outline the talk as headers and bullet points, and Pandoc
does the layout.

Beamer-specific options (theme, progress bar, slide numbering) go in the
YAML frontmatter of `slides.md` itself, so `slides.md` is fully
self-contained and doesn't need any flags beyond `-t beamer`:

```markdown
---
title:
author:
date: \today
colortheme: dove
themeoptions:
- block=fill
- numbering=fraction
- progressbar=frametitle
---

# This is a sample heading for slides
```

Each top-level (or second-level, depending on `--slide-level`) header
becomes a new slide, so the rest of the file is just headers and bullets
under them.

## The vim bindings (extra)

Since I'm always inside vim/neovim when writing Markdown, I wired both of
these up as leader-key shortcuts so I never have to leave the editor or
retype the command:

```vim
autocmd FileType markdown nnoremap <leader>p :!pandoc "%" --pdf-engine=xelatex -V linkcolor:blue -V geometry:"a4paper,margin=25mm" -V fontsize=10pt -V mainfont="TeX Gyre Heros" -V monofont="Latin Modern Mono" --highlight-style=kate -s -o "%:r.pdf" >/tmp/pandoc.log 2>&1 &<CR><CR>

autocmd FileType markdown map <Leader>b :!pandoc "%:p" -t beamer -V theme=metropolis -o "%:p:r.pdf" >/tmp/pandoc.log 2>&1 &<CR><CR>
```

- `<leader>p` builds a PDF from the current file.
- `<leader>b` builds Beamer slides from the current file.

Both run Pandoc in the background (trailing `&`), redirect output to
`/tmp/pandoc.log` so a failed build doesn't clutter vim, and use `%:r`/`%:p:r`
to name the output PDF after the source file automatically. Only active for
`filetype=markdown`, so it doesn't stomp on leader mappings in other file
types.
