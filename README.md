# Blog

Personal site and blog, built with [Hugo](https://gohugo.io) and deployed to GitHub Pages
by the workflow in `.github/workflows/hugo.yml`.

## Writing

Everything is edited under `data/`:

| Path | What |
|---|---|
| `data/posts/YYYY-MM-DD-title.md` | Blog posts. Date and URL (`/blog/title/`) come from the filename; front matter needs `title` and `tags`. |
| `data/photos.yaml`, `data/photos/` | Gallery list (`title`, `file_name`) and the image files. |
| `data/publications.yaml`, `data/papers/` | Paper list and the PDF/HTML files. |

Push to `master` and the site rebuilds and deploys.

## Local preview

```
hugo server -D
```

Restart the server after changing `hugo.toml` or adding new top-level folders.
