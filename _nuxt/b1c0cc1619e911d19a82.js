(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,e,o){var content=o(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("77d6318b",content,!0,{sourceMap:!1})},194:function(t,e,o){var content=o(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("9843c5d4",content,!0,{sourceMap:!1})},195:function(t,e,o){"use strict";var l={computed:{noFrameColors:function(){return this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1}},props:{label:{type:String,default:"Section"},collapsed:{type:Boolean}},methods:{collapse:function(t){t.target.parentNode.querySelector(".collapsible").classList.toggle("hidden")}}},n=(o(196),o(13)),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("fieldset",{class:{"no-colored-frames":t.noFrameColors},attrs:{id:t.label.toLowerCase()}},[o("legend",{on:{click:function(e){return e.preventDefault(),t.collapse(e)}}},[t._v(t._s(t.label)+" ↕")]),t._v(" "),o("div",{staticClass:"collapsible",class:{hidden:t.collapsed}},[t._t("default")],2)])},[],!1,null,null,null);e.a=component.exports},196:function(t,e,o){"use strict";var l=o(193);o.n(l).a},197:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,"fieldset.no-colored-frames legend{color:var(--ac-color)}",""])},198:function(t,e,o){var content=o(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7d7fde3e",content,!0,{sourceMap:!1})},199:function(t,e,o){"use strict";var l=o(194);o.n(l).a},200:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,"div[data-v-47025eb0]{display:inline-block;cursor:pointer}label.caption[data-v-47025eb0]{margin-left:4px}label.caption[data-v-47025eb0],label.toggle[data-v-47025eb0]{vertical-align:middle;cursor:pointer}label.toggle[data-v-47025eb0]{position:relative;width:50px;height:20px;border:2px solid var(--fg-color);background-color:transparent;border-radius:100px;box-sizing:content-box;box-sizing:initial;padding:0;margin:10px 5px}label.toggle[data-v-47025eb0],label.toggle .handle[data-v-47025eb0]{display:inline-block;transition:all .2s ease-in-out}label.toggle .handle[data-v-47025eb0]{position:absolute;top:0;bottom:0;left:0;margin:4px;background-color:var(--fg-color);width:12px;height:12px;border-radius:100px;pointer-events:none}label.toggle.on[data-v-47025eb0]{background-color:var(--ac-color);border-color:var(--ac-color)}label.toggle.on .handle[data-v-47025eb0]{background-color:var(--act-color);left:30px}",""])},205:function(t,e,o){"use strict";var l={props:{on:{type:Boolean,default:!1}},methods:{toggle:function(){this.$refs.toggle.classList.toggle("on"),this.$emit("change",this.$refs.toggle.classList.contains("on"))}}},n=(o(199),o(13)),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{on:{click:function(e){return t.toggle()}}},[o("label",{ref:"toggle",staticClass:"toggle",class:{on:t.on}},[o("span",{staticClass:"handle"})]),t._v(" "),o("label",{staticClass:"caption"},[t._t("default")],2)])},[],!1,null,"47025eb0",null);e.a=component.exports},207:function(t,e,o){"use strict";var l=o(198);o.n(l).a},208:function(t,e,o){(t.exports=o(17)(!1)).push([t.i,".color{display:inline-flex;align-items:center;justify-content:center;padding:0 8px;margin:4px;background-color:var(--brd-color);color:var(--fg-color);border-radius:8px;cursor:pointer;height:41px}.color.active{background-color:var(--bg-dark-color)}.color .preview{vertical-align:middle;display:inline-block;border-radius:100%;margin-right:8px;padding:16px;position:relative}.color .preview .activeTick{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);fill:#fff}.color.vibrant .preview .activeTick{fill:#000}",""])},429:function(t,e,o){"use strict";o.r(e);o(60),o(31),o(58);var section=o(195),l={props:{color:{type:String,required:!0},name:{type:String},active:{type:Boolean,default:!1}}},n=(o(207),o(13)),r=Object(n.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"color",attrs:{"data-color":t.color}},[o("span",{staticClass:"preview",style:{backgroundColor:t.color}},[t.active?o("svg",{staticClass:"activeTick",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"}})]):t._e()]),t._v("\n  "+t._s(t.name||t.color)+"\n")])},[],!1,null,null,null).exports,c=o(205),d={components:{"pw-section":section.a,"pw-toggle":c.a,swatch:r},data:function(){return{themes:[{color:"#282a36",name:"Dark (Default)",class:""},{color:"#ebeef5",name:"Light",vibrant:!0,class:"light"}],colors:[{color:"#50fa7b",name:"Green (Default)",vibrant:!0},{color:"#f1fa8c",name:"Yellow",vibrant:!0},{color:"#ff79c6",name:"Pink",vibrant:!0},{color:"#ff5555",name:"Red",vibrant:!1},{color:"#bd93f9",name:"Purple",vibrant:!0},{color:"#ffb86c",name:"Orange",vibrant:!0},{color:"#8be9fd",name:"Cyan",vibrant:!0},{color:"#57b5f9",name:"Blue",vibrant:!1}],settings:{THEME_CLASS:this.$store.state.postwoman.settings.THEME_CLASS||"",THEME_COLOR:"",THEME_COLOR_VIBRANT:!0,DISABLE_FRAME_COLORS:this.$store.state.postwoman.settings.DISABLE_FRAME_COLORS||!1,PROXY_ENABLED:this.$store.state.postwoman.settings.PROXY_ENABLED||!1,PROXY_URL:this.$store.state.postwoman.settings.PROXY_URL||"",PROXY_KEY:this.$store.state.postwoman.settings.PROXY_KEY||""}}},watch:{proxySettings:{deep:!0,handler:function(t){this.applySetting("PROXY_URL",t.url),this.applySetting("PROXY_KEY",t.key)}}},methods:{applyTheme:function(t){this.applySetting("THEME_CLASS",t),document.documentElement.className=t;var e=document.getElementById("imgGitHub");e.style.filter="",e.style["webkit-filter"]="invert(100%)",t.includes("light")&&(e.style.filter="invert(100%)",e.style["webkit-filter"]="invert(100%)")},setActiveColor:function(t,e){null==e&&(e=!0),document.documentElement.style.setProperty("--ac-color",t),document.documentElement.style.setProperty("--act-color",e?"#282a36":"#f8f8f2"),this.applySetting("THEME_COLOR",t.toUpperCase()),this.applySetting("THEME_COLOR_VIBRANT",e)},getActiveColor:function(){var t;return"#".concat((t=window.getComputedStyle(document.documentElement).getPropertyValue("--ac-color"),t.replace(/#/g,"").replace(/ /g,"")).toUpperCase())},applySetting:function(t,e){this.settings[t]=e,this.$store.commit("postwoman/applySetting",[t,e])},toggleSetting:function(t){this.settings[t]=!this.settings[t],this.$store.commit("postwoman/applySetting",[t,this.settings[t]])}},beforeMount:function(){this.settings.THEME_COLOR=this.getActiveColor()},computed:{proxySettings:function(){return{url:this.settings.PROXY_URL,key:this.settings.PROXY_KEY}}}},f=Object(n.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("pw-section",{staticClass:"cyan",attrs:{label:"Theme"}},[o("ul",[o("li",[o("h3",{staticClass:"title"},[t._v("Background")]),t._v(" "),o("div",{staticClass:"backgrounds"},t._l(t.themes,function(e){return o("span",{key:e.class,on:{click:function(o){return t.applyTheme(e.class)}}},[o("swatch",{class:{vibrant:e.vibrant},attrs:{active:t.settings.THEME_CLASS===e.class,color:e.color,name:e.name}})],1)}),0)])]),t._v(" "),o("ul",[o("li",[o("h3",{staticClass:"title"},[t._v("Color")]),t._v(" "),o("div",{staticClass:"colors"},t._l(t.colors,function(e){return o("span",{key:e.color,on:{click:function(o){return o.preventDefault(),t.setActiveColor(e.color,e.vibrant)}}},[o("swatch",{class:{vibrant:e.vibrant},attrs:{active:t.settings.THEME_COLOR===e.color.toUpperCase(),color:e.color,name:e.name}})],1)}),0)])]),t._v(" "),o("ul",[o("li",[o("h3",{staticClass:"title"},[t._v("Frames")]),t._v(" "),o("span",[o("pw-toggle",{attrs:{on:!t.settings.DISABLE_FRAME_COLORS},on:{change:function(e){return t.toggleSetting("DISABLE_FRAME_COLORS")}}},[t._v("\n              Multi-color "+t._s(t.settings.DISABLE_FRAME_COLORS?"Disabled":"Enabled")+"\n            ")])],1)])])])],1)},[],!1,null,null,null);e.default=f.exports}}]);