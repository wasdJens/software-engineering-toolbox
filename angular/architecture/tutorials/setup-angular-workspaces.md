# Setup Angular Workspaces

In this tutorial you will learn how to setup an angular project with the angular project structure instead of the classial single app setup. Along the way you will learn how you can setup a project where you can develop multiple angular applications and libraries based on the same project structure. It allows you to manage your angular library and applications from a single source.

## Getting the tools

1. Install Nodejs on your system (https://nodejs.org/en/)

> 👍 You can verify the installation by running `node -v` and `npm -v` inside your terminal.

```console
$ node -v
v16.14.0
$ npm -v
8.3.1
```

2. Install the Angular CLI (https://angular.io/cli)

```shell
npm install -g @angular/cli 
```

> 👍 You can verify the installation by running `ng version` inside your terminal. Your output may be different from the example below!

```console
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.0.0
Node: 16.14.0
Package Manager: npm 8.3.1
OS: darwin arm64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1500.0 (cli-only)
@angular-devkit/core         15.0.0 (cli-only)
@angular-devkit/schematics   15.0.0 (cli-only)
@schematics/angular          15.0.0 (cli-only)
```

## Creating an angular workspace

1. Creating an angular Workspace by running the following command. Replace the `<your-workspace-name>` with the name of your project

```shell
ng new <your-workspace-name> --no-create-application
```

> 🤔 The flag `--no-create-application` skips the default angular setup and does not create any application

> 👍 You can verify that everything works by checking your console output

```shell
CREATE planb-sample-workspace/README.md (1074 bytes)
CREATE planb-sample-workspace/.editorconfig (274 bytes)
CREATE planb-sample-workspace/.gitignore (548 bytes)
CREATE planb-sample-workspace/angular.json (139 bytes)
CREATE planb-sample-workspace/package.json (1005 bytes)
CREATE planb-sample-workspace/tsconfig.json (901 bytes)
CREATE planb-sample-workspace/.vscode/extensions.json (130 bytes)
CREATE planb-sample-workspace/.vscode/launch.json (474 bytes)
CREATE planb-sample-workspace/.vscode/tasks.json (938 bytes)
✔ Packages installed successfully.
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint: 	git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint: 	git branch -m <name>
    Successfully initialized git.
```

2. Navigate inside your new created workspace by running the following command: 

```shell
cd <your-workspace-name>
```

> 👍 You should now have an empty angular project structure with a `node_modules` folder, `package.json` file and an `angular.json` file.

## Adding a new angular project - Application

1. Inside your workspace folder run the following command to generate a new angular application.

```shell
ng generate application <your-application-name>
```

2. When asked to add Angular routing type in `yes`
3. When asked which stylesheet format to use select `scss` (You can navigate by using the arrow keys and pressing enter when over the selection)

> 👍 You should now find a projects folder inside your angular workspace with a new folder `<your-application-name>`.

## Adding a new angular project - Library

1. Inside your workspace folder run the following command to generate a new angular library.

```shell
ng generate library <your-lib-name>
```

> ✍️ Tip: name your application and library with the `lib` and `client` prefix at the end.

> 👍 You should now have a second folder inside your projects folder with the name `<your-lib-name`>. If you create just a library you will now also have a new folder inside of it.

## Conclusion

You have now setup a new angular workspace with two projects inside of it. One is your client side application (app) and the other one is an angular library that you can share with different angular application. You have also learned how to use the angular cli to create new projects and add projects to an existing one.