const _0x338609=_0x21a8;function _0x58ed(){const _0x1d9144=['67095lIEzxh','8631783TSHvyd','228PaxXPU',':no_entry_sign:\x20**There\x20must\x20be\x20music\x20playing\x20to\x20use\x20that!**','repeatMode','Toggles\x20the\x20repeat\x20mode.','610KHphAz','getQueue','2438009RRKkGA',':no_entry_sign:\x20**You\x20must\x20join\x20a\x20voice\x20channel\x20to\x20use\x20that!**','16OBYotk','setRepeatMode','26888158CboGwc','voice','member','**\x20to\x20use\x20that!','repeat','reply','18465EaOiBh','channel','Repeat\x20Mode:\x20**ON**','1823640fZOeYu','36TRHcDb','guild','16290uRLoPd'];_0x58ed=function(){return _0x1d9144;};return _0x58ed();}(function(_0x5aa3c9,_0x237180){const _0xbc41ca=_0x21a8,_0x5da41f=_0x5aa3c9();while(!![]){try{const _0x5786b4=parseInt(_0xbc41ca(0x104))/0x1*(parseInt(_0xbc41ca(0x108))/0x2)+parseInt(_0xbc41ca(0xf2))/0x3*(-parseInt(_0xbc41ca(0xf4))/0x4)+parseInt(_0xbc41ca(0xf8))/0x5*(-parseInt(_0xbc41ca(0xf1))/0x6)+parseInt(_0xbc41ca(0xfa))/0x7*(parseInt(_0xbc41ca(0xfc))/0x8)+-parseInt(_0xbc41ca(0xf3))/0x9+-parseInt(_0xbc41ca(0x107))/0xa+parseInt(_0xbc41ca(0xfe))/0xb;if(_0x5786b4===_0x237180)break;else _0x5da41f['push'](_0x5da41f['shift']());}catch(_0x2a623d){_0x5da41f['push'](_0x5da41f['shift']());}}}(_0x58ed,0xb134c));const player=require('../../client/player');function _0x21a8(_0xae3c2c,_0x5e9fa7){const _0x58ed7f=_0x58ed();return _0x21a8=function(_0x21a8cd,_0x5abf94){_0x21a8cd=_0x21a8cd-0xf0;let _0x4dc57b=_0x58ed7f[_0x21a8cd];return _0x4dc57b;},_0x21a8(_0xae3c2c,_0x5e9fa7);}module['exports']={'name':_0x338609(0x102),'description':_0x338609(0xf7),'aliases':['r'],'run':async(_0x968069,_0x5022e7,_0xe35d78)=>{const _0x3d6f56=_0x338609;if(!_0x5022e7[_0x3d6f56(0x100)][_0x3d6f56(0xff)]['channel'])return _0x5022e7[_0x3d6f56(0x103)]({'content':_0x3d6f56(0xfb)});if(_0x5022e7['guild']['me'][_0x3d6f56(0xff)]?.[_0x3d6f56(0x105)]&&_0x5022e7[_0x3d6f56(0x100)][_0x3d6f56(0xff)][_0x3d6f56(0x105)]['id']!==_0x5022e7[_0x3d6f56(0xf0)]['me'][_0x3d6f56(0xff)][_0x3d6f56(0x105)]['id'])return _0x5022e7[_0x3d6f56(0x103)]({'content':':no_entry_sign:\x20You\x20must\x20be\x20listening\x20in\x20**'+_0x5022e7['guild']['me'][_0x3d6f56(0xff)][_0x3d6f56(0x105)]['name']+_0x3d6f56(0x101)});const _0x21f57f=player[_0x3d6f56(0xf9)](_0x5022e7[_0x3d6f56(0xf0)]['id']);if(!_0x21f57f?.['playing'])return _0x5022e7[_0x3d6f56(0x103)]({'content':_0x3d6f56(0xf5)});_0x21f57f[_0x3d6f56(0xf6)]==0x0?(_0x21f57f['setRepeatMode'](0x1),_0x5022e7[_0x3d6f56(0x103)]({'content':_0x3d6f56(0x106)})):(_0x21f57f[_0x3d6f56(0xfd)](0x0),_0x5022e7[_0x3d6f56(0x103)]({'content':'Repeat\x20Mode:\x20**OFF**'}));}};