const _0x1d2a75=_0x3592;function _0x3592(_0x42f938,_0x198217){const _0x15db46=_0x15db();return _0x3592=function(_0x359281,_0x194ad5){_0x359281=_0x359281-0x14b;let _0x1bf3eb=_0x15db46[_0x359281];return _0x1bf3eb;},_0x3592(_0x42f938,_0x198217);}(function(_0x2522e3,_0x58234a){const _0x2d3d88=_0x3592,_0x57f8b4=_0x2522e3();while(!![]){try{const _0x4dbd1a=parseInt(_0x2d3d88(0x161))/0x1+-parseInt(_0x2d3d88(0x153))/0x2*(parseInt(_0x2d3d88(0x14c))/0x3)+-parseInt(_0x2d3d88(0x156))/0x4*(-parseInt(_0x2d3d88(0x16e))/0x5)+parseInt(_0x2d3d88(0x162))/0x6+parseInt(_0x2d3d88(0x15d))/0x7+parseInt(_0x2d3d88(0x168))/0x8*(-parseInt(_0x2d3d88(0x14d))/0x9)+-parseInt(_0x2d3d88(0x15a))/0xa*(parseInt(_0x2d3d88(0x170))/0xb);if(_0x4dbd1a===_0x58234a)break;else _0x57f8b4['push'](_0x57f8b4['shift']());}catch(_0x2b990c){_0x57f8b4['push'](_0x57f8b4['shift']());}}}(_0x15db,0x929ea));const {MessageEmbed}=require(_0x1d2a75(0x171)),db=require('quick.db');function _0x15db(){const _0x508dc9=['highest','reply','mentions','830923heCPzK','3488520MWNzTb','name','position','roles',':rolling_eyes:\x20**','member','32JBLIWk','exports','voice',':x:\x20**The\x20user\x20aren\x27t\x20in\x20a\x20voice\x20channel**','channel','members','5EdCvbu','catch','3949GTHtxp','discord.js',':white_check_mark:\x20**Kicked\x20','219GUxIVM','597708erdLRp','admin','message','username','i\x20couldn\x27t\x20reply\x20to\x20the\x20message:\x20','I\x20Couldn\x27t\x20Reply\x20To\x20The\x20Message:\x20','29932JWdTkz','user','guild','2156788KnqsJG',':x:\x20**You\x20aren\x27t\x20in\x20a\x20voice\x20channel**','then','MOVE_MEMBERS','26170tVbsMP','\x20from\x20','!vkick\x20@user','6626781oTOcqx'];_0x15db=function(){return _0x508dc9;};return _0x15db();}module[_0x1d2a75(0x169)]={'name':'vkick','aliases':[],'description':'Kicks\x20a\x20member\x20from\x20the\x20voice\x20channel','usage':[_0x1d2a75(0x15c)],'category':_0x1d2a75(0x14e),'botPermission':[_0x1d2a75(0x159)],'authorPermission':['MOVE_MEMBERS'],'cooldowns':[],'ownerOnly':![],'run':async(_0x3c738d,_0x4bbab0,_0x522abc,_0x48b088)=>{const _0x4d2429=_0x1d2a75,_0x58e512=_0x4bbab0[_0x4d2429(0x160)][_0x4d2429(0x16d)]['first']()||_0x4bbab0[_0x4d2429(0x155)][_0x4d2429(0x16d)]['cache']['get'](_0x522abc[0x0]);if(!_0x522abc[0x0])return _0x4bbab0[_0x4d2429(0x15f)]({'content':':rolling_eyes:\x20**Please\x20mention\x20member\x20or\x20id**'})['catch'](_0x35eceb=>{const _0x34608c=_0x4d2429;console['log'](_0x34608c(0x152)+_0x35eceb[_0x34608c(0x14f)]);});if(!_0x58e512)return _0x4bbab0[_0x4d2429(0x15f)]({'content':':rolling_eyes:\x20**I\x20can\x27t\x20find\x20this\x20member**'})[_0x4d2429(0x16f)](_0x35dc34=>{const _0x4def14=_0x4d2429;console['log'](_0x4def14(0x151)+_0x35dc34[_0x4def14(0x14f)]);});if(_0x4bbab0[_0x4d2429(0x167)][_0x4d2429(0x165)]['highest'][_0x4d2429(0x164)]<_0x58e512['roles'][_0x4d2429(0x15e)][_0x4d2429(0x164)])return _0x4bbab0['reply']({'content':_0x4d2429(0x166)+_0x58e512[_0x4d2429(0x154)][_0x4d2429(0x150)]+'\x20have\x20higher\x20role\x20than\x20you**'})[_0x4d2429(0x16f)](_0x213087=>{const _0x1e9f75=_0x4d2429;console['log']('i\x20couldn\x27t\x20reply\x20to\x20the\x20message:\x20'+_0x213087[_0x1e9f75(0x14f)]);});if(!_0x4bbab0['member']['voice']['channel'])return _0x4bbab0['reply']({'content':_0x4d2429(0x157)});if(!_0x58e512[_0x4d2429(0x16a)][_0x4d2429(0x16c)])return _0x4bbab0[_0x4d2429(0x15f)]({'content':_0x4d2429(0x16b)});let _0x2391e3=_0x4bbab0[_0x4d2429(0x167)][_0x4d2429(0x16a)]['channel'];_0x58e512[_0x4d2429(0x16a)]['disconnect']()[_0x4d2429(0x158)](()=>{const _0x1867cc=_0x4d2429;_0x4bbab0[_0x1867cc(0x15f)]({'content':_0x1867cc(0x14b)+_0x58e512[_0x1867cc(0x154)][_0x1867cc(0x150)]+_0x1867cc(0x15b)+_0x2391e3[_0x1867cc(0x163)]+'**'});});}};