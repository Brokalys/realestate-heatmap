(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],{150:function(e,t,n){e.exports={statisticAddon:"MeanPriceInFilterLocation_statisticAddon__ZZijL",textGreen:"MeanPriceInFilterLocation_textGreen__1TxZ3",textRed:"MeanPriceInFilterLocation_textRed__2oGI9"}},151:function(e,t,n){e.exports={container:"App_container__1MQN3",grid:"App_grid__3DnSg",leftPanel:"App_leftPanel__3Hl9k",rightPanel:"App_rightPanel__kN-EW",githubCorner:"App_githubCorner__3BLKB"}},224:function(e,t,n){e.exports={content:"SplitPaneLeft_content__4SUVj",highlightedText:"SplitPaneLeft_highlightedText__2q005"}},225:function(e,t,n){e.exports={currency:"AreaOverview_currency__1aglq",label:"AreaOverview_label__1Cauv",amount:"AreaOverview_amount__KkYcy"}},272:function(e,t,n){e.exports={shake:"Navigation_shake__1loJY","bell-shake":"Navigation_bell-shake__28FvC",notificationLink:"Navigation_notificationLink__dwBb-"}},279:function(e,t,n){e.exports={container:"PropertyPriceChart_container__b6m2Q",tooltip:"PropertyPriceChart_tooltip__iGhsd"}},280:function(e,t,n){e.exports={container:"PropertyPriceLine_container__3NyhK",tooltip:"PropertyPriceLine_tooltip__1tDKM"}},286:function(e,t,n){e.exports={container:"PropertyTypeChart_container__3smv6",title:"PropertyTypeChart_title__1REaR"}},287:function(e,t,n){e.exports={container:"MapOverlay_container__16kzn"}},408:function(e,t,n){e.exports={container:"FilterToolbar_container__3xqZF"}},432:function(e,t,n){e.exports={container:"SplitPaneRight_container__x3kzx"}},544:function(e,t,n){e.exports=n(786)},785:function(e,t,n){},786:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),c=n.n(l),o=n(24),i=n(54),s=new i.ApolloClient({cache:new i.InMemoryCache,link:new i.HttpLink({uri:"https://api.brokalys.com"})}),u=n(405),m=n.n(u),p=n(825),d=n(837),g=n(16),f=n(131),v=n(221),E=n(836),y=n(830),b=n(833),h=n(267),_=n.n(h),O=n(406),j=n.n(O);_.a.start({releaseStage:"production",enabledReleaseStages:["production"],apiKey:"d834235e29f9f8aba796385d728e56f2",plugins:[new j.a],collectUserIp:!1});var x=_.a,S=n(832),k=n(826),w=n(268),P=n(27),N=n.n(P),C=n(114),L=n(50),$=n(407),M=n.n($),R=Object(o.atom)({key:"filters",default:{category:"apartment",type:"sell",location:"latvia-riga-vecpilseta",priceType:"total"}}),Y=Object(o.selector)({key:"filters.category",get:function(e){return(0,e.get)(R).category},set:function(e,t){var n=e.get;return(0,e.set)(R,Object(L.a)(Object(L.a)({},n(R)),{},{category:t}))}}),A=Object(o.selector)({key:"filters.type",get:function(e){return(0,e.get)(R).type},set:function(e,t){var n=e.get;return(0,e.set)(R,Object(L.a)(Object(L.a)({},n(R)),{},{type:t}))}}),q=Object(o.selector)({key:"filters.location",get:function(e){return(0,e.get)(R).location},set:function(e,t){var n=e.get;return(0,e.set)(R,Object(L.a)(Object(L.a)({},n(R)),{},{location:t}))}}),B=Object(o.selector)({key:"filters.priceType",get:function(e){return(0,e.get)(R).priceType},set:function(e,t){var n=e.get;return(0,e.set)(R,Object(L.a)(Object(L.a)({},n(R)),{},{priceType:t}))}}),F=Object(o.selectorFamily)({key:"getPrices",get:function(e){return function(){var t=Object(C.a)(N.a.mark((function t(n){var a,r,l,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return(l=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.get("https://static-api.brokalys.com/stats/monthly?discard=0.1&filters=".concat(a));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},r=function(){return l.apply(this,arguments)},n.get,a=encodeURIComponent(JSON.stringify(e)),c=0,t.abrupt("return",new Promise(function(){var e=Object(C.a)(N.a.mark((function e(n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(!(0===(a=e.sent).loadingResults||c++>=3)){e.next=5;break}return e.abrupt("return",n(a));case 5:setTimeout((function(){return t(n)}),a.loadingResults<=2?1e3:3e3);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),I=Object(o.selector)({key:"priceInFilteredLocation",get:function(){var e=Object(C.a)(N.a.mark((function e(t){var n,a,r,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(q),r=n(A),l=n(Y),e.next=6,n(F({category:l,type:r,location_classificator:a}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),T=Object(o.selector)({key:"meanPriceLastMonth",get:function(){var e=Object(C.a)(N.a.mark((function e(t){var n,a,r,l,c,o,i,s,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(q),r=n(A),l=n(Y),c=n(B),e.next=7,n(F({category:l,type:r,location_classificator:a}));case 7:return o=e.sent,i=o.results,s="sqm"===c?"pricePerSqm":"price",u=i[i.length-1][s].mean,e.abrupt("return",{price:u,change:{mom:100*(1-u/i[i.length-2][s].mean),yoy:100*(1-u/i[i.length-13][s].mean)}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),D=Object(o.selector)({key:"rentalYield",get:function(){var e=Object(C.a)(N.a.mark((function e(t){var n,a,r,l,c,o,i,s,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.get,a=n(Y),r=n(q),l=n(B),e.next=6,Promise.all([n(F({category:a,type:"sell",location_classificator:r})),n(F({category:a,type:"rent",location_classificator:r}))]);case 6:return c=e.sent,o=Object(g.a)(c,2),i=o[0].results,s=o[1].results,u="sqm"===l?"pricePerSqm":"price",e.abrupt("return",s[s.length-1][u].mean/i[i.length-1][u].mean*100);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),V=n(408),G=n.n(V),W=f.riga.features.map((function(e){return{value:e.properties.id,text:e.properties.name}})),z=[{value:"apartment",text:"Apartment"},{value:"house",text:"House"},{value:"land",text:"Land"}],H=[{value:"sell",text:"Sell"},{value:"rent",text:"Rent"}],U=[{value:"total",text:"Total price"},{value:"sqm",text:"Price/sqm"}];var J=function(){var e=Object(o.useRecoilState)(q),t=Object(g.a)(e,2)[1],n=Object(o.useRecoilState)(Y),a=Object(g.a)(n,2)[1],l=Object(o.useRecoilState)(A),c=Object(g.a)(l,2)[1],i=Object(o.useRecoilState)(B),s=Object(g.a)(i,2)[1];return r.a.createElement("div",{className:G.a.container},r.a.createElement(S.a,{secondary:!0},r.a.createElement(S.a.Item,{fitted:!0},r.a.createElement(k.a,{placeholder:"Select location",search:function(e,t){var n=new RegExp(Object(w.transliterate)(t),"i");return e.filter((function(e){return n.test(Object(w.transliterate)(e.text))}))},selection:!0,defaultValue:"latvia-riga-vecpilseta",options:W,onChange:function(e,n){return t(n.value)}})),r.a.createElement(S.a.Item,{fitted:!0},r.a.createElement(k.a,{placeholder:"Select category",fluid:!0,selection:!0,defaultValue:"apartment",options:z,onChange:function(e,t){return a(t.value)}})),r.a.createElement(S.a.Item,{fitted:!0},r.a.createElement(k.a,{placeholder:"Select type",fluid:!0,selection:!0,defaultValue:"sell",options:H,onChange:function(e,t){return c(t.value)}})),r.a.createElement(S.a.Item,{fitted:!0},r.a.createElement(k.a,{placeholder:"Select price type",fluid:!0,selection:!0,defaultValue:"total",options:U,onChange:function(e,t){return s(t.value)}}))))},K=n(828),Q=n(148),Z=n(831),X=n(272),ee=n.n(X);var te=function(){return r.a.createElement(S.a,{secondary:!0},r.a.createElement(S.a.Header,null,r.a.createElement("img",{src:"https://brokalys.com/favicon.png",alt:"logo",height:"40px"})),r.a.createElement(S.a.Item,{position:"right"},r.a.createElement(K.a,{content:"Sign up for instant notifications about classifieds matching your parameters",inverted:!0,position:"bottom right",trigger:r.a.createElement("a",{href:"https://pinger.brokalys.com",target:"_blank",rel:"noopener noreferrer",className:ee.a.notificationLink,"data-testid":"pinger-button"},r.a.createElement(Q.a,{name:"bell outline",className:ee.a.shake}))})),r.a.createElement(S.a.Item,{fitted:!0},r.a.createElement(Z.a,{primary:!0,animated:"vertical",onClick:function(){window.location.href="mailto:matiss@brokalys.com?subject=Feedback"}},r.a.createElement(Z.a.Content,{visible:!0},"Give feedback"),r.a.createElement(Z.a.Content,{hidden:!0},r.a.createElement(Q.a,{name:"mail"})))))},ne=n(809),ae=n(822),re=n(7),le=n(835),ce=n(834),oe=n(823),ie=n(109),se=n.n(ie),ue=n(220),me=n(279),pe=n.n(me);function de(){var e=Object(o.useRecoilValue)(B),t=Object(o.useRecoilValue)(I).results,n=Object(a.useMemo)((function(){return[{id:"Average Price",data:t.map((function(t){var n="sqm"===e?t.pricePerSqm:t.price;return Object(L.a)(Object(L.a)({},n),{},{x:t.start_datetime.substr(0,10),y:n.mean})}))}]}),[t,e]),l=n[0].data.reduce((function(e,t){var n=t.max;return n>e?n:e}),0);function c(t){var n=t.value;return r.a.createElement("span",null,Number(n).toLocaleString("en",{minimumFractionDigits:2})," ","sqm"===e?r.a.createElement("span",null,"EUR/m",r.a.createElement("sup",null,"2")):"EUR")}return r.a.createElement(ue.a,{data:n,margin:{top:10,right:10,bottom:100,left:50},xScale:{type:"time",format:"%Y-%m-%d",precision:"month"},xFormat:"time:%Y-%m-%d",yScale:{type:"linear",stacked:!1,max:1.05*l},sliceTooltip:function(e){var t=e.slice;return r.a.createElement("div",{className:pe.a.tooltip},t.points.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,se()(e.data.x).format("YYYY-MM-DD"))),r.a.createElement("div",null,r.a.createElement("strong",null,"Min:")," ",r.a.createElement(c,{value:e.data.min})),r.a.createElement("div",null,r.a.createElement("strong",null,e.serieId,":")," ",r.a.createElement(c,{value:e.data.yFormatted})),r.a.createElement("div",null,r.a.createElement("strong",null,"Max:")," ",r.a.createElement(c,{value:e.data.max})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("strong",null,"Mode:")," ",r.a.createElement(c,{value:e.data.mode})),r.a.createElement("div",null,r.a.createElement("strong",null,"Median:")," ",r.a.createElement(c,{value:e.data.median})))})))},axisBottom:{format:"%Y-%m",tickValues:"every 2 months",tickRotation:-90},enablePoints:!0,curve:"monotoneX",useMesh:!0,enableSlices:"x",layers:["grid","markers","axes","areas","crosshair",ge,"lines","points","slices","mesh","legends"]})}function ge(e){var t=e.series,n=e.xScale,a=e.yScale,l=(e.innerHeight,Object(ne.a)().x((function(e){return n(e.data.x)})).y0((function(e){return a(e.data.min)})).y1((function(e){return a(e.data.max)})).curve(ae.a));return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.c,{defs:[{id:"pattern",type:"patternLines",background:"transparent",color:"#3daff7",lineWidth:1,spacing:6,rotation:-45}]}),r.a.createElement("path",{d:l(t[0].data),fill:"url(#pattern)",fillOpacity:.2,stroke:"#3daff7",strokeWidth:.4}))}var fe=function(){return r.a.createElement(le.a,{basic:!0,className:pe.a.container},r.a.createElement(v.ErrorBoundary,{fallback:r.a.createElement(y.a,{negative:!0},"Failed loading chart data. Please try again later."),onError:x.notify},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ce.a,{inverted:!0,active:!0},r.a.createElement(oe.a,null))},r.a.createElement(de,null))))},ve=n(146),Ee=n(139),ye=n.n(Ee),be=n(150),he=n.n(be);function _e(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"MoM: month-over-month"),r.a.createElement("p",null,"YoY: year-over-year"))}function Oe(){var e=Object(o.useRecoilValue)(B),t=Object(o.useRecoilValue)(T),n=t.price,a=t.change.mom,l=t.change.yoy;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Value,null,r.a.createElement("div",{className:he.a.statisticAddon},isFinite(a)&&r.a.createElement("div",null,r.a.createElement("span",{className:a<0?he.a.textGreen:he.a.textRed},a<0?"+":"",-a.toFixed(2),"%")," ","MoM"),isFinite(l)&&r.a.createElement("div",null,r.a.createElement("span",{className:l<0?he.a.textGreen:he.a.textRed},l<0?"+":"",-l.toFixed(2),"%")," ","YoY")),parseInt(n,10).toLocaleString("en")),r.a.createElement(b.a.Label,null,"Average Price (EUR","sqm"===e?r.a.createElement("span",null,"/m",r.a.createElement("sup",null,"2")):"",") ",r.a.createElement(ve.Tooltip,{content:r.a.createElement(_e,null),children:r.a.createElement(ve.Icon,{icon:"help"})})))}var je=function(){return r.a.createElement(b.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ye.a,{height:60,width:240})},r.a.createElement(Oe,null)))};function xe(){var e=Object(o.useRecoilValue)(D);return r.a.createElement(b.a.Value,null,e.toFixed(2),"%")}function Se(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"How much of the invested capital can I expect to make back each year?"),r.a.createElement("p",null,"A bigger number is better for landlords; a smaller - for renters."),r.a.createElement("p",null,"Calculation: average rent price / sell price in the last month"))}var ke=function(){return r.a.createElement(b.a,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ye.a,{height:42})},r.a.createElement(xe,null)),r.a.createElement(b.a.Label,null,"Rental Yield"," ",r.a.createElement(ve.Tooltip,{content:r.a.createElement(Se,null),children:r.a.createElement(ve.Icon,{icon:"help"})})))},we=n(224),Pe=n.n(we);var Ne=function(){var e=Object(o.useRecoilState)(R),t=Object(g.a)(e,1)[0],n=f.riga.features.find((function(e){return e.properties.id===t.location})).properties.name;return r.a.createElement("div",{className:Pe.a.container},r.a.createElement(te,null),r.a.createElement("div",{className:Pe.a.content},r.a.createElement(E.a,{as:"h2"},"Average Prices in"," ",r.a.createElement("span",{className:Pe.a.highlightedText},n)),r.a.createElement(J,null),r.a.createElement(fe,null),r.a.createElement("div",null,r.a.createElement(E.a,{as:"h3"},"Last Month"),r.a.createElement(v.ErrorBoundary,{fallback:r.a.createElement(y.a,{negative:!0},"Failed loading the data. Please try again later."),onError:x.notify},r.a.createElement(b.a.Group,{size:"small"},r.a.createElement(je,null),r.a.createElement(ke,null))))))},Ce=n(288),Le=r.a.createContext(),$e={lat:56.9032640496857,lng:24.09330663700942},Me={width:"100%",height:"100%"};var Re=r.a.memo((function(e){var t=r.a.useState(null),n=Object(g.a)(t,2),l=n[0],c=n[1],o=Object(Ce.b)({googleMapsApiKey:"AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"}),i=o.isLoaded,s=o.loadError,u=Object(a.useContext)(Le);function m(){var e=l.getDiv().clientHeight,t=1-document.getElementById("map-overlay").offsetTop/e,n={nw:{lat:l.getBounds().getSouthWest().lat()+(l.getBounds().getNorthEast().lat()-l.getBounds().getSouthWest().lat())*t,lng:l.getBounds().getNorthEast().lng()},ne:{lat:l.getBounds().getNorthEast().lat(),lng:l.getBounds().getNorthEast().lng()},sw:{lat:l.getBounds().getSouthWest().lat()+(l.getBounds().getNorthEast().lat()-l.getBounds().getSouthWest().lat())*t,lng:l.getBounds().getSouthWest().lng()},se:{lat:l.getBounds().getNorthEast().lat(),lng:l.getBounds().getSouthWest().lng()}};u.setBounds(n)}return s?r.a.createElement("div",null,"Failed loading the map. Please try again later."):i?function(){var e={zoomControlOptions:{position:window.google.maps.ControlPosition.RIGHT_TOP},rotateControl:!1,scaleControl:!1,streetViewControl:!1,panControl:!1,fullscreenControl:!1};return r.a.createElement(Ce.a,{options:e,mapContainerStyle:Me,center:$e,zoom:11,onLoad:c,onBoundsChanged:m})}():r.a.createElement("div",null,"Loading...")})),Ye=n(140),Ae=n(824),qe=n(427);function Be(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=JSON.stringify(t),l=Object(a.useState)(!0),c=Object(g.a)(l,2),o=c[0],s=c[1],u=Object(a.useState)(void 0),m=Object(g.a)(u,2),p=m[0],d=m[1],f=Object(Ae.a)(t,n,{equalityFn:function(e,t){return JSON.stringify(e)===JSON.stringify(t)}}),v=Object(g.a)(f,1),E=v[0],y=Object(i.useLazyQuery)(e,E),b=Object(g.a)(y,2),h=b[0],_=b[1],O=_.loading,j=_.data,x=Object(qe.a)((function(){h()}),n),S=Object(g.a)(x,1),k=S[0];return Object(a.useEffect)((function(){s(!0),k()}),[r,k]),Object(a.useEffect)((function(){!1===O&&j&&(s(!1),d(j))}),[O]),{loading:O||o,data:j||p}}var Fe=n(428),Ie=n.n(Fe);function Te(){var e=Object(a.useContext)(Le),t=Object(a.useMemo)((function(){return[[e.bounds.nw.lng,e.bounds.nw.lat],[e.bounds.ne.lng,e.bounds.ne.lat],[e.bounds.sw.lng,e.bounds.sw.lat],[e.bounds.se.lng,e.bounds.se.lat]]}),[e.bounds]),n=Object(a.useMemo)((function(){return f.riga.features.filter((function(e){return Ie()(e.geometry.coordinates[0],t)})).map((function(e){return e.properties.id}))}),[t]);return{region:[e.region],locations:n.length>10?void 0:n}}var De=n(225),Ve=n.n(De);var Ge=function(e){var t=e.children;return e.year,r.a.createElement("div",null,r.a.createElement(E.a,{as:"h4"},"Selected Area"),r.a.createElement("div",null,r.a.createElement("div",{className:Ve.a.currency},"\u20ac"),r.a.createElement("div",{className:Ve.a.amount},t),r.a.createElement("div",{className:Ve.a.label},"Average Price last 30 days")))},We=n(429),ze=n(280),He=n.n(ze);function Ue(){var e=Object(Ye.a)(["\n  query(\n    $type: String!\n    $region: [String!]!\n    $locations: [String!]\n  ) {\n    ","\n  }\n"]);return Ue=function(){return e},e}var Je=Object(We.extendMoment)(se.a),Ke=Je().range(Je().utc().startOf("day").subtract(30,"days"),new Date),Qe=Array.from(Ke.by("day",{excludeEnd:!0}));function Ze(e){return e?Qe.map((function(t,n){return e?{x:t.format("YYYY-MM-DD"),y:e["row_".concat(n)].summary.price.mean}:{}})):[]}var Xe=function(e){var t,n=e.type,l=Te(),c=l.region,o=l.locations,s=Be((t=Qe,Object(i.gql)(Ue(),t.map((function(e,t){return"\n      row_".concat(t,': properties(\n        filter: {\n          type: { eq: $type }\n          published_at: {\n            gte: "').concat(e.toISOString(),'"\n            lte: "').concat(e.clone().endOf("day").toISOString(),'"\n          }\n          location_classificator: { in: $locations }\n          region: { in: $region }\n        }\n      ) {\n        summary {\n          price(discard: 0.1) {\n            mean\n          }\n        }\n      }\n    ')})))),{variables:{type:n,region:c,locations:o}},2e3),u=s.loading,m=s.data,p=Object(a.useMemo)((function(){return[{id:"Average price",data:Ze(m)}]}),[m]);return r.a.createElement(le.a,{basic:!0,className:He.a.container},r.a.createElement(ce.a,{inverted:!0,active:u},r.a.createElement(oe.a,null)),r.a.createElement(ue.a,{data:p,margin:{top:5,right:5,bottom:5,left:5},xScale:{type:"time",format:"%Y-%m-%d",precision:"day"},xFormat:"time:%Y-%m-%d",yScale:{type:"linear",stacked:!1},sliceTooltip:function(e){var t=e.slice;return r.a.createElement("div",{className:He.a.tooltip},t.points.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement("strong",null,Je(e.data.x).format("YYYY-MM-DD"))),r.a.createElement("div",null,r.a.createElement("strong",null,e.serieId,":")," ",Number(e.data.yFormatted).toLocaleString("en",{minimumFractionDigits:2})," ","EUR"))})))},colors:["#543193"],axisLeft:{enable:!1,tickSize:0},axisBottom:!1,enableGridX:!1,enableGridY:!1,enablePoints:!1,curve:"natural",useMesh:!1,enableSlices:"x"}))},et=n(430),tt=n(286),nt=n.n(tt);function at(){var e=Object(Ye.a)(['\n  query(\n    $type: String!\n    $date: String!\n    $region: [String!]!\n    $locations: [String!]\n  ) {\n    mean_price: properties(\n      filter: {\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        price(discard: 0.1) {\n          mean\n        }\n      }\n    }\n\n    apartment_count: properties(\n      filter: {\n        category: { eq: "APARTMENT" }\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        count\n      }\n    }\n\n    house_count: properties(\n      filter: {\n        category: { eq: "HOUSE" }\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        count\n      }\n    }\n\n    land_count: properties(\n      filter: {\n        category: { eq: "LAND" }\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        count\n      }\n    }\n  }\n']);return at=function(){return e},e}var rt=["#543193","#543193","#543193"],lt=Object(i.gql)(at());function ct(e){return[{category:"Land",value:e?e.land_count.summary.count:0},{category:"House",value:e?e.house_count.summary.count:0},{category:"Apartment",value:e?e.apartment_count.summary.count:0}]}var ot=function(e){var t=e.type,n=e.startDate,l=Te(),c=l.region,o=l.locations,i=Be(lt,{variables:{type:t,date:n,region:c,locations:o}},1e3),s=i.loading,u=i.data,m=Object(a.useState)(rt),p=Object(g.a)(m,2),d=p[0],f=p[1];return r.a.createElement("div",null,r.a.createElement(E.a,{as:"h4",className:nt.a.title},"Property type distribution"),r.a.createElement(le.a,{basic:!0,className:nt.a.container},r.a.createElement(ce.a,{inverted:!0,active:s},r.a.createElement(oe.a,null)),r.a.createElement(et.a,{data:ct(u),layout:"horizontal",enableGridY:!1,enableLabel:!1,axisLeft:{tickSize:0},axisBottom:!1,keys:["value"],indexBy:"category",margin:{top:0,right:0,bottom:0,left:60},animate:!0,colors:d,padding:.4,onClick:function(e){var t=e.index;f((function(e){if("#c0ace3"===e[t])return rt;var n=[].concat(rt);return n[t]="#c0ace3",n}))}})))},it=n(287),st=n.n(it);function ut(){var e=Object(Ye.a)(["\n  query(\n    $type: String!\n    $date: String!\n    $region: [String!]!\n    $locations: [String!]\n  ) {\n    properties(\n      filter: {\n        type: { eq: $type }\n        published_at: { gte: $date }\n        location_classificator: { in: $locations }\n        region: { in: $region }\n      }\n    ) {\n      summary {\n        price(discard: 0.1) {\n          mean\n        }\n      }\n    }\n  }\n"]);return ut=function(){return e},e}var mt=Object(i.gql)(ut());function pt(e){var t=e.price;return t?parseInt(t,10).toLocaleString("en"):"Unknown"}var dt=function(){var e=Te(),t=e.region,n=e.locations,l=Object(a.useState)(se()().subtract(30,"days").format("YYYY-MM-DD")),c=Object(g.a)(l,1)[0],o=Object(a.useState)("sell"),i=Object(g.a)(o,1)[0],s=Be(mt,{variables:{type:i,date:c,region:t,locations:n}},1e3),u=s.loading,m=s.error,p=s.data,f=u||!p;return m?r.a.createElement("div",{className:st.a.container},r.a.createElement(E.a,{as:"h4"},"An unexpected error occured when attempting to fetch the data. Try again later.")):r.a.createElement("div",{className:st.a.container,id:"map-overlay"},r.a.createElement(d.a,null,r.a.createElement(d.a.Column,{computer:8},r.a.createElement(Ge,null,f?r.a.createElement(ye.a,null):r.a.createElement(pt,{price:p.properties.summary.price.mean})),r.a.createElement(Xe,{type:i})),r.a.createElement(d.a.Column,{computer:8},r.a.createElement(ot,{type:i,startDate:c}))))},gt=n(432),ft=n.n(gt);function vt(e){return[[e.ne.lat,e.ne.lng].join(" "),[e.nw.lat,e.nw.lng].join(" "),[e.sw.lat,e.sw.lng].join(" "),[e.se.lat,e.se.lng].join(" "),[e.ne.lat,e.ne.lng].join(" ")].join(", ")}var Et=function(){var e=Object(a.useState)({setBounds:function(e){l((function(t){return Object(L.a)(Object(L.a)({},t),{},{bounds:e,region:vt(e)})}))},bounds:{ne:{},nw:{},se:{},sw:{}},region:""}),t=Object(g.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:ft.a.container},r.a.createElement(Le.Provider,{value:n},r.a.createElement(Re,null),r.a.createElement(dt,null)))},yt=n(151),bt=n.n(yt);var ht=function(e){return r.a.createElement(p.a,{fluid:!0,className:bt.a.container},r.a.createElement(m.a,{className:bt.a.githubCorner,href:"https://github.com/brokalys/map-app"}),r.a.createElement(d.a,{className:bt.a.grid},r.a.createElement(d.a.Column,{computer:9,className:bt.a.leftPanel},r.a.createElement(Ne,null)),r.a.createElement(d.a.Column,{computer:7,className:bt.a.rightPanel},r.a.createElement(Et,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(782),n(783),n(784),n(785);var _t=x.getPlugin("react").createErrorBoundary(r.a);c.a.render(r.a.createElement(_t,null,r.a.createElement(o.RecoilRoot,null,r.a.createElement(i.ApolloProvider,{client:s},r.a.createElement(ht,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[544,1,2]]]);
//# sourceMappingURL=main.35977dcf.chunk.js.map