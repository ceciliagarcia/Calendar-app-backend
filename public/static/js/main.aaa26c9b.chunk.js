(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(8),o=n.n(r),s=n(9),i=n(36),l=n(10),u=n(12),j=n.n(u),d=n(21),b="https://mearn-calendar.herokuapp.com/api",m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(b,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(b,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},p="[ui] Open modal",f="[ui] Close modal",v="[event] Set Active",h="[event] Logout event",x="[event] Add new",g="[event] Clear active event",y="[event] Event updated",N="[event] Event deleted",w="[event] Events loaded",k="[auth] Finish checking login state",E="[auth] Login",S="[auth] Logout",C=n(18),D=n.n(C),T=function(){return{type:k}},P=function(e){return{type:E,payload:e}},I=function(){return{type:S}},A=n(14),_=n(25),L=n(5),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(A.a)(t,2),a=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(L.a)(Object(L.a)({},a),{},Object(_.a)({},t.name,t.value)))};return[a,s,o]},G=(n(76),function(){var e=Object(s.b)(),t=R({lEmail:"cecilia@gmail.com",lPassword:"123456"}),n=Object(A.a)(t,2),c=n[0],r=n[1],o=R({rName:"Carmen",rEmail:"carmen@gmail.com",rPassword1:"123456",rPassword2:"123456"}),i=Object(A.a)(o,2),l=i[0],u=i[1],b=c.lEmail,O=c.lPassword,p=l.rName,f=l.rEmail,v=l.rPassword1,h=l.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=b,a=O,function(){var e=Object(d.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(P({uid:r.uid,name:r.name}))):D.a.fire("Error",r.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:b,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:O,onChange:r})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==h)return D.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,c;console.log("?"),e((n=f,a=v,c=p,function(){var e=Object(d.a)(j.a.mark((function e(t){var r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("auth/new",{email:n,password:a,name:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(P({uid:o.uid,name:o.name}))):D.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:p,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:f,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})}),F=n(16),V=n.n(F),H=n(55),J=(n(78),n(79),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:t}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e((function(e){localStorage.clear(),e(I())}))},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})}),M={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},U=function(e){var t=e.event,n=t.title,c=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("strong",{children:[" ",n," "]}),Object(a.jsxs)("span",{children:["- ",c.name," "]})]})},B=n(50),X=n.n(B),q=n(51),z=n.n(q),K=function(){return{type:p}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(L.a)(Object(L.a)({},e),{},{end:V()(e.end).toDate(),start:V()(e.start).toDate()})}))},W=function(e){return{type:x,payload:e}},Y=function(){return{type:g}},Z=function(e){return{type:y,payload:e}},$=function(){return{type:N}},ee=function(e){return{type:w,payload:e}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};X.a.setAppElement("#root");var ne=V()().minutes(0).seconds(0).add(1,"hours"),ae=ne.clone().add(1,"hours"),ce={title:"",notes:"",start:ne.toDate(),end:ae.toDate()},re=function(){var e=Object(s.c)((function(e){return e.ui})).modalOpen,t=Object(s.c)((function(e){return e.calendar})).activeEvent,n=Object(s.b)(),r=Object(c.useState)(ne.toDate()),o=Object(A.a)(r,2),i=o[0],l=o[1],u=Object(c.useState)(ae.toDate()),b=Object(A.a)(u,2),m=b[0],p=b[1],v=Object(c.useState)(!0),h=Object(A.a)(v,2),x=h[0],g=h[1],y=Object(c.useState)(ce),N=Object(A.a)(y,2),w=N[0],k=N[1],E=w.notes,S=w.title,C=w.start,T=w.end;Object(c.useEffect)((function(){k(t||ce)}),[t,k]);var P=function(e){var t=e.target;k(Object(L.a)(Object(L.a)({},w),{},Object(_.a)({},t.name,t.value)))},I=function(){n({type:f}),n(Y()),k(ce)};return Object(a.jsxs)(X.a,{isOpen:e,onRequestClose:I,style:te,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,c=V()(C),r=V()(T);return c.isSameOrAfter(r)?D.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):S.trim().length<2?g(!1):(n(t?(a=w,function(){var e=Object(d.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(c=e.sent).ok?t(Z(a)):D.a.fire("Error",c.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(j.a.mark((function t(n,a){var c,r,o,s,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth,r=c.uid,o=c.name,t.prev=1,t.next=4,O("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:i=t.sent,console.log(i),i.ok&&(e.id=i.evento.id,e.user={_id:r,name:o},console.log(e),n(W(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),g(!0),void I())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(z.a,{onChange:function(e){l(e),k(Object(L.a)(Object(L.a)({},w),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(z.a,{onChange:function(e){p(e),k(Object(L.a)(Object(L.a)({},w),{},{end:e}))},value:m,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!x&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:S,onChange:P}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:E,onChange:P}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},oe=function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(K())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})},se=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,O("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).ok?t($()):D.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar evento "})]})};V.a.locale("es");var ie=Object(H.b)(V.a),le=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(c.useState)(localStorage.getItem("lastView")||"month"),l=Object(A.a)(i,2),u=l[0],b=l[1];Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,c=Q(a.eventos),t(ee(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(J,{}),Object(a.jsx)(H.a,{localizer:ie,events:n,startAccessor:"start",endAccessor:"end",messages:M,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(K())},onSelectEvent:function(t){e({type:v,payload:t})},onView:function(e){b(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(Y())},selectable:!0,view:u,components:{event:U}}),Object(a.jsx)(oe,{}),r&&Object(a.jsx)(se,{}),Object(a.jsx)(re,{})]})},ue=n(40),je=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ue.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(l.b,Object(L.a)(Object(L.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(L.a)({},e)):Object(a.jsx)(l.a,{to:"/login"})}}))},de=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ue.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(l.b,Object(L.a)(Object(L.a)({},c),{},{component:function(e){return t?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(n,Object(L.a)({},e))}}))},be=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(c.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(P({uid:a.uid,name:a.name}))):t(T());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:"Espere..."}):Object(a.jsx)(i.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(de,{exact:!0,path:"/login",component:G,isAuthenticated:!!r}),Object(a.jsx)(je,{exact:!0,path:"/",component:le,isAuthenticated:!!r}),Object(a.jsx)(l.a,{to:"/"})]})})})},me=n(22),Oe=n(66),pe={modalOpen:!1},fe=n(56),ve={events:[],activeEvent:null},he={checking:!0},xe=Object(me.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(L.a)(Object(L.a)({},e),{},{modalOpen:!0});case f:return Object(L.a)(Object(L.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(L.a)(Object(L.a)({},e),{},{activeEvent:t.payload});case x:return Object(L.a)(Object(L.a)({},e),{},{events:[].concat(Object(fe.a)(e.events),[t.payload])});case g:return Object(L.a)(Object(L.a)({},e),{},{activeEvent:null});case y:return Object(L.a)(Object(L.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(L.a)(Object(L.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case w:return Object(L.a)(Object(L.a)({},e),{},{events:Object(fe.a)(t.payload)});case h:return Object(L.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(L.a)(Object(L.a)(Object(L.a)({},e),t.payload),{},{checking:!1});case k:return Object(L.a)(Object(L.a)({},e),{},{checking:!1});case S:return{checking:!1};default:return e}}}),ge="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,ye=Object(me.e)(xe,ge(Object(me.a)(Oe.a))),Ne=function(){return Object(a.jsx)(s.a,{store:ye,children:Object(a.jsx)(be,{})})};n(115);o.a.render(Object(a.jsx)(Ne,{}),document.getElementById("root"))},76:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.aaa26c9b.chunk.js.map