"use strict";(self.webpackChunktemp_web=self.webpackChunktemp_web||[]).push([[1935],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return b}});var r=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=u,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||o;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function b(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:u,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return i},toc:function(){return s},default:function(){return b}});var r=n(7462),u=n(3366),o=(n(7294),n(3905)),l=["components"],a={slug:"Use-of-yurtctl",title:"Yurtctl:make the native k8s cluster achieve edge computing capabilities",authors:["charleszheng44"],tags:["yurtctl"]},c=void 0,p={permalink:"/blog/Use-of-yurtctl",editUrl:"https://github.com/openyurtio/openyurt.io/tree/master/blog/blog/2020-06-08-Use-of-yurtctl.md",source:"@site/blog/2020-06-08-Use-of-yurtctl.md",title:"Yurtctl:make the native k8s cluster achieve edge computing capabilities",description:"image",date:"2020-06-08T00:00:00.000Z",formattedDate:"June 8, 2020",tags:[{label:"yurtctl",permalink:"/blog/tags/yurtctl"}],readingTime:8.82,truncated:!1,authors:[{name:"Chao Zheng",title:"Maintainer of OpenYrut",url:"https://github.com/charleszheng44",imageURL:"https://github.com/charleszheng44.png",key:"charleszheng44"}],prevItem:{title:"YurtHub Design Detail:edge autonomy of OpenYurt",permalink:"/blog/YurtHub-design-detail"},nextItem:{title:"OpenYurt:edge computing cloud native project",permalink:"/blog/Introduce-of-OpenYurt"}},i={authorsImageUrls:[void 0]},s=[{value:"OpenYurt\u4ecb\u7ecd",id:"openyurt\u4ecb\u7ecd",children:[],level:2},{value:"Yurtctl\uff1a\u4e00\u952e\u8ba9\u539f\u751fk8s\u96c6\u7fa4\u5177\u5907\u8fb9\u7f18\u8ba1\u7b97\u80fd\u529b",id:"yurtctl\u4e00\u952e\u8ba9\u539f\u751fk8s\u96c6\u7fa4\u5177\u5907\u8fb9\u7f18\u8ba1\u7b97\u80fd\u529b",children:[{value:"Yurtctl\u7684\u5de5\u4f5c\u539f\u7406",id:"yurtctl\u7684\u5de5\u4f5c\u539f\u7406",children:[],level:3}],level:2},{value:"\u6848\u4f8b\uff1a\u4e00\u952e\u8f6c\u6362OpenYurt\u96c6\u7fa4",id:"\u6848\u4f8b\u4e00\u952e\u8f6c\u6362openyurt\u96c6\u7fa4",children:[],level:2},{value:"what&#39;s Next",id:"whats-next",children:[],level:2},{value:"\u793e\u533a\u5efa\u8bbe",id:"\u793e\u533a\u5efa\u8bbe",children:[],level:2}],d={toc:s};function b(e){var t=e.components,a=(0,u.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(1214).Z})),(0,o.kt)("p",null,"\u968f\u7740\u7269\u8054\u7f51\u6280\u672f\u4ee5\u53ca 5G \u6280\u672f\u7684\u9ad8\u901f\u53d1\u5c55\uff0c\u5c06\u4e91\u8ba1\u7b97\u7684\u80fd\u529b\u5ef6\u4f38\u81f3\u8fb9\u7f18\u8bbe\u5907\u7aef\uff0c\u5e76\u901a\u8fc7\u4e2d\u5fc3\u8fdb\u884c\u7edf\u4e00\u4ea4\u4ed8\u3001\u7ba1\u63a7\uff0c\u5df2\u6210\u4e3a\u4e91\u8ba1\u7b97\u7684\u91cd\u8981\u53d1\u5c55\u8d8b\u52bf\u3002\u4e3a\u670d\u52a1\u66f4\u591a\u5f00\u53d1\u8005\u628a\u63e1\u8fd9\u4e00\u8d8b\u52bf\uff0c5\u670829\u65e5\uff0c\u963f\u91cc\u5df4\u5df4\u6b63\u5f0f\u5bf9\u5916\u5f00\u6e90\u4e86\u57fa\u4e8e ACK@Edge\uff08\u8fb9\u7f18\u96c6\u7fa4\u6258\u7ba1\u670d\u52a1\uff09\u7684\u4e91\u539f\u751f\u8fb9\u7f18\u8ba1\u7b97\u6846\u67b6 \u2014\u2014\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt"},"OpenYurt")),(0,o.kt)("p",null,"\u81ea OpenYurt \u5f00\u6e90\u4ee5\u6765\u53d7\u5230\u4e86\u5f00\u53d1\u8005\u7684\u5173\u6ce8\uff0c\u4eca\u5929\u8fd9\u7bc7\u6587\u7ae0\u5c06\u5e26\u5927\u5bb6\u5feb\u901f\u4e0a\u624b OpenYurt \uff0c\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 OpenYurt \u63d0\u4f9b\u7684\u547d\u4ee4\u884c\u7ba1\u7406\u5de5\u5177 Yurtctl\uff0c \u9ad8\u6548\u5feb\u901f\u5730\u90e8\u7f72 OpenYurt \u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"openyurt\u4ecb\u7ecd"},"OpenYurt\u4ecb\u7ecd"),(0,o.kt)("p",null,"OpenYurt \u4e3b\u6253\u201c\u4e91\u8fb9\u4e00\u4f53\u5316\u201d\u6982\u5ff5\uff0c\u4f9d\u6258 Kubernetes \u5f3a\u5927\u7684\u5bb9\u5668\u5e94\u7528\u7f16\u6392\u80fd\u529b\uff0c\u6ee1\u8db3\u4e86\u4e91\u8fb9\u4e00\u4f53\u5316\u7684\u5e94\u7528\u5206\u53d1\u3001\u4ea4\u4ed8\u3001\u548c\u7ba1\u63a7\u7684\u8bc9\u6c42\u3002\u76f8\u8f83\u4e8e\u5176\u4ed6\u57fa\u4e8e Kubernetes \u7684\u8fb9\u7f18\u8ba1\u7b97\u6846\u67b6\uff0cOpenYurt \u79c9\u6301\u7740\u201c\u6700\u5c0f\u4fee\u6539\u201d\u539f\u5219\uff0c\u901a\u8fc7\u5728\u8fb9\u7f18\u8282\u70b9\u5b89\u88c5 Yurthub \u7ec4\u4ef6\uff0c\u548c\u5728\u4e91\u7aef\u90e8\u7f72 Yurt-controller-manager\uff0c\u4fdd\u8bc1\u4e86\u5728\u5bf9 Kubernetes \u96f6\u4fb5\u5165\u7684\u60c5\u51b5\u4e0b\uff0c\u63d0\u4f9b\u7ba1\u7406\u8fb9\u7f18\u8ba1\u7b97\u5e94\u7528\u6240\u9700\u7684\u76f8\u5173\u80fd\u529b\u3002"),(0,o.kt)("p",null,"OpenYurt \u80fd\u5e2e\u7528\u6237\u89e3\u51b3\u5728\u6d77\u91cf\u8fb9\u3001\u7aef\u8d44\u6e90\u4e0a\u5b8c\u6210\u5927\u89c4\u6a21\u5e94\u7528\u4ea4\u4ed8\u3001\u8fd0\u7ef4\u3001\u7ba1\u63a7\u7684\u95ee\u9898\uff0c\u5e76\u63d0\u4f9b\u4e2d\u5fc3\u670d\u52a1\u4e0b\u6c89\u901a\u9053\uff0c\u5b9e\u73b0\u548c\u8fb9\u7f18\u8ba1\u7b97\u5e94\u7528\u7684\u65e0\u7f1d\u5bf9\u63a5\u3002\u5728\u8bbe\u8ba1 OpenYurt \u4e4b\u521d\uff0c\u6211\u4eec\u5c31\u975e\u5e38\u5f3a\u8c03\u4fdd\u6301\u7528\u6237\u4f53\u9a8c\u7684\u4e00\u81f4\u6027\uff0c\u4e0d\u589e\u52a0\u7528\u6237\u8fd0\u7ef4\u8d1f\u62c5\uff0c\u8ba9\u7528\u6237\u771f\u6b63\u65b9\u4fbf\u5730 \u201cExtending your native kubernetes to edge\u201d\u3002"),(0,o.kt)("h2",{id:"yurtctl\u4e00\u952e\u8ba9\u539f\u751fk8s\u96c6\u7fa4\u5177\u5907\u8fb9\u7f18\u8ba1\u7b97\u80fd\u529b"},"Yurtctl\uff1a\u4e00\u952e\u8ba9\u539f\u751fk8s\u96c6\u7fa4\u5177\u5907\u8fb9\u7f18\u8ba1\u7b97\u80fd\u529b"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9\u539f\u751f K8s \u96c6\u7fa4\u5177\u5907\u8fb9\u7f18\u8ba1\u7b97\u80fd\u529b\uff0cOpenYurt \u4ee5 addon \u4e3a\u8f7d\u4f53\uff0c\u975e\u4fb5\u5165\u5f0f\u7ed9\u539f\u751f K8s \u589e\u5f3a\u4e86\u5982\u4e0b\u80fd\u529b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fb9\u7f18\u81ea\u6cbb\u80fd\u529b\uff08YurtHub\uff1a\u5df2\u5f00\u6e90\uff09\uff0c\u4fdd\u8bc1\u5728\u5f31\u7f51\u6216\u8005\u91cd\u542f\u8282\u70b9\u7684\u60c5\u51b5\u4e0b\uff0c\u90e8\u7f72\u5728\u8fb9\u7f18\u8282\u70b9\u4e0a\u7684\u5e94\u7528\u4e5f\u80fd\u6b63\u5e38\u8fd0\u884c\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u4e91\u8fb9\u534f\u540c\u80fd\u529b\uff08\u5f85\u5f00\u6e90\uff09\uff0c\u901a\u8fc7\u4e91\u8fb9\u8fd0\u7ef4\u901a\u9053\u89e3\u51b3\u8fb9\u7f18\u7684\u8fd0\u7ef4\u9700\u6c42\uff0c\u540c\u65f6\u63d0\u4f9b\u4e91\u8fb9\u534f\u540c\u80fd\u529b\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5355\u5143\u5316\u7ba1\u7406\u80fd\u529b\uff08\u5f85\u5f00\u6e90\uff09\uff0c\u4e3a\u5206\u6563\u7684\u8fb9\u7f18\u8282\u70b9\uff0c\u8fb9\u7f18\u5e94\u7528\uff0c\u5e94\u7528\u95f4\u6d41\u91cf\u63d0\u4f9b\u5355\u5143\u5316\u95ed\u73af\u7ba1\u7406\u80fd\u529b\uff1b")),(0,o.kt)("p",null,"\u57fa\u4e8e\u8fc7\u5f80ACK@Edge\u7684\u7ebf\u4e0a\u8fd0\u7ef4\u7ecf\u9a8c\uff0c\u6211\u4eec\u5f00\u6e90\u4e86Yurtctl\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5e2e\u52a9\u5b9e\u73b0\u4e86\u539f\u751fKubernetes\u548cOpenYurt\u4e4b\u95f4\u7684\u65e0\u7f1d\u8f6c\u6362\u4ee5\u53ca\u5bf9OpenYurt\u76f8\u5173\u7ec4\u4ef6\u7684\u9ad8\u6548\u8fd0\u7ef4\u3002"),(0,o.kt)("h3",{id:"yurtctl\u7684\u5de5\u4f5c\u539f\u7406"},"Yurtctl\u7684\u5de5\u4f5c\u539f\u7406"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(5303).Z})),(0,o.kt)("p",null,"Yurtctl\u662f\u4e00\u4e2a\u4e2d\u5fc3\u5316\u7684\u7ba1\u63a7\u5de5\u5177\u3002\u5728 OpenYurt\u4e91\u8fb9\u4e00\u4f53\u7684\u67b6\u6784\u91cc\uff0cYurtctl \u5c06\u76f4\u63a5\u4e0e APIServer \u8fdb\u884c\u4ea4\u4e92\u3002\u5b83\u501f\u52a9\u539f\u751f Kubernetes\u7684Job workload\u5bf9\u6bcf\u4e2anode\u8fdb\u884c\u8fd0\u7ef4\u64cd\u4f5c\u3002\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728\u6267\u884c\u8f6c\u6362\uff08convert\uff09\u64cd\u4f5c\u65f6\uff0cYurtctl \u4f1a\u901a\u8fc7 Job \u5c06\u4e00\u4e2a servant Pod \u90e8\u7f72\u5230\u7528\u6237\u6307\u5b9a\u7684\u8fb9\u7f18\u8282\u70b9\u4e0a\u3002"),(0,o.kt)("p",null,"servant Pod \u91cc\u7684\u5bb9\u5668\u6267\u884c\u7684\u5177\u4f53\u64cd\u4f5c\u8bf7\u53c2\u8003\uff1a\uff08OpenYurt:release-v0.1-beta.1\uff5ev0.3\uff09\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openyurtio/openyurt/blob/release-v0.1-beta.1/config/yurtctl-servant/setup_edgenode"},"https://github.com/openyurtio/openyurt/blob/release-v0.1-beta.1/config/yurtctl-servant/setup_edgenode")),(0,o.kt)("p",null,"\u7531\u4e8e servant Pod \u9700\u8981\u76f4\u63a5\u64cd\u4f5c\u8282\u70b9 root \u7528\u6237\u7684\u6587\u4ef6\u7cfb\u7edf\uff08\u4f8b\u5982\u5c06 yurthub \u914d\u7f6e\u6587\u4ef6\u653e\u7f6e\u4e8e /etc/kubernetes/manifests \u76ee\u5f55\u4e0b\uff09\uff0c\u5e76\u4e14\u9700\u8981\u91cd\u7f6e\u7cfb\u7edf\u7ba1\u7406\u7a0b\u5e8f\uff08kubelet.service\uff09\uff0cservant Pod \u4e2d\u7684 container \u5c06\u88ab\u8d4b\u4e88 privileged \u6743\u9650\uff0c\u5141\u8bb8\u5176\u4e0e\u8282\u70b9\u5171\u4eab pid namespace\uff0c\u5e76\u5c06\u501f\u7531 nsenter \u547d\u4ee4\u8fdb\u5165\u8282\u70b9\u4e3b\u547d\u540d\u7a7a\u95f4\u5b8c\u6210\u76f8\u5173\u64cd\u4f5c\u3002\u5f53 servant Job \u6210\u529f\u6267\u884c\u540e\uff0cJob \u4f1a\u81ea\u52a8\u5220\u9664\u3002\u5982\u679c\u5931\u8d25\uff0cJob \u5219\u4f1a\u88ab\u4fdd\u7559\uff0c\u65b9\u4fbf\u8fd0\u7ef4\u4eba\u5458\u6392\u67e5\u9519\u8bef\u539f\u56e0\u3002\u501f\u7531\u8be5\u673a\u5236\uff0cYurtctl \u8fd8\u53ef\u5bf9 Yurthub \u8fdb\u884c\u66f4\u65b0\u6216\u8005\u5220\u9664\u3002"),(0,o.kt)("h2",{id:"\u6848\u4f8b\u4e00\u952e\u8f6c\u6362openyurt\u96c6\u7fa4"},"\u6848\u4f8b\uff1a\u4e00\u952e\u8f6c\u6362OpenYurt\u96c6\u7fa4"),(0,o.kt)("p",null,"###1\uff09\u83b7\u53d6yurtctl\nOpenYurt github \u4ed3\u5e93\u5305\u62ec\u4e86 yurtctl \u7684\u6e90\u7801\uff0c\u4e0b\u8f7d OpenYurt \u4ed3\u5e93\u4e4b\u540e\uff0c\u5373\u53ef\u901a\u8fc7\u7f16\u8bd1\u83b7\u5f97 yurtctl\uff0c\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make build WHAT=cmd/yurtctl\nhack/make-rules/build.sh cmd/yurtctl\nBuilding cmd/yurtctl\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u6210\u529f\u4e4b\u540e\uff0cyurtctl \u53ef\u6267\u884c\u6587\u4ef6\u5c31\u53ef\u4ee5\u5728 _output/bin/ \u76ee\u5f55\u4e0b\u627e\u5230\u3002 "),(0,o.kt)("p",null,"###2\uff09\u5c06Kubernetes\u8f6c\u6362\u4e3aOpenYurt\n\u5982\u679c\u6211\u4eec\u60f3\u5c06\u4e00\u4e2a\u53cc\u8282\u70b9\uff08node1 \u548c node2\uff09\u7684 Kubernetes \u96c6\u7fa4\u8f6c\u6362\u6210 OpenYurt \u96c6\u7fa4\uff0c\u5e76\u4e14\u53ea\u60f3\u8ba9 node2 \u6210\u4e3a\u81ea\u6cbb\u8fb9\u7f18\u8282\u70b9\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u6267\u884c yurtctl convert \u6765\u5b9e\u73b0\uff0c\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yurtctl convert --cloud-nodes node1 --provider ack\nI0603 14:34:33.714304   40825 convert.go:164] mark node1 as the cloud-node\nI0603 14:34:33.719816   40825 convert.go:172] mark node2 as the edge-node\nI0603 14:34:33.736609   40825 convert.go:198] deploy the yurt controller manager\nI0603 14:34:33.742272   40825 convert.go:210] deploying the yurt-hub and resetting the kubelet service...\nI0603 14:34:53.810165   40825 util.go:168] servant job(yurtctl-servant-convert-node2) has succeeded\n")),(0,o.kt)("p",null,"\u6210\u529f\u914d\u7f6e\u8282\u70b9\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u5c06\u8fb9\u7f18\u8282\u70b9\u6807\u8bb0\u4e3a\u81ea\u6cbb\u72b6\u6001\uff0c\u5177\u4f53\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yurtctl markautonomous # \u5982\u679c\u7528\u6237\u53ea\u60f3\u6807\u8bb0\u90e8\u5206\u8fb9\u7f18\u8282\u70b9\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 --autonomous-nodes \u9009\u9879\u6307\u5b9a\nI0602 11:22:05.610222   89160 markautonomous.go:149] mark node2 as autonomous\n")),(0,o.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u5c31\u53ef\u4ee5\u6d4b\u8bd5 node2 \u5728\u65ad\u7f51\u73af\u5883\u4e0b\u662f\u5426\u80fd\u5b9e\u73b0\u8282\u70b9\u81ea\u6cbb\u3002\u9996\u5148\uff0c\u5728 node2 \u4e0a\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5 pod\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl apply -f-<<EOF\napiVersion: v1\nkind: Pod\nmetadata:\n  name: bbox\nspec:\n  nodeName: node2\n  containers:\n  - image: busybox\n    command:\n    - top\n    name: bbox\nEOF\npod/bbox created\n")),(0,o.kt)("p",null,"\u767b\u9646\u5230 node2 \u4e0a\uff0c\u5c06 Yurthub \u7684 --server-addr \u53c2\u6570\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u4e0d\u53ef\u8bbf\u95ee\u7684\u5730\u5740\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo sed -i 's|--server-addr=.*|--server-addr=https://1.1.1.1:1111|' /etc/kubernetes/manifests/yurt-hub.yaml\n")),(0,o.kt)("p",null,"\u8010\u5fc3\u7b49\u5f85 40 \u79d2\uff0c\u6211\u4eec\u5c06\u89c2\u5bdf\u5230\uff0c\u5373\u4f7f node2 \u5df2\u7ecf\u5904\u4e8e NotReady \u72b6\u6001\uff0cpod1 \u4ecd\u7136\u5904\u4e8e Running \u72b6\u6001\u3002\u8fd9\u8bf4\u660e\u5f53\u8fb9\u7f18\u8282\u70b9\u5904\u4e8e\u81ea\u6cbb\u72b6\u6001\u65f6\uff0c\u5373\u4f7f node \u4e0d\u5728\u7ebf\uff0cPod \u4e5f\u4e0d\u4f1a\u88ab\u4e91\u7aef node controller \u9a71\u9010\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get node \nNAME           STATUS     ROLES    AGE   VERSION\nnode1          Ready      master   14m   v1.14.8\nnode2          NotReady   <none>   12m   v1.14.8\n$ kubectl get pod\nNAME   READY   STATUS    RESTARTS   AGE\nbbox   1/1     Running   0          5m12s\n")),(0,o.kt)("p",null,"\u8fd9\u65f6\u5982\u679c\u5c06 node2 \u91cd\u542f\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 docker ps \uff08\u5047\u8bbe\u8282\u70b9\u4f7f\u7528 docker \u4f5c\u4e3a container runtime\uff09\u547d\u4ee4\u6765\u9a8c\u8bc1 bbox Pod \u4f1a\u88ab\u91cd\u65b0\u62c9\u8d77\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker ps --format 'table {{.ID}}\\t{{.Image}}\\t{{.RunningFor}}' | grep busybox\nd0c8134fddc1        busybox          About a minutes ago\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u56e0\u4e3a Kubelet \u4f1a\u4ece Yurthub \u8bfb\u53d6\u7f13\u5b58\u7684\u6570\u636e\uff0c\u6062\u590d\u91cd\u542f\u524d\u7684Pod\u72b6\u6001\u3002\u8fd9\u90e8\u5206\u6280\u672f\u7ec6\u8282\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u7684\u6587\u7ae0\u91cc\u8be6\u7ec6\u4ecb\u7ecd\u3002"),(0,o.kt)("p",null,"###3\uff09\u5c06OpenYurt\u8f6c\u6362\u56deKubernetes\n\u76f8\u5bf9\u7684\uff0c\u901a\u8fc7\u8fd0\u884c yurtctl revert \u547d\u4ee4\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u4e00\u4e2a OpenYurt \u96c6\u7fa4\u8f6c\u6362\u56de Kubernetes \u96c6\u7fa4\u3002\u5047\u8bbe\u6211\u4eec\u60f3\u5c06\u4e0a\u8ff0\u53cc\u8282\u70b9 Kubernetes \u96c6\u7fa4\u8f6c\u6362\u56de Kubernetes \u6a21\u5f0f\uff0c\u90a3\u4e48\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\uff08\u8fd0\u884c\u8be5\u547d\u4ee4\u524d\uff0c\u8bf7\u5148\u5c06 node2 \u4e0a\u7684 yurthub \u91cd\u65b0\u8fde\u4e0a apiserver\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yurtctl revert\nI0603 14:38:55.522376   41016 revert.go:106] label alibabacloud.com/is-edge-worker is removed\nI0603 14:38:55.527998   41016 revert.go:116] yurt controller manager is removed\nI0603 14:38:55.548354   41016 revert.go:130] ServiceAccount node-controller is created\nI0603 14:39:05.572686   41016 util.go:168] servant job(yurtctl-servant-revert-node2) has succeeded\nI0603 14:39:05.572718   41016 revert.go:142] yurt-hub is removed, kubelet service is reset\n")),(0,o.kt)("p",null,"\u5982\u679c\u8fd8\u60f3\u4e86\u89e3\u66f4\u591a yurtctl \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u8bf7\u53c2\u8003 OpenYurt github \u4ed3\u5e93\u4e0b\u7684yurtctl\u7684\u6559\u7a0b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/openyurt/tree/master/docs/tutorial%E3%80%82"},"https://github.com/alibaba/openyurt/tree/master/docs/tutorial\u3002")),(0,o.kt)("h2",{id:"whats-next"},"what's Next"),(0,o.kt)("p",null,"Yurtctl \u76ee\u6807\u662f\u6210\u4e3a\u8fd0\u7ef4\u4eba\u5458\u7ba1\u7406 OpenYurt \u96c6\u7fa4\u7684\u6709\u529b\u5de5\u5177\u3002\u56e0\u6b64\u6211\u4eec\u4f1a\u6301\u7eed\u6f14\u8fdb Yurtctl \u4ee5\u652f\u6301 OpenYurt \u7684\u65b0\u529f\u80fd\u548c\u65b0\u589e\u7684\u8fd0\u7ef4\u6d41\u7a0b\u6216\u573a\u666f\u3002\u4f8b\u5982\uff0c\u4e0d\u4e45\u4e4b\u540e OpenYurt \u8fd8\u5c06\u5f00\u6e90 Yurttunnel\uff0cYurtunit \u7b49\u7ec4\u4ef6\uff0cYurtctl \u4e5f\u5c06\u5bf9\u8fd9\u4e9b\u7ec4\u4ef6\u63d0\u4f9b\u652f\u6301\u3002\u6211\u4eec\u540c\u65f6\u6b22\u8fce\u5927\u5bb6\u63d0\u51fa\u5bf9 Yurtctl \u7684\u9700\u6c42\uff0c\u4e00\u8d77\u52aa\u529b\u4f7f\u5176\u66f4\u52a0\u5b8c\u5584\u3002"),(0,o.kt)("h2",{id:"\u793e\u533a\u5efa\u8bbe"},"\u793e\u533a\u5efa\u8bbe"),(0,o.kt)("p",null,"OpenYurt \u793e\u533a\u6b22\u8fce\u65b0\u7528\u6237\u52a0\u5165\u548c\u53c2\u4e0e\u5171\u5efa\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Github issue \u83b7\u53d6\u6280\u672f\u652f\u6301\u3001\u62a5\u544a bug\u3001\u63d0\u51fa\u9700\u6c42\u610f\u89c1\u7b49\uff0c\u6216\u8005\u901a\u8fc7 OpenYurt \u7528\u6237\u9489\u9489\u7fa4\u76f4\u63a5\u548c core \u5f00\u53d1\u4eba\u5458\u53d6\u5f97\u8054\u7cfb\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/tQIIfwClRRmEYO9dE3znhw"},"\u539f\u6587\u94fe\u63a5")))}b.isMDXComponent=!0},1214:function(e,t,n){t.Z=n.p+"assets/images/OpenYurt-de0f93f0c16ddb05b6782cbe66107b22.png"},5303:function(e,t,n){t.Z=n.p+"assets/images/Yurtctl_convert-a9c53e14e22eb124ca818cd77d382cd8.png"}}]);