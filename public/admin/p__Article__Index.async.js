(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1xNM":function(e,t,a){"use strict";a.r(t);a("g9YV");var n,l,r,i,c=a("wCAj"),o=(a("14J3"),a("BMrR")),s=(a("Pwec"),a("CtXQ")),d=(a("jCWc"),a("kPKH")),m=(a("P2fV"),a("NJEC")),p=(a("/zsF"),a("PArb")),u=(a("+BJd"),a("mr32")),h=a("p0pE"),y=a.n(h),g=a("2Taf"),f=a.n(g),E=a("vZ4D"),k=a.n(E),v=a("l4Ni"),S=a.n(v),b=a("ujKo"),x=a.n(b),w=a("rlhR"),N=a.n(w),C=a("MhPg"),R=a.n(C),I=(a("y8nQ"),a("Vl3Y")),D=(a("OaEy"),a("2fM7")),M=(a("2qtc"),a("kLXV")),B=(a("+L6B"),a("2/Rp")),K=(a("iQDF"),a("+eQT")),T=(a("5NDa"),a("5rEg")),j=a("q1tI"),P=a.n(j),A=a("MuoO"),Y=a("yiPm"),V=a.n(Y),H=a("zHco"),O=a("7DNP"),_=a("Qyje"),F=(T["a"].Search,K["a"].RangePicker),z=B["a"].Group,J=M["a"].confirm,Q=D["a"].Option,L=(n=Object(A["connect"])(function(e){var t=e.model;return{model:t}}),l=I["a"].create(),n(r=l((i=function(e){function t(){var e,a;f()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=S()(this,(e=x()(t)).call.apply(e,[this].concat(l))),a.modelName="article",a.state={msg:"",url:"",data:{categorys:[]},status:"",pagination:{},loading:!1,previewVisible:!1,previewImage:"",expand:!1,selectedRowKeys:[]},a.handleCreate=function(){var e=a.props.dispatch;e(O["routerRedux"].push({pathname:"/"+a.modelName+"/create"}))},a.handleEdit=function(e){var t=a.props.dispatch;t(O["routerRedux"].push({pathname:"/"+a.modelName+"/edit",query:{id:e}}))},a.handleDestroy=function(e){var t=a.props.dispatch;t({type:"model/destroy",payload:{modelName:a.modelName,id:e}}).then(function(){"success"===a.state.status&&(a.state.data.lists=a.state.data.lists.filter(function(t){return t.id!==e}),a.setState(y()({},a.state.data)))})},a.handleStatusChange=function(e,t){a.setState({loading:!0});var n=a.props.dispatch;n({type:"model/changeStatus",payload:{modelName:a.modelName,id:e,status:t}}).then(function(){var e=a.props.dispatch;e({type:"model/index",payload:y()({modelName:a.modelName},a.state.pagination,{search:a.state.search}),callback:function(e){e&&a.setState(y()({},e,{loading:!1}))}})})},a.handleMultiDestroy=function(){var e=N()(a);J({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u4e9b\u6570\u636e\u5417\uff1f",content:"\u5220\u9664\u540e\u6570\u636e\u4e0d\u53ef\u6062\u590d\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",centered:!0,onOk:function(){var t=e.state.selectedRowKeys,a=e.props.dispatch;a({type:"model/destroy",payload:{modelName:e.modelName,id:t}}).then(function(){"success"===e.state.status&&(t.map(function(t){e.state.data.lists=e.state.data.lists.filter(function(e){return e.id!==t})}),e.setState(y()({},e.state.data,{selectedRowKeys:[]})))})},onCancel:function(){}})},a.handleMultiStatusChange=function(e){a.setState({loading:!0});var t=a.state.selectedRowKeys,n=a.props.dispatch;n({type:"model/changeStatus",payload:{modelName:a.modelName,id:t,status:e}}).then(function(){var e=a.props.dispatch;e({type:"model/index",payload:y()({modelName:a.modelName},a.state.pagination,{search:a.state.search}),callback:function(e){e&&a.setState(y()({},e,{loading:!1}))}})})},a.handleTableChange=function(e,t,n){a.setState({loading:!0});var l=a.props.dispatch;l({type:"model/index",payload:y()({modelName:a.modelName,pageSize:e.pageSize,current:e.current,sortField:n.field,sortOrder:n.order},t,{search:a.state.search}),callback:function(e){e&&a.setState(y()({},e,{loading:!1,selectedRowKeys:[]}))}})},a.toggle=function(){var e=a.state.expand;a.setState({expand:!e})},a.handleSelectAll=function(){var e=a.state.data.lists.map(function(e){return e.id});console.log(e),a.setState({selectedRowKeys:e})},a.handleCancelSelectAll=function(){a.setState({selectedRowKeys:[]})},a.onSelectChange=function(e){console.log("selectedRowKeys changed: ",e),a.setState({selectedRowKeys:e})},a.handleSearch=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(t.dateRange&&t.dateRange[0]&&t.dateRange[1]){var n=t.dateRange[0].format("YYYY-MM-DD"),l=t.dateRange[1].format("YYYY-MM-DD");t.dateRange=[],t.dateRange=[n,l]}if(!e){var r=a.props.dispatch;r({type:"model/index",payload:y()({modelName:a.modelName},a.state.pagination,{search:t}),callback:function(e){e&&a.setState(y()({},e,{loading:!1}))}})}})},a.handleResetSearch=function(){a.props.form.resetFields()},a}return R()(t,e),k()(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.dispatch({type:"model/index",payload:{modelName:this.modelName},callback:function(t){t&&e.setState(y()({},t,{loading:!1}))}})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state.selectedRowKeys,n={selectedRowKeys:a,onChange:this.onSelectChange,getCheckboxProps:function(e){return{name:e.name}},fixed:"left"},l=[{title:"\u6807\u9898",dataIndex:"title",key:"title",render:function(t,a){return P.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(a.id)}},t)}},{title:"\u4f5c\u8005",dataIndex:"author",key:"author"},{title:"\u6392\u5e8f(\u8d8a\u5927\u8d8a\u9760\u524d)",dataIndex:"level",key:"level"},{title:"\u522b\u540d",dataIndex:"name",key:"name"},{title:"\u5206\u7c7b",dataIndex:"category_title",key:"category_title"},{title:"\u72b6\u6001",key:"status",dataIndex:"status",render:function(e,t){return P.a.createElement("span",null,P.a.createElement(u["a"],{color:"\u5df2\u7981\u7528"===e?"red":"blue"},e))}},{title:"\u53d1\u5e03\u65f6\u95f4",dataIndex:"created_at",key:"created_at"},{title:"\u64cd\u4f5c",key:"action",fixed:"right",width:260,render:function(t,a){return P.a.createElement("span",null,P.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleStatusChange(a.id,"\u6b63\u5e38"==a.status?2:1)}},"\u6b63\u5e38"==a.status?"\u7981\u7528":"\u5ba1\u6838"),P.a.createElement(p["a"],{type:"vertical"}),P.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(a.id)}},"\u7f16\u8f91"),P.a.createElement(p["a"],{type:"vertical"}),P.a.createElement(m["a"],{title:"\u786e\u5b9a\u5220\u9664\u5417\uff1f",onConfirm:function(){return e.handleDestroy(a.id)}},P.a.createElement("a",{href:"javascript:;"},"\u5220\u9664")))}}];return P.a.createElement(H["a"],null,P.a.createElement("div",{className:V.a.container},P.a.createElement("div",{className:V.a.tableHeader},P.a.createElement(o["a"],{type:"flex",justify:"start"},P.a.createElement(d["a"],{span:12},P.a.createElement("h5",{className:V.a.tableHeaderTitle},"\u6587\u7ae0\u5217\u8868")),P.a.createElement(d["a"],{span:12},P.a.createElement("div",{className:V.a.floatRight},P.a.createElement(B["a"],{type:"primary",onClick:function(){return e.handleCreate()}},P.a.createElement(s["a"],{type:"plus-circle"}),"\u53d1\u5e03\u6587\u7ae0"),"\xa0",P.a.createElement("a",{href:"/api/admin/"+this.modelName+"/export?"+Object(_["stringify"])({search:this.state.search}),target:"_blank"},P.a.createElement(B["a"],null,P.a.createElement(s["a"],{type:"export"}),"\u5bfc\u51fa\u6570\u636e")))))),P.a.createElement(p["a"],{style:{marginBottom:10}}),P.a.createElement("div",{className:V.a.tableToolBar},P.a.createElement(o["a"],{type:"flex",justify:"start"},P.a.createElement(d["a"],{span:8},P.a.createElement(z,null,P.a.createElement(B["a"],{onClick:function(){return e.handleSelectAll()}},"\u5168\u9009"),P.a.createElement(B["a"],{onClick:function(){return e.handleCancelSelectAll()}},"\u53d6\u6d88")),P.a.createElement(p["a"],{type:"vertical"}),P.a.createElement(B["a"],{onClick:function(){return e.handleMultiStatusChange(1)}},"\u5ba1\u6838"),"\xa0",P.a.createElement(B["a"],{onClick:function(){return e.handleMultiStatusChange(2)}},"\u7981\u7528"),"\xa0",P.a.createElement(B["a"],{onClick:function(){return e.handleMultiDestroy()},type:"danger"},"\u5220\u9664")),P.a.createElement(d["a"],{span:16},P.a.createElement("div",{className:V.a.floatRight},P.a.createElement(I["a"],{layout:"inline",onSubmit:this.handleSearch},P.a.createElement(I["a"].Item,{style:{marginBottom:0}},t("category_id",{initialValue:"0"})(P.a.createElement(D["a"],{style:{width:160},placeholder:"\u9009\u62e9\u5206\u7c7b"},P.a.createElement(Q,{key:0},"\u6240\u6709\u5206\u7c7b"),0!==this.state.data.categorys.length?this.state.data.categorys.map(function(e){return P.a.createElement(Q,{key:e.id},e.title)}):console.log("select data null")))),P.a.createElement(I["a"].Item,{style:{marginBottom:0}},t("status",{initialValue:"0"})(P.a.createElement(D["a"],{style:{width:160},placeholder:"\u6240\u9009\u72b6\u6001"},P.a.createElement(Q,{key:0},"\u6240\u6709\u72b6\u6001"),P.a.createElement(Q,{key:1},"\u6b63\u5e38"),P.a.createElement(Q,{key:2},"\u5df2\u7981\u7528")))),P.a.createElement(I["a"].Item,{style:{display:"inline-block"}},t("title")(P.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5185\u5bb9",style:{width:200}}))),P.a.createElement(I["a"].Item,{style:{display:"inline-block"}},P.a.createElement(B["a"],{htmlType:"submit"},"\u641c\u7d22")),P.a.createElement(I["a"].Item,{style:{marginRight:10}},P.a.createElement("a",{style:{fontSize:12},onClick:this.toggle},"\u9ad8\u7ea7\u641c\u7d22 ",P.a.createElement(s["a"],{type:this.state.expand?"up":"down"})))))))),P.a.createElement("div",{className:V.a.tableAdvancedSearchBar,style:{display:this.state.expand?"block":"none"}},P.a.createElement(o["a"],null,P.a.createElement(d["a"],{span:24},P.a.createElement(I["a"],{layout:"inline",onSubmit:this.handleSearch},P.a.createElement(I["a"].Item,{label:"\u6807\u9898",style:{display:"inline-block"}},t("title")(P.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u5185\u5bb9",style:{width:200}}))),P.a.createElement(I["a"].Item,{label:"\u4f5c\u8005",style:{display:"inline-block"}},t("author")(P.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u4f5c\u8005",style:{width:160}}))),P.a.createElement(I["a"].Item,{label:"\u5206\u7c7b",style:{marginBottom:0}},t("category_id",{initialValue:"0"})(P.a.createElement(D["a"],{style:{width:160},placeholder:"\u9009\u62e9\u5206\u7c7b"},P.a.createElement(Q,{key:0},"\u6240\u6709\u5206\u7c7b"),0!==this.state.data.categorys.length?this.state.data.categorys.map(function(e){return P.a.createElement(Q,{key:e.id},e.title)}):console.log("select data null")))),P.a.createElement(I["a"].Item,{label:"\u53d1\u5e03\u65e5\u671f"},t("dateRange")(P.a.createElement(F,null))),P.a.createElement(I["a"].Item,{label:"\u72b6\u6001",style:{marginBottom:0}},t("status",{initialValue:"0"})(P.a.createElement(D["a"],{style:{width:160},placeholder:"\u6240\u9009\u72b6\u6001"},P.a.createElement(Q,{key:0},"\u6240\u6709\u72b6\u6001"),P.a.createElement(Q,{key:1},"\u6b63\u5e38"),P.a.createElement(Q,{key:2},"\u5df2\u7981\u7528")))),P.a.createElement(I["a"].Item,null,P.a.createElement(B["a"],{type:"primary",icon:"search",htmlType:"submit"},"\u9ad8\u7ea7\u641c\u7d22"),"\xa0",P.a.createElement(B["a"],{onClick:this.handleResetSearch},"\u91cd\u7f6e")))))),P.a.createElement("div",{className:V.a.tableData},P.a.createElement(c["a"],{rowKey:function(e){return e.id},rowSelection:n,columns:l,dataSource:this.state.data.lists,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange}))))}}]),t}(j["PureComponent"]),r=i))||r)||r);t["default"]=L},yiPm:function(e,t,a){e.exports={container:"antd-pro-pages-article-index-container",tableHeader:"antd-pro-pages-article-index-tableHeader",tableHeaderTitle:"antd-pro-pages-article-index-tableHeaderTitle",tableToolBar:"antd-pro-pages-article-index-tableToolBar",tableAdvancedSearchBar:"antd-pro-pages-article-index-tableAdvancedSearchBar",floatLeft:"antd-pro-pages-article-index-floatLeft",floatRight:"antd-pro-pages-article-index-floatRight",danger:"antd-pro-pages-article-index-danger",success:"antd-pro-pages-article-index-success",warning:"antd-pro-pages-article-index-warning",info:"antd-pro-pages-article-index-info",dark:"antd-pro-pages-article-index-dark"}}}]);