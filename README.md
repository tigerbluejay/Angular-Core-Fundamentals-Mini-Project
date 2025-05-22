# Angular Core Fundamentals Mini Project

This repository serves as a foundational project accompanying the Angular University's Angular Core Deep Dive Introduction course. It is designed to help developers understand and apply core Angular concepts through practical implementation.

The Angular Core Fundamentals Mini Project is a hands-on application built using Angular CLI version 17.0.9. It aims to reinforce key Angular principles such as component-based architecture, data binding, routing, and service integration. By working through this project, developers can gain a deeper understanding of Angular's core functionalities and best practices.

This Angular standalone component app serves as a learning or demonstration project focused on core Angular features. It includes a root component with basic interactivity—such as handling user input events to dynamically update the view model. The app routes are modularized (via app.routes.ts), and its structure follows Angular's modern standalone component approach, making it lightweight and educational. It’s ideal for understanding Angular fundamentals like data binding, event handling, routing, and component-driven architecture.

## What you can learn directly from this project:

#### Data Binding
In app.component.ts, you have a property data.title that is updated by the method onKeyUp(newTitle: string).
This shows two-way interaction: the view updates when data.title changes, and user input updates the model through the event handler.

#### Event Handling
The method onLogoClicked() triggers an alert when called.
This shows how the component can respond to user events like clicks.

#### Component-driven architecture
The root component AppComponent is a standalone component.
It imports Angular core modules like CommonModule and RouterOutlet, demonstrating modular and reusable components.
The component uses a template (app.component.html) and styles (app.component.css), illustrating separation of concerns.

### Prerequisites
Node.js (version 14 or higher)
Angular CLI (version 17.0.9)
Package Manager: npm or yarn

## Project Structure
src/ - Contains the main application source code, including components, services, and modules.
server.ts - A custom server configuration file (if applicable).
angular.json - Angular workspace configuration.
package.json - Lists project dependencies and scripts.
tsconfig*.json - TypeScript configuration files.

### Available Scripts
ng serve - Compiles and serves the application, rebuilding on file changes.
ng build - Compiles the application into an output directory.
ng test - Runs unit tests via Karma.
ng lint - Lints the codebase using defined linting rules.

## Learning Objectives

By engaging with this project, you will:

- Understand the structure and organization of an Angular application.
- Implement components, directives, and services.
- Configure routing and navigation.
- Manage state and data flow within the application.
- Apply best practices for code organization and modularization.
