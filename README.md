# Lost but Found

This is a fully-responsive web app that displays the lost and found items of NYC's MTA system. Each item is shown with its count and is part of a larger cateogry that users can filter through. Additionally, users can view New York City's weather, and the country's top headlines.

![alt text](https://raw.githubusercontent.com/benjaminho1998/benjaminho1998.github.io/master/images/lbf1.png "Lost but found home screen")

## Purpose

The purpose of building this app is to continue to practice my React.js and React Bootstrap/sass skills, but I also want to use this as an opportunity to learn and implement React Hooks and Heroku Deployment on a manageable scale.

## Run

You can check it out here: [Lost but Found](https://mtalostbutfound.herokuapp.com/)

## Technologies

- React.js
- React Bootstrap
- React Hooks
- React Router
- Node.js
- Express
- Axios
- Sass
- Heroku
- MTA, weather, and news API's

## Challenges
1. __Problem:__ This was my first time deploying from scratch with Heroku, so when I first pushed my code to it and opened the web address, there was only a blank page. I opened the console and realized that my front end couldn't reach my back end proxy anymore now that it wasn't in local anymore.

    __Solution:__ Since I figured out my front end couldn't reach my local back end anymore, I needed a way also deploy my back end code so that it can be accessible. As a result, I made a different repo with just by back end proxy, and then deployed that to Heroku too. After testing it to make sure that it was correctly returning the API's, I changed the get requests in the front end to fetch from the back end I just deployed to Heroku. Thankfully, it worked!

2. __Problem:__ There were quite a few React Bootstrap components whose CSS that I wanted to make minor adjustments to like background-color. After trying many different methods and levels of specificity, I wasn't able to change any of the CSS.

    __Solution:__ I did some more research into the bsPrefix's that are mentioned in React Bootstrap's docs (I feel like they don't do too well of a job explaining them), and found out that they would allow me to access the CSS if I prefixed a new className with the bsPrefix. Using those did the job and allowed me to change a couple components that improved the overall appearance of my app.