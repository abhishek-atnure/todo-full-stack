(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(16),s=n.n(r),o=(n(32),n(2)),i=n.n(o),l=n(6),d=n(5),u=n(12),j=n(11),p=n(13),b=(n(22),n(7)),h=(n(34),n(0));function O(e){var t=e.setAuth,n=Object(c.useState)({email:"",password:""}),a=Object(d.a)(n,2),r=a[0],s=a[1],o=r.email,O=r.password,x=function(e){s(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},e.target.name,e.target.value)))},m=function(){var e=Object(l.a)(i.a.mark((function e(n){var c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,c={email:o,password:O},e.next=5,fetch("/api/user/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,console.log(r),localStorage.setItem("token",r.token),r.token&&(t(!0),p.a.dark("Logged in!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})),p.a.dark(r,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("span",{id:"home",children:Object(h.jsx)(b.b,{to:"/",children:"Home"})}),Object(h.jsxs)("form",{onSubmit:m,children:[Object(h.jsxs)("section",{className:"copy",children:[Object(h.jsx)("h2",{id:"log-in-text",children:"Log in"}),Object(h.jsx)("div",{className:"login-container",children:Object(h.jsxs)("p",{id:"line-text",children:["Don't have an account?"," ",Object(h.jsx)("strong",{children:Object(h.jsx)(b.b,{to:"/signup",children:"Sign Up"})})]})})]}),Object(h.jsxs)("div",{className:"input-container email",children:[Object(h.jsx)("label",{htmlFor:"email",children:" Email Id"}),Object(h.jsx)("input",{id:"email",name:"email",type:"email",value:o,onChange:function(e){return x(e)},placeholder:"your email id",required:!0})]}),Object(h.jsxs)("div",{className:"input-container password",children:[Object(h.jsx)("label",{htmlFor:"password",children:" Password"}),Object(h.jsx)("input",{id:"password",name:"password",type:"password",value:O,onChange:function(e){return x(e)},placeholder:"your password",required:!0})]}),Object(h.jsx)("button",{className:"signup-btn",children:"Log in"})]})]})}p.a.configure();n(44);function x(e){var t=e.setAuth,n=Object(c.useState)({fname:"",email:"",password:""}),a=Object(d.a)(n,2),r=a[0],s=a[1],o=r.fname,O=r.email,x=r.password,m=function(e){s(Object(j.a)(Object(j.a)({},r),{},Object(u.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(l.a)(i.a.mark((function e(n){var c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,c={fname:o,email:O,password:x},e.next=5,fetch("/api/user/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:return a=e.sent,e.next=8,a.json();case 8:r=e.sent,console.log(r),localStorage.setItem("token",r.token),r.token&&(t(!0),p.a.dark("Registered!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})),p.a.dark(r,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)(b.b,{to:"/",id:"home",children:"Home"}),Object(h.jsxs)("form",{required:!0,onSubmit:f,children:[Object(h.jsxs)("section",{className:"copy",children:[Object(h.jsx)("h2",{id:"signup-h2",children:"Sign up"}),Object(h.jsx)("div",{className:"login-container",children:Object(h.jsxs)("p",{id:"signup-p",children:["Already have an account?"," ",Object(h.jsx)("a",{to:"/login",id:"signup-a",children:Object(h.jsx)("strong",{children:Object(h.jsx)(b.b,{to:"/login",children:"Log in"})})})]})})]}),Object(h.jsxs)("div",{className:"input-container name",children:[Object(h.jsx)("label",{htmlFor:"fname",children:" Full Name"}),Object(h.jsx)("input",{id:"fname",name:"fname",type:"text",placeholder:"your name",value:o,onChange:m,required:!0})]}),Object(h.jsxs)("div",{className:"input-container email",children:[Object(h.jsx)("label",{htmlFor:"email",children:" Email Id"}),Object(h.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"your email id",value:O,onChange:m,required:!0})]}),Object(h.jsxs)("div",{className:"input-container password",children:[Object(h.jsx)("label",{htmlFor:"password",children:" Password"}),Object(h.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"your password",value:x,onChange:m,required:!0})]}),Object(h.jsxs)("a",{to:"/todos",children:[Object(h.jsx)("button",{className:"signup-btn",children:"Sign Up"})," "]})]})]})}p.a.configure();n(45),n(46);var m=n(27),f=n.n(m);function g(e){var t=e.todo,n=e.user_id,a=Object(c.useState)(""),r=Object(d.a)(a,2),s=r[0],o=r[1],u=Object(c.useState)(!1),j=Object(d.a)(u,2),p=j[0],b=j[1],O=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={description:s,todo_id:t},e.next=3,fetch("/api/todo/".concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 3:return a=e.sent,e.next=6,a.json();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,fetch("/api/todo/",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({todo_id:t,user_id:n})});case 4:return c=e.sent,e.next=7,c.json();case 7:e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"todo-content",children:[Object(h.jsx)("p",{children:t.description}),Object(h.jsxs)("span",{children:["due on ",new Date(t.due_date).toISOString().slice(0,10)]}),Object(h.jsxs)("div",{className:"todo-btns",children:[Object(h.jsx)("button",{id:"edit-btn",onClick:function(){b(!0)},children:"Edit"}),Object(h.jsx)("button",{id:"delete-btn",onClick:function(){return x(t.id)},children:"Delete"}),Object(h.jsx)("div",{className:"modal",children:Object(h.jsx)(f.a,{style:{overlay:{position:"fixed",inset:"0px","backdrop-filter":"blur(6px)"},content:{position:"none",margin:"150px auto",inset:"22%",border:"1px solid black",background:"white",overflow:"auto",outline:"none",padding:"40px",width:"70%","backdrop-filter":"blur(10px)",height:"41vh"}},isOpen:p,children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsx)("h3",{children:"Edit todo"}),Object(h.jsx)("input",{type:"text",name:"description",value:s,onChange:function(e){return function(e){o(e.target.value)}(e)}}),Object(h.jsxs)("div",{className:"modal-btn-div",children:[Object(h.jsx)("button",{id:"modal-btn",onClick:function(){b(!1),O(t.id)},children:" Save Changes"}),Object(h.jsx)("button",{id:"modal-btn",onClick:function(){return b(!1)},children:"Close"})]})]})})})]})]})}function v(e){var t=e.user,n=(e.click,Object(c.useState)([])),a=Object(d.a)(n,2),r=a[0],s=a[1],o=t;Object(c.useEffect)((function(){u()}));var u=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/todo/".concat(o),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{id:"todo-list-head",children:"Your todo list"}),Object(h.jsx)("div",{className:"todo-List",children:0===r.length?Object(h.jsx)("h4",{id:"notodos",children:"No todos"}):r.map((function(e){return Object(h.jsx)(g,{todo:e,user_id:o},e.id)}))})]})}n(56);function y(e){var t=e.setAuth,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)({description:"",date:""}),p=Object(d.a)(o,2),O=p[0],x=p[1],m=Object(c.useState)(Boolean),f=Object(d.a)(m,2),g=f[0],y=f[1],k=O.description,w=O.date;Object(c.useEffect)((function(){S()}),[]);var S=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/auth/dashboard",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){x(Object(j.a)(Object(j.a)({},O),{},Object(u.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!1),e.prev=2,n={description:k,date:w},console.log(n),e.next=7,fetch("/api/todo/".concat(r),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 7:return c=e.sent,e.next=10,c.json();case 10:e.sent,y(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"todo-form",children:[Object(h.jsxs)("div",{className:"todo-nav",children:[Object(h.jsxs)("h3",{children:["To ",Object(h.jsx)("span",{id:"logoSpan",children:"Do"})]}),Object(h.jsx)(b.b,{to:"/",onClick:function(){localStorage.removeItem("token"),window.location.reload(),t(!1)},children:Object(h.jsx)("span",{children:"Log Out"})})]}),Object(h.jsxs)("div",{className:"todo-add",children:[Object(h.jsx)("h4",{children:"Create Your To-Do"}),Object(h.jsxs)("form",{onSubmit:C,children:[Object(h.jsx)("input",{type:"text",name:"description",value:k,onChange:N,id:"form-input",placeholder:"Enter todo..."}),Object(h.jsx)("input",{id:"date-input",name:"date",value:w,onChange:N,type:"text",placeholder:"Complete it by...",onFocus:function(){document.getElementById("date-input").setAttribute("type","date")}}),Object(h.jsx)("button",{id:"todo-submit-btn",children:"Submit"})]})]}),Object(h.jsx)(v,{user:r,click:g})]})}n(57);var k=n.p+"static/media/wavy.3a096c8f.jpg";function w(){return Object(h.jsxs)("div",{className:"welcome-page",children:[Object(h.jsx)("h1",{id:"intro",children:"welcome to my pern to-do app"}),Object(h.jsxs)("div",{className:"login-signup",children:[Object(h.jsx)("button",{children:Object(h.jsx)(b.b,{to:"/login",children:"Login"})}),Object(h.jsx)("button",{children:Object(h.jsx)(b.b,{to:"/signup",children:"Signup"})})]}),Object(h.jsx)("img",{src:k,className:"background",alt:"illus"})]})}var S=n(3);var N=function(){var e=Object(c.useState)(Boolean),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/auth/is-verify",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a(!0===n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()})),Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(S.a,{exact:!0,path:"/",render:function(e){return n?Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(y,{})}):Object(h.jsx)(w,{})}}),Object(h.jsx)(S.a,{path:"/login",render:function(e){return n?Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(y,{})}):Object(h.jsx)(O,{setAuth:a})}}),Object(h.jsx)(S.a,{path:"/signup",render:function(e){return n?Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(y,{})}):Object(h.jsx)(x,{setAuth:a})}}),Object(h.jsx)(S.a,{path:"/todos",render:function(e){return n?Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(y,{setAuth:a})}):Object(h.jsx)(w,{})}})]})})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.019773ea.chunk.js.map