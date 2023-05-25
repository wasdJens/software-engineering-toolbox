---
sidebar_position: 2
displayed_sidebar: seSidebar
---

# Coding Conventions

In this chapter we want to take a closer look at coding conventions and why such rules are useful when working on software projects. Most modern software projects include multiple people who work on the codebase. Coding conventions help us in skipping discussions about coding styles and the overall goal is to reduce the maintance effort.

The main takeaway from this chapter is that coding conventions help us in reducing the complexity of large software projects by having certain rules in place how our code should look like. 

## Problem Illustration

For a better understanding why coding conventions are important lets take a look at the following example (Written in Javascript - But the language is not really important!). 

- What issues do you see with the following code? 
- Can you spot how many times `msg` gets modified?

```js
var str = "hello";
var msg = "world";
if (str.indexOf("e") !== -1){for(var i=0;i<msg.length;i++){if(msg.charCodeAt(i)<90){msg=msg.replace(msg.charAt(i),String.fromCharCode(msg.charCodeAt(i)+32))}}}
console.log(msg + " " + str);
```

<details>
  <summary>Issues with the example</summary>

  <li>Everything is on the same line which makes it hard to understand the code at the first look</li>
  <li>The variables are all declared with `var` (Javascript specific)</li>
  <li>There are magic numbers inside the code which are not defined (What is `90` and `32`?)</li>
</details>

Now lets apply some simple coding conventions to structure the example above:

```js
var str = "hello";
var msg = "world";

if (str.indexOf("e") !== -1) {
  for (var i = 0; i < msg.length; i++) {
    if (msg.charCodeAt(i) < 90) {
      msg = msg.replace(msg.charAt(i), String.fromCharCode(msg.charCodeAt(i) + 32));
    }
  }
}

console.log(msg + " " + str);
```

- The code can now be read at the first glance
- Each statement has its own line which makes it easier for us to understand what the code is doing in each line
- We no longer modify the `msg` variable multiple times and instead have a single line that assigns the value to the variable

The code snippet still have issues that we can improve and for a beginner it is still not clear what the code actual does but at first sight it is now easier to understand and follow what the code block is doing.

## What are Coding Conventions?

Writing software solutions often includes multiple developers and other people that take part in the creation of a product. With more and more people the complexity of working together increases and can often lead to long discussions about how code should be written. Coding conventions are therefore a set of rules and guidelines that **all** persons in the project must follow to ensure a consistent code base. A coding convention can be anything that the team wants to enforce in their projects. You can see coding conventions as a style guide for your source code. 

A simple coding convention could look like this: 
- All `{` should be on the same line as the beginning statement

Example Snippets to illustrate this rule:

**Good:**
```js
  if (myNumber < treshold) {
    // do something
  }
```
**Bad:**
```js
  if (myNumber < treshold) 
  {
    // do something
  }
```

But who decides these rules and how are they enforced? For most modern programming languages there are already existing coding conventions maintained either by the community or large companies themself. Lets take a look at some existing coding conventions (Often called Style Guides)

- Google Java Style Guide https://google.github.io/styleguide/javaguide.html
- Microsoft C# Coding Conventions https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions
- Zalando RESTful API and Event Guidelines https://opensource.zalando.com/restful-api-guidelines/
- Chromium C++ style guide https://chromium.googlesource.com/chromium/src/+/HEAD/styleguide/c++/c++.md
- Nasa C++ Coding Standards and Style Guides https://ntrs.nasa.gov/citations/20080039927
- Microsoft REST API Guidelines https://github.com/microsoft/api-guidelines

As you can see there are different types of coding conventions based on the problem they try to solve. In the examples above for example you have to guidelines for RESTful API services (By Microsoft and Zalando) while others just describe how the code should look like. But all of them have the same goal: Each person that works in the project (or with the programming language) has the same understanding and certain rules need to be followed. From the examples above we can create the following guidelines that coding conventions try to answer:

1. Consistent naming conventions (e.g. custom names for variables, functions, classes, methods, constants, etc)
2. Consistent formatting (e.g. indenation, use of whitespace, bracket placement, etc.)
3. Comments (e.g. how to write comments, when to write comments, etc.)
4. Code structuring (e.g. how to structure your code, how to split your code into multiple files, etc.)
5. Error Handling (e.g. how to handle errors, how to throw errors, etc.)
6. Use of language features (when and how to declare variables, use loops, define functions, etc.)
7. Code quality (e.g. how to write clean code, how to write testable code, etc.)

## Why are Coding Conventions important?

Now that we have a basic understanding of what coding conventions are lets discuss some points why they are important and why you should use them in your projects.

- **Improved readability:** Consistent formatting improves code readability. A well structured codebase make it easier for people to understand the code and find errors. This is particulary important when you work in a team and multiple people work on the same codebase.
- **Simplified maintenance:** Finding errors and fixing them is easier if all code files are structured the same way. It is also easier for new team members to understand the codebase. Changes inside the codebase (Code Evolution) are easier to implement when large refactorings are already checked against existing rules.
- **Adherence to best practices** Most coding conventions are based on best practices that have established over the last years in the community and in companies. This improves the overall code quality since it avoids common errors and also vulnerabilities are checked against existing rules.
- **Improved collaboration** When all people inside a project have the same understanding of how code should look like it is easier to collaborate and work together. It also recudes long discussions with other team members in code reviews about personal preferences.

Software engineers spend a lot of time on maintaining existing software solutions. Coding conventions help us in better sharing the understanding of the code base. It is also often the case that different engineers are working on multiple projects and are maybe not the original authors. 

## How to use Coding Conventions?

As pointed out in the [What are Coding Conventions](#What-are-Coding-Conventions?) secton the question rises how to use coding conventions and how to enforce them? Who decides the rules and how are they communicated? We want to take a look at different sections how to start with coding conventions and how to work with them.

### Declare Coding Conventions

A good starting point is to use standards that are published either by the programming language itself (or in some cases recommended) or what standards large companies (e.g. google, microsoft, etc) are using. This is a good starting point since these standards are already used by a large community and are often well documented. Starting from a blank coding conventions page is not recommended because the amount of work it takes to define these rules is often underestimated. Also it is easier to work on a different project when you already know some basic coding conventions.

The next step is to decide on project specific rules. These rules include how you want to structure your folders, files and the file naming convention. Such coding conventions are also often already defined by either the programming language or the framework you are using to develop your software. For example the popular Javascript Framework "Angular" has its own coding style guides that you can follow (See https://angular.io/guide/styleguide). 

But how can you ensure that these coding conventions are followed by everyone? 

### Working with Coding Conventions

The most important part of coding conventions is that they can be applied automatically and are checked by some sort of tooling. It makes no sense that in code reviews the reviewer invests multiple hours checking if all source code files are following the correct format (e.g. indenation). Also when writing code it should be easy for me as a developer to have the correct code styling applied. Most modern software IDEs are offering solutions to automatically apply a certain coding styleguide (for example in visual studio code https://code.visualstudio.com/docs/editor/codebasics#_formatting). The next step then is to automatically verify coding conventions by having a tool that checks the codebase against the rules. This can be done by using a linter (e.g. eslint for javascript) or a static code analysis tool (e.g. sonarqube).

### Code Linters

Code linters are tools (programs) that can verify if a code base follows a set of rules. This therefore can be used to enforce our coding conventions (At least the ones that can be checked automatically). A linter can be used to check for example if all files are formatted correctly, if the naming conventions are followed or if the code is structured correctly.

- **Standards are followed:** Linters can help us to ensure that the code follows our coding conventions and that the code format is the same.
- **Reduce Errors:** Most linters have configurations that are catching commonly found programming errors. For example that variables are unused or that a variable is not defined.
- **Improve Code Quality:** Linters can also be used to check for code quality. For example if the code is testable or if the code is too complex. Linters can have certain rules that more than 15 ifs in a function are not allowed.
- **Reduce Time in checking Coding Conventions:** Linters can be used to automatically check if the code follows the coding conventions. This reduces the time that is needed to check the code manually.

Code linters are part of the static code analysises and can therefore improve the overall code quality. They analyze code for potential errors, bugs or violations of coding conventions. Linters define a pattern and rules (often in configuration files) that is then applied to all files inside the project. Lets take a look at some example linters:

- Checkstyle https://github.com/checkstyle/checkstyle (Checkstyle is a development tool to help programmers write Java code that adheres to a coding standard. By default it supports the Google Java Style Guide and Sun Code Conventions, but is highly configurable. It can be invoked with an ANT task and a command line program)
- ESLint https://eslint.org/  (ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.)
- StyleCop https://github.com/StyleCop/StyleCop (Analyzes C# source code to enforce a set of style and consistency rules.)
- EditorConfig https://editorconfig.org/ (EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems)

### Rules that can not be checked automatically

There are also coding conventions that can not be checked automatically and need to be verified by the developers themself. It is important to keep the amount of "custom rules" to a minimum to reduce the effort in code maintainability. A common example is complex code inside a single function. There are static code analyzers that can calculate (based on a set of rules) the complexity of a function but in most cases the team should decide together if a function should be split. This is why code reviews are so important - A lot of tasks can be done automatically but in the end the whole team is responsible for the code quality and a maintainable code base. 

### Where to document the Coding Conventions?

Coding conventions (And other guidelines) should be visible and easily accesable by all team members. Most projects often place a single `CONVENTIONS.md` or `GUIDELINES.md` markdown file in the root of the project and describe coding conventions used inside the project. Here you should also document if the project is based on any existing coding conventions. This is also the place to describe any custom coding convention the project uses and how to use them.

### Maintain Coding Conventions

Coding conventions should always be treated as a living document and the whole team needs to commit any decided convention. This is important in the beginning of the project. As a team you should decide on a base of coding conventions you wanna use (for example: The Java Style Guide from google) and then over time extend or customise existing rules so it fits your team needs. Modyifing coding conventions or adding new rules should always be done with a full review process and decision record why this change was done. It is also important that the full team agrees on the change and that the change is communicated to all team members.

Coding conventions are important as your architecture and should be treated as such. Making changes should be communicated long in advance and the advantages and disadvantegs should be disccussed beforehand. This is also the reason why it is often easier to stick to a set of coding conventions that is already widley used and documented.

## Conclusion

Coding conventions are important to ensure that the code base is maintainable and that the code is readable by all team members. Coding conventions should be treated as a living document and should be maintained over time. It is important that the whole team agrees on the coding conventions and that they are enforced by tooling. Coding conventions are a good starting point for a new project and should be defined in the beginning of the project.

All software projects should have at least a coding conventions guidelines and in best case a static code analysis tool to check them (e.g. a linter).

## Personal preferences

The following section describes some combinations of coding conventions that I personally like to use.

### Javascript Projects

- Prettier for the Code Format https://prettier.io/
- ESLint for the Code Linting https://eslint.org/ 
  - Often with custom extensions for the project I am working on for example: https://github.com/angular-eslint/angular-eslint
