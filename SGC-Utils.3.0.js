/*!
 * VERSION 3.0
 * Originally created by https://scratch.mit.edu/users/0znzw/
 * This file is available under an informal "use with credit" license.
 */
(function(Scratch) {
  'use strict';
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('SGC-Utils must run unsandboxed\nSGC-Utils v3.0');
  }
  /* eslint-disable */
  const icon = "data:image/png;base64,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";
  const md5 = function() {
    function n(n, r) {
      var t = (65535 & n) + (65535 & r);
      return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t
    }

    function r(r, t, e, o, u, c) {
      return n((f = n(n(t, r), n(o, c))) << (i = u) | f >>> 32 - i, e);
      var f, i
    }

    function t(n, t, e, o, u, c, f) {
      return r(t & e | ~t & o, n, t, u, c, f)
    }

    function e(n, t, e, o, u, c, f) {
      return r(t & o | e & ~o, n, t, u, c, f)
    }

    function o(n, t, e, o, u, c, f) {
      return r(t ^ e ^ o, n, t, u, c, f)
    }

    function u(n, t, e, o, u, c, f) {
      return r(e ^ (t | ~o), n, t, u, c, f)
    }

    function c(r, c) {
      var f, i, a, h, g;
      r[c >> 5] |= 128 << c % 32, r[14 + (c + 64 >>> 9 << 4)] = c;
      var v = 1732584193,
        l = -271733879,
        d = -1732584194,
        C = 271733878;
      for (f = 0; f < r.length; f += 16) i = v, a = l, h = d, g = C, l = u(l = u(l = u(l = u(l = o(l = o(l = o(l = o(l = e(l = e(l = e(l = e(l = t(l = t(l = t(l = t(l, d = t(d, C = t(C, v = t(v, l, d, C, r[f], 7, -680876936), l, d, r[f + 1], 12, -389564586), v, l, r[f + 2], 17, 606105819), C, v, r[f + 3], 22, -1044525330), d = t(d, C = t(C, v = t(v, l, d, C, r[f + 4], 7, -176418897), l, d, r[f + 5], 12, 1200080426), v, l, r[f + 6], 17, -1473231341), C, v, r[f + 7], 22, -45705983), d = t(d, C = t(C, v = t(v, l, d, C, r[f + 8], 7, 1770035416), l, d, r[f + 9], 12, -1958414417), v, l, r[f + 10], 17, -42063), C, v, r[f + 11], 22, -1990404162), d = t(d, C = t(C, v = t(v, l, d, C, r[f + 12], 7, 1804603682), l, d, r[f + 13], 12, -40341101), v, l, r[f + 14], 17, -1502002290), C, v, r[f + 15], 22, 1236535329), d = e(d, C = e(C, v = e(v, l, d, C, r[f + 1], 5, -165796510), l, d, r[f + 6], 9, -1069501632), v, l, r[f + 11], 14, 643717713), C, v, r[f], 20, -373897302), d = e(d, C = e(C, v = e(v, l, d, C, r[f + 5], 5, -701558691), l, d, r[f + 10], 9, 38016083), v, l, r[f + 15], 14, -660478335), C, v, r[f + 4], 20, -405537848), d = e(d, C = e(C, v = e(v, l, d, C, r[f + 9], 5, 568446438), l, d, r[f + 14], 9, -1019803690), v, l, r[f + 3], 14, -187363961), C, v, r[f + 8], 20, 1163531501), d = e(d, C = e(C, v = e(v, l, d, C, r[f + 13], 5, -1444681467), l, d, r[f + 2], 9, -51403784), v, l, r[f + 7], 14, 1735328473), C, v, r[f + 12], 20, -1926607734), d = o(d, C = o(C, v = o(v, l, d, C, r[f + 5], 4, -378558), l, d, r[f + 8], 11, -2022574463), v, l, r[f + 11], 16, 1839030562), C, v, r[f + 14], 23, -35309556), d = o(d, C = o(C, v = o(v, l, d, C, r[f + 1], 4, -1530992060), l, d, r[f + 4], 11, 1272893353), v, l, r[f + 7], 16, -155497632), C, v, r[f + 10], 23, -1094730640), d = o(d, C = o(C, v = o(v, l, d, C, r[f + 13], 4, 681279174), l, d, r[f], 11, -358537222), v, l, r[f + 3], 16, -722521979), C, v, r[f + 6], 23, 76029189), d = o(d, C = o(C, v = o(v, l, d, C, r[f + 9], 4, -640364487), l, d, r[f + 12], 11, -421815835), v, l, r[f + 15], 16, 530742520), C, v, r[f + 2], 23, -995338651), d = u(d, C = u(C, v = u(v, l, d, C, r[f], 6, -198630844), l, d, r[f + 7], 10, 1126891415), v, l, r[f + 14], 15, -1416354905), C, v, r[f + 5], 21, -57434055), d = u(d, C = u(C, v = u(v, l, d, C, r[f + 12], 6, 1700485571), l, d, r[f + 3], 10, -1894986606), v, l, r[f + 10], 15, -1051523), C, v, r[f + 1], 21, -2054922799), d = u(d, C = u(C, v = u(v, l, d, C, r[f + 8], 6, 1873313359), l, d, r[f + 15], 10, -30611744), v, l, r[f + 6], 15, -1560198380), C, v, r[f + 13], 21, 1309151649), d = u(d, C = u(C, v = u(v, l, d, C, r[f + 4], 6, -145523070), l, d, r[f + 11], 10, -1120210379), v, l, r[f + 2], 15, 718787259), C, v, r[f + 9], 21, -343485551), v = n(v, i), l = n(l, a), d = n(d, h), C = n(C, g);
      return [v, l, d, C]
    }

    function f(n) {
      var r, t = "",
        e = 32 * n.length;
      for (r = 0; r < e; r += 8) t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
      return t
    }

    function i(n) {
      var r, t = [];
      for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
      var e = 8 * n.length;
      for (r = 0; r < e; r += 8) t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
      return t
    }

    function a(n) {
      var r, t, e = "";
      for (t = 0; t < n.length; t += 1) r = n.charCodeAt(t), e += "0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r);
      return e
    }

    function h(n) {
      return unescape(encodeURIComponent(n))
    }

    function g(n) {
      return function(n) {
        return f(c(i(n), 8 * n.length))
      }(h(n))
    }

    function v(n, r) {
      return function(n, r) {
        var t, e, o = i(n),
          u = [],
          a = [];
        for (u[15] = a[15] = void 0, o.length > 16 && (o = c(o, 8 * n.length)), t = 0; t < 16; t += 1) u[t] = 909522486 ^ o[t], a[t] = 1549556828 ^ o[t];
        return e = c(u.concat(i(r)), 512 + 8 * r.length), f(c(a.concat(e), 640))
      }(h(n), h(r))
    }
    return function(n, r, t) {
      return r ? t ? v(r, n) : a(v(r, n)) : t ? g(n) : a(g(n))
    }
  }();
  const Aes = (() => {
    "use strict";
    var x = {};
    if (x.cipher = function(e, r) {
        for (var o = r.length / 4 - 1, t = [
            [],
            [],
            [],
            []
          ], n = 0; n < 16; n++) t[n % 4][Math.floor(n / 4)] = e[n];
        t = x.addRoundKey(t, r, 0, 4);
        for (var f = 1; f < o; f++) t = x.subBytes(t, 4), t = x.shiftRows(t, 4), t = x.mixColumns(t, 4), t = x.addRoundKey(t, r, f, 4);
        t = x.subBytes(t, 4), t = x.shiftRows(t, 4), t = x.addRoundKey(t, r, o, 4);
        for (var a = Array(16), n = 0; n < 16; n++) a[n] = t[n % 4][Math.floor(n / 4)];
        return a
      }, x.keyExpansion = function(e) {
        for (var r = e.length / 4, o = r + 6, t = Array(4 * (o + 1)), n = [, , , , ], f = 0; f < r; f++) {
          var a = [e[4 * f], e[4 * f + 1], e[4 * f + 2], e[4 * f + 3]];
          t[f] = a
        }
        for (var f = r; f < 4 * (o + 1); f++) {
          t[f] = [, , , , ];
          for (var c = 0; c < 4; c++) n[c] = t[f - 1][c];
          if (f % r == 0) {
            n = x.subWord(x.rotWord(n));
            for (var c = 0; c < 4; c++) n[c] ^= x.rCon[f / r][c]
          } else r > 6 && f % r == 4 && (n = x.subWord(n));
          for (var c = 0; c < 4; c++) t[f][c] = t[f - r][c] ^ n[c]
        }
        return t
      }, x.subBytes = function(e, r) {
        for (var o = 0; o < 4; o++)
          for (var t = 0; t < r; t++) e[o][t] = x.sBox[e[o][t]];
        return e
      }, x.shiftRows = function(x, e) {
        for (var r = [, , , , ], o = 1; o < 4; o++) {
          for (var t = 0; t < 4; t++) r[t] = x[o][(t + o) % e];
          for (var t = 0; t < 4; t++) x[o][t] = r[t]
        }
        return x
      }, x.mixColumns = function(x, e) {
        for (var r = 0; r < 4; r++) {
          for (var o = [, , , , ], t = [, , , , ], n = 0; n < 4; n++) o[n] = x[n][r], t[n] = 128 & x[n][r] ? x[n][r] << 1 ^ 283 : x[n][r] << 1;
          x[0][r] = t[0] ^ o[1] ^ t[1] ^ o[2] ^ o[3], x[1][r] = o[0] ^ t[1] ^ o[2] ^ t[2] ^ o[3], x[2][r] = o[0] ^ o[1] ^ t[2] ^ o[3] ^ t[3], x[3][r] = o[0] ^ t[0] ^ o[1] ^ o[2] ^ t[3]
        }
        return x
      }, x.addRoundKey = function(x, e, r, o) {
        for (var t = 0; t < 4; t++)
          for (var n = 0; n < o; n++) x[t][n] ^= e[4 * r + n][t];
        return x
      }, x.subWord = function(e) {
        for (var r = 0; r < 4; r++) e[r] = x.sBox[e[r]];
        return e
      }, x.rotWord = function(x) {
        for (var e = x[0], r = 0; r < 3; r++) x[r] = x[r + 1];
        return x[3] = e, x
      }, x.sBox = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], x.rCon = [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [2, 0, 0, 0],
        [4, 0, 0, 0],
        [8, 0, 0, 0],
        [16, 0, 0, 0],
        [32, 0, 0, 0],
        [64, 0, 0, 0],
        [128, 0, 0, 0],
        [27, 0, 0, 0],
        [54, 0, 0, 0]
      ], "undefined" != typeof module && module.exports && (module.exports = x), "function" == typeof define && define.amd && define([], function() {
        return x
      }), "undefined" != typeof module && module.exports) var x = require("./aes");

    function e(e) {
      var r = new FileReader;
      r.readAsArrayBuffer(e), r.onload = function(o) {
        $("body").css({
          cursor: "wait"
        });
        for (var t = new Uint8Array(r.result), n = "", f = 0; f < t.length; f++) n += String.fromCharCode(t[f]);
        var a = $("#password-file").val(),
          c = new Date,
          d = x.Ctr.encrypt(n, a, 256),
          s = new Date,
          i = new Blob([d], {
            type: "text/plain"
          });
        saveAs(i, e.name + ".encrypted"), $("#encrypt-file-time").html((s - c) / 1e3 + "s"), $("body").css({
          cursor: "default"
        })
      }
    }

    function r(e) {
      var r = new FileReader;
      r.readAsText(e), r.onload = function(o) {
        $("body").css({
          cursor: "wait"
        });
        for (var t = r.result, n = $("#password-file").val(), f = new Date, a = x.Ctr.decrypt(t, n, 256), c = new Date, d = new Uint8Array(a.length), s = 0; s < a.length; s++) d[s] = a.charCodeAt(s);
        var i = new Blob([d], {
          type: "application/octet-stream"
        });
        saveAs(i, e.name.replace(/\.encrypted$/, "") + ".decrypted"), $("#decrypt-file-time").html((c - f) / 1e3 + "s"), $("body").css({
          cursor: "default"
        })
      }
    }

    function e(e) {
      var r = new FileReader;
      r.readAsArrayBuffer(e), r.onload = function(o) {
        $("body").css({
          cursor: "wait"
        });
        for (var t = new Uint8Array(r.result), n = "", f = 0; f < t.length; f++) n += String.fromCharCode(t[f]);
        var a = $("#password-file").val(),
          c = new Date,
          d = x.Ctr.encrypt(n, a, 256),
          s = new Date,
          i = new Blob([d], {
            type: "text/plain"
          });
        saveAs(i, e.name + ".encrypted"), $("#encrypt-file-time").html((s - c) / 1e3 + "s"), $("body").css({
          cursor: "default"
        })
      }
    }

    function r(e) {
      var r = new FileReader;
      r.readAsText(e), r.onload = function(o) {
        $("body").css({
          cursor: "wait"
        });
        for (var t = r.result, n = $("#password-file").val(), f = new Date, a = x.Ctr.decrypt(t, n, 256), c = new Date, d = new Uint8Array(a.length), s = 0; s < a.length; s++) d[s] = a.charCodeAt(s);
        var i = new Blob([d], {
          type: "application/octet-stream"
        });
        saveAs(i, e.name.replace(/\.encrypted$/, "") + ".decrypted"), $("#decrypt-file-time").html((c - f) / 1e3 + "s"), $("body").css({
          cursor: "default"
        })
      }
    }
    return x.Ctr = {}, x.Ctr.encrypt = function(e, r, o) {
      if (!(128 == o || 192 == o || 256 == o)) return "";
      e = String(e).utf8Encode(), r = String(r).utf8Encode();
      for (var t = o / 8, n = Array(t), f = 0; f < t; f++) n[f] = isNaN(r.charCodeAt(f)) ? 0 : r.charCodeAt(f);
      var a = x.cipher(n, x.keyExpansion(n));
      a = a.concat(a.slice(0, t - 16));
      for (var c = Array(16), d = new Date().getTime(), s = d % 1e3, i = Math.floor(d / 1e3), u = Math.floor(65535 * Math.random()), f = 0; f < 2; f++) c[f] = s >>> 8 * f & 255;
      for (var f = 0; f < 2; f++) c[f + 2] = u >>> 8 * f & 255;
      for (var f = 0; f < 4; f++) c[f + 4] = i >>> 8 * f & 255;
      for (var _ = "", f = 0; f < 8; f++) _ += String.fromCharCode(c[f]);
      for (var p = x.keyExpansion(a), v = Math.ceil(e.length / 16), l = Array(v), y = 0; y < v; y++) {
        for (var b = 0; b < 4; b++) c[15 - b] = y >>> 8 * b & 255;
        for (var b = 0; b < 4; b++) c[15 - b - 4] = y / 4294967296 >>> 8 * b;
        for (var h = x.cipher(c, p), w = y < v - 1 ? 16 : (e.length - 1) % 16 + 1, C = Array(w), f = 0; f < w; f++) C[f] = h[f] ^ e.charCodeAt(16 * y + f), C[f] = String.fromCharCode(C[f]);
        l[y] = C.join("")
      }
      var m = _ + l.join("");
      return m.base64Encode()
    }, x.Ctr.decrypt = function(e, r, o) {
      if (!(128 == o || 192 == o || 256 == o)) return "";
      e = String(e).base64Decode(), r = String(r).utf8Encode();
      for (var t = o / 8, n = Array(t), f = 0; f < t; f++) n[f] = isNaN(r.charCodeAt(f)) ? 0 : r.charCodeAt(f);
      var a = x.cipher(n, x.keyExpansion(n));
      a = a.concat(a.slice(0, t - 16));
      for (var c = Array(8), d = e.slice(0, 8), f = 0; f < 8; f++) c[f] = d.charCodeAt(f);
      for (var s = x.keyExpansion(a), i = Math.ceil((e.length - 8) / 16), u = Array(i), _ = 0; _ < i; _++) u[_] = e.slice(8 + 16 * _, 8 + 16 * _ + 16);
      e = u;
      for (var p = Array(e.length), _ = 0; _ < i; _++) {
        for (var v = 0; v < 4; v++) c[15 - v] = _ >>> 8 * v & 255;
        for (var v = 0; v < 4; v++) c[15 - v - 4] = (_ + 1) / 4294967296 - 1 >>> 8 * v & 255;
        for (var l = x.cipher(c, s), y = Array(e[_].length), f = 0; f < e[_].length; f++) y[f] = l[f] ^ e[_].charCodeAt(f), y[f] = String.fromCharCode(y[f]);
        p[_] = y.join("")
      }
      var b = p.join("");
      return b.utf8Decode()
    }, void 0 === String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
      return unescape(encodeURIComponent(this))
    }), void 0 === String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
      try {
        return decodeURIComponent(escape(this))
      } catch (x) {
        return this
      }
    }), void 0 === String.prototype.base64Encode && (String.prototype.base64Encode = function() {
      if ("undefined" != typeof btoa) return btoa(this);
      if ("undefined" != typeof Buffer) return new Buffer(this, "utf8").toString("base64");
      throw Error("No Base64 Encode")
    }), void 0 === String.prototype.base64Decode && (String.prototype.base64Decode = function() {
      if ("undefined" != typeof atob) return atob(this);
      if ("undefined" != typeof Buffer) return new Buffer(this, "base64").toString("utf8");
      throw Error("No Base64 Decode")
    }), "undefined" != typeof module && module.exports && (module.exports = x.Ctr), "function" == typeof define && define.amd && define(["Aes"], function() {
      return x.Ctr
    }), x
  })();
  /* eslint-enable */
  const stageVariables = [{
    value: 0
  }];
  const stageVariablesDisplay = ['my variable'];
  class SGCUtils {
    getInfo() {
      return {
        id: 'SGCUtils',
        name: 'SGC Utilities | 2.0',
        menuIconURI: icon,
        docsURI: 'http://sgc-utils.ashmi.unaux.com/', //using https://ftpweb.net/
        color1: '#9D8CA1', // block color
        color2: '#9D8CA8', // border+dropdown color
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
        }, {
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
        }, {
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
        }, {
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
        }, {
          opcode: 'i36encoder',
          blockType: Scratch.BlockType.REPORTER,
          text: '(i36) [mode] [value] as type [type]',
          arguments: {
            mode: {
              type: Scratch.ArgumentType.STRING,
              menu: 'recodes'
            },
            value: {
              type: Scratch.ArgumentType.STRING
            },
            type: {
              type: Scratch.ArgumentType.STRING,
              menu: 'i36modes'
            }
          }
        }, '---', {
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
        }, {
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
        }, { // This works like a reporter coupler, cause it accepts reporter/boolean input
          hideFromPalette: true, // Hidden due to a bug that for some reason freezes the page.
          disableMonitor: true,
          opcode: 'mathSymbol',
          blockType: Scratch.BlockType.REPORTER,
          text: 'ₜ[sym]', // Added stuff around option so it would be clickable
          arguments: {
            sym: {
              type: Scratch.ArgumentType.STRING,
              menu: 'mathnos'
            }
          }
        }, {
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
        }, {// Originaly hidden due to being in another block, but unhidden due to a bug in the mathSymbol reporter.
          //hideFromPalette: true,//unhidden due to a bug, where it was implemented, so this is the backup
          opcode: 'newline',
          blockType: Scratch.BlockType.REPORTER, 
          text: 'newline',
          disableMonitor: true
        }, {
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
        }, {
          opcode: 'digitGen',
          blockType: Scratch.BlockType.REPORTER,
          text: 'random [len] digit int',
          arguments: {
            len: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 8
            }
          }
        }, '---', {
          opcode: 'getLSitem',
          blockType: Scratch.BlockType.REPORTER,
          text: '(LocalStorage) Get [name]',
          arguments: {
            name: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        }, {
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
        }, {
          opcode: 'removeLSitem',
          blockType: Scratch.BlockType.COMMAND,
          text: '(LocalStorage) Remove [name]',
          arguments: {
            name: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        }, '---', {
          opcode: 'linkopen',
          blockType: Scratch.BlockType.COMMAND,
          text: 'open [url] with [target] as target',
          arguments: {
            url: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://turbowarp.org/'
            },
            target: {
              type: Scratch.ArgumentType.STRING,
              menu: 'opentargets',
              defaultValue: '_self'
            }
          }
        }, '---', {
          //hideFromPalette: true,
          opcode: 'stageNewVariable',
          blockType: Scratch.BlockType.COMMAND,
          text: 'create new stage-variable [sVar]',
          arguments: {
            sVar: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'my variable2'
            }
          },
          filter: [Scratch.TargetType.STAGE]
        }, {
          //hideFromPalette: true,
          opcode: 'stageSetVariable',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set [sVar] to [value]',
          arguments: {
            sVar: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'my variable'
            },
            value: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          },
          filter: [Scratch.TargetType.STAGE]
        }, {
          //hideFromPalette: true,
          opcode: 'stageGetVariable',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get stage-variable [sVar]',
          arguments: {
            sVar: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'my variable'
            }
          },
          filter: [Scratch.TargetType.STAGE]
        }, '---', {
          opcode: 'whenReceived',
          blockType: Scratch.BlockType.HAT,
          text: '(special) when I receive [EVENT_OPTION]',
          isEdgeActivated: false,
          shouldRestartExistingThreads: true,
          arguments: {
            EVENT_OPTION: {
              type: Scratch.ArgumentType.STRING,
              menu: 'EVENT_FIELD'
            }
          }
        }, {
          opcode: 'broadcast',
          blockType: Scratch.BlockType.COMMAND,
          text: '(special) broadcast [EVENT]',
          arguments: {
            EVENT: {
              type: Scratch.ArgumentType.STRING,
              menu: 'EVENT_FIELD_MIN'
            }
          }
        }, {
          opcode: 'resetOnetime',
          blockType: Scratch.BlockType.COMMAND,
          text: 'reset onetime'
        }, '---', {
          opcode: 'deleteSpriteNoConfirm',
          blockType: Scratch.BlockType.COMMAND,
          text: '(ShovelUtils) Delete sprite [SPRITE] | No Confirmation',
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Sprite1'
            }
          }
        }, '---', {
          opcode: 'Setup',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Setup Librarys | [log]',
          arguments: {
            log: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
        }],
        menus: {
          EVENT_FIELD: {
            items: ['onetime', 'every second']
          },
          EVENT_FIELD_MIN: {
            items: ['onetime']
          },
          cryptmodes: {
            items: ['Encrypt', 'Decrypt']
          },
          aesbytes: {
            items: ['128', '256']
          },
          geomodes: {
            items: ['Latitude', 'Longitude']
          },
          i36modes: {
            items: ['text', 'number']
          },
          encodings: {
            items: ['base64', 'unicode', 'binary', 'cloud']
          },
          hashes: {
            items: ['md5',
              'sha1', 'sha128', 'sha256', 'sha512', {
                text: '32-Bit Fnv-1a',
                value: 'Fnv32'
              },
              /*{
                text: 'Jenkins One at a Time',
                value: 'JOaaT'
              },*/
              'TinySimpleHash', 'cyrb53', '147030016'
            ]
          },
          recodes: {
            items: ['Encode', 'Decode']
          },
          bools: {
            acceptReporters: true,
            items: [{
              text: 'true',
              value: 'true'
            }, {
              text: 'false',
              value: 'false'
            }]
          },
          opentargets: {
            items: [{
              text: 'newtab',
              value: '_blank'
            }, {
              text: 'this tab (redirect)',
              value: '_self'
            }, '_parent', '_top']
          },
          mathnos: {
            acceptReporters: true,
            items: [{
              text: 'newline',
              value: '\n'
            }, {
              text: 'φ',
              value: 1.6180339887
            }, {
              text: 'e',
              value: 2.7182818284
            }, {
              text: '∞',
              value: Infinity
            }, {
              text: 'π',
              value: 3.1415926535
            }, {
              text: 'NaN',
              value: 'NaN'
            }, {
              text: 'undefined',
              value: 'undefined'
            }, {
              text: 'null',
              value: 'null'
            }]
          }
        }
      };
    }
    //SETUP OF EXTERNAL LIBRARYS!!
    Setup(args) {
      // YES WE KNOW, IT LEAKED A SCRIPT TO GLOBAL SCOPE, BUT WE COULD NOT GET IT TO WORK OUTSIDE ITS OWN SCRIPT TAG, SORRY.
      if (this.JSEncrypt == undefined) {
        var RSAscript = document.createElement('script');
        RSAscript.src = "https://cdn.jsdelivr.net/gh/travist/jsencrypt@master/bin/jsencrypt.min.js";
        RSAscript.crossorigin = "anonymous";
        window.document.body.appendChild(RSAscript);
        this.JSEncrypt = JSEncrypt;
        RSAscript.remove(); // CLEANUP OF OUR MESS SO THAT THERE IS NO LEAKS ANYMORE
      } else if (args.log) alert("Already Imported");
    }
    //AES AND RSA ENCRYPTION + DECRYPTION
    doRSA(args) {
      var crypt = new this.JSEncrypt();
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
    //MATH
    pwrOf(args) {
      return Math.pow(args.base, args.n);
    }
    digitGen(args) {
      //Made by -SIPC- modified by As_g
      //https://extensions.turbowarp.org/encoding.js
      let t = '123456789'.split('');
      let string = t[Math.floor(Math.random() * t.length)].toString();
      t.push('0');
      for (let i = 0; i < args.len - 1; i++) {
        string += t[Math.floor(Math.random() * t.length)].toString();
      }
      return string;
    }
    mathSymbol(args) {
      return args.sym;
    }
    //LOCALSTORAGE
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
    //COUPLERS
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
      var bool = Scratch.Cast.toBoolean(args.value);
      return bool;
    }
    //ENCODING + HASHING
    hashMe(args) {
      const val = Scratch.Cast.toString(args.value);

      function getHash(str, algo = "SHA-256") {
        let strBuf = new TextEncoder().encode(str);
        return crypto.subtle.digest(algo, strBuf)
          .then(hash => {
            window.hash = hash;
            let result = '';
            const view = new DataView(hash);
            for (let i = 0; i < hash.byteLength; i += 4) {
              result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
            }
            return result;
          });
      };
      function jenkinsOneAtATimeHash(keyString) {
        let hash = 0;
        for (charIndex = 0; charIndex < keyString.length; ++charIndex) {
          hash += keyString.charCodeAt(charIndex);
          hash += hash << 10;
          hash ^= hash >> 6;
        }
        hash += hash << 3;
        hash ^= hash >> 11;
        return (((hash + (hash << 15)) & 4294967295) >>> 0).toString(16)
      };
      if (args.hash == "md5") {
        return md5(val); //You can also use https://extensions.turbowarp.org/encoding.js by -SIPC-
      } else if (args.hash == "sha1") {
        console.log("SHA-1 is insecure and is considered a security ");
        return getHash(val, 'SHA-1').then(hash => {
          return hash;
        });
      } else if (args.hash == "sha128") {
        alert("I am broken :(");
        console.log("I am broken :(");
        return "I am broken :(";
        //WOULD USE: vv BUT ^^
        return getHash(val, 'SHA-128').then(hash => {
          return hash;
        });
      } else if (args.hash == "sha256") {
        return getHash(val, 'SHA-256').then(hash => {
          return hash;
        });
        //OLD VERSION:
        /*const sha256 = async t => {
          const n = (new TextEncoder).encode(t),
            r = await window.crypto.subtle.digest("SHA-256", n);
          return Array.from(new Uint8Array(r)).map(t => t.toString(16).padStart(2, "0")).join("")
        };
        return sha256(val); */
      } else if (args.hash == "sha512") {
        return getHash(val, 'SHA-512').then(hash => {
          return hash;
        });
        //OLD VERSION:
        /*const str = val;
        return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
          return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
        });*/
      } else if (args.hash == "TinySimpleHash") {
        const TSH = s => {
          for (var i = 0, h = 9; i < s.length;) h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
          return h ^ h >>> 9
        }
        return TSH(val);
      } else if (args.hash == "Fnv32") {
        function hashFnv32a(str, asString, seed) {
          /*jshint bitwise:false */
          var i, l,
            hval = (seed === undefined) ? 0x811c9dc5 : seed;
          for (i = 0, l = str.length; i < l; i++) {
            hval ^= str.charCodeAt(i);
            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
          }
          if (asString) {
            return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
          }
          return hval >>> 0;
        }
        return hashFnv32a(val, true);
      } else if (args.hash == "cyrb53") {
        const cyrb53 = (str, seed = 0) => {
          let h1 = 0xdeadbeef ^ seed,
            h2 = 0x41c6ce57 ^ seed;
          for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
          }
          h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
          h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
          h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
          h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
          return 4294967296 * (2097151 & h2) + (h1 >>> 0);
        };
        return cyrb53(val, 0);
      } else if (args.hash == "147030016") {
        const hashCode = s => s.split('').reduce((a, b) => {
          a = ((a << 5) - a) + b.charCodeAt(0);
          return a & a
        }, 0);
        return hashCode(val);
      } else if (args.hash == "1964351488") {
        const hashCode = s => s.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0)
        return hashCode(val);
      } else if (args.hash == "JOaaT") {
        return jenkinsOneAtATimeHash(val.toString());
      } else {
        alert("Unknown Hash");
        return "Unknown Hash";
      }
    }
    i36encoder(args) {
      //Some stupid thing I made all by myself.
      const i36=S=>{return((((S<<7616461<<834)>>5)<<36)<0?(Math.round(Math.abs((((S<<7616461<<834)>>5)<<36))^0.1)):((((S<<7616461<<834)>>5)<<36)))};
      const h36=S=>{return i36(S).toString(36)};
      const ri36=E=>{return((((E>>36)>>>5)>>(836>>7616461))/32)};
      const rh36=E=>{return ri36(parseInt(E, 36))};
      Number.prototype.toI36=function(){
        const prim = this.valueOf();
        var str = h36(prim);
        return( str );
      }
      String.prototype.fromI36=function(){
        const prim = this.valueOf();
        var str = rh36(prim);
        return( str );
      }
      var val = args.value;
      if (args.mode == "Encode") {
        if (args.type == "text") {
          return Array.from(val).map((each) => each.charCodeAt(0).toI36()).join(" ");
        } else if(args.type == "number") {
          val = parseInt(val, 10);
          return h36(val);
        }
      } else if (args.mode == "Decode") {
        if (args.type == "text") {
          return val.split(" ").map((x) => x = String.fromCharCode(x.toString().fromI36())).join("");
        } else if(args.type == "number") {
          return rh36(val);
        }
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
          return val.split(" ").map((x) => x = String.fromCharCode(parseInt(x, 2))).join("");
        }
      }
    }
    deleteSpriteNoConfirm(args) {
      //TAKEN FROM SHOVEL UTILS, 
      const target = vm.runtime.getSpriteTargetByName(args.SPRITE);
      if (!target || target.isStage) {
        return;
      }
      vm.deleteSprite(target.id);
    }
    //CUSTOM BROADCASTS
    broadcast({
      EVENT
    }, util) {
      if (EVENT == "onetime") {
        if (this.ranOnce == undefined) {
          util.startHats('SGCUtils_whenReceived', {
            EVENT_OPTION: "onetime"
          });
          this.ranOnce = true;
        }
      } else {
        util.startHats('SGCUtils_whenReceived', {
          EVENT_OPTION: EVENT
        });
      }
    }
    //RESET ONETIME
    resetOnetime() {
      this.ranOnce = undefined;
    }
    //REDIRECTION
    async linkopen(args) {
      //YEAH IK I AM SUPPOSED TO USE "await Scratch.redirect(url);" but it did not do what I expected.
      if (args.target == "_self") {
        window.location.href = args.url
      };
      window.open(args.url, args.target);
    }
    //(STAGE-ONLY) VARIABLES
    stageNewVariable(args) {
      if (!stageVariablesDisplay.includes(args)) {
        stageVariablesDisplay.push(args.sVar);
        stageVariables.push({
          name: args.sVar,
          value: ''
        });
      }
    }
    stageSetVariable(args) {
      stageVariables[stageVariablesDisplay.indexOf(args.sVar)] = {
        value: args.value
      };
    }
    stageGetVariable(args) {
      return stageVariables[stageVariablesDisplay.indexOf(args.sVar)].value;
    }
    newline() {
      return "\n";
    }
  }
  setInterval(() => {
    const startedThreads = Scratch.vm.runtime.startHats('SGCUtils_whenReceived', {
      EVENT_OPTION: "every second"
    });
  }, 1000);
  Scratch.extensions.register(new SGCUtils());
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
getHash function used: https://stackoverflow.com/a/43383990/17448696
cyrb53+TinySimpleHash: https://stackoverflow.com/a/52171480/17448696
32-Bit Fnv-1a hash: https://gist.github.com/vaiorabbit/5657561
Jenkins One at a Time Hash: https://stackoverflow.com/a/69301377/17448696
_* THE HASHES IN THIS BLOCK HAD NO NAMES,
 * SO THEY WERE GIVEN NAMES USING SIMPLE CODE.
147030016(hash): https://stackoverflow.com/a/15710692/17448696
1964351488(hash): https://stackoverflow.com/a/34842797/17448696

_+ CODE BLOCK

const ANSWER_ID = 0;
var x = ANSWER_ID<<7616461;
if (x<0) { x=0-x; x=x^0.1; x=Math.round(x)}
//x is the new hash name.

_+ END CODE BLOCK
_* END BLOCK


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