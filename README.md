# Smart Talking Gestures 🧏‍♂️✌👌

The app recognises [ASL](https://en.wikipedia.org/wiki/American_Sign_Language) hand gestures and translates it into speech using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API), and vice-versa. Additionally, you can create your own gestures and teach the model to recognise them on the fly.<br /><br />
The repository is named "flerkens" because that was the name of our team. Not the best idea I know 😂😂😂. If you don't know what a flerken is, refer [here](https://marvel.fandom.com/wiki/Flerken).

## Technologies Used

-> [React](https://reactjs.org/) for building the UI of the application. Using a framework gives a lot of flexibility when generating dynamic content.<br />
-> [react-bootstrap](https://react-bootstrap.github.io/) for utilising the components and layout options provided by [Bootstrap](https://getbootstrap.com/).<br />
-> [FontAwesome](https://fontawesome.com/) for 🔥 icons.<br />
-> [tensorflow.js](https://www.tensorflow.org/js/) for developing machine learning models that run directly on the browser.<br />
-> [Teachable Machine Image Library](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) for using MobileNet image models created with Teachable Machine. MobileNets are small, low-latency, low-power models parameterized to meet the resource constraints of a variety of use cases. <br />
-> [opencv.js](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html) for implementing [background subtraction](https://docs.opencv.org/master/de/df4/tutorial_js_bg_subtraction.html) as a preprocessing step for better gesture recognition. We didn't get enough time to properly train our model though 😂.<br />
-> For the Custom Signs component, we're using a [KNN Classifier](https://github.com/tensorflow/tfjs-models/tree/master/knn-classifier) provided by [tensorflow](https://www.tensorflow.org/js/).
<br /><br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
