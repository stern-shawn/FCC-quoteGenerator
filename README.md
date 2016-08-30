# Startup Quote Generator - FreeCodeCamp Project
---
## 1. What This Project Does
This is the first app I created as part of the FCC curriculum. The objective is to build a random quote generator, and thanks to the newest API I was able to find that works with gh-pages, it now has a fun theme around current startup culture! The goal was to satisfy the following user stories:

* User can click a button to view a new random quote
* User can click a button to tweet the currently displayed quote
* Use any libraries or APIs needed, and give it your own personal style

The originally submitted version of the app fulfilled all user stories, and the various iterations since then have been improvements either in styling or in making the code more succinct.

## 2. How To Set This Up
If you want to clone this project for yourself, the process is very simple due to the structure of the project.

1. Either manually download and unzip files to a location, or clone this repo through Git.
2. Open the index.html file in your browser. This project is built on HTML5/CSS3/JavaScript/jQuery and the necessary resources from Bootstrap and FontAwesome are linked through the HTML file, so there is no need to install any packages through NPM.

## 3. Project Goals
As one of my first web development projects, this was a chance for me to:

* Experiment with using Bootstrap to make a responsive layout that would display content clearly and thoughtfully, regardless of if the user was viewing from a desktop or on a mobile device.
* Practice interfacing my own app with other websites in a few ways:
    * Making AJAX requests to an API, grabbing the resulting JSON data, parsing, and then injecting new HTML into my existing app state (in this case, asking for random quotes and displaying the text/author).
    * Formatting said data and properly sending it to an external site through their own API (in this case, Twitter)

Now that I'm coming back and reviewing past projects (such as this one), my new goals in addition to supporting the previous ones are:

* Redesign the app to fit into my growing design language/styling through color, layout, animations, and reduction of unnecessary elements
* Enhance security to make the page hostable on gh-pages (and because security is part of my responsibility as an ethical engineer)
* Refactor any redundancies in my JavaScript and make old code compliant with current linters (such as AirBnB's standards)

## 4. Link to Live Site
The latest version of the site can be viewed [here](https://stern-shawn.github.io/FCC-quoteGenerator/) thanks to gh-pages hosting.

## 5. Roadmap
TODO:

* ~~Initial build of app on CodePen and submission to FreeCodeCamp.~~
* ~~Find a secure (https) quote API so that gh-pages hosting will work (rejects JSON requests from http sources).~~
* ~~Modify json parsing to match the new JSON objective~~
* ~~Restyle app~~
* ~~Add animations~~
* ~~Clean up redundant divs, classes, and CSS attributes~~
* Future restyling and/or find a faster API? Current one takes awhile to get started because of its hosting on Heroku...
