# Portfolio Web Version 2 

## :sparkles: Introduction

This web portfolio has been planned as a migration of the [portfolio](https://github.com/MarcossIC/portfolio) project made in Angular, the plan was to take it to Astro, to optimize the speed and SEO of the page using the Astro islands.

## 🛠 Stack

The project is developed in Angular 16 and uses these technologies:

<p user-select="none" align="left">
   <a href="#" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=astro,react,tailwind,ts,css"/> </a>
</p>

## 🚀 Project Structure

Architecture used in the project

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├──  atoms/
|   |   ├──  molecules/
|   |   ├──  organism/
|   |   ├──  legacy/
|   |   ├──  react/
|   |   └──  templates/
|   |
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   |    └── index.astro
|   └── utils/
│        └── utils.ts
|
└── package.json
```

## ℹ️ Development server
In order to deploy a local version of the project you must:

- Download the project from github
- Run `npm i` or `pnpm i` at the root of the project
- Run `npm start` or `pnpm start` for a dev server. Navigate to `http://localhost:4321/`.
  The application will automatically reload if you change any of the source files.

## 💪 Project status
I don't think this project will continue, due to lack of time and the need to update the portfolio, I decided to move the entire update to the Angular version, you can see it in the portfolio repository. It was also an interesting experience using Astro and I may use it in another project.
