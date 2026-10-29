# @dutchlearning resources

A trilingual (English / 繁體中文 / simple Nederlands) finder for free and paid Dutch learning resources in the Netherlands, Belgium and online. It's a static site: plain HTML, CSS and JavaScript. A small build script writes the published pages, so search engines and AI tools can read every resource without running JavaScript.

## Files

| File | What it's for |
| --- | --- |
| `data/resources.js` | Every resource on the site. Edit this to add, change or remove listings. |
| `config.js` | Instagram, Ko-fi and blog links, the "last checked" date and where suggestions go. |
| `assets/i18n.js` | All interface text in English, Traditional Chinese and simple Dutch (about A2 level). |
| `assets/style.css` | Colours, fonts and layout. |
| `assets/app.js` | Filtering, the level route and the suggestion form. |
| `templates/page.html` | The page layout. The published pages are built from it. |
| `tools/build.js` | Builds `index.html`, `zh/index.html`, `nl/index.html`, `sitemap.xml`, `robots.txt` and `llms.txt`. |

## Build the pages

After any change to the template, data, text, styles or scripts, run:

```bash
node tools/build.js
```

Then commit the generated files too. Don't edit `index.html`, `zh/index.html` or `nl/index.html` by hand: the next build overwrites them. The build also stamps every CSS and JavaScript link with a content hash, so visitors' browsers pick up changes straight away. It needs Playwright (`npm install -g playwright`) to draw the resource cards.

## Add or edit a resource

Open `data/resources.js`, copy an existing entry, paste it at the end of the list and change the values. The comment at the top of the file explains every field. Entries with `review: true` show "Not yet reviewed by Inka". Delete that line once you've checked a listing. Then run the build.

## Suggestions from visitors

With `formEndpoint` empty in `config.js`, the form opens a pre-filled GitHub issue in this repo, so the visitor needs a GitHub account. For email delivery with no account needed, create a free form at [Formspree](https://formspree.io) and paste its URL into `formEndpoint`.

## Preview locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Run the build first so the pages are up to date.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
4. The site appears at `https://www.dutchlearningresources.com/` (set under **Settings → Pages → Custom domain**, saved in the `CNAME` file) within a minute or two. The old `inkalai.github.io/dutchlearning-resources/` address redirects there.

To use your own domain, add it under **Settings → Pages → Custom domain**, then change `SITE_URL` in `tools/build.js` and run the build.

## Language links

Each language has its own address: `/` (English), `/zh/` (Traditional Chinese) and `/nl/` (simple Dutch). Old `?lang=zh` style links still work and forward to the right page. On the English page, returning visitors go to the language they chose before, and first-time visitors to their browser's language.
