"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[689],{3905:function(n,t,e){e.d(t,{Zo:function(){return k},kt:function(){return m}});var r=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)e=l[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)e=l[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var p=r.createContext({}),u=function(n){var t=r.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},k=function(n){var t=u(n.components);return r.createElement(p.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,l=n.originalType,p=n.parentName,k=i(n,["components","mdxType","originalType","parentName"]),s=u(e),m=a,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return e?r.createElement(g,o(o({ref:t},k),{},{components:e})):r.createElement(g,o({ref:t},k))}));function m(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var l=e.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=n,i.mdxType="string"==typeof n?n:a,o[1]=i;for(var u=2;u<l;u++)o[u]=e[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}s.displayName="MDXCreateElement"},512:function(n,t,e){e.r(t),e.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=e(7462),a=e(3366),l=(e(7294),e(3905)),o=["components"],i={slug:"deadlock-caused-by-using-ants",title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",authors:"warren",tags:["devlake","ants"]},p=void 0,u={permalink:"/zh/blog/deadlock-caused-by-using-ants",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/blog/2022-04-30-deadlock-caused-by-using-ants/index.md",source:"@site/blog/2022-04-30-deadlock-caused-by-using-ants/index.md",title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",description:"1. \u80cc\u666f",date:"2022-04-30T00:00:00.000Z",formattedDate:"2022\u5e744\u670830\u65e5",tags:[{label:"devlake",permalink:"/zh/blog/tags/devlake"},{label:"ants",permalink:"/zh/blog/tags/ants"}],readingTime:5.616666666666666,truncated:!0,authors:[{name:"\u9648\u6620\u521d",title:"Apache DevLake PPMC",url:"https://github.com/warren830",imageURL:"https://github.com/warren830.png",key:"warren"}],frontMatter:{slug:"deadlock-caused-by-using-ants",title:"\u4f7f\u7528ants\u5f15\u53d1\u7684\u6b7b\u9501",authors:"warren",tags:["devlake","ants"]},prevItem:{title:"Apache DevLake\u662f\u600e\u4e48\u8dd1\u8d77\u6765\u7684",permalink:"/zh/blog/how-apache-devlake-runs"}},k={authorsImageUrls:[void 0]},c=[{value:"1. \u80cc\u666f",id:"1-\u80cc\u666f",level:3},{value:"2. \u6df1\u5165ants\u5206\u6790",id:"2-\u6df1\u5165ants\u5206\u6790",level:3},{value:"3. \u6700\u540e\u804a\u51e0\u53e5\u81ea\u5df1\u5bf9\u4e8egolang\u5185\u5b58\u6a21\u578b\u7684\u7406\u89e3",id:"3-\u6700\u540e\u804a\u51e0\u53e5\u81ea\u5df1\u5bf9\u4e8egolang\u5185\u5b58\u6a21\u578b\u7684\u7406\u89e3",level:3},{value:"4. \u89e3\u51b3\u65b9\u6848",id:"4-\u89e3\u51b3\u65b9\u6848",level:3},{value:"5. \u5bf9\u6bd4\u4e0d\u540csize\u7684pool\u548c\u4e24\u4e2apool\u7684\u5185\u5b58\uff08alloc_space\uff09\u548cCPU\u5f00\u9500",id:"5-\u5bf9\u6bd4\u4e0d\u540csize\u7684pool\u548c\u4e24\u4e2apool\u7684\u5185\u5b58alloc_space\u548ccpu\u5f00\u9500",level:3}],s={toc:c};function m(n){var t=n.components,i=(0,a.Z)(n,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1-\u80cc\u666f"},"1. \u80cc\u666f"),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u9879\u76ee\u6709\u5927\u91cf\u7684api\u8bf7\u6c42\u7531goroutine\u5b8c\u6210\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5f15\u5165\u4e00\u4e2apool\u6765\u8282\u7701\u9891\u7e41\u521b\u5efagoroutine\u6240\u9020\u6210\u7684\u7684\u5f00\u9500\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u66f4\u7b80\u6613\u7684\u8c03\u5ea6goroutine\uff0c\u5728\u5bf9github\u4e0a\u591a\u4e2a\u534f\u7a0b\u6c60\u7684\u5bf9\u6bd4\u540e\uff0c\u6211\u4eec\u6700\u7ec8\u9009\u5b9a\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://github.com/panjf2000/ants"},"ants"),"\u4f5c\u4e3a\u6211\u4eec\u7684\u8c03\u5ea6\u7ba1\u7406pool\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6700\u8fd1\u5728\u6d4b\u8bd5\u4e2d\u5076\u7136\u53d1\u73b0\u7cfb\u7edf\u51fa\u73b0\u4e86\u201c\u6b7b\u9501\u201d\u7684\u60c5\u51b5\uff0c\u8fdb\u800c\u91c7\u53d6\u65ad\u7f51\u7684\u65b9\u5f0f\u53d1\u73b0\u201c\u6b7b\u9501\u201d\u5728\u6781\u7aef\u60c5\u51b5\u4e0b\u662f\u7a33\u5b9a\u51fa\u73b0\uff0c\u7ecf\u8fc7\u6ee1\u7bc7\u7684log\uff0cbreak\uff0c\u6700\u7ec8\u628a\u95ee\u9898\u5b9a\u4f4d\u5230\u4e86ants\u7684submit\u65b9\u6cd5\u3002\u8fd9\u4e2a\u95ee\u9898\u6765\u81ea\u4e8e\u5728\u4f7f\u7528ants pool\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u5b9e\u73b0\u91cd\u8bd5\uff0c\u6211\u4eec\u5728\u65b9\u6cd5\u4e2d\u53c8\u9012\u5f52\u8c03\u7528\u4e86\u65b9\u6cd5\u672c\u8eab\uff0c\u4e5f\u5c31\u662fsubmit task\u5185\u90e8\u53c8submit\u4e00\u4e2atask\uff0c\u4e0b\u9762\u662f\u7b80\u5316\u540e\u7684\u4ee3\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Go"},"func (apiClient *ApiAsyncClient) DoAsync(\n\n   retry int,\n\n) error {\n\n   return apiClient.scheduler.Submit(func() error {\n\n      _, err := apiClient.Do()\n\n      if err != nil {\n\n         if retry < apiClient.maxRetry {\n\n            return apiClient.DoAsync(retry+1)\n\n         }\n\n      }\n\n      return err\n\n   })\n\n}\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u5757\u4e2d\uff0c\u53ef\u4ee5\u770b\u5230return apiClient.DoAsync(retry+1)\u8fd9\u4e00\u6b65\u9012\u5f52\u8c03\u7528\u4e86\u81ea\u5df1\uff0c\u5373\u5728submit\u4e2d\u53c8\u8c03\u7528\u4e86submit"),(0,l.kt)("h3",{id:"2-\u6df1\u5165ants\u5206\u6790"},"2. \u6df1\u5165ants\u5206\u6790"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:e(3220).Z,width:"333",height:"231"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e0a\u9762submit\u6e90\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u9996\u5148\u662f\u901a\u8fc7retrieveWorker\u56de\u53bb\u4e00\u4e2aworker\uff0c\u7136\u540e\u628atask\u653e\u5165\u5230worker\u7684task channel\u5f53\u4e2d\uff0c\u5f88\u7b80\u5355\uff0c\u4e5f\u770b\u4e0d\u51fa\u6765\u4e3a\u4ec0\u4e48\u4f1a\u201cdead lock\u201d\uff0c\u6ca1\u529e\u6cd5\uff0c\u53bb\u5230retrieveWorker")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Go"},"// retrieveWorker returns a available worker to run the tasks.\n\nfunc (p *Pool) retrieveWorker() (w *goWorker) {\n\n spawnWorker := func() {\n\n  w = p.workerCache.Get().(*goWorker)\n\n  w.run()\n\n }\n\n\n\n p.lock.Lock()\n\n\n\n w = p.workers.detach()\n\n if w != nil { // first try to fetch the worker from the queue\n\n  p.lock.Unlock()\n\n } else if capacity := p.Cap(); capacity == -1 || capacity > p.Running() {\n\n  // if the worker queue is empty and we don't run out of the pool capacity,\n\n  // then just spawn a new worker goroutine.\n\n  p.lock.Unlock()\n\n  spawnWorker()\n\n } else { // otherwise, we'll have to keep them blocked and wait for at least one worker to be put back into pool.\n\n  if p.options.Nonblocking {\n\n   p.lock.Unlock()\n\n   return\n\n  }\n\n retry:\n\n  if p.options.MaxBlockingTasks != 0 && p.blockingNum >= p.options.MaxBlockingTasks {\n\n   p.lock.Unlock()\n\n   return\n\n  }\n\n  p.blockingNum++\n\n  p.cond.Wait() // block and wait for an available worker\n\n  p.blockingNum--\n\n  var nw int\n\n  if nw = p.Running(); nw == 0 { // awakened by the scavenger\n\n   p.lock.Unlock()\n\n   if !p.IsClosed() {\n\n    spawnWorker()\n\n   }\n\n   return\n\n  }\n\n  if w = p.workers.detach(); w == nil {\n\n   if nw < capacity {\n\n    p.lock.Unlock()\n\n    spawnWorker()\n\n    return\n\n   }\n\n   goto retry\n\n  }\n\n\n\n  p.lock.Unlock()\n\n }\n\n return\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:e(6695).Z,width:"1280",height:"481"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u65b9\u6cd5\u7684\u5927\u6982\u6d41\u7a0b\u5c31\u662f\u5148\u5bf9pool\u4e0a\u9501\uff0c\u7136\u540e\u4ecepool\u7684worker\u961f\u5217\u4e2d\u53bb\u53d6\u4e00\u4e2aworker\uff0cdetach\u5176\u5b9e\u5c31\u662f\u8fd4\u56de\u4e86worker\uff0c\u5e76\u4e14\u628a\u8fd9\u4e2aworker\u4ece\u961f\u5217\u4e2d\u5220\u9664\u6389\u4e86\uff0c\u63a5\u4e0b\u6765\u6709\u4e09\u79cd\u60c5\u51b5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6210\u529f\u53d6\u5230worker\uff0c\u89e3\u9501p\uff0c\u8fd4\u56de\u53d6\u5230\u7684worker"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679cworker\u961f\u5217\u662f\u7a7a\u7684\u5e76\u4e14pool\u7684\u5bb9\u91cf\u6ca1\u6709\u8017\u5c3d\uff0c\u5c31\u89e3\u9501pool\u5e76\u751f\u6210\u4e00\u4e2a\u65b0\u7684worker\u8fd4\u56de\u7ed9submit"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u540e\u4e00\u79cd\u60c5\u51b5\u5c31\u662fpool\u5bb9\u91cf\u8017\u5c3d\u4e86\uff0cworker\u961f\u5217\u4e5f\u6ca1\u6709\u7a7a\u95f2\u7684worker\uff0c\u90a3\u5c31\u8981\u6839\u636e\u6211\u4eec\u521b\u5efapool\u65f6\u4f20\u5165\u7684\u53c2\u6570\u6765\u51b3\u5b9a\u4e0b\u4e00\u6b65\u60c5\u51b5\u4e86",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u8bf4\u4e00\u4e0b\u8fd9\u91cc\u6d89\u53ca\u7684\u4e24\u4e2a\u91cd\u8981\u53c2\u6570\uff0c\u4e00\u4e2a\u662fcapacity\uff0c\u8fd9\u4e2a\u503c\u5982\u679c\u5728new pool\u7684\u65f6\u5019\u4e0d\u8bbe\u7f6e\uff0c\u4f1a\u662fMaxInt32\uff0c\u76f8\u5f53\u4e8e\u65e0\u9650\u5236\u7684goroutine\uff0c\u4f46\u662f\u60c5\u51b5\u4e0d\u540c\u7684\u662f\uff0c\u6211\u4eec\u4f1a\u9996\u5148\u590d\u7528\u7a7a\u95f2\u7684worker\uff0c\u8fd8\u53ef\u4ee5\u5b9a\u65f6\u6e05\u7a7a\u591a\u4f59\u7684\u7a7a\u95f2worker\uff0cblockingNum\u4e3a\u6b63\u5728\u7b49\u5f85\u7684goroutine\uff0c\u521d\u59cb\u4e3a0"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e\u4e86Nonblocking\u4e3atrue\uff0c\u76f4\u63a5\u89e3\u9501\uff0c\u8fd4\u56denil\uff0csubmit\u5c31\u4f1a\u76f4\u63a5\u8fd4\u56de\u4e00\u4e2a\u9519\u8befErrPoolOverload\uff0c\u4ee3\u8868pool\u8d85\u8d1f\u8377\u4e86\uff0c\u4e0d\u505a\u4efb\u4f55\u5176\u4ed6\u5904\u7406\uff0csubmit\u5931\u8d25\uff0c\u7ed3\u675f~~"),(0,l.kt)("li",{parentName:"ul"},"\u53e6\u4e00\u79cd\u60c5\u51b5\u5c31\u662f\u6ca1\u6709\u8bbe\u7f6eNonblocking\uff0c\u9ed8\u8ba4\u4e3afalse\uff0c\u5c31\u8fdb\u5165\u5230\u4e86\u4e00\u4e2aretry\u6807\u7b7e\uff0c\u8fd9\u91cc\u9762\u5c31\u6d89\u53ca\u5230\u4e86\u53e6\u4e00\u4e2a\u521b\u5efapool\u65f6\u5019\u7684\u53c2\u6570MaxBlockingTasks\uff0c\u8fd9\u4e2aMaxBlockingTasks\u5c31\u662f\u4e00\u4e2athreshold",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u5224\u65ad\u5982\u679c\u8bbe\u7f6e\u4e86MaxBlockingTasks\u5e76\u4e14\u5f53\u524dblockingNum\u5927\u4e8e\u6216\u8005\u7b49\u4e8eMaxBlockingTasks\uff0c\u90a3\u4e48\u76f4\u63a5\u89e3\u9501pool\u5e76\u4e14\u8fd4\u56denil\uff0csubmit\u5931\u8d25\uff0c\u7ed3\u675f~~"),(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u7684\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u5219\u9996\u5148blockingNum++\uff0c\u7136\u540e\u5f00\u59cbwait\u4e00\u76f4\u5230\u6709worker\u6478\u5b8c\u9c7c\u56de\u6765\u5de5\u4f5c\uff0c\u5219blockingNum--\u3002\u95ee\u9898\u5c31\u5728\u8fd9\u91cc\u4e86\uff01\uff01\uff01\u5982\u679c\u6240\u6709\u7684worker\u90fd\u5728\u5de5\u4f5c\uff08\u4e5f\u8bb8\u662f\u770b\u8d77\u6765\u5728\u5de5\u4f5c\uff0c\u5b9e\u9645\u4e0a\u5728\u6478\u9c7c\uff09\uff0c\u8fd9\u91cc\u5c31\u4f1a\u4e00\u76f4wait()\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u81ea\u5df1\u4ee3\u7801\u4e2dreturn\u540e\u9762\u7684DoAsync\u4f1a\u4e00\u76f4wait()\uff0c\u4ece\u6211\u4eec\u81ea\u5df1\u7684\u9879\u76ee\u6765\u8bb2\uff0c\u5c31\u662f\u6240\u6709worker\u8fd9\u4e2a\u65f6\u5019\u90fd\u5728submit\u4e00\u4e2a\u65b0\u7684task\u5230\u540c\u4e00\u4e2apool\u4e2d\uff0c\u800c\u8fd9\u4e2a\u65f6\u5019pool\u5df2\u7ecf\u6ee1\u4e86\uff0c\u5bfc\u81f4\u6240\u6709worker\u90fd\u963b\u585e\u5728\u4e86\u8fd9\u91cc\uff0c\u201c\u6b7b\u9501\u201d\u4e5f\u5c31\u51fa\u73b0\u4e86")))))))),(0,l.kt)("h3",{id:"3-\u6700\u540e\u804a\u51e0\u53e5\u81ea\u5df1\u5bf9\u4e8egolang\u5185\u5b58\u6a21\u578b\u7684\u7406\u89e3"},"3. \u6700\u540e\u804a\u51e0\u53e5\u81ea\u5df1\u5bf9\u4e8egolang\u5185\u5b58\u6a21\u578b\u7684\u7406\u89e3"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"go\u7684\u8c03\u5ea6\u6d41\u7a0b\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u751f\u4ea7-\u6d88\u8d39\u7684\u8fc7\u7a0b\uff0c\u6211\u4eec\u5229\u7528go func\u662f\u751f\u4ea7\u4e86\u4e00\u4e2atask\u653e\u5230\u961f\u5217\u4e2d\uff0c\u7531\u7cfb\u7edf\u7ebf\u7a0b\u4ece\u961f\u5217\u4e2d\u83b7\u53d6\u534f\u7a0b\u7136\u540e\u6267\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u8bb2\u5230go\u7684\u8c03\u5ea6\u6d41\u7a0b\uff0c\u54b1\u4eec\u5c31\u4e0d\u80fd\u4e0d\u8bf4\u4e00\u4e0bgo\u7684MPG\uff08\u5206\u522b\u89e3\u91ca\u4e00\u4e0b\uff0c\u5c31\u4e0d\u505a\u6df1\u5165\u4e86\uff0c\u5982\u679c\u6709\u4eba\u770b\uff0c\u540e\u671f\u518d\u52aa\u529b\u6574\u7406\u4e00\u4efd\u8be6\u7ec6\u804a\u804a\uff09",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"M \u4ee3\u8868\u7740\u4e00\u4e2a\u5185\u6838\u7ebf\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u79f0\u4e3a\u4e00\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\uff0c\u6240\u6709\u7684goroutine\u90fd\u662f\u8dd1\u5728M\u4e4b\u4e0a\u7684"),(0,l.kt)("li",{parentName:"ol"},"P\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u903b\u8f91\u5904\u7406\u5668\uff0c\u4e3b\u8981\u7531P\u6765\u6267\u884cgoroutine"),(0,l.kt)("li",{parentName:"ol"},"G\u5c31\u662fgo func\u5c01\u88c5\u7684\u8fd9\u4e2a\u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ol"},"\u771f\u6b63\u7684\u5e76\u53d1\u6570\u662f\u7531GOMAXPROCS\u6765\u51b3\u5b9a\u7684\uff0c\u5e76\u4e0d\u662f\u63d0\u4ea4\u591a\u5c11goroutine\uff0c\u5e76\u53d1\u6570\u5c31\u662f\u591a\u5c11\uff0cGOMAXPROCS\u662f\u7531\u673a\u5668\u7684cpu\u6838\u6570\u6765\u51b3\u5b9a\u7684"),(0,l.kt)("li",{parentName:"ol"},"\u6240\u4ee5\u56de\u5230\u7b2c2\u90e8\u5206\uff0cpool.cond.wait\u7b49\u5f85\u7684\u662f\u7ed1\u5b9a\u4e0a\u4e00\u4e2agoroutine\uff0c\u548c\u5176\u4ed6\u8bed\u8a00\u7684\u7b49\u5f85\u7ebf\u7a0b\u5177\u6709\u76f8\u4f3c\u5374\u5b8c\u5168\u4e0d\u540c\u7684\u610f\u4e49\uff0c\u6bcf\u4e00\u4e2aworker\u662f\u4e00\u4e2aG\uff0cpool\u4e5f\u5c31\u662f\u4e00\u4e2a\u961f\u5217\uff0c\u800cM\u4f1a\u4ece\u961f\u5217\u4e2d\u83b7\u53d6\u53ef\u4ee5\u6267\u884c\u7684G\uff0c\u5f53\u6240\u6709\u7684G\u90fd\u5728\u7b49\u5f85\u521b\u5efa\u65b0\u7684G\u65f6\uff0cM\u5168\u90e8\u90fd\u5904\u4e8e\u7a7a\u95f2\u72b6\u6001")),(0,l.kt)("h3",{id:"4-\u89e3\u51b3\u65b9\u6848"},"4. \u89e3\u51b3\u65b9\u6848"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f53\u7136\uff0c\u6700\u9760\u8c31\u7684\u5e94\u8be5\u662f\u5c3d\u91cf\u907f\u514d\u7c7b\u4f3c\u8fd9\u6837\u7684\u9012\u5f52\u8c03\u7528\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u5b9e\u5728\u4e0d\u884c\uff0c\u53ef\u4ee5\u8003\u8651\u6dfb\u52a0\u4e00\u4e2asub pool\uff0c\u4f5c\u4e3a\u6b21\u7ea7\u961f\u5217\uff0c\u8ba9\u9012\u5f52\u751f\u6210\u7684G\u53ef\u4ee5\u5728sub pool\u91cc\u7b49\u5f85\u7a7a\u95f2\u7684M\u6765\u5904\u7406")),(0,l.kt)("h3",{id:"5-\u5bf9\u6bd4\u4e0d\u540csize\u7684pool\u548c\u4e24\u4e2apool\u7684\u5185\u5b58alloc_space\u548ccpu\u5f00\u9500"},"5. \u5bf9\u6bd4\u4e0d\u540csize\u7684pool\u548c\u4e24\u4e2apool\u7684\u5185\u5b58\uff08alloc_space\uff09\u548cCPU\u5f00\u9500"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Pool size"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU(ants)%"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU(runtime.gcBgMarkWorker)%"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU(runtime.mcall)%"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58(runtime.allocm)kB"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58(runtime.gcBgMarkWorker)kB"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58(root)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two pools(158, 632)"),(0,l.kt)("td",{parentName:"tr",align:null},"27.98"),(0,l.kt)("td",{parentName:"tr",align:null},"7.73"),(0,l.kt)("td",{parentName:"tr",align:null},"25.44"),(0,l.kt)("td",{parentName:"tr",align:null},"2050.25"),(0,l.kt)("td",{parentName:"tr",align:null},"512.02"),(0,l.kt)("td",{parentName:"tr",align:null},"8798")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pool 158"),(0,l.kt)("td",{parentName:"tr",align:null},"28.11"),(0,l.kt)("td",{parentName:"tr",align:null},"6.61"),(0,l.kt)("td",{parentName:"tr",align:null},"25.08"),(0,l.kt)("td",{parentName:"tr",align:null},"2050"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"6661")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pool 1580"),(0,l.kt)("td",{parentName:"tr",align:null},"27.41"),(0,l.kt)("td",{parentName:"tr",align:null},"12.96"),(0,l.kt)("td",{parentName:"tr",align:null},"23.17"),(0,l.kt)("td",{parentName:"tr",align:null},"3075.38"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"10264")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pool 7900"),(0,l.kt)("td",{parentName:"tr",align:null},"25.89"),(0,l.kt)("td",{parentName:"tr",align:null},"9.82"),(0,l.kt)("td",{parentName:"tr",align:null},"22.52"),(0,l.kt)("td",{parentName:"tr",align:null},"3587.94"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"5725")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pool 790000"),(0,l.kt)("td",{parentName:"tr",align:null},"25.12"),(0,l.kt)("td",{parentName:"tr",align:null},"12.79"),(0,l.kt)("td",{parentName:"tr",align:null},"23.44"),(0,l.kt)("td",{parentName:"tr",align:null},"3075.38"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"9748")))),(0,l.kt)("p",null,"runtime.gcBgMarkWorker: \u7528\u4e8e\u6807\u8bb0\u5783\u573e\u5bf9\u8c61"),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u8868\u683c\u53ef\u4ee5\u770b\u5230\uff0c\u53ef\u80fd\u5b58\u5728\u591a\u6838\u7684\u5f71\u54cd\uff0c\u6240\u4ee5\u5bf9\u4e8e\u6211\u4eec\u516c\u53f8\u73b0\u5728\u9700\u8981\u7684\u5e76\u53d1\u6570\u91cf\u7ea7\u6765\u8bb2\uff0cpool\u7684size\u5bf9\u7cfb\u7edf\u5f71\u54cd\u5e76\u4e0d\u5927\u3002"))}m.isMDXComponent=!0},3220:function(n,t,e){t.Z=e.p+"assets/images/ants_source_code_1-dbc90cd562952b6434590b8ae7121255.png"},6695:function(n,t,e){t.Z=e.p+"assets/images/ants_source_code_flowchart-6f51973ac906b9029502a2c9063df6ad.png"}}]);