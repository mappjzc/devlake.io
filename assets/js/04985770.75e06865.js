"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6241],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Deploy Locally",description:"The steps to install DevLake locally.\n"},c=void 0,u={unversionedId:"QuickStart/LocalSetup",id:"QuickStart/LocalSetup",title:"Deploy Locally",description:"The steps to install DevLake locally.\n",source:"@site/docs/02-QuickStart/01-LocalSetup.md",sourceDirName:"02-QuickStart",slug:"/QuickStart/LocalSetup",permalink:"/docs/QuickStart/LocalSetup",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/02-QuickStart/01-LocalSetup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deploy Locally",description:"The steps to install DevLake locally.\n"},sidebar:"docsSidebar",previous:{title:"Roadmap",permalink:"/docs/Overview/Roadmap"},next:{title:"Deploy to Kubernates",permalink:"/docs/QuickStart/KubernetesSetup"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Launch DevLake",id:"launch-devlake",level:4},{value:"Configure data connections and collect data",id:"configure-data-connections-and-collect-data",level:4},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+"))),(0,i.kt)("h4",{id:"launch-devlake"},"Launch DevLake"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Commands written ",(0,i.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,i.kt)("li",{parentName:"ol"},"Rename ",(0,i.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,i.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,i.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,i.kt)("h4",{id:"configure-data-connections-and-collect-data"},"Configure data connections and collect data"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Visit ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure data connections.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Navigate to desired plugins on the Integrations page"),(0,i.kt)("li",{parentName:"ul"},"Please reference the following for more details on how to configure each one:",(0,i.kt)("br",null),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Plugins/jira"},"Jira")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Plugins/github"},"GitHub"),": For users who'd like to collect GitHub data, we recommend reading our ",(0,i.kt)("a",{parentName:"li",href:"/docs/UserManuals/github-user-guide-v0.10.0"},"GitHub data collection guide")," which covers the following steps in detail."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Plugins/gitlab"},"GitLab")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Plugins/jenkins"},"Jenkins")))),(0,i.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,i.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," takes a while to fully boot up. if ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui")," complaining about api being unreachable, please wait a few seconds and try refreshing the page."))),(0,i.kt)("li",{parentName:"ol"},"Create pipelines to trigger data collection in ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left when done, or visit ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,i.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,i.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We use ",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," as a visualization tool to build charts for the ",(0,i.kt)("a",{parentName:"li",href:"/docs/DataModels/DataSupport"},"data")," stored in our database."),(0,i.kt)("li",{parentName:"ul"},"Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,i.kt)("li",{parentName:"ul"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/UserManuals/GRAFANA"},"Grafana Doc"),"."))),(0,i.kt)("li",{parentName:"ol"},"To synchronize data periodically, users can set up recurring pipelines with DevLake's ",(0,i.kt)("a",{parentName:"li",href:"/docs/UserManuals/recurring-pipeline"},"pipeline blueprint")," for details.")),(0,i.kt)("h4",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,i.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema. We recommend users to deploy a new instance if needed."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);