# About Smart and Dumb Component Concept

## Background
The reason for the smart and dumb component approach is because in modern web applications user interfaces and interactions are getting more complex. The user interface looks the same to the user but is displayed with different kinds of data (e.g. filters or a different context but with the same view).

> 🖥️ Sample HTML Dashboard to illustrate the problem: Open the `smart-and-dumb-components.html` page inside the `/assets` folder in your browser.

**Given the sample provided above:** 
In a typical software product I am logged in with my current user. Depending on my role I may have different permissions then others. For example I may be able to see the `Administration` in the navigation or I dont. But this does not change how the navigation is displayed to me as a user. The same visual styles are applied but I have less information visible for me.

The same can be applied to the `Machine Park` table. Depending on my current filter, user permission or from which other view I came before I get a different amount of information shown but displayed in the same way.

This leads us to a software product where the view is always the same but the information which I get displayed are different. Based on different context or other information.

## Smart and Dumb Components

Components complete different kinds of tasks. There are components that are responsible for the view => The look and feel of the application. Other components are just for the data aggregation part and communication with others and dont care how the the information is displayed. 

**Dumb Component:** A dumb component in this context does not care what kind of information should be displayed - It just defines how the information is displayed.

**Smart Component:** A smart component does not care how the information is displayed - It just aggreates all required information by communicating with other components / services and passes the information to a dumb component which then displays the information to the user. 

A smart component can not exist without one or multiple dumb components. Dumb components can not exist without smart components that provide the information needed. This concept can then even be moved up by combining smart and dumb components to create a new smart component that is a dumb component of a even larger smart component. 

The goal is to create a seperate of concerns between components. It is possible to have a single component that is responsible for one part of the view. But when the same view is used for multiple screens the component needs more logic to handle different use cases. 

Dumb components on the other hand allow to use the same view with multiple use cases without touching the dumb component. A smart component can aggregate new information and the data is displayed the same way as before. A visual change to the view can easily be achieved by switching one dumb component with another one while using the same smart component for the data aggregation part. Updating a single dumb component also updates the view on all other views without updating multiple components.