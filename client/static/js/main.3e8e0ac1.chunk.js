(this["webpackJsonpwork7-client"]=this["webpackJsonpwork7-client"]||[]).push([[0],{121:function(e,a,t){e.exports={layout:"styles_layout__SeFd3",content:"styles_content__o67Yr"}},123:function(e,a,t){},151:function(e,a,t){e.exports={header:"styles_header__2dQfB"}},174:function(e,a,t){e.exports=t(342)},341:function(e,a,t){},342:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),s=(t(123),t(20)),l=t(349),u=function(){return r.a.createElement(l.a.Footer,null,"Geekhub")},i=t(116),m=t(5),p=t(42),d=t(151),f=t.n(d),h=function(){return r.a.createElement(l.a.Header,{className:f.a.header},r.a.createElement(i.a,{to:"/"},r.a.createElement(m.a,{type:"file-image"})," GeekHub"),r.a.createElement(i.a,{to:"/admin/users"},r.a.createElement(p.a,{type:"primary",icon:"info-circle"},"Users")))},v=t(22),E=Object(v.a)(),y=t(16),g=t.n(y),b=t(152),w=t(153),x=t(166),k=t(154),_=t(168),C=t(344),O=t(343),j=t(345),N=t(163),U=t(83),M=t(155),S=t(165),D=t(348),I=t(346),L=t(347),B=t(156),F=t.n(B).a.create({baseURL:"http://localhost:5000/"}),A="/user";function G(e){var a;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.awrap(F.post(A,e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}))}function H(){var e;return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.awrap(F.get(A));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))}function J(e,a){var t;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.awrap(F.patch("".concat(A,"/").concat(e),a));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))}function W(e){var a;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.awrap(F.delete("".concat(A,"/").concat(e)));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}))}var Q=function(e){var a=e.edit,t=e.open,c=e.onClose,o=e.loadUsers,s=Object(n.useState)(a||{}),l=Object(S.a)(s,2),u=l[0],i=l[1];function p(e){var a=e.target,t=a.name,n=a.value;i(Object(M.a)({},u,Object(U.a)({},t,n)))}return a&&a._id!==u._id&&i(a),!a&&u._id&&i({}),r.a.createElement(D.a,{title:(a?"update ":"craete ")+"user",visible:t,onOk:function(){var e;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=O.a.loading({content:"Loading..."}),t.prev=1,!a){t.next=7;break}return t.next=5,g.a.awrap(J(a._id,u));case 5:t.next=9;break;case 7:return t.next=9,g.a.awrap(G(u));case 9:return t.next=11,g.a.awrap(o());case 11:c(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),C.a.error({message:t.t0.message||t.t0});case 17:return t.prev=17,e(),O.a.success("Success!"),t.finish(17);case 21:case"end":return t.stop()}}),null,null,[[1,14,17,21]])},onCancel:c},r.a.createElement(I.a,null,r.a.createElement(I.a.Item,null,r.a.createElement(L.a,{name:"firstName",prefix:r.a.createElement(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"First name",value:u.firstName,onChange:p}),r.a.createElement(L.a,{name:"lastName",prefix:r.a.createElement(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Last name",value:u.lastName,onChange:p}),r.a.createElement(L.a,{name:"email",prefix:r.a.createElement(m.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"email",value:u.email,onChange:p}))))},R=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(x.a)(this,(e=Object(k.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!0,modal:{open:!1}},t.changeModal=function(e){var a=t.state.modal.open;t.setState({modal:{open:!a,user:e}})},t.deleteUser=function(e){return g.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,g.a.awrap(W(e));case 3:t.loadData(),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),C.a.error({message:a.t0.message});case 9:case"end":return a.stop()}}),null,null,[[0,6]])},t.loadData=function(){var e,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=O.a.loading({content:"Loading..."}),n.prev=1,n.next=4,g.a.awrap(H());case 4:a=n.sent,t.setState({users:a,loading:!1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),C.a.error({message:n.t0.message||n.t0});case 11:return n.prev=11,e(),n.finish(11);case 14:case"end":return n.stop()}}),null,null,[[1,8,11,14]])},t}return Object(_.a)(a,e),Object(w.a)(a,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.users,n=a.modal;return r.a.createElement("div",null,r.a.createElement(p.a,{icon:"plus",type:"primary",onClick:function(){return e.changeModal()}},"Add User"),r.a.createElement(j.a,{dataSource:t,renderItem:function(a){return r.a.createElement(j.a.Item,{key:a._id,actions:[r.a.createElement(m.a,{type:"edit",onClick:function(){return e.changeModal(a)}}),r.a.createElement(m.a,{type:"delete",onClick:function(){return e.deleteUser(a._id)}})]},r.a.createElement(j.a.Item.Meta,{title:r.a.createElement("p",null,a.fullName),description:a.email}))}},this.state.loading&&r.a.createElement(N.a,null)),r.a.createElement(Q,{loadUsers:this.loadData,open:n.open,edit:n.user,onClose:function(){return e.changeModal()}}))}}]),a}(n.Component),Y=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/admin/users",component:R}))},$=t(121),q=t.n($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(340),t(341);o.a.render(r.a.createElement((function(){return r.a.createElement(s.c,{history:E},r.a.createElement(l.a,{className:q.a.layout},r.a.createElement(h,null),r.a.createElement(l.a.Content,{className:q.a.content},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/admin",component:Y}),r.a.createElement(s.a,{to:"/admin"}))),r.a.createElement(u,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[174,1,2]]]);
//# sourceMappingURL=main.3e8e0ac1.chunk.js.map