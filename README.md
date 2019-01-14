# ac-react-adoption
Don't buy, adopt!

Pet Adoption is a small application built with [React.js](https://github.com/facebook/react), [next.js](https://github.com/zeit/next.js), [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Apollo](https://www.apollographql.com), [GraphQL](https://graphql.org/), [styled-components](https://github.com/styled-components/styled-components) and [petfinderQL](https://github.com/abdullahceylan/petfinderQL).</p> 

## Preview

### Homepage
![Preview](https://raw.githubusercontent.com/abdullahceylan/ac-react-adoption/master/screenshoots/home.jpg)

### Search
![Preview](https://raw.githubusercontent.com/abdullahceylan/ac-react-adoption/master/screenshoots/search.jpg)

### Pet and Shelter details
![Preview](https://i.gyazo.com/0ba5ba3175b87287cdb768e468d23474.gif)

### 404
![Preview](https://raw.githubusercontent.com/abdullahceylan/ac-react-adoption/master/screenshoots/404.jpg)

## Running Locally

1. Clone this repo
2. Type `cd ac-react-adoption` to enter the project folder
3. Run `npm install` or `yarn install` and install dependencies
4. Rename `next.config-dev.js` to `next.config.js`
5. To use the Google Maps for the shelter details (also in pet details page), you must get an API key which you can then add to your mobile app, website, or web server.  Follow [this link](https://developers.google.com/maps/documentation/javascript/get-api-key) to get a Google Map API Key
6. Insert your API Key into the `next.config.js`
7. Run `npm run dev` or `yarn dev` and visit [localhost:3000](http://localhost:3000)

## Build

1. Run `npm run build` or `yarn build`
1. The compiled version will be in `/.next/dist/`

## Live Example

You can test on https://ac-react-adoption.herokuapp.com

## Note
You may experience some delays when you try to use search function due to Petfinder's very slow API responses.