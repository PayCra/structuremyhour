(this.webpackJsonpstructuremyhour=this.webpackJsonpstructuremyhour||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i=a(3),l=a.n(i),r=(a(12),a(4)),c=a(5),u=a(7),o=a(6),m=(a(13),a(0)),d=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={myDate:new Date,alarmTime1:0,alarmTime2:25,alarmTime3:30,alarmTime4:55,RedButtonState:"RedButtonVisible",StartButtonState:"StartButtonVisible",StartButtonDisabled:!1,alarmPlayed1:{},alarmPlayed2:{},alarmPlayed3:{},alarmPlayed4:{},selectedSound:"quack",activity:"",image:"",alt:""},t.images=["work.png","play.png"],t.alts=['lwj looking at you reproachfully, "wrk!" floating next to his head','nhs laughing and tugging his hair, next to him the word "play" and a <3'],t.playMySound=function(){new Audio("Sounds/"+t.state.selectedSound+".m4a").play()},t.tick=function(){t.setState({myDate:new Date}),t.state.alarmPlayed1!==t.state.myDate.getHours()&&t.state.myDate.getMinutes()===t.state.alarmTime1?(t.playMySound(),t.setState({alarmPlayed1:t.state.myDate.getHours()})):t.state.alarmPlayed2!==t.state.myDate.getHours()&&t.state.myDate.getMinutes()===t.state.alarmTime2?(t.playMySound(),t.setState({alarmPlayed2:t.state.myDate.getHours()})):t.state.alarmPlayed3!==t.state.myDate.getHours()&&t.state.myDate.getMinutes()===t.state.alarmTime3?(t.playMySound(),t.setState({alarmPlayed3:t.state.myDate.getHours()})):t.state.alarmPlayed4!==t.state.myDate.getHours()&&t.state.myDate.getMinutes()===t.state.alarmTime4&&(t.playMySound(),t.setState({alarmPlayed4:t.state.myDate.getHours()})),"work"!==t.state.activity&&(t.state.myDate.getMinutes()>=0&&t.state.myDate.getMinutes()<25||t.state.myDate.getMinutes()>=30&&t.state.myDate.getMinutes()<55)?(t.setState({image:t.images[0]}),t.setState({alt:t.alts[0]}),t.setState({activity:"work"})):"work"!==t.state.activity&&""!==t.state.activity||!(t.state.myDate.getMinutes()>=25&&t.state.myDate.getMinutes()<30||t.state.myDate.getMinutes()>=55)||(t.setState({image:t.images[1]}),t.setState({alt:t.alts[1]}),t.setState({activity:"play"})),document.title=t.tillNextAlarm()},t.handleStartingClick=function(){t.setState({StartButtonDisabled:{}}),t.setState({StartButtonState:"StartButtonInvisible"})},t.tillNextAlarm=function(){var e,a;return"work"===t.state.activity?t.state.myDate.getMinutes()<25?(e=24-t.state.myDate.getMinutes(),a=60-t.state.myDate.getSeconds()):t.state.myDate.getMinutes()<55&&(e=54-t.state.myDate.getMinutes(),a=60-t.state.myDate.getSeconds()):t.state.myDate.getMinutes()<30?(e=29-t.state.myDate.getMinutes(),a=60-t.state.myDate.getSeconds()):t.state.myDate.getMinutes()<60&&(e=59-t.state.myDate.getMinutes(),a=60-t.state.myDate.getSeconds()),60===a&&(e++,a=0),e<10&&(e="0"+e),a<10&&(a="0"+a),e+":"+a},t.onChange=function(e){t.setState({selectedSound:e.target.value})},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.intervalHandle=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalHandle)}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:this.state.RedButtonState,onClick:function(){return t.setState({RedButtonState:"RedButtonInvisible"})},children:Object(m.jsx)("button",{className:this.state.StartButtonState,disabled:this.state.StartButtonDisabled,onClick:this.handleStartingClick,children:"click here to start the timer because Chrome hates sound"})}),Object(m.jsxs)("div",{className:"AppProper",children:[Object(m.jsx)("div",{className:"Side"}),Object(m.jsxs)("div",{className:"Middle",children:[Object(m.jsx)("div",{className:"Text",children:"Alarm will sound at h:00, h:25, h:30 and h:55."}),Object(m.jsxs)("div",{className:"Text",children:["Time till next alarm: ",Object(m.jsx)("span",{className:"TillNext",children:this.tillNextAlarm()})]}),Object(m.jsx)("img",{src:"Pictures/"+this.state.image,alt:this.state.alt})]}),Object(m.jsx)("div",{className:"Side",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:"Choose the alarm sound:"}),Object(m.jsxs)("select",{onChange:this.onChange,children:[Object(m.jsx)("option",{value:"quack",children:"quack"}),Object(m.jsx)("option",{value:"3 taps",children:"3 taps"})]}),Object(m.jsx)("button",{onClick:this.playMySound,children:"Play the sound"})]})})]})]})}}]),a}(n.a.Component),y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,l=e.getTTFB;a(t),s(t),n(t),i(t),l(t)}))};l.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.47da7eae.chunk.js.map