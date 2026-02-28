# PassGen

Simple password generator built with React.

## Live

https://azatmagdeev.github.io/passgen/

## Features

- Generate 8 passwords at once
- Classic mode:
  - configurable length (8 / 10 / 15 / 20)
  - character sets: lowercase, uppercase, numbers, symbols
- Readable mode (enabled by default):
  - format: `Xxxxxx#12` or `Xxxxxx12#`
  - 6 letters with alternating consonant/vowel
  - first letter uppercase
  - excludes letters: `y`, `q`, `w`, `j`
  - allowed special chars: `+-_=.:@#$%!`
- One-click copy for each generated password

## Tech

- React 18
- Create React App

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Tests

```bash
npm test -- --watchAll=false
```

## Build

```bash
npm run build
```

## SEO / indexing files

- `public/robots.txt`
- `public/sitemap.xml`
