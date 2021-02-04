"use strict";

module.exports = {
  getdatetime: function getdatetime(dt) {
    var res = "";
    res += module.exports.formatdigits(dt.getFullYear());
    res += "-";
    res += module.exports.formatdigits(dt.getMonth() + 1);
    res += "-";
    res += module.exports.formatdigits(dt.getDate());
    res += " ";
    res += module.exports.formatdigits(dt.getHours());
    res += ":";
    res += module.exports.formatdigits(dt.getMinutes());
    res += ":";
    res += module.exports.formatdigits(dt.getSeconds());
    return res;
  },
  getdate: function getdate(dt) {
    var res = "";
    res += module.exports.formatdigits(dt.getFullYear());
    res += "-";
    res += module.exports.formatdigits(dt.getMonth() + 1);
    res += "-";
    res += module.exports.formatdigits(dt.getDate());
    return res;
  },
  formatdigits: function formatdigits(val) {
    val = val.toString();
    return val.length == 1 ? "0" + val : val;
  }
};