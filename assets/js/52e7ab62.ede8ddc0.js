"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[5717],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},745:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={title:"Create Recurring Pipelines",description:"Create Recurring Pipelines\n"},u=void 0,p={unversionedId:"UserManuals/recurring-pipeline",id:"UserManuals/recurring-pipeline",title:"Create Recurring Pipelines",description:"Create Recurring Pipelines\n",source:"@site/docs/04-UserManuals/recurring-pipeline.md",sourceDirName:"04-UserManuals",slug:"/UserManuals/recurring-pipeline",permalink:"/docs/UserManuals/recurring-pipeline",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/04-UserManuals/recurring-pipeline.md",tags:[],version:"current",frontMatter:{title:"Create Recurring Pipelines",description:"Create Recurring Pipelines\n"},sidebar:"docsSidebar",previous:{title:"GitHub User Guide v0.10.0",permalink:"/docs/UserManuals/github-user-guide-v0.10.0"},next:{title:"Domain Layer Schema",permalink:"/docs/DataModels/DevLakeDomainLayerSchema"}},c={},s=[{value:"How to create recurring pipelines?",id:"how-to-create-recurring-pipelines",level:2}],m={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-create-recurring-pipelines"},"How to create recurring pipelines?"),(0,a.kt)("p",null,"Once you've verified that a pipeline works, most likely you'll want to run that pipeline periodically to keep data fresh, and DevLake's pipeline blueprint feature have got you covered."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click 'Create Pipeline Run' and")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Toggle the plugins you'd like to run, here we use GitHub and GitExtractor plugin as an example"),(0,a.kt)("li",{parentName:"ul"},"Toggle on Automate Pipeline\n",(0,a.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/14050754/163596590-484e4300-b17e-4119-9818-52463c10b889.png",alt:"image"}))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Add Blueprint'. Fill in the form and 'Save Blueprint'."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NOTE"),": The schedule syntax is standard unix cron syntax, ",(0,a.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"Crontab.guru")," is an useful reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"IMPORANT"),": The scheduler is running using the ",(0,a.kt)("inlineCode",{parentName:"li"},"UTC")," timezone. If you want data collection to happen at 3 AM New York time (UTC-04:00) every day, use ",(0,a.kt)("strong",{parentName:"li"},"Custom Shedule")," and set it to ",(0,a.kt)("inlineCode",{parentName:"li"},"0 7 * * *"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163596655-db59e154-405f-4739-89f2-7dceab7341fe.png",alt:"image"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Save Blueprint'.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Pipeline Blueprints', you can view and edit the new blueprint in the blueprint list."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/14050754/163596773-4fb4237e-e3f2-4aef-993f-8a1499ca30e2.png",alt:"image"})))))}d.isMDXComponent=!0}}]);