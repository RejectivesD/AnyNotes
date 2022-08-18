"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const title = common_vendor.ref("Hello");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value)
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u524D\u7AEF\u9879\u76EE/\u968F\u8BB0/uniapp/AnyNotes/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
