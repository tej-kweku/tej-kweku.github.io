(function(e){function t(t){for(var o,s,r=t[0],l=t[1],u=t[2],p=0,f=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"06a0":function(e,t,n){"use strict";var o=n("b784"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("geojson-widget",{attrs:{"mapbox-access-token":"pk.eyJ1IjoidGVqLWt3ZWt1IiwiYSI6ImNrYXY4aW43dzA5OG4ycXBjbXp0b2FveWMifQ.ZkKcESUjcSJOaa3zACXJNw","min-features":"1","max-features":"5",parentBBox:e.parentBBox,"sibling-geojson":e.siblingGeojson},on:{input:function(t){return e.newGeoJSON(t)},error:e.showError},model:{value:e.gd,callback:function(t){e.gd=t},expression:"gd"}}),e._v(" "+e._s(e.gd)+" ")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"container",attrs:{id:"top-widget-controls"}},[n("div",{staticClass:"form-group"},[n("h5",{staticClass:"m-r-20",staticStyle:{display:"inline"}},[e._v("Data Input")]),"manual"==e.wDataInputType||"both"==e.wDataInputType?n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"geojson-input-type-manual"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputType,expression:"inputType"}],ref:"geojsonInputTypeManual",staticClass:"control-input",attrs:{type:"radio",id:"geojson-input-type-manual",value:"manual",disabled:e.inputDisabled},domProps:{checked:e._q(e.inputType,"manual")},on:{change:[function(t){e.inputType="manual"},function(t){return e.mapDataInputChanged("manual")}]}}),n("span",{staticClass:"custom-control-label"},[e._v("Manual")])]):e._e(),"map"==e.wDataInputType||"both"==e.wDataInputType?n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"geojson-input-type-map"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputType,expression:"inputType"}],ref:"geojsonInputTypeMap",staticClass:"control-input",attrs:{type:"radio",id:"geojson-input-type-map",value:"map",disabled:e.inputDisabled},domProps:{checked:e._q(e.inputType,"map")},on:{change:[function(t){e.inputType="map"},function(t){return e.mapDataInputChanged("map")}]}}),n("span",{staticClass:"custom-control-label"},[e._v("Map")])]):e._e()]),n("div",{staticClass:"config"},[n("button",{on:{click:e.toggleConfigContainer}},[e._v(" Config")]),n("div",{staticClass:"config-content",style:{display:e.config.show.configContainer}},[n("h5",{staticClass:"config-title"},[e._v(" Feature Count")]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-min-features"}},[e._v("Minumum: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.minFeatures,expression:"config.minFeatures"}],staticClass:"control-input",attrs:{type:"number",id:"config-min-features",min:Number(e.minFeatures),max:Number(e.config.maxFeatures)-1},domProps:{value:e.config.minFeatures},on:{input:function(t){t.target.composing||e.$set(e.config,"minFeatures",t.target.value)}}})]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-max-features"}},[e._v("Maximum: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.maxFeatures,expression:"config.maxFeatures"}],staticClass:"control-input",attrs:{type:"number",id:"config-max-features",min:Number(e.config.minFeatures)+1,max:Number(e.maxFeatures)},domProps:{value:e.config.maxFeatures},on:{input:function(t){t.target.composing||e.$set(e.config,"maxFeatures",t.target.value)}}})]),n("hr"),n("h5",{staticClass:"config-title"},[e._v(" Show Geojsons")]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-show-parentbbox"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.show.parentBBox,expression:"config.show.parentBBox"}],staticClass:"control-input",attrs:{type:"checkbox",id:"config-show-parentbbox",disabled:!e.parentBBox,"true-value":"true","false-value":""},domProps:{checked:Array.isArray(e.config.show.parentBBox)?e._i(e.config.show.parentBBox,null)>-1:e._q(e.config.show.parentBBox,"true")},on:{change:[function(t){var n=e.config.show.parentBBox,o=t.target,i=o.checked?"true":"";if(Array.isArray(n)){var a=null,s=e._i(n,a);o.checked?s<0&&e.$set(e.config.show,"parentBBox",n.concat([a])):s>-1&&e.$set(e.config.show,"parentBBox",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.config.show,"parentBBox",i)},e.showParentBBox]}}),n("span",{staticClass:"custom-control-label"},[e._v("Parent Bounding Box")])])]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-show-sibling-geojson"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.show.siblingGeojson,expression:"config.show.siblingGeojson"}],staticClass:"control-input",attrs:{type:"checkbox",id:"config-show-sibling-geojson",disabled:!e.siblingGeojson,"true-value":"true","false-value":""},domProps:{checked:Array.isArray(e.config.show.siblingGeojson)?e._i(e.config.show.siblingGeojson,null)>-1:e._q(e.config.show.siblingGeojson,"true")},on:{change:[function(t){var n=e.config.show.siblingGeojson,o=t.target,i=o.checked?"true":"";if(Array.isArray(n)){var a=null,s=e._i(n,a);o.checked?s<0&&e.$set(e.config.show,"siblingGeojson",n.concat([a])):s>-1&&e.$set(e.config.show,"siblingGeojson",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.config.show,"siblingGeojson",i)},e.showSiblingGeojson]}}),n("span",{staticClass:"custom-control-label"},[e._v("Sibling Geojson")])])]),n("hr"),n("h5",{staticClass:"config-title"},[e._v(" Validation Rules")]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-validation-rules-no-intersecting-features"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.validationRules.noIntersectingFeatures,expression:"config.validationRules.noIntersectingFeatures"}],staticClass:"control-input",attrs:{type:"checkbox",id:"config-validation-rules-no-intersecting-features",disabled:e.errors.turf,"true-value":"true","false-value":""},domProps:{checked:Array.isArray(e.config.validationRules.noIntersectingFeatures)?e._i(e.config.validationRules.noIntersectingFeatures,null)>-1:e._q(e.config.validationRules.noIntersectingFeatures,"true")},on:{change:function(t){var n=e.config.validationRules.noIntersectingFeatures,o=t.target,i=o.checked?"true":"";if(Array.isArray(n)){var a=null,s=e._i(n,a);o.checked?s<0&&e.$set(e.config.validationRules,"noIntersectingFeatures",n.concat([a])):s>-1&&e.$set(e.config.validationRules,"noIntersectingFeatures",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.config.validationRules,"noIntersectingFeatures",i)}}}),n("span",{staticClass:"custom-control-label"},[e._v("No Intersecting Features")])])]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-validation-rules-do-not-intersect-sibling-geojson"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.validationRules.doNotIntersectSiblingGeojson,expression:"config.validationRules.doNotIntersectSiblingGeojson"}],staticClass:"control-input",attrs:{type:"checkbox",id:"config-validation-rules-do-not-intersect-sibling-geojson",disabled:e.errors.turf,"true-value":"true","false-value":""},domProps:{checked:Array.isArray(e.config.validationRules.doNotIntersectSiblingGeojson)?e._i(e.config.validationRules.doNotIntersectSiblingGeojson,null)>-1:e._q(e.config.validationRules.doNotIntersectSiblingGeojson,"true")},on:{change:function(t){var n=e.config.validationRules.doNotIntersectSiblingGeojson,o=t.target,i=o.checked?"true":"";if(Array.isArray(n)){var a=null,s=e._i(n,a);o.checked?s<0&&e.$set(e.config.validationRules,"doNotIntersectSiblingGeojson",n.concat([a])):s>-1&&e.$set(e.config.validationRules,"doNotIntersectSiblingGeojson",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.config.validationRules,"doNotIntersectSiblingGeojson",i)}}}),n("span",{staticClass:"custom-control-label"},[e._v("Do Not Intersect Sibling Geojson")])])]),n("div",{staticClass:"config-group"},[n("label",{staticClass:"custom-control custom-radio custom-control-inline",attrs:{for:"config-validation-rules-features-in-bounding-box"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.validationRules.featuresInBoundingBox,expression:"config.validationRules.featuresInBoundingBox"}],staticClass:"control-input",attrs:{type:"checkbox",id:"config-validation-rules-features-in-bounding-box","true-value":"true","false-value":"",disabled:!e.parentBBox||e.errors.turf},domProps:{checked:Array.isArray(e.config.validationRules.featuresInBoundingBox)?e._i(e.config.validationRules.featuresInBoundingBox,null)>-1:e._q(e.config.validationRules.featuresInBoundingBox,"true")},on:{change:function(t){var n=e.config.validationRules.featuresInBoundingBox,o=t.target,i=o.checked?"true":"";if(Array.isArray(n)){var a=null,s=e._i(n,a);o.checked?s<0&&e.$set(e.config.validationRules,"featuresInBoundingBox",n.concat([a])):s>-1&&e.$set(e.config.validationRules,"featuresInBoundingBox",n.slice(0,s).concat(n.slice(s+1)))}else e.$set(e.config.validationRules,"featuresInBoundingBox",i)}}}),n("span",{staticClass:"custom-control-label"},[e._v("All Features in Bounding Box")])])])])])]),"manual"==e.wDataInputType||"both"==e.wDataInputType?n("form",{directives:[{name:"show",rawName:"v-show",value:"manual"==e.inputType,expression:"((inputType == 'manual'))"}],attrs:{id:"feature-container"}},[n("div",{staticClass:"m-b-20"},[n("button",{staticClass:"btn btn-primary",attrs:{disabled:!e.canAddFeature},on:{click:function(t){return t.preventDefault(),e.addFeature(1)}}},[e._v(" Add Feature ")]),e._l(e.geojson.features,(function(t,o){return n("div",{key:o,staticClass:"col-lg-12 m-t-10 feature"},[n("div",{staticClass:"m-b-10 m-r-10 feature-title"},[n("label",{staticClass:"control-label"},[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.properties.title,expression:"feature.properties.title"}],ref:"featureTitle"+o,refInFor:!0,staticClass:"form-control",attrs:{disabled:e.inputDisabled,type:"text",required:""},domProps:{value:t.properties.title},on:{input:function(n){n.target.composing||e.$set(t.properties,"title",n.target.value)}}})]),n("div",{staticClass:"m-b-10 m-r-10 feature-coordinates"},[e._m(0,!0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.geometry.coordinates,expression:"feature.geometry.coordinates"}],ref:"featureCoordinates"+o,refInFor:!0,staticClass:"form-control",attrs:{disabled:e.inputDisabled,type:"text",required:""},domProps:{value:t.geometry.coordinates},on:{input:function(n){n.target.composing||e.$set(t.geometry,"coordinates",n.target.value)}}})]),n("div",{staticClass:"feature-actions"},[n("button",{staticClass:"btn btn-danger",attrs:{disabled:e.inputDisabled},on:{click:function(t){return t.preventDefault(),e.removeFeature(o)}}},[e._v(" Remove ")])])])}))],2)]):e._e(),n("div",["map"==e.wDataInputType||"both"==e.wDataInputType?n("div",{directives:[{name:"show",rawName:"v-show",value:"map"==e.inputType,expression:"((inputType == 'map'))"}],ref:"mapObj",staticClass:"m-t-20",attrs:{id:"map"}}):e._e()]),n("div",{staticClass:"middle"},[n("div",{staticClass:"btn-group m-b-20"},[n("button",{staticClass:"btn btn-primary",staticStyle:{float:"right"},attrs:{disabled:e.canEdit},on:{click:function(t){return t.stopPropagation(),e.editMapData(t)}}},[e._v(" Edit ")]),n("button",{staticClass:"btn btn-primary",staticStyle:{float:"right"},attrs:{disabled:e.canReset},on:{click:function(t){return t.stopPropagation(),e.resetMapData(t)}}},[e._v(" Reset ")]),n("button",{staticClass:"btn btn-primary",staticStyle:{float:"right"},attrs:{disabled:e.canValidate},on:{click:function(t){return t.stopPropagation(),e.validateMapData(t)}}},[e._v(" Validate ")])])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"control-label"},[e._v(" Coordinates "),n("span",{staticClass:"text-danger"},[e._v("*")])])}],l=(n("4160"),n("c975"),n("a15b"),n("d81d"),n("a434"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("1da1")),u=null,c=null,p=null,f=null,d={props:["mapboxAccessToken","minFeatures","maxFeatures","dataInputType","parentBBox","siblingGeojson"],data:function(){return{inputDisabled:!1,inputType:null,countFeatures:0,geojson:{type:"FeatureCollection",features:[]},finalGeojson:{type:"FeatureCollection",features:[]},defaults:{geojson:{type:"FeatureCollection",features:[]},dataInputType:"both"},config:{minFeatures:1,maxFeatures:10,show:{configContainer:"none",parentBBox:!0,siblingGeojson:!0},validationRules:{noIntersectingFeatures:!1,doNotIntersectSiblingGeojson:!1,featuresInBoundingBox:!1}},errors:{turf:!1}}},methods:{toggleConfigContainer:function(){"none"==this.config.show.configContainer?this.config.show.configContainer="block":this.config.show.configContainer="none"},addFeature:function(e){for(var t=0;t<e;t++){var n=turf.polygon([]);this.geojson.features.push(n),this.countFeatures++}},removeFeature:function(e){this.geojson.features.length>this.config.minFeatures?(this.geojson.features.splice(e,1),this.countFeatures--):this.$emit("error","Geojson must have at least 1 feature")},validateMapData:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){var t,n,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,n=null,this.finalGeojson=JSON.parse(JSON.stringify(this.defaults.geojson)),e.t0=this.inputType,e.next="manual"===e.t0?6:"map"===e.t0?8:10;break;case 6:return n=JSON.parse(JSON.stringify(this.geojson)),e.abrupt("break",10);case 8:return n=c.toGeoJSON(),e.abrupt("break",10);case 10:this.testHasValidFeatures(this.inputType,n).then((function(e){var n=o.config.validationRules.noIntersectingFeatures?o.testFeaturesIntersectOneAnother(t.finalGeojson.features):Promise.resolve(!0),i=o.config.validationRules.doNotIntersectSiblingGeojson?o.testFeaturesIntersectSiblingGeojson(t.finalGeojson.features):Promise.resolve(!0),a=o.config.validationRules.featuresInBoundingBox?o.testBoundingBoxContainsFeatures(t.finalGeojson.features,o.parentBBox):Promise.resolve(!0);Promise.all([n,i,a]).then((function(e){t.inputDisabled=!0,f&&u.removeControl(f),t.$emit("input",o.finalGeojson)})).catch((function(e){var n="";"TFIOA"==e.test||"TFISG"==e.test?e.data.forEach((function(e){"manual"==t.inputType?(t.$refs["featureCoordinates"+e["indexes"][0]][0].classList.add("is-invalid"),t.$refs["featureCoordinates"+e["indexes"][1]][0].classList.add("is-invalid"),n="Feature '"+e["titles"][0]+"' intersects/is within Feature '"+e["titles"][1]+"'"):"map"==t.inputType&&(n="Features are not to intersect one another ("+e.titles.join(", ")+")"),t.$emit("error",n)})):"TBBCF"==e.test?e.data.forEach((function(e){n="Feature '"+e+"' is not fully within the Parent Bounding Box",t.$emit("error",n)})):t.$emit("error","Unable to process complex feature intersections. Recheck")}))})).catch((function(e){t.$emit("error",e.data)}));case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),editMapData:function(){this.inputDisabled=!1,f._map||u.addControl(f)},resetMapData:function(){switch(this.inputType){case"manual":this.geojson=JSON.parse(JSON.stringify(this.defaults.geojson));break;case"map":f&&!f._map&&u.addControl(f),this.countFeatures=0;break;default:break}c&&c.clearLayers(),this.finalGeojson=JSON.parse(JSON.stringify(this.defaults.geojson)),this.inputDisabled=!1,this.$emit("input",null)},testHasValidFeatures:function(e,t){var n=this;return new Promise((function(o,i){var a=n;switch(e){case"manual":n.finalGeojson=JSON.parse(JSON.stringify(n.defaults.geojson)),t.features.forEach((function(e,t){var o=a.$refs["featureCoordinates"+t][0];o.classList.remove("is-invalid");try{if(!e.properties.title)throw new Error("Feature must have a title");var s=turf.polygon(JSON.parse(e.geometry.coordinates),{title:e.properties.title});a.finalGeojson.features.push(s)}catch(r){a.finalGeojson=JSON.parse(JSON.stringify(n.defaults.geojson)),o.classList.add("is-invalid"),o.focus(),i({test:"THVF",data:r.message,success:!1})}}));break;case"map":n.finalGeojson=c.toGeoJSON(),n.finalGeojson.features.length<1?i({test:"THVF",data:"Use the drawing tools to draw at least one polygon"}):n.finalGeojson.features.length>n.config.maxFeatures&&i({test:"THVF",data:"Number of features exceeds limit for selected Geofence Type"});break;default:break}o({test:"THVF",success:!0})}))},testFeaturesIntersectOneAnother:function(e){return new Promise((function(t,n){for(var o=[],i=null,a=e.length,s=0;s<a;s++)for(var r=e[s],l=e[s].properties.title?e[s].properties.title:s+1,u=s+1;u<a;u++){var c=e[u],p=e[u].properties.title?e[u].properties.title:u+1;i=turf.intersect(r,c),i&&["Polygon","MultiPolygon"].indexOf(i.geometry.type)>-1&&o.push({titles:[l,p],indexes:[s,u]})}0==o.length?t({test:"TFIOA",success:!0}):n({test:"TFIOA",data:o,success:!1})}))},testFeaturesIntersectSiblingGeojson:function(e){var t=this;return new Promise((function(n,o){for(var i=[],a=null,s=t.siblingGeojson.features,r=0;r<s.length;r++)for(var l=s[r],u=s[r].properties.title?s[r].properties.title:r+1,c=0;c<e.length;c++){var p=e[c],f=e[c].properties.title?e[c].properties.title:c+1;a=turf.intersect(l,p),a&&["Polygon","MultiPolygon"].indexOf(a.geometry.type)>-1&&i.push({titles:[u,f],indexes:[r,c]})}0==i.length?n({test:"TFISG",success:!0}):o({test:"TFISG",data:i,success:!1})}))},testBoundingBoxContainsFeatures:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return new Promise((function(n,o){var i=[],a=0;if(null!=t)for(var s=0;s<e.length;s++){var r=e[s],l=turf.explode(r).features.map((function(e){return e.geometry}));a=l.length;var u=turf.featureCollection(l),c=turf.within(u,t);if(c.features.length!=a){var p=r.properties.title?r.properties.title:s+1;i.push(p)}}0==i.length?n({test:"TBBCF",success:!0}):o({test:"TBBCF",data:i,success:!1})}))},mapDataInputChanged:function(e){var t=this,n=this;"manual"==e?(this.geojson=JSON.parse(JSON.stringify(c.toGeoJSON())),this.geojson.features.forEach((function(e){e.geometry.coordinates=JSON.stringify(e.geometry.coordinates)}))):"map"==e&&this.testHasValidFeatures("manual",JSON.parse(JSON.stringify(this.geojson))).then((function(){t.initializeMap()})).catch((function(e){n.inputType="manual",n.$emit("error",e.data)}))},showParentBBox:function(){var e=this,t=this;if(t.config.show.parentBBox)try{this.parentBBoxGeoJSONGroup=L.geoJSON(t.parentBBox,{style:{pmIgnore:!0,color:"#555555",fillOpacity:.25,fillColor:"#6491A2",weight:2}}).addTo(u).bringToBack(),u.fitBounds(this.parentBBoxGeoJSONGroup.getBounds()),t.$nextTick((function(){u&&(u.invalidateSize(),u.fitBounds(e.parentBBoxGeoJSONGroup.getBounds()))}))}catch(n){t.$emit("error",n.message)}else u.removeLayer(this.parentBBoxGeoJSONGroup)},showSiblingGeojson:function(){var e=this;if(e.config.show.siblingGeojson)try{this.siblingGeoJSONGroup=L.geoJSON(e.siblingGeojson,{style:{pmIgnore:!0,color:"#EA9E14",dashArray:"3 1",dashOffset:"3",fillOpacity:.25,fillColor:"#F2D678",weight:2}}).addTo(u).bringToBack()}catch(t){e.$emit("error",t)}else u.removeLayer(this.siblingGeoJSONGroup)},initializeMap:function(){var e=this;try{if(u||(L.mapbox.accessToken=this.mapboxAccessToken,p=L.featureGroup(),u=L.map("map",{worldCopyJump:!0}).setView([8,-1.5],7).addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/streets-v11",{tileLayer:{format:"jpg70"}})),u.on("draw:created",(function(t,n){try{e.countFeatures>=e.config.maxFeatures?e.$emit("error","Number of features exceeds limit for selected Geofence Type"):(e.countFeatures++,p.clearLayers(),p.addLayer(t.layer).setZIndex(),c.addData(p.toGeoJSON()),e.$emit("input",null))}catch(o){e.$emit("error",o)}})),u.on("draw:edited",(function(e){})),u.on("draw:deleted",(function(t){e.countFeatures-=Object.keys(t.layers._layers).length}))),c){c.clearLayers();var t=JSON.parse(JSON.stringify(e.finalGeojson));c.addData(t)}else{var n=JSON.parse(JSON.stringify(e.finalGeojson));c=L.geoJSON(n,{onEachFeature:function(e,t){t.tag=e.properties.title;var n=L.DomUtil.create("input","my-input");n.value=e.properties.title?e.properties.title:"",L.DomEvent.addListener(n,"change",(function(){e.properties.title=n.value})),t.bindPopup(n)}}).addTo(u)}f||(f=new L.Control.Draw({edit:{featureGroup:c},draw:{polygon:!0,polyline:!1,rectangle:!0,circle:!1,marker:!1}})),"map"==this.inputType&&(u.whenReady((function(){window.dispatchEvent(new Event("resize"))})),e.inputDisabled||f._map||u.addControl(f),this.geoJSONGroup&&e.$nextTick((function(){u.invalidateSize(),u.fitBounds(c.getBounds())})),this.siblingGeojson&&(this.config.show.siblingGeojson=!0,this.showSiblingGeojson()),this.parentBBox&&(this.config.show.parentBBox=!0,this.showParentBBox()))}catch(o){e.$emit("error",o)}}},computed:{canAddFeature:function(){return!this.errors.turf&&!this.inputDisabled&&this.geojson.features.length<this.config.maxFeatures},canReset:function(){return this.errors.turf||!this.inputDisabled},canEdit:function(){return this.errors.turf||!this.inputDisabled},canValidate:function(){return this.inputDisabled}},created:function(){this.minFeatures&&(this.config.minFeatures=this.minFeatures),this.maxFeatures&&(this.config.maxFeatures=this.maxFeatures),this.config.minFeatures>this.config.maxFeatures&&this.$emit("error","Min features cannot be greater than Max features"),this.wDataInputType=this.dataInputType?this.dataInputType:this.defaults.dataInputType,"manual"==this.wDataInputType||"both"==this.wDataInputType?this.inputType="manual":"map"==this.wDataInputType&&(this.inputType="map",this.initializeMap())},mounted:function(){var e=this;e.resetMapData(),e.initializeMap();try{turf.point([0,0]),this.errors.turf=!1,this.inputDisabled=!1}catch(t){this.errors.turf=!0,this.inputDisabled=!0,e.$emit("error",t)}},beforeRouteLeave:function(e,t,n){this.inputType="map",this.resetMapData(),this.inputType="manual",this.resetMapData(),n()}},g=d,m=(n("06a0"),n("2877")),h=Object(m["a"])(g,s,r,!1,null,null,null),v=h.exports,b={name:"App",components:{"geojson-widget":v},data:function(){return{gd:null,geojson:null,siblingGeojson:{type:"FeatureCollection",features:[{type:"Feature",properties:{title:"first cousin"},geometry:{type:"Polygon",coordinates:[[[-.296630859375,5.5941182188847876],[-.149688720703125,5.5941182188847876],[-.149688720703125,5.662451740971942],[-.296630859375,5.662451740971942],[-.296630859375,5.5941182188847876]]]}},{type:"Feature",properties:{title:"second title"},geometry:{type:"Polygon",coordinates:[[[-.064544677734375,5.7362428668801515],[.076904296875,5.7362428668801515],[.076904296875,5.834616165610059],[-.064544677734375,5.834616165610059],[-.064544677734375,5.7362428668801515]]]}}]},parentBBox:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[-.358428955078125,5.50253880002853],[-.215606689453125,5.528510525692801],[-.2032470703125,5.54354626745624],[-.1263427734375,5.559948458049067],[-.06042480468749999,5.606418844830032],[.00823974609375,5.629652652785774],[.0714111328125,5.693882453800991],[.127716064453125,5.708913926756642],[.17990112304687497,5.743074897562802],[.215606689453125,5.749906846313842],[.350189208984375,5.7854316553618625],[.52459716796875,5.784065357729645],[.685272216796875,5.774501181937736],[.718231201171875,5.78133275256497],[.7086181640625,5.799094449996251],[.715484619140625,5.810024447507327],[.70037841796875,5.851010045440856],[.649566650390625,5.863305139944947],[.638580322265625,5.9152147675357885],[.600128173828125,5.976680390439319],[.53558349609375,6.0176536419409326],[.50262451171875,6.0039962335866095],[.49163818359375,6.02311650923819],[.46279907226562494,6.032676394740438],[.4010009765625,6.038139110789942],[.34332275390625,6.0108249806119876],[.318603515625,5.982143668342713],[.3131103515625,5.946631388408496],[.252685546875,5.886528467660797],[.215606689453125,5.878332109674327],[.20050048828125,5.894724704759804],[.185394287109375,5.931606271274155],[.152435302734375,5.946631388408496],[.138702392578125,5.969851216370788],[.127716064453125,5.991704273292104],[.09750366210937499,6.0039962335866095],[.08514404296875,5.999898944276991],[.05767822265625,6.008093492080039],[.001373291015625,5.964387815824366],[-.020599365234375,5.995801624171918],[-.0439453125,5.9930700603368505],[-.06042480468749999,5.946631388408496],[-.089263916015625,5.901554809878024],[-.141448974609375,5.872867803938939],[-.1483154296875,5.8141231418985],[-.185394287109375,5.779966445034052],[-.208740234375,5.78133275256497],[-.24169921874999997,5.810024447507327],[-.273284912109375,5.797728185409691],[-.28839111328125,5.766303188459986],[-.35980224609374994,5.770402200015781],[-.4229736328125,5.78679794969297],[-.4229736328125,5.810024447507327],[-.49575805664062494,5.7908968128719565],[-.509490966796875,5.737609279566594],[-.457305908203125,5.64605242890779],[-.369415283203125,5.611885706520331],[-.363922119140625,5.573616601115098],[-.3790283203125,5.538078769250832],[-.358428955078125,5.50253880002853]]]}}]}}},methods:{newGeoJSON:function(e){console.log(e),this.geojson=e},showError:function(e){console.log(e),alert(e)}}},y=b,x=(n("034f"),Object(m["a"])(y,i,a,!1,null,null,null)),w=x.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){},b784:function(e,t,n){}});
//# sourceMappingURL=app.ac40debb.js.map