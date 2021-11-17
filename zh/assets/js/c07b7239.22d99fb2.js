"use strict";(self.webpackChunktemp_web=self.webpackChunktemp_web||[]).push([[1132],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),h=l,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var i=2;i<o;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6367:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],u={title:"Manually Setup"},s=void 0,i={unversionedId:"manually-setup",id:"manually-setup",isDocsHomePage:!1,title:"Manually Setup",description:"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a",source:"@site/docs/manually-setup.md",sourceDirName:".",slug:"/manually-setup",permalink:"/zh/docs/manually-setup",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/manually-setup.md",tags:[],version:"current",lastUpdatedBy:"Peeknut",lastUpdatedAt:1637131172,formattedLastUpdatedAt:"2021/11/17",frontMatter:{title:"Manually Setup"},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh/docs/"},next:{title:"Architecture",permalink:"/zh/docs/core-concepts/architecture"}},c=[{value:"Label cloud nodes and edge nodes",id:"label-cloud-nodes-and-edge-nodes",children:[],level:2},{value:"Setup Yurt-controller-manager",id:"setup-yurt-controller-manager",children:[],level:2},{value:"Disable the default nodelifecycle controller",id:"disable-the-default-nodelifecycle-controller",children:[],level:2},{value:"Setup Yurthub",id:"setup-yurthub",children:[],level:2},{value:"Setup Yurt-tunnel (Optional)",id:"setup-yurt-tunnel-optional",children:[],level:2},{value:"Reset the Kubelet",id:"reset-the-kubelet",children:[],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial shows how to setup OpenYurt cluster manually. The cluster used in this tutorial is a\ntwo-nodes ACK(version 1.14.8) cluster, and all the yaml files used in this tutorial can be found\nat ",(0,o.kt)("inlineCode",{parentName:"p"},"config/setup/"),"."),(0,o.kt)("h2",{id:"label-cloud-nodes-and-edge-nodes"},"Label cloud nodes and edge nodes"),(0,o.kt)("p",null,"When disconnected from the apiserver, only the pod running on the autonomous edge node will\nbe prevented from being evicted from nodes. Therefore, we first need to divide nodes into two categories, the cloud node\nand the edge node, by using label ",(0,o.kt)("inlineCode",{parentName:"p"},"alibabacloud.com/is-edge-worker"),". Assume that the given Kubernetes cluster\nhas two nodes,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME                     STATUS   ROLES    AGE     VERSION\nus-west-1.192.168.0.87   Ready    <none>   3d23h   v1.14.8-aliyun.1\nus-west-1.192.168.0.88   Ready    <none>   3d23h   v1.14.8-aliyun.1\n")),(0,o.kt)("p",null,"and we will use node ",(0,o.kt)("inlineCode",{parentName:"p"},"us-west-1.192.168.0.87")," as the cloud node."),(0,o.kt)("p",null,"We label the cloud node with value ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),","),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.87 alibabacloud.com/is-edge-worker=false\nnode/us-west-1.192.168.0.87 labeled\n")),(0,o.kt)("p",null,"and the edge node with value ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl label node us-west-1.192.168.0.88 alibabacloud.com/is-edge-worker=true\nnode/us-west-1.192.168.0.88 labeled\n")),(0,o.kt)("p",null,"To active the autonomous mode, we annotate the edge node by typing following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl annotate node us-west-1.192.168.0.88 node.beta.alibabacloud.com/autonomy=true\nnode/us-west-1.192.168.0.88 annotated\n")),(0,o.kt)("h2",{id:"setup-yurt-controller-manager"},"Setup Yurt-controller-manager"),(0,o.kt)("p",null,"Next, we need to deploy the Yurt controller manager, which prevents apiserver from evicting pods running on the\nautonomous edge nodes during disconnection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kc ap -f config/setup/yurt-controller-manager.yaml\ndeployment.apps/yurt-controller-manager created\n")),(0,o.kt)("h2",{id:"disable-the-default-nodelifecycle-controller"},"Disable the default nodelifecycle controller"),(0,o.kt)("p",null,"To allow the yurt-controller-mamanger to work properly, we need to turn off the default nodelifecycle controller.\nThe nodelifecycle controller can be disabled by restarting the kube-controller-manager with a proper ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers"),"\noption. Assume that the original option looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner"),", to disable\nthe nodelifecycle controller, we change the option to ",(0,o.kt)("inlineCode",{parentName:"p"},"--controllers=*,bootstrapsigner,tokencleaner,-nodelifecycle"),"."),(0,o.kt)("p",null,"If the kube-controller-manager is deployed as a static pod on the master node, and you have the permission to log in\nto the master node, then above operations can be done by revising the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifests/kube-controller-manager.yaml"),". After revision, the kube-controller-manager will be\nrestarted automatically."),(0,o.kt)("h2",{id:"setup-yurthub"},"Setup Yurthub"),(0,o.kt)("p",null,"After the Yurt controller manager is up and running, we will setup Yurthub as the static pod. Before proceeding,\nplease get the apiserver's address (i.e., ip:port), which will be used to replace the place holder in the template\nfile ",(0,o.kt)("inlineCode",{parentName:"p"},"config/setup/yurthub.yaml"),". In the following command, we assume that the address of the apiserver is 1.2.3.4:5678"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat config/setup/yurthub.yaml |\nsed 's|__pki_path__|/etc/kubernetes/pki|;\ns|__kubernetes_service_host__|1.2.3.4|;\ns|__kubernetes_service_port_https__|5678|' > /tmp/yurthub-ack.yaml &&\nscp -i <yourt-ssh-identity-file> /tmp/yurthub-ack.yaml root@us-west-1.192.168.0.88:/etc/kubernetes/manifests\n")),(0,o.kt)("p",null,"and the Yurthub will be ready in minutes."),(0,o.kt)("h2",{id:"setup-yurt-tunnel-optional"},"Setup Yurt-tunnel (Optional)"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/best-practices/yurt-tunnel"},"document #5-setup-the-yurt-tunnel-manually")," to setup Yurttunnel manually."),(0,o.kt)("h2",{id:"reset-the-kubelet"},"Reset the Kubelet"),(0,o.kt)("p",null,"By now, we have setup all required components for the OpenYurt cluster, next, we only need to reset the\nkubelet service to let it access the apiserver through the yurthub (The following steps assume that we are logged\nin to the edge node as the root user)."),(0,o.kt)("p",null,"To do so, we create a new kubeconfig file for the kubelet service based on the original one (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/kubelet.confg"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir -p /var/lib/openyurt && cp /etc/kubernetes/kubelet.conf /var/lib/openyurt\n")),(0,o.kt)("p",null,"As kubelet will connect to the Yurthub through http, we need to remove unnecessary field from the newly created kubeconfig file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i '/certificate-authority-data/d;\n    /client-key/d;\n    /client-certificate/d;\n    /user:/d;\n    s/ https.*/ http:\\/\\/127.0.0.1:10261/g' /var/lib/openyurt/kubelet.conf\n")),(0,o.kt)("p",null,"In order to let kubelet to use the revised kubeconfig, we edit the drop-in file of the kubelet\nservice (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i "s|KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=\\/etc\\/kubernetes\\/bootstrap-kubelet.conf\\ --kubeconfig=\\/etc\\/kubernetes\\/kubelet.conf|KUBELET_KUBECONFIG_ARGS=--kubeconfig=\\/var\\/lib\\/openyurt\\/kubelet.conf|g" \\\n    /etc/systemd/system/kubelet.service.d/10-kubeadm.conf\n')),(0,o.kt)("p",null,"Finally, we restart the kubelet service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# assume we are logged in to the edge node already\n$ systemctl daemon-reload && systemctl restart kubelet\n")))}p.isMDXComponent=!0}}]);