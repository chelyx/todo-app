(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{261:function(t,e,n){"use strict";n.r(e);n(26);var l={props:["task"],methods:{toggle:function(){this.$store.commit("TOGGLE_DONE",this.task)},deleteTask:function(){this.$store.commit("DELETE",this.task)}}},o=n(56),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex pl-5"},[e("div",{staticClass:"text-white text-3xl",class:t.task.done?"italic opacity-75":"not-italic"},[t._v(t._s(t.task.name))]),t._v(" "),e("div",{staticClass:"flex pl-10"},[e("button",{staticClass:"text-2xl pr-5",class:t.task.done?"text-white":"text-green-600",on:{click:t.toggle}},[t._v(t._s(t.task.done?"Undo":"Done"))]),t._v(" "),e("button",{staticClass:"text-red-600 text-2xl",on:{click:t.deleteTask}},[t._v("Delete")])])])}),[],!1,null,null,null);e.default=component.exports},262:function(t,e,n){"use strict";n.r(e);var l=n(1).a.extend({data:function(){return{newTask:this.$store.state.tasks}},methods:{addTask:function(){this.newTask&&(this.$store.commit("ADD",this.newTask),this.newTask="")}}}),o=n(56),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col items-center bg-slate-700 h-screen font-mono"},[e("h1",{staticClass:"text-6xl text-white p-10"},[t._v("To-Do")]),t._v(" "),e("div",{staticClass:"flex p-5 text-white flex-col items-center"},[e("p",{staticClass:"text-3xl"},[t._v("Add tasks")]),t._v(" "),e("div",{staticClass:"flex flex-row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"text-slate-700 rounded-md p-2",attrs:{type:"text",placeholder:"New task"},domProps:{value:t.newTask},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),t._v(" "),e("button",{staticClass:"ml-5",on:{click:t.addTask}},[t._v("+")])])]),t._v(" "),e("div",{staticClass:"list"},t._l(t.$store.state.tasks,(function(t,i){return e("Task",{key:i,attrs:{task:t}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Task:n(261).default})}}]);