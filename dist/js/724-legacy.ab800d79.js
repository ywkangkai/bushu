"use strict";(self["webpackChunkvue_admin"]=self["webpackChunkvue_admin"]||[]).push([[724],{7724:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table"},[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 用例管理")]),e("el-breadcrumb-item",[t._v("用例列表")])],1)],1),e("div",{staticClass:"container"},[e("div",{staticClass:"handle-box"},[e("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.delAll}},[t._v("批量删除")]),e("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入筛选关键词"},model:{value:t.select_word,callback:function(n){t.select_word=n},expression:"select_word"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),e("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),e("el-table-column",{attrs:{prop:"name",label:"用例名称",width:"250"}}),e("el-table-column",{attrs:{prop:"interface.project",label:"所属项目",width:"250"}}),e("el-table-column",{attrs:{prop:"interface.name",label:"所属接口",width:"250"}}),e("el-table-column",{attrs:{prop:"author",label:"测试人员",width:"100",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.handleRun(n.$index,n.row)}}},[t._v("运行")]),e("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.linkTo(n.row.id)}}},[t._v("编辑")]),e("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(n.$index,n.row)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1),e("el-dialog",{attrs:{title:"删除接口",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(n){t.delVisible=n}}},[e("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(n){t.delVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),e("el-dialog",{attrs:{title:"运行接口",visible:t.runVisible,width:"30%",center:""},on:{"update:visible":function(n){t.runVisible=n}}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"运行环境"}},[e("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.env_id,callback:function(n){t.env_id=n},expression:"env_id"}},t._l(t.envs_id_names,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(n){t.runVisible=!1}}},[t._v("取 消")]),e("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:t.openFullScreen1}},[t._v("运行")])],1)],1)],1)},c=[],i=e(6198),o=(e(5666),e(2552)),u={name:"basetable",data:function(){return{tableData:[],cur_page:1,page_size:10,total_nums:1,multipleSelection:[],select_word:"",del_list:[],editVisible:!1,delVisible:!1,runVisible:!1,form:{},idx:-1,id:-1,env_id:"",envs_id_names:[],fullscreenLoading:!1}},created:function(){this.getData(),this.getEnvsIdNames()},methods:{open:function(t){var n=this;this.$confirm("用例执行完成，是否前往查看报告?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.$router.push({path:"/reports_view/".concat(t.data.id)})})).catch((function(){}))},openFullScreen1:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!==t.env_id){n.next=4;break}t.$message.error("请选择运行环境"),n.next=10;break;case 4:return t.runVisible=!1,t.fullscreenLoading=!0,n.next=8,(0,o.s2)({iid:t.id,env_id:t.env_id});case 8:e=n.sent,e.status,t.fullscreenLoading=!1,t.open(e);case 10:case"end":return n.stop()}}),n)})))()},handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;(0,o.KL)({page:this.cur_page,size:this.page_size}).then((function(n){t.tableData=n.data.results,t.cur_page=n.data.current_page_num||1,t.total_nums=n.data.count||1}))},search:function(){var t=this;(0,o.vi)({name:this.select_word}).then((function(n){t.tableData=n.data.results}))},formatter:function(t,n){return t.address},filterTag:function(t,n){return n.tag===t},handleEdit:function(t,n){this.idx=t,this.id=n.id,this.form=n,this.editVisible=!0},handleRun:function(t,n){this.idx=t,this.id=n.id,this.form=n,this.runVisible=!0},handleDelete:function(t,n){this.idx=t,this.id=n.id,this.delVisible=!0},delAll:function(){var t=this;(0,o.NM)({idlist:this.del_list}).then((function(n){t.$message.success("删除成功"),t.tableData=n.data.results})).catch((function(n){t.$message.error("服务器错误")}))},handleSelectionChange:function(t){for(var n=t,e=[],r=0;r<n.length;r++)e.push(n[r]["id"]);this.del_list=e},deleteRow:function(){var t=this;(0,o.ah)(this.id).then((function(n){t.$message.success("删除成功"),t.delVisible=!1,t.tableData=n.data.results,t.cur_page=n.data.current_page_num||1,t.total_nums=n.data.count||1})).catch((function(n){t.$message.error("服务器错误")}))},getEnvsIdNames:function(){var t=this;(0,o.Tg)().then((function(n){t.envs_id_names=n.data})).catch((function(n){t.$message.error("服务器错误")}))},linkTo:function(t){this.$router.push({path:"/testcases_edit/".concat(t)})}}},a=u,s=e(1001),l=(0,s.Z)(a,r,c,!1,null,"332c7add",null),f=l.exports},2552:function(t,n,e){e.d(n,{$8:function(){return nt},$q:function(){return A},AH:function(){return ut},AZ:function(){return _},B:function(){return f},Bx:function(){return Z},Cs:function(){return U},DC:function(){return R},Dr:function(){return lt},FP:function(){return m},G3:function(){return X},GL:function(){return ft},GW:function(){return kt},IG:function(){return h},KL:function(){return et},Kh:function(){return vt},Kq:function(){return _t},L$:function(){return l},LO:function(){return x},Lu:function(){return Y},NM:function(){return it},NV:function(){return a},NW:function(){return $},OM:function(){return tt},PT:function(){return y},QG:function(){return Ct},RB:function(){return L},RD:function(){return xt},RQ:function(){return V},Sp:function(){return mt},TR:function(){return J},Tg:function(){return at},Tj:function(){return ht},Vx:function(){return q},W7:function(){return I},WD:function(){return b},XC:function(){return Q},Z4:function(){return E},ZH:function(){return G},Zf:function(){return k},_X:function(){return p},ah:function(){return ct},aj:function(){return w},ay:function(){return T},cQ:function(){return yt},cu:function(){return pt},d9:function(){return o},ei:function(){return ot},iO:function(){return C},ie:function(){return j},in:function(){return F},jJ:function(){return g},jh:function(){return bt},kJ:function(){return dt},kq:function(){return P},lO:function(){return wt},n:function(){return d},nL:function(){return D},nk:function(){return N},nq:function(){return v},ny:function(){return W},o:function(){return S},pU:function(){return M},pW:function(){return gt},s2:function(){return st},tK:function(){return z},tc:function(){return zt},th:function(){return s},vi:function(){return rt},vj:function(){return K},x4:function(){return u},xQ:function(){return B},yr:function(){return O},z:function(){return H}});var r=e(4206),c=e.n(r),i="http://kk.uoyo.net:8080",o=function(t){return c().get("".concat(i,"/project/list/?page=")+t.page+"&size="+t.size,t)},u=function(t){return c().post("".concat(i,"/project/detail/"),t)},a=function(t,n){return c().put("".concat(i,"/project/edit/")+t+"/",n)},s=function(t){return c()["delete"]("".concat(i,"/project/delete/")+t+"/")},l=function(t){return c().post("".concat(i,"/project/deleteall/"),t)},f=function(t){return c().post("".concat(i,"/project/add/"),t)},d=function(){return c().get("".concat(i,"/interface/project/name"))},p=function(){return c().get("".concat(i,"/project/get/env/"))},g=function(t){return c().post("".concat(i,"/project/run/"),t)},h=function(t){return c().post("".concat(i,"/interface/add/"),t)},m=function(t){return c().get("".concat(i,"/interface/list/?page=")+t.page+"&size="+t.size,t)},b=function(t,n){return c().put("".concat(i,"/interface/edit/")+t+"/",n)},v=function(t){return c()["delete"]("".concat(i,"/interface/delete/")+t+"/")},_=function(t){return c().post("".concat(i,"/interface/deleteall/"),t)},k=function(t){return c().post("".concat(i,"/interface/detail/"),t)},y=function(){return c().get("".concat(i,"/interface/env/"))},z=function(t){return c().post("".concat(i,"/interface/run/"),t)},w=function(t){return c().get("".concat(i,"/env/list/?page=")+t.page+"&size="+t.size,t)},x=function(t,n){return c().put("".concat(i,"/env/edit/")+t+"/",n)},C=function(t){return c()["delete"]("".concat(i,"/env/delete/")+t+"/")},j=function(t){return c().post("".concat(i,"/env/add/"),t)},D=function(t){return c().post("".concat(i,"/env/detail/"),t)},V=function(t){return c().post("".concat(i,"/env/deleteall/"),t)},$=function(t){return c().get("".concat(i,"/debugtalk/list/?page=")+t.page+"&size="+t.size,t)},L=function(t){return c().post("".concat(i,"/debugtalk/detail/"),t)},T=function(t){return c().get("".concat(i,"/debugtalk/code/")+t+"/")},R=function(t){return c().put("".concat(i,"/debugtalk/update/"),t)},S=function(){return c().get("".concat(i,"/config/project/name/"))},N=function(t){return c().post("".concat(i,"/config/interface/name/"),t)},Z=function(t){return c().post("".concat(i,"/config/save/"),t)},B=function(t){return c().get("".concat(i,"/config/list/?page=")+t.page+"&size="+t.size,t)},G=function(t){return c().post("".concat(i,"/config/detail/"),t)},K=function(t){return c()["delete"]("".concat(i,"/config/delete/")+t+"/")},W=function(t){return c().post("".concat(i,"/config/deleteall/"),t)},q=function(t){return c().get("".concat(i,"/config/detail/")+t+"/")},A=function(t,n){return c().put("".concat(i,"/config/update/")+t+"/",n)},E=function(){return c().get("".concat(i,"/testsuite/project/name/"))},O=function(t){return c().post("".concat(i,"/testsuite/interface/name/"),t)},Q=function(t){return c().post("".concat(i,"/testsuite/add/"),t)},F=function(t){return c().get("".concat(i,"/testsuite/list/?page=")+t.page+"&size="+t.size,t)},I=function(t){return c().post("".concat(i,"/testsuite/detail/"),t)},M=function(t){return c().get("".concat(i,"/testsuite/detail/")+t+"/")},H=function(t,n){return c().put("".concat(i,"/testsuite/update/")+t+"/",n)},J=function(t){return c().post("".concat(i,"/testsuite/deleteall/"),t)},P=function(t){return c()["delete"]("".concat(i,"/testsuite/delete/")+t+"/")},X=function(){return c().get("".concat(i,"/testcase/project/name/"))},U=function(t){return c().post("".concat(i,"/testcase/interface/name/"),t)},Y=function(t){return c().post("".concat(i,"/testcase/configure/name/"),t)},tt=function(t){return c().post("".concat(i,"/testcase/name/"),t)},nt=function(t){return c().post("".concat(i,"/testcase/add/"),t)},et=function(t){return c().get("".concat(i,"/testcase/list/?page=")+t.page+"&size="+t.size)},rt=function(t){return c().post("".concat(i,"/testcase/detail/"),t)},ct=function(t){return c()["delete"]("".concat(i,"/testcase/delete/")+t+"/")},it=function(t){return c().post("".concat(i,"/testcase/deleteall/"),t)},ot=function(t){return c().get("".concat(i,"/testcase/get/detail/")+t+"/")},ut=function(t){return c().put("".concat(i,"/testcase/update/"),t)},at=function(){return c().get("".concat(i,"/testcase/get/env/"))},st=function(t){return c().post("".concat(i,"/testcase/run/"),t)},lt=function(t){return c().get("".concat(i,"/report/list/?page=")+t.page+"&size="+t.size)},ft=function(t){return c().get("".concat(i,"/report/view/")+t+"/")},dt=function(t){return c().post("".concat(i,"/report/download/")+t+"/")},pt=function(t){return c()["delete"]("".concat(i,"/report/delete/")+t+"/")},gt=function(t){return c().post("".concat(i,"/report/deleteall/"),t)},ht=function(t){return c().post("".concat(i,"/report/open/"),t)},mt=function(){return c().get("".concat(i,"/summary/data/"))},bt=function(t){return c().post("".concat(i,"/repository/add/"),t)},vt=function(t){return c().get("".concat(i,"/repository/list/?page=")+t.page+"&size="+t.size)},_t=function(t){return c().post("".concat(i,"/repository/detail/"),t)},kt=function(t){return c().put("".concat(i,"/repository/update/"),t)},yt=function(t){return c()["delete"]("".concat(i,"/repository/delete/")+t+"/")},zt=function(t){return c().post("".concat(i,"/repository/deleteall/"),t)},wt=function(t){return c().post("".concat(i,"/repository/search/"),t)},xt=function(t){return c().post("".concat(i,"/repository/git/"),t)},Ct=function(t){return c().post("".concat(i,"/repository/compile/"),t)}}}]);
//# sourceMappingURL=724-legacy.ab800d79.js.map