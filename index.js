//======================设置参数==============================
const port = process.env.SERVER_PORT || process.env.PORT || 3000;
const vmms = process.env.MPATH || 'vms';  // vmes路径
const vmmport = process.env.MPORT || '8001';  // vmes端口
const uuid = process.env.UUID || 'e9f3917b-7131-4e11-866b-7b196478cd9d'; // 订阅地址为/uuid
const cfip = process.env.CFIP || 'ip.sb'; // 如果host填cf反代域名或隧道域名则填优选ip，否则填webhostmost域名直连
const nezhaser = process.env.N_SERVER || '';  //哪吒参数，可选
const nezhaKey = process.env.N_KEY || '';
const nezport = process.env.N_PORT || '443';
const neztls = process.env.N_TLS || '--tls';
const baohuo = process.env.BAOHUO_URL || ''; // 保活地址,填webhostmost域名，可选
const argoKey = process.env.TOK || ''; // 隧道token，不支持临时隧道，可选
const host = process.env.HOST || ''; // 填cf反代域名或隧道域名，也可填webhostmost域名直连，必须
const sub_name = process.env.SUB_NAME || 'webhostmost'; // 节点名称，可选
const sub_url = process.env.SUB_URL || ''; // 订阅服务器地址，可选
const _0x5e49e6=_0x29f8;(function(_0x42a476,_0x162ce0){const _0x5a21c9=_0x29f8,_0x34c51a=_0x42a476();while(!![]){try{const _0x1e5320=-parseInt(_0x5a21c9(0x1be))/0x1+parseInt(_0x5a21c9(0x1b4))/0x2*(-parseInt(_0x5a21c9(0x1f3))/0x3)+parseInt(_0x5a21c9(0x1a0))/0x4+-parseInt(_0x5a21c9(0x1e4))/0x5+parseInt(_0x5a21c9(0x19a))/0x6+-parseInt(_0x5a21c9(0x1ab))/0x7*(parseInt(_0x5a21c9(0x1bf))/0x8)+parseInt(_0x5a21c9(0x1ac))/0x9;if(_0x1e5320===_0x162ce0)break;else _0x34c51a['push'](_0x34c51a['shift']());}catch(_0x43f338){_0x34c51a['push'](_0x34c51a['shift']());}}}(_0x5acd,0x7ff2e));const configFileName=uuid+_0x5e49e6(0x1b3),express=require(_0x5e49e6(0x1bd)),app=express();var exec=require(_0x5e49e6(0x1d5))[_0x5e49e6(0x1df)];const os=require('os'),{createProxyMiddleware}=require(_0x5e49e6(0x1e9));var request=require(_0x5e49e6(0x1b6)),fs=require('fs'),path=require(_0x5e49e6(0x1d1));const axios=require(_0x5e49e6(0x1e2));let countryCode='';function _0x29f8(_0xe96bd7,_0xcd2446){const _0x5acd01=_0x5acd();return _0x29f8=function(_0x29f82a,_0x5d5683){_0x29f82a=_0x29f82a-0x18c;let _0x4e0b11=_0x5acd01[_0x29f82a];return _0x4e0b11;},_0x29f8(_0xe96bd7,_0xcd2446);}const countryCodeFetchers=[()=>axios[_0x5e49e6(0x1b2)](_0x5e49e6(0x1c5))[_0x5e49e6(0x1d2)](_0x38c4a5=>_0x38c4a5[_0x5e49e6(0x1dc)][_0x5e49e6(0x1f6)]())[_0x5e49e6(0x1ce)](_0x416e39=>{const _0x5ae565=_0x5e49e6;console[_0x5ae565(0x1d9)](_0x5ae565(0x1c7)+_0x416e39[_0x5ae565(0x1d0)]);throw _0x416e39;}),()=>axios[_0x5e49e6(0x1b2)](_0x5e49e6(0x1c0))[_0x5e49e6(0x1d2)](_0x40c219=>_0x40c219[_0x5e49e6(0x1dc)][_0x5e49e6(0x1f6)]())[_0x5e49e6(0x1ce)](_0x269c73=>{const _0x4a7573=_0x5e49e6;console[_0x4a7573(0x1d9)](_0x4a7573(0x1dd)+_0x269c73[_0x4a7573(0x1d0)]);throw _0x269c73;}),()=>axios[_0x5e49e6(0x1b2)](_0x5e49e6(0x1e7))['then'](_0xa93d7b=>_0xa93d7b['data'][_0x5e49e6(0x1f6)]())[_0x5e49e6(0x1ce)](_0x440eeb=>{const _0x2425bc=_0x5e49e6;console[_0x2425bc(0x1d9)]('Error\x20getting\x20country\x20code\x20from\x20ipapi.co:\x20'+_0x440eeb[_0x2425bc(0x1d0)]);throw _0x440eeb;}),()=>new Promise((_0x262c7f,_0x185e9e)=>{const _0x53646e=_0x5e49e6;exec(_0x53646e(0x1e8),(_0x3fe9a0,_0x49fdea,_0x30df34)=>{const _0x318aa0=_0x53646e;_0x3fe9a0?(console[_0x318aa0(0x1d9)](_0x318aa0(0x1ad)+_0x30df34),_0x185e9e(_0x3fe9a0)):_0x262c7f(_0x49fdea['trim']());});})];function getCountryCode(_0x23c6ad){let _0x5b64fd=0x0;function _0x13acd0(){const _0x4a8071=_0x29f8;if(_0x5b64fd>=countryCodeFetchers[_0x4a8071(0x1a8)]){console[_0x4a8071(0x1d9)]('All\x20methods\x20failed,\x20setting\x20country\x20code\x20to\x20\x22UN\x22'),countryCode='UN',_0x23c6ad(countryCode);return;}countryCodeFetchers[_0x5b64fd]()[_0x4a8071(0x1d2)](_0x261f1d=>{countryCode=_0x261f1d,_0x23c6ad(countryCode);})['catch'](()=>{_0x5b64fd++,_0x13acd0();});}_0x13acd0();}function generateVmessLink(){const _0x528073=_0x5e49e6,_0x360ecf={'v':'2','ps':countryCode+'-'+sub_name,'add':cfip,'port':'443','id':uuid,'aid':'0','net':'ws','type':'none','host':host,'path':'/'+vmms+_0x528073(0x1bc),'tls':_0x528073(0x1f9),'sni':host,'alpn':''},_0x34b964=JSON[_0x528073(0x1ae)](_0x360ecf),_0x4a0b1a=Buffer[_0x528073(0x1f2)](_0x34b964)[_0x528073(0x1f5)]('base64');return _0x528073(0x1c2)+_0x4a0b1a;}function _0x5acd(){const _0xb1dc42=['<pre>System\x20Process\x20Table：\x0a','https://github.com/Fscarmon/flies/releases/latest/download/agent-linux_arm64','URL_BOT','Nezha\x20service\x20started\x20successfully','exit','systemctl\x20status\x20\x22','Argo\x20service\x20started\x20successfully','Failed\x20to\x20start\x20nezha\x20service:','609276WNdPQn','Node\x20link\x20upload\x20successful','chmod\x20+x\x20./nezha.js\x20&&\x20nohup\x20./nezha.js\x20-s\x20','https://github.com/Fscarmon/flies/releases/latest/download/sb-linux-arm64','https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64','Failed\x20to\x20download\x20','3728964BuxpPi','Performing\x20initial\x20node\x20link\x20upload','Starting\x20configuration\x20file\x20generation','chmod\x20+x\x20./','PROJECT_DOMAIN','x64','statSync','pgrep\x20-f\x20\x22','length','cff.js','Failed\x20to\x20set\x20execution\x20permissions\x20for\x20','21PGDgzD','10867122uTPbht','Error\x20getting\x20country\x20code\x20with\x20exec:\x20','stringify','Configuration\x20file\x20generated\x20successfully','Failed\x20to\x20generate\x20configuration\x20file:','use','get','-config.json','60916tUMbek','size','request','Initialization\x20error:','/stas','text/plain','type','\x20-p\x20','?ed=2048','express','176774cSadYl','13512lQkvWQ','https://ifconfig.co/country','Failed\x20to\x20start\x20argo\x20service:','vmess://','html','pipe','http://ipinfo.io/country','application/json','Error\x20getting\x20country\x20code\x20from\x20ipinfo.io:\x20','all','createWriteStream','vmess','push','http://127.0.0.1:','web.js','catch','URL_CF2','message','path','then','\x20>/dev/null\x202>&1\x20&','top\x20-bn1\x20|\x20grep\x20\x22','child_process','Setting\x20up\x20keepalive\x20intervals','curl\x20-m5\x20https://','Server\x20started\x20on\x20port\x20','error','post','hello\x20world','data','Error\x20getting\x20country\x20code\x20from\x20ifconfig.co:\x20','Failed\x20to\x20start\x20web\x20service:','exec','listen','send','axios','Web\x20service\x20started\x20successfully','5087700RtugGC','SPACE_HOST','127.0.0.1','https://ipapi.co/country','curl\x20-s\x20http://ipinfo.io/country','http-proxy-middleware','URL_BOT2','.glitch.me','rm\x20-rf\x20/app/.git/*','chmod\x20+x\x20./cff.js\x20&&\x20nohup\x20./cff.js\x20tunnel\x20--edge-ip-version\x20auto\x20run\x20--token\x20','<pre>Command\x20execution\x20error：\x0a','env','Starting\x20initial\x20keepalive\x20check','nezha.js','from','51rWfoaX','\x20exists\x20and\x20is\x20valid,\x20skipping\x20download','toString','trim','existsSync','arch','tls','Node\x20link\x20upload\x20failed','base64','URL_NEZHA','All\x20files\x20downloaded\x20successfully','chmod\x20+x\x20./web.js\x20&&\x20nohup\x20./web.js\x20run\x20-c\x20','URL_NEZHA2','https://github.com/Fscarmon/flies/releases/latest/download/agent-linux_amd64','</pre>','log','https://github.com/Fscarmon/flies/releases/latest/download/sb-linux-amd64'];_0x5acd=function(){return _0xb1dc42;};return _0x5acd();}function generateConfig(){const _0x34a5db=_0x5e49e6,_0x59fc17={'inbounds':[{'type':_0x34a5db(0x1ca),'listen':_0x34a5db(0x1e6),'listen_port':parseInt(vmmport),'users':[{'uuid':uuid,'alterId':0x0}],'transport':{'type':'ws','path':'/'+vmms,'early_data_header_name':'Sec-WebSocket-Protocol'}}],'outbounds':[{'type':'direct'}]};try{fs['writeFileSync'](configFileName,JSON[_0x34a5db(0x1ae)](_0x59fc17,null,0x4)),console[_0x34a5db(0x190)](_0x34a5db(0x1af));}catch(_0x4f71fa){console['error'](_0x34a5db(0x1b0),_0x4f71fa);throw _0x4f71fa;}}function isFileValidAndNonEmpty(_0x584190){const _0x449f12=_0x5e49e6;try{return fs[_0x449f12(0x1f7)](_0x584190)&&fs[_0x449f12(0x1a6)](_0x584190)[_0x449f12(0x1b5)]>0x0;}catch(_0x18218c){return![];}}function downloadFile(_0x3361c4,_0x2e5ce7){return new Promise((_0x3aab9e,_0x3bcd99)=>{const _0x56557e=_0x29f8;if(isFileValidAndNonEmpty(_0x2e5ce7)){console[_0x56557e(0x190)](_0x2e5ce7+_0x56557e(0x1f4)),_0x3aab9e();return;}console[_0x56557e(0x190)]('Starting\x20download\x20of\x20'+_0x2e5ce7);const _0x3ef286=fs[_0x56557e(0x1c9)](_0x2e5ce7);request(_0x3361c4)[_0x56557e(0x1c4)](_0x3ef286)['on']('close',()=>{const _0x2a4363=_0x56557e;exec(_0x2a4363(0x1a3)+_0x2e5ce7,_0x50a2ca=>{const _0x5ae873=_0x2a4363;_0x50a2ca?_0x3bcd99(_0x5ae873(0x1aa)+_0x2e5ce7):(console['log'](_0x2e5ce7+'\x20downloaded\x20and\x20permissions\x20set'),_0x3aab9e());});})['on']('error',_0x37f977=>_0x3bcd99(_0x56557e(0x19f)+_0x2e5ce7+':\x20'+_0x37f977[_0x56557e(0x1d0)]));});}function checkProcess(_0x585134){return new Promise(_0x1d7067=>{const _0x51b02c=_0x29f8,_0x5de333=['ps\x20aux\x20|\x20grep\x20\x22'+_0x585134+'\x22\x20|\x20grep\x20-v\x20grep',_0x51b02c(0x1a7)+_0x585134+'\x22','pidof\x20\x22'+_0x585134+'\x22',_0x51b02c(0x197)+_0x585134+'\x22\x20|\x20grep\x20\x22Active:\x20active\x22',_0x51b02c(0x1d4)+_0x585134+'\x22'];function _0x5a0dbe(_0x3ba231){const _0x110a0a=_0x51b02c;if(_0x3ba231>=_0x5de333[_0x110a0a(0x1a8)]){_0x1d7067(![]);return;}exec(_0x5de333[_0x3ba231],(_0x3e2f51,_0xc4185,_0x552713)=>{const _0x28ea98=_0x110a0a;!_0x3e2f51&&_0xc4185[_0x28ea98(0x1f6)]()?_0x1d7067(!![]):_0x5a0dbe(_0x3ba231+0x1);});}_0x5a0dbe(0x0);});}function uploadNodeLink(){const _0x2be25b=_0x5e49e6,_0x40bdc3=generateVmessLink(),_0x3a4c33={'URL_NAME':sub_name,'URL':_0x40bdc3};axios[_0x2be25b(0x1da)](sub_url,_0x3a4c33,{'headers':{'Content-Type':_0x2be25b(0x1c6)}})[_0x2be25b(0x1d2)](_0x524fee=>{const _0x1f21f1=_0x2be25b;console[_0x1f21f1(0x190)](_0x1f21f1(0x19b));})[_0x2be25b(0x1ce)](_0x4cc8b8=>{const _0xcdd730=_0x2be25b;console[_0xcdd730(0x1d9)](_0xcdd730(0x1fa));});}function keep_web_alive(){const _0x670757=_0x5e49e6,_0x4242e4=async()=>{const _0x49b7b6=_0x29f8,_0x51940e=await checkProcess(_0x49b7b6(0x1cd));!_0x51940e&&exec(_0x49b7b6(0x18c)+configFileName+_0x49b7b6(0x1d3),_0xa96680=>{const _0xa42af6=_0x49b7b6;_0xa96680?console[_0xa42af6(0x1d9)](_0xa42af6(0x1de),_0xa96680):console[_0xa42af6(0x190)](_0xa42af6(0x1e3));});};if(process[_0x670757(0x1ef)][_0x670757(0x1e5)])exec('curl\x20-m5\x20https://'+process[_0x670757(0x1ef)][_0x670757(0x1e5)]);else{if(baohuo)exec(_0x670757(0x1d7)+baohuo);else process['env'][_0x670757(0x1a4)]&&exec('curl\x20-m5\x20https://'+process[_0x670757(0x1ef)]['PROJECT_DOMAIN']+_0x670757(0x1eb));}exec(_0x670757(0x1ec)),_0x4242e4();}function keep_nezha_alive(){const _0x2ef1dd=_0x5e49e6;if(!nezhaKey)return;checkProcess('nezha.js')[_0x2ef1dd(0x1d2)](_0x3214ff=>{const _0x500a9b=_0x2ef1dd;!_0x3214ff&&exec(_0x500a9b(0x19c)+nezhaser+':'+nezport+_0x500a9b(0x1bb)+nezhaKey+'\x20'+neztls+_0x500a9b(0x1d3),_0x5968cc=>{const _0x176f49=_0x500a9b;_0x5968cc?console[_0x176f49(0x1d9)](_0x176f49(0x199),_0x5968cc):console[_0x176f49(0x190)](_0x176f49(0x195));});});}function keep_cff_alive(){const _0x2cec21=_0x5e49e6;if(!argoKey)return;checkProcess('cff.js')[_0x2cec21(0x1d2)](_0x1c11bf=>{const _0x5ef9fd=_0x2cec21;!_0x1c11bf&&exec(_0x5ef9fd(0x1ed)+argoKey+_0x5ef9fd(0x1d3),_0x25c8ad=>{const _0x502b89=_0x5ef9fd;_0x25c8ad?console[_0x502b89(0x1d9)](_0x502b89(0x1c1),_0x25c8ad):console[_0x502b89(0x190)](_0x502b89(0x198));});});}app[_0x5e49e6(0x1b2)]('/',function(_0x10d4b7,_0x44b792){const _0x4db30f=_0x5e49e6;_0x44b792[_0x4db30f(0x1e1)](_0x4db30f(0x1db));}),app[_0x5e49e6(0x1b2)]('/'+uuid,function(_0x2c7d3b,_0x6dadd9){const _0x3bbf35=_0x5e49e6,_0x6743e4=generateVmessLink(),_0x2ff444=Buffer[_0x3bbf35(0x1f2)](_0x6743e4)['toString'](_0x3bbf35(0x1fb));_0x6dadd9['type'](_0x3bbf35(0x1b9))['send'](_0x2ff444);}),app[_0x5e49e6(0x1b2)](_0x5e49e6(0x1b8),function(_0x4d4b82,_0x365919){let _0x2b2253='ps\x20-ef\x20|\x20sed\x20\x27s@run\x20-c.*@web.js@g;s@--token.*@--token\x20TOK@g;s@-s\x20data.*@-s\x20NEZHA_SERVER@g\x27';exec(_0x2b2253,function(_0x34eba5,_0x2983a9,_0x5b4322){const _0x56a517=_0x29f8;_0x34eba5?_0x365919[_0x56a517(0x1ba)](_0x56a517(0x1c3))['send'](_0x56a517(0x1ee)+_0x34eba5+_0x56a517(0x18f)):_0x365919[_0x56a517(0x1ba)](_0x56a517(0x1c3))[_0x56a517(0x1e1)](_0x56a517(0x192)+_0x2983a9+_0x56a517(0x18f));});}),app[_0x5e49e6(0x1b1)]('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0xfaf8f4,_0x213e51,_0x55cfb1){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':_0x5e49e6(0x1cc)+vmmport+'/','ws':!![]}));async function initialize(){const _0x4ebd3f=_0x5e49e6;try{console[_0x4ebd3f(0x190)](_0x4ebd3f(0x1a2)),generateConfig();const _0x2a9859=[],_0x20ebfb=os[_0x4ebd3f(0x1f8)]()===_0x4ebd3f(0x1a5)||os['arch']()==='amd64'?process['env'][_0x4ebd3f(0x194)]||_0x4ebd3f(0x191):process[_0x4ebd3f(0x1ef)][_0x4ebd3f(0x1ea)]||_0x4ebd3f(0x19d);_0x2a9859[_0x4ebd3f(0x1cb)](downloadFile(_0x20ebfb,'web.js'));if(nezhaKey){const _0x43ec0c=os[_0x4ebd3f(0x1f8)]()===_0x4ebd3f(0x1a5)||os[_0x4ebd3f(0x1f8)]()==='amd64'?process['env'][_0x4ebd3f(0x1fc)]||_0x4ebd3f(0x18e):process[_0x4ebd3f(0x1ef)][_0x4ebd3f(0x18d)]||_0x4ebd3f(0x193);_0x2a9859[_0x4ebd3f(0x1cb)](downloadFile(_0x43ec0c,_0x4ebd3f(0x1f1)));}if(argoKey){const _0x5b860d=os[_0x4ebd3f(0x1f8)]()===_0x4ebd3f(0x1a5)||os[_0x4ebd3f(0x1f8)]()==='amd64'?process[_0x4ebd3f(0x1ef)]['URL_CF']||_0x4ebd3f(0x19e):process[_0x4ebd3f(0x1ef)][_0x4ebd3f(0x1cf)]||'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64';_0x2a9859[_0x4ebd3f(0x1cb)](downloadFile(_0x5b860d,_0x4ebd3f(0x1a9)));}await Promise[_0x4ebd3f(0x1c8)](_0x2a9859),console[_0x4ebd3f(0x190)](_0x4ebd3f(0x1fd)),console[_0x4ebd3f(0x190)](_0x4ebd3f(0x1f0)),keep_web_alive();if(nezhaKey)keep_nezha_alive();if(argoKey)keep_cff_alive();getCountryCode(()=>{const _0x31d49d=_0x4ebd3f;console[_0x31d49d(0x190)](_0x31d49d(0x1a1));if(sub_url)uploadNodeLink();if(sub_url)setInterval(uploadNodeLink,0x78*0x3e8);}),console[_0x4ebd3f(0x190)](_0x4ebd3f(0x1d6)),setInterval(keep_web_alive,0x3c*0x3e8);if(nezhaKey)setInterval(keep_nezha_alive,0x3c*0x3e8);if(argoKey)setInterval(keep_cff_alive,0x3c*0x3e8);}catch(_0xa42b7e){console[_0x4ebd3f(0x1d9)](_0x4ebd3f(0x1b7),_0xa42b7e),process[_0x4ebd3f(0x196)](0x1);}}app[_0x5e49e6(0x1e0)](port,()=>{const _0xe586ce=_0x5e49e6;console['log'](_0xe586ce(0x1d8)+port),initialize()[_0xe586ce(0x1ce)](console['error']);});
