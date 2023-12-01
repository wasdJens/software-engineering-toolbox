"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[1674],{2791:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(5893),l=a(1151);const o={},s="Setup Angular Workspaces",i={id:"learning/Angular/Tutorials/setup-angular-workspaces",title:"Setup Angular Workspaces",description:"In this tutorial you will learn how to setup an angular project with the angular project structure instead of the classial single app setup. Along the way you will learn how you can setup a project where you can develop multiple angular applications and libraries based on the same project structure. It allows you to manage your angular library and applications from a single source.",source:"@site/docs/learning/Angular/Tutorials/setup-angular-workspaces.md",sourceDirName:"learning/Angular/Tutorials",slug:"/learning/Angular/Tutorials/setup-angular-workspaces",permalink:"/software-engineering-toolbox/docs/learning/Angular/Tutorials/setup-angular-workspaces",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About Smart and Dumb Component Concept",permalink:"/software-engineering-toolbox/docs/learning/Angular/Explanation/smart-and-dumb-components"},next:{title:"Introduction",permalink:"/software-engineering-toolbox/docs/software-engineering/intro"}},t={},c=[{value:"Getting the tools",id:"getting-the-tools",level:2},{value:"Creating an angular workspace",id:"creating-an-angular-workspace",level:2},{value:"Adding a new angular project - Application",id:"adding-a-new-angular-project---application",level:2},{value:"Adding a new angular project - Library",id:"adding-a-new-angular-project---library",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"setup-angular-workspaces",children:"Setup Angular Workspaces"}),"\n",(0,r.jsx)(e.p,{children:"In this tutorial you will learn how to setup an angular project with the angular project structure instead of the classial single app setup. Along the way you will learn how you can setup a project where you can develop multiple angular applications and libraries based on the same project structure. It allows you to manage your angular library and applications from a single source."}),"\n",(0,r.jsx)(e.h2,{id:"getting-the-tools",children:"Getting the tools"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Install Nodejs on your system (",(0,r.jsx)(e.a,{href:"https://nodejs.org/en/",children:"https://nodejs.org/en/"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83d\udc4d You can verify the installation by running ",(0,r.jsx)(e.code,{children:"node -v"})," and ",(0,r.jsx)(e.code,{children:"npm -v"})," inside your terminal."]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-console",children:"$ node -v\nv16.14.0\n$ npm -v\n8.3.1\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:["Install the Angular CLI (",(0,r.jsx)(e.a,{href:"https://angular.io/cli",children:"https://angular.io/cli"}),")"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"npm install -g @angular/cli \n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83d\udc4d You can verify the installation by running ",(0,r.jsx)(e.code,{children:"ng version"})," inside your terminal. Your output may be different from the example below!"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-console",children:"$ ng version\n\n     _                      _                 ____ _     ___\n    / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|\n   / \u25b3 \\ | '_ \\ / _` | | | | |/ _` | '__|   | |   | |    | |\n  / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |\n /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|\n                |___/\n    \n\nAngular CLI: 15.0.0\nNode: 16.14.0\nPackage Manager: npm 8.3.1\nOS: darwin arm64\n\nAngular: \n... \n\nPackage                      Version\n------------------------------------------------------\n@angular-devkit/architect    0.1500.0 (cli-only)\n@angular-devkit/core         15.0.0 (cli-only)\n@angular-devkit/schematics   15.0.0 (cli-only)\n@schematics/angular          15.0.0 (cli-only)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"creating-an-angular-workspace",children:"Creating an angular workspace"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Creating an angular Workspace by running the following command. Replace the ",(0,r.jsx)(e.code,{children:"<your-workspace-name>"})," with the name of your project"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"ng new <your-workspace-name> --no-create-application\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83e\udd14 The flag ",(0,r.jsx)(e.code,{children:"--no-create-application"})," skips the default angular setup and does not create any application"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\ud83d\udc4d You can verify that everything works by checking your console output"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"CREATE planb-sample-workspace/README.md (1074 bytes)\nCREATE planb-sample-workspace/.editorconfig (274 bytes)\nCREATE planb-sample-workspace/.gitignore (548 bytes)\nCREATE planb-sample-workspace/angular.json (139 bytes)\nCREATE planb-sample-workspace/package.json (1005 bytes)\nCREATE planb-sample-workspace/tsconfig.json (901 bytes)\nCREATE planb-sample-workspace/.vscode/extensions.json (130 bytes)\nCREATE planb-sample-workspace/.vscode/launch.json (474 bytes)\nCREATE planb-sample-workspace/.vscode/tasks.json (938 bytes)\n\u2714 Packages installed successfully.\nhint: Using 'master' as the name for the initial branch. This default branch name\nhint: is subject to change. To configure the initial branch name to use in all\nhint: of your new repositories, which will suppress this warning, call:\nhint: \nhint: \tgit config --global init.defaultBranch <name>\nhint: \nhint: Names commonly chosen instead of 'master' are 'main', 'trunk' and\nhint: 'development'. The just-created branch can be renamed via this command:\nhint: \nhint: \tgit branch -m <name>\n    Successfully initialized git.\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsx)(e.li,{children:"Navigate inside your new created workspace by running the following command:"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"cd <your-workspace-name>\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83d\udc4d You should now have an empty angular project structure with a ",(0,r.jsx)(e.code,{children:"node_modules"})," folder, ",(0,r.jsx)(e.code,{children:"package.json"})," file and an ",(0,r.jsx)(e.code,{children:"angular.json"})," file."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"adding-a-new-angular-project---application",children:"Adding a new angular project - Application"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Inside your workspace folder run the following command to generate a new angular application."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"ng generate application <your-application-name>\n"})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:["When asked to add Angular routing type in ",(0,r.jsx)(e.code,{children:"yes"})]}),"\n",(0,r.jsxs)(e.li,{children:["When asked which stylesheet format to use select ",(0,r.jsx)(e.code,{children:"scss"})," (You can navigate by using the arrow keys and pressing enter when over the selection)"]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83d\udc4d You should now find a projects folder inside your angular workspace with a new folder ",(0,r.jsx)(e.code,{children:"<your-application-name>"}),"."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"adding-a-new-angular-project---library",children:"Adding a new angular project - Library"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Inside your workspace folder run the following command to generate a new angular library."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"ng generate library <your-lib-name>\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u270d\ufe0f Tip: name your application and library with the ",(0,r.jsx)(e.code,{children:"lib"})," and ",(0,r.jsx)(e.code,{children:"client"})," prefix at the end."]}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\ud83d\udc4d You should now have a second folder inside your projects folder with the name ",(0,r.jsx)(e.code,{children:"<your-lib-name"}),">. If you create just a library you will now also have a new folder inside of it."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(e.p,{children:"You have now setup a new angular workspace with two projects inside of it. One is your client side application (app) and the other one is an angular library that you can share with different angular application. You have also learned how to use the angular cli to create new projects and add projects to an existing one."})]})}function u(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>i,a:()=>s});var r=a(7294);const l={},o=r.createContext(l);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);