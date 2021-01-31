//# sourceMappingURL=jquery.form.js.map
/*
 jQuery Form Plugin
 version: 3.51.0-2014.06.20
 Requires jQuery v1.5 or later
 Copyright (c) 2014 M. Alsup
 Examples and documentation at: http://malsup.com/jquery/form/
 Project repository: https://github.com/malsup/form
 Dual licensed under the MIT and GPL licenses.
 https://github.com/malsup/form#copyright-and-license
*/
var process=process||{env:{NODE_ENV:"development"}};
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b("undefined"!=typeof jQuery?jQuery:window.Zepto)})(function(b){function t(a){var e=a.data;a.isDefaultPrevented()||(a.preventDefault(),b(a.target).ajaxSubmit(e))}function y(a){var e=a.target,d=b(e);if(!d.is("[type=submit],[type=image]")){e=d.closest("[type=submit]");if(0===e.length)return;e=e[0]}var g=this;g.clk=e;"image"==e.type&&(void 0!==a.offsetX?(g.clk_x=a.offsetX,g.clk_y=a.offsetY):"function"==typeof b.fn.offset?(d=d.offset(),
g.clk_x=a.pageX-d.left,g.clk_y=a.pageY-d.top):(g.clk_x=a.pageX-e.offsetLeft,g.clk_y=a.pageY-e.offsetTop));setTimeout(function(){g.clk=g.clk_x=g.clk_y=null},100)}function q(){if(b.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var A=void 0!==b("<input type='file'/>").get(0).files;var F=void 0!==window.FormData;var I=!!b.fn.prop;b.fn.attr2=function(){if(!I)return this.attr.apply(this,
arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"===typeof a?a:this.attr.apply(this,arguments)};b.fn.ajaxSubmit=function(a){function e(c){c=b.param(c,a.traditional).split("&");var e=c.length,g=[],d;for(d=0;d<e;d++){c[d]=c[d].replace(/\+/g," ");var h=c[d].split("=");g.push([decodeURIComponent(h[0]),decodeURIComponent(h[1])])}return g}function d(c){for(var g=new FormData,d=0;d<c.length;d++)g.append(c[d].name,c[d].value);if(a.extraData)for(c=e(a.extraData),d=0;d<c.length;d++)c[d]&&
g.append(c[d][0],c[d][1]);a.data=null;d=b.extend(!0,{},b.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:n||"POST"});a.uploadProgress&&(d.xhr=function(){var c=b.ajaxSettings.xhr();c.upload&&c.upload.addEventListener("progress",function(b){var c=0,d=b.loaded||b.position,g=b.total;b.lengthComputable&&(c=Math.ceil(d/g*100));a.uploadProgress(b,d,g,c)},!1);return c});d.data=null;var h=d.beforeSend;d.beforeSend=function(b,c){c.data=a.formData?a.formData:g;h&&h.call(this,b,c)};return b.ajax(d)}
function g(d){function g(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(D){q("cannot get iframe.contentWindow document: "+D)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(D){q("cannot get iframe.contentDocument: "+D),b=a.document}return b}function e(){function a(){try{var b=g(v).readyState;q("state = "+b);b&&"uninitialized"==b.toLowerCase()&&setTimeout(a,50)}catch(J){q("Server abort: ",J," (",J.name,")"),h(2),u&&clearTimeout(u),u=void 0}}var d=c.attr2("target"),
e=c.attr2("action"),k=c.attr("enctype")||c.attr("encoding")||"multipart/form-data";l.setAttribute("target",t);n&&!/post/i.test(n)||l.setAttribute("method","POST");e!=f.url&&l.setAttribute("action",f.url);f.skipEncodingOverride||n&&!/post/i.test(n)||c.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});f.timeout&&(u=setTimeout(function(){G=!0;h(1)},f.timeout));var m=[];try{if(f.extraData)for(var p in f.extraData)f.extraData.hasOwnProperty(p)&&(b.isPlainObject(f.extraData[p])&&f.extraData[p].hasOwnProperty("name")&&
f.extraData[p].hasOwnProperty("value")?m.push(b('<input type="hidden" name="'+f.extraData[p].name+'">').val(f.extraData[p].value).appendTo(l)[0]):m.push(b('<input type="hidden" name="'+p+'">').val(f.extraData[p]).appendTo(l)[0]));f.iframeTarget||x.appendTo("body");v.attachEvent?v.attachEvent("onload",h):v.addEventListener("load",h,!1);setTimeout(a,15);try{l.submit()}catch(L){document.createElement("form").submit.apply(l)}}finally{l.setAttribute("action",e),l.setAttribute("enctype",k),d?l.setAttribute("target",
d):c.removeAttr("target"),b(m).remove()}}function h(a){if(!k.aborted&&!A)if(r=g(v),r||(q("cannot access response document"),a=2),1===a&&k)k.abort("timeout"),w.reject(k,"timeout");else if(2==a&&k)k.abort("server abort"),w.reject(k,"error","server abort");else if(r&&r.location.href!=f.iframeSrc||G){v.detachEvent?v.detachEvent("onload",h):v.removeEventListener("load",h,!1);a="success";var c;try{if(G)throw"timeout";var d="xml"==f.dataType||r.XMLDocument||b.isXMLDoc(r);q("isXml="+d);if(!d&&window.opera&&
(null===r.body||!r.body.innerHTML)&&--z){q("requeing onLoad callback, DOM not available");setTimeout(h,250);return}var e=r.body?r.body:r.documentElement;k.responseText=e?e.innerHTML:null;k.responseXML=r.XMLDocument?r.XMLDocument:r;d&&(f.dataType="xml");k.getResponseHeader=function(a){return{"content-type":f.dataType}[a.toLowerCase()]};e&&(k.status=Number(e.getAttribute("status"))||k.status,k.statusText=e.getAttribute("statusText")||k.statusText);var l=(f.dataType||"").toLowerCase(),m=/(json|script|text)/.test(l);
if(m||f.textarea){var n=r.getElementsByTagName("textarea")[0];if(n)k.responseText=n.value,k.status=Number(n.getAttribute("status"))||k.status,k.statusText=n.getAttribute("statusText")||k.statusText;else if(m){var C=r.getElementsByTagName("pre")[0],t=r.getElementsByTagName("body")[0];C?k.responseText=C.textContent?C.textContent:C.innerText:t&&(k.responseText=t.textContent?t.textContent:t.innerText)}}else"xml"==l&&!k.responseXML&&k.responseText&&(k.responseXML=F(k.responseText));try{y=K(k,l,f)}catch(E){a=
"parsererror",k.error=c=E||a}}catch(E){q("error caught: ",E),a="error",k.error=c=E||a}k.aborted&&(q("upload aborted"),a=null);k.status&&(a=200<=k.status&&300>k.status||304===k.status?"success":"error");"success"===a?(f.success&&f.success.call(f.context,y,"success",k),w.resolve(k.responseText,"success",k),p&&b.event.trigger("ajaxSuccess",[k,f])):a&&(void 0===c&&(c=k.statusText),f.error&&f.error.call(f.context,k,a,c),w.reject(k,"error",c),p&&b.event.trigger("ajaxError",[k,f,c]));p&&b.event.trigger("ajaxComplete",
[k,f]);p&&!--b.active&&b.event.trigger("ajaxStop");f.complete&&f.complete.call(f.context,k,a);A=!0;f.timeout&&clearTimeout(u);setTimeout(function(){f.iframeTarget?x.attr("src",f.iframeSrc):x.remove();k.responseXML=null},100)}}var l=c[0],m,p,G,u,w=b.Deferred();w.abort=function(a){k.abort(a)};if(d)for(m=0;m<B.length;m++)d=b(B[m]),I?d.prop("disabled",!1):d.removeAttr("disabled");var f=b.extend(!0,{},b.ajaxSettings,a);f.context=f.context||f;var t="jqFormIO"+(new Date).getTime();if(f.iframeTarget){var x=
b(f.iframeTarget);(m=x.attr2("name"))?t=m:x.attr2("name",t)}else x=b('<iframe name="'+t+'" src="'+f.iframeSrc+'" />'),x.css({position:"absolute",top:"-1000px",left:"-1000px"});var v=x[0];var k={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var c="timeout"===a?"timeout":"aborted";q("aborting upload... "+c);this.aborted=1;try{v.contentWindow.document.execCommand&&
v.contentWindow.document.execCommand("Stop")}catch(D){}x.attr("src",f.iframeSrc);k.error=c;f.error&&f.error.call(f.context,k,c,a);p&&b.event.trigger("ajaxError",[k,f,c]);f.complete&&f.complete.call(f.context,k,c)}};(p=f.global)&&0===b.active++&&b.event.trigger("ajaxStart");p&&b.event.trigger("ajaxSend",[k,f]);if(f.beforeSend&&!1===f.beforeSend.call(f.context,k,f))return f.global&&b.active--,w.reject(),w;if(k.aborted)return w.reject(),w;(d=l.clk)&&(m=d.name)&&!d.disabled&&(f.extraData=f.extraData||
{},f.extraData[m]=d.value,"image"==d.type&&(f.extraData[m+".x"]=l.clk_x,f.extraData[m+".y"]=l.clk_y));d=b("meta[name=csrf-token]").attr("content");(m=b("meta[name=csrf-param]").attr("content"))&&d&&(f.extraData=f.extraData||{},f.extraData[m]=d);f.forceSync?e():setTimeout(e,10);var y,r,z=50,A,F=b.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=
b.documentElement.nodeName?b:null},H=b.parseJSON||function(a){return window.eval("("+a+")")},K=function(a,c,d){var f=a.getResponseHeader("content-type")||"",e="xml"===c||!c&&0<=f.indexOf("xml");a=e?a.responseXML:a.responseText;e&&"parsererror"===a.documentElement.nodeName&&b.error&&b.error("parsererror");d&&d.dataFilter&&(a=d.dataFilter(a,c));"string"===typeof a&&("json"===c||!c&&0<=f.indexOf("json")?a=H(a):("script"===c||!c&&0<=f.indexOf("javascript"))&&b.globalEval(a));return a};return w}if(!this.length)return q("ajaxSubmit: skipping submit process - no element selected"),
this;var c=this;"function"==typeof a?a={success:a}:void 0===a&&(a={});var n=a.type||this.attr2("method");var h=a.url||this.attr2("action");(h=(h="string"===typeof h?b.trim(h):"")||window.location.href||"")&&(h=(h.match(/^([^#]+)/)||[])[1]);a=b.extend(!0,{url:h,success:b.ajaxSettings.success,type:n||b.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);h={};this.trigger("form-pre-serialize",[this,a,h]);if(h.veto)return q("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return q("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var p=a.traditional;void 0===p&&(p=b.ajaxSettings.traditional);var B=[],l=this.formToArray(a.semantic,B);if(a.data){a.extraData=a.data;var m=b.param(a.data,p)}if(a.beforeSubmit&&!1===a.beforeSubmit(l,this,a))return q("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[l,this,a,h]);if(h.veto)return q("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
this;h=b.param(l,p);m&&(h=h?h+"&"+m:m);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+h,a.data=null):a.data=h;var u=[];a.resetForm&&u.push(function(){c.resetForm()});a.clearForm&&u.push(function(){c.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var t=a.success||function(){};u.push(function(c){var d=a.replaceTarget?"replaceWith":"html";b(a.target)[d](c).each(t,arguments)})}else a.success&&u.push(a.success);a.success=function(b,d,e){for(var g=a.context||this,h=0,l=u.length;h<
l;h++)u[h].apply(g,[b,d,e||c,c])};if(a.error){var y=a.error;a.error=function(b,d,e){y.apply(a.context||this,[b,d,e,c])}}if(a.complete){var H=a.complete;a.complete=function(b,d){H.apply(a.context||this,[b,d,c])}}m=0<b("input[type=file]:enabled",this).filter(function(){return""!==b(this).val()}).length;h="multipart/form-data"==c.attr("enctype")||"multipart/form-data"==c.attr("encoding");p=A&&F;q("fileAPI :"+p);var z;!1!==a.iframe&&(a.iframe||(m||h)&&!p)?a.closeKeepAlive?b.get(a.closeKeepAlive,function(){z=
g(l)}):z=g(l):z=(m||h)&&p?d(l):b.ajax(a);c.removeData("jqxhr").data("jqxhr",z);for(m=0;m<B.length;m++)B[m]=null;this.trigger("form-submit-notify",[this,a]);return this};b.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&b.isFunction(b.fn.on);if(!a.delegation&&0===this.length){var e=this.selector,d=this.context;if(!b.isReady&&e)return q("DOM not ready, queuing ajaxForm"),b(function(){b(e,d).ajaxForm(a)}),this;q("terminating; zero elements found by selector"+(b.isReady?"":" (DOM not ready)"));
return this}return a.delegation?(b(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,y).on("submit.form-plugin",this.selector,a,t).on("click.form-plugin",this.selector,a,y),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,t).bind("click.form-plugin",a,y)};b.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};b.fn.formToArray=function(a,e){var d=[];if(0===this.length)return d;var g=this[0],c=this.attr("id"),n=a?g.getElementsByTagName("*"):
g.elements;n&&!/MSIE [678]/.test(navigator.userAgent)&&(n=b(n).get());c&&(c=b(':input[form="'+c+'"]').get(),c.length&&(n=(n||[]).concat(c)));if(!n||!n.length)return d;var h,p;var q=0;for(p=n.length;q<p;q++){var l=n[q];if((c=l.name)&&!l.disabled)if(a&&g.clk&&"image"==l.type)g.clk==l&&(d.push({name:c,value:b(l).val(),type:l.type}),d.push({name:c+".x",value:g.clk_x},{name:c+".y",value:g.clk_y}));else if((h=b.fieldValue(l,!0))&&h.constructor==Array){e&&e.push(l);var m=0;for(l=h.length;m<l;m++)d.push({name:c,
value:h[m]})}else if(A&&"file"==l.type)if(e&&e.push(l),h=l.files,h.length)for(m=0;m<h.length;m++)d.push({name:c,value:h[m],type:l.type});else d.push({name:c,value:"",type:l.type});else null!==h&&"undefined"!=typeof h&&(e&&e.push(l),d.push({name:c,value:h,type:l.type,required:l.required}))}!a&&g.clk&&(a=b(g.clk),e=a[0],(c=e.name)&&!e.disabled&&"image"==e.type&&(d.push({name:c,value:a.val()}),d.push({name:c+".x",value:g.clk_x},{name:c+".y",value:g.clk_y})));return d};b.fn.formSerialize=function(a){return b.param(this.formToArray(a))};
b.fn.fieldSerialize=function(a){var e=[];this.each(function(){var d=this.name;if(d){var g=b.fieldValue(this,a);if(g&&g.constructor==Array)for(var c=0,n=g.length;c<n;c++)e.push({name:d,value:g[c]});else null!==g&&"undefined"!=typeof g&&e.push({name:this.name,value:g})}});return b.param(e)};b.fn.fieldValue=function(a){for(var e=[],d=0,g=this.length;d<g;d++){var c=b.fieldValue(this[d],a);null===c||"undefined"==typeof c||c.constructor==Array&&!c.length||(c.constructor==Array?b.merge(e,c):e.push(c))}return e};
b.fieldValue=function(a,e){var d=a.name,g=a.type,c=a.tagName.toLowerCase();void 0===e&&(e=!0);if(e&&(!d||a.disabled||"reset"==g||"button"==g||("checkbox"==g||"radio"==g)&&!a.checked||("submit"==g||"image"==g)&&a.form&&a.form.clk!=a||"select"==c&&-1==a.selectedIndex))return null;if("select"==c){c=a.selectedIndex;if(0>c)return null;e=[];a=a.options;d=(g="select-one"==g)?c+1:a.length;for(c=g?c:0;c<d;c++){var n=a[c];if(n.selected){var h=n.value;h||(h=n.attributes&&n.attributes.value&&!n.attributes.value.specified?
n.text:n.value);if(g)return h;e.push(h)}}return e}return b(a).val()};b.fn.clearForm=function(a){return this.each(function(){b("input,select,textarea",this).clearFields(a)})};b.fn.clearFields=b.fn.clearInputs=function(a){var e=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,g=this.tagName.toLowerCase();e.test(d)||"textarea"==g?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==g?this.selectedIndex=
-1:"file"==d?/MSIE/.test(navigator.userAgent)?b(this).replaceWith(b(this).clone(!0)):b(this).val(""):a&&(!0===a&&/hidden/.test(d)||"string"==typeof a&&b(this).is(a))&&(this.value="")})};b.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};b.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};b.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var e=
this.type;"checkbox"==e||"radio"==e?this.checked=a:"option"==this.tagName.toLowerCase()&&(e=b(this).parent("select"),a&&e[0]&&"select-one"==e[0].type&&e.find("option").selected(!1),this.selected=a)})};b.fn.ajaxSubmit.debug=!1});