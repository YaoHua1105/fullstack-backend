(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{rCj0:function(e,a,t){"use strict";t.r(a);t("IzEo");var l,n,s,r,i=t("bx4M"),o=(t("+L6B"),t("2/Rp")),m=(t("BoS7"),t("Sdc0")),c=t("jehZ"),d=t.n(c),p=(t("DZo9"),t("8z0m")),u=(t("miYZ"),t("tsqr")),h=(t("Pwec"),t("CtXQ")),g=t("p0pE"),E=t.n(g),y=t("2Taf"),f=t.n(y),v=t("vZ4D"),b=t.n(v),I=t("l4Ni"),B=t.n(I),w=t("ujKo"),N=t.n(w),_=t("MhPg"),k=t.n(_),S=(t("y8nQ"),t("Vl3Y")),C=(t("7Kak"),t("9yH6")),x=(t("OaEy"),t("2fM7")),j=(t("Znn+"),t("ZTPi")),q=(t("5NDa"),t("5rEg")),z=t("q1tI"),D=t.n(z),P=t("MuoO"),T=t("4rB2"),V=t.n(T),M=t("zHco"),Z=t("wd/R"),O=t.n(Z);t("XDpg");O.a.locale("zh-cn");q["a"].TextArea,j["a"].TabPane,x["a"].Option;var A=C["a"].Group,F=(l=Object(P["connect"])(function(e){var a=e.model;return{model:a}}),n=S["a"].create(),l(s=n((r=function(e){function a(){var e,t;f()(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return t=B()(this,(e=N()(a)).call.apply(e,[this].concat(n))),t.modelName="user",t.state={msg:"",url:"",data:{categorys:[],file_id:null,file_name:null,file_path:null},status:"",pagination:{},loading:!1},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){a.id=t.state.data.id,a.cover_id=t.state.data.cover_id,e||t.props.dispatch({type:"model/save",payload:E()({modelName:t.modelName},a)})})},t}return k()(a,e),b()(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var a=this.props.location.query;this.props.dispatch({type:"model/edit",payload:E()({modelName:this.modelName},a),callback:function(a){a&&e.setState({data:a.data,loading:!1})}})}},{key:"render",value:function(){var e=this,a=this.props.form.getFieldDecorator,t={labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:22}}},l=D.a.createElement("div",null,D.a.createElement(h["a"],{type:"plus"}),D.a.createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20\u56fe\u7247")),n={name:"file",listType:"picture-card",showUploadList:!1,action:"/api/admin/picture/upload",headers:{authorization:"Bearer "+sessionStorage["token"]},beforeUpload:function(e){if("image/jpeg"!==e.type&&"image/png"!==e.type)return u["a"].error("\u8bf7\u4e0a\u4f20jpg\u6216png\u683c\u5f0f\u7684\u56fe\u7247!"),!1;var a=e.size/1024/1024<2;return!!a||(u["a"].error("\u56fe\u7247\u5927\u5c0f\u4e0d\u53ef\u8d85\u8fc72MB!"),!1)},onChange:function(a){if("uploading"!==a.file.status){if("done"===a.file.status)if("success"===a.file.response.status){var t=e.state.data;t.cover_id=a.file.response.data.id,t.cover_path=a.file.response.data.url,e.setState({data:t,loading:!1})}else u["a"].error(a.file.response.msg)}else e.setState({loading:!0})}};sessionStorage["token"];return D.a.createElement(M["a"],null,D.a.createElement("div",{className:V.a.container},D.a.createElement(i["a"],{size:"small",title:"\u4f1a\u5458\u7f16\u8f91",bordered:!1,extra:D.a.createElement("a",{href:"javascript:history.go(-1)"},"\u8fd4\u56de\u4e0a\u4e00\u9875")},D.a.createElement(S["a"],{onSubmit:this.handleSubmit,style:{marginTop:8}},D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u5934\u50cf"}),D.a.createElement(p["a"],n,this.state.data.cover_path?D.a.createElement("img",{src:this.state.data.cover_path,alt:"avatar",width:80}):l)),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u7528\u6237\u540d"}),a("name",{initialValue:this.state.data.name,rules:[{required:!0,message:"\u7528\u6237\u540d\u5fc5\u586b\uff01"}]})(D.a.createElement(q["a"],{className:V.a.smallItem,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}))),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u6635\u79f0"}),a("nickname",{initialValue:this.state.data.nickname,rules:[{required:!0,message:"\u6635\u79f0\u5fc5\u586b\uff01"}]})(D.a.createElement(q["a"],{className:V.a.smallItem,placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0"}))),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u90ae\u7bb1"}),a("email",{initialValue:this.state.data.email,rules:[{required:!0,message:"\u90ae\u7bb1\u5fc5\u586b\uff01"}]})(D.a.createElement(q["a"],{className:V.a.smallItem,placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1"}))),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u6027\u522b"}),a("sex",{initialValue:this.state.data.sex})(D.a.createElement(A,null,D.a.createElement(C["a"],{value:1},"\u7537"),D.a.createElement(C["a"],{value:2},"\u5973")))),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u5bc6\u7801"}),a("password")(D.a.createElement(q["a"],{className:V.a.smallItem,type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u624b\u673a\u53f7"}),a("phone",{initialValue:this.state.data.phone,rules:[{required:!0,message:"\u624b\u673a\u53f7\u5fc5\u586b\uff01"}]})(D.a.createElement(q["a"],{className:V.a.smallItem,placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7"}))),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u6ce8\u518c\u65f6\u95f4"}),this.state.data.created_at),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u4f59\u989d"}),D.a.createElement("span",{style:{color:"#f81d22"}},this.state.data.money)),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u79ef\u5206"}),D.a.createElement("span",{style:{color:"#0b8235"}},this.state.data.point)),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u767b\u5f55\u65f6\u95f4"}),this.state.data.last_login_time),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u767b\u5f55IP"}),this.state.data.last_login_ip),D.a.createElement(S["a"].Item,d()({style:{marginBottom:8}},t,{label:"\u72b6\u6001"}),a("status",{initialValue:1===this.state.data.status,valuePropName:"checked"})(D.a.createElement(m["a"],{checkedChildren:"\u6b63\u5e38",unCheckedChildren:"\u7981\u7528"}))),D.a.createElement(S["a"].Item,{wrapperCol:{span:12,offset:5}},D.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"\u63d0\u4ea4"))))))}}]),a}(z["PureComponent"]),s=r))||s)||s);a["default"]=F}}]);