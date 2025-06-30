<h1 align="center">David Phan's Portfolio Website</h1>

Feel free to fork or copy the website template and replace the text in the `src/data/text.js` file
to create your own website.

## Development

You'll need the following dependencies to develop this project:

- NPM
- TinyTex

### Install NPM and packages

First, install npm if you haven't done so already. Then run

```
npm install
```

### Install TinyTex

The resume is build with Latex. The most light weight way to install a latex distro is with TinyTex. You can follow
the [Tinytex installation guide](https://yihui.org/tinytex/), then run

```
tlmgr install collection-latexrecommended
tlmgr install collection-fontsrecommended
```

for the latex dependencies needed to build. Now you can run

```
npm run build-resume
```

to compile the resume pdf.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm deploy`

Deploys the app to GitHub pages, publishing to and updating the live website.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-resume`

Builds the pdf file for the resume and puts the build files in the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Credits
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Icon Source: [RA_IC0N21](https://www.flaticon.com/free-icons/embedded).
- Website design inspired by [Rishav Chanda's video](https://www.youtube.com/watch?v=ICs29OcEcwQ&t=206s&ab_channel=RishavChanda).
