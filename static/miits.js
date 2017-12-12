window.onload = function() {
    var f = new Object();
    var b = window.location.toString();
    var e = b.indexOf("?");
    if(e > 0) {
        var d = b.substring(e + 1, b.length);
        if(d != null && d != "") {
            var c = d.indexOf("&");
            if(c > 0) {
                f.co = d.substring(0, c);
                f.cl = d.substring(c + 1);
            }
        }
    }
    var a = {
        name: "吴元全",
        companyname: "中科天宇软件有限公司",
        certlevel: "项目经理",
        certificateno: "311121342",
        avaidtime: "2016-12-26",
        approvetime: "2020-12-25",
        areacn: "北京市",
        remarks: "已登记"
    };
    document.getElementById("nae").innerHTML = a.name;
    document.getElementById("cmn").innerHTML = a.companyname;
    document.getElementById("cll").innerHTML = a.certlevel;
    document.getElementById("cto").innerHTML = a.certificateno;
    document.getElementById("adt").innerHTML = a.avaidtime;
    document.getElementById("apt").innerHTML = a.approvetime;
    document.getElementById("arc").innerHTML = a.areacn;
    document.getElementById("rmk").innerHTML = a.remarks;
//  var a = leapclient.request("getPhoneData", {
//      par: f
//  }, null, null, "web", "web");
//  if(a != null) {
//      document.getElementById("nae").innerHTML = a.name;
//      document.getElementById("cmn").innerHTML = a.companyname;
//      document.getElementById("cll").innerHTML = a.certlevel;
//      document.getElementById("cto").innerHTML = a.certificateno;
//      document.getElementById("adt").innerHTML = a.avaidtime;
//      document.getElementById("apt").innerHTML = a.approvetime;
//      document.getElementById("arc").innerHTML = a.areacn;
//      document.getElementById("rmk").innerHTML = a.remarks;
//  }
};
