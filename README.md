
## The Angular Router In Depth Course

This repository contains the code of the course [Angular Router In Depth](https://angular-university.io/course/angular-router-course).

This course repository is updated to Angular v9, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.

![Angular Router In Depth](https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-router-course.jpg)


# Installation pre-requisites

IMPORTANT: Please use the latest Node and especially NPM, to make sure the package-lock.json is used.

For running this project we need and npm installed on our machine. These are some tutorials to install node in different operating systems:

*Its important to install the latest version of Node*

- [Install Node and NPM on Windows](https://www.youtube.com/watch?v=8ODS6RM6x7g)
- [Install Node and NPM on Linux](https://www.youtube.com/watch?v=yUdHk-Dk_BY)
- [Install Node and NPM on Mac](https://www.youtube.com/watch?v=Imj8PgG3bZU)


# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli 


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/angular-university/angular-router-course.git
    
This repository is made of several separate npm modules, that are installable separately. For example, to run the au-input module, we can do the following:
    
    cd angular-router-course
    npm install

Its also possible to install the modules as usual using npm:

    npm install 

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. If there are issues, please post the complete error message in the Questions section of the course.

# To Run the Development Backend Server

In order to be able to provide realistic examples, we will need in our playground a small REST API backend server. We can start the sample application backend with the following command:

    npm run server

This is a small Node REST API server.

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start 

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

This Course in a Nutshell

In this course, we are going to learn in detail the advantages of building a frontend UI as a single-page application, as opposed to a traditional multi-page application.

Single-page applications (or SPAs) have been around for years now, and are today more popular than ever as a simplified way to build enterprise frontends or internet product dashboards.

SPAs typically give the end-user a much better user experience, due to their better-perceived performance and responsiveness. In this course, we will learn how to use the Angular Router to turn our Angular application into a SPA.

Course Overview

We are going take as a starting point a small Angular application that does not have any routing yet. We are then going to learn how to configure the Angular Router from scratch. We will assume no prior Angular Router knowledge, as we explain everything from first principles.

We will start by introducing the essential router concepts such as route configuration, paths, router outlets, and router navigation links. From these essential concepts, will build a much more advanced routing scenario.

We will learn how to build a master-detail with detail-to-detail navigation scenario, and we will use this example to introduce all the advanced routing concepts and powerful features that the Angular Router offers us.

This will include lazy loading modules, data pre-fetching with Resolvers, protecting route access with Guards, custom pre-loading strategies, secondary outlets (auxiliary routes), and much more.

Table of Contents

This course covers the following topics:

    What is a single page application?
    Best practices for router configuration: home route, page not found route, etc.
    Essential Router configurations concepts: paths, components, and outlets
    Essential Router navigation concepts; the routerLink and routerLinkActive directives
    Relative vs Absolute routing best practices
    Understanding Path matching and router configuration order
    Router Path and Query parameters
    Router redirects
    Deep linking with the Angular router: master-detail with detail-to-detail navigation scenario
    Understanding router snapshots vs router observables
    Lazy loaded routes
    Route data pre-loading with Resolvers
    Router module pre-loading strategies, building a custom preloading strategy
    Router Guards - CanActivate and CanActivateChild Authentication Guards
    Preventing route exits with CanDeactivate guards
    Checking if a lazy-loaded module can be loaded with CanLoad
    Router Loading Indicator
    Understanding Router Hash location strategy
    Secondary router outlets and auxiliary routes
    The router module extra configuration options: enableTracing, scrollPositionRestoration, paramsInheritanceStrategy, etc.
    
    
Angular Router In Depth - Development Environment Setup
What are Single Page Applications? Advantages and Downsides
What is the Angular Router? Essential Concepts (Routes, Paths and Outlets)
Router Essential Concepts - The routerLink and routerLinkActive Directives
How to setup Lazy Loading with the Angular Router
Angular Router Lazy Loaded Modules - Runtime Demo
Angular Router Configuration - Best Practices
Router Path Variables - Variable Target Routes with the Router Link Directive
Angular Router Resolver Services - Building a Linkable Page in a SPA
Angular Router Loading Indicator - Detecting Route Transitions and Lazy Loading
Angular Router Child Routes - Step-by-Step Explanation
Angular Router Child Routes Demo - The Lessons List Component
Master Detail Implementation - Routing from the Master to the Detail Component
Implementing the Lesson Detail Resolver
Programmatic Router Navigation with the Router Service
Understanding Route Snapshots vs Route Observables - When to Use Each and Why
Router Guards Section Introduction - Authentication Store Review
CanActivate Router Guards - Authentication Guards
Understanding CanActivateChild Guards
CanDeactivate Router Guards - A Practical Example
Angular Router CanLoad Guards
What is an Angular Router Preloading Strategy?
Angular Router Custom Preloading Strategy
Angular Router Query Parameters - Demo 
