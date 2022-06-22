"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3361],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Create Pipeline in Advanced Mode",description:"Create Pipeline in Advanced Mode\n"},s=void 0,c={unversionedId:"UserManuals/create-pipeline-in-advanced-mode",id:"UserManuals/create-pipeline-in-advanced-mode",title:"Create Pipeline in Advanced Mode",description:"Create Pipeline in Advanced Mode\n",source:"@site/docs/04-UserManuals/create-pipeline-in-advanced-mode.md",sourceDirName:"04-UserManuals",slug:"/UserManuals/create-pipeline-in-advanced-mode",permalink:"/docs/UserManuals/create-pipeline-in-advanced-mode",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/04-UserManuals/create-pipeline-in-advanced-mode.md",tags:[],version:"current",frontMatter:{title:"Create Pipeline in Advanced Mode",description:"Create Pipeline in Advanced Mode\n"},sidebar:"docsSidebar",previous:{title:"Notifications",permalink:"/docs/UserManuals/NOTIFICATION"},next:{title:"GitHub User Guide v0.10.0",permalink:"/docs/UserManuals/github-user-guide-v0.10.0"}},p={},u=[{value:"Why advanced mode?",id:"why-advanced-mode",level:2},{value:"How to use advanced mode to create pipelines?",id:"how-to-use-advanced-mode-to-create-pipelines",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-advanced-mode"},"Why advanced mode?"),(0,i.kt)("p",null,"Advanced mode allows users to create any pipeline by writing JSON. This is useful for users who want to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitHub/GitLab repos or Jira projects within a single pipeline"),(0,i.kt)("li",{parentName:"ol"},"Have fine-grained control over what entities to collect or what subtasks to run for each plugin"),(0,i.kt)("li",{parentName:"ol"},"Orchestrate a complex pipeline that consists of multiple stages of plugins.")),(0,i.kt)("p",null,"Advanced mode gives the most flexibility to users by exposing the JSON API."),(0,i.kt)("h2",{id:"how-to-use-advanced-mode-to-create-pipelines"},"How to use advanced mode to create pipelines?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Visit the "Create Pipeline Run" page on ',(0,i.kt)("inlineCode",{parentName:"li"},"config-ui"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2908155/164569669-698da2f2-47c1-457b-b7da-39dfa7963e09.png",alt:"image"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},'Scroll to the bottom and toggle on the "Advanced Mode" button')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2908155/164570039-befb86e2-c400-48fe-8867-da44654194bd.png",alt:"image"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The pipeline editor expects a 2D array of plugins. The first dimension represents different stages of the pipeline and the second dimension describes the plugins in each stage. Stages run in sequential order and plugins within the same stage runs in parallel. We provide some templates for users to get started. Please also see the next section for some examples.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2908155/164576122-fc015fea-ca4a-48f2-b2f5-6f1fae1ab73c.png",alt:"image"})),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Collect multiple GitLab repos sequentially.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When there're multiple collection tasks against a single data source, we recommend running these tasks sequentially since the collection speed is mostly limited by the API rate limit of the data source.\nRunning multiple tasks against the same data source is unlikely to speed up the process and may overwhelm the data source.")),(0,i.kt)("p",null,"Below is an example for collecting 2 GitLab repos sequentially. It has 2 stages, each contains a GitLab task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 15238074\n      }\n    }\n  ],\n  [\n    {\n      "Plugin": "gitlab",\n      "Options": {\n        "projectId": 11624398\n      }\n    }\n  ]\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Collect a GitHub repo and a Jira board in parallel")),(0,i.kt)("p",null,"Below is an example for collecting a GitHub repo and a Jira board in parallel. It has a single stage with a GitHub task and a Jira task. Since users can configure multiple Jira connection, it's required to pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"connectionId")," for Jira task to specify which connection to use."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  [\n    {\n      "Plugin": "github",\n      "Options": {\n        "repo": "lake",\n        "owner": "merico-dev"\n      }\n    },\n    {\n      "Plugin": "jira",\n      "Options": {\n        "connectionId": 1,\n        "boardId": 76\n      }\n    }\n  ]\n]\n')))}m.isMDXComponent=!0}}]);