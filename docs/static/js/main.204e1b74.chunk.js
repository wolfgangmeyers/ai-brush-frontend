(this["webpackJsonpai-brush-frontend"]=this["webpackJsonpai-brush-frontend"]||[]).push([[0],{35:function(e,t,n){},66:function(e,t){},92:function(e,t,n){"use strict";n.r(t);n(35);var r,a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},c=n(2),s=n(47),i=n(1),u=n.n(i),o=n(4),b=n(8),l=n(6),d=n(5),p=n(24),j=n.n(p),h=n(7),f=n.n(h),O=n(9),v=n.n(O),x=n(22),g=n(48),m=n(25),w=n(27),y=n(3),k=n(16),J=n(51),R="https://qb1eyw689j.execute-api.us-east-1.amazonaws.com/Prod".replace(/\/+$/,""),I=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v.a;Object(x.a)(this,e),this.basePath=n,this.axios=r,this.configuration=void 0,t&&(this.configuration=t,this.basePath=t.basePath||this.basePath)},C=function(e){Object(m.a)(n,e);var t=Object(w.a)(n);function n(e,r){var a;return Object(x.a)(this,n),(a=t.call(this,r)).field=e,a.name="RequiredError",a}return n}(Object(J.a)(Error)),S="https://example.com",P=function(e,t,n){if(null===n||void 0===n)throw new C(t,"Required parameter ".concat(t," was null or undefined when calling ").concat(e,"."))},E=function(e){for(var t=new URLSearchParams(e.search),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var c=0,s=r;c<s.length;c++){var i=s[c];for(var u in i)if(Array.isArray(i[u])){t.delete(u);var o,b=Object(k.a)(i[u]);try{for(b.s();!(o=b.n()).done;){var l=o.value;t.append(u,l)}}catch(d){b.e(d)}finally{b.f()}}else t.set(u,i[u])}e.search=t.toString()},U=function(e,t,n){var r="string"!==typeof e;return(r&&n&&n.isJsonMime?n.isJsonMime(t.headers["Content-Type"]):r)?JSON.stringify(void 0!==e?e:{}):e||""},L=function(e){return e.pathname+e.search+e.hash},T=function(e,t,n,r){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,s=Object(y.a)(Object(y.a)({},e.options),{},{url:((null===r||void 0===r?void 0:r.basePath)||c)+e.url});return a.request(s)}},_=function(e){var t=function(e){return{cancelJob:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},P("cancelJob","id",n),a="/jobs/{id}/cancel".replace("{".concat("id","}"),encodeURIComponent(String(n))),c=new URL(a,S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"POST"},s),r),o={},E(c,{},r.query),b=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),b),r.headers),t.abrupt("return",{url:L(c),options:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),createJob:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},a=new URL("/jobs",S),e&&(c=e.baseOptions),s=Object(y.a)(Object(y.a)({method:"POST"},c),r),o={},(i={})["Content-Type"]="application/json",E(a,o,r.query),b=c&&c.headers?c.headers:{},s.headers=Object(y.a)(Object(y.a)(Object(y.a)({},i),b),r.headers),s.data=U(n,s,e),t.abrupt("return",{url:L(a),options:s});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteImage:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},P("deleteImage","id",n),a="/images/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),c=new URL(a,S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"DELETE"},s),r),o={},E(c,{},r.query),b=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),b),r.headers),t.abrupt("return",{url:L(c),options:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteJob:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},P("deleteJob","id",n),a="/jobs/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),c=new URL(a,S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"DELETE"},s),r),o={},E(c,{},r.query),b=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),b),r.headers),t.abrupt("return",{url:L(c),options:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),deleteJobResult:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},P("deleteJobResult","id",n),a="/job-results/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),c=new URL(a,S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"DELETE"},s),r),o={},E(c,{},r.query),b=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),b),r.headers),t.abrupt("return",{url:L(c),options:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getImage:function(){var t=Object(o.a)(u.a.mark((function t(n,r){var a,c,s,i,o,b,l,d,p=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:{},P("getImage","id",n),c="/images/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),s=new URL(c,S),e&&(i=e.baseOptions),o=Object(y.a)(Object(y.a)({method:"GET"},i),a),b={},l={},void 0!==r&&(l.download=r),E(s,l,a.query),d=i&&i.headers?i.headers:{},o.headers=Object(y.a)(Object(y.a)(Object(y.a)({},b),d),a.headers),t.abrupt("return",{url:L(s),options:o});case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),getJob:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},P("getJob","id",n),a="/jobs/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),c=new URL(a,S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"GET"},s),r),o={},E(c,{},r.query),b=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),b),r.headers),t.abrupt("return",{url:L(c),options:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getJobResult:function(){var t=Object(o.a)(u.a.mark((function t(n,r){var a,c,s,i,o,b,l,d,p=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:{},P("getJobResult","id",n),c="/job-results/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),s=new URL(c,S),e&&(i=e.baseOptions),o=Object(y.a)(Object(y.a)({method:"GET"},i),a),b={},l={},void 0!==r&&(l.download=r),E(s,l,a.query),d=i&&i.headers?i.headers:{},o.headers=Object(y.a)(Object(y.a)(Object(y.a)({},b),d),a.headers),t.abrupt("return",{url:L(s),options:o});case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),getJobTask:function(){var t=Object(o.a)(u.a.mark((function t(){var n,r,a,c,s,i,o=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},r=new URL("/job-tasks",S),e&&(a=e.baseOptions),c=Object(y.a)(Object(y.a)({method:"GET"},a),n),s={},E(r,{},n.query),i=a&&a.headers?a.headers:{},c.headers=Object(y.a)(Object(y.a)(Object(y.a)({},s),i),n.headers),t.abrupt("return",{url:L(r),options:c});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),listImages:function(){var t=Object(o.a)(u.a.mark((function t(n,r){var a,c,s,i,o,b,l,d=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.length>2&&void 0!==d[2]?d[2]:{},c=new URL("/images",S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"GET"},s),a),o={},b={},void 0!==n&&(b.cursor=n),void 0!==r&&(b.direction=r),E(c,b,a.query),l=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),l),a.headers),t.abrupt("return",{url:L(c),options:i});case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),listJobResults:function(){var t=Object(o.a)(u.a.mark((function t(n,r,a){var c,s,i,o,b,l,d,p,j=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=j.length>3&&void 0!==j[3]?j[3]:{},P("listJobResults","id",n),s="/jobs/{id}/results".replace("{".concat("id","}"),encodeURIComponent(String(n))),i=new URL(s,S),e&&(o=e.baseOptions),b=Object(y.a)(Object(y.a)({method:"GET"},o),c),l={},d={},void 0!==r&&(d.cursor=r),void 0!==a&&(d.direction=a),E(i,d,c.query),p=o&&o.headers?o.headers:{},b.headers=Object(y.a)(Object(y.a)(Object(y.a)({},l),p),c.headers),t.abrupt("return",{url:L(i),options:b});case 14:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),listJobs:function(){var t=Object(o.a)(u.a.mark((function t(){var n,r,a,c,s,i,o=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},r=new URL("/jobs",S),e&&(a=e.baseOptions),c=Object(y.a)(Object(y.a)({method:"GET"},a),n),s={},E(r,{},n.query),i=a&&a.headers?a.headers:{},c.headers=Object(y.a)(Object(y.a)(Object(y.a)({},s),i),n.headers),t.abrupt("return",{url:L(r),options:c});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),saveJobResult:function(){var t=Object(o.a)(u.a.mark((function t(n){var r,a,c,s,i,o,b,l=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},P("saveJobResult","id",n),a="/job-results/{id}".replace("{".concat("id","}"),encodeURIComponent(String(n))),c=new URL(a,S),e&&(s=e.baseOptions),i=Object(y.a)(Object(y.a)({method:"PUT"},s),r),o={},E(c,{},r.query),b=s&&s.headers?s.headers:{},i.headers=Object(y.a)(Object(y.a)(Object(y.a)({},o),b),r.headers),t.abrupt("return",{url:L(c),options:i});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),submitJobResult:function(){var t=Object(o.a)(u.a.mark((function t(n,r){var a,c,s,i,o,b,l,d,p=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=p.length>2&&void 0!==p[2]?p[2]:{},P("submitJobResult","id",n),c="/jobs/{id}/results".replace("{".concat("id","}"),encodeURIComponent(String(n))),s=new URL(c,S),e&&(i=e.baseOptions),o=Object(y.a)(Object(y.a)({method:"POST"},i),a),l={},(b={})["Content-Type"]="application/json",E(s,l,a.query),d=i&&i.headers?i.headers:{},o.headers=Object(y.a)(Object(y.a)(Object(y.a)({},b),d),a.headers),o.data=U(r,o,e),t.abrupt("return",{url:L(s),options:o});case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}(e);return{cancelJob:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.cancelJob(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},createJob:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.createJob(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},deleteImage:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.deleteImage(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},deleteJob:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.deleteJob(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},deleteJobResult:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.deleteJobResult(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},getImage:function(n,r,a){return Object(o.a)(u.a.mark((function c(){var s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getImage(n,r,a);case 2:return s=c.sent,c.abrupt("return",T(s,v.a,R,e));case 4:case"end":return c.stop()}}),c)})))()},getJob:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getJob(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},getJobResult:function(n,r,a){return Object(o.a)(u.a.mark((function c(){var s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getJobResult(n,r,a);case 2:return s=c.sent,c.abrupt("return",T(s,v.a,R,e));case 4:case"end":return c.stop()}}),c)})))()},getJobTask:function(n){return Object(o.a)(u.a.mark((function r(){var a;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getJobTask(n);case 2:return a=r.sent,r.abrupt("return",T(a,v.a,R,e));case 4:case"end":return r.stop()}}),r)})))()},listImages:function(n,r,a){return Object(o.a)(u.a.mark((function c(){var s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.listImages(n,r,a);case 2:return s=c.sent,c.abrupt("return",T(s,v.a,R,e));case 4:case"end":return c.stop()}}),c)})))()},listJobResults:function(n,r,a,c){return Object(o.a)(u.a.mark((function s(){var i;return u.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.listJobResults(n,r,a,c);case 2:return i=s.sent,s.abrupt("return",T(i,v.a,R,e));case 4:case"end":return s.stop()}}),s)})))()},listJobs:function(n){return Object(o.a)(u.a.mark((function r(){var a;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.listJobs(n);case 2:return a=r.sent,r.abrupt("return",T(a,v.a,R,e));case 4:case"end":return r.stop()}}),r)})))()},saveJobResult:function(n,r){return Object(o.a)(u.a.mark((function a(){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.saveJobResult(n,r);case 2:return c=a.sent,a.abrupt("return",T(c,v.a,R,e));case 4:case"end":return a.stop()}}),a)})))()},submitJobResult:function(n,r,a){return Object(o.a)(u.a.mark((function c(){var s;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.submitJobResult(n,r,a);case 2:return s=c.sent,c.abrupt("return",T(s,v.a,R,e));case 4:case"end":return c.stop()}}),c)})))()}}},q=function(e){Object(m.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"cancelJob",value:function(e,t){var n=this;return _(this.configuration).cancelJob(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"createJob",value:function(e,t){var n=this;return _(this.configuration).createJob(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"deleteImage",value:function(e,t){var n=this;return _(this.configuration).deleteImage(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"deleteJob",value:function(e,t){var n=this;return _(this.configuration).deleteJob(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"deleteJobResult",value:function(e,t){var n=this;return _(this.configuration).deleteJobResult(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"getImage",value:function(e,t,n){var r=this;return _(this.configuration).getImage(e,t,n).then((function(e){return e(r.axios,r.basePath)}))}},{key:"getJob",value:function(e,t){var n=this;return _(this.configuration).getJob(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"getJobResult",value:function(e,t,n){var r=this;return _(this.configuration).getJobResult(e,t,n).then((function(e){return e(r.axios,r.basePath)}))}},{key:"getJobTask",value:function(e){var t=this;return _(this.configuration).getJobTask(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"listImages",value:function(e,t,n){var r=this;return _(this.configuration).listImages(e,t,n).then((function(e){return e(r.axios,r.basePath)}))}},{key:"listJobResults",value:function(e,t,n,r){var a=this;return _(this.configuration).listJobResults(e,t,n,r).then((function(e){return e(a.axios,a.basePath)}))}},{key:"listJobs",value:function(e){var t=this;return _(this.configuration).listJobs(e).then((function(e){return e(t.axios,t.basePath)}))}},{key:"saveJobResult",value:function(e,t){var n=this;return _(this.configuration).saveJobResult(e,t).then((function(e){return e(n.axios,n.basePath)}))}},{key:"submitJobResult",value:function(e,t,n){var r=this;return _(this.configuration).submitJobResult(e,t,n).then((function(e){return e(r.axios,r.basePath)}))}}]),n}(I);function G(){if(!r){var e=v.a;e.defaults.headers.common.apikey=localStorage.getItem("apikey");var t=localStorage.getItem("backend")||"https://qb1eyw689j.execute-api.us-east-1.amazonaws.com/Prod";r=new q(void 0,t,e)}return r}var D=n(0),M=function(){var e=G(),t=Object(d.f)(),n=Object(c.useState)([""]),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(100),p=Object(l.a)(i,2),h=p[0],O=p[1],v=Object(c.useState)(1),x=Object(l.a)(v,2),g=x[0],m=x[1],w=Object(c.useState)(""),y=Object(l.a)(w,2),k=y[0],J=y[1],R=Object(c.useState)(void 0),I=Object(l.a)(R,2),C=I[0],S=I[1],P=Object(c.useState)(.06),E=Object(l.a)(P,2),U=E[0],L=E[1],T=j.a.parse(window.location.search.substring(1));function _(){return(_=Object(o.a)(u.a.mark((function n(){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("phrases",a),n.next=3,e.createJob({count:g,iterations:h,phrases:a,label:k,parent:C});case 3:r=n.sent,t.push("/jobs/".concat(r.data.id));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function q(){return(q=Object(o.a)(u.a.mark((function t(n){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(S(n),!(r=f.a.get("results/"+n))){t.next=5;break}return s(r.phrases),t.abrupt("return");case 5:return t.next=7,e.getImage(n);case 7:a=t.sent,s(a.data.phrases);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){T.parent&&function(e){q.apply(this,arguments)}(T.parent)}),[T.parent]),Object(D.jsxs)("div",{style:{padding:"50px"},children:[Object(D.jsx)("h1",{children:"Generate images"}),Object(D.jsx)("hr",{}),Object(D.jsx)("label",{children:"Job Label:"}),"\xa0",Object(D.jsx)("input",{type:"text",value:k,onChange:function(e){return J(e.target.value)}}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("label",{children:"Phrases:"}),Object(D.jsx)("br",{}),a.map((function(e,t){return Object(D.jsxs)("div",{style:{marginBottom:"5px"},children:[Object(D.jsx)("input",{style:{marginRight:"5px"},type:"text",value:e,onChange:function(e){return function(e,t){s([].concat(Object(b.a)(a.slice(0,t)),[e],Object(b.a)(a.slice(t+1))))}(e.target.value,t)}},"phrase_".concat(t)),Object(D.jsx)("button",{onClick:function(){return e=t,void s([].concat(Object(b.a)(a.slice(0,e)),Object(b.a)(a.slice(e+1))));var e},disabled:1===a.length,children:"X"})]})})),Object(D.jsx)("button",{type:"button",onClick:function(){s([].concat(Object(b.a)(a),[""]))},children:"+ Add"}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("label",{children:"Iterations:"}),"\xa0",Object(D.jsx)("input",{min:10,max:5e3,style:{width:"50px"},type:"number",value:h,onChange:function(e){return O(parseInt(e.target.value))}}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("label",{children:"Count:"}),"\xa0",Object(D.jsx)("input",{min:1,max:100,style:{width:"50px"},type:"number",value:g,onChange:function(e){return m(parseInt(e.target.value))}}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{min:.01,max:.2,step:.01,style:{width:"50px"},type:"number",value:U,onChange:function(e){return L(parseFloat(e.target.value))}}),Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("label",{children:"Parent:"}),"\xa0",C||"",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{onClick:function(){return function(){return _.apply(this,arguments)}()},children:"Generate >>"})]})},F=n(11),A=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(d.g)();return Object(c.useEffect)((function(){if(!r){var e=localStorage.getItem("apikey");if(!e){var t=j.a.parse(s.search.substring(1));t.apikey&&(e=t.apikey,localStorage.setItem("apikey",e),window.location.href="/")}e&&a(e)}}),[r,s.search]),r?Object(D.jsx)("div",{children:e.children}):Object(D.jsx)("div",{children:"Unauthorized"})},z=function(e){var t=G(),n=Object(c.useState)(void 0),r=Object(l.a)(n,2),a=r[0],s=r[1];function i(){return(i=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.listJobs();case 2:(n=e.sent).data.jobs&&s(n.data.jobs);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteJob(n);case 2:a&&void 0!==(r=a.findIndex((function(e){return e.id===n})))&&r>=0&&s([].concat(Object(b.a)(a.slice(0,r)),Object(b.a)(a.slice(r+1))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){a||(s([]),function(){i.apply(this,arguments)}())}),[a]),Object(D.jsx)("div",{style:{padding:"50px"},children:Object(D.jsxs)("table",{children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"ID"}),Object(D.jsx)("th",{children:"Label"}),Object(D.jsx)("th",{children:"Count"}),Object(D.jsx)("th",{children:"Iterations"}),Object(D.jsx)("th",{children:"Action"})]})}),Object(D.jsx)("tbody",{children:a&&a.map((function(e){return Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{children:Object(D.jsx)(F.b,{to:"/jobs/".concat(e.id),children:e.id})}),Object(D.jsx)("td",{children:e.label}),Object(D.jsx)("td",{children:e.count}),Object(D.jsx)("td",{children:e.iterations}),Object(D.jsx)("td",{children:Object(D.jsx)("button",{onClick:function(){return function(e){return d.apply(this,arguments)}(e.id)},children:"Delete"})})]},e.id)}))})]})})},B=function(){var e=Object(c.useState)(void 0),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],p=s[1],j=Object(c.useState)(void 0),h=Object(l.a)(j,2),O=h[0],v=h[1],x=Object(d.h)(),g=G(),m=Object(d.f)();function w(e){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("loadParent"),!(n=f.a.get("results/"+t+"_thumbnail"))){e.next=7;break}console.log("cached",n),v(n),e.next=13;break;case 7:return console.log("Loading parent"),e.next=10,g.getImage(t,"thumbnail");case 10:r=e.sent,f.a.set("results/"+t+"_thumbnail",r.data),v(r.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(o.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=f.a.get("results/"+x.job))){e.next=10;break}if(r(n=t),!n.parent){e.next=7;break}return e.next=7,w(n.parent);case 7:return e.next=9,R();case 9:return e.abrupt("return");case 10:return e.next=12,g.getJob(x.job);case 12:if(a=e.sent,f.a.set("results/"+x.job,a.data),r(a.data),!a.data.parent){e.next=18;break}return e.next=18,w(a.data.parent);case 18:return e.next=20,R();case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(u.a.mark((function e(){var t,n,r,a,c,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.listJobResults(x.job);case 2:if(!(t=e.sent).data.results){e.next=15;break}return n=[],r=[],t.data.results.forEach((function(e){var t=f.a.get("results/"+e.id+"_thumbnail");t?r.push(t):n.push(e)})),e.next=9,Promise.all(n.map((function(e){return g.getJobResult(e.id,"thumbnail")})));case 9:a=e.sent,c=Object(k.a)(a);try{for(c.s();!(s=c.n()).done;)i=s.value,f.a.set("results/"+i.data.id+"_thumbnail",i.data)}catch(u){c.e(u)}finally{c.f()}(o=[].concat(Object(b.a)(a.map((function(e){return e.data}))),r)).sort((function(e,t){return e.score-t.score})),p(o);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(o.a)(u.a.mark((function e(){var t,n,r,a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==i.length){e.next=3;break}return R(),e.abrupt("return");case 3:return t=Math.max.apply(Math,Object(b.a)(i.map((function(e){return e.created})))),e.next=6,g.listJobResults(x.job,t,"forward");case 6:if(!(n=e.sent).data.results){e.next=14;break}return e.next=10,Promise.all(n.data.results.map((function(e){return g.getJobResult(e.id)})));case 10:r=e.sent,a=Object(k.a)(r);try{for(a.s();!(c=a.n()).done;)s=c.value,f.a.set("results/"+s.data.id+"_thumbnail",s.data)}catch(u){a.e(u)}finally{a.f()}p((function(e){return[].concat(Object(b.a)(r.map((function(e){return e.data}))),Object(b.a)(e))}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.cancelJob(x.job);case 2:alert("Job cancelled");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){n&&n.id===x.job||function(){J.apply(this,arguments)}();var e=setInterval((function(){!function(){C.apply(this,arguments)}()}),1e4);return function(){return clearInterval(e)}}),[x.job,n]),n&&Object(D.jsxs)("div",{style:{padding:"50px"},children:["Label: ",n.label,Object(D.jsx)("br",{}),"Phrases: ",n.phrases&&n.phrases.join(", "),Object(D.jsx)("br",{}),"Iterations: ",n.iterations,Object(D.jsx)("br",{}),"Count: ",n.count,Object(D.jsx)("br",{}),"Results: ",i.length,Object(D.jsx)("br",{}),Object(D.jsx)("button",{onClick:function(){return function(){return S.apply(this,arguments)}()},children:"Cancel"}),Object(D.jsx)("br",{}),O&&Object(D.jsxs)("div",{style:{margin:"10px",border:"1px solid black",padding:"5px"},children:["Parent: ",Object(D.jsx)("img",{style:{width:"256px",cursor:"pointer"},src:"data:image/jpeg;base64,".concat(O.encoded_thumbnail)})]}),Object(D.jsx)("hr",{}),i.map((function(e){return Object(D.jsxs)("div",{style:{margin:"10px",float:"left",border:"1px solid black",padding:"5px"},children:[Object(D.jsx)("img",{onClick:function(){return m.push("/job-results/".concat(e.id))},style:{width:"256px",cursor:"pointer"},src:"data:image/jpeg;base64,".concat(e.encoded_thumbnail)}),Object(D.jsx)("br",{}),"Score: ",e.score]},e.id)}))]})||Object(D.jsx)("div",{})},N=function(){var e=Object(d.h)(),t=G(),n=Object(d.f)(),r=Object(c.useState)(void 0),a=Object(l.a)(r,2),s=a[0],i=a[1];function b(){return(b=Object(o.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=f.a.get("results/"+e.result+"_image"))){n.next=4;break}return i(r),n.abrupt("return");case 4:return n.next=6,t.getJobResult(e.result,"image");case 6:a=n.sent,f.a.set("results/"+e.result+"_image",a.data),i(a.data);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return(p=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteJobResult(null===s||void 0===s?void 0:s.id);case 2:n.push("/jobs/".concat(null===s||void 0===s?void 0:s.job_id));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.saveJobResult(null===s||void 0===s?void 0:s.id);case 2:n.push("/jobs/".concat(null===s||void 0===s?void 0:s.job_id));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.saveJobResult(null===s||void 0===s?void 0:s.id);case 2:n.push("/?parent=".concat(null===s||void 0===s?void 0:s.id));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){s&&s.id===e.result||function(){b.apply(this,arguments)}()}),[s,e.result]),Object(D.jsxs)("div",{style:{padding:"50px"},children:[Object(D.jsx)("button",{onClick:function(){n.push("/jobs/".concat(null===s||void 0===s?void 0:s.job_id))},children:"Cancel"}),Object(D.jsx)("button",{onClick:function(){return function(){return p.apply(this,arguments)}()},children:"Delete"}),Object(D.jsx)("button",{onClick:function(){return function(){return j.apply(this,arguments)}()},children:"Save"}),Object(D.jsx)("button",{onClick:function(){return function(){return h.apply(this,arguments)}()},children:"Save and fork"}),Object(D.jsx)("hr",{}),s&&Object(D.jsx)("img",{style:{width:"512px"},src:"data:image/jpeg;base64,".concat(s.encoded_image)})]})},X=n(50),$=n.n(X),H=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(d.f)(),s=G();function i(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(u.a.mark((function e(t){var n,a,c,i,o,l,d,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t||$()().valueOf(),e.next=3,s.listImages(t,"reverse");case 3:if(!(n=e.sent).data.images){e.next=15;break}return a=[],c=[],n.data.images.forEach((function(e){var t=f.a.get("images/"+e.id+"_thumbnail");t?c.push(t):a.push(e)})),e.next=10,Promise.all(a.map((function(e){return s.getImage(e.id,"thumbnail")})));case 10:i=e.sent,o=Object(k.a)(i);try{for(o.s();!(l=o.n()).done;)d=l.value,f.a.set("images/"+d.data.id+"_thumbnail",d.data)}catch(u){o.e(u)}finally{o.f()}p=[].concat(Object(b.a)(i.map((function(e){return e.data}))),c),r((function(e){return(p=[].concat(Object(b.a)(e),Object(b.a)(p))).sort((function(e,t){return t.created-e.created})),p}));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){r([]),i()}),[]),Object(D.jsxs)("div",{style:{padding:"50px"},children:[n.map((function(e){return Object(D.jsx)("div",{style:{margin:"10px",float:"left",border:"1px solid black",padding:"5px"},children:Object(D.jsx)("img",{onClick:function(){return a.push("/images/".concat(e.id))},style:{width:"256px",cursor:"pointer"},src:"data:image/jpeg;base64,".concat(e.encoded_thumbnail)})},e.id)})),Object(D.jsx)("div",{style:{margin:"10px",float:"left",border:"1px solid black",padding:"5px"},children:Object(D.jsx)("button",{onClick:function(){i(Math.min.apply(Math,Object(b.a)(n.map((function(e){return e.created})))))},style:{width:"256px",height:"256px"},children:"Load More"})})]})},K=function(){var e=Object(d.h)(),t=G(),n=Object(d.f)(),r=Object(c.useState)(void 0),a=Object(l.a)(r,2),s=a[0],i=a[1];function b(){return(b=Object(o.a)(u.a.mark((function n(){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=f.a.get("/images/"+e.image+"_image"))){n.next=4;break}return i(r),n.abrupt("return");case 4:return n.next=6,t.getImage(e.image,"image");case 6:a=n.sent,f.a.set("images/"+e.image+"_image",a.data),i(a.data);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return(p=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteImage(null===s||void 0===s?void 0:s.id);case 2:n.push("/images");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.push("/?parent=".concat(null===s||void 0===s?void 0:s.id));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){s&&s.id===e.image||function(){b.apply(this,arguments)}()}),[s,e.image]),Object(D.jsxs)("div",{style:{padding:"50px"},children:[Object(D.jsx)("button",{onClick:function(){return function(){return j.apply(this,arguments)}()},children:"Fork"}),Object(D.jsx)("button",{onClick:function(){n.push("/images")},children:"Cancel"}),Object(D.jsx)("button",{onClick:function(){return function(){return p.apply(this,arguments)}()},children:"Delete"}),Object(D.jsx)("hr",{}),s&&Object(D.jsx)("img",{style:{width:"512px"},src:"data:image/jpeg;base64,".concat(s.encoded_image)})]})};var Q=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(F.b,{to:"/",children:"Create new Job"}),"\xa0",Object(D.jsx)(F.b,{to:"/jobs",children:"Jobs"}),"\xa0",Object(D.jsx)(F.b,{to:"/images",children:"Images"}),Object(D.jsx)("div",{style:{float:"right"},children:Object(D.jsx)("button",{onClick:function(e){return function(){var e=prompt("Set backend url (blank to reset to default)");null!==e&&(e?localStorage.setItem("backend",e):localStorage.removeItem("backend"),window.location.href="/")}()},children:"Set backend"})})]})},V=function(){return Object(D.jsx)(F.a,{children:Object(D.jsxs)(A,{children:[Object(D.jsx)(Q,{}),Object(D.jsxs)(d.c,{children:[Object(D.jsx)(d.a,{path:"/",exact:!0,children:Object(D.jsx)(M,{})}),Object(D.jsx)(d.a,{path:"/jobs",exact:!0,children:Object(D.jsx)(z,{})}),Object(D.jsx)(d.a,{path:"/jobs/:job",children:Object(D.jsx)(B,{})}),Object(D.jsx)(d.a,{path:"/job-results/:result",children:Object(D.jsx)(N,{})}),Object(D.jsx)(d.a,{path:"/images",exact:!0,children:Object(D.jsx)(H,{})}),Object(D.jsx)(d.a,{path:"/images/:image",exact:!0,children:Object(D.jsx)(K,{})})]})]})})};Object(s.render)(Object(D.jsx)(V,{}),document.getElementById("root")),a()}},[[92,1,2]]]);
//# sourceMappingURL=main.204e1b74.chunk.js.map