(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),i=a(7),o=a.n(i),s=(a(17),a(3)),l=a(4),m=a(6),u=a(5),h=a(8),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):h.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.imageName,name:"imageName",placeholder:"Search images and photos",onChange:this.handleNameChange})]})})}}]),a}(r.Component),j=a(9),b=a(11),d=a.n(b),p=(a(39),function(e){var t=e.images,a=e.clickModal;return t.map((function(e){var t=e.id,r=e.webformatURL,c=e.tags,i=e.largeImageURL;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:r,alt:c,onClick:function(){a(i)}})},t)}))}),f=function(e){var t=e.onClickButton;return Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.clickModal()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:this.props.url,alt:"foto",className:"Modal"})})})}}]),a}(r.Component);var v={fetchImage:function(e,t){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"\n           &language=en&page=").concat(t,"&per_page=12&key=").concat("19520072-2a079db9835241cceccf8dd5b")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"))}))}},N=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,showModal:!1,imageSrc:"",page:1},e.toggleModal=function(t){return e.setState((function(e){return{showModal:!e.showModal,imageSrc:t}}))},e.incrementPage=function(){v.fetchImage(e.props.imageName,e.state.page).then((function(t){var a=t.hits;return e.setState((function(e){return{images:[].concat(Object(j.a)(e.images),Object(j.a)(a)),page:e.page+1}}))}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.imageName,r=this.props.imageName,c=this.state.page;n!==r&&(this.setState({loading:!0,images:[]}),v.fetchImage(r,c).then((function(e){var t=e.hits;return a.setState({images:Object(j.a)(t)})})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({loading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.images,r=e.error,c=e.showModal,i=e.imageSrc;return Object(n.jsxs)(n.Fragment,{children:[r&&Object(n.jsx)("h1",{children:r.message}),t&&Object(n.jsx)(d.a,{type:"Circles",color:"#00BFFF",height:80,width:80}),a&&Object(n.jsx)("ul",{className:"ImageGallery",children:Object(n.jsx)(p,{images:a,clickModal:this.toggleModal})}),a.length>0&&Object(n.jsx)(f,{onClickButton:this.incrementPage}),c&&Object(n.jsx)(O,{clickModal:this.toggleModal,url:i})]})}}]),a}(r.Component),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(g,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(N,{imageName:this.state.imageName})," ",Object(n.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);a(40);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d177beb0.chunk.js.map