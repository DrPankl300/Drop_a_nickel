(this.webpackJsonpdrop_a_nickel=this.webpackJsonpdrop_a_nickel||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),r=c(36),i=c.n(r),a=(c(80),c(15)),l=c(48),j=(c(104),c(105),c(83),l.a.initializeApp({apiKey:"AIzaSyBPPyN6ozRG30An7E-Nzy9PN4Vi04W1T-o",authDomain:"drop-a-nickel-pro-shop.firebaseapp.com",projectId:"drop-a-nickel-pro-shop",storageBucket:"drop-a-nickel-pro-shop.appspot.com",messagingSenderId:"170410912971",appId:"1:170410912971:web:3a1b8d7764375a666c7f4e"})),d=l.a.storage(),o=l.a.firestore(),b=(l.a.firestore.FieldValue.serverTimestamp,j.auth()),h=c(3),u=s.a.createContext();function O(){return Object(n.useContext)(u)}function x(e){var t=e.children,c=Object(n.useState)(),s=Object(a.a)(c,2),r=s[0],i=s[1],l=Object(n.useState)(!0),j=Object(a.a)(l,2),d=j[0],o=j[1];Object(n.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e),o(!1)}))}),[]);var O={currentUser:r,login:function(e,t){return b.signInWithEmailAndPassword(e,t)},resetPassword:function(e){return b.sendPasswordResetEmail(e)}};return Object(h.jsx)(u.Provider,{value:O,children:!d&&t})}var m=c(65),p=c.n(m),f=c(66),g=c.n(f),v=c.p+"static/media/bowlingLogo.cc826c0e.png",y=c(27);c(86);var N=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],r=function(){return s(!c)};return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("div",{className:"leftSide",children:Object(h.jsx)(y.b,{className:"link",to:"/",children:Object(h.jsx)(p.a,{})})}),Object(h.jsx)("div",{className:"center",children:Object(h.jsx)(y.b,{to:"/login",children:Object(h.jsx)("img",{src:v,alt:"Logo"})})}),Object(h.jsx)("div",{className:"rightSide",children:Object(h.jsx)(g.a,{onClick:r})}),Object(h.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/inventory",onClick:r,children:" Shop "})}),Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/hours",onClick:r,children:" Hours & Pricing "})}),Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/lessons",onClick:r,children:" Lessons "})}),Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/about",onClick:r,children:" About Me "})}),Object(h.jsx)("li",{children:Object(h.jsx)(y.b,{to:"/contact",onClick:r,children:" Contact Me "})})]})})]})},w=c(67),k=c.n(w),S=c(68),C=c.n(S),P=c(69),F=c.n(P);c(92);var E=function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{href:"https://www.instagram.com/teamnickel_drpankl/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(k.a,{})}),Object(h.jsx)("a",{href:"https://twitter.com/DropANickel",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(C.a,{})}),Object(h.jsx)("a",{href:"https://www.facebook.com/IBeMoney/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(F.a,{})})]}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:" \xa9 2021 drpnkl.com "})})]})},B=c.p+"static/media/bowlingHome2.92bc7463.jpg";c(93);var I=function(){return Object(h.jsx)("div",{className:"home",style:{backgroundImage:"url(".concat(B,")")},children:Object(h.jsxs)("div",{className:"headerContainer",children:[Object(h.jsx)("h1",{children:" Welcome to Drop a Nickel Pro Shop "}),Object(h.jsx)("p",{children:" For all of your professional bowling needs! "})]})})},q=c(11),D=function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),l=Object(a.a)(i,2),j=l[0],d=l[1],b=Object(n.useState)([]),h=Object(a.a)(b,2),u=h[0],O=h[1];return Object(n.useEffect)((function(){o.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(q.a)(Object(q.a)({},e.data()),{},{id:e.id}))})),r(t),d(t),O(t)}))}),[e]),{balls:s,bags:j,accessories:u}};c(94);var A=function(){var e=D("Balls").balls,t=D("Bags").bags,c=D("Accessories").accessories,n=function(e){console.log(e.name)};return Object(h.jsxs)("div",{className:"inv-wrap",children:[Object(h.jsx)("h1",{children:" Balls "}),Object(h.jsx)("div",{className:"inv-grid",children:e&&e.map((function(e){return Object(h.jsxs)("div",{className:"inv-wrap1",children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsx)("img",{src:e.url,alt:e.name}),Object(h.jsxs)("p",{children:["Condition: ",e.condition," "]}),Object(h.jsxs)("p",{children:["Description: ",e.description," "]}),Object(h.jsxs)("p",{children:["Price: $",e.price," "]}),Object(h.jsxs)("p",{children:["Weight: ",e.weight," lbs "]}),Object(h.jsx)("button",{onClick:function(){return n(e)},children:" Ask for Details "})]},Math.random())}))}),Object(h.jsx)("h1",{children:" Bags "}),Object(h.jsx)("div",{className:"inv-grid",children:t&&t.map((function(e){return Object(h.jsxs)("div",{className:"inv-wrap1",children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsx)("img",{src:e.url,alt:e.name}),Object(h.jsxs)("p",{children:["Condition: ",e.condition," "]}),Object(h.jsxs)("p",{children:["Description: ",e.description," "]}),Object(h.jsxs)("p",{children:["Price: $",e.price," "]}),Object(h.jsx)("button",{onClick:function(){return n(e)},children:" Ask for Details "})]},e.id)}))}),Object(h.jsx)("h1",{children:" Accessories "}),Object(h.jsx)("div",{className:"inv-grid",children:c&&c.map((function(e){return Object(h.jsxs)("div",{className:"inv-wrap1",children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsx)("img",{src:e.url,alt:e.name}),Object(h.jsxs)("p",{children:["Condition: ",e.condition," "]}),Object(h.jsxs)("p",{children:["Description: ",e.description," "]}),Object(h.jsxs)("p",{children:["Price: $",e.price," "]}),Object(h.jsx)("button",{onClick:function(){return n(e)},children:" Ask for Details "})]},e.id)}))})]})},L=c.p+"static/media/Billy.674c74a4.jpg";c(95);var $=function(){return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"leftSide",style:{backgroundImage:"url(".concat(L,")")}}),Object(h.jsxs)("div",{className:"rightSide",children:[Object(h.jsx)("h1",{children:" ABOUT ME "}),Object(h.jsx)("p",{children:" In nulla labore cillum ut culpa irure eu velit sed exercitation aute esse fugiat dolore roident aliquip pariatur fugiat. Aute in ut minim amet duis ut nulla ut in officia dolore voluptate ullamco sunt in aute labore in ea sit. Lorem ipsum mollit magna laboris consectetur magna ut ex ut occaecat culpa in aliquip nulla deserunt sint nostrud laborum tempor qui consectetur fugiat dolore do amet laboris est fugiat mollit ut labore adipisicing deserunt velit non exercitation elit elit esse et velit commodo ex dolore amet quis qui et ad laborum."})]})]})},_=c(70),R=c.p+"static/media/Billy2.8b5ee916.jpg",M=(c(96),c(59));Object(M.a)("user_1trT0OPzsLaeCi658ABiD");var T=function(){var e=Object(n.useState)("000000"),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(_.a)(),i=r.handleSubmit,l=r.watch,j=r.register,d=1500-(l("message")||"").length;return Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("div",{className:"top",style:{backgroundImage:"url(".concat(R,")")}}),Object(h.jsxs)("div",{className:"body",children:[Object(h.jsxs)("div",{className:"leftSide",children:[Object(h.jsx)("h3",{children:"Thank you for visiting!!"}),Object(h.jsx)("h6",{children:"Fill out this form to shoot me an email or contact me at (505) 555-5555."}),Object(h.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3258.141741839591!2d-106.63820378418734!3d35.252729360958845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872270b61a7d7f5b%3A0x3d9cc5dc80a4cbf0!2s202%20Cabeza%20Negra%20Ct%20SE%2C%20Rio%20Rancho%2C%20NM%2087124!5e0!3m2!1sen!2sus!4v1637810184082!5m2!1sen!2sus"})]}),Object(h.jsx)("div",{className:"rightSide",children:Object(h.jsx)("div",{className:"contact-form",children:Object(h.jsxs)("form",{id:"contact-form",onSubmit:i((function(e){!function(){var e="000000"+(1e6*Math.random()|0);s(e.substring(e.length-6))}(),Object(M.b)("default_service","template_15t4u5d","#contact-form").then((function(e){alert("Thank you for your email!")}),(function(e){alert("Failed to send message! Please try again later")})),document.getElementById("contact-form").reset()})),children:[Object(h.jsx)("input",{type:"hidden",name:"contact_number",value:c}),Object(h.jsx)("label",{htmlFor:"name",children:"Full Name"}),Object(h.jsx)("input",{name:"name",placeholder:"Enter your full name...",type:"text",maxLength:"30",required:!0}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{name:"email",placeholder:"Enter your email...",type:"email",maxLength:"50",required:!0}),Object(h.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(h.jsx)("input",{name:"phone",placeholder:"123-456-7890",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",maxLength:"30",required:!0}),Object(h.jsx)("small",{children:"Format: 123-456-7890"}),Object(h.jsx)("label",{htmlFor:"message",children:"Message"}),Object(h.jsx)("textarea",Object(q.a)({id:"test",rows:"6",placeholder:"Enter your message...",name:"message",maxLength:"1500",required:!0},j("message"))),Object(h.jsxs)("p",{children:[d," characters left "]}),Object(h.jsx)("button",{type:"submit",children:" Send Message "})]})})})]})]})},G=c(0),W=c.n(G),z=c(2),H=function(e){var t=Object(n.useState)(0),c=Object(a.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(null),l=Object(a.a)(i,2),j=l[0],b=l[1],h=Object(n.useState)(null),u=Object(a.a)(h,2),O=u[0],x=u[1];return Object(n.useEffect)((function(){var t=d.ref(e.name),c=document.querySelector("input[name=category]:checked").value,n=o.collection(c);t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){b(e)}),Object(z.a)(W.a.mark((function e(){var c,s,r,i,a,l;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:c=e.sent,s=document.getElementById("Name").value,r=document.getElementById("Description").value,i=document.getElementById("Price").value,a=document.getElementById("Weight").value,l=document.querySelector("input[name=status]:checked").value,n.add({url:c,name:s,description:r,price:i,weight:a,condition:l}),x(c);case 10:case"end":return e.stop()}}),e)}))))}),[e]),{progress:s,url:O,error:j}},U=function(e){var t=e.file,c=e.setFile,s=H(t),r=s.url,i=s.progress;return Object(n.useEffect)((function(){r&&c(null)}),[r,c]),Object(h.jsx)("div",{className:"progress-bar",style:{width:i+"%"}})},J=(c(97),function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(null),i=Object(a.a)(r,2),l=i[0],j=i[1],d=["image/png","image/jpeg","image/jpg"];return Object(h.jsxs)("form",{className:"form",id:"Inv",children:[Object(h.jsx)("div",{className:"upload-center",children:"Choose a category"}),Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsx)("label",{htmlFor:"balls",children:"Balls"}),Object(h.jsx)("input",{id:"balls",name:"category",type:"radio",value:"Balls",required:!0}),Object(h.jsx)("label",{htmlFor:"bags",children:"Bags"}),Object(h.jsx)("input",{id:"bags",name:"category",type:"radio",value:"Bags",required:!0}),Object(h.jsx)("label",{htmlFor:"accessories",children:"Accessories"}),Object(h.jsx)("input",{id:"accessories",name:"category",type:"radio",value:"Accessories",required:!0})]}),Object(h.jsx)("label",{htmlFor:"name",children:"Item Name"}),Object(h.jsx)("input",{id:"Name",name:"name",placeholder:"Enter name of item...",type:"text",maxLength:"30",required:!0}),Object(h.jsxs)("div",{className:"radio",children:[Object(h.jsx)("label",{htmlFor:"new",children:"New"}),Object(h.jsx)("input",{id:"new",name:"status",type:"radio",value:"New",required:!0}),Object(h.jsx)("label",{htmlFor:"used",children:"Used"}),Object(h.jsx)("input",{id:"used",name:"status",type:"radio",value:"Used",required:!0})]}),Object(h.jsx)("label",{htmlFor:"description",children:"Description"}),Object(h.jsx)("input",{id:"Description",name:"description",placeholder:"Enter description of item...",type:"text",maxLength:"200",required:!0}),Object(h.jsx)("label",{htmlFor:"price",children:"Price"}),Object(h.jsx)("input",{id:"Price",name:"price",placeholder:"Enter price of item...",type:"number",required:!0}),Object(h.jsx)("label",{htmlFor:"weight",children:"Weight"}),Object(h.jsx)("input",{id:"Weight",name:"weight",placeholder:"Enter weight of item...",type:"number"}),Object(h.jsx)("label",{htmlFor:"Image",children:"Item image"}),Object(h.jsx)("input",{id:"Image",name:"file",type:"file",onChange:function(e){var t=e.target.files[0];t&&d.includes(t.type)?(s(t),j("")):(s(null),j("Please select an image file (png, jpeg or jpg)"))}}),Object(h.jsxs)("div",{className:"output",children:[l&&Object(h.jsx)("div",{className:"error",children:l}),c&&Object(h.jsx)("div",{children:c.name}),c&&Object(h.jsx)(U,{file:c,setFile:s})]}),Object(h.jsx)("button",{type:"submit",children:" Submit "})]})});c(98);var V=function(){return Object(h.jsxs)("div",{className:"hours-page",children:[Object(h.jsxs)("div",{className:"hours",children:[Object(h.jsx)("h1",{children:" Hours: "}),Object(h.jsx)("p",{children:" Contact me to schedule an appointment! "}),Object(h.jsx)(y.b,{to:"/contact",className:"link",children:Object(h.jsx)("button",{children:" Contact Me "})})]}),Object(h.jsx)("div",{className:"pricing",children:Object(h.jsx)("h1",{children:" Pricing: "})}),Object(h.jsx)("div",{className:"table-container",children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:Object(h.jsx)("th",{children:"Ball Drilling:"})})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Drill (Plastic)"}),Object(h.jsx)("td",{children:"$30"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Drill (Reactive)"}),Object(h.jsx)("td",{children:"$40"})]})]}),Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:Object(h.jsx)("th",{className:"header",children:"Drilling Extras:"})})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Finger Grips - Pair"}),Object(h.jsx)("td",{children:"$8.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Replace Grip - Each"}),Object(h.jsx)("td",{children:"$4.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Thumb Slug"}),Object(h.jsx)("td",{children:"$10.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Switch Grip Inner"}),Object(h.jsx)("td",{children:"$20.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Switch Grip Outer"}),Object(h.jsx)("td",{children:"$18.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"I.T. Inner (Thumb)"}),Object(h.jsx)("td",{children:"$18.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"I.T. Base and Sleeve"}),Object(h.jsx)("td",{children:"$15.00"})]})]}),Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:Object(h.jsx)("th",{className:"header",children:"Services:"})})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Resurface (By Hand)"}),Object(h.jsx)("td",{children:"$30.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Revive"}),Object(h.jsx)("td",{children:"$10.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Clean/Polish/Sand"}),Object(h.jsx)("td",{children:"$5.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Full Plug"}),Object(h.jsx)("td",{children:"$40.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Plug Finger or Thumb Only"}),Object(h.jsx)("td",{children:"$20.00"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Plug Hole or Fix Damage"}),Object(h.jsx)("td",{children:"$10.00"})]})]})]})})]})},K=(c(99),c.p+"static/media/underConstruction.df49dabf.gif");var Y=function(){return Object(h.jsxs)("div",{className:"lessons-page",children:[Object(h.jsxs)("div",{className:"lessons",children:[Object(h.jsx)("h1",{children:" Lesson packages coming soon! "}),Object(h.jsx)("p",{children:" Contact me to schedule a lesson! "}),Object(h.jsx)(y.b,{to:"/contact",className:"link",children:Object(h.jsx)("button",{children:" Contact Me "})})]}),Object(h.jsx)("div",{className:"construction",children:Object(h.jsx)("img",{src:K,alt:""})})]})},Q=c(121),X=c(119),Z=c(120),ee=c(118),te=c(23);c(100),c(61);function ce(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=O().login,s=Object(n.useState)(""),r=Object(a.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(!1),d=Object(a.a)(j,2),o=d[0],b=d[1],u=Object(te.f)();function x(){return(x=Object(z.a)(W.a.mark((function n(s){return W.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.preventDefault(),n.prev=1,l(""),b(!0),n.next=6,c(e.current.value,t.current.value);case 6:u.push("/uploadform"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l("Failed to log in");case 12:b(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Ooops..."}),Object(h.jsx)("h4",{children:"You're not supposed to be here."})]}),Object(h.jsx)(Q.a,{children:Object(h.jsxs)(Q.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(h.jsx)(X.a,{variant:"danger",children:i}),Object(h.jsxs)(Z.a,{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(h.jsxs)(Z.a.Group,{id:"email",children:[Object(h.jsx)(Z.a.Label,{children:"Email"}),Object(h.jsx)(Z.a.Control,{type:"email",ref:e,required:!0})]}),Object(h.jsxs)(Z.a.Group,{id:"password",children:[Object(h.jsx)(Z.a.Label,{children:"Password"}),Object(h.jsx)(Z.a.Control,{type:"password",ref:t,required:!0})]}),Object(h.jsx)(ee.a,{disabled:o,className:"w-100 mt-2",type:"submit",children:"Log In"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-2",children:Object(h.jsx)(y.b,{to:"/forgotpassword",children:"Forgot Password?"})})]})})]})}c(101);function ne(){var e=Object(n.useRef)(),t=O().resetPassword,c=Object(n.useState)(""),s=Object(a.a)(c,2),r=s[0],i=s[1],l=Object(n.useState)(""),j=Object(a.a)(l,2),d=j[0],o=j[1],b=Object(n.useState)(!1),u=Object(a.a)(b,2),x=u[0],m=u[1];function p(){return(p=Object(z.a)(W.a.mark((function c(n){return W.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,o(""),i(""),m(!0),c.next=7,t(e.current.value);case 7:o("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),i("Failed to reset password");case 13:m(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"forgot",children:Object(h.jsx)(Q.a,{children:Object(h.jsxs)(Q.a.Body,{children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),r&&Object(h.jsx)(X.a,{variant:"danger",children:r}),d&&Object(h.jsx)(X.a,{variant:"success",children:d}),Object(h.jsxs)(Z.a,{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(h.jsxs)(Z.a.Group,{id:"email",children:[Object(h.jsx)(Z.a.Label,{children:"Email"}),Object(h.jsx)(Z.a.Control,{type:"email",ref:e,required:!0})]}),Object(h.jsx)(ee.a,{disabled:x,className:"w-100 mt-2",type:"submit",children:"Reset Password"})]}),Object(h.jsx)("div",{className:"w-100 text-center mt-3",children:Object(h.jsx)(y.b,{to:"/login",children:"Login"})})]})})})}var se=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(y.a,{basename:"/Drop_a_nickel",children:[Object(h.jsx)(N,{}),Object(h.jsx)(x,{children:Object(h.jsxs)(te.c,{children:[Object(h.jsx)(te.a,{path:"/",exact:!0,component:I}),Object(h.jsx)(te.a,{path:"/inventory",exact:!0,component:A}),Object(h.jsx)(te.a,{path:"/about",exact:!0,component:$}),Object(h.jsx)(te.a,{path:"/contact",exact:!0,component:T}),Object(h.jsx)(te.a,{path:"/uploadform",exact:!0,component:J}),Object(h.jsx)(te.a,{path:"/hours",exact:!0,component:V}),Object(h.jsx)(te.a,{path:"/lessons",exact:!0,component:Y}),Object(h.jsx)(te.a,{path:"/login",exact:!0,component:ce}),Object(h.jsx)(te.a,{path:"/forgotpassword",exact:!0,component:ne})]})}),Object(h.jsx)(E,{})]})})};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(se,{})}),document.getElementById("root"))},80:function(e,t,c){},86:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.75432282.chunk.js.map