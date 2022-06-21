(self["webpackChunkvue_admin"]=self["webpackChunkvue_admin"]||[]).push([[35],{9035:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 套件管理")]),i("el-breadcrumb-item",[t._v("套件列表")])],1)],1),i("div",{staticClass:"container"},[i("div",{staticClass:"handle-box"},[i("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"el-icon-delete"},on:{click:t.delAll}},[t._v("批量删除")]),i("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"输入筛选关键词"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),i("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,border:"",stripe:""},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),i("el-table-column",{attrs:{type:"index",label:"序号",width:"55",align:"center"}}),i("el-table-column",{attrs:{prop:"name",label:"套件名称",width:"250"}}),i("el-table-column",{attrs:{prop:"project",label:"所属项目",width:"250"}}),i("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"",align:"center"}}),i("el-table-column",{attrs:{prop:"update_time",label:"更新时间",sortable:"",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(i){return t.handleRun(e.$index,e.row)}}},[t._v("运行")]),i("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(i){return t.linkTo(e.row.id)}}},[t._v("编辑")]),i("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{background:"","page-sizes":[4,5,8,10,20],layout:"total, sizes, prev, pager, next, jumper",total:t.total_nums,"page-size":t.page_size},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1),i("el-dialog",{attrs:{title:"编辑套件",visible:t.editVisible,width:"30%",center:""},on:{"update:visible":function(e){t.editVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"套件名称"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"测试人员"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form.tester,callback:function(e){t.$set(t.form,"tester",e)},expression:"form.tester"}})],1),i("el-form-item",{attrs:{label:"所属项目"}},[i("el-input",{attrs:{disabled:""},model:{value:t.form.project,callback:function(e){t.$set(t.form,"project",e)},expression:"form.project"}})],1),i("el-form-item",{attrs:{label:"简要描述"}},[i("el-input",{attrs:{clearable:""},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),i("el-dialog",{attrs:{title:"删除套件",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[i("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),i("el-dialog",{attrs:{title:"运行套件",visible:t.runVisible,width:"30%",center:""},on:{"update:visible":function(e){t.runVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"运行环境"}},[i("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.env_id,callback:function(e){t.env_id=e},expression:"env_id"}},t._l(t.envs_id_names,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.runVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirmRun}},[t._v("运 行")])],1)],1)],1)},a=[],l=i(9726),r=i(2552),o={name:"basetable",data:function(){return{tableData:[],cur_page:1,page_size:10,total_nums:1,multipleSelection:[],select_word:"",del_list:[],editVisible:!1,delVisible:!1,runVisible:!1,form:{},idx:-1,id:-1,env_id:"",envs_id_names:[]}},created:function(){this.getData(),this.getEnvsIdNames()},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},handleSizeChange:function(t){this.page_size=t,this.getData()},getData:function(){var t=this;(0,r["in"])({page:this.cur_page,size:this.page_size}).then((function(e){t.tableData=e.data.results,t.cur_page=e.data.current_page_num||1,t.total_nums=e.data.count||1}))},handleEdit:function(t,e){this.idx=t,this.id=e.id,this.form=e,this.editVisible=!0},handleRun:function(t,e){this.idx=t,this.id=e.id,this.form=e,this.runVisible=!0},handleDelete:function(t,e){this.idx=t,this.id=e.id,this.delVisible=!0},delAll:function(){var t=this;(0,r.TR)({idlist:this.del_list}).then((function(e){t.$message.success("删除成功"),t.tableData=e.data.results})).catch((function(e){t.$message.error("服务器错误")}))},handleSelectionChange:function(t){for(var e=t,i=[],n=0;n<e.length;n++)i.push(e[n]["id"]);this.del_list=i},deleteRow:function(){var t=this;(0,r.kq)(this.id).then((function(e){t.$message.success("删除成功"),t.delVisible=!1,t.tableData=e.data.results,t.cur_page=e.data.current_page_num||1,t.total_nums=e.data.count||1})).catch((function(e){t.$message.error("服务器错误")}))},getEnvsIdNames:function(){var t=this;(0,r.Tg)().then((function(e){t.envs_id_names=e.data})).catch((function(e){t.$message.error("服务器错误")}))},confirmRun:function(){var t=this;(0,r.run_by_testsuite)(this.id,this.env_id).then((function(e){t.$router.push({path:"/reports_view/".concat(e.data.id)})})).catch((function(e){"object"===(0,l.Z)(e)&&e.hasOwnProperty("msg")?t.$message.error(e.msg):t.$message.error("服务器错误")}))},linkTo:function(t){this.$router.push({path:"/testsuites_edit/".concat(t)})},search:function(){var t=this;(0,r.W7)({name:this.select_word}).then((function(e){t.tableData=e.data.results}))}}},s=o,c=i(1001),u=(0,c.Z)(s,n,a,!1,null,"7bb37fa2",null),d=u.exports},8783:function(t,e,i){"use strict";var n=i(8710).charAt,a=i(1340),l=i(9909),r=i(654),o="String Iterator",s=l.set,c=l.getterFor(o);r(String,"String",(function(t){s(this,{type:o,string:a(t),index:0})}),(function(){var t,e=c(this),i=e.string,a=e.index;return a>=i.length?{value:void 0,done:!0}:(t=n(i,a),e.index+=t.length,{value:t,done:!1})}))},1817:function(t,e,i){"use strict";var n=i(2109),a=i(9781),l=i(7854),r=i(1702),o=i(2597),s=i(614),c=i(7976),u=i(1340),d=i(3070).f,f=i(9920),b=l.Symbol,m=b&&b.prototype;if(a&&s(b)&&(!("description"in m)||void 0!==b().description)){var p={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=c(m,this)?new b(t):void 0===t?b():b(t);return""===t&&(p[e]=!0),e};f(h,b),h.prototype=m,m.constructor=h;var v="Symbol(test)"==String(b("test")),g=r(m.toString),_=r(m.valueOf),y=/^Symbol\((.*)\)[^)]+$/,k=r("".replace),x=r("".slice);d(m,"description",{configurable:!0,get:function(){var t=_(this),e=g(t);if(o(p,t))return"";var i=v?x(e,7,-1):k(e,y,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:h})}},2165:function(t,e,i){var n=i(7235);n("iterator")},3948:function(t,e,i){var n=i(7854),a=i(8324),l=i(8509),r=i(6992),o=i(8880),s=i(5112),c=s("iterator"),u=s("toStringTag"),d=r.values,f=function(t,e){if(t){if(t[c]!==d)try{o(t,c,d)}catch(n){t[c]=d}if(t[u]||o(t,u,e),a[e])for(var i in r)if(t[i]!==r[i])try{o(t,i,r[i])}catch(n){t[i]=r[i]}}};for(var b in a)f(n[b]&&n[b].prototype,b);f(l,"DOMTokenList")},9726:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});i(2526),i(1817),i(1539),i(2165),i(8783),i(3948);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}}}]);
//# sourceMappingURL=35-legacy.c4c00a31.js.map