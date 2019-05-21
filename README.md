# Front End technical challenge

This challenge builds on the back end task (https://github.com/ArchPlatform/backend-test). We've bootstrapped this project using React create app to get you going as quickly as possible.

## Set up:

In the project directory:

```
  yarn install
```

Then:

```
  yarn start
```

Open in browser: http://localhost:3000

## Instructions

This application shows workstations that our platform manages. However, all we've managed to implement is a simple wireframe that isn't connected to the API.

We'd like you to flesh things out:

* Connect the application to the backend using XHR, Fetch, etc. The frontend should use the API to retrieve a list of workstations and users to populate the workstations screen.
* Take advantage of the API's ability to include `users` with their related `workstations`
* The `<Workstations>` component should be refactored into a series of smaller components, for example `<Workstation>`, `<Users>`. 

## Notes

* Don't forget the backend app needs to be running. Run it using `rails s -p 3005` from the backend app folder.
* Rather than hard coding the API url into the javascript, we've defined it in a `.env` file. You can pull in the API url using `process.env.REACT_APP_BACKEND_API`
* This shouldn't take more than a few hours. If you don't have time to complete it, don't worry - we're much more interested in how you approach the problem.
* If you want to provide more background on how you would have completed the problem, or any other notes, please put them in a NOTES.md file at the root of the project.

## Submitting your solution

Clone the repo and make your changes locally. When ready to submit, zip up the project and send it back to us.

To avoid problems with attachments being blocked, either send the file with Dropbox or WeTransfer.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
