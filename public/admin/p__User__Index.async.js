(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"8ZrE":function(e,a,t){e.exports={container:"antd-pro-pages-user-index-container",tableHeader:"antd-pro-pages-user-index-tableHeader",tableHeaderTitle:"antd-pro-pages-user-index-tableHeaderTitle",tableToolBar:"antd-pro-pages-user-index-tableToolBar",tableAdvancedSearchBar:"antd-pro-pages-user-index-tableAdvancedSearchBar",floatLeft:"antd-pro-pages-user-index-floatLeft",floatRight:"antd-pro-pages-user-index-floatRight",danger:"antd-pro-pages-user-index-danger",success:"antd-pro-pages-user-index-success",warning:"antd-pro-pages-user-index-warning",info:"antd-pro-pages-user-index-info",dark:"antd-pro-pages-user-index-dark"}},qMfI:function(e,a,t){"use strict";t.r(a);t("g9YV");var n,l,r,i,c=t("wCAj"),s=(t("14J3"),t("BMrR")),o=(t("Pwec"),t("CtXQ")),d=(t("jCWc"),t("kPKH")),m=(t("P2fV"),t("NJEC")),p=(t("/zsF"),t("PArb")),u=(t("+BJd"),t("mr32")),h=t("p0pE"),y=t.n(h),f=t("2Taf"),g=t.n(f),E=t("vZ4D"),k=t.n(E),v=t("l4Ni"),b=t.n(v),S=t("ujKo"),x=t.n(S),C=t("rlhR"),w=t.n(C),N=t("MhPg"),R=t.n(N),I=(t("y8nQ"),t("Vl3Y")),D=(t("OaEy"),t("2fM7")),M=(t("2qtc"),t("kLXV")),j=(t("+L6B"),t("2/Rp")),K=(t("iQDF"),t("+eQT")),T=(t("5NDa"),t("5rEg")),B=t("q1tI"),A=t.n(B),Y=t("MuoO"),P=t("8ZrE"),H=t.n(P),O=t("zHco"),V=t("7DNP"),F=t("Qyje"),q=(T["a"].Search,K["a"].RangePicker),z=j["a"].Group,J=M["a"].confirm,Q=D["a"].Option,_=(n=Object(Y["connect"])(function(e){var a=e.model;return{model:a}}),l=I["a"].create(),n(r=l((i=function(e){function a(){var e,t;g()(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=b()(this,(e=x()(a)).call.apply(e,[this].concat(l))),t.modelName="user",t.state={msg:"",url:"",data:{categorys:[]},status:"",pagination:{},loading:!1,previewVisible:!1,previewImage:"",expand:!1,selectedRowKeys:[]},t.handleCreate=function(){var e=t.props.dispatch;e(V["routerRedux"].push({pathname:"/"+t.modelName+"/create"}))},t.handleRecharge=function(e){var a=t.props.dispatch;a(V["routerRedux"].push({pathname:"/"+t.modelName+"/recharge",query:{id:e}}))},t.handleEdit=function(e){var a=t.props.dispatch;a(V["routerRedux"].push({pathname:"/"+t.modelName+"/edit",query:{id:e}}))},t.handleDestroy=function(e){var a=t.props.dispatch;a({type:"model/destroy",payload:{modelName:t.modelName,id:e}}).then(function(){"success"===t.state.status&&(t.state.data.lists=t.state.data.lists.filter(function(a){return a.id!==e}),t.setState(y()({},t.state.data)))})},t.handleStatusChange=function(e,a){t.setState({loading:!0});var n=t.props.dispatch;n({type:"model/changeStatus",payload:{modelName:t.modelName,id:e,status:a}}).then(function(){var e=t.props.dispatch;e({type:"model/index",payload:y()({modelName:t.modelName},t.state.pagination,{search:t.state.search}),callback:function(e){e&&t.setState(y()({},e,{loading:!1}))}})})},t.handleMultiDestroy=function(){var e=w()(t);J({title:"\u786e\u5b9a\u5220\u9664\u8fd9\u4e9b\u6570\u636e\u5417\uff1f",content:"\u5220\u9664\u540e\u6570\u636e\u4e0d\u53ef\u6062\u590d\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\uff01",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",centered:!0,onOk:function(){var a=e.state.selectedRowKeys,t=e.props.dispatch;t({type:"model/destroy",payload:{modelName:e.modelName,id:a}}).then(function(){"success"===e.state.status&&(a.map(function(a){e.state.data.lists=e.state.data.lists.filter(function(e){return e.id!==a})}),e.setState(y()({},e.state.data,{selectedRowKeys:[]})))})},onCancel:function(){}})},t.handleMultiStatusChange=function(e){t.setState({loading:!0});var a=t.state.selectedRowKeys,n=t.props.dispatch;n({type:"model/changeStatus",payload:{modelName:t.modelName,id:a,status:e}}).then(function(){var e=t.props.dispatch;e({type:"model/index",payload:y()({modelName:t.modelName},t.state.pagination,{search:t.state.search}),callback:function(e){e&&t.setState(y()({},e,{loading:!1}))}})})},t.handleTableChange=function(e,a,n){t.setState({loading:!0});var l=t.props.dispatch;l({type:"model/index",payload:y()({modelName:t.modelName,pageSize:e.pageSize,current:e.current,sortField:n.field,sortOrder:n.order},a,{search:t.state.search}),callback:function(e){e&&t.setState(y()({},e,{loading:!1,selectedRowKeys:[]}))}})},t.toggle=function(){var e=t.state.expand;t.setState({expand:!e})},t.handleSelectAll=function(){var e=t.state.data.lists.map(function(e){return e.id});console.log(e),t.setState({selectedRowKeys:e})},t.handleCancelSelectAll=function(){t.setState({selectedRowKeys:[]})},t.onSelectChange=function(e){console.log("selectedRowKeys changed: ",e),t.setState({selectedRowKeys:e})},t.handleSearch=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){if(a.dateRange&&a.dateRange[0]&&a.dateRange[1]){var n=a.dateRange[0].format("YYYY-MM-DD"),l=a.dateRange[1].format("YYYY-MM-DD");a.dateRange=[],a.dateRange=[n,l]}if(!e){var r=t.props.dispatch;r({type:"model/index",payload:y()({modelName:t.modelName},t.state.pagination,{search:a}),callback:function(e){e&&t.setState(y()({},e,{loading:!1}))}})}})},t.handleResetSearch=function(){t.props.form.resetFields()},t}return R()(a,e),k()(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.dispatch({type:"model/index",payload:{modelName:this.modelName},callback:function(a){a&&e.setState(y()({},a,{loading:!1}))}})}},{key:"render",value:function(){var e=this,a=this.props.form.getFieldDecorator,t=this.state.selectedRowKeys,n={selectedRowKeys:t,onChange:this.onSelectChange,getCheckboxProps:function(e){return{name:e.name}},fixed:"left"},l=[{title:"\u5934\u50cf",dataIndex:"cover_path",key:"cover_path",render:function(a,t){return A.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(t.id)}},A.a.createElement("img",{src:a,width:40,height:40}))}},{title:"\u7528\u6237\u540d",dataIndex:"name",key:"name",render:function(a,t){return A.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(t.id)}},a)}},{title:"\u6635\u79f0",dataIndex:"nickname",key:"nickname"},{title:"\u624b\u673a\u53f7",dataIndex:"phone",key:"phone"},{title:"\u90ae\u7bb1",dataIndex:"email",key:"email"},{title:"\u72b6\u6001",key:"status",dataIndex:"status",render:function(e,a){return A.a.createElement("span",null,A.a.createElement(u["a"],{color:"\u5df2\u7981\u7528"===e?"red":"blue"},e))}},{title:"\u6ce8\u518c\u65f6\u95f4",dataIndex:"created_at",key:"created_at"},{title:"\u64cd\u4f5c",key:"action",fixed:"right",width:260,render:function(a,t){return A.a.createElement("span",null,A.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleRecharge(t.id)}},"\u5145\u503c"),A.a.createElement(p["a"],{type:"vertical"}),A.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleStatusChange(t.id,"\u6b63\u5e38"==t.status?2:1)}},"\u6b63\u5e38"==t.status?"\u7981\u7528":"\u5ba1\u6838"),A.a.createElement(p["a"],{type:"vertical"}),A.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleEdit(t.id)}},"\u7f16\u8f91"),A.a.createElement(p["a"],{type:"vertical"}),A.a.createElement(m["a"],{title:"\u786e\u5b9a\u5220\u9664\u5417\uff1f",onConfirm:function(){return e.handleDestroy(t.id)}},A.a.createElement("a",{href:"javascript:;"},"\u5220\u9664")))}}];return A.a.createElement(O["a"],null,A.a.createElement("div",{className:H.a.container},A.a.createElement("div",{className:H.a.tableHeader},A.a.createElement(s["a"],{type:"flex",justify:"start"},A.a.createElement(d["a"],{span:12},A.a.createElement("h5",{className:H.a.tableHeaderTitle},"\u4f1a\u5458\u5217\u8868")),A.a.createElement(d["a"],{span:12},A.a.createElement("div",{className:H.a.floatRight},A.a.createElement(j["a"],{type:"primary",onClick:function(){return e.handleCreate()}},A.a.createElement(o["a"],{type:"plus-circle"}),"\u65b0\u589e\u4f1a\u5458"),"\xa0",A.a.createElement("a",{href:"/api/admin/"+this.modelName+"/export?"+Object(F["stringify"])({search:this.state.search}),target:"_blank"},A.a.createElement(j["a"],null,A.a.createElement(o["a"],{type:"export"}),"\u5bfc\u51fa\u6570\u636e")))))),A.a.createElement(p["a"],{style:{marginBottom:10}}),A.a.createElement("div",{className:H.a.tableToolBar},A.a.createElement(s["a"],{type:"flex",justify:"start"},A.a.createElement(d["a"],{span:8},A.a.createElement(z,null,A.a.createElement(j["a"],{onClick:function(){return e.handleSelectAll()}},"\u5168\u9009"),A.a.createElement(j["a"],{onClick:function(){return e.handleCancelSelectAll()}},"\u53d6\u6d88")),A.a.createElement(p["a"],{type:"vertical"}),A.a.createElement(j["a"],{onClick:function(){return e.handleMultiStatusChange(1)}},"\u5ba1\u6838"),"\xa0",A.a.createElement(j["a"],{onClick:function(){return e.handleMultiStatusChange(2)}},"\u7981\u7528"),"\xa0",A.a.createElement(j["a"],{onClick:function(){return e.handleMultiDestroy()},type:"danger"},"\u5220\u9664")),A.a.createElement(d["a"],{span:16},A.a.createElement("div",{className:H.a.floatRight},A.a.createElement(I["a"],{layout:"inline",onSubmit:this.handleSearch},A.a.createElement(I["a"].Item,{style:{marginBottom:0}},a("status",{initialValue:"0"})(A.a.createElement(D["a"],{style:{width:160},placeholder:"\u6240\u9009\u72b6\u6001"},A.a.createElement(Q,{key:0},"\u6240\u6709\u72b6\u6001"),A.a.createElement(Q,{key:1},"\u6b63\u5e38"),A.a.createElement(Q,{key:2},"\u5df2\u7981\u7528")))),A.a.createElement(I["a"].Item,{style:{display:"inline-block"}},a("username")(A.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u7528\u6237",style:{width:200}}))),A.a.createElement(I["a"].Item,{style:{display:"inline-block"}},A.a.createElement(j["a"],{htmlType:"submit"},"\u641c\u7d22")),A.a.createElement(I["a"].Item,{style:{marginRight:10}},A.a.createElement("a",{style:{fontSize:12},onClick:this.toggle},"\u9ad8\u7ea7\u641c\u7d22 ",A.a.createElement(o["a"],{type:this.state.expand?"up":"down"})))))))),A.a.createElement("div",{className:H.a.tableAdvancedSearchBar,style:{display:this.state.expand?"block":"none"}},A.a.createElement(s["a"],null,A.a.createElement(d["a"],{span:24},A.a.createElement(I["a"],{layout:"inline",onSubmit:this.handleSearch},A.a.createElement(I["a"].Item,{label:"\u7528\u6237\u540d",style:{display:"inline-block"}},a("username")(A.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u7528\u6237\u540d",style:{width:200}}))),A.a.createElement(I["a"].Item,{label:"\u6635\u79f0",style:{display:"inline-block"}},a("nickname")(A.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0",style:{width:160}}))),A.a.createElement(I["a"].Item,{label:"\u624b\u673a\u53f7",style:{display:"inline-block"}},a("phone")(A.a.createElement(T["a"],{placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0",style:{width:160}}))),A.a.createElement(I["a"].Item,{label:"\u6ce8\u518c\u65e5\u671f"},a("dateRange")(A.a.createElement(q,null))),A.a.createElement(I["a"].Item,{label:"\u72b6\u6001",style:{marginBottom:0}},a("status",{initialValue:"0"})(A.a.createElement(D["a"],{style:{width:160},placeholder:"\u6240\u9009\u72b6\u6001"},A.a.createElement(Q,{key:0},"\u6240\u6709\u72b6\u6001"),A.a.createElement(Q,{key:1},"\u6b63\u5e38"),A.a.createElement(Q,{key:2},"\u5df2\u7981\u7528")))),A.a.createElement(I["a"].Item,null,A.a.createElement(j["a"],{type:"primary",icon:"search",htmlType:"submit"},"\u9ad8\u7ea7\u641c\u7d22"),"\xa0",A.a.createElement(j["a"],{onClick:this.handleResetSearch},"\u91cd\u7f6e")))))),A.a.createElement("div",{className:H.a.tableData},A.a.createElement(c["a"],{rowKey:function(e){return e.id},rowSelection:n,columns:l,dataSource:this.state.data.lists,pagination:this.state.pagination,loading:this.state.loading,onChange:this.handleTableChange}))))}}]),a}(B["PureComponent"]),r=i))||r)||r);a["default"]=_}}]);