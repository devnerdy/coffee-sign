(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f06bd"],{"9bfd":function(a,s,t){"use strict";t.r(s);var r=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"animated fadeIn"},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Bootstrap Progress")]),t("div",{staticClass:"card-header-actions"},[t("a",{staticClass:"card-header-action",attrs:{href:"https://bootstrap-vue.js.org/docs/components/progress",rel:"noreferrer noopener",target:"_blank"}},[t("small",{staticClass:"text-muted"},[a._v("docs")])])])]),t("div",[t("b-progress",{attrs:{value:a.counter,max:a.max,"show-progress":"",animated:""}}),t("b-progress",{staticClass:"mt-1",attrs:{max:a.max,"show-value":""}},[t("b-progress-bar",{attrs:{value:.6*a.counter,variant:"success"}}),t("b-progress-bar",{attrs:{value:.25*a.counter,variant:"warning"}}),t("b-progress-bar",{attrs:{value:.15*a.counter,variant:"danger"}})],1),t("b-btn",{staticClass:"mt-4",on:{click:a.clicked}},[a._v("Click me")])],1)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("labels")])]),t("div",[t("h6",[a._v("No label")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2}}),t("h6",[a._v("Value label")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,"show-value":""}}),t("h6",[a._v("Progress label")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,"show-progress":""}}),t("h6",[a._v("Value label with precision")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,precision:2,"show-value":""}}),t("h6",[a._v("Progress label with precision")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value,max:a.max2,precision:2,"show-progress":""}})],1)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("width")])]),t("div",[t("h6",[a._v("Default width")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value3}}),t("h6",[a._v("Custom widths")]),t("b-progress",{staticClass:"w-75 mb-2",attrs:{value:a.value3}}),t("b-progress",{staticClass:"w-50 mb-2",attrs:{value:a.value3}}),t("b-progress",{staticClass:"w-25",attrs:{value:a.value3}})],1)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("height")])]),t("div",[t("h6",[a._v("Default height")]),t("b-progress",{staticClass:"mb-3",attrs:{value:a.value3,"show-progress":""}}),t("h6",[a._v("Custom heights")]),t("b-progress",{staticClass:"mb-2",attrs:{height:"2rem",value:a.value3,"show-progress":""}}),t("b-progress",{staticClass:"mb-2",attrs:{height:"20px",value:a.value3,"show-progress":""}}),t("b-progress",{attrs:{height:"2px",value:a.value3}})],1)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("variants")])]),t("div",a._l(a.bars,function(s,r){return t("div",{key:r,staticClass:"row mb-1"},[t("div",{staticClass:"col-sm-2"},[a._v(a._s(s.variant)+":")]),t("div",{staticClass:"col-sm-10 pt-1"},[t("b-progress",{key:s.variant,attrs:{value:s.value,variant:s.variant}})],1)])}),0)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("striped")])]),t("div",[t("b-progress",{staticClass:"mb-2",attrs:{value:25,variant:"success",striped:a.striped}}),t("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"info",striped:a.striped}}),t("b-progress",{staticClass:"mb-2",attrs:{value:75,variant:"warning",striped:a.striped}}),t("b-progress",{staticClass:"mb-2",attrs:{value:100,variant:"danger",striped:a.striped}}),t("b-button",{attrs:{variant:"secondary"},on:{click:function(s){a.striped=!a.striped}}},[a._v("\n          "+a._s(a.striped?"Remove":"Add")+" Striped\n        ")])],1)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("animated")])]),t("div",[t("b-progress",{staticClass:"mb-2",attrs:{value:25,variant:"success",striped:"",animated:a.animate}}),t("b-progress",{staticClass:"mb-2",attrs:{value:50,variant:"info",striped:"",animated:a.animate}}),t("b-progress",{staticClass:"mb-2",attrs:{value:75,variant:"warning",striped:"",animated:a.animate}}),t("b-progress",{staticClass:"mb-3",attrs:{value:100,variant:"danger",animated:a.animate}}),t("b-button",{attrs:{variant:"secondary"},on:{click:function(s){a.animate=!a.animate}}},[a._v("\n          "+a._s(a.animate?"Stop":"Start")+" Animation\n        ")])],1)]),t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[a._v(" Progress ")]),t("small",[a._v("multiple bars")])]),t("div",[t("b-progress",{staticClass:"mb-3",attrs:{max:a.max3}},[t("b-progress-bar",{attrs:{variant:"primary",value:a.values[0]}}),t("b-progress-bar",{attrs:{variant:"success",value:a.values[1]}}),t("b-progress-bar",{attrs:{variant:"info",value:a.values[2]}})],1),t("b-progress",{staticClass:"mb-3",attrs:{"show-progress":"",max:a.max3}},[t("b-progress-bar",{attrs:{variant:"primary",value:a.values[0]}}),t("b-progress-bar",{attrs:{variant:"success",value:a.values[1]}}),t("b-progress-bar",{attrs:{variant:"info",value:a.values[2]}})],1),t("b-progress",{staticClass:"mb-3",attrs:{"show-value":"",striped:"",max:a.max3}},[t("b-progress-bar",{attrs:{variant:"primary",value:a.values[0]}}),t("b-progress-bar",{attrs:{variant:"success",value:a.values[1]}}),t("b-progress-bar",{attrs:{variant:"info",value:a.values[2]}})],1),t("b-progress",{staticClass:"mb-3",attrs:{max:a.max3}},[t("b-progress-bar",{attrs:{variant:"primary",value:a.values[0],"show-progress":""}}),t("b-progress-bar",{attrs:{variant:"success",value:a.values[1],animated:"","show-progress":""}}),t("b-progress-bar",{attrs:{variant:"info",value:a.values[2],striped:"","show-progress":""}})],1)],1)])],1)])},e=[],i=(t("ac6a"),{name:"progress-bars",data:function(){return{counter:45,max:100,max2:50,value:33.333333333,value3:75,bars:[{variant:"success",value:75},{variant:"info",value:75},{variant:"warning",value:75},{variant:"danger",value:75},{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"dark",value:75}],timer:null,striped:!0,animate:!0,max3:100,values:[15,30,20]}},methods:{clicked:function(){this.counter=Math.random()*this.max,console.log("Change progress to "+Math.round(100*this.counter)/100)},setClock:function(){var a=this;this.timer=setInterval(function(){a.bars.forEach(function(a){a.value=25+75*Math.random()})},2e3)}},mounted:function(){this.setClock()},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}}),o=i,l=t("2877"),v=Object(l["a"])(o,r,e,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0f06bd.721922b5.js.map