window._bd_share_main.F.module("view/share_view",function(t,e,n){var a=t("base/tangram").T,i=t("base/class").Class,s=t("conf/const"),r=t("view/view_base"),o={btn:"bdsharebuttonbox",count:"bds_count"};e.View=i.create(function(t){var e=this,n=t.bdStyle||0,i="|16|24|32|".indexOf("|"+t.bdSize+"|")>-1?t.bdSize:16;e._buttonType=0,e.render=function(r){var c;c=t.tag||"",a("."+o.btn).each(function(t,r){c&&a(r).attr(s.CONFIG_TAG_ATTR)!=c||(e._entities.push(r),a(r).removeClass(function(t,e){var n=e.match(/bdshare-button-style\d*-\d*/g);if(n)return n.join(" ")}),a(r).addClass("bdshare-button-style"+n+"-"+i))}),e._entities,a("."+o.btn).each(function(t,e){a(e).children("a,span").each(function(t,e){var n=a(e).attr(s.CMD_ATTR);n&&window._bd_share_main.F.use("component/partners",function(t){var i=t.partners,s=i[n]?"分享到"+i[n].name:"";!a(e).attr("title")&&s&&a(e).attr("title",s)})})})},e._init=function(){(function(){if(t.bdCustomStyle){var e=document.createElement("link");e.href=t.bdCustomStyle,e.rel="styleSheet",e.type="text/css",document.getElementsByTagName("head")[0].appendChild(e)}else window._bd_share_main.F.use("share_style"+n+"_"+i+".css")})(),a(e._entities).find("."+o.count).length>0&&e.fire("getsharecount")},e.setNumber=function(t,n){a(e._entities).find("."+o.count).html(n).attr("title","累计分享"+t+"次")}},r.ViewBase)});