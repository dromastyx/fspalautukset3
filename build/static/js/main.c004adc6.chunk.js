(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),c=t.n(r),l=t(2),o=function(e){var n=e.person,t=e.handleClick;return u.a.createElement("li",null,n.name," ",n.number,u.a.createElement("button",{onClick:t},"delete"))},i=t(3),m=t.n(i),d="/api/persons",f=function(){return m.a.get(d).then((function(e){return e.data}))},s=function(e){return m.a.post(d,e).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.addPerson,t=e.newName,a=e.newNum,r=e.handleNameChange,c=e.handleNumberChange;return u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"Name: ",u.a.createElement("input",{value:t,onChange:r})),u.a.createElement("div",null,"Number: ",u.a.createElement("input",{value:a,onChange:c})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"Add")))},v=function(e){var n=e.message;if(null===n)return null;var t={color:n.includes("removed")?"red":"green",background:"lightgrey",borderStyle:"solid",borderRadius:"5",padding:"10",fontSize:20};return u.a.createElement("div",{style:t},n)},E=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],d=i[1],E=Object(a.useState)(""),g=Object(l.a)(E,2),w=g[0],C=g[1],j=Object(a.useState)(""),N=Object(l.a)(j,2),O=N[0],k=N[1],y=Object(a.useState)(null),S=Object(l.a)(y,2),T=S[0],A=S[1];Object(a.useEffect)((function(){f().then((function(e){r(e)}))}),[]);var P=t.filter((function(e){return e.name.toUpperCase().includes(O.toUpperCase())}));return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(v,{message:T}),u.a.createElement("div",null,"Filter shown with ",u.a.createElement("input",{onChange:function(e){k(e.target.value)}})),u.a.createElement("h2",null,"Add a new"),u.a.createElement(p,{addPerson:function(e){e.preventDefault();var n={name:m,number:w};if(t.map((function(e){return e.name})).includes(n.name)){window.alert("".concat(n.name," is already added to phonebook, replace the old number with a new one?"));var a=t.find((function(e){return e.name===n.name})),u=a.id;b(u,n).then((function(e){r(t.map((function(n){return n.id!==u?n:e}))),A("Modified ".concat(e.name)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){A("".concat(a.name," was already removed from server.")),setTimeout((function(){A(null)}),5e3),r(t.filter((function(e){return e.id!==u})))}))}else s(n).then((function(e){r(t.concat(e)),d(""),C(""),A("Added ".concat(e.name)),setTimeout((function(){A(null)}),5e3)}))},newName:m,newNum:w,handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement("ul",null,P.map((function(e){return u.a.createElement(o,{key:e.name,person:e,handleClick:function(){return function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Want to delete ".concat(n.name,"?"))&&h(e).then((function(){r(t.filter((function(n){return n.id!==e}))),A("Deleted ".concat(n.name)),setTimeout((function(){A(null)}),5e3)}))}(e.id)}})}))))};c.a.render(u.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c004adc6.chunk.js.map