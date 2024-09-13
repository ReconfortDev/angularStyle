# Angular SCSS Proficiency Project

## Objective

The goal of this project is to demonstrate proficiency with the Angular CLI and advanced SCSS features. It will assess your understanding of Angular's project structure, component-based architecture, and advanced CSS preprocessing techniques.

## ⚠️N.B
API I consumed is limited which means data will not be fetched on live link , You will have to clone project to use the Consume Api properly


## Livelink

https://angularsass.netlify.app/

## Project Overview

This Angular application is structured to include multiple components, advanced SCSS styling, and responsive design. It includes themes, SCSS mixins, and lazy-loaded modules, showcasing a wide range of Angular and SCSS features.

## Features

### 1. Angular CLI Setup
- The project was generated using Angular CLI to ensure best practices in file structure and project setup.

### 2. Components
The application consists of the following components:
- **Header Component:** Contains navigation and logo.
- **Footer Component:** Displays the footer information.
- **Shop Content Component:** The main body of the application.
- **Offline Components:** One child components exist within the main content area to demonstrate component hierarchy.
- **Online Components:** Two child components exist within the main content area to demonstrate component hierarchy.

### 3. SCSS Features
The project utilizes advanced SCSS features, including:
- **Variables:** Defined for colors, fonts, and spacing for easy theme customization.
- **Nesting:** SCSS nesting is used to apply styles scoped to specific components.
- **Mixins:** Reusable style patterns for common layout structures, such as flexbox and button styles.
- **Functions:** A custom SCSS function to dynamically calculate `rem` from `px`.
- **Extend/Inheritance:** For sharing common styles across components.
- **Partials:** Styles are split into multiple partial files for better organization.

### 4. Responsive Design
The application is fully responsive, adapting to both desktop and mobile screen sizes using media queries and flexible layouts.

### 5. Theme System
A theme system is implemented with at least two themes:
- **Light Theme**
- **Dark Theme**
  The themes are switchable using SCSS variables for color customization.

### 6. Custom Angular Directive
A custom Angular directive is implemented to demonstrate host binding for dynamically applying styles to components.

### 7. Angular CLI Commands
- **Component, Directive, and Service Generation:** Angular CLI was used to generate components, directives, and services to follow best practices.
- **Production Build:** The project can be built for production using the `ng build` command.
- **Unit Testing:** Unit tests are set up and can be run using the `ng test` command.
- **Linting:** Linting is configured to ensure code quality and can be run with the `ng lint` command.

### 8. Lazy Loading
At least one module is lazy-loaded to demonstrate the optimization of application performance.

### 9. Custom SCSS Mixin and Function
- **Custom Mixin:** A reusable mixin is created to apply common flexbox layout patterns.
- **Custom Function:** A SCSS function calculates `rem` values dynamically from `px` units.

### 10. Mobile Responsiveness
The application ensures full compatibility with mobile devices, utilizing responsive SCSS media queries for different screen sizes.

## Installation


To install and run the project locally:

1. Clone the repository:
   ```bash
   git clone git@github.com:ReconfortDev/angularStyle.git
   ```

2. Navigate to the project directory:
   ```bash
   cd angularStyle
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

   The application will run locally on `http://localhost:4200/`.


## Testing

To run unit tests:

```bash
npm test
```

## Linting

To lint the codebase:

```bash
ng lint
```

## Technologies Used

- **Angular CLI**
- **SCSS**
- **TypeScript**
