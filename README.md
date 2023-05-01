# Tech-Blog

## Description
This application is a tech blog that allows users to post a blog and comment on other blogs. It uses the MVC file structure in order to load dynamic webpages. 

## Installation
Ensure that you have node and jest installed. Then, just clone the repository into VSCode or some other coding application. 

## Usage
A user must clone the repository and navigate to the correct folder within the terminal. Once in the correct folder, type in "node index.js". The user will then be prompted with the first question, which is to enter up to 3 characters.

![command line with first question asking for up to 3 characters](images/logo-maker-first.png)

Once you enter your response, press enter and the next question will come up. After the final question, which asks for the color of your shape, the terminal will log "Logo has been created".

![command line with all questions and Logo generated logged](images/logo-maker-all.png)

Within the project, a new file with your generated logo will be created. This file is titled "logo.svg" and will look like the below picture.

![logo.svg that was generated with user responses. Black circle with blue text](images/logo-maker-circle.png)

To test the code and ensure that a shape was rendered, run "npm run test" in the command line. The result below, shows that the circle, square, and triangle all passed the test and were properly rendered. 


![command line with the three tests that all passed](images/logo-maker-tests.png)

Below is the walkthrough video:

[Untitled_ Apr 4, 2023 9_07 AM.webm](https://user-images.githubusercontent.com/121627491/229809995-e4231188-cc76-4c4e-aef0-d28e9e399993.webm)


## Credits

https://www.w3schools.com/graphics/svg_intro.asp

## License
Please refer to the license in the repo.
