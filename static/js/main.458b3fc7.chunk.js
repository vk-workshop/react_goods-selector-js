(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),n=c(4),a=(c(9),c(10),c(1)),d=c(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],i=function(){var e=Object(a.useState)("Jam"),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(d.jsxs)("main",{className:"section container",children:[Object(d.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["No goods selected"===c?"No goods selected":"".concat(c," is selected"),"No goods selected"!==c&&Object(d.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){s("No goods selected")}})]}),Object(d.jsx)("table",{className:"table",children:Object(d.jsx)("tbody",{children:l.map((function(e,t){return Object(d.jsxs)("tr",{"data-cy":"Good",className:e===c?"has-background-success-light":"",children:[Object(d.jsx)("td",{children:Object(d.jsx)("button",{"data-cy":e===c?"RemoveButton":"AddButton",type:"button",className:e===c?"button is-info":"button",onClick:function(){s((function(t){return t===e?"No goods selected":e}))},children:e===c?"-":"+"})}),Object(d.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})})]})};o.a.render(Object(d.jsx)(i,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.458b3fc7.chunk.js.map