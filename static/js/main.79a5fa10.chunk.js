(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],{155:function(e,t,n){e.exports={statisticAddon:"MeanPriceInFilterLocation_statisticAddon__ZZijL",textGreen:"MeanPriceInFilterLocation_textGreen__1TxZ3",textRed:"MeanPriceInFilterLocation_textRed__2oGI9"}},156:function(e,t,n){e.exports={container:"App_container__1MQN3",grid:"App_grid__3DnSg",leftPanel:"App_leftPanel__3Hl9k",rightPanel:"App_rightPanel__kN-EW",githubCorner:"App_githubCorner__3BLKB"}},217:function(e,t,n){e.exports={content:"SplitPaneLeft_content__4SUVj",highlightedText:"SplitPaneLeft_highlightedText__2q005"}},218:function(e,t,n){e.exports={currency:"AreaOverview_currency__1aglq",label:"AreaOverview_label__1Cauv",amount:"AreaOverview_amount__KkYcy"}},272:function(e,t,n){e.exports={shake:"Navigation_shake__1loJY","bell-shake":"Navigation_bell-shake__28FvC",notificationLink:"Navigation_notificationLink__dwBb-"}},279:function(e,t,n){e.exports={container:"PropertyPriceChart_container__b6m2Q",tooltip:"PropertyPriceChart_tooltip__iGhsd"}},280:function(e,t,n){e.exports={container:"PropertyPriceLine_container__3NyhK",tooltip:"PropertyPriceLine_tooltip__1tDKM"}},286:function(e,t,n){e.exports={container:"PropertyTypeChart_container__3smv6",title:"PropertyTypeChart_title__1REaR"}},287:function(e,t,n){e.exports={container:"MapOverlay_container__16kzn"}},387:function(e,t,n){e.exports={container:"FilterToolbar_container__3xqZF"}},413:function(e,t,n){e.exports={container:"SplitPaneRight_container__x3kzx"}},467:function(e,t,n){e.exports=n(705)},704:function(e,t,n){},705:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(94),i=n.n(c),l=n(31),o=n(379),s=n(199),u=n(200),m=n(129),p=new s.a({cache:new u.a,link:new m.a({uri:"https://api.brokalys.com"})}),d=n(384),f=n.n(d),g=n(743),y=n(755),v=n(25),b=n(141),E=n(215),h=n(754),_=n(748),O=n(751),x=n(267),j=n.n(x),k=n(385),S=n.n(k);j.a.start({releaseStage:"production",enabledReleaseStages:["production"],apiKey:"d834235e29f9f8aba796385d728e56f2",plugins:[new S.a],collectUserIp:!1});var w=j.a,P=n(51),N=n(750),C=n(746),$=n(268),L=n(32),M=n.n(L),R=n(116),Y=n(386),q=n.n(Y),A=Object(l.atom)({key:"filters",default:{category:"apartment",type:"sell",location:"latvia-riga-vecpilseta",priceType:"total"}}),F=Object(l.selector)({key:"filters.category",get:function(e){return(0,e.get)(A).category}}),I=Object(l.selector)({key:"filters.type",get:function(e){return(0,e.get)(A).type}}),T=Object(l.selector)({key:"filters.location",get:function(e){return(0,e.get)(A).location}}),D=Object(l.selector)({key:"filters.priceType",get:function(e){return(0,e.get)(A).priceType}}),B=Object(l.selectorFamily)({key:"getPrices",get:function(e){return function(){var t=Object(R.a)(M.a.mark((function t(n){var a,r,c,i;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){return(c=Object(R.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://static-api.brokalys.com/stats/monthly?discard=0.1&filters=".concat(a));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},r=function(){return c.apply(this,arguments)},n.get,a=encodeURIComponent(JSON.stringify(e)),i=0,t.abrupt("return",new Promise(function(){var e=Object(R.a)(M.a.mark((function e(n){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(!(0===(a=e.sent).loadingResults||i++>=3)){e.next=5;break}return e.abrupt("return",n(a));case 5:setTimeout((function(){return t(n)}),a.loadingResults<=2?1e3:3e3);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),V=Object(l.selector)({key:"priceInFilteredLocation",get:function(){var e=Object(R.a)(M.a.mark((function e(t){var n,a,r,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(T),r=n(I),c=n(F),e.next=6,n(B({category:c,type:r,location_classificator:a}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),G=Object(l.selector)({key:"meanPriceLastMonth",get:function(){var e=Object(R.a)(M.a.mark((function e(t){var n,a,r,c,i,l,o,s,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(T),r=n(I),c=n(F),i=n(D),e.next=7,n(B({category:c,type:r,location_classificator:a}));case 7:return l=e.sent,o=l.results,s="sqm"===i?"pricePerSqm":"price",u=o[o.length-1][s].mean,e.abrupt("return",{price:u,change:{mom:100*(1-u/o[o.length-2][s].mean),yoy:100*(1-u/o[o.length-13][s].mean)}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),z=Object(l.selector)({key:"rentalYield",get:function(){var e=Object(R.a)(M.a.mark((function e(t){var n,a,r,c,i,l,o,s,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(F),r=n(T),c=n(D),e.next=6,Promise.all([n(B({category:a,type:"sell",location_classificator:r})),n(B({category:a,type:"rent",location_classificator:r}))]);case 6:return i=e.sent,l=Object(v.a)(i,2),o=l[0].results,s=l[1].results,u="sqm"===c?"pricePerSqm":"price",e.abrupt("return",s[s.length-1][u].mean/o[o.length-1][u].mean*100);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),U=n(387),H=n.n(U),J=b.a.features.map((function(e){return{value:e.properties.id,text:e.properties.name}})),K=[{value:"apartment",text:"Apartment"},{value:"house",text:"House"},{value:"land",text:"Land"}],W=[{value:"sell",text:"Sell"},{value:"rent",text:"Rent"}],Z=[{value:"total",text:"Total price"},{value:"sqm",text:"Price/sqm"}];var Q=function(){var e=Object(l.useRecoilState)(A),t=Object(v.a)(e,2)[1];return r.a.createElement("div",{className:H.a.container},r.a.createElement(N.a,{secondary:!0},r.a.createElement(N.a.Item,{fitted:!0},r.a.createElement(C.a,{placeholder:"Select location",search:function(e,t){var n=new RegExp(Object($.transliterate)(t),"i");return e.filter((function(e){return n.test(Object($.transliterate)(e.text))}))},selection:!0,defaultValue:"latvia-riga-vecpilseta",options:J,onChange:function(e,n){t((function(e){return Object(P.a)(Object(P.a)({},e),{},{location:n.value})}))}})),r.a.createElement(N.a.Item,{fitted:!0},r.a.createElement(C.a,{placeholder:"Select category",fluid:!0,selection:!0,defaultValue:"apartment",options:K,onChange:function(e,n){t((function(e){return Object(P.a)(Object(P.a)({},e),{},{category:n.value})}))}})),r.a.createElement(N.a.Item,{fitted:!0},r.a.createElement(C.a,{placeholder:"Select type",fluid:!0,selection:!0,defaultValue:"sell",options:W,onChange:function(e,n){t((function(e){return Object(P.a)(Object(P.a)({},e),{},{type:n.value})}))}})),r.a.createElement(N.a.Item,{fitted:!0},r.a.createElement(C.a,{placeholder:"Select price type",fluid:!0,selection:!0,defaultValue:"total",options:Z,onChange:function(e,n){t((function(e){return Object(P.a)(Object(P.a)({},e),{},{priceType:n.value})}))}}))))},X=n(745),ee=n(153),te=n(749),ne=n(272),ae=n.n(ne);var re=function(){return r.a.createElement(N.a,{secondary:!0},r.a.createElement(N.a.Header,null,r.a.createElement("img",{src:"https://brokalys.com/favicon.png",alt:"logo",height:"40px"})),r.a.createElement(N.a.Item,{position:"right"},r.a.createElement(X.a,{content:"Sign up for instant notifications about classifieds matching your parameters",inverted:!0,position:"bottom right",trigger:r.a.createElement("a",{href:"https://pinger.brokalys.com",target:"_blank",rel:"noopener noreferrer",className:ae.a.notificationLink},r.a.createElement(ee.a,{name:"bell outline",className:ae.a.shake}))})),r.a.createElement(N.a.Item,{fitted:!0},r.a.createElement(te.a,{primary:!0,animated:"vertical",onClick:function(){window.location.href="mailto:matiss@brokalys.com?subject=Feedback"}},r.a.createElement(te.a.Content,{visible:!0},"Give feedback"),r.a.createElement(te.a.Content,{hidden:!0},r.a.createElement(ee.a,{name:"mail"})))))},ce=n(728),ie=n(740),le=n(8),oe=n(753),se=n(752),ue=n(741),me=n(111),pe=n.n(me),de=n(214),fe=n(279),ge=n.n(fe);function ye(){var e=Object(l.useRecoilValue)(D),t=Object(l.useRecoilValue)(V).results,n=Object(a.useMemo)((function(){return[{id:"Average Price",data:t.map((function(t){var n="sqm"===e?t.pricePerSqm:t.price;return Object(P.a)(Object(P.a)({},n),{},{x:t.start_datetime.substr(0,10),y:n.mean})}))}]}),[t,e]),c=n[0].data.reduce((function(e,t){var n=t.max;return n>e?n:e}),0);function i(t){var n=t.value;return r.a.createElement("span",null,Number(n).toLocaleString("en",{minimumFractionDigits:2})," ","sqm"===e?r.a.createElement("span",null,"EUR/m",r.a.createElement("sup",null,"2")):"EUR")}return r.a.createElement(de.a,{data:n,margin:{top:10,right:10,bottom:100,left:50},xScale:{type:"time",format:"%Y-%m-%d",precision:"month"},xFormat:"time:%Y-%m-%d",yScale:{type:"linear",stacked:!1,max:1.05*c},sliceTooltip:function(e){var t=e.slice;return r.a.createElement("div",{className:ge.a.tooltip},t.points.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,pe()(e.data.x).format("YYYY-MM-DD"))),r.a.createElement("div",null,r.a.createElement("strong",null,"Min:")," ",r.a.createElement(i,{value:e.data.min})),r.a.createElement("div",null,r.a.createElement("strong",null,e.serieId,":")," ",r.a.createElement(i,{value:e.data.yFormatted})),r.a.createElement("div",null,r.a.createElement("strong",null,"Max:")," ",r.a.createElement(i,{value:e.data.max})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null,"Mode:")," ",r.a.createElement(i,{value:e.data.mode})),r.a.createElement("div",null,r.a.createElement("strong",null,"Median:")," ",r.a.createElement(i,{value:e.data.median})))})))},axisBottom:{format:"%Y-%m",tickValues:"every 2 months",tickRotation:-90},enablePoints:!0,curve:"monotoneX",useMesh:!0,enableSlices:"x",layers:["grid","markers","axes","areas","crosshair",ve,"lines","points","slices","mesh","legends"]})}function ve(e){var t=e.series,n=e.xScale,a=e.yScale,c=(e.innerHeight,Object(ce.a)().x((function(e){return n(e.data.x)})).y0((function(e){return a(e.data.min)})).y1((function(e){return a(e.data.max)})).curve(ie.a));return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.c,{defs:[{id:"pattern",type:"patternLines",background:"transparent",color:"#3daff7",lineWidth:1,spacing:6,rotation:-45}]}),r.a.createElement("path",{d:c(t[0].data),fill:"url(#pattern)",fillOpacity:.2,stroke:"#3daff7",strokeWidth:1}))}var be=function(){return r.a.createElement(oe.a,{basic:!0,className:ge.a.container},r.a.createElement(E.ErrorBoundary,{fallback:r.a.createElement(_.a,{negative:!0},"Failed loading chart data. Please try again later."),onError:w.notify},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(se.a,{inverted:!0,active:!0},r.a.createElement(ue.a,null))},r.a.createElement(ye,null))))},Ee=n(147),he=n.n(Ee),_e=n(155),Oe=n.n(_e);function xe(){var e=Object(l.useRecoilValue)(D),t=Object(l.useRecoilValue)(G),n=t.price,a=t.change.mom,c=t.change.yoy;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a.Value,null,r.a.createElement("div",{className:Oe.a.statisticAddon},isFinite(a)&&r.a.createElement("div",null,r.a.createElement("span",{className:a<0?Oe.a.textGreen:Oe.a.textRed},a<0?"+":"",-a.toFixed(2),"%")," ","MoM"),isFinite(c)&&r.a.createElement("div",null,r.a.createElement("span",{className:c<0?Oe.a.textGreen:Oe.a.textRed},c<0?"+":"",-c.toFixed(2),"%")," ","YoY")),parseInt(n,10).toLocaleString("en")),r.a.createElement(O.a.Label,null,"Average Price (EUR","sqm"===e?r.a.createElement("span",null,"/m",r.a.createElement("sup",null,"2")):"",")"))}var je=function(){return r.a.createElement(O.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(he.a,{height:60,width:240})},r.a.createElement(xe,null)))};function ke(){var e=Object(l.useRecoilValue)(z);return r.a.createElement(O.a.Value,null,e.toFixed(2),"%")}var Se=function(){return r.a.createElement(O.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(he.a,{height:42})},r.a.createElement(ke,null)),r.a.createElement(O.a.Label,null,"Rental Yield"))},we=n(217),Pe=n.n(we);var Ne=function(){var e=Object(l.useRecoilState)(A),t=Object(v.a)(e,1)[0],n=b.a.features.find((function(e){return e.properties.id===t.location})).properties.name;return r.a.createElement("div",{className:Pe.a.container},r.a.createElement(re,null),r.a.createElement("div",{className:Pe.a.content},r.a.createElement(h.a,{as:"h2"},"Average Prices in"," ",r.a.createElement("span",{className:Pe.a.highlightedText},n)),r.a.createElement(Q,null),r.a.createElement(be,null),r.a.createElement("div",null,r.a.createElement(h.a,{as:"h3"},"Last Month"),r.a.createElement(E.ErrorBoundary,{fallback:r.a.createElement(_.a,{negative:!0},"Failed loading the data. Please try again later."),onError:w.notify},r.a.createElement(O.a.Group,{size:"small"},r.a.createElement(je,null),r.a.createElement(Se,null))))))},Ce=r.a.createContext(),$e=r.a.lazy((function(){return n.e(3).then(n.t.bind(null,783,7))}));function Le(e){return{zoomControlOptions:{position:e.ControlPosition.RIGHT_TOP},rotateControl:!1,scaleControl:!1,streetViewControl:!1,panControl:!1,fullscreenControl:!1}}var Me=function(e){var t=Object(a.useContext)(Ce);return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement($e,{bootstrapURLKeys:{key:"AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"},defaultCenter:{lat:56.9032640496857,lng:24.09330663700942},defaultZoom:11,options:Le,onChange:function(e){var n=e.bounds,a=e.size.height,r=1-document.getElementById("map-overlay").offsetTop/a,c={nw:n.nw,ne:n.ne,sw:{lat:n.sw.lat+(n.nw.lat-n.sw.lat)*r,lng:n.sw.lng},se:{lat:n.se.lat+(n.nw.lat-n.se.lat)*r,lng:n.se.lng}};t.setBounds(c)}}))},Re=n(148),Ye=n(82),qe=n(742),Ae=n(408),Fe=n(381);function Ie(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=JSON.stringify(t),c=Object(a.useState)(!0),i=Object(v.a)(c,2),l=i[0],o=i[1],s=Object(a.useState)(void 0),u=Object(v.a)(s,2),m=u[0],p=u[1],d=Object(qe.a)(t,n,{equalityFn:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}),f=Object(v.a)(d,1),g=f[0],y=Object(Fe.a)(e,g),b=Object(v.a)(y,2),E=b[0],h=b[1],_=h.loading,O=h.data,x=Object(Ae.a)((function(){E()}),n),j=Object(v.a)(x,1),k=j[0];return Object(a.useEffect)((function(){o(!0),k()}),[r,k]),Object(a.useEffect)((function(){!1===_&&O&&(o(!1),p(O))}),[_]),{loading:_||l,data:O||m}}var Te=n(409),De=n.n(Te);function Be(){var e=Object(a.useContext)(Ce),t=Object(a.useMemo)((function(){return[[e.bounds.nw.lng,e.bounds.nw.lat],[e.bounds.ne.lng,e.bounds.ne.lat],[e.bounds.sw.lng,e.bounds.sw.lat],[e.bounds.se.lng,e.bounds.se.lat]]}),[e.bounds]),n=Object(a.useMemo)((function(){return b.a.features.filter((function(e){return De()(e.geometry.coordinates[0],t)})).map((function(e){return e.properties.id}))}),[t]);return{region:[e.region],locations:n.length>10?void 0:n}}var Ve=n(218),Ge=n.n(Ve);var ze=function(e){var t=e.children;return e.year,r.a.createElement("div",null,r.a.createElement(h.a,{as:"h4"},"Selected Area"),r.a.createElement("div",null,r.a.createElement("div",{className:Ge.a.currency},"\u20ac"),r.a.createElement("div",{className:Ge.a.amount},t),r.a.createElement("div",{className:Ge.a.label},"Median Price last 30 days")))},Ue=n(410),He=n(280),Je=n.n(He);function Ke(){var e=Object(Re.a)(["\n  query(\n    $type: String!\n    $region: [String!]!\n    $locations: [String!]\n  ) {\n    ","\n  }\n"]);return Ke=function(){return e},e}var We=Object(Ue.extendMoment)(pe.a),Ze=We().range(We().utc().startOf("day").subtract(30,"days"),new Date),Qe=Array.from(Ze.by("day",{excludeEnd:!0}));function Xe(e){return e?Qe.map((function(t,n){return e?{x:t.format("YYYY-MM-DD"),y:e["row_".concat(n)].summary.price.median}:{}})):[]}var et=function(e){var t,n=e.type,c=Be(),i=c.region,l=c.locations,o=Ie((t=Qe,Object(Ye.a)(Ke(),t.map((function(e,t){return"\n      row_".concat(t,': properties(\n        filter: {\n          type: { eq: $type }\n          published_at: {\n            gte: "').concat(e.toISOString(),'"\n            lte: "').concat(e.clone().endOf("day").toISOString(),'"\n          }\n          location_classificator: { in: $locations }\n          region: { in: $region }\n        }\n      ) {\n        summary {\n          price {\n            median\n          }\n        }\n      }\n    ')})))),{variables:{type:n,region:i,locations:l}},2e3),s=o.loading,u=o.data,m=Object(a.useMemo)((function(){return[{id:"Median price",data:Xe(u)}]}),[u]);return r.a.createElement(oe.a,{basic:!0,className:Je.a.container},r.a.createElement(se.a,{inverted:!0,active:s},r.a.createElement(ue.a,null)),r.a.createElement(de.a,{data:m,margin:{top:5,right:5,bottom:5,left:5},xScale:{type:"time",format:"%Y-%m-%d",precision:"day"},xFormat:"time:%Y-%m-%d",yScale:{type:"linear",stacked:!1},sliceTooltip:function(e){var t=e.slice;return r.a.createElement("div",{className:Je.a.tooltip},t.points.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,We(e.data.x).format("YYYY-MM-DD"))),r.a.createElement("div",null,r.a.createElement("strong",null,e.serieId,":")," ",Number(e.data.yFormatted).toLocaleString("en",{minimumFractionDigits:2})," ","EUR"))})))},colors:["#543193"],axisLeft:{enable:!1,tickSize:0},axisBottom:!1,enableGridX:!1,enableGridY:!1,enablePoints:!1,curve:"natural",useMesh:!1,enableSlices:"x"}))},tt=n(411),nt=n(286),at=n.n(nt);function rt(){var e=Object(Re.a)(['\n  query(\n    $type: String!\n    $date: String!\n    $region: [String!]!\n    $locations: [String!]\n  ) {\n    median_price: properties(\n      filter: {\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        price {\n          median\n        }\n      }\n    }\n\n    apartment_count: properties(\n      filter: {\n        category: { eq: "APARTMENT" }\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        count\n      }\n    }\n\n    house_count: properties(\n      filter: {\n        category: { eq: "HOUSE" }\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        count\n      }\n    }\n\n    land_count: properties(\n      filter: {\n        category: { eq: "LAND" }\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        count\n      }\n    }\n  }\n']);return rt=function(){return e},e}var ct=["#543193","#543193","#543193"],it=Object(Ye.a)(rt());function lt(e){return[{category:"Land",value:e?e.land_count.summary.count:0},{category:"House",value:e?e.house_count.summary.count:0},{category:"Apartment",value:e?e.apartment_count.summary.count:0}]}var ot=function(e){var t=e.type,n=e.startDate,c=Be(),i=c.region,l=c.locations,o=Ie(it,{variables:{type:t,date:n,region:i,locations:l}},1e3),s=o.loading,u=o.data,m=Object(a.useState)(ct),p=Object(v.a)(m,2),d=p[0],f=p[1];return r.a.createElement("div",null,r.a.createElement(h.a,{as:"h4",className:at.a.title},"Property type distribution"),r.a.createElement(oe.a,{basic:!0,className:at.a.container},r.a.createElement(se.a,{inverted:!0,active:s},r.a.createElement(ue.a,null)),r.a.createElement(tt.a,{data:lt(u),layout:"horizontal",enableGridY:!1,enableLabel:!1,axisLeft:{tickSize:0},axisBottom:!1,keys:["value"],indexBy:"category",margin:{top:0,right:0,bottom:0,left:60},animate:!0,colors:d,padding:.4,onClick:function(e){var t=e.index;f((function(e){if("#c0ace3"===e[t])return ct;var n=[].concat(ct);return n[t]="#c0ace3",n}))}})))},st=n(287),ut=n.n(st);function mt(){var e=Object(Re.a)(["\n  query(\n    $type: String!\n    $date: String!\n    $region: [String!]!\n    $locations: [String!]\n  ) {\n    properties(\n      filter: {\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        price {\n          median\n        }\n      }\n    }\n  }\n"]);return mt=function(){return e},e}var pt=Object(Ye.a)(mt());function dt(e){var t=e.price;return t?parseInt(t,10).toLocaleString("en"):"Unknown"}var ft=function(){var e=Be(),t=e.region,n=e.locations,c=Object(a.useState)(pe()().subtract(30,"days").format("YYYY-MM-DD")),i=Object(v.a)(c,1)[0],l=Object(a.useState)("sell"),o=Object(v.a)(l,1)[0],s=Ie(pt,{variables:{type:o,date:i,region:t,locations:n}},1e3),u=s.loading,m=s.error,p=s.data,d=u||!p;return m?r.a.createElement("div",{className:ut.a.container},r.a.createElement(h.a,{as:"h4"},"An unexpected error occured when attempting to fetch the data. Try again later.")):r.a.createElement("div",{className:ut.a.container,id:"map-overlay"},r.a.createElement(y.a,null,r.a.createElement(y.a.Column,{computer:8},r.a.createElement(ze,null,d?r.a.createElement(he.a,null):r.a.createElement(dt,{price:p.properties.summary.price.median})),r.a.createElement(et,{type:o})),r.a.createElement(y.a.Column,{computer:8},r.a.createElement(ot,{type:o,startDate:i}))))},gt=n(413),yt=n.n(gt);function vt(e){return[[e.ne.lat,e.ne.lng].join(" "),[e.nw.lat,e.nw.lng].join(" "),[e.se.lat,e.se.lng].join(" "),[e.sw.lat,e.sw.lng].join(" "),[e.ne.lat,e.ne.lng].join(" ")].join(", ")}var bt=function(){var e=Object(a.useState)({setBounds:function(e){c((function(t){return Object(P.a)(Object(P.a)({},t),{},{bounds:e,region:vt(e)})}))},bounds:{ne:{},nw:{},se:{},sw:{}},region:""}),t=Object(v.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:yt.a.container},r.a.createElement(Ce.Provider,{value:n},r.a.createElement(Me,null),r.a.createElement(ft,null)))},Et=n(156),ht=n.n(Et);var _t=function(e){return r.a.createElement(g.a,{fluid:!0,className:ht.a.container},r.a.createElement(f.a,{className:ht.a.githubCorner,href:"https://github.com/brokalys/map-app"}),r.a.createElement(y.a,{className:ht.a.grid},r.a.createElement(y.a.Column,{computer:9,className:ht.a.leftPanel},r.a.createElement(Ne,null)),r.a.createElement(y.a.Column,{computer:7,className:ht.a.rightPanel},r.a.createElement(bt,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(703),n(704);var Ot=w.getPlugin("react").createErrorBoundary(r.a);i.a.render(r.a.createElement(Ot,null,r.a.createElement(l.RecoilRoot,null,r.a.createElement(o.a,{client:p},r.a.createElement(_t,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[467,1,2]]]);
//# sourceMappingURL=main.79a5fa10.chunk.js.map