"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[429],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(s,".").concat(d)]||c[d]||g[d]||o;return a?t.createElement(m,l(l({ref:n},p),{},{components:a})):t.createElement(m,l({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6053:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(7462),r=(a(7294),a(3905));const o={},l="Setup Angular Workspaces",i={unversionedId:"architecture/angular/tutorials/setup-angular-workspaces",id:"architecture/angular/tutorials/setup-angular-workspaces",title:"Setup Angular Workspaces",description:"In this tutorial you will learn how to setup an angular project with the angular project structure instead of the classial single app setup. Along the way you will learn how you can setup a project where you can develop multiple angular applications and libraries based on the same project structure. It allows you to manage your angular library and applications from a single source.",source:"@site/docs/architecture/angular/tutorials/setup-angular-workspaces.md",sourceDirName:"architecture/angular/tutorials",slug:"/architecture/angular/tutorials/setup-angular-workspaces",permalink:"/software-engineering-toolbox/docs/architecture/angular/tutorials/setup-angular-workspaces",draft:!1,editUrl:"https://github.com/wasdJens/software-engineering-toolbox/docs/architecture/angular/tutorials/setup-angular-workspaces.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About Smart and Dumb Component Concept",permalink:"/software-engineering-toolbox/docs/architecture/angular/explanation/smart-and-dumb-components"},next:{title:"Software Engineering Intro",permalink:"/software-engineering-toolbox/docs/software-engineering/se-intro"}},s={},u=[{value:"Getting the tools",id:"getting-the-tools",level:2},{value:"Creating an angular workspace",id:"creating-an-angular-workspace",level:2},{value:"Adding a new angular project - Application",id:"adding-a-new-angular-project---application",level:2},{value:"Adding a new angular project - Library",id:"adding-a-new-angular-project---library",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function g(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-angular-workspaces"},"Setup Angular Workspaces"),(0,r.kt)("p",null,"In this tutorial you will learn how to setup an angular project with the angular project structure instead of the classial single app setup. Along the way you will learn how you can setup a project where you can develop multiple angular applications and libraries based on the same project structure. It allows you to manage your angular library and applications from a single source."),(0,r.kt)("h2",{id:"getting-the-tools"},"Getting the tools"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Nodejs on your system (",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"https://nodejs.org/en/"),")")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4d You can verify the installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"node -v")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm -v")," inside your terminal.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ node -v\nv16.14.0\n$ npm -v\n8.3.1\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Angular CLI (",(0,r.kt)("a",{parentName:"li",href:"https://angular.io/cli"},"https://angular.io/cli"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @angular/cli \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4d You can verify the installation by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ng version")," inside your terminal. Your output may be different from the example below!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ ng version\n\n     _                      _                 ____ _     ___\n    / \\   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|\n   / \u25b3 \\ | '_ \\ / _` | | | | |/ _` | '__|   | |   | |    | |\n  / ___ \\| | | | (_| | |_| | | (_| | |      | |___| |___ | |\n /_/   \\_\\_| |_|\\__, |\\__,_|_|\\__,_|_|       \\____|_____|___|\n                |___/\n    \n\nAngular CLI: 15.0.0\nNode: 16.14.0\nPackage Manager: npm 8.3.1\nOS: darwin arm64\n\nAngular: \n... \n\nPackage                      Version\n------------------------------------------------------\n@angular-devkit/architect    0.1500.0 (cli-only)\n@angular-devkit/core         15.0.0 (cli-only)\n@angular-devkit/schematics   15.0.0 (cli-only)\n@schematics/angular          15.0.0 (cli-only)\n")),(0,r.kt)("h2",{id:"creating-an-angular-workspace"},"Creating an angular workspace"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating an angular Workspace by running the following command. Replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"<your-workspace-name>")," with the name of your project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ng new <your-workspace-name> --no-create-application\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83e\udd14 The flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-create-application")," skips the default angular setup and does not create any application")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4d You can verify that everything works by checking your console output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE planb-sample-workspace/README.md (1074 bytes)\nCREATE planb-sample-workspace/.editorconfig (274 bytes)\nCREATE planb-sample-workspace/.gitignore (548 bytes)\nCREATE planb-sample-workspace/angular.json (139 bytes)\nCREATE planb-sample-workspace/package.json (1005 bytes)\nCREATE planb-sample-workspace/tsconfig.json (901 bytes)\nCREATE planb-sample-workspace/.vscode/extensions.json (130 bytes)\nCREATE planb-sample-workspace/.vscode/launch.json (474 bytes)\nCREATE planb-sample-workspace/.vscode/tasks.json (938 bytes)\n\u2714 Packages installed successfully.\nhint: Using 'master' as the name for the initial branch. This default branch name\nhint: is subject to change. To configure the initial branch name to use in all\nhint: of your new repositories, which will suppress this warning, call:\nhint: \nhint:   git config --global init.defaultBranch <name>\nhint: \nhint: Names commonly chosen instead of 'master' are 'main', 'trunk' and\nhint: 'development'. The just-created branch can be renamed via this command:\nhint: \nhint:   git branch -m <name>\n    Successfully initialized git.\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Navigate inside your new created workspace by running the following command: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd <your-workspace-name>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4d You should now have an empty angular project structure with a ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder, ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file and an ",(0,r.kt)("inlineCode",{parentName:"p"},"angular.json")," file.")),(0,r.kt)("h2",{id:"adding-a-new-angular-project---application"},"Adding a new angular project - Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Inside your workspace folder run the following command to generate a new angular application.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ng generate application <your-application-name>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"When asked to add Angular routing type in ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")),(0,r.kt)("li",{parentName:"ol"},"When asked which stylesheet format to use select ",(0,r.kt)("inlineCode",{parentName:"li"},"scss")," (You can navigate by using the arrow keys and pressing enter when over the selection)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4d You should now find a projects folder inside your angular workspace with a new folder ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-application-name>"),".")),(0,r.kt)("h2",{id:"adding-a-new-angular-project---library"},"Adding a new angular project - Library"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Inside your workspace folder run the following command to generate a new angular library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ng generate library <your-lib-name>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u270d\ufe0f Tip: name your application and library with the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," prefix at the end.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udc4d You should now have a second folder inside your projects folder with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-lib-name"),">. If you create just a library you will now also have a new folder inside of it.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You have now setup a new angular workspace with two projects inside of it. One is your client side application (app) and the other one is an angular library that you can share with different angular application. You have also learned how to use the angular cli to create new projects and add projects to an existing one."))}g.isMDXComponent=!0}}]);