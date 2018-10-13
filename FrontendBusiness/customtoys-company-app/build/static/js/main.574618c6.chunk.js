(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(43)},43:function(e,t,a){a(66)},52:function(e,t,a){},56:function(e,t){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a(11),o=a(16),i=Object(o.a)(),l=a(18),A=a(35),u=a(36),E={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},m={REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE",DELETE_REQUEST:"USERS_DELETE_REQUEST",DELETE_SUCCESS:"USERS_DELETE_SUCCESS",DELETE_FAILURE:"USERS_DELETE_FAILURE"},d={REGISTER_REQUEST:"CLIENTS_REGISTER_REQUEST",REGISTER_SUCCESS:"CLIENTS_REGISTER_SUCCESS",REGISTER_FAILURE:"CLIENTS_REGISTER_FAILURE",GETALL_REQUEST:"CLIENTS_GETALL_REQUEST",GETALL_SUCCESS:"CLIENTS_GETALL_SUCCESS",GETALL_FAILURE:"CLIENTS_GETALL_FAILURE"},h={REGISTER_REQUEST:"PROJECTS_REGISTER_REQUEST",REGISTER_SUCCESS:"PROJECTS_REGISTER_SUCCESS",REGISTER_FAILURE:"PROJECTS_REGISTER_FAILURE"},p=JSON.parse(localStorage.getItem("user")),g=p?{loggedIn:!0,user:p}:{};var S=a(23),f=a(5);var C=Object(l.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case m.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case m.LOGIN_FAILURE:case m.LOGOUT:return{};default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case d.REGISTER_REQUEST:case h.REGISTER_REQUEST:return{registering:!0};case d.REGISTER_SUCCESS:case d.REGISTER_FAILURE:case h.REGISTER_FAILURE:case h.REGISTER_SUCCESS:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.GETALL_REQUEST:return{loading:!0};case m.GETALL_SUCCESS:return{items:t.users};case m.GETALL_FAILURE:return{error:t.error};case m.DELETE_REQUEST:return Object(f.a)({},e,{items:e.items.map(function(e){return e.id===t.id?Object(f.a)({},e,{deleting:!0}):e})});case m.DELETE_SUCCESS:return{items:e.items.filter(function(e){return e.id!==t.id})};case m.DELETE_FAILURE:return Object(f.a)({},e,{items:e.items.map(function(e){if(e.id===t.id){e.deleting;var a=Object(S.a)(e,["deleting"]);return Object(f.a)({},a,{deleteError:t.error})}return e})});default:return e}},clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.GETALL_REQUEST:return{loading:!0};case d.GETALL_SUCCESS:return{items:t.clients};case d.GETALL_FAILURE:return{error:t.error};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.SUCCESS:return{type:"alert-success",message:t.message};case E.ERROR:return{type:"alert-danger",message:t.message};case E.CLEAR:return{};default:return e}}}),R=Object(u.createLogger)(),b=Object(l.d)(C,Object(l.a)(A.a,R));function I(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:e.token}:{}}a(25),JSON.parse(localStorage.getItem("users")),JSON.parse(localStorage.getItem("clients")),JSON.parse(localStorage.getItem("projects"));var v=a(8),U=a(9),T=a(13),_=a(10),O=a(12),L=a(70),G=a(69),y={success:function(e){return{type:E.SUCCESS,message:e}},error:function(e){return{type:E.ERROR,message:e}},clear:function(){return{type:E.CLEAR}}};var j=a(7),Q=a.n(j),w={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("".concat(Q.a.apiUrl,"/api/login/enterprise"),a).then(D).then(function(a){var n={username:e,password:t,token:a.token};return n.token&&localStorage.setItem("user",JSON.stringify(n)),n})},logout:N,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(Q.a.apiUrl,"/users/register"),t).then(D)},getAll:function(){var e={method:"GET",headers:I()};return fetch("".concat(Q.a.apiUrl,"/users"),e).then(D)},getById:function(e){var t={method:"GET",headers:I()};return fetch("".concat(Q.a.apiUrl,"/users/").concat(e),t).then(D)},update:function(e){var t={method:"PUT",headers:Object(f.a)({},I(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(Q.a.apiUrl,"/users/").concat(e.id),t).then(D)},delete:function(e){var t={method:"DELETE",headers:I()};return fetch("".concat(Q.a.apiUrl,"/users/").concat(e),t).then(D)}};function N(){localStorage.removeItem("user")}function D(e){return e.text().then(function(t){if('404 - "Not Found"'===t)return Promise.reject("Datos Incorrectos");var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&(N(),window.location.reload(!0));var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})}var k={register:function(e){var t=function(e){return{company_name:e.username,entry_date:e.entry_date}}(e),a={method:"POST",headers:Object(f.a)({},I(),{"Content-Type":"application/json"}),body:JSON.stringify(t)};return fetch("".concat(Q.a.apiUrl,"/api/clients"),a).then(M)},update:function(e){var t={method:"PUT",headers:Object(f.a)({},I(),{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("".concat(Q.a.apiUrl,"/api/client/").concat(e.id),t).then(M)},getAll:function(){var e={method:"GET",headers:I()};return fetch("".concat(Q.a.apiUrl,"/api/clients"),e).then(M)},getById:function(e){var t={method:"GET",headers:I()};return fetch("".concat(Q.a.apiUrl,"/api/clients/").concat(e),t).then(M)}};function M(e){return e.text().then(function(t){try{var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&(localStorage.removeItem("user"),window.location.reload(!0));var n=a&&a.message||e.statusText;return Promise.reject(n)}return a}catch(r){return Promise.reject(t)}})}var F={register:function(e){var t=function(e){return{name:e.name,start_date:e.start_date,end_date:e.end_date,company:"COMPANY"}}(e),a={method:"POST",headers:Object(f.a)({},I(),{"Content-Type":"application/json"}),body:JSON.stringify(t)};return fetch("".concat(Q.a.apiUrl,"/api/projects"),a).then(J)},getAll:function(){var e={method:"GET",headers:I()};return fetch("".concat(Q.a.apiUrl,"/api/projects"),e).then(J)},getClientProjects:function(e){var t={method:"GET",headers:I()};return fetch("".concat(Q.a.apiUrl,"/api/client/").concat(e,"/projects"),t).then(J)}};function J(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&(localStorage.removeItem("user"),window.location.reload(!0));var n=a&&a.message||e.statusText;return Promise.reject(n)}return a})}var B={login:function(e,t){return function(a){var n;a((n={username:e},{type:m.LOGIN_REQUEST,user:n})),w.login(e,t).then(function(e){a(function(e){return{type:m.LOGIN_SUCCESS,user:e}}(e)),i.push("/")},function(e){a(function(e){return{type:m.LOGIN_FAILURE,error:e}}(e.toString())),a(y.error(e.toString()))})}},logout:function(){return w.logout(),{type:m.LOGOUT}},register:function(e){return function(t){t(function(e){return{type:m.REGISTER_REQUEST,user:e}}(e)),w.register(e).then(function(e){t(function(e){return{type:m.REGISTER_SUCCESS,user:e}}()),i.push("/login"),t(y.success("Registration successful"))},function(e){t(function(e){return{type:m.REGISTER_FAILURE,error:e}}(e.toString())),t(y.error(e.toString()))})}},getAll:function(){return function(e){e({type:m.GETALL_REQUEST}),w.getAll().then(function(t){return e(function(e){return{type:m.GETALL_SUCCESS,users:e}}(t))},function(t){return e(function(e){return{type:m.GETALL_FAILURE,error:e}}(t.toString()))})}},delete:function(e){return function(t){t(function(e){return{type:m.DELETE_REQUEST,id:e}}(e)),w.delete(e).then(function(a){return t(function(e){return{type:m.DELETE_SUCCESS,id:e}}(e))},function(a){return t(function(e,t){return{type:m.DELETE_FAILURE,id:e,error:t}}(e,a.toString()))})}}};var K={register:function(e){return function(t){t(function(e){return{type:d.REGISTER_REQUEST,client:e}}(e)),k.register(e).then(function(e){t(function(e){return{type:d.REGISTER_SUCCESS,client:e}}()),i.push("/"),t(y.success("\xa1Se ha registrado el cliente correctamente!"))},function(e){t(function(e){return{type:d.REGISTER_FAILURE,error:e}}(e.toString())),t(y.error(e.toString()))})}},getAll:function(){return function(e){e({type:d.GETALL_REQUEST}),k.getAll().then(function(t){return e(function(e){return{type:d.GETALL_SUCCESS,clients:e}}(t))},function(t){return e(function(e){return{type:d.GETALL_FAILURE,error:e}}(t.toString()))})}}};var Y={register:function(e){return function(t){t(function(e){return{type:h.REGISTER_REQUEST,project:e}}(e)),F.register(e).then(function(e){t(function(e){return{type:h.REGISTER_SUCCESS,project:e}}()),i.push("/"),t(y.success("\xa1Se ha registrado el proyecto correctamente!"))},function(e){t(function(e){return{type:h.REGISTER_FAILURE,error:e}}(e.toString())),t(y.error(e.toString()))})}}};var P=a(68),H=function(e){var t=e.component,a=Object(S.a)(e,["component"]);return r.a.createElement(G.a,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(P.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},x=(a(52),a(56),a(67)),W=a(57),z=function(e){function t(){return Object(v.a)(this,t),Object(T.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){W("#cssmenu li.active").addClass("open").children("ul").show(),W("#cssmenu li.has-sub>a").on("click",this.showClientOptions)}},{key:"showClientOptions",value:function(){W(this).removeAttr("href");var e=W(this).parent("li");e.hasClass("open")?(e.removeClass("open"),e.find("li").removeClass("open"),e.find("ul").slideUp(200)):(e.addClass("open"),e.children("ul").slideDown(200),e.siblings("li").children("ul").slideUp(200),e.siblings("li").removeClass("open"),e.siblings("li").find("li").removeClass("open"),e.siblings("li").find("ul").slideUp(200))}},{key:"render",value:function(){return r.a.createElement("div",{id:"cssmenu"},r.a.createElement("ul",null,r.a.createElement("li",{className:"has-sub"},r.a.createElement("a",{href:"#top"},"Clientes"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(x.a,{to:"/register"},"Crear Cliente")),r.a.createElement("li",null,r.a.createElement(x.a,{to:"/"},"Mostrar Clientes")))),r.a.createElement("li",{className:"has-sub"},r.a.createElement("a",{href:"#top"},"Proyectos"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(x.a,{to:"/createProject"},"Crear Proyecto")),r.a.createElement("li",null,r.a.createElement(x.a,{to:"/"},"Mostrar Proyectos")))),r.a.createElement("li",{className:"logout"},r.a.createElement(x.a,{to:"/login"},"Cerrar Sesi\xf3n"))))}}]),t}(r.a.Component),V=function(e){function t(){return Object(v.a)(this,t),Object(T.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(B.getAll())}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"welcomeMsg"},r.a.createElement("p",null,"Bienvenido/a ",e?e.username:"","!")),r.a.createElement(z,null))}}]),t}(r.a.Component);var Z=Object(c.b)(function(e){var t=e.users;return{user:e.authentication.user,users:t}})(V),q=a(15),X=a(6),$=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(T.a)(this,Object(_.a)(t).call(this,e))).props.dispatch(B.logout()),a.state={username:"",password:"",submitted:!1},a.handleChange=a.handleChange.bind(Object(X.a)(Object(X.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(X.a)(Object(X.a)(a))),a}return Object(O.a)(t,e),Object(U.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(q.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.username,n=t.password,r=this.props.dispatch;a&&n&&r(B.login(a,n))}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.state,a=t.username,n=t.password,s=t.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",{style:{textAlign:"center"}},"Custom Toys"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(s&&!a?" has-error":"")},r.a.createElement("label",{htmlFor:"username"},"Nombre de Usuario"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a,onChange:this.handleChange}),s&&!a&&r.a.createElement("div",{className:"help-block"},"Debe ingresar el nombre de usuario")),r.a.createElement("div",{className:"form-group"+(s&&!n?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:n,onChange:this.handleChange}),s&&!n&&r.a.createElement("div",{className:"help-block"},"Debe ingresar la contrase\xf1a")),r.a.createElement("div",{style:{textAlign:"center"},className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Ingresar"),r.a.createElement("br",null),r.a.createElement("br",null),e&&r.a.createElement("img",{alt:"Loading...",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}))))}}]),t}(r.a.Component);var ee=Object(c.b)(function(e){return{loggingIn:e.authentication.loggingIn}})($),te=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(T.a)(this,Object(_.a)(t).call(this,e))).state={client:{username:"",password:"",company_name:"",entry_date:"",rut:""},submitted:!1},a.handleChange=a.handleChange.bind(Object(X.a)(Object(X.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(X.a)(Object(X.a)(a))),a}return Object(O.a)(t,e),Object(U.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.state.client;this.setState({client:Object(f.a)({},r,Object(q.a)({},a,n))})}},{key:"fieldsCompleted",value:function(){var e=this.state.client,t=!0;return t&=""!==e.username.trim(),t&=""!==e.password.trim(),t&=""!==e.company_name.trim(),t&=""!==e.entry_date.trim()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.client,a=this.props.dispatch;this.fieldsCompleted()&&a(K.register(t))}},{key:"render",value:function(){var e=this.props.registering,t=this.state,a=t.client,n=t.submitted;return r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Registrar Cliente"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(n&&!a.username?" has-error":"")},r.a.createElement("label",{htmlFor:"username"},"Nombre de Usuario"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:this.handleChange}),n&&!a.username&&r.a.createElement("div",{className:"help-block"},"Debe ingresar un nombre de usuario")),r.a.createElement("div",{className:"form-group"+(n&&!a.password?" has-error":"")},r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:this.handleChange}),n&&!a.password&&r.a.createElement("div",{className:"help-block"},"Debe ingresar una contrase\xf1a")),r.a.createElement("div",{className:"form-group"+(n&&!a.company_name?" has-error":"")},r.a.createElement("label",{htmlFor:"company_name"},"Nombre de la Empresa Cliente"),r.a.createElement("input",{type:"text",className:"form-control",name:"company_name",value:a.company_name,onChange:this.handleChange}),n&&!a.company_name&&r.a.createElement("div",{className:"help-block"},"Debe ingresar un nombre para la empresa cliente")),r.a.createElement("div",{className:"form-group"+(n&&!a.entry_date?" has-error":"")},r.a.createElement("label",{htmlFor:"entry_date"},"Fecha de ingreso"),r.a.createElement("input",{type:"date",className:"form-control",name:"entry_date",value:a.entry_date,onChange:this.handleChange}),n&&!a.entry_date&&r.a.createElement("div",{className:"help-block"},"Debe ingresar la fecha de entrada")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Registrar"),e&&r.a.createElement("img",{alt:"Registering...",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r.a.createElement(x.a,{to:"/",className:"btn btn-link"},"Cancelar"))))}}]),t}(r.a.Component);var ae=Object(c.b)(function(e){return{registering:e.registration.registering,user:e.authentication.user}})(te),ne=a(41),re=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(T.a)(this,Object(_.a)(t).call(this,e))).state={project:{_id:"",name:"",start_date:"",end_date:"",id_client:""},selectedOption:null,submitted:!1},a.handleChange=a.handleChange.bind(Object(X.a)(Object(X.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(X.a)(Object(X.a)(a))),a}return Object(O.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(K.getAll())}},{key:"handleClient",value:function(e){var t=this.state.project;e&&this.setState({selectedOption:e,project:Object(f.a)({},t,{id_client:e.value})})}},{key:"handleChange",value:function(e){if(e.target){var t=e.target,a=t.name,n=t.value,r=this.state.project;this.setState({project:Object(f.a)({},r,Object(q.a)({},a,n))})}else this.handleClient(e)}},{key:"fieldsCompleted",value:function(){var e=this.state.project,t=!0;return t&=""!==e.name.trim(),t&=""!==e.start_date.trim(),t&=""!==e.end_date.trim(),t&=""!==e.id_client.trim()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.project,a=this.props.dispatch;this.fieldsCompleted()&&a(Y.register(t))}},{key:"render",value:function(){var e=this.props,t=e.registering,a=e.clients,n=this.state,s=n.project,c=n.submitted,o=n.selectedOption,i=[];return a&&a.items&&a.items.map(function(e,t){return i.push({value:e.username,label:"Nombre de usuario del cliente: "+e.username})}),r.a.createElement("div",{className:"col-md-6 col-md-offset-3"},r.a.createElement("h2",null,"Crear Proyecto"),r.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"+(c&&!s.name?" has-error":"")},r.a.createElement("label",{htmlFor:"name"},"Nombre"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:s.name,onChange:this.handleChange}),c&&!s.name&&r.a.createElement("div",{className:"help-block"},"Debe ingresar un nombre al proyecto")),r.a.createElement("div",{className:"form-group"+(c&&!s.start_date?" has-error":"")},r.a.createElement("label",{htmlFor:"start_date"},"Fecha de Inicio"),r.a.createElement("input",{type:"date",className:"form-control",name:"start_date",value:s.start_date,onChange:this.handleChange}),c&&!s.start_date&&r.a.createElement("div",{className:"help-block"},"Debe ingresar una fecha de inicio")),r.a.createElement("div",{className:"form-group"+(c&&!s.end_date?" has-error":"")},r.a.createElement("label",{htmlFor:"end_date"},"Fecha de Fin"),r.a.createElement("input",{type:"date",className:"form-control",name:"end_date",value:s.end_date,onChange:this.handleChange}),c&&!s.end_date&&r.a.createElement("div",{className:"help-block"},"Debe ingresar una fecha de fin")),r.a.createElement("div",{className:"form-group"+(c&&!s.id_client?" has-error":"")},r.a.createElement("label",{htmlFor:"id_client"},"Seleccione un cliente"),r.a.createElement(ne.a,{placeholder:"Seleccione un cliente",value:o,onChange:this.handleChange,options:i,noOptionsMessage:function(){return"No hay clientes registrados"}}),c&&!s.id_client&&r.a.createElement("div",{className:"help-block"},"Debe seleccionar un cliente")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary"},"Registrar"),t&&r.a.createElement("img",{alt:"Registering...",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),r.a.createElement(x.a,{to:"/",className:"btn btn-link"},"Cancelar"))))}}]),t}(r.a.Component);var se=Object(c.b)(function(e){var t=e.clients,a=e.authentication,n=e.registration.registering;return{user:a.user,clients:t,registering:n}})(re),ce=function(e){function t(e){var a;Object(v.a)(this,t);var n=(a=Object(T.a)(this,Object(_.a)(t).call(this,e))).props.dispatch;return i.listen(function(e,t){n(y.clear())}),a}return Object(O.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-sm-8 col-sm-offset-2"},e.message&&r.a.createElement("div",{className:"alert ".concat(e.type)},e.message),r.a.createElement(L.a,{history:i},r.a.createElement("div",null,r.a.createElement(H,{exact:!0,path:"/",component:Z}),r.a.createElement(H,{path:"/register",component:ae}),r.a.createElement(H,{path:"/createProject",component:se}),r.a.createElement(G.a,{path:"/login",component:ee}))))))}}]),t}(r.a.Component);var oe=Object(c.b)(function(e){return{alert:e.alert}})(ce);Object(s.render)(r.a.createElement(c.a,{store:b},r.a.createElement(oe,null)),document.getElementById("app"))},7:function(e,t){e.exports={apiUrl:"http://localhost:3000",ENTERPRISE_AUTH_API_TOKEN:"d774f026-6243-4a14-9696-051329f82987",ENTERPRISE_AUTH_API_URL:"https://dev-ops-ort.herokuapp.com/api/auth/token",CUSTOMER_RUT_VALIDATE_API_URL:"https://dev-ops-ort.herokuapp.com/api/rut/validate"}}},[[42,2,1]]]);
//# sourceMappingURL=main.574618c6.chunk.js.map