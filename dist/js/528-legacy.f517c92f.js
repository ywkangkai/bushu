"use strict";(self["webpackChunkvue_admin"]=self["webpackChunkvue_admin"]||[]).push([[528],{4528:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"table"},[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 内置函数")]),e("el-breadcrumb-item",[t._v("函数列表")])],1)],1),e("div",{staticClass:"container"},[e("div",{staticClass:"handle-box"},[e("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"按项目名称查询"},model:{value:t.select_word,callback:function(n){t.select_word=n},expression:"select_word"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),e("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:"",stripe:""}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),e("el-table-column",{attrs:{prop:"project",label:"项目名称"}}),e("el-table-column",{attrs:{prop:"name",label:"内置函数名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-link",{attrs:{icon:"el-icon-edit",type:"primary"},on:{click:function(e){return t.linkTo(n.row.id)}}},[t._v(t._s(n.row.name))])]}}])})],1),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1)])},c=[],u=e(6198),o=(e(5666),e(2552)),i={name:"basetable",data:function(){return{tableData:[],cur_page:1,page_size:10,total_nums:1,select_word:"",project_idx:-1,project_id:-1}},created:function(){this.getData()},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;(0,o.NW)({page:this.cur_page,size:this.page_size}).then((function(n){t.tableData=n.data.results,t.cur_page=n.data.current_page_num||1,t.total_nums=n.data.count||1}))},linkTo:function(t){this.$router.push({path:"/builtin_edit/".concat(t)})},search:function(){var t=this;return(0,u.Z)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.RB)({name:t.select_word});case 2:e=n.sent,t.tableData=e.data.results;case 4:case"end":return n.stop()}}),n)})))()}}},a=i,s=e(1001),f=(0,s.Z)(a,r,c,!1,null,"da1018b2",null),l=f.exports},2552:function(t,n,e){e.d(n,{$8:function(){return nt},$q:function(){return S},AH:function(){return it},AZ:function(){return _},B:function(){return l},Bx:function(){return q},Cs:function(){return U},DC:function(){return Z},Dr:function(){return ft},FP:function(){return m},G3:function(){return I},GL:function(){return lt},GW:function(){return zt},IG:function(){return h},KL:function(){return et},Kh:function(){return vt},Kq:function(){return _t},L$:function(){return f},LO:function(){return C},Lu:function(){return Y},NM:function(){return ut},NV:function(){return a},NW:function(){return T},OM:function(){return tt},PT:function(){return k},QG:function(){return wt},RB:function(){return L},RD:function(){return Ct},RQ:function(){return R},Sp:function(){return mt},TR:function(){return E},Tg:function(){return at},Tj:function(){return ht},Vx:function(){return Q},W7:function(){return P},WD:function(){return b},XC:function(){return J},Z4:function(){return A},ZH:function(){return K},Zf:function(){return z},_X:function(){return d},ah:function(){return ct},aj:function(){return y},ay:function(){return W},cQ:function(){return kt},cu:function(){return dt},d9:function(){return o},ei:function(){return ot},iO:function(){return w},ie:function(){return x},in:function(){return M},jJ:function(){return g},jh:function(){return bt},kJ:function(){return pt},kq:function(){return F},lO:function(){return yt},n:function(){return p},nL:function(){return D},nk:function(){return $},nq:function(){return v},ny:function(){return O},o:function(){return G},pU:function(){return V},pW:function(){return gt},s2:function(){return st},tK:function(){return j},tc:function(){return jt},th:function(){return s},vi:function(){return rt},vj:function(){return N},x4:function(){return i},xQ:function(){return B},yr:function(){return H},z:function(){return X}});var r=e(4206),c=e.n(r),u="http://kk.uoyo.net:8080",o=function(t){return c().get("".concat(u,"/project/list/?page=")+t.page+"&size="+t.size,t)},i=function(t){return c().post("".concat(u,"/project/detail/"),t)},a=function(t,n){return c().put("".concat(u,"/project/edit/")+t+"/",n)},s=function(t){return c()["delete"]("".concat(u,"/project/delete/")+t+"/")},f=function(t){return c().post("".concat(u,"/project/deleteall/"),t)},l=function(t){return c().post("".concat(u,"/project/add/"),t)},p=function(){return c().get("".concat(u,"/interface/project/name"))},d=function(){return c().get("".concat(u,"/project/get/env/"))},g=function(t){return c().post("".concat(u,"/project/run/"),t)},h=function(t){return c().post("".concat(u,"/interface/add/"),t)},m=function(t){return c().get("".concat(u,"/interface/list/?page=")+t.page+"&size="+t.size,t)},b=function(t,n){return c().put("".concat(u,"/interface/edit/")+t+"/",n)},v=function(t){return c()["delete"]("".concat(u,"/interface/delete/")+t+"/")},_=function(t){return c().post("".concat(u,"/interface/deleteall/"),t)},z=function(t){return c().post("".concat(u,"/interface/detail/"),t)},k=function(){return c().get("".concat(u,"/interface/env/"))},j=function(t){return c().post("".concat(u,"/interface/run/"),t)},y=function(t){return c().get("".concat(u,"/env/list/?page=")+t.page+"&size="+t.size,t)},C=function(t,n){return c().put("".concat(u,"/env/edit/")+t+"/",n)},w=function(t){return c()["delete"]("".concat(u,"/env/delete/")+t+"/")},x=function(t){return c().post("".concat(u,"/env/add/"),t)},D=function(t){return c().post("".concat(u,"/env/detail/"),t)},R=function(t){return c().post("".concat(u,"/env/deleteall/"),t)},T=function(t){return c().get("".concat(u,"/debugtalk/list/?page=")+t.page+"&size="+t.size,t)},L=function(t){return c().post("".concat(u,"/debugtalk/detail/"),t)},W=function(t){return c().get("".concat(u,"/debugtalk/code/")+t+"/")},Z=function(t){return c().put("".concat(u,"/debugtalk/update/"),t)},G=function(){return c().get("".concat(u,"/config/project/name/"))},$=function(t){return c().post("".concat(u,"/config/interface/name/"),t)},q=function(t){return c().post("".concat(u,"/config/save/"),t)},B=function(t){return c().get("".concat(u,"/config/list/?page=")+t.page+"&size="+t.size,t)},K=function(t){return c().post("".concat(u,"/config/detail/"),t)},N=function(t){return c()["delete"]("".concat(u,"/config/delete/")+t+"/")},O=function(t){return c().post("".concat(u,"/config/deleteall/"),t)},Q=function(t){return c().get("".concat(u,"/config/detail/")+t+"/")},S=function(t,n){return c().put("".concat(u,"/config/update/")+t+"/",n)},A=function(){return c().get("".concat(u,"/testsuite/project/name/"))},H=function(t){return c().post("".concat(u,"/testsuite/interface/name/"),t)},J=function(t){return c().post("".concat(u,"/testsuite/add/"),t)},M=function(t){return c().get("".concat(u,"/testsuite/list/?page=")+t.page+"&size="+t.size,t)},P=function(t){return c().post("".concat(u,"/testsuite/detail/"),t)},V=function(t){return c().get("".concat(u,"/testsuite/detail/")+t+"/")},X=function(t,n){return c().put("".concat(u,"/testsuite/update/")+t+"/",n)},E=function(t){return c().post("".concat(u,"/testsuite/deleteall/"),t)},F=function(t){return c()["delete"]("".concat(u,"/testsuite/delete/")+t+"/")},I=function(){return c().get("".concat(u,"/testcase/project/name/"))},U=function(t){return c().post("".concat(u,"/testcase/interface/name/"),t)},Y=function(t){return c().post("".concat(u,"/testcase/configure/name/"),t)},tt=function(t){return c().post("".concat(u,"/testcase/name/"),t)},nt=function(t){return c().post("".concat(u,"/testcase/add/"),t)},et=function(t){return c().get("".concat(u,"/testcase/list/?page=")+t.page+"&size="+t.size)},rt=function(t){return c().post("".concat(u,"/testcase/detail/"),t)},ct=function(t){return c()["delete"]("".concat(u,"/testcase/delete/")+t+"/")},ut=function(t){return c().post("".concat(u,"/testcase/deleteall/"),t)},ot=function(t){return c().get("".concat(u,"/testcase/get/detail/")+t+"/")},it=function(t){return c().put("".concat(u,"/testcase/update/"),t)},at=function(){return c().get("".concat(u,"/testcase/get/env/"))},st=function(t){return c().post("".concat(u,"/testcase/run/"),t)},ft=function(t){return c().get("".concat(u,"/report/list/?page=")+t.page+"&size="+t.size)},lt=function(t){return c().get("".concat(u,"/report/view/")+t+"/")},pt=function(t){return c().post("".concat(u,"/report/download/")+t+"/")},dt=function(t){return c()["delete"]("".concat(u,"/report/delete/")+t+"/")},gt=function(t){return c().post("".concat(u,"/report/deleteall/"),t)},ht=function(t){return c().post("".concat(u,"/report/open/"),t)},mt=function(){return c().get("".concat(u,"/summary/data/"))},bt=function(t){return c().post("".concat(u,"/repository/add/"),t)},vt=function(t){return c().get("".concat(u,"/repository/list/?page=")+t.page+"&size="+t.size)},_t=function(t){return c().post("".concat(u,"/repository/detail/"),t)},zt=function(t){return c().put("".concat(u,"/repository/update/"),t)},kt=function(t){return c()["delete"]("".concat(u,"/repository/delete/")+t+"/")},jt=function(t){return c().post("".concat(u,"/repository/deleteall/"),t)},yt=function(t){return c().post("".concat(u,"/repository/search/"),t)},Ct=function(t){return c().post("".concat(u,"/repository/git/"),t)},wt=function(t){return c().post("".concat(u,"/repository/compile/"),t)}}}]);
//# sourceMappingURL=528-legacy.f517c92f.js.map