const _0x584c74=_0x5b1b;(function(_0xa4c313,_0x15c9fb){const _0x558172=_0x5b1b,_0x3a9c54=_0xa4c313();while(!![]){try{const _0x6ebf74=parseInt(_0x558172(0x1bc))/0x1+-parseInt(_0x558172(0x1b2))/0x2+parseInt(_0x558172(0x1ac))/0x3+-parseInt(_0x558172(0x1b8))/0x4+parseInt(_0x558172(0x1b4))/0x5*(parseInt(_0x558172(0x1d4))/0x6)+parseInt(_0x558172(0x1c0))/0x7+parseInt(_0x558172(0x1d2))/0x8*(parseInt(_0x558172(0x1d7))/0x9);if(_0x6ebf74===_0x15c9fb)break;else _0x3a9c54['push'](_0x3a9c54['shift']());}catch(_0x4478be){_0x3a9c54['push'](_0x3a9c54['shift']());}}}(_0x51ff,0x9867f));const config=require(_0x584c74(0x1b5)),djs=require('discord.js'),cooldowns=new djs[(_0x584c74(0x1bd))]();module['exports'][_0x584c74(0x1a5)]=async(_0x4ae4a8,_0x12789d)=>{const _0x4f4181=_0x584c74,_0x10e60d=require('pro.db'),_0x208479=await _0x10e60d['get'](_0x4f4181(0x1ae));if(_0x12789d['author'][_0x4f4181(0x1cc)])return;if(!_0x12789d['guild'])return;!_0x12789d[_0x4f4181(0x1c7)][_0x4f4181(0x1b3)][_0x4f4181(0x1ba)](djs[_0x4f4181(0x1ca)][_0x4f4181(0x1d5)]['ADMINISTRATOR'])&&_0x12789d[_0x4f4181(0x1bb)]['split']('\x20')['forEach'](_0xd1b9a0=>{});var _0x310ea9=''+config[_0x4f4181(0x1ae)]&&_0x208479;const _0x337567=new RegExp(_0x4f4181(0x1c6)+_0x12789d[_0x4f4181(0x1ce)][_0x4f4181(0x1d6)]['id']+'>');if(_0x12789d[_0x4f4181(0x1bb)][_0x4f4181(0x1b9)](_0x337567))return _0x12789d[_0x4f4181(0x1c4)](_0x4f4181(0x1a9)+_0x310ea9+'`');if(!_0x12789d[_0x4f4181(0x1bb)][_0x4f4181(0x1b7)](_0x310ea9))return;if(!_0x12789d[_0x4f4181(0x1c7)])_0x12789d[_0x4f4181(0x1c7)]=await _0x12789d[_0x4f4181(0x1c9)]['fetchMember'](_0x12789d);const _0x3e4846=_0x12789d[_0x4f4181(0x1bb)][_0x4f4181(0x1cb)](_0x310ea9[_0x4f4181(0x1bf)])['trim']()['split'](/ +/g),_0x53de05=_0x3e4846[_0x4f4181(0x1af)]()[_0x4f4181(0x1d0)]();if(_0x53de05[_0x4f4181(0x1bf)]===0x0)return;let _0x1c32af=_0x4ae4a8['commands']['get'](_0x53de05)||_0x4ae4a8['commands'][_0x4f4181(0x1cf)](_0xeea637=>_0xeea637[_0x4f4181(0x1d3)]&&_0xeea637[_0x4f4181(0x1d3)][_0x4f4181(0x1b1)](_0x53de05));if(!_0x1c32af)_0x1c32af=_0x4ae4a8['commands'][_0x4f4181(0x1be)](_0x4ae4a8[_0x4f4181(0x1d3)][_0x4f4181(0x1be)](_0x53de05));if(!_0x1c32af)return;if(_0x1c32af[_0x4f4181(0x1b0)]){let _0x2a448d=[];_0x1c32af[_0x4f4181(0x1b0)]['forEach'](_0x4142ec=>{const _0x25d5ce=_0x4f4181;if(!_0x12789d['guild']['me'][_0x25d5ce(0x1b3)]['has'](_0x4142ec))_0x2a448d[_0x25d5ce(0x1b6)]('`'+_0x4142ec+'`');});if(_0x2a448d['length'])return _0x12789d[_0x4f4181(0x1a6)][_0x4f4181(0x1ab)](_0x4f4181(0x1a8));}if(_0x1c32af[_0x4f4181(0x1cd)]){let _0x4f3147=[];_0x1c32af[_0x4f4181(0x1cd)][_0x4f4181(0x1d8)](_0x569dcd=>{const _0x25b714=_0x4f4181;if(!_0x12789d[_0x25b714(0x1c7)][_0x25b714(0x1b3)][_0x25b714(0x1ba)](_0x569dcd))_0x4f3147['push'](''+_0x569dcd);});if(_0x4f3147[_0x4f4181(0x1bf)])return _0x12789d['channel'][_0x4f4181(0x1ab)]('>\x20**-\x20You\x20don\x27t\x20have\x20Premission\x20-\x20['+_0x4f3147+_0x4f4181(0x1c8));}if(_0x1c32af[_0x4f4181(0x1c3)]){if(!config[_0x4f4181(0x1ad)][_0x4f4181(0x1b1)](_0x12789d['author']['id']))return _0x12789d['channel']['send']('هذا\x20امر\x20الاونر\x20فقط');}if(_0x1c32af[_0x4f4181(0x1d1)]){if(!_0x12789d[_0x4f4181(0x1a6)][_0x4f4181(0x1c2)]==='dm')return;}if(!cooldowns['has'](_0x1c32af['cooldowns']))cooldowns[_0x4f4181(0x1aa)](_0x1c32af['cooldowns'],new djs['Collection']());const _0x1b75b1=_0x12789d[_0x4f4181(0x1c7)],_0xc10ef6=Date['now'](),_0x757b78=cooldowns[_0x4f4181(0x1be)](_0x1c32af[_0x4f4181(0x1c1)]),_0x5591f=(_0x1c32af['cooldowns']||0x3)*0x3e8;if(!_0x757b78['has'](_0x1b75b1['id']))!config[_0x4f4181(0x1ad)][_0x4f4181(0x1b1)](_0x12789d['author']['id'])&&_0x757b78[_0x4f4181(0x1aa)](_0x1b75b1['id'],_0xc10ef6);else{const _0x18c863=_0x757b78[_0x4f4181(0x1be)](_0x1b75b1['id'])+_0x5591f;if(_0xc10ef6<_0x18c863){const _0x799467=(_0x18c863-_0xc10ef6)/0x3e8;return _0x12789d['channel']['send']('>\x20\x20**Please\x20Wite\x20CoolDown\x20:('+_0x799467[_0x4f4181(0x1c5)](0x0)+'Seconds)**!');}_0x757b78['set'](_0x1b75b1['id'],_0xc10ef6),setTimeout(()=>_0x757b78[_0x4f4181(0x1a7)](_0x1b75b1['id']),_0x5591f);}if(_0x1c32af)_0x1c32af[_0x4f4181(0x1a5)](_0x4ae4a8,_0x12789d,_0x3e4846,config);};function _0x5b1b(_0x21d9a9,_0x563bb9){const _0x51ff94=_0x51ff();return _0x5b1b=function(_0x5b1b9c,_0x16e7a7){_0x5b1b9c=_0x5b1b9c-0x1a5;let _0x5d96ce=_0x51ff94[_0x5b1b9c];return _0x5d96ce;},_0x5b1b(_0x21d9a9,_0x563bb9);}function _0x51ff(){const _0x5597e9=['type','ownerOnly','reply','toFixed','^<@!?','member',']**','guild','Permissions','slice','bot','authorPermission','client','find','toLowerCase','dmOnly','16696bjFDVa','aliases','27954LFwyVj','FLAGS','user','1476JUZOVZ','forEach','run','channel','delete','>\x20**$**','برفكس\x20خاص\x20بي\x20`','set','send','2405691JFNJsf','owners','prefix','shift','botPermission','includes','1778978lUTYjJ','permissions','380EpWrqh','../config.js','push','startsWith','4654020eKOrBd','match','has','content','327773nLuOox','Collection','get','length','5958589gntlTY','cooldowns'];_0x51ff=function(){return _0x5597e9;};return _0x51ff();}