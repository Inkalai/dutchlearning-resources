# @dutchlearning resources

A bilingual (English / 繁體中文) finder for free and paid Dutch learning resources in the Netherlands, Belgium and online. It's a static site: plain HTML, CSS and JavaScript, with no build step.

## Files

| File | What it's for |
| --- | --- |
| `data/resources.js` | Every resource on the site. Edit this to add, change or remove listings. |
| `config.js` | Instagram, Ko-fi and blog links, the "last checked" date and where suggestions go. |
| `assets/i18n.js` | All interface text in English and Traditional Chinese. |
| `assets/style.css` | Colours, fonts and layout. |
| `assets/app.js` | Filtering, the level route and the suggestion form. |

## Add or edit a resource

Open `data/resources.js`, copy an existing entry, paste it at the end of the list and change the values. The comment at the top of the file explains every field. Entries with `review: true` show "Not yet reviewed by Inka". Delete that line once you've checked a listing.

## Suggestions from visitors

With `formEndpoint` empty in `config.js`, the form opens a pre-filled GitHub issue in this repo, so the visitor needs a GitHub account. For email delivery with no account needed, create a free form at [Formspree](https://formspree.io) and paste its URL into `formEndpoint`.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly also works.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. The site appears at `https://inkalai.github.io/dutchlearning-resources/` within a minute or two.

To use your own domain, add it under **Settings → Pages → Custom domain**.

## Language links

`?lang=en` and `?lang=zh` open the site in a specific language, which is useful for Instagram bio links. Without the parameter, the site follows the visitor's last choice, then their browser language.
