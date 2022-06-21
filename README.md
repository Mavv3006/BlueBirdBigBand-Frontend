# Blue Bird Big Band Frontend

This project is the frondend website used for the Blue Bird Big Band. The Blue Bird Big Band is a music school big band from Speyer, Germany. This project is currently not deployed yet, as it has not reached the stage in which all the neccessary features are implemented and breaking bugs solved.

Angular is used as the JavaScript framework to develop this project.

## Installation Guide

This paragraph is targeted towards the (potential) contributor 😉. Here are the steps involved:

1. Clone this repo by executing the following command in the terminal: `https://github.com/Mavv3006/BlueBirdBigBand-Frontend.git` 
2. Now you can just run `npm run start`. This will serve the project in the background. If you want to open it in the browser directly you have to run `npm run start:open` instead.

## Run the tests

For running the tests you have to execute the following command: `npm run test`.

## Build this project

There are two configurations for building the project: Production and Local. The difference is the base url for the connection to the backend.

- for production run: `npm run build:prod`
- otherwise run: `npm run build`

If you want to use a local backend (recommended in development), please refer to the [Blue Bird Big Band Backend](https://github.com/Mavv3006/Blue-Bird-Big-Band-Backend) repository.
