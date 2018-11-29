(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{418:function(t,e){},419:function(t,e){},587:function(t,e,n){"use strict";n.r(e);var a=n(413),r=n.n(a),o=n(414),i=n(102),u=n(103),s=n(105),c=n(104),d=n(106),l=n(5),h=n.n(l),f=n(6),p=n.n(f),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},y=function(t){var e=t.value,n=t.min,a=t.max,r=t.scaleMin,o=void 0===r?0:r,i=t.scaleMax;return n===a?o:o+(e-n)*((void 0===i?1:i)-o)/(a-n)},v=function(t,e,n){var a=t.x-e.x,r=t.y-e.y,o=Math.sqrt(a*a+r*r),i=a/o,u=r/o;return{x:e.x+i*n,y:e.y+u*n}},g=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},x=void 0,w=function(){return Math.round(Math.random()*Math.pow(10,16))},b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};var k={data:p.a.arrayOf(p.a.oneOfType([p.a.number,p.a.shape({value:p.a.number})]).isRequired).isRequired,smooth:p.a.bool,autoDraw:p.a.bool,autoDrawDuration:p.a.number,autoDrawEasing:p.a.string,width:p.a.number,height:p.a.number,padding:p.a.number,radius:p.a.number,gradient:p.a.arrayOf(p.a.string)},O=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,t.call(this,n));return a.trendId=w(),a.gradientId="react-trend-vertical-gradient-"+a.trendId,a}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.autoDraw,n=t.autoDrawDuration,a=t.autoDrawEasing;e&&(this.lineLength=this.path.getTotalLength(),function(t){if(null==x&&null==(x=document.querySelector("style[data-react-trend]"))){var e=document.head||document.getElementsByTagName("head")[0];(x=document.createElement("style")).type="text/css",x.setAttribute("data-react-trend",""),e.appendChild(x)}x.appendChild(document.createTextNode(t))}(function(t){var e=t.id,n=t.lineLength,a=t.duration;return"\n    \n    @keyframes react-trend-autodraw-"+e+" {\n      0% {\n        stroke-dasharray: "+n+";\n        stroke-dashoffset: "+n+"\n      }\n      100% {\n        stroke-dasharray: "+n+";\n        stroke-dashoffset: 0;\n      }\n      100% {\n        stroke-dashoffset: '';\n        stroke-dasharray: '';\n      }\n    }\n  \n\n    \n    @keyframes react-trend-autodraw-cleanup-"+e+" {\n      to {\n        stroke-dasharray: '';\n        stroke-dashoffset: '';\n      }\n    }\n  \n\n    #react-trend-"+e+" {\n      animation:\n        react-trend-autodraw-"+e+" "+a+"ms "+t.easing+",\n        react-trend-autodraw-cleanup-"+e+" 1ms "+a+"ms\n      ;\n    }\n  "}({id:this.trendId,lineLength:this.lineLength,duration:n,easing:a})))},e.prototype.getDelegatedProps=function(){return t=this.props,e=Object.keys(k),Object.keys(t).reduce(function(n,a){var r;return-1!==e.indexOf(a)?n:m({},n,((r={})[a]=t[a],r))},{});var t,e},e.prototype.renderGradientDefinition=function(){var t=this.props.gradient;return h.a.createElement("defs",null,h.a.createElement("linearGradient",{id:this.gradientId,x1:"0%",y1:"0%",x2:"0%",y2:"100%"},t.slice().reverse().map(function(e,n){return h.a.createElement("stop",{key:n,offset:y({value:n,min:0,max:t.length-1||1}),stopColor:e})})))},e.prototype.render=function(){var t=this,e=this.props,n=e.data,a=e.smooth,r=e.width,o=e.height,i=e.padding,u=e.radius,s=e.gradient;if(!n||n.length<2)return null;var c=r||300,d=o||75,l=r||"100%",f=o||"25%",p=function(t,e){var n=e.minX,a=e.maxX,r=e.minY,o=e.maxY,i={min:0,max:t.length-1},u={min:Math.min.apply(Math,t),max:Math.max.apply(Math,t)},s=t.map(function(t,e){return{x:y({value:e,min:i.min,max:i.max,scaleMin:n,scaleMax:a}),y:y({value:t,min:u.min,max:u.max,scaleMin:r,scaleMax:o})}});return u.min===u.max&&(s[0].y+=1e-4),s}(n.map(function(t){return"number"===typeof t?t:t.value}),{minX:i,maxX:c-i,minY:d-i,maxY:i}),m=a?function(t,e){var n=e.radius,a=t[0],r=t.slice(1);return r.reduce(function(t,e,o){var i,u,s,c=r[o+1],d=r[o-1]||a,l=c&&(u=e,s=c,((i=d).y-u.y)*(i.x-s.x)===(i.y-s.y)*(i.x-u.x));if(!c||l)return t+"\nL "+e.x+","+e.y;var h=g(d,e),f=g(c,e),p=Math.min(h,f),m=p/2<n?p/2:n,y=v(d,e,m),x=v(c,e,m);return[t,"L "+y.x+","+y.y,"S "+e.x+","+e.y+" "+x.x+","+x.y].join("\n")},"M "+a.x+","+a.y)}(p,{radius:u}):function(t){return t.reduce(function(t,e,n){return t+(0===n?"M":"L")+" "+e.x+","+e.y+"\n"},"")}(p);return h.a.createElement("svg",b({width:l,height:f,viewBox:"0 0 "+c+" "+d},this.getDelegatedProps()),s&&this.renderGradientDefinition(),h.a.createElement("path",{ref:function(e){t.path=e},id:"react-trend-"+this.trendId,d:m,fill:"none",stroke:s?"url(#"+this.gradientId+")":void 0}))},e}(l.Component);O.defaultProps={radius:10,stroke:"black",padding:8,strokeWidth:1,autoDraw:!1,autoDrawDuration:2e3,autoDrawEasing:"ease"};var E=O,M=n(415),D=n.n(M),j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(r)))).state={data:[],start:"",end:""},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"loadData",value:function(){var t=Object(o.a)(r.a.mark(function t(){var e,n,a,o,i,u,s,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/brokalys/data/master/data/apartment/sell-monthly-riga.csv");case 2:return e=t.sent,t.next=5,e.text();case 5:n=t.sent,a=D()(n),o=[],i=a[0],u=a.splice(1),s=u[0][0],c=u[u.length-1][1],i.forEach(function(t,e){if(!(e<=1)){var n=u.map(function(t){return parseInt(t[e],10)}).filter(function(t){return t>0});0!==n.length&&o.push({name:"R\u012bga"===t?"Vid\u0113jais r\u0101d\u012bt\u0101js R\u012bg\u0101":t,data:n})}}),this.setState({start:s,end:c,data:o});case 14:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.start,a=t.end;return h.a.createElement("div",{className:"container"},h.a.createElement("h1",null,"Nekustam\u0101 \u012bpa\u0161uma pulss R\u012bg\u0101"),h.a.createElement("h2",null,n," - ",a),h.a.createElement("hr",null),e.map(function(t){return h.a.createElement("div",{key:t.name},h.a.createElement("h3",null,t.name),h.a.createElement(E,{data:t.data,autoDraw:!0,gradient:["#0FF","#F0F","#FF0"],smooth:!0}),h.a.createElement("hr",null))}))}}]),e}(h.a.Component);e.default=j}}]);
//# sourceMappingURL=4.73fff23d.chunk.js.map