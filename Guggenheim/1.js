/*j_username="&account=&username=&j_password=
Apache-Coyote/1.1
Apache Tomcat/7.0.109
*/
if (typeof MC === 'undefined') {
  MC = {}
}
MC.namespace = function () {
  var a = arguments,
  b = null,
  d,
  e,
  c;
  for (d = 0; d < a.length; d = d + 1) {
    c = a[d].split('.');
    b = MC;
    for (e = (c[0] === 'MC') ? 1 : 0; e < c.length; e = e + 1) {
      b[c[e]] = b[c[e]] ||
      {
      };
      b = b[c[e]]
    }
  }
  return b
};
MC.terminology = {};
function isNull(a) {
  return a === null ||
  typeof a === 'undefined'
}
MC.formEncode = function (e) {
  var b,
  d,
  c,
  a = [];
  if (isNull(e)) {
    return null
  }
  switch (MC.typeOf(e)) {
    case 'array':
      a = [];
      for (b = 0; b < e.length; b++) {
        d = e[b];
        c = encodeURIComponent(d[0]) + '=' + encodeURIComponent(d[1]);
        a.push(c)
      }
      break;
    case 'object':
      for (d in e) {
        if (!e.hasOwnProperty(d)) {
          continue
        }
        c = encodeURIComponent(d) + '=' + encodeURIComponent(e[d]);
        a.push(c)
      }
      break;
    default:
      return null
  }
  return a.join('&')
};
MC.format = function (b) {
  for (var a = 1; a < arguments.length; a++) {
    b = b.replace(new RegExp('[{]' + (a - 1) + '[}]', 'g'), arguments[a])
  }
  return b
};
if (!window.console || !console.firebug) {
  var names = [
    'log',
    'debug',
    'info',
    'warn',
    'error',
    'assert',
    'dir',
    'dirxml',
    'group',
    'groupEnd',
    'time',
    'timeEnd',
    'count',
    'trace',
    'profile',
    'profileEnd'
  ];
  if (!window.console) {
    window.console = {}
  }
  for (var i = 0; i < names.length; ++i) {
    if (!window.console[names[i]]) {
      window.console[names[i]] = function () {
      }
    }
  }
}
MC.typeOf = function (b) {
  var a = typeof b;
  if (a === 'object') {
    if (b) {
      if (
        typeof b.length === 'number' &&
        !(b.propertyIsEnumerable('length')) &&
        typeof b.splice === 'function'
      ) {
        a = 'array'
      }
    } else {
      a = 'null'
    }
  }
  return a
};
function trim(a) {
  return String(a).replace(/^\s+|\s+$/g, '')
}
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return trim(this)
  }
}
String.prototype.contains = function (a) {
  return this.indexOf(a) !== - 1
};
String.prototype.escapeJs = function () {
  var f = this;
  var c = f.length;
  var g = '';
  var d = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  ];
  for (var b = 0; b < c; b++) {
    var e = f.charCodeAt(b);
    var a = f.charAt(b);
    switch (a) {
      case '':
        g += '\\';
        g += 'b';
        break;
      case '\f':
        g += '\\';
        g += 'f';
        break;
      case '\n':
        g += '\\';
        g += 'n';
        break;
      case '\r':
        g += '\\';
        g += 'r';
        break;
      case '\t':
        g += '\\';
        g += 't';
        break;
      case '\'':
        g += '\\';
        g += '\'';
        break;
      case '"':
        g += '\\';
        g += '"';
        break;
      case '\\':
        g += '\\';
        g += '\\';
        break;
      default:
        if ((e < 32) || (e > 126)) {
          g += '\\';
          g += 'u';
          g += d[((e >> 12) & 15)];
          g += d[((e >> 8) & 15)];
          g += d[((e >> 4) & 15)];
          g += d[(e & 15)]
        } else {
          g += a
        }
    }
  }
  return g
};
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (a) {
    return (this.indexOf(a) === 0)
  }
}
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (a) {
    var b = this.length - a.length;
    return (this.lastIndexOf(a) === b)
  }
}
if (!String.prototype.contains) {
  String.prototype.contains = function (a) {
    return - 1 !== this.indexOf(a)
  }
}
if (!String.prototype.removeAll) {
  String.prototype.removeAll = function (b) {
    if (1 !== b.length) {
      return this
    }
    var c = '';
    for (var d = 0; d < this.length; d++) {
      var a = this.charAt(d);
      if (b === a) {
        continue
      }
      c += a
    }
    return c
  }
}
function iconNameFromFileExtension(b, c) {
  var a = c ||
  'unknown';
  if (!b) {
    return a
  }
  switch (b) {
    case 'doc':
    case 'dot':
    case 'docx':
      return 'doc';
    case 'xls':
    case 'xlt':
    case 'xlsx':
      return 'xls';
    case 'ppt':
    case 'pptx':
      return 'ppt';
    case 'mpp':
      return 'mpp';
    case 'pdf':
      return 'pdf';
    case 'eps':
      return 'eps';
    case 'psd':
      return 'psd';
    case 'ps':
      return 'ps';
    case 'swf':
      return 'flash';
    case 'htm':
    case 'hta':
    case 'mht':
    case 'html':
      return 'html';
    case 'txt':
      return 'txt';
    case 'csv':
      return 'csv';
    case 'gif':
    case 'jpg':
    case 'jpeg':
    case 'pjpg':
    case 'pjpeg':
    case 'png':
      return 'image';
    case 'pcx':
    case 'bmp':
      return 'bmp';
    case 'pic':
      return 'pic';
    case 'mp3':
      return 'mp3';
    case 'au':
    case 'wav':
    case 'midi':
    case 'mid':
    case 'aiff':
      return 'audio';
    case 'lsf':
    case 'asf':
      return 'asf';
    case 'ra':
    case 'ram':
    case 'rmm':
      return 'rm';
    case 'mpg':
    case 'mpeg':
    case 'mov':
    case 'avi':
    case 'qt':
    case 'wmv':
      return 'video';
    case 'qzp':
    case 'qpt':
    case 'qxd':
    case 'qxt':
    case 'qxl':
    case 'qxb':
    case 'qwd':
    case 'qwt':
      return 'quark';
    case 'zip':
    case 'sit':
    case 'gz':
      return 'zip';
    case 'p6':
    case 'p60':
    case 't65':
    case 'p65':
      return 'p65';
    case 'pm6':
      return 'pm6';
    case 'ai':
      return 'ai';
    case 'qbb':
    case 'qbw':
      return 'qbw';
    case 'vsd':
      return 'vsd';
    case 'vss':
      return 'vss';
    case 'ata':
      return 'ata';
    case 'dbf':
      return 'dbf';
    case 'ttf':
      return 'ttf';
    case 'efx':
      return 'efx';
    case 'mmm':
      return 'mmm';
    case 'mny':
      return 'mny';
    case 'wri':
      return 'wri';
    default:
      return a
  }
}
function iconNameFromMimeType(b, a) {
  var c = 'unknown';
  if (!b) {
    return iconNameFromFileExtension(a, c)
  }
  switch (b) {
    case 'audio/m4a':
    case 'audio/aiff':
    case 'audio/x-aiff':
    case 'audio/ogg':
    case 'audio/flac':
    case 'audio/mp3':
    case 'audio/mpeg3':
    case 'audio/wav':
    case 'audio/x-wav':
    case 'audio/mid':
    case 'audio/midi':
    case 'audio/x-mpeg':
    case 'audio/mpeg':
      return 'audio';
    case 'application/ps':
    case 'application/postscript':
      return 'ps';
    case 'text/csv':
      return 'csv';
    case 'text/html':
      return 'html';
    case 'text/plain':
      return 'txt';
    case 'image/x-eps':
      return 'eps';
    case 'application/acrobat':
    case 'application/x-pdf':
    case 'application/pdf':
      return 'pdf';
    case 'image/x-photoshop':
    case 'application/x-photoshop':
      return 'psd';
    case 'image/efax':
      return 'efx';
    case 'image/pcx':
    case 'image/bmp':
      return 'bmp';
    case 'image/x-png':
    case 'image/png':
    case 'image/gif':
    case 'image/jp2':
    case 'image/jpg':
    case 'image/jpeg':
    case 'image/pjpg':
    case 'image/pjpeg':
    case 'image/svg':
    case 'image/svg+xml':
    case 'image/tif':
    case 'image/tiff':
    case 'image/x-tiff':
    case 'image/icon':
    case 'image/x-icon':
      return 'image';
    case 'application/x-msword':
    case 'application/vnd.ms-word':
    case 'application/vnd.msword':
    case 'application/vnd.ms-word.document.12':
    case 'application/vnd.ms-word.document.macroenabled.12':
    case 'application/vnd.openxmlformats-officedocument.wordprocessing':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    case 'application/msword':
      return 'doc';
    case 'application/vnd.ms-project':
      return 'mpp';
    case 'application/vnd.ms-powerpoint.presentation.macroenabled.12':
    case 'application/vnd.ms-powerpoint':
    case 'application/x-mspowerpoint':
    case 'application/x-powerpoint':
    case 'application/mspowerpoint':
    case 'application/ppt':
    case 'application/powerpoint':
      return 'ppt';
    case 'application/vnd.ms-visio.viewer':
    case 'application/vnd.ms-visio.vwc':
    case 'application/vnd.visio':
      return 'vsd';
    case 'application/vnd.ms-excel.sheet.macroenabled.12':
    case 'application/vnd.ms-excel':
    case 'application/vnd.xls':
    case 'application/ms-excel':
    case 'application/x-msexcel':
    case 'application/xls':
    case 'application/excel':
      return 'xls';
    case 'application/vnd.quark.quarkxpress':
      return 'quark';
    case 'application/x-shockwave-flash':
      return 'swf';
    case 'video/x-ms-asf':
      return 'asf';
    case 'video/avi':
    case 'video/quicktime':
    case 'video/mpeg':
    case 'video/mpg':
    case 'video/x-mpeg':
    case 'video/msvideo':
    case 'video/x-ms-wmv':
      return 'video';
    case 'application/x-gzip':
    case 'application/x-gzip-compressed':
    case 'multipart/x-zip':
    case 'application/x-compressed':
    case 'application/stuffit':
    case 'application/x-stuffit':
    case 'application/x-zip':
    case 'application/x-zip-compressed':
    case 'application/zip-compressed':
    case 'application/zip':
      return 'zip';
    case 'application/octet-stream':
      return iconNameFromFileExtension(a, c);
    default:
      return c
  }
}
function fileExtensionFromFileName(b) {
  if (!b || !b.contains('.')) {
    return null
  }
  var a = b.lastIndexOf('.');
  return b.substring(1 + a)
}
function apply(c, e, b) {
  if (!e || !c) {
    return
  }
  var d = e.length;
  for (var a = 0; a < d; a++) {
    c(e[a], b)
  }
}
var gx_isWin32 = navigator.platform === 'Win32';
var gx_isMacPPC = navigator.platform === 'MacPPC';
var gx_isNav = navigator.appName === 'Netscape';
var gx_isIE = navigator.appName === 'Microsoft Internet Explorer';
var gx_isSafari = navigator.vendor === 'Apple Computer, Inc.';
var gx_isFF = navigator.userAgent.indexOf('Firefox') !== - 1;
var KEYS = {
  BACKSPACE: 8,
  TAB: 9,
  LF: 10,
  CR: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS: 20,
  ESC: 27,
  PG_UP: 33,
  PG_DN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  INSERT: 45,
  DELETE: 46,
  n0: 48,
  n1: 49,
  n2: 50,
  n3: 51,
  n4: 52,
  n5: 53,
  n6: 54,
  n7: 55,
  n8: 56,
  n9: 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 68,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  WINLEFT: 91,
  WINRIGHT: 92,
  SELECT: 93,
  NUM0: 96,
  NUM1: 97,
  NUM2: 98,
  NUM3: 99,
  NUM4: 100,
  NUM5: 101,
  NUM6: 102,
  NUM7: 103,
  NUM8: 104,
  NUM9: 105,
  MULTIPLY: 106,
  ADD: 107,
  SUBTRACT: 109,
  DECIMAL: 110,
  DIVIDE: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SCROLLLOCK: 145,
  SEMICOLON: 186,
  EQUAL: 187,
  COMMA: 188,
  DASH: 189,
  PERIOD: 190,
  FORWARDSLASH: 191,
  GRAVEACCENT: 192,
  OPENBRACKET: 219,
  BACKSLASH: 220,
  CLOSEBRACKET: 221,
  QUOTE: 222
};
var NBSP = ' ';
function prefillUser() {
  var d = document.forms.userForm ||
  null,
  c = '',
  a = '',
  b = '';
  if (isNull(d)) {
    return
  }
  if (d.elements['pre.user.userName.value'].value) {
    return
  }
  c = d.elements['pre.user.firstName.value'].value;
  a = d.elements['pre.user.lastName.value'].value;
  b = (c && a) ? c.substring(0, 1) + a : c + a;
  d.elements['pre.user.userName.value'].value = b
}
function highlightRows(c, d, b) {
  for (var a = 3; a < arguments.length; a++) {
    if (document.getElementById(arguments[a])) {
      document.getElementById(arguments[a]).className = b
    }
  }
  document.getElementById(d).style.visibility = (c === 'hide' ? 'hidden' : 'visible')
}
function removeGet(b, c, a) {
  if (!a) {
    a = '&'
  }
  var d = c.indexOf(a + b + '=');
  if (d !== - 1) {
    var e = c.indexOf('&', d + 1) > - 1 ? c.indexOf('&', d + 1) : c.length;
    c = c.substring(0, d + 1) + c.substring(e, c.length);
    return removeGet(b, c, a)
  }
  if (a === '&') {
    return removeGet(b, c, '?')
  } else {
    return c
  }
}
function addGet(a, b) {
  var c = a;
  if (a && a.indexOf('?') === - 1) {
    c += '?'
  }
  c += '&' + b;
  return c
}
function toggleNav(a) {
  if (a) {
    newHREF = parent.frames.text.location.href;
    newHREF = removeGet('body', newHREF);
    newHREF = removeGet('view', newHREF);
    parent.location.href = addGet(newHREF, 'view=normal')
  } else {
    newHREF = location.href;
    newHREF = removeGet('body', newHREF);
    newHREF = removeGet('view', newHREF);
    location.href = addGet(newHREF, 'view=navigator')
  }
  return false
}
function getTarget(a) {
  var b = '';
  if (document.getElementById && document.getElementById(a)) {
    b = document.getElementById(a);
    label = document.getElementById(a)
  } else {
    if (document.all && document.all[a]) {
      b = document.all[a];
      label = document.all[a]
    }
  }
  return b
}
function setVis(a, b, e) {
  var c = getTarget(a);
  var d = b ? b : e ? 'hidden' : 'visible';
  if (c) {
    c.style.visibility = d
  }
  return false
}
function setDisplay(a, b) {
  if (a) {
    a.style.display = b ? '' : 'none'
  }
}
function MC_confirm(a, c, b) {
  if (confirm(c)) {
    if (b == true) {
      window.open(
        a,
        'view',
        'scrollbars,dependent,resizable,width=520,height=450'
      )
    } else {
      location.href = a
    }
  }
}
function MC_confirm_js(title, jsOK, jsCancel) {
  if (confirm(title)) {
    if (jsOK != null) {
      eval(jsOK)
    }
  } else {
    if (jsCancel != null) {
      eval(jsCancel)
    }
  }
}
function mc_NewWindow(a, b) {
  var c;
  if (!b) {
    b = ''
  }
  c = window.open(a, '_blank', b);
  if (c != null) {
    if (c.opener == null) {
      c.opener = self
    }
  }
  return c
}
function mc_Popup(a) {
  var b = window.open(a, '_blank', 'scrollbars,dependent,resizable');
  if (b != null) {
    if (b.opener == null) {
      b.opener = self
    }
  }
  return b
}
function mc_PopupWithStyle(a, b) {
  var c = window.open(a, '_blank', b);
  if (c != null) {
    if (c.opener == null) {
      c.opener = self
    }
  }
  return c
}
function warn(c, a, b) {
  if (b === 'user') {
    if (
      a == curUserInputAdmin ||
      (
        c.elements[curUserInputAdmin] &&
        c.elements[curUserInputAdmin].checked
      )
    ) {
      alert(removeUserMessage)
    }
  } else {
    if ((b === 'group') || (b === 'togglegroup')) {
      if (
        c.elements[curUserInputAdmin] &&
        c.elements[curUserInputAdmin].checked
      ) {
        return
      }
      selectedCount = 0;
      for (i = 0; i < curUserGroups.length; i++) {
        if (c.elements[curUserGroups[i]].checked || a == curUserGroups[i]) {
          selectedCount++
        }
      }
      if (
        (b === 'group' && selectedCount == 1) ||
        (selectedCount > 0 && b === 'togglegroup')
      ) {
        alert(removeUserGroupMessage)
      }
    }
  }
}
function mc_setAll(targetArray, setValue) {
  var target = null;
  if (setValue % 2 === 0 && arguments[4] && arguments[4] != '') {
    var doWarn = false;
    for (target in arguments[4]) {
      if (
        arguments[4][target] != true &&
        arguments[4][target] != false &&
        eval(arguments[4][target]) == true
      ) {
        doWarn = true;
        break
      }
    }
    if (doWarn) {
      var targetForm = arguments[5];
      var type = arguments[6];
      if (targetForm && type) {
        warn(targetForm, '', type)
      }
    }
  }
  for (target in targetArray) {
    if (targetArray[target] != true && targetArray[target] != false) {
      eval(targetArray[target] + '=' + (setValue % 2))
    }
  }
  if (arguments[2] != '' && (setValue % 2) == arguments[3]) {
    for (target in arguments[2]) {
      if (targetArray[target] != true && targetArray[target] != false) {
        eval(arguments[2][target] + '=' + (setValue % 2))
      }
    }
    return 1
  }
  return 0
}
function mc_implySec(d, a, g, c, l) {
  var h = g === 'admin',
  m = g === 'write',
  f = g === 'read',
  e = d.elements[a + 'admin' + c],
  b = d.elements[a + 'write' + c],
  n = d.elements[a + 'read' + c];
  if (l) {
    if (h && b) {
      b.checked = true
    }
    if (h || m) {
      n.checked = true
    }
  } else {
    if (f && b) {
      b.checked = false
    }
    if (f || m) {
      e.checked = false
    }
  }
}
function togDisplay(a, b) {
  var c = '';
  if (document.getElementById && document.getElementById(a)) {
    c = document.getElementById(a)
  } else {
    if (document.all && document.all[a]) {
      c = document.all[a]
    }
  }
  if (c) {
    if (b) {
      c.style.display = b
    } else {
      if (c.style.display === 'block') {
        c.style.display = 'none'
      } else {
        c.style.display = 'block'
      }
    }
  }
  return false
}
function mc_validate(g) {
  g = g ||
  document.forms[0];
  if (!g || !document.mc_vList) {
    return true
  }
  var e = null;
  var l = document.mc_vList;
  for (var c = 0; c < l.length; c++) {
    var b = false;
    var h = l[c][0];
    var d = l[c][1];
    var a = g.elements[h];
    if (a) {
      if (a.tagName) {
        b = !a.value.trim()
      } else {
        if (a.length) {
          if (a[0].type === 'radio') {
            b = true;
            for (e = 0; e < a.length; e++) {
              if (a[e].checked) {
                b = false;
                break
              }
            }
          } else {
            for (e = 0; e < a.length; e++) {
              if (a[e].name === h) {
                b = !a[e].value.trim();
                break
              }
            }
          }
        }
      }
    }
    if (b) {
      alert(
        MC.terminology['accountAdmin.mailForm.htmlFile.fieldRequiredPrefix'] + ' ' + d + MC.terminology['term.message.suffix']
      );
      return false
    }
  }
  return true
}
function validateForHtml(b, a) {
  var c = b.value;
  if (c.match(/([\<])([^\>]{1,})*([\>])/i) != null) {
    alert(
      MC.terminology['collaborate.project.form.noHtmlAllowedPrefix'] + ' ' + a + MC.terminology['term.message.suffix']
    );
    b.focus();
    return false
  }
  return true
}
function mc_validateMultipleEmail() {
  targetForm = arguments[0] ? arguments[0] : document.forms[0];
  var f = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '@',
    '.',
    '_',
    '-'
  ],
  c = null;
  if (document.mc_emailList) {
    emailList = document.mc_emailList;
    for (var g in emailList) {
      if (
        targetForm.elements[emailList[g][0]] &&
        targetForm.elements[emailList[g][0]].value != ''
      ) {
        delimeter = emailList[g][2];
        var h = targetForm.elements[emailList[g][0]].value;
        var a = h.split(delimeter);
        for (i = 0; i < a.length; i++) {
          var b = a[i].indexOf('@', '0');
          if (b === - 1) {
            alert(
              MC.format(MC.terminology['galaxy.mcValidateMultipleEmail.error1'], a[i])
            );
            targetForm.elements[emailList[g][0]].focus();
            return false
          }
          while (a[i].charAt(0) === ' ') {
            a[i] = a[i].substring(1, a[i].length)
          }
          while (a[i].charAt(a[i].length - 1) === ' ') {
            a[i] = a[i].substring(0, a[i].length - 1)
          }
          var e = true;
          for (j = 0; j < a[i].length; j++) {
            c = a[i].charAt(j);
            var d = false;
            for (k = 0; k < f.length; k++) {
              if (c.toLowerCase() == f[k]) {
                d = true;
                break
              }
            }
            if (!d) {
              e = false;
              break
            }
          }
          if (!e) {
            alert(
              MC.format(
                MC.terminology['galaxy.mcValidateMultipleEmail.error2'],
                emailList[g][1],
                a[i],
                c
              )
            );
            targetForm.elements[emailList[g][0]].focus();
            return false
          }
        }
      }
    }
  }
  return true
}
function setYear(a, b) {
  return b + a.substring(4, a.length)
}
function setMonth(a, b) {
  if (b < 10) {
    b = '0' + b
  }
  return a.substring(0, 5) + b + a.substring(7, a.length)
}
function setDay(b, a) {
  if (a < 10) {
    a = '0' + a
  }
  return b.substring(0, 8) + a + b.substring(10, b.length)
}
function getHour(c) {
  var b = c.indexOf(':');
  var a = c.substring(0, b);
  return a
}
function getMinute(c) {
  var a = c.indexOf(':');
  var b = c.substring(a + 1, c.length);
  return b
}
function setHour(b, a) {
  if (a < 10) {
    a = '0' + a;
    a = a.substring(a.length - 2)
  }
  return b.substring(0, 11) + a + b.substring(13, b.length)
}
function setMinute(a, b) {
  if (b < 10) {
    b = '0' + b;
    b = b.substring(b.length - 2)
  }
  return a.substring(0, 14) + b + a.substring(16, a.length)
}
function setSecond(b, a) {
  if (a < 10) {
    a = '0' + a
  }
  return b.substring(0, 17) + a + b.substring(19, b.length)
}
var gx_DateUtility = {
  ERROR: - 1,
  BLANK: 0,
  YYYY_MM_DD: 1,
  MM_DD_YYYY: 2,
  MM_DD_YY: 3,
  DD_MM_YYYY: 4,
  datePatterns: [
    /^\s*$/,
    /^\s*(\d{4})\s*[\/-]?\s*(\d{1,2})\s*[\/-]?\s*(\d{1,2})\s*$/,
    /^\s*(\d{1,2})\s*[\/-]?\s*(\d{1,2})\s*[\/-]?\s*(\d{4})\s*$/,
    /^\s*(\d{1,2})\s*[\/-]?\s*(\d{1,2})\s*[\/-]?\s*(\d{2})\s*$/,
    /^\s*(\d{1,2})\s*[.]?\s*(\d{1,2})\s*[.]?\s*(\d{4})\s*$/
  ],
  SERVER: 0,
  CLIENT: 1,
  initialize: function () {
  },
  baseInitialize: function () {
  },
  validate: function (b) {
    var a = 0;
    for (a = 0; a < this.datePatterns.length; a++) {
      parsed = this.datePatterns[a].exec(b);
      if (parsed != null) {
        return true
      }
    }
    return false
  },
  format: function (b, l, e, g, h, f) {
    var a = this.parse(b);
    if (a.day == null) {
      return ''
    } else {
      e = e ? e : '-';
      if (l == this.CLIENT) {
        if (g != null) {
          var d;
          var c = a.year + '-' + a.month + '-' + a.day;
          if (f === 1) {
            dojo.require('dojox.date.buddhist');
            dojo.require('dojox.date.buddhist.locale');
            d = dojox.date.buddhist.locale.parse(c, {
              selector: 'date',
              datePattern: 'yyyy-MM-dd',
              locale: h
            });
            return dojox.date.buddhist.locale.format(d, {
              selector: 'date',
              datePattern: g,
              locale: h
            })
          } else {
            if (f === 3) {
              dojo.require('dojox.date.hebrew');
              dojo.require('dojox.date.hebrew.locale');
              d = dojox.date.hebrew.locale.parse(c, {
                selector: 'date',
                datePattern: 'yyyy-MM-dd',
                locale: h
              });
              return dojox.date.hebrew.locale.format(d, {
                selector: 'date',
                datePattern: g,
                locale: h
              })
            } else {
              if (f === 4) {
                dojo.require('dojox.date.islamic');
                dojo.require('dojox.date.islamic.locale');
                d = dojox.date.islamic.locale.parse(c, {
                  selector: 'date',
                  datePattern: 'yyyy-MM-dd',
                  locale: h
                });
                return dojox.date.islamic.locale.format(d, {
                  selector: 'date',
                  datePattern: g,
                  locale: h
                })
              } else {
                d = dojo.date.locale.parse(c, {
                  selector: 'date',
                  datePattern: 'yyyy-MM-dd',
                  locale: h
                });
                return dojo.date.locale.format(d, {
                  selector: 'date',
                  datePattern: g,
                  locale: h
                })
              }
            }
          }
        } else {
          return a.month + e + a.day + e + a.year
        }
      } else {
        return a.year + e + (a.month < 10 ? '0' + a.month : a.month) + e + (a.day < 10 ? '0' + a.day : a.day)
      }
    }
  },
  parse: function (d) {
    var b = 0;
    var c = {};
    var a = null;
    for (b = 0; b < this.datePatterns.length; b++) {
      a = this.datePatterns[b].exec(d);
      if (a != null) {
        break
      }
    }
    switch (b) {
      case this.BLANK:
        break;
      case this.YYYY_MM_DD:
        c.year = parseInt(a[1], 10);
        c.month = parseInt(a[2], 10);
        c.day = parseInt(a[3], 10);
        break;
      case this.MM_DD_YYYY:
        c.month = parseInt(a[1], 10);
        c.day = parseInt(a[2], 10);
        c.year = parseInt(a[3], 10);
        break;
      case this.MM_DD_YY:
        c.month = parseInt(a[1], 10);
        c.day = parseInt(a[2], 10);
        if (a[3].length < 4) {
          c.year = 2000 + parseInt(a[3], 10)
        } else {
          c.year = parseInt(a[3], 10)
        }
        break;
      case this.DD_MM_YYYY:
        c.day = parseInt(a[1], 10);
        c.month = parseInt(a[2], 10);
        c.year = parseInt(a[3], 10);
        break;
      default:
        log.warn('could not parse: ' + d);
        break
    }
    return c
  }
};
var gx_LocalizedDateUtility = {
  datePattern: /^\s*(\d{4})\s*[\/-]?\s*(\d{1,2})\s*[\/-]?\s*(\d{1,2})\s*$/,
  dateSeparator: '/',
  yearPOS: 1,
  monthPOS: 2,
  dayPOS: 3,
  SERVER: 0,
  CLIENT: 1,
  initialize: function () {
  },
  baseInitialize: function () {
  },
  setDatePattern: function (a) {
    this.datePattern = a
  },
  setSeparator: function (a) {
    this.dateSeparator = a
  },
  setYearPOS: function (a) {
    this.yearPOS = a
  },
  setMonthPOS: function (a) {
    this.monthPOS = a
  },
  setDayPOS: function (a) {
    this.dayPOS = a
  },
  validate: function (c) {
    var b = 0;
    var a = this.datePattern.exec(c);
    if (a != null) {
      return true
    }
    return false
  },
  format: function (e, b, d) {
    var c = this.parse(e);
    if (c.day == null) {
      return ''
    } else {
      d = d ? d : this.dateSeparator;
      if (b == this.CLIENT) {
        var a = '';
        if (this.yearPOS == 0) {
          a += c.year
        } else {
          if (this.monthPOS == 0) {
            if (c.month < 10) {
              a += '0'
            }
            a += c.month
          } else {
            if (this.dayPOS == 0) {
              if (c.day < 10) {
                a += '0'
              }
              a += c.day
            }
          }
        }
        a += d;
        if (this.yearPOS == 1) {
          a += c.year
        } else {
          if (this.monthPOS == 1) {
            if (c.month < 10) {
              a += '0'
            }
            a += c.month
          } else {
            if (this.dayPOS == 1) {
              if (c.day < 10) {
                a += '0'
              }
              a += c.day
            }
          }
        }
        a += d;
        if (this.yearPOS == 2) {
          a += c.year
        } else {
          if (this.monthPOS == 2) {
            if (c.month < 10) {
              a += '0'
            }
            a += c.month
          } else {
            if (this.dayPOS == 2) {
              if (c.day < 10) {
                a += '0'
              }
              a += c.day
            }
          }
        }
        return a
      } else {
        return c.year + '-' + (c.month < 10 ? '0' + c.month : c.month) + '-' + (c.day < 10 ? '0' + c.day : c.day)
      }
    }
  },
  parse: function (f) {
    var c = 0;
    var e = {};
    var b = this.datePattern.exec(f);
    var a = false;
    if (null == b) {
      a = true;
      var d = /^\s*(\d{4})\s*[\/-]?\s*(\d{1,2})\s*[\/-]?\s*(\d{1,2})\s*$/;
      b = d.exec(f)
    }
    if (null == b) {
      e.year = 1821;
      e.month = 12;
      e.day = 21
    } else {
      if (a == true) {
        e.year = parseInt(b[1], 10);
        e.month = parseInt(b[2], 10);
        e.day = parseInt(b[3], 10)
      } else {
        e.year = parseInt(b[this.yearPOS + 1], 10);
        e.month = parseInt(b[this.monthPOS + 1], 10);
        e.day = parseInt(b[this.dayPOS + 1], 10)
      }
    }
    return e
  }
};
function validateGroupIsChecked(a) {
  isOneChecked = false;
  group = a.elements[groupName];
  if (group) {
    for (i = 0; i < group.length; i++) {
      if (group[i].checked || group[i].defaultChecked) {
        isOneChecked = true;
        break
      }
    }
    if (isOneChecked || a.elements[groupName].checked) {
      return true
    } else {
      alert(chooseGroupMessage);
      return false
    }
  } else {
    return true
  }
}
function mc_validateDates(n, c) {
  var g = (c) ? c : document.forms[0].elements.length;
  for (var o = 1; o <= g; o++) {
    var r = document.getElementById(n + o + '.dueDate._disabled');
    var p = document.getElementById(n + o + '.startDate._disabled');
    if (r != null && p != null && !r.checked && !p.checked) {
      var q = document.getElementById('year.startDate.' + o);
      var b = document.getElementById('month.startDate.' + o);
      var h = document.getElementById('day.startDate.' + o);
      var m = document.getElementById('year.dueDate.' + o);
      var l = document.getElementById('month.dueDate.' + o);
      var f = document.getElementById('day.dueDate.' + o);
      if (q != null && b != null && h != null && m != null && l != null && f != null) {
        var e = q.options.selectedIndex;
        var a = b.options.selectedIndex;
        var t = h.options.selectedIndex;
        var u = m.options.selectedIndex;
        var d = l.options.selectedIndex;
        var s = f.options.selectedIndex;
        if (e > u || (e == u && a > d) || (e == u && a == d && t > s)) {
          setTimeout('document.getElementById(\'' + l.name + '\').focus()', 500);
          return false
        }
      }
    }
  }
  return true
}
function gx_TimeParser(c, b, a) {
  this.init();
  this.MAX_MINUTES = - 1;
  this.hrText = c;
  this.minText = b;
  this.locale = a
}
gx_TimeParser.prototype.BLANK = 0;
gx_TimeParser.prototype.HRS_MIN = 1;
gx_TimeParser.prototype.COLON = 2;
gx_TimeParser.prototype.FLOAT = 3;
gx_TimeParser.prototype.HRS_ONLY = 4;
gx_TimeParser.prototype.MIN_ONLY = 5;
gx_TimeParser.prototype.patterns = [
  /^\s*$/,
  /^\s*(\d+)\s*hr?s?\.?\s*(\d{1,2})\s*mi?n?\.?\s*$/i,
  /^\s*(\d+):([012345]\d)\s*$/,
  /^\s*(\d*\.\d+)\s*h?r?s?\.?\s*$/i,
  /^\s*(\d+)\s*h?r?s?\.?\s*$/i,
  /^\s*(\d+)\s*mi?n?\.?\s*$/i
];
gx_TimeParser.prototype.toString = function () {
  if (this.formated == null) {
    dojo.require('dojo.number');
    this.formated = (
      this.minutes == 0 ? '' : dojo.number.format('' + Math.floor(this.minutes / 60), {
        places: 0,
        locale: this.locale
      }) + this.hrText + ' ' + dojo.number.format('' + this.minutes % 60, {
        places: 0,
        locale: this.locale
      }) + this.minText
    )
  }
  return this.formated
};
gx_TimeParser.prototype.init = function () {
  this.minutes = 0;
  this.input = null;
  this.formated = null
};
gx_TimeParser.prototype.parse = function (c) {
  dojo.require('dojo.number');
  this.init();
  this.input = '' + c;
  var f = null,
  d = 0,
  e = 0,
  b = this.input,
  h = null,
  l = null,
  a = null,
  g = null;
  b = b.replace(this.hrText, 'hr');
  b = b.replace(this.minText, 'min');
  if (!b.contains('hr') && b.contains('h')) {
    b = b.replace('h', 'hr')
  }
  if (!b.contains('min')) {
    if (b.contains('mi')) {
      b = b.replace('mi', 'min')
    } else {
      if (b.contains('m')) {
        b = b.replace('m', 'min')
      }
    }
  }
  if (b.contains('hr') && b.contains('min')) {
    h = b.trim().split('hr');
    l = dojo.number.parse(h[0].trim(), {
      places: 0,
      locale: this.locale
    });
    a = h[1].split('min');
    g = dojo.number.parse(a[0].trim(), {
      places: 0,
      locale: this.locale
    });
    b = l + 'hr' + g + 'min'
  } else {
    if (b.trim().contains('hr')) {
      h = b.split('hr');
      l = dojo.number.parse(h[0].trim(), {
        places: 0,
        locale: this.locale
      });
      b = l + 'hr'
    } else {
      if (b.trim().contains('min')) {
        h = b.split('min');
        g = dojo.number.parse(h[0].trim(), {
          places: 0,
          locale: this.locale
        });
        b = g + 'min'
      } else {
        h = dojo.number.parse(b, {
          locale: this.locale
        });
        b = h
      }
    }
  }
  for (e = 0; e < this.patterns.length; e++) {
    f = this.patterns[e].exec(b);
    if (f != null) {
      break
    }
  }
  switch (e) {
    case this.BLANK:
      d = 0;
      break;
    case this.HRS_MIN:
      d = parseInt(f[1], 10) * 60 + parseInt(f[2], 10);
      break;
    case this.COLON:
      d = parseInt(f[1], 10) * 60 + parseInt(f[2], 10);
      break;
    case this.FLOAT:
      d = Math.round(parseFloat(f[1], 10) * 60);
      break;
    case this.HRS_ONLY:
      d = parseInt(f[1], 10) * 60;
      break;
    case this.MIN_ONLY:
      d = parseInt(f[1], 10);
      break;
    default:
      return false
  }
  if (this.MAX_MINUTES === - 1 || d < this.MAX_MINUTES) {
    this.minutes = d;
    return true
  } else {
    console.log('no go: ' + d + ' > ' + this.MAX_MINUTES);
    return false
  }
};
function gx_CurrencyParser(a, b) {
  if (a) {
    this.currency = a
  }
  var c;
  if ('---' !== a) {
    c = this.guessLocaleFromCurrency()
  } else {
    if (b) {
      c = b
    } else {
      c = 'en_US'
    }
  }
  if ('de_DE' === c || 'fr_FR' === c || 'es_ES' === c) {
    this.dgSeparator = ' ';
    this.radixPoint = ',';
    if ('EUR' === this.currency) {
      this.suffix = ' €'
    } else {
      if ('---' !== this.currency) {
        this.suffix = ' ' + this.currency
      }
    }
  } else {
    if (c.startsWith('fr_CA')) {
      this.dgSeparator = ' ';
      this.radixPoint = ',';
      if ('CAD' === this.currency) {
        this.suffix = ' $'
      } else {
        if ('---' !== this.currency) {
          this.suffix = ' ' + this.currency
        }
      }
    } else {
      if (c.startsWith('en_DE')) {
        if ('---' !== this.currency) {
          this.prefix = this.currency
        }
      } else {
        if (c.startsWith('en_CA')) {
          if ('CAD' === this.currency) {
            this.prefix = '$'
          } else {
            if ('---' !== this.currency) {
              this.prefix = this.currency
            }
          }
        } else {
          if (c.startsWith('en_GB')) {
            if ('GBP' === this.currency) {
              this.prefix = '£'
            } else {
              if ('EUR' === this.currency) {
                this.prefix = '€'
              } else {
                if ('---' !== this.currency) {
                  this.prefix = this.currency
                }
              }
            }
          } else {
            if (c.startsWith('en_AU')) {
              if ('AUD' === this.currency) {
                this.prefix = '$'
              } else {
                if ('---' !== this.currency) {
                  this.prefix = this.currency
                }
              }
            } else {
              if ('USD' === this.currency) {
                this.prefix = '$'
              } else {
                if ('---' !== this.currency) {
                  this.prefix = this.currency
                }
              }
            }
          }
        }
      }
    }
  }
}
gx_CurrencyParser.prototype = {
  currency: '---',
  prefix: '',
  suffix: '',
  dgSeparator: ',',
  dgSize: 3,
  radixPoint: '.',
  input: null,
  cents: 0,
  formatted: null,
  MAX_CENT_AMOUNT: 2147483647,
  MIN_CENT_AMOUNT: - 2147483648
};
gx_CurrencyParser.prototype.guessLocaleFromCurrency = function () {
  if (
    !this.currency ||
    '' === this.currency ||
    '---' === this.currency ||
    'USD' === this.currency
  ) {
    return 'en_US'
  }
  if ('EUR' === this.currency) {
    return 'de_DE'
  }
  if ('GBP' === this.currency) {
    return 'zh_CN'
  }
  if ('CAD' === this.currency) {
    return 'en_CA'
  }
  if ('AUD' === this.currency) {
    return 'en_AU'
  }
  return 'en_US'
};
gx_CurrencyParser.prototype.init = function () {
  this.input = null;
  this.cents = 0;
  this.formatted = null
};
gx_CurrencyParser.prototype.parse = function (c) {
  this.init();
  this.input = c;
  var a;
  c = c + '';
  if (this.radixPoint === ',') {
    a = c.replace(/[^0-9\-,]/g, '').replace(/\,/g, '.')
  } else {
    a = c.replace(/[^0-9\-\.]/g, '')
  }
  if (a.trim() === '') {
    return false
  }
  var b;
  b = Math.round(parseFloat(a, 10) * 100);
  if (isNaN(b)) {
    return false
  }
  if (b > this.MAX_CENT_AMOUNT || b < this.MIN_CENT_AMOUNT) {
    return false
  } else {
    this.cents = b;
    return true
  }
};
gx_CurrencyParser.prototype.getDollars = function () {
  var a;
  if (this.cents < 0) {
    a = Math.ceil(this.cents / 100)
  } else {
    a = Math.floor(this.cents / 100)
  }
  return a * 100
};
gx_CurrencyParser.prototype.toDollarsString = function () {
  if (this.formatted == null) {
    var b = this.getDollars();
    if (this.cents < 0) {
      b = '' + Math.ceil(this.cents / 100)
    } else {
      b = '' + Math.floor(this.cents / 100)
    }
    var a = Math.abs(this.cents % 100);
    if (a === 0) {
      a = '00'
    } else {
      if (a < 10) {
        a = '0' + a
      }
    }
    this.formatted = (b)
  }
  return this.formatted
};
gx_CurrencyParser.prototype.getFractionalValueAsString = function () {
  var a = Math.abs(this.cents % 100);
  if (a == 0) {
    a = '00'
  } else {
    if (a < 10) {
      a = '0' + a
    }
  }
  return a
};
gx_CurrencyParser.prototype.getWholeValueAsString = function () {
  var a = this.getDollars();
  a = '' + a / 100;
  a = this.formatWholeString(a);
  return a
};
gx_CurrencyParser.prototype.formatWholeString = function (f) {
  if (!f || f.length <= 0) {
    return
  }
  var g = - 1 < f.indexOf('-');
  if (g) {
    f = f.removeAll('-')
  }
  var a = 1 + this.dgSize;
  if (a > f.length) {
    if (g) {
      f = '-' + f
    }
    return f
  }
  var c = f.length;
  var e = Math.max(0, c - this.dgSize);
  var d = '';
  var b;
  while (e < c && c >= 0) {
    b = f.slice(e, c);
    if (c != f.length) {
      b += this.dgSeparator
    }
    d = b + d;
    c -= this.dgSize;
    e = Math.max(0, c - this.dgSize)
  }
  if (g) {
    d = '-' + d
  }
  return d
};
gx_CurrencyParser.prototype.toString = function () {
  if (this.formatted == null) {
    var b = this.getWholeValueAsString();
    var a = this.getFractionalValueAsString();
    this.formatted = (this.prefix + b + this.radixPoint + a + this.suffix)
  }
  return this.formatted
};
function gx_setTextValue(b, a) {
  b.firstChild.data = a
}
function gx_browserDetector() {
  var d = navigator.userAgent.toLowerCase(),
  h,
  e,
  c,
  g,
  f,
  b;
  function a(l) {
    b = d.indexOf(l) + 1;
    f = l;
    return b
  }
  if (a('konqueror')) {
    e = 'Konqueror';
    h = 'Linux'
  } else {
    if (a('safari')) {
      e = 'Safari'
    } else {
      if (a('omniweb')) {
        e = 'OmniWeb'
      } else {
        if (a('opera')) {
          e = 'Opera'
        } else {
          if (a('webtv')) {
            e = 'WebTV'
          } else {
            if (a('icab')) {
              e = 'iCab'
            } else {
              if (a('msie')) {
                e = 'Internet Explorer'
              } else {
                if (!a('compatible')) {
                  e = 'Netscape Navigator';
                  c = d.charAt(8)
                } else {
                  e = 'An unknown name'
                }
              }
            }
          }
        }
      }
    }
  }
  if (!c) {
    c = d.charAt(b + f.length)
  }
  if (!h) {
    if (a('linux')) {
      h = 'Linux'
    } else {
      if (a('x11')) {
        h = 'Unix'
      } else {
        if (a('mac')) {
          h = 'Mac'
        } else {
          if (a('win')) {
            h = 'Windows'
          } else {
            h = 'an unknown operating system'
          }
        }
      }
    }
  }
  this.OS = h;
  this.name = e;
  this.version = c
}
var browser = new gx_browserDetector();
function gx_refreshDollarRange(f, m, q, r, n) {
  if (!q) {
    q = - 2147483640
  }
  if (!r) {
    r = 2147483640
  }
  var b;
  var c;
  var d = f + '.min';
  var l = f + '.max';
  var h = (document.getElementById) ? document.getElementById(f) : ((document.all) ? document.all[f] : null);
  var e = (document.getElementById) ? document.getElementById(d) : ((document.all) ? document.all[d] : null);
  var o = (document.getElementById) ? document.getElementById(l) : ((document.all) ? document.all[l] : null);
  var a = new gx_CurrencyParser(n);
  var g = new gx_CurrencyParser(n);
  var s = a.parse(e.value) &&
  (e.value.length !== 0);
  var p = g.parse(o.value) &&
  (o.value.length !== 0);
  b = a.cents;
  c = g.cents;
  if (!s) {
    b = ''
  }
  if (!p) {
    c = ''
  }
  b = parseInt(b, 10);
  c = parseInt(c, 10);
  if (q && (!isNaN(b)) && (b < q)) {
    b = q
  }
  if (r && (!isNaN(b)) && (b > r)) {
    b = r
  }
  if (q && (!isNaN(c)) && (c < q)) {
    c = q
  }
  if (r && (!isNaN(c)) && (c > r)) {
    c = r
  }
  if ((!isNaN(b)) && (!isNaN(c)) && (b > c)) {
    if (m === 'min') {
      c = b
    } else {
      b = c
    }
  }
  if (isNaN(b)) {
    b = ''
  }
  if (isNaN(c)) {
    c = ''
  }
  b = b.toString();
  c = c.toString();
  if (b.length > 0) {
    a.cents = b;
    e.value = a.toString()
  } else {
    e.value = ''
  }
  if (c.length > 0) {
    g.cents = c;
    o.value = g.toString()
  } else {
    o.value = ''
  }
  if (b.length > 0 || c.length > 0) {
    h.value = b + ':' + c
  } else {
    h.value = ''
  }
}
function gx_refreshIntegerRange(d, h, m, n) {
  if (!m) {
    m = - 2147483640
  }
  if (!n) {
    n = 2147483640
  }
  var c = d + '.min';
  var g = d + '.max';
  var f = (document.getElementById) ? document.getElementById(d) : ((document.all) ? document.all[d] : null);
  var e = (document.getElementById) ? document.getElementById(c) : ((document.all) ? document.all[c] : null);
  var l = (document.getElementById) ? document.getElementById(g) : ((document.all) ? document.all[g] : null);
  var a = parseInt(e.value, 10);
  var b = parseInt(l.value, 10);
  if (m && (!isNaN(a)) && (a < m)) {
    a = m
  }
  if (n && (!isNaN(a)) && (a > n)) {
    a = n
  }
  if (m && (!isNaN(b)) && (b < m)) {
    b = m
  }
  if (n && (!isNaN(b)) && (b > n)) {
    b = n
  }
  if ((!isNaN(a)) && (!isNaN(b)) && (a > b)) {
    if (h === 'min') {
      b = a
    } else {
      a = b
    }
  }
  if (isNaN(a)) {
    a = ''
  }
  if (isNaN(b)) {
    b = ''
  }
  e.value = a;
  l.value = b;
  if (e.value.length > 0 || l.value.length > 0) {
    f.value = e.value + ':' + l.value
  } else {
    f.value = ''
  }
}
function gx_refreshDoubleRange(b, f, m, n) {
  if (!m) {
    m = - 2147483640
  }
  if (!n) {
    n = 2147483640
  }
  var a = b + '.min';
  var e = b + '.max';
  var d = (document.getElementById) ? document.getElementById(b) : ((document.all) ? document.all[b] : null);
  var c = (document.getElementById) ? document.getElementById(a) : ((document.all) ? document.all[a] : null);
  var g = (document.getElementById) ? document.getElementById(e) : ((document.all) ? document.all[e] : null);
  var l = parseFloat(c.value);
  var h = parseFloat(g.value);
  if (m && (!isNaN(l)) && (l < m)) {
    l = m
  }
  if (n && (!isNaN(l)) && (l > n)) {
    l = n
  }
  if (m && (!isNaN(h)) && (h < m)) {
    h = m
  }
  if (n && (!isNaN(h)) && (h > n)) {
    h = n
  }
  if ((!isNaN(l)) && (!isNaN(h)) && (l > h)) {
    if (f === 'min') {
      h = l
    } else {
      l = h
    }
  }
  if (isNaN(l)) {
    l = ''
  }
  if (isNaN(h)) {
    h = ''
  }
  c.value = l;
  g.value = h;
  if (c.value.length > 0 || g.value.length > 0) {
    d.value = c.value + ':' + g.value
  } else {
    d.value = ''
  }
}
function gx_getElementById(a) {
  return (document.getElementById) ? document.getElementById(a) : ((document.all) ? document.all[a] : null)
}
function gx_getParentWindowElementById(a) {
  return (parent.window.opener.document.getElementById) ? parent.window.opener.document.getElementById(a) : (
    (parent.window.opener.document.all) ? parent.window.opener.document.all[a] : null
  )
}
var cmdExclusion = /(,|~|\(|\)|\;)/gi;
var replaceChar = '-';
function massageCommand(a) {
  return a.replace(cmdExclusion, replaceChar)
}
var numCmds = 0;
function setCookieCommand(d, b) {
  var e = 'gx.cookie.command.' + (++numCmds);
  var c = massageCommand(d) + '(';
  for (var a = 1; a < arguments.length - 1; a++) {
    c += massageCommand(arguments[a]) + '~'
  }
  c += massageCommand(arguments[arguments.length - 1]) + ')';
  c = c.replace('"', '\\"', 'g');
  document.cookie = e + '="' + c + '"; path=/'
}
function setMarkupOption(c, a, b) {
  setCookieCommand('setMarkupOption', c, a, b)
}
function storeWebPreference(a, b) {
  setCookieCommand('setWebPreference', a, b)
}
function submitenter(d, b, c) {
  var a;
  if (window.event) {
    a = window.event.keyCode
  } else {
    if (b) {
      a = b.which
    } else {
      return true
    }
  }
  if (a === 13) {
    if (c) {
      c.submit()
    } else {
      d.form.submit()
    }
    return false
  } else {
    return true
  }
}
function clearForm(e) {
  var d = e.elements;
  for (i = 0; i < d.length; i++) {
    var c = d[i];
    var a = c.type;
    var b = c.getAttribute('allowclear');
    if (!b) {
      b = 'true'
    }
    if (!(a === 'hidden' || c.name == '' || b === 'false')) {
      if (a === 'select' || a === 'select-one') {
        c.selectedIndex = 0
      } else {
        if (a === 'text') {
          c.value = ''
        }
      }
    }
  }
}
var numMatch,
firstMatch,
previousKeyWasUpDown,
upDownKeyCount = 0;
function setSearchText(a) {
  gx_getElementById('searchText').value = a
}
function unSelect(b) {
  var a = 0;
  for (a = 0; a < b.options.length; a++) {
    b.options[a].selected = false
  }
}
function getSelectedIndex(a) {
  return a.selectedIndex
}
function toggleCboOptions(a) {
  var g = gx_getElementById('cboText');
  var c = gx_getElementById('cboOptions');
  var b = gx_getElementById('cboOptionsList');
  a = a ? b.options.length > 0 : false;
  if (a) {
    var f = 0;
    var e = 0;
    var d = g.offsetParent;
    if (d) {
      f += d.offsetLeft;
      e += d.offsetTop;
      d = d.offsetParent;
      if (d) {
        e += d.offsetTop
      }
    }
    f += g.offsetLeft;
    e += g.offsetTop + g.offsetHeight;
    c.style.left = (f) + 'px';
    c.style.top = (e) + 'px'
  }
  if (a && c.style.display != '') {
    c.style.display = ''
  } else {
    if (!a && c.style.display !== 'none') {
      c.style.display = 'none'
    }
  }
}
function handleCboKeyUp(h) {
  var m,
  l,
  n;
  m = document.getElementById('cboOptionsList');
  l = document.getElementById('cboText');
  n = m.length;
  var g = (h) ? h : (window.event) ? window.event : '';
  if (!g) {
    return
  }
  var b = g.keyCode;
  if (b === KEYS.CR) {
    setSearchText(l.value);
    gx_getElementById('quickNavForm').submit()
  } else {
    if (b === KEYS.ESC || b === KEYS.TAB) {
      toggleCboOptions(false);
      unSelect(m)
    } else {
      if (b === KEYS.UP || b === KEYS.DOWN) {
        upDownKeyCount++;
        var a = false;
        if (browser.name === 'Safari') {
          if ((upDownKeyCount % 2) === 0) {
            a = true
          }
        } else {
          a = true
        }
        if (a) {
          toggleCboOptions(true);
          var d = getSelectedIndex(m);
          unSelect(m);
          if (previousKeyWasUpDown) {
            if (b === KEYS.UP && d > 0) {
              d--
            } else {
              if (b === KEYS.DOWN && d < n - 1) {
                d++
              }
            }
          }
          previousKeyWasUpDown = true;
          if (d < n && d > - 1) {
            m.options[d].selected = true;
            l.value = m.options[d].text;
            setSearchText(l.value)
          }
        }
      } else {
        toggleCboOptions(true);
        previousKeyWasUpDown = false;
        var f;
        var c = l.value;
        re = new RegExp(c, 'gi');
        numMatch = 0;
        for (f = 0; f < n; f++) {
          if (m.options[f].text.search(re) !== - 1) {
            numMatch++;
            if (numMatch === 1) {
              firstMatch = f
            }
          }
        }
        unSelect(m);
        if (numMatch > 0) {
          m.options[firstMatch].selected = true
        }
      }
    }
  }
}
function handleCboSelectClick() {
  var b = gx_getElementById('cboOptionsList');
  var a = gx_getElementById('cboText');
  selectedValue = b.options[b.selectedIndex].text;
  a.value = selectedValue;
  toggleCboOptions(false);
  a.focus()
}
function $() {
  var c = [];
  var b;
  for (var a = 0; a < arguments.length; a++) {
    b = arguments[a];
    if (typeof b === 'string') {
      b = document.getElementById(b)
    }
    c.push(b)
  }
  return c.length > 1 ? c : c[0]
}
function Set() {
  this.vals = [];
  this.get = function (a) {
    if (this.vals == null) {
      return null
    }
    return this.vals[a]
  };
  this.add = function (a) {
    if (this.vals == null) {
      this.vals = []
    }
    if (isNull(a) || '' === a.trim()) {
      return
    }
    this.remove(a);
    this.vals.push(a)
  };
  this.remove = function (d) {
    var a = 0,
    c = 0,
    b = null;
    if (this.vals == null || this.vals.length === 0) {
      return null
    }
    if (d == null) {
      return this.vals[this.vals.length - 1]
    } else {
      c = this.vals.length;
      for (a = 0; a < c; a++) {
        if (this.vals[a] == d) {
          b = d;
          break
        }
      }
      if (a < c || a === 0) {
        this.vals.splice(a, 1)
      }
      return b
    }
  };
  this.toString = function () {
    if (this.vals == null) {
      return 'null'
    } else {
      return this.vals.toString()
    }
  };
  this.getLength = function () {
    if (this.vals == null) {
      return 0
    } else {
      return this.vals.length
    }
  };
  this.contains = function (b) {
    if (this.vals == null) {
      return false
    }
    var d = this.vals.length,
    c = false,
    a = 0;
    for (a = 0; a < d; a++) {
      if (this.vals[a] == b) {
        c = true;
        break
      }
    }
    return c
  }
}
function fireClickOnTarget(a) {
  this.click()
}
function hideDialog() {
  this.hide()
}
if (!MC.Validator) {
  (
    function () {
      MC.Validator = {
        clearDefaultHelpMessage: function (c, b) {
          var a = YAHOO.util.Event.getTarget(c);
          if (a.value === b) {
            a.value = ''
          }
        },
        clearDefaultHelpMessageFromTextAreas: function (a, d) {
          var f = YAHOO.util.Dom.getElementsByClassName('hasHelpMessage', 'textarea', a);
          var e = f.length;
          for (var c = 0; c < e; c++) {
            var b = f[c];
            if (b.value === d) {
              b.value = ''
            }
          }
        },
        refillWithHelpMessage: function (c, b) {
          var a = YAHOO.util.Event.getTarget(c);
          if (0 === trim(a.value).length) {
            a.value = b
          }
        }
      }
    }
  ) ()
}
function removeElement(a) {
  a.parentNode.removeChild(a)
}
if (!Array.prototype.some) {
  Array.prototype.some = function (c) {
    var e,
    a,
    b,
    d;
    if (this === void 0 || this === null) {
      throw new TypeError()
    }
    e = Object(this);
    a = e.length >>> 0;
    if (typeof c !== 'function') {
      throw new TypeError()
    }
    b = arguments.length >= 2 ? arguments[1] : void 0;
    for (d = 0; d < a; d++) {
      if (d in e && c.call(b, e[d], d, e)) {
        return true
      }
    }
    return false
  }
}
function isArray(a) {
  if (!a) {
    return false
  }
  return '[object Array]' === Object.prototype.toString.call(a)
}
if (!Array.prototype.equals) {
  Array.prototype.equals = function (a) {
    var b;
    if (!isArray(a)) {
      return false
    }
    if (this.length !== a.length) {
      return false
    }
    for (b = 0; b < this.length; b++) {
      if (isArray(this[b]) && isArray(a[b])) {
        if (!this[b].equals(a[b])) {
          return false
        }
      } else {
        if (this[b] !== a[b]) {
          return false
        }
      }
    }
    return true
  }
}
function deleteLayoutCookie() {
  document.cookie = 'LayoutStyle=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.location.reload()
};
