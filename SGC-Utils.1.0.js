/*!
 * DO NOT USE THIS, IT IS OUTDATED AND LEAKS VARIABLES TO GLOBAL-SCOPE.
 * Originally created by https://scratch.mit.edu/users/As_g/ and https://scratch.mit.edu/users/0znzw/
 * This file is available under an informal "use with credit" license.
 */
(function(Scratch) {
	'use strict';
	if (!Scratch.extensions.unsandboxed) {
		throw new Error('SGC-Utils must run unsandboxed.\nALSO DONT USE THIS, USE VLATEST.0');
	}
	/* eslint-disable */
	const md5=function(){function n(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function r(r,t,e,o,u,c){return n((f=n(n(t,r),n(o,c)))<<(i=u)|f>>>32-i,e);var f,i}function t(n,t,e,o,u,c,f){return r(t&e|~t&o,n,t,u,c,f)}function e(n,t,e,o,u,c,f){return r(t&o|e&~o,n,t,u,c,f)}function o(n,t,e,o,u,c,f){return r(t^e^o,n,t,u,c,f)}function u(n,t,e,o,u,c,f){return r(e^(t|~o),n,t,u,c,f)}function c(r,c){var f,i,a,h,g;r[c>>5]|=128<<c%32,r[14+(c+64>>>9<<4)]=c;var v=1732584193,l=-271733879,d=-1732584194,C=271733878;for(f=0;f<r.length;f+=16)i=v,a=l,h=d,g=C,l=u(l=u(l=u(l=u(l=o(l=o(l=o(l=o(l=e(l=e(l=e(l=e(l=t(l=t(l=t(l=t(l,d=t(d,C=t(C,v=t(v,l,d,C,r[f],7,-680876936),l,d,r[f+1],12,-389564586),v,l,r[f+2],17,606105819),C,v,r[f+3],22,-1044525330),d=t(d,C=t(C,v=t(v,l,d,C,r[f+4],7,-176418897),l,d,r[f+5],12,1200080426),v,l,r[f+6],17,-1473231341),C,v,r[f+7],22,-45705983),d=t(d,C=t(C,v=t(v,l,d,C,r[f+8],7,1770035416),l,d,r[f+9],12,-1958414417),v,l,r[f+10],17,-42063),C,v,r[f+11],22,-1990404162),d=t(d,C=t(C,v=t(v,l,d,C,r[f+12],7,1804603682),l,d,r[f+13],12,-40341101),v,l,r[f+14],17,-1502002290),C,v,r[f+15],22,1236535329),d=e(d,C=e(C,v=e(v,l,d,C,r[f+1],5,-165796510),l,d,r[f+6],9,-1069501632),v,l,r[f+11],14,643717713),C,v,r[f],20,-373897302),d=e(d,C=e(C,v=e(v,l,d,C,r[f+5],5,-701558691),l,d,r[f+10],9,38016083),v,l,r[f+15],14,-660478335),C,v,r[f+4],20,-405537848),d=e(d,C=e(C,v=e(v,l,d,C,r[f+9],5,568446438),l,d,r[f+14],9,-1019803690),v,l,r[f+3],14,-187363961),C,v,r[f+8],20,1163531501),d=e(d,C=e(C,v=e(v,l,d,C,r[f+13],5,-1444681467),l,d,r[f+2],9,-51403784),v,l,r[f+7],14,1735328473),C,v,r[f+12],20,-1926607734),d=o(d,C=o(C,v=o(v,l,d,C,r[f+5],4,-378558),l,d,r[f+8],11,-2022574463),v,l,r[f+11],16,1839030562),C,v,r[f+14],23,-35309556),d=o(d,C=o(C,v=o(v,l,d,C,r[f+1],4,-1530992060),l,d,r[f+4],11,1272893353),v,l,r[f+7],16,-155497632),C,v,r[f+10],23,-1094730640),d=o(d,C=o(C,v=o(v,l,d,C,r[f+13],4,681279174),l,d,r[f],11,-358537222),v,l,r[f+3],16,-722521979),C,v,r[f+6],23,76029189),d=o(d,C=o(C,v=o(v,l,d,C,r[f+9],4,-640364487),l,d,r[f+12],11,-421815835),v,l,r[f+15],16,530742520),C,v,r[f+2],23,-995338651),d=u(d,C=u(C,v=u(v,l,d,C,r[f],6,-198630844),l,d,r[f+7],10,1126891415),v,l,r[f+14],15,-1416354905),C,v,r[f+5],21,-57434055),d=u(d,C=u(C,v=u(v,l,d,C,r[f+12],6,1700485571),l,d,r[f+3],10,-1894986606),v,l,r[f+10],15,-1051523),C,v,r[f+1],21,-2054922799),d=u(d,C=u(C,v=u(v,l,d,C,r[f+8],6,1873313359),l,d,r[f+15],10,-30611744),v,l,r[f+6],15,-1560198380),C,v,r[f+13],21,1309151649),d=u(d,C=u(C,v=u(v,l,d,C,r[f+4],6,-145523070),l,d,r[f+11],10,-1120210379),v,l,r[f+2],15,718787259),C,v,r[f+9],21,-343485551),v=n(v,i),l=n(l,a),d=n(d,h),C=n(C,g);return[v,l,d,C]}function f(n){var r,t="",e=32*n.length;for(r=0;r<e;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function i(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var e=8*n.length;for(r=0;r<e;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function a(n){var r,t,e="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),e+="0123456789abcdef".charAt(r>>>4&15)+"0123456789abcdef".charAt(15&r);return e}function h(n){return unescape(encodeURIComponent(n))}function g(n){return function(n){return f(c(i(n),8*n.length))}(h(n))}function v(n,r){return function(n,r){var t,e,o=i(n),u=[],a=[];for(u[15]=a[15]=void 0,o.length>16&&(o=c(o,8*n.length)),t=0;t<16;t+=1)u[t]=909522486^o[t],a[t]=1549556828^o[t];return e=c(u.concat(i(r)),512+8*r.length),f(c(a.concat(e),640))}(h(n),h(r))}return function(n,r,t){return r?t?v(r,n):a(v(r,n)):t?g(n):a(g(n))}}();
	/* eslint-enable */
	const AESDATAURI = `data:text/javascript;base64,LyogLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICAqLwovKiAgQUVTIGltcGxlbWVudGF0aW9uIGluIEphdmFTY3JpcHQgICAgICAgICAgICAgICAgICAgICAoYykgQ2hyaXMgVmVuZXNzIDIwMDUtMjAxNCAvIE1JVCBMaWNlbmNlICovCi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi8KCi8qIGpzaGludCBub2RlOnRydWUgKi8vKiBnbG9iYWwgZGVmaW5lICovCid1c2Ugc3RyaWN0JzsKCgovKioKICogQUVTIChSaWpuZGFlbCBjaXBoZXIpIGVuY3J5cHRpb24gcm91dGluZXMsCiAqCiAqIFJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiBGSVBTLTE5NyBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTk3L2ZpcHMtMTk3LnBkZi4KICoKICogQG5hbWVzcGFjZQogKi8KdmFyIEFlcyA9IHt9OwoKCi8qKgogKiBBRVMgQ2lwaGVyIGZ1bmN0aW9uOiBlbmNyeXB0ICdpbnB1dCcgc3RhdGUgd2l0aCBSaWpuZGFlbCBhbGdvcml0aG0gW8KnNS4xXTsKICogICBhcHBsaWVzIE5yIHJvdW5kcyAoMTAvMTIvMTQpIHVzaW5nIGtleSBzY2hlZHVsZSB3IGZvciAnYWRkIHJvdW5kIGtleScgc3RhZ2UuCiAqCiAqIEBwYXJhbSAgIHtudW1iZXJbXX0gICBpbnB1dCAtIDE2LWJ5dGUgKDEyOC1iaXQpIGlucHV0IHN0YXRlIGFycmF5LgogKiBAcGFyYW0gICB7bnVtYmVyW11bXX0gdyAtIEtleSBzY2hlZHVsZSBhcyAyRCBieXRlLWFycmF5IChOcisxIHggTmIgYnl0ZXMpLgogKiBAcmV0dXJucyB7bnVtYmVyW119ICAgRW5jcnlwdGVkIG91dHB1dCBzdGF0ZSBhcnJheS4KICovCkFlcy5jaXBoZXIgPSBmdW5jdGlvbihpbnB1dCwgdykgewogICAgdmFyIE5iID0gNDsgICAgICAgICAgICAgICAvLyBibG9jayBzaXplIChpbiB3b3Jkcyk6IG5vIG9mIGNvbHVtbnMgaW4gc3RhdGUgKGZpeGVkIGF0IDQgZm9yIEFFUykKICAgIHZhciBOciA9IHcubGVuZ3RoL05iIC0gMTsgLy8gbm8gb2Ygcm91bmRzOiAxMC8xMi8xNCBmb3IgMTI4LzE5Mi8yNTYtYml0IGtleXMKCiAgICB2YXIgc3RhdGUgPSBbW10sW10sW10sW11dOyAgLy8gaW5pdGlhbGlzZSA0eE5iIGJ5dGUtYXJyYXkgJ3N0YXRlJyB3aXRoIGlucHV0IFvCpzMuNF0KICAgIGZvciAodmFyIGk9MDsgaTw0Kk5iOyBpKyspIHN0YXRlW2klNF1bTWF0aC5mbG9vcihpLzQpXSA9IGlucHV0W2ldOwoKICAgIHN0YXRlID0gQWVzLmFkZFJvdW5kS2V5KHN0YXRlLCB3LCAwLCBOYik7CgogICAgZm9yICh2YXIgcm91bmQ9MTsgcm91bmQ8TnI7IHJvdW5kKyspIHsKICAgICAgICBzdGF0ZSA9IEFlcy5zdWJCeXRlcyhzdGF0ZSwgTmIpOwogICAgICAgIHN0YXRlID0gQWVzLnNoaWZ0Um93cyhzdGF0ZSwgTmIpOwogICAgICAgIHN0YXRlID0gQWVzLm1peENvbHVtbnMoc3RhdGUsIE5iKTsKICAgICAgICBzdGF0ZSA9IEFlcy5hZGRSb3VuZEtleShzdGF0ZSwgdywgcm91bmQsIE5iKTsKICAgIH0KCiAgICBzdGF0ZSA9IEFlcy5zdWJCeXRlcyhzdGF0ZSwgTmIpOwogICAgc3RhdGUgPSBBZXMuc2hpZnRSb3dzKHN0YXRlLCBOYik7CiAgICBzdGF0ZSA9IEFlcy5hZGRSb3VuZEtleShzdGF0ZSwgdywgTnIsIE5iKTsKCiAgICB2YXIgb3V0cHV0ID0gbmV3IEFycmF5KDQqTmIpOyAgLy8gY29udmVydCBzdGF0ZSB0byAxLWQgYXJyYXkgYmVmb3JlIHJldHVybmluZyBbwqczLjRdCiAgICBmb3IgKHZhciBpPTA7IGk8NCpOYjsgaSsrKSBvdXRwdXRbaV0gPSBzdGF0ZVtpJTRdW01hdGguZmxvb3IoaS80KV07CgogICAgcmV0dXJuIG91dHB1dDsKfTsKCgovKioKICogUGVyZm9ybSBrZXkgZXhwYW5zaW9uIHRvIGdlbmVyYXRlIGEga2V5IHNjaGVkdWxlIGZyb20gYSBjaXBoZXIga2V5IFvCpzUuMl0uCiAqCiAqIEBwYXJhbSAgIHtudW1iZXJbXX0gICBrZXkgLSBDaXBoZXIga2V5IGFzIDE2LzI0LzMyLWJ5dGUgYXJyYXkuCiAqIEByZXR1cm5zIHtudW1iZXJbXVtdfSBFeHBhbmRlZCBrZXkgc2NoZWR1bGUgYXMgMkQgYnl0ZS1hcnJheSAoTnIrMSB4IE5iIGJ5dGVzKS4KICovCkFlcy5rZXlFeHBhbnNpb24gPSBmdW5jdGlvbihrZXkpIHsKICAgIHZhciBOYiA9IDQ7ICAgICAgICAgICAgLy8gYmxvY2sgc2l6ZSAoaW4gd29yZHMpOiBubyBvZiBjb2x1bW5zIGluIHN0YXRlIChmaXhlZCBhdCA0IGZvciBBRVMpCiAgICB2YXIgTmsgPSBrZXkubGVuZ3RoLzQ7IC8vIGtleSBsZW5ndGggKGluIHdvcmRzKTogNC82LzggZm9yIDEyOC8xOTIvMjU2LWJpdCBrZXlzCiAgICB2YXIgTnIgPSBOayArIDY7ICAgICAgIC8vIG5vIG9mIHJvdW5kczogMTAvMTIvMTQgZm9yIDEyOC8xOTIvMjU2LWJpdCBrZXlzCgogICAgdmFyIHcgPSBuZXcgQXJyYXkoTmIqKE5yKzEpKTsKICAgIHZhciB0ZW1wID0gbmV3IEFycmF5KDQpOwoKICAgIC8vIGluaXRpYWxpc2UgZmlyc3QgTmsgd29yZHMgb2YgZXhwYW5kZWQga2V5IHdpdGggY2lwaGVyIGtleQogICAgZm9yICh2YXIgaT0wOyBpPE5rOyBpKyspIHsKICAgICAgICB2YXIgciA9IFtrZXlbNCppXSwga2V5WzQqaSsxXSwga2V5WzQqaSsyXSwga2V5WzQqaSszXV07CiAgICAgICAgd1tpXSA9IHI7CiAgICB9CgogICAgLy8gZXhwYW5kIHRoZSBrZXkgaW50byB0aGUgcmVtYWluZGVyIG9mIHRoZSBzY2hlZHVsZQogICAgZm9yICh2YXIgaT1OazsgaTwoTmIqKE5yKzEpKTsgaSsrKSB7CiAgICAgICAgd1tpXSA9IG5ldyBBcnJheSg0KTsKICAgICAgICBmb3IgKHZhciB0PTA7IHQ8NDsgdCsrKSB0ZW1wW3RdID0gd1tpLTFdW3RdOwogICAgICAgIC8vIGVhY2ggTmsndGggd29yZCBoYXMgZXh0cmEgdHJhbnNmb3JtYXRpb24KICAgICAgICBpZiAoaSAlIE5rID09IDApIHsKICAgICAgICAgICAgdGVtcCA9IEFlcy5zdWJXb3JkKEFlcy5yb3RXb3JkKHRlbXApKTsKICAgICAgICAgICAgZm9yICh2YXIgdD0wOyB0PDQ7IHQrKykgdGVtcFt0XSBePSBBZXMuckNvbltpL05rXVt0XTsKICAgICAgICB9CiAgICAgICAgLy8gMjU2LWJpdCBrZXkgaGFzIHN1YldvcmQgYXBwbGllZCBldmVyeSA0dGggd29yZAogICAgICAgIGVsc2UgaWYgKE5rID4gNiAmJiBpJU5rID09IDQpIHsKICAgICAgICAgICAgdGVtcCA9IEFlcy5zdWJXb3JkKHRlbXApOwogICAgICAgIH0KICAgICAgICAvLyB4b3Igd1tpXSB3aXRoIHdbaS0xXSBhbmQgd1tpLU5rXQogICAgICAgIGZvciAodmFyIHQ9MDsgdDw0OyB0KyspIHdbaV1bdF0gPSB3W2ktTmtdW3RdIF4gdGVtcFt0XTsKICAgIH0KCiAgICByZXR1cm4gdzsKfTsKCgovKioKICogQXBwbHkgU0JveCB0byBzdGF0ZSBTIFvCpzUuMS4xXQogKiBAcHJpdmF0ZQogKi8KQWVzLnN1YkJ5dGVzID0gZnVuY3Rpb24ocywgTmIpIHsKICAgIGZvciAodmFyIHI9MDsgcjw0OyByKyspIHsKICAgICAgICBmb3IgKHZhciBjPTA7IGM8TmI7IGMrKykgc1tyXVtjXSA9IEFlcy5zQm94W3Nbcl1bY11dOwogICAgfQogICAgcmV0dXJuIHM7Cn07CgoKLyoqCiAqIFNoaWZ0IHJvdyByIG9mIHN0YXRlIFMgbGVmdCBieSByIGJ5dGVzIFvCpzUuMS4yXQogKiBAcHJpdmF0ZQogKi8KQWVzLnNoaWZ0Um93cyA9IGZ1bmN0aW9uKHMsIE5iKSB7CiAgICB2YXIgdCA9IG5ldyBBcnJheSg0KTsKICAgIGZvciAodmFyIHI9MTsgcjw0OyByKyspIHsKICAgICAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB0W2NdID0gc1tyXVsoYytyKSVOYl07ICAvLyBzaGlmdCBpbnRvIHRlbXAgY29weQogICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIHNbcl1bY10gPSB0W2NdOyAgICAgICAgIC8vIGFuZCBjb3B5IGJhY2sKICAgIH0gICAgICAgICAgLy8gbm90ZSB0aGF0IHRoaXMgd2lsbCB3b3JrIGZvciBOYj00LDUsNiwgYnV0IG5vdCA3LDggKGFsd2F5cyA0IGZvciBBRVMpOgogICAgcmV0dXJuIHM7ICAvLyBzZWUgYXNtYWVzLnNvdXJjZWZvcmdlLm5ldC9yaWpuZGFlbC9yaWpuZGFlbEltcGxlbWVudGF0aW9uLnBkZgp9OwoKCi8qKgogKiBDb21iaW5lIGJ5dGVzIG9mIGVhY2ggY29sIG9mIHN0YXRlIFMgW8KnNS4xLjNdCiAqIEBwcml2YXRlCiAqLwpBZXMubWl4Q29sdW1ucyA9IGZ1bmN0aW9uKHMsIE5iKSB7CiAgICBmb3IgKHZhciBjPTA7IGM8NDsgYysrKSB7CiAgICAgICAgdmFyIGEgPSBuZXcgQXJyYXkoNCk7ICAvLyAnYScgaXMgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGNvbHVtbiBmcm9tICdzJwogICAgICAgIHZhciBiID0gbmV3IEFycmF5KDQpOyAgLy8gJ2InIGlzIGHigKJ7MDJ9IGluIEdGKDJeOCkKICAgICAgICBmb3IgKHZhciBpPTA7IGk8NDsgaSsrKSB7CiAgICAgICAgICAgIGFbaV0gPSBzW2ldW2NdOwogICAgICAgICAgICBiW2ldID0gc1tpXVtjXSYweDgwID8gc1tpXVtjXTw8MSBeIDB4MDExYiA6IHNbaV1bY108PDE7CiAgICAgICAgfQogICAgICAgIC8vIGFbbl0gXiBiW25dIGlzIGHigKJ7MDN9IGluIEdGKDJeOCkKICAgICAgICBzWzBdW2NdID0gYlswXSBeIGFbMV0gXiBiWzFdIF4gYVsyXSBeIGFbM107IC8vIHswMn3igKJhMCArIHswM33igKJhMSArIGEyICsgYTMKICAgICAgICBzWzFdW2NdID0gYVswXSBeIGJbMV0gXiBhWzJdIF4gYlsyXSBeIGFbM107IC8vIGEwIOKAoiB7MDJ94oCiYTEgKyB7MDN94oCiYTIgKyBhMwogICAgICAgIHNbMl1bY10gPSBhWzBdIF4gYVsxXSBeIGJbMl0gXiBhWzNdIF4gYlszXTsgLy8gYTAgKyBhMSArIHswMn3igKJhMiArIHswM33igKJhMwogICAgICAgIHNbM11bY10gPSBhWzBdIF4gYlswXSBeIGFbMV0gXiBhWzJdIF4gYlszXTsgLy8gezAzfeKAomEwICsgYTEgKyBhMiArIHswMn3igKJhMwogICAgfQogICAgcmV0dXJuIHM7Cn07CgoKLyoqCiAqIFhvciBSb3VuZCBLZXkgaW50byBzdGF0ZSBTIFvCpzUuMS40XQogKiBAcHJpdmF0ZQogKi8KQWVzLmFkZFJvdW5kS2V5ID0gZnVuY3Rpb24oc3RhdGUsIHcsIHJuZCwgTmIpIHsKICAgIGZvciAodmFyIHI9MDsgcjw0OyByKyspIHsKICAgICAgICBmb3IgKHZhciBjPTA7IGM8TmI7IGMrKykgc3RhdGVbcl1bY10gXj0gd1tybmQqNCtjXVtyXTsKICAgIH0KICAgIHJldHVybiBzdGF0ZTsKfTsKCgovKioKICogQXBwbHkgU0JveCB0byA0LWJ5dGUgd29yZCB3CiAqIEBwcml2YXRlCiAqLwpBZXMuc3ViV29yZCA9IGZ1bmN0aW9uKHcpIHsKICAgIGZvciAodmFyIGk9MDsgaTw0OyBpKyspIHdbaV0gPSBBZXMuc0JveFt3W2ldXTsKICAgIHJldHVybiB3Owp9OwoKCi8qKgogKiBSb3RhdGUgNC1ieXRlIHdvcmQgdyBsZWZ0IGJ5IG9uZSBieXRlCiAqIEBwcml2YXRlCiAqLwpBZXMucm90V29yZCA9IGZ1bmN0aW9uKHcpIHsKICAgIHZhciB0bXAgPSB3WzBdOwogICAgZm9yICh2YXIgaT0wOyBpPDM7IGkrKykgd1tpXSA9IHdbaSsxXTsKICAgIHdbM10gPSB0bXA7CiAgICByZXR1cm4gdzsKfTsKCgovLyBzQm94IGlzIHByZS1jb21wdXRlZCBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlIGluIEdGKDJeOCkgdXNlZCBpbiBzdWJCeXRlcyBhbmQga2V5RXhwYW5zaW9uIFvCpzUuMS4xXQpBZXMuc0JveCA9ICBbMHg2MywweDdjLDB4NzcsMHg3YiwweGYyLDB4NmIsMHg2ZiwweGM1LDB4MzAsMHgwMSwweDY3LDB4MmIsMHhmZSwweGQ3LDB4YWIsMHg3NiwKICAgICAgICAgICAgIDB4Y2EsMHg4MiwweGM5LDB4N2QsMHhmYSwweDU5LDB4NDcsMHhmMCwweGFkLDB4ZDQsMHhhMiwweGFmLDB4OWMsMHhhNCwweDcyLDB4YzAsCiAgICAgICAgICAgICAweGI3LDB4ZmQsMHg5MywweDI2LDB4MzYsMHgzZiwweGY3LDB4Y2MsMHgzNCwweGE1LDB4ZTUsMHhmMSwweDcxLDB4ZDgsMHgzMSwweDE1LAogICAgICAgICAgICAgMHgwNCwweGM3LDB4MjMsMHhjMywweDE4LDB4OTYsMHgwNSwweDlhLDB4MDcsMHgxMiwweDgwLDB4ZTIsMHhlYiwweDI3LDB4YjIsMHg3NSwKICAgICAgICAgICAgIDB4MDksMHg4MywweDJjLDB4MWEsMHgxYiwweDZlLDB4NWEsMHhhMCwweDUyLDB4M2IsMHhkNiwweGIzLDB4MjksMHhlMywweDJmLDB4ODQsCiAgICAgICAgICAgICAweDUzLDB4ZDEsMHgwMCwweGVkLDB4MjAsMHhmYywweGIxLDB4NWIsMHg2YSwweGNiLDB4YmUsMHgzOSwweDRhLDB4NGMsMHg1OCwweGNmLAogICAgICAgICAgICAgMHhkMCwweGVmLDB4YWEsMHhmYiwweDQzLDB4NGQsMHgzMywweDg1LDB4NDUsMHhmOSwweDAyLDB4N2YsMHg1MCwweDNjLDB4OWYsMHhhOCwKICAgICAgICAgICAgIDB4NTEsMHhhMywweDQwLDB4OGYsMHg5MiwweDlkLDB4MzgsMHhmNSwweGJjLDB4YjYsMHhkYSwweDIxLDB4MTAsMHhmZiwweGYzLDB4ZDIsCiAgICAgICAgICAgICAweGNkLDB4MGMsMHgxMywweGVjLDB4NWYsMHg5NywweDQ0LDB4MTcsMHhjNCwweGE3LDB4N2UsMHgzZCwweDY0LDB4NWQsMHgxOSwweDczLAogICAgICAgICAgICAgMHg2MCwweDgxLDB4NGYsMHhkYywweDIyLDB4MmEsMHg5MCwweDg4LDB4NDYsMHhlZSwweGI4LDB4MTQsMHhkZSwweDVlLDB4MGIsMHhkYiwKICAgICAgICAgICAgIDB4ZTAsMHgzMiwweDNhLDB4MGEsMHg0OSwweDA2LDB4MjQsMHg1YywweGMyLDB4ZDMsMHhhYywweDYyLDB4OTEsMHg5NSwweGU0LDB4NzksCiAgICAgICAgICAgICAweGU3LDB4YzgsMHgzNywweDZkLDB4OGQsMHhkNSwweDRlLDB4YTksMHg2YywweDU2LDB4ZjQsMHhlYSwweDY1LDB4N2EsMHhhZSwweDA4LAogICAgICAgICAgICAgMHhiYSwweDc4LDB4MjUsMHgyZSwweDFjLDB4YTYsMHhiNCwweGM2LDB4ZTgsMHhkZCwweDc0LDB4MWYsMHg0YiwweGJkLDB4OGIsMHg4YSwKICAgICAgICAgICAgIDB4NzAsMHgzZSwweGI1LDB4NjYsMHg0OCwweDAzLDB4ZjYsMHgwZSwweDYxLDB4MzUsMHg1NywweGI5LDB4ODYsMHhjMSwweDFkLDB4OWUsCiAgICAgICAgICAgICAweGUxLDB4ZjgsMHg5OCwweDExLDB4NjksMHhkOSwweDhlLDB4OTQsMHg5YiwweDFlLDB4ODcsMHhlOSwweGNlLDB4NTUsMHgyOCwweGRmLAogICAgICAgICAgICAgMHg4YywweGExLDB4ODksMHgwZCwweGJmLDB4ZTYsMHg0MiwweDY4LDB4NDEsMHg5OSwweDJkLDB4MGYsMHhiMCwweDU0LDB4YmIsMHgxNl07CgoKLy8gckNvbiBpcyBSb3VuZCBDb25zdGFudCB1c2VkIGZvciB0aGUgS2V5IEV4cGFuc2lvbiBbMXN0IGNvbCBpcyAyXihyLTEpIGluIEdGKDJeOCldIFvCpzUuMl0KQWVzLnJDb24gPSBbIFsweDAwLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDAxLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDAyLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDA0LCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDA4LCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDEwLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDIwLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDQwLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDgwLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDFiLCAweDAwLCAweDAwLCAweDAwXSwKICAgICAgICAgICAgIFsweDM2LCAweDAwLCAweDAwLCAweDAwXSBdOyAKCgovKiAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gICovCmlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IEFlczsgLy8gQ29tbW9uSnMgZXhwb3J0CmlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHsgcmV0dXJuIEFlczsgfSk7IC8vIEFNRAoKCi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi8KLyogIEFFUyBDb3VudGVyLW1vZGUgaW1wbGVtZW50YXRpb24gaW4gSmF2YVNjcmlwdCAgICAgICAoYykgQ2hyaXMgVmVuZXNzIDIwMDUtMjAxNCAvIE1JVCBMaWNlbmNlICAqLwovKiAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gICovCgovKiBqc2hpbnQgbm9kZTp0cnVlICovLyogZ2xvYmFsIGRlZmluZSwgZXNjYXBlLCB1bmVzY2FwZSwgYnRvYSwgYXRvYiAqLwondXNlIHN0cmljdCc7CmlmICh0eXBlb2YgbW9kdWxlIT0ndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgdmFyIEFlcyA9IHJlcXVpcmUoJy4vYWVzJyk7IC8vIENvbW1vbkpTIChOb2RlLmpzKQoKCi8qKgogKiBBZXMuQ3RyOiBDb3VudGVyLW1vZGUgKENUUikgd3JhcHBlciBmb3IgQUVTLgogKgogKiBUaGlzIGVuY3J5cHRzIGEgVW5pY29kZSBzdHJpbmcgdG8gcHJvZHVjZXMgYSBiYXNlNjQgY2lwaGVydGV4dCB1c2luZyAxMjgvMTkyLzI1Ni1iaXQgQUVTLAogKiBhbmQgdGhlIGNvbnZlcnNlIHRvIGRlY3J5cHQgYW4gZW5jcnlwdGVkIGNpcGhlcnRleHQuCiAqCiAqIFNlZSBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvbmlzdHB1YnMvODAwLTM4YS9zcDgwMC0zOGEucGRmCiAqCiAqIEBhdWdtZW50cyBBZXMKICovCkFlcy5DdHIgPSB7fTsKCgovKioKICogRW5jcnlwdCBhIHRleHQgdXNpbmcgQUVTIGVuY3J5cHRpb24gaW4gQ291bnRlciBtb2RlIG9mIG9wZXJhdGlvbi4KICoKICogVW5pY29kZSBtdWx0aS1ieXRlIGNoYXJhY3RlciBzYWZlCiAqCiAqIEBwYXJhbSAgIHtzdHJpbmd9IHBsYWludGV4dCAtIFNvdXJjZSB0ZXh0IHRvIGJlIGVuY3J5cHRlZC4KICogQHBhcmFtICAge3N0cmluZ30gcGFzc3dvcmQgLSBUaGUgcGFzc3dvcmQgdG8gdXNlIHRvIGdlbmVyYXRlIGEga2V5LgogKiBAcGFyYW0gICB7bnVtYmVyfSBuQml0cyAtIE51bWJlciBvZiBiaXRzIHRvIGJlIHVzZWQgaW4gdGhlIGtleTsgMTI4IC8gMTkyIC8gMjU2LgogKiBAcmV0dXJucyB7c3RyaW5nfSBFbmNyeXB0ZWQgdGV4dC4KICoKICogQGV4YW1wbGUKICogICB2YXIgZW5jciA9IEFlcy5DdHIuZW5jcnlwdCgnYmlnIHNlY3JldCcsICdwxIHFn8WhxbXFjcWZxJEnLCAyNTYpOyAvLyBlbmNyOiAnbHdHbDY2VlZ3Vk9iS0lyNm9mOEhWcUpyJwogKi8KQWVzLkN0ci5lbmNyeXB0ID0gZnVuY3Rpb24ocGxhaW50ZXh0LCBwYXNzd29yZCwgbkJpdHMpIHsKICAgIHZhciBibG9ja1NpemUgPSAxNjsgIC8vIGJsb2NrIHNpemUgZml4ZWQgYXQgMTYgYnl0ZXMgLyAxMjggYml0cyAoTmI9NCkgZm9yIEFFUwogICAgaWYgKCEobkJpdHM9PTEyOCB8fCBuQml0cz09MTkyIHx8IG5CaXRzPT0yNTYpKSByZXR1cm4gJyc7IC8vIHN0YW5kYXJkIGFsbG93cyAxMjgvMTkyLzI1NiBiaXQga2V5cwogICAgcGxhaW50ZXh0ID0gU3RyaW5nKHBsYWludGV4dCkudXRmOEVuY29kZSgpOwogICAgcGFzc3dvcmQgPSBTdHJpbmcocGFzc3dvcmQpLnV0ZjhFbmNvZGUoKTsKCiAgICAvLyB1c2UgQUVTIGl0c2VsZiB0byBlbmNyeXB0IHBhc3N3b3JkIHRvIGdldCBjaXBoZXIga2V5ICh1c2luZyBwbGFpbiBwYXNzd29yZCBhcyBzb3VyY2UgZm9yIGtleQogICAgLy8gZXhwYW5zaW9uKSAtIGdpdmVzIHVzIHdlbGwgZW5jcnlwdGVkIGtleSAodGhvdWdoIGhhc2hlZCBrZXkgbWlnaHQgYmUgcHJlZmVycmVkIGZvciBwcm9kJ24gdXNlKQogICAgdmFyIG5CeXRlcyA9IG5CaXRzLzg7ICAvLyBubyBieXRlcyBpbiBrZXkgKDE2LzI0LzMyKQogICAgdmFyIHB3Qnl0ZXMgPSBuZXcgQXJyYXkobkJ5dGVzKTsKICAgIGZvciAodmFyIGk9MDsgaTxuQnl0ZXM7IGkrKykgeyAgLy8gdXNlIDFzdCAxNi8yNC8zMiBjaGFycyBvZiBwYXNzd29yZCBmb3Iga2V5CiAgICAgICAgcHdCeXRlc1tpXSA9IGlzTmFOKHBhc3N3b3JkLmNoYXJDb2RlQXQoaSkpID8gMCA6IHBhc3N3b3JkLmNoYXJDb2RlQXQoaSk7CiAgICB9CiAgICB2YXIga2V5ID0gQWVzLmNpcGhlcihwd0J5dGVzLCBBZXMua2V5RXhwYW5zaW9uKHB3Qnl0ZXMpKTsgLy8gZ2l2ZXMgdXMgMTYtYnl0ZSBrZXkKICAgIGtleSA9IGtleS5jb25jYXQoa2V5LnNsaWNlKDAsIG5CeXRlcy0xNikpOyAgLy8gZXhwYW5kIGtleSB0byAxNi8yNC8zMiBieXRlcyBsb25nCgogICAgLy8gaW5pdGlhbGlzZSAxc3QgOCBieXRlcyBvZiBjb3VudGVyIGJsb2NrIHdpdGggbm9uY2UgKE5JU1QgU1A4MDAtMzhBIMKnQi4yKTogWzAtMV0gPSBtaWxsaXNlYywKICAgIC8vIFsyLTNdID0gcmFuZG9tLCBbNC03XSA9IHNlY29uZHMsIHRvZ2V0aGVyIGdpdmluZyBmdWxsIHN1Yi1taWxsaXNlYyB1bmlxdWVuZXNzIHVwIHRvIEZlYiAyMTA2CiAgICB2YXIgY291bnRlckJsb2NrID0gbmV3IEFycmF5KGJsb2NrU2l6ZSk7CgogICAgdmFyIG5vbmNlID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTsgIC8vIHRpbWVzdGFtcDogbWlsbGlzZWNvbmRzIHNpbmNlIDEtSmFuLTE5NzAKICAgIHZhciBub25jZU1zID0gbm9uY2UlMTAwMDsKICAgIHZhciBub25jZVNlYyA9IE1hdGguZmxvb3Iobm9uY2UvMTAwMCk7CiAgICB2YXIgbm9uY2VSbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMHhmZmZmKTsKICAgIC8vIGZvciBkZWJ1Z2dpbmc6IG5vbmNlID0gbm9uY2VNcyA9IG5vbmNlU2VjID0gbm9uY2VSbmQgPSAwOwoKICAgIGZvciAodmFyIGk9MDsgaTwyOyBpKyspIGNvdW50ZXJCbG9ja1tpXSAgID0gKG5vbmNlTXMgID4+PiBpKjgpICYgMHhmZjsKICAgIGZvciAodmFyIGk9MDsgaTwyOyBpKyspIGNvdW50ZXJCbG9ja1tpKzJdID0gKG5vbmNlUm5kID4+PiBpKjgpICYgMHhmZjsKICAgIGZvciAodmFyIGk9MDsgaTw0OyBpKyspIGNvdW50ZXJCbG9ja1tpKzRdID0gKG5vbmNlU2VjID4+PiBpKjgpICYgMHhmZjsKCiAgICAvLyBhbmQgY29udmVydCBpdCB0byBhIHN0cmluZyB0byBnbyBvbiB0aGUgZnJvbnQgb2YgdGhlIGNpcGhlcnRleHQKICAgIHZhciBjdHJUeHQgPSAnJzsKICAgIGZvciAodmFyIGk9MDsgaTw4OyBpKyspIGN0clR4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvdW50ZXJCbG9ja1tpXSk7CgogICAgLy8gZ2VuZXJhdGUga2V5IHNjaGVkdWxlIC0gYW4gZXhwYW5zaW9uIG9mIHRoZSBrZXkgaW50byBkaXN0aW5jdCBLZXkgUm91bmRzIGZvciBlYWNoIHJvdW5kCiAgICB2YXIga2V5U2NoZWR1bGUgPSBBZXMua2V5RXhwYW5zaW9uKGtleSk7CgogICAgdmFyIGJsb2NrQ291bnQgPSBNYXRoLmNlaWwocGxhaW50ZXh0Lmxlbmd0aC9ibG9ja1NpemUpOwogICAgdmFyIGNpcGhlcnR4dCA9IG5ldyBBcnJheShibG9ja0NvdW50KTsgIC8vIGNpcGhlcnRleHQgYXMgYXJyYXkgb2Ygc3RyaW5ncwoKICAgIGZvciAodmFyIGI9MDsgYjxibG9ja0NvdW50OyBiKyspIHsKICAgICAgICAvLyBzZXQgY291bnRlciAoYmxvY2sgIykgaW4gbGFzdCA4IGJ5dGVzIG9mIGNvdW50ZXIgYmxvY2sgKGxlYXZpbmcgbm9uY2UgaW4gMXN0IDggYnl0ZXMpCiAgICAgICAgLy8gZG9uZSBpbiB0d28gc3RhZ2VzIGZvciAzMi1iaXQgb3BzOiB1c2luZyB0d28gd29yZHMgYWxsb3dzIHVzIHRvIGdvIHBhc3QgMl4zMiBibG9ja3MgKDY4R0IpCiAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykgY291bnRlckJsb2NrWzE1LWNdID0gKGIgPj4+IGMqOCkgJiAweGZmOwogICAgICAgIGZvciAodmFyIGM9MDsgYzw0OyBjKyspIGNvdW50ZXJCbG9ja1sxNS1jLTRdID0gKGIvMHgxMDAwMDAwMDAgPj4+IGMqOCk7CgogICAgICAgIHZhciBjaXBoZXJDbnRyID0gQWVzLmNpcGhlcihjb3VudGVyQmxvY2ssIGtleVNjaGVkdWxlKTsgIC8vIC0tIGVuY3J5cHQgY291bnRlciBibG9jayAtLQoKICAgICAgICAvLyBibG9jayBzaXplIGlzIHJlZHVjZWQgb24gZmluYWwgYmxvY2sKICAgICAgICB2YXIgYmxvY2tMZW5ndGggPSBiPGJsb2NrQ291bnQtMSA/IGJsb2NrU2l6ZSA6IChwbGFpbnRleHQubGVuZ3RoLTEpJWJsb2NrU2l6ZSsxOwogICAgICAgIHZhciBjaXBoZXJDaGFyID0gbmV3IEFycmF5KGJsb2NrTGVuZ3RoKTsKCiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGJsb2NrTGVuZ3RoOyBpKyspIHsgIC8vIC0tIHhvciBwbGFpbnRleHQgd2l0aCBjaXBoZXJlZCBjb3VudGVyIGNoYXItYnktY2hhciAtLQogICAgICAgICAgICBjaXBoZXJDaGFyW2ldID0gY2lwaGVyQ250cltpXSBeIHBsYWludGV4dC5jaGFyQ29kZUF0KGIqYmxvY2tTaXplK2kpOwogICAgICAgICAgICBjaXBoZXJDaGFyW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZShjaXBoZXJDaGFyW2ldKTsKICAgICAgICB9CiAgICAgICAgY2lwaGVydHh0W2JdID0gY2lwaGVyQ2hhci5qb2luKCcnKTsKICAgIH0KCiAgICAvLyB1c2UgQXJyYXkuam9pbigpIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgdGhhbiByZXBlYXRlZCBzdHJpbmcgYXBwZW5kcwogICAgdmFyIGNpcGhlcnRleHQgPSBjdHJUeHQgKyBjaXBoZXJ0eHQuam9pbignJyk7CiAgICBjaXBoZXJ0ZXh0ID0gY2lwaGVydGV4dC5iYXNlNjRFbmNvZGUoKTsKCiAgICByZXR1cm4gY2lwaGVydGV4dDsKfTsKCgovKioKICogRGVjcnlwdCBhIHRleHQgZW5jcnlwdGVkIGJ5IEFFUyBpbiBjb3VudGVyIG1vZGUgb2Ygb3BlcmF0aW9uCiAqCiAqIEBwYXJhbSAgIHtzdHJpbmd9IGNpcGhlcnRleHQgLSBTb3VyY2UgdGV4dCB0byBiZSBlbmNyeXB0ZWQuCiAqIEBwYXJhbSAgIHtzdHJpbmd9IHBhc3N3b3JkIC0gUGFzc3dvcmQgdG8gdXNlIHRvIGdlbmVyYXRlIGEga2V5LgogKiBAcGFyYW0gICB7bnVtYmVyfSBuQml0cyAtIE51bWJlciBvZiBiaXRzIHRvIGJlIHVzZWQgaW4gdGhlIGtleTsgMTI4IC8gMTkyIC8gMjU2LgogKiBAcmV0dXJucyB7c3RyaW5nfSBEZWNyeXB0ZWQgdGV4dAogKgogKiBAZXhhbXBsZQogKiAgIHZhciBkZWNyID0gQWVzLkN0ci5lbmNyeXB0KCdsd0dsNjZWVndWT2JLSXI2b2Y4SFZxSnInLCAncMSBxZ/FocW1xY3FmcSRJywgMjU2KTsgLy8gZGVjcjogJ2JpZyBzZWNyZXQnCiAqLwpBZXMuQ3RyLmRlY3J5cHQgPSBmdW5jdGlvbihjaXBoZXJ0ZXh0LCBwYXNzd29yZCwgbkJpdHMpIHsKICAgIHZhciBibG9ja1NpemUgPSAxNjsgIC8vIGJsb2NrIHNpemUgZml4ZWQgYXQgMTYgYnl0ZXMgLyAxMjggYml0cyAoTmI9NCkgZm9yIEFFUwogICAgaWYgKCEobkJpdHM9PTEyOCB8fCBuQml0cz09MTkyIHx8IG5CaXRzPT0yNTYpKSByZXR1cm4gJyc7IC8vIHN0YW5kYXJkIGFsbG93cyAxMjgvMTkyLzI1NiBiaXQga2V5cwogICAgY2lwaGVydGV4dCA9IFN0cmluZyhjaXBoZXJ0ZXh0KS5iYXNlNjREZWNvZGUoKTsKICAgIHBhc3N3b3JkID0gU3RyaW5nKHBhc3N3b3JkKS51dGY4RW5jb2RlKCk7CgogICAgLy8gdXNlIEFFUyB0byBlbmNyeXB0IHBhc3N3b3JkIChtaXJyb3JpbmcgZW5jcnlwdCByb3V0aW5lKQogICAgdmFyIG5CeXRlcyA9IG5CaXRzLzg7ICAvLyBubyBieXRlcyBpbiBrZXkKICAgIHZhciBwd0J5dGVzID0gbmV3IEFycmF5KG5CeXRlcyk7CiAgICBmb3IgKHZhciBpPTA7IGk8bkJ5dGVzOyBpKyspIHsKICAgICAgICBwd0J5dGVzW2ldID0gaXNOYU4ocGFzc3dvcmQuY2hhckNvZGVBdChpKSkgPyAwIDogcGFzc3dvcmQuY2hhckNvZGVBdChpKTsKICAgIH0KICAgIHZhciBrZXkgPSBBZXMuY2lwaGVyKHB3Qnl0ZXMsIEFlcy5rZXlFeHBhbnNpb24ocHdCeXRlcykpOwogICAga2V5ID0ga2V5LmNvbmNhdChrZXkuc2xpY2UoMCwgbkJ5dGVzLTE2KSk7ICAvLyBleHBhbmQga2V5IHRvIDE2LzI0LzMyIGJ5dGVzIGxvbmcKCiAgICAvLyByZWNvdmVyIG5vbmNlIGZyb20gMXN0IDggYnl0ZXMgb2YgY2lwaGVydGV4dAogICAgdmFyIGNvdW50ZXJCbG9jayA9IG5ldyBBcnJheSg4KTsKICAgIHZhciBjdHJUeHQgPSBjaXBoZXJ0ZXh0LnNsaWNlKDAsIDgpOwogICAgZm9yICh2YXIgaT0wOyBpPDg7IGkrKykgY291bnRlckJsb2NrW2ldID0gY3RyVHh0LmNoYXJDb2RlQXQoaSk7CgogICAgLy8gZ2VuZXJhdGUga2V5IHNjaGVkdWxlCiAgICB2YXIga2V5U2NoZWR1bGUgPSBBZXMua2V5RXhwYW5zaW9uKGtleSk7CgogICAgLy8gc2VwYXJhdGUgY2lwaGVydGV4dCBpbnRvIGJsb2NrcyAoc2tpcHBpbmcgcGFzdCBpbml0aWFsIDggYnl0ZXMpCiAgICB2YXIgbkJsb2NrcyA9IE1hdGguY2VpbCgoY2lwaGVydGV4dC5sZW5ndGgtOCkgLyBibG9ja1NpemUpOwogICAgdmFyIGN0ID0gbmV3IEFycmF5KG5CbG9ja3MpOwogICAgZm9yICh2YXIgYj0wOyBiPG5CbG9ja3M7IGIrKykgY3RbYl0gPSBjaXBoZXJ0ZXh0LnNsaWNlKDgrYipibG9ja1NpemUsIDgrYipibG9ja1NpemUrYmxvY2tTaXplKTsKICAgIGNpcGhlcnRleHQgPSBjdDsgIC8vIGNpcGhlcnRleHQgaXMgbm93IGFycmF5IG9mIGJsb2NrLWxlbmd0aCBzdHJpbmdzCgogICAgLy8gcGxhaW50ZXh0IHdpbGwgZ2V0IGdlbmVyYXRlZCBibG9jay1ieS1ibG9jayBpbnRvIGFycmF5IG9mIGJsb2NrLWxlbmd0aCBzdHJpbmdzCiAgICB2YXIgcGxhaW50eHQgPSBuZXcgQXJyYXkoY2lwaGVydGV4dC5sZW5ndGgpOwoKICAgIGZvciAodmFyIGI9MDsgYjxuQmxvY2tzOyBiKyspIHsKICAgICAgICAvLyBzZXQgY291bnRlciAoYmxvY2sgIykgaW4gbGFzdCA4IGJ5dGVzIG9mIGNvdW50ZXIgYmxvY2sgKGxlYXZpbmcgbm9uY2UgaW4gMXN0IDggYnl0ZXMpCiAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykgY291bnRlckJsb2NrWzE1LWNdID0gKChiKSA+Pj4gYyo4KSAmIDB4ZmY7CiAgICAgICAgZm9yICh2YXIgYz0wOyBjPDQ7IGMrKykgY291bnRlckJsb2NrWzE1LWMtNF0gPSAoKChiKzEpLzB4MTAwMDAwMDAwLTEpID4+PiBjKjgpICYgMHhmZjsKCiAgICAgICAgdmFyIGNpcGhlckNudHIgPSBBZXMuY2lwaGVyKGNvdW50ZXJCbG9jaywga2V5U2NoZWR1bGUpOyAgLy8gZW5jcnlwdCBjb3VudGVyIGJsb2NrCgogICAgICAgIHZhciBwbGFpbnR4dEJ5dGUgPSBuZXcgQXJyYXkoY2lwaGVydGV4dFtiXS5sZW5ndGgpOwogICAgICAgIGZvciAodmFyIGk9MDsgaTxjaXBoZXJ0ZXh0W2JdLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIC8vIC0tIHhvciBwbGFpbnR4dCB3aXRoIGNpcGhlcmVkIGNvdW50ZXIgYnl0ZS1ieS1ieXRlIC0tCiAgICAgICAgICAgIHBsYWludHh0Qnl0ZVtpXSA9IGNpcGhlckNudHJbaV0gXiBjaXBoZXJ0ZXh0W2JdLmNoYXJDb2RlQXQoaSk7CiAgICAgICAgICAgIHBsYWludHh0Qnl0ZVtpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUocGxhaW50eHRCeXRlW2ldKTsKICAgICAgICB9CiAgICAgICAgcGxhaW50eHRbYl0gPSBwbGFpbnR4dEJ5dGUuam9pbignJyk7CiAgICB9CgogICAgLy8gam9pbiBhcnJheSBvZiBibG9ja3MgaW50byBzaW5nbGUgcGxhaW50ZXh0IHN0cmluZwogICAgdmFyIHBsYWludGV4dCA9IHBsYWludHh0LmpvaW4oJycpOwogICAgcGxhaW50ZXh0ID0gcGxhaW50ZXh0LnV0ZjhEZWNvZGUoKTsgIC8vIGRlY29kZSBmcm9tIFVURjggYmFjayB0byBVbmljb2RlIG11bHRpLWJ5dGUgY2hhcnMKCiAgICByZXR1cm4gcGxhaW50ZXh0Owp9OwoKCi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi8KCgovKiogRXh0ZW5kIFN0cmluZyBvYmplY3Qgd2l0aCBtZXRob2QgdG8gZW5jb2RlIG11bHRpLWJ5dGUgc3RyaW5nIHRvIHV0ZjgKICogIC0gbW9uc3VyLmhvc3NhLmluLzIwMTIvMDcvMjAvdXRmLTgtaW4tamF2YXNjcmlwdC5odG1sICovCmlmICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS51dGY4RW5jb2RlID09ICd1bmRlZmluZWQnKSB7CiAgICBTdHJpbmcucHJvdG90eXBlLnV0ZjhFbmNvZGUgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdW5lc2NhcGUoIGVuY29kZVVSSUNvbXBvbmVudCggdGhpcyApICk7CiAgICB9Owp9CgovKiogRXh0ZW5kIFN0cmluZyBvYmplY3Qgd2l0aCBtZXRob2QgdG8gZGVjb2RlIHV0Zjggc3RyaW5nIHRvIG11bHRpLWJ5dGUgKi8KaWYgKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnV0ZjhEZWNvZGUgPT0gJ3VuZGVmaW5lZCcpIHsKICAgIFN0cmluZy5wcm90b3R5cGUudXRmOERlY29kZSA9IGZ1bmN0aW9uKCkgewogICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoIGVzY2FwZSggdGhpcyApICk7CiAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICByZXR1cm4gdGhpczsgLy8gaW52YWxpZCBVVEYtOD8gcmV0dXJuIGFzLWlzCiAgICAgICAgfQogICAgfTsKfQoKCi8qKiBFeHRlbmQgU3RyaW5nIG9iamVjdCB3aXRoIG1ldGhvZCB0byBlbmNvZGUgYmFzZTY0CiAqICAtIGRldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93LmJ0b2EsIG5vZGVqcy5vcmcvYXBpL2J1ZmZlci5odG1sCiAqICBub3RlOiBpZiBidG9hKCkvYXRvYigpIGFyZSBub3QgYXZhaWxhYmxlIChlZyBJRTktKSwgdHJ5IGdpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanMgKi8KaWYgKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLmJhc2U2NEVuY29kZSA9PSAndW5kZWZpbmVkJykgewogICAgU3RyaW5nLnByb3RvdHlwZS5iYXNlNjRFbmNvZGUgPSBmdW5jdGlvbigpIHsKICAgICAgICBpZiAodHlwZW9mIGJ0b2EgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiBidG9hKHRoaXMpOyAvLyBicm93c2VyCiAgICAgICAgaWYgKHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiBuZXcgQnVmZmVyKHRoaXMsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpOyAvLyBOb2RlLmpzCiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBCYXNlNjQgRW5jb2RlJyk7CiAgICB9Owp9CgovKiogRXh0ZW5kIFN0cmluZyBvYmplY3Qgd2l0aCBtZXRob2QgdG8gZGVjb2RlIGJhc2U2NCAqLwppZiAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUuYmFzZTY0RGVjb2RlID09ICd1bmRlZmluZWQnKSB7CiAgICBTdHJpbmcucHJvdG90eXBlLmJhc2U2NERlY29kZSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGlmICh0eXBlb2YgYXRvYiAhPSAndW5kZWZpbmVkJykgcmV0dXJuIGF0b2IodGhpcyk7IC8vIGJyb3dzZXIKICAgICAgICBpZiAodHlwZW9mIEJ1ZmZlciAhPSAndW5kZWZpbmVkJykgcmV0dXJuIG5ldyBCdWZmZXIodGhpcywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGY4Jyk7IC8vIE5vZGUuanMKICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIEJhc2U2NCBEZWNvZGUnKTsKICAgIH07Cn0KCi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi8KaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gQWVzLkN0cjsgLy8gQ29tbW9uSnMgZXhwb3J0CmlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKFsnQWVzJ10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gQWVzLkN0cjsgfSk7IC8vIEFNRAoKCi8qIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAgKi8KLyogIEVuY3J5cHQvZGVjcnlwdCBmaWxlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqLwovKiAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gICovCgpmdW5jdGlvbiBlbmNyeXB0RmlsZShmaWxlKSB7CiAgICAvLyB1c2UgRmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciB0byBoYW5kbGUgYmluYXJ5IGZpbGVzCiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTsKICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldnQpIHsKICAgICAgICAkKCdib2R5JykuY3NzKHsnY3Vyc29yJzond2FpdCd9KTsKCiAgICAgICAgLy8gQWVzLkN0ci5lbmNyeXB0IGV4cGVjdHMgYSBzdHJpbmcsIGJ1dCBjb252ZXJ0aW5nIGJpbmFyeSBmaWxlIGRpcmVjdGx5IHRvIHN0cmluZyBjb3VsZAogICAgICAgIC8vIGdpdmUgaW52YWxpZCBVbmljb2RlIHNlcXVlbmNlcywgc28gY29udmVydCBieXRlc3RyZWFtIEFycmF5QnVmZmVyIHRvIHNpbmdsZS1ieXRlIGNoYXJzCiAgICAgICAgdmFyIGNvbnRlbnRCeXRlcyA9IG5ldyBVaW50OEFycmF5KHJlYWRlci5yZXN1bHQpOyAvLyDiiaEgZXZ0LnRhcmdldC5yZXN1bHQKICAgICAgICB2YXIgY29udGVudFN0ciA9ICcnOwogICAgICAgIGZvciAodmFyIGk9MDsgaTxjb250ZW50Qnl0ZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgY29udGVudFN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbnRlbnRCeXRlc1tpXSk7CiAgICAgICAgfQoKICAgICAgICB2YXIgcGFzc3dvcmQgPSAkKCcjcGFzc3dvcmQtZmlsZScpLnZhbCgpOwoKICAgICAgICB2YXIgdDEgPSBuZXcgRGF0ZSgpOwogICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gQWVzLkN0ci5lbmNyeXB0KGNvbnRlbnRTdHIsIHBhc3N3b3JkLCAyNTYpOwogICAgICAgIHZhciB0MiA9IG5ldyBEYXRlKCk7CgogICAgICAgIC8vIHVzZSBCbG9iIHRvIHNhdmUgZW5jcnlwdGVkIGZpbGUKICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtjaXBoZXJ0ZXh0XSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7CiAgICAgICAgdmFyIGZpbGVuYW1lID0gZmlsZS5uYW1lKycuZW5jcnlwdGVkJzsKICAgICAgICBzYXZlQXMoYmxvYiwgZmlsZW5hbWUpOwoKICAgICAgICAkKCcjZW5jcnlwdC1maWxlLXRpbWUnKS5odG1sKCgodDIgLSB0MSkvMTAwMCkrJ3MnKTsgLy8gZGlzcGxheSB0aW1lIHRha2VuCiAgICAgICAgJCgnYm9keScpLmNzcyh7J2N1cnNvcic6J2RlZmF1bHQnfSk7CiAgICB9Cn0KCmZ1bmN0aW9uIGRlY3J5cHRGaWxlKGZpbGUpIHsKICAgIC8vIHVzZSBGaWxlUmVhZGVyLlJlYWRBc1RleHQgdG8gcmVhZCAoYmFzZTY0LWVuY29kZWQpIGNpcGhlcnRleHQgZmlsZQogICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTsKICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldnQpIHsKICAgICAgICAkKCdib2R5JykuY3NzKHsnY3Vyc29yJzond2FpdCd9KTsKCiAgICAgICAgdmFyIGNvbnRlbnQgPSByZWFkZXIucmVzdWx0OyAvLyDiiaEgZXZ0LnRhcmdldC5yZXN1bHQKICAgICAgICB2YXIgcGFzc3dvcmQgPSAkKCcjcGFzc3dvcmQtZmlsZScpLnZhbCgpOwoKICAgICAgICB2YXIgdDEgPSBuZXcgRGF0ZSgpOwogICAgICAgIHZhciBwbGFpbnRleHQgPSBBZXMuQ3RyLmRlY3J5cHQoY29udGVudCwgcGFzc3dvcmQsIDI1Nik7CiAgICAgICAgdmFyIHQyID0gbmV3IERhdGUoKTsKCiAgICAgICAgLy8gY29udmVydCBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXIgc3RyZWFtIHRvIEFycmF5QnVmZmVyIGJ5dGVzdHJlYW0KICAgICAgICB2YXIgY29udGVudEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkocGxhaW50ZXh0Lmxlbmd0aCk7CiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHBsYWludGV4dC5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBjb250ZW50Qnl0ZXNbaV0gPSBwbGFpbnRleHQuY2hhckNvZGVBdChpKTsKICAgICAgICB9CgogICAgICAgIC8vIHVzZSBCbG9iIHRvIHNhdmUgZGVjcnlwdGVkIGZpbGUKICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50Qnl0ZXNdLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nIH0pOwogICAgICAgIHZhciBmaWxlbmFtZSA9IGZpbGUubmFtZS5yZXBsYWNlKC9cLmVuY3J5cHRlZCQvLCcnKSsnLmRlY3J5cHRlZCc7CiAgICAgICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lKTsKCiAgICAgICAgJCgnI2RlY3J5cHQtZmlsZS10aW1lJykuaHRtbCgoKHQyIC0gdDEpLzEwMDApKydzJyk7IC8vIGRpc3BsYXkgdGltZSB0YWtlbgogICAgICAgICQoJ2JvZHknKS5jc3MoeydjdXJzb3InOidkZWZhdWx0J30pOwogICAgfQp9CgoKCgovKiAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gICovCi8qICBFbmNyeXB0L2RlY3J5cHQgZmlsZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi8KLyogLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtIC0gLSAtICAqLwoKZnVuY3Rpb24gZW5jcnlwdEZpbGUoZmlsZSkgewogICAgLy8gdXNlIEZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIgdG8gaGFuZGxlIGJpbmFyeSBmaWxlcwogICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7CiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZ0KSB7CiAgICAgICAgJCgnYm9keScpLmNzcyh7J2N1cnNvcic6J3dhaXQnfSk7CgogICAgICAgIC8vIEFlcy5DdHIuZW5jcnlwdCBleHBlY3RzIGEgc3RyaW5nLCBidXQgY29udmVydGluZyBiaW5hcnkgZmlsZSBkaXJlY3RseSB0byBzdHJpbmcgY291bGQKICAgICAgICAvLyBnaXZlIGludmFsaWQgVW5pY29kZSBzZXF1ZW5jZXMsIHNvIGNvbnZlcnQgYnl0ZXN0cmVhbSBBcnJheUJ1ZmZlciB0byBzaW5nbGUtYnl0ZSBjaGFycwogICAgICAgIHZhciBjb250ZW50Qnl0ZXMgPSBuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0KTsgLy8g4omhIGV2dC50YXJnZXQucmVzdWx0CiAgICAgICAgdmFyIGNvbnRlbnRTdHIgPSAnJzsKICAgICAgICBmb3IgKHZhciBpPTA7IGk8Y29udGVudEJ5dGVzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGNvbnRlbnRTdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb250ZW50Qnl0ZXNbaV0pOwogICAgICAgIH0KCiAgICAgICAgdmFyIHBhc3N3b3JkID0gJCgnI3Bhc3N3b3JkLWZpbGUnKS52YWwoKTsKCiAgICAgICAgdmFyIHQxID0gbmV3IERhdGUoKTsKICAgICAgICB2YXIgY2lwaGVydGV4dCA9IEFlcy5DdHIuZW5jcnlwdChjb250ZW50U3RyLCBwYXNzd29yZCwgMjU2KTsKICAgICAgICB2YXIgdDIgPSBuZXcgRGF0ZSgpOwoKICAgICAgICAvLyB1c2UgQmxvYiB0byBzYXZlIGVuY3J5cHRlZCBmaWxlCiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY2lwaGVydGV4dF0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pOwogICAgICAgIHZhciBmaWxlbmFtZSA9IGZpbGUubmFtZSsnLmVuY3J5cHRlZCc7CiAgICAgICAgc2F2ZUFzKGJsb2IsIGZpbGVuYW1lKTsKCiAgICAgICAgJCgnI2VuY3J5cHQtZmlsZS10aW1lJykuaHRtbCgoKHQyIC0gdDEpLzEwMDApKydzJyk7IC8vIGRpc3BsYXkgdGltZSB0YWtlbgogICAgICAgICQoJ2JvZHknKS5jc3MoeydjdXJzb3InOidkZWZhdWx0J30pOwogICAgfQp9CgpmdW5jdGlvbiBkZWNyeXB0RmlsZShmaWxlKSB7CiAgICAvLyB1c2UgRmlsZVJlYWRlci5SZWFkQXNUZXh0IHRvIHJlYWQgKGJhc2U2NC1lbmNvZGVkKSBjaXBoZXJ0ZXh0IGZpbGUKICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOwogICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7CiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZ0KSB7CiAgICAgICAgJCgnYm9keScpLmNzcyh7J2N1cnNvcic6J3dhaXQnfSk7CgogICAgICAgIHZhciBjb250ZW50ID0gcmVhZGVyLnJlc3VsdDsgLy8g4omhIGV2dC50YXJnZXQucmVzdWx0CiAgICAgICAgdmFyIHBhc3N3b3JkID0gJCgnI3Bhc3N3b3JkLWZpbGUnKS52YWwoKTsKCiAgICAgICAgdmFyIHQxID0gbmV3IERhdGUoKTsKICAgICAgICB2YXIgcGxhaW50ZXh0ID0gQWVzLkN0ci5kZWNyeXB0KGNvbnRlbnQsIHBhc3N3b3JkLCAyNTYpOwogICAgICAgIHZhciB0MiA9IG5ldyBEYXRlKCk7CgogICAgICAgIC8vIGNvbnZlcnQgc2luZ2xlLWJ5dGUgY2hhcmFjdGVyIHN0cmVhbSB0byBBcnJheUJ1ZmZlciBieXRlc3RyZWFtCiAgICAgICAgdmFyIGNvbnRlbnRCeXRlcyA9IG5ldyBVaW50OEFycmF5KHBsYWludGV4dC5sZW5ndGgpOwogICAgICAgIGZvciAodmFyIGk9MDsgaTxwbGFpbnRleHQubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgY29udGVudEJ5dGVzW2ldID0gcGxhaW50ZXh0LmNoYXJDb2RlQXQoaSk7CiAgICAgICAgfQoKICAgICAgICAvLyB1c2UgQmxvYiB0byBzYXZlIGRlY3J5cHRlZCBmaWxlCiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbY29udGVudEJ5dGVzXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB9KTsKICAgICAgICB2YXIgZmlsZW5hbWUgPSBmaWxlLm5hbWUucmVwbGFjZSgvXC5lbmNyeXB0ZWQkLywnJykrJy5kZWNyeXB0ZWQnOwogICAgICAgIHNhdmVBcyhibG9iLCBmaWxlbmFtZSk7CgogICAgICAgICQoJyNkZWNyeXB0LWZpbGUtdGltZScpLmh0bWwoKCh0MiAtIHQxKS8xMDAwKSsncycpOyAvLyBkaXNwbGF5IHRpbWUgdGFrZW4KICAgICAgICAkKCdib2R5JykuY3NzKHsnY3Vyc29yJzonZGVmYXVsdCd9KTsKICAgIH0KfQ==`;
  /* DOCUMENTATION FOR MYSELF */
  /*

  {
    value: 'hello'
  }

  */
  const stageVariables = [{
    value: 0
  }];
  const stageVariablesDisplay = ['my variable'];
	class SGCUtilsOLD {
		getInfo() {
			return {
				id: 'SGCUtilsOLD',
				name: 'SGC Utilities | 1.0',
        docsURI: 'https://docs.turbowarp.org/development/extensions/docsURI-demo',
				color1: '#9D8CA1', // block color
				color2: '#9993B2', // border+dropdown color
				color3: '#81717A', // input color
				blocks: [{
						opcode: 'doAES',
						blockType: Scratch.BlockType.REPORTER,
						text: '(AES) [mode] [data] with password: [pwd] and [bytes] bytes.',
						arguments: {
							mode: {
								type: Scratch.ArgumentType.STRING,
								menu: 'cryptmodes'
							},
							pwd: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'password'
							},
							data: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'Hello, World!'
							},
							bytes: {
								type: Scratch.ArgumentType.STRING,
								menu: 'aesbytes'
							}
						}
					},
					{
						opcode: 'doRSA',
						blockType: Scratch.BlockType.REPORTER,
						text: '(RSA) [mode] [data] with key: [key].',
						arguments: {
							mode: {
								type: Scratch.ArgumentType.STRING,
								menu: 'cryptmodes'
							},
							key: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: ''
							},
							data: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'Hello, World!'
							}
						}
					},
					{
						opcode: 'hashMe',
						blockType: Scratch.BlockType.REPORTER,
						text: 'hash [value] with [hash]',
						arguments: {
							hash: {
								type: Scratch.ArgumentType.STRING,
								menu: 'hashes'
							},
							value: {
								type: Scratch.ArgumentType.STRING
							}
						}
					},
					{
						opcode: 'encoder',
						blockType: Scratch.BlockType.REPORTER,
						text: '[mode] [value] with [encoding]',
						arguments: {
							encoding: {
								type: Scratch.ArgumentType.STRING,
								menu: 'encodings'
							},
							value: {
								type: Scratch.ArgumentType.STRING
							},
							mode: {
								type: Scratch.ArgumentType.STRING,
								menu: 'recodes'
							}
						}
					},
					'---',
					{
						opcode: 'pwrOf',
						blockType: Scratch.BlockType.REPORTER,
						text: '[base] ^ [n]',
						arguments: {
							base: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 2
							},
							n: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: 3
							}
						}
					},
					{
						opcode: 'strictEqual',
						blockType: Scratch.BlockType.BOOLEAN,
						text: '[str1] === [str2]',
						arguments: {
							str1: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'Hello'
							},
							str2: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'hello'
							}
						}
					},
					{
						opcode: 'boolCoupler',
						blockType: Scratch.BlockType.BOOLEAN,
						text: '[value]',
						arguments: {
							value: {
								type: Scratch.ArgumentType.STRING,
								menu: 'bools',
								defaultValue: true
							}
						}
					},
          {
            opcode: 'newline',
            blockType: Scratch.BlockType.REPORTER,
            text: 'newline',
            disableMonitor: true
          },
					{
						opcode: 'ifString',
						blockType: Scratch.BlockType.REPORTER,
						text: 'if [bool] then [true] else [false]',
						arguments: {
							bool: {
								type: Scratch.ArgumentType.BOOLEAN,
							},
							true: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'true'
							},
							false: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'false'
							}
						}
					},
					'---',
					{
						opcode: 'getLSitem',
						blockType: Scratch.BlockType.REPORTER,
						text: '(LocalStorage) Get [name]',
						arguments: {
							name: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'hello'
							}
						}
					},
					{
						opcode: 'setLSitem',
						blockType: Scratch.BlockType.COMMAND,
						text: '(LocalStorage) Set [name] to [value]',
						arguments: {
							name: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'hello'
							},
							value: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'world'
							}
						}
					},
					{
						opcode: 'removeLSitem',
						blockType: Scratch.BlockType.COMMAND,
						text: '(LocalStorage) Remove [name]',
						arguments: {
							name: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'hello'
							}
						}
					},
          '---',
          {
            opcode: 'linkopen',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [url] with [target] as target',
            arguments: {
              url: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://turbowarp.org'
              },
              target: {
                type: Scratch.ArgumentType.STRING,
                menu: 'opentargets',
                defaultValue: '_self'
              }
            }
          },
					'---',
          {
            hideFromPalette: true,
            opcode: 'stageNewVariable',
            blockType: Scratch.BlockType.COMMAND,
            text: 'create new stage-variable [sVar]',
            arguments: {
              sVar: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'my variable2'
              }
            }
          },
          {
            hideFromPalette: true,
            opcode: 'stageSetVariable',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set [sVar] to [value]',
            arguments: {
              sVar: {
                type: Scratch.ArgumentType.STRING,
                menu: 'stageVars',
                defaultValue: 'my variable'
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ''
              }
            }
          },
          '---',
					{
						opcode: 'deleteSpriteNoConfirm',
						blockType: Scratch.BlockType.COMMAND,
						text: '(ShovelUtils) Delete sprite [SPRITE] | No Confirmation',
						arguments: {
							SPRITE: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'Sprite1',
							}
						}
					},
					'---',
					{
						opcode: 'Setup',
						blockType: Scratch.BlockType.COMMAND,
						text: 'Setup Librarys | [log]',
						arguments: {
							log: {
								type: Scratch.ArgumentType.BOOLEAN,
								defaultValue: false
							}
						}
					}
				],
				menus: {
					cryptmodes: {
						items: ['Encrypt', 'Decrypt']
					},
					aesbytes: {
						items: ['128', '256']
					},
					geomodes: {
						items: ['Latitude', 'Longitude']
					},
					encodings: {
						items: ['base64', 'unicode', 'binary', 'cloud']
					},
					hashes: {
						items: ['md5']
					},
					recodes: {
						items: ['Encode', 'Decode']
					},
					bools: {
						acceptReporters: true,
						items: ['true', 'false']
					},
          opentargets: {
            items: [
              {
                text: 'newtab',
                value: '_blank'
              },
              {
                text: 'this tab (redirect)',
                value: '_self'
              },
              '_parent', '_top'
            ]
          },
          stageVars: {
            items: stageVariablesDisplay
          }
				}
			};
		}
		//SETUP OF EXTERNAL LIBRARYS!!
		Setup(args) {
			// YES WE KNOW, LEAKED SCRIPTS TO GLOBAL SCOPE, BUT WE COULD NOT GET THEM TO WORK, SORRY.
			var imported = false;
			try {
				imported = true;
				console.log(document.getElementById("2s6s8VUqSYwrptCRNy8HtrGhnDfAUQMe58QD4J23QyQj322EqzWbxXxqugKNW5ezwJLgsC357vS272f5jWWz84VJ34mXJYUGhvBeRZnSWepkMg2Dy2ETUP9PAVuspdMK3hQNmwac82mfPu4aWpanKT6QfP9zbAYkDzYHcDgDdF6wJXKjDynJTP7Un9uj8vb6ApdQacvmXY6zvPtRrr4ZVubM5BYshCj5x4GmykyFwuJAZYUgLZzTL7kMzzjBpqQk").id);
			} catch {
				imported = false;
			}
			if (!imported) {
				var RSAscript = document.createElement('script');
				RSAscript.src = "https://cdn.jsdelivr.net/gh/travist/jsencrypt@master/bin/jsencrypt.min.js";
				RSAscript.crossorigin = "anonymous";
				RSAscript.id = "2s6s8VUqSYwrptCRNy8HtrGhnDfAUQMe58QD4J23QyQj322EqzWbxXxqugKNW5ezwJLgsC357vS272f5jWWz84VJ34mXJYUGhvBeRZnSWepkMg2Dy2ETUP9PAVuspdMK3hQNmwac82mfPu4aWpanKT6QfP9zbAYkDzYHcDgDdF6wJXKjDynJTP7Un9uj8vb6ApdQacvmXY6zvPtRrr4ZVubM5BYshCj5x4GmykyFwuJAZYUgLZzTL7kMzzjBpqQk";
				window.document.body.appendChild(RSAscript);
				var AEscript = document.createElement('script');
				AEscript.src = AESDATAURI;
				AEscript.crossorigin = "anonymous";
				window.document.body.appendChild(AEscript);
			} else if (args.log) alert("Already Imported");
		}
		//AES AND RSA ENCRYPTION + DECRYPTION
		doRSA(args) {
			var crypt = new JSEncrypt();
			crypt.setKey(args.key);
			var ciphertext = null;
			if (args.mode == 'Encrypt') ciphertext = crypt.encrypt(args.data);
			if (args.mode == 'Decrypt') ciphertext = crypt.decrypt(args.data);
			return ciphertext;
		}
		doAES(args) {
			var ciphertext = null;
			if (args.mode == 'Encrypt') ciphertext = Aes.Ctr.encrypt(args.data, args.pwd, args.bytes);
			if (args.mode == 'Decrypt') ciphertext = Aes.Ctr.decrypt(args.data, args.pwd, args.bytes);
			return ciphertext;
		}
		//MATH STUFF
		pwrOf(args) {
			return Math.pow(args.base, args.n);
		}
		RandomNumberLength({
			position
		}) {
			//Made by -SIPC- modified by As_g
			//https://extensions.turbowarp.org/encoding.js
			position = Scratch.Cast.toNumber(position) || 32;
			let t = '123456789';
			let a = t.length;
			let string = '';
			for (let i = 0; i < position; i++) {
				string += t.charAt(Math.floor(Math.random() * a));
			}
			return string;
		}
		//LOCALSTORAGE STUFF
		//If you just want localstorage use: https://extensions.turbowarp.org/local-storage.js
		setLSitem(args) {
			localStorage.setItem(args.name, args.value);
		}
		getLSitem(args) {
			return localStorage.getItem(args.name);
		}
		removeLSitem(args) {
			localStorage.removeItem(args.name);
		}
		//JOINER+COMMENT BLOCKS
		//You can also use: https://extensions.turbowarp.org/true-fantom/couplers.js by TrueFantom
		ifString(args) {
			if (args.bool) {
				return args.true;
			} else {
				return args.false;
			}
		}
		strictEqual(args) {
			return (args.str1 === args.str2);
		}
		boolCoupler(args) {
			const bool = Scratch.Cast.toBoolean(args.bool);
			return bool;
		}
		//ENCODING + HASHING
		//You can also use https://extensions.turbowarp.org/encoding.js by -SIPC-
		hashMe(args) {
			const val = Scratch.Cast.toString(args.value);
			if (args.hash == "md5") {
				return md5(val);
			}
		}
		encoder(args) {
			const val = args.value;
			if (args.encoding == "cloud") return "Currently Broken\nUse the \"Numerical Encoding\" extension.";
			if (args.mode == "Encode") {
				if (args.encoding == "base64") {
					return btoa(val);
				} else if (args.encoding == "unicode") {
					return val.charCodeAt(0);
				} else if (args.encoding == "binary") {
					return Array.from(val).map((each) => each.charCodeAt(0).toString(2)).join(" ");
				}
			} else if (args.mode == "Decode") {
				if (args.encoding == "base64") {
					return atob(val);
				} else if (args.encoding == "unicode") {
					return String.fromCharCode(val);
				} else if (args.encoding == "binary") {
					return val.split(" ").map((x) => x = String.fromCharCode(parseInt(x, 2))).join("");;
				}
			}
		}
		newline() {
			return "\n";
		}
		deleteSpriteNoConfirm(args) {
			//TAKEN FROM SHOVEL UTILS, 
			const target = vm.runtime.getSpriteTargetByName(args.SPRITE);
			if (!target || target.isStage) {
				return;
			}
			vm.deleteSprite(target.id);
		}
    //REDIRECTION
    async linkopen(args) {
      //YEAH IK I AM SUPPOSED TO USE "await Scratch.redirect(url);" but it did not do what I expected.
      if (args.target == "_self") {window.location.href = args.url};
      window.open(args.url, args.target);
    }
    //(STAGE-ONLY) VARIABLES
    stageNewVariable(args) {
      stageVariablesDisplay.push(args.sVar);
      stageVariables.push({name: args.sVar, value: ''});
    }
    stageSetVariable(args) {}
	}
	Scratch.extensions.register(new SGCUtilsOLD());
})(Scratch);

/*
LocalStorage extension: https://extensions.turbowarp.org/local-storage.js (TURBOWARP)
Encoding extension: https://extensions.turbowarp.org/encoding.js (-SIPC-)
Coupler's extension: https://extensions.turbowarp.org/true-fantom/couplers.js (TrueFantom)
Numerical Encoding extension: https://extensions.turbowarp.org/cs2627883/numericalencoding.js (cs2627883)
ShovelUtils extension: https://extensions.turbowarp.org/TheShovel/ShovelUtils.js (TheShovel)

MD5.JS: https://github.com/blueimp/JavaScript-MD5/blob/master/js/md5.js
JSEncrypt: https://github.com/travist/jsencrypt/
AES.JS: https://rawgit.com/victornpb/f639f37373be0f6e82e1/raw/5d8f7ee8b32ae04de087d2377d8086e3389ee411/AES.js

window.open targets: https://tinyurl.com/327833200

Extention built off of:
AES Only extension: https://cdn.jsdelivr.net/gh/SurvExE-Pc/ScratchLib@main/AesCrypto-NoBox.js (OUTDATED DO NOT USE)
RSA Only extenstion: https://cdn.jsdelivr.net/gh/SurvExE-Pc/ScratchLib@main/rsa.js (OUTDATED DO NOT USE)

This extension was only made to have useful blocks all in one extension to not be so messy with 500 extensions.
*/

	/*!
	The md5 function is based on https://github.com/blueimp/JavaScript-MD5/blob/master/js/md5.js
	which is licensed under:

	MIT License

	Copyright © 2011 Sebastian Tschan, https://blueimp.net

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/