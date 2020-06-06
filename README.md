# Fabulous

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Running the tests](#running-the-tests)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Versioning](#versioning)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

1. Mental health issue, stress levels has tremendously increased for everyone across the globe due to pandemic. Everyone is trying to adapt the new normal as per best of their capacity but the new normal has affected working parents the most and taking a toll on mental and physical health.
1. Taking care of kids, household chores along with working from home has left little to no time for parents to look after own health.
1. Kids feeling bored while school are closed and cannot play with their friends.
1. Businesses like gym, fitness classes, dance classes, summer camps etc. put on hold due to large head counts to avoid the spread of virus resulting businesses are in loss and looking for remote working options.
1. Hence there is a need for a one stop solution for all these challenges – people trying to attain work life balance along with focus on health and fitness, for kids to keep them engaged in a healthy way and also for small business owners so they can provide their services remotely.


### How can technology help?

Tchnology can help create one stop solution for all these challenges – people trying to attain work life balance along with focus on health and fitness, for kids to keep them engaged in a healthy way and also for small business owners so they can provide their services remotely and finding appropriate online resources is important as well.

### The idea

The platform will provide custom solution to everyone's need for example, customized health & fitness plan, diet plan, exercise for mental health, how to keep your kids engaged - suggesting activities as per child's age, joining a community to virtually bring us all together.
Idea is to build a Tailored solution serving multiple needs hence user don’t need to access multiple apps. The solution will be available both on Web and Mobile App with following components.
1. Health and fitness
1. Kid’s activities
1. Entertainment
1. Enroll for online classes
1. Join the community, Advertise your business
1. Create job opportunity within community
## Demo video

[![Watch the video](https://github.com/imandeepkaur/fabulous/images/team-fabulous.JPG)](https://www.youtube.com/watch?v=U4-97LEDn7c&feature=youtu.be)

## The architecture

![Video transcription/translation app](https://github.com/imandeepkaur/fabulous/images/architecture.JPG)

1. The user navigates to the site/app and click on get started to start Health and Fitness routine.
2. Spring Rest services call the IBM DB2 to render videos based on BasicHealthService.
3. When user join a community group, IBM Watson assistant serve as chatbot to collaborate in community
4. The app stores the translated text as a document within Object Storage.

## Long description

[More detail is available here](DESCRIPTION.md)

## Project roadmap

![Roadmap](roadmap.jpg)

## Getting started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
