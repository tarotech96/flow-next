# Flow-Next
Flow-Next is an abbreviation based on 2 words [Nextjs](https://nextjs.org/) and [Flowbite](https://flowbite.com/)

## Main Used packages

|Package|Description|
----|----
|next|The React framwork|
|flowbite-react|Gives a lot of components and interactive elements built with the utility classes from Tailwind CSS|
|[storybook](https://storybook.js.org/)|Tool for building UI components and pages in isolation|
|[@heroicons/react](https://heroicons.com/)|Beautiful hand-crafted SVG icons by the makers of Tailwind CSS for React|
|[fontawesome-react](https://fontawesome.com/docs/web/use-with/react/)|Fontawesome for React applications|
|[axios](https://www.npmjs.com/package/axios)|Promise based HTTP client for the browser and nodejs|


## Project structure 
This project includes 3 main parts:
  
  - **components**: contains some directories which is used to built page of the project as `atoms` `molecules` `organisms`.
  This structure is separated according to [Atomic desing](https://github.com/danilowoz/react-atomic-design)

  - **pages**: contains layout of the website

  - **stories**: contains each story in the project. I used [storybook](https://storybook.js.org/) framwork to document for the layout 

## Bash

To run source

```
  yarn dev 
```

To run storybook

```
  yarn storybook
```

Prettier

```
  yarn run format
```

Eslint 

```
  yarn run lint
```

## Related posts
