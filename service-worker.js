if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const a=s=>l(s,t),u={module:{uri:t},exports:r,require:a};e[t]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(n(...s),r)))}}define(["./workbox-85077874"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"6219f9e9618165d716c52d2b035fcdec"},{url:"assets/404.e3d0e9e4.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.067bd9c7.js",revision:null},{url:"assets/AutoComplete.html.03f19a69.js",revision:null},{url:"assets/AutoComplete.html.801f9123.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/Basic.html.318cc6d5.js",revision:null},{url:"assets/Basic.html.56d7ee64.js",revision:null},{url:"assets/Basic.html.61abb56f.js",revision:null},{url:"assets/Basic.html.78302afa.js",revision:null},{url:"assets/Basic.html.7aaff96c.js",revision:null},{url:"assets/Basic.html.82872503.js",revision:null},{url:"assets/Basic.html.a8b771d9.js",revision:null},{url:"assets/Basic.html.a8c1dcef.js",revision:null},{url:"assets/Before.html.02065154.js",revision:null},{url:"assets/Before.html.4b5bc8e9.js",revision:null},{url:"assets/Before.html.97af8b2a.js",revision:null},{url:"assets/Before.html.a9666437.js",revision:null},{url:"assets/BestPratices.html.03ecdf82.js",revision:null},{url:"assets/BestPratices.html.a3136a4f.js",revision:null},{url:"assets/Button.html.d38801e5.js",revision:null},{url:"assets/Button.html.ece3030c.js",revision:null},{url:"assets/buttons.html.2c47e67d.js",revision:null},{url:"assets/buttons.html.b3ad1367.js",revision:null},{url:"assets/ButtonsManager.html.ee92c900.js",revision:null},{url:"assets/ButtonsManager.html.feb4723a.js",revision:null},{url:"assets/Client.html.2ed53a8f.js",revision:null},{url:"assets/Client.html.523832e3.js",revision:null},{url:"assets/ClientUtil.html.328e3dfa.js",revision:null},{url:"assets/ClientUtil.html.cabb38a3.js",revision:null},{url:"assets/Command.html.2f8b8389.js",revision:null},{url:"assets/Command.html.325dea2e.js",revision:null},{url:"assets/CommandOptions.html.2f51ddf7.js",revision:null},{url:"assets/CommandOptions.html.851bc805.js",revision:null},{url:"assets/commands.html.012004e0.js",revision:null},{url:"assets/commands.html.23c7d2ed.js",revision:null},{url:"assets/CommandsManager.html.50548dbf.js",revision:null},{url:"assets/CommandsManager.html.a26ab755.js",revision:null},{url:"assets/Cooldown.html.001cbc8a.js",revision:null},{url:"assets/Cooldown.html.6abb349c.js",revision:null},{url:"assets/CustomEmitter.html.859602c1.js",revision:null},{url:"assets/CustomEmitter.html.c9505fe2.js",revision:null},{url:"assets/Event.html.30f409b7.js",revision:null},{url:"assets/Event.html.ff9926df.js",revision:null},{url:"assets/EventOptions.html.ba8dfa81.js",revision:null},{url:"assets/EventOptions.html.fad06cd6.js",revision:null},{url:"assets/events.html.3678f376.js",revision:null},{url:"assets/events.html.57d818bd.js",revision:null},{url:"assets/EventsManager.html.3caaf319.js",revision:null},{url:"assets/EventsManager.html.91d0278d.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.3382b44a.js",revision:null},{url:"assets/index.html.5f689ba3.js",revision:null},{url:"assets/index.html.bed55854.js",revision:null},{url:"assets/index.html.cdbff222.js",revision:null},{url:"assets/index.html.db4bb270.js",revision:null},{url:"assets/index.html.ff22ba06.js",revision:null},{url:"assets/Inhibitor.html.052e7b30.js",revision:null},{url:"assets/Inhibitor.html.17ae01d2.js",revision:null},{url:"assets/Inhibitor.html.646a84cc.js",revision:null},{url:"assets/Inhibitor.html.ec3a60ca.js",revision:null},{url:"assets/InhibitorOptions.html.11a16565.js",revision:null},{url:"assets/InhibitorOptions.html.7b9722bd.js",revision:null},{url:"assets/InhibitorPriority.html.1d0e3032.js",revision:null},{url:"assets/InhibitorPriority.html.b764e050.js",revision:null},{url:"assets/inhibitors.html.7c810e10.js",revision:null},{url:"assets/inhibitors.html.b7559a55.js",revision:null},{url:"assets/InhibitorsManager.html.495d5e75.js",revision:null},{url:"assets/InhibitorsManager.html.fc6e95d9.js",revision:null},{url:"assets/InhibitorType.html.2b5463be.js",revision:null},{url:"assets/InhibitorType.html.f7960dd0.js",revision:null},{url:"assets/Installation.html.9edfc2e1.js",revision:null},{url:"assets/Installation.html.ce36f4ea.js",revision:null},{url:"assets/Layout.02c6de48.js",revision:null},{url:"assets/ManagerOptions.html.1f8e89c8.js",revision:null},{url:"assets/ManagerOptions.html.fdaf9b4c.js",revision:null},{url:"assets/ManagersDefaultOptions.html.02c88bf6.js",revision:null},{url:"assets/ManagersDefaultOptions.html.fb35f9dc.js",revision:null},{url:"assets/Once.html.6d532f84.js",revision:null},{url:"assets/Once.html.9a5038b2.js",revision:null},{url:"assets/Permissions.html.10019c77.js",revision:null},{url:"assets/Permissions.html.40da05a5.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/ProjectStructure.html.2acb131a.js",revision:null},{url:"assets/ProjectStructure.html.fb65c3c1.js",revision:null},{url:"assets/Restrictions.html.0111aac2.js",revision:null},{url:"assets/Restrictions.html.70b2dc5a.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/SelectMenu.html.3983bbe1.js",revision:null},{url:"assets/SelectMenu.html.48984cf0.js",revision:null},{url:"assets/selectMenus.html.61942297.js",revision:null},{url:"assets/selectMenus.html.9b20a601.js",revision:null},{url:"assets/SelectMenusManager.html.415ab25d.js",revision:null},{url:"assets/SelectMenusManager.html.44b0a59c.js",revision:null},{url:"assets/ShewenyClient.html.8e2e4f68.js",revision:null},{url:"assets/ShewenyClient.html.fa726b2e.js",revision:null},{url:"assets/ShewenyClientCollections.html.662b4a9c.js",revision:null},{url:"assets/ShewenyClientCollections.html.757bdafd.js",revision:null},{url:"assets/ShewenyClientManagers.html.95b26790.js",revision:null},{url:"assets/ShewenyClientManagers.html.c2285690.js",revision:null},{url:"assets/ShewenyClientOptions.html.3746d55f.js",revision:null},{url:"assets/ShewenyClientOptions.html.c162001c.js",revision:null},{url:"assets/ShewenyError.html.bf9ab123.js",revision:null},{url:"assets/ShewenyError.html.f948fb12.js",revision:null},{url:"assets/ShewenyInformation.html.ad0be33f.js",revision:null},{url:"assets/ShewenyInformation.html.d2716ee0.js",revision:null},{url:"assets/ShewenyWarning.html.99478bce.js",revision:null},{url:"assets/ShewenyWarning.html.9af5e467.js",revision:null},{url:"assets/Start.html.a06a4b04.js",revision:null},{url:"assets/Start.html.b6e06deb.js",revision:null},{url:"assets/style.0bceed0d.css",revision:null},{url:"assets/Usage.html.08c0e513.js",revision:null},{url:"assets/Usage.html.7e61bcc0.js",revision:null},{url:"assets/V1-V2.html.04aafd96.js",revision:null},{url:"assets/V1-V2.html.c08d642c.js",revision:null},{url:"assets/V2-V3.html.a525d21c.js",revision:null},{url:"assets/V2-V3.html.a86852a4.js",revision:null},{url:"doc/client/ClientUtil.html",revision:"74be9b9be794f0423e3fb60fc532a4ba"},{url:"doc/client/ShewenyClient.html",revision:"e907ceb27a8e3e2df5efc881ceab93e1"},{url:"doc/index.html",revision:"26a1c308f5ab34698320d19bda9ee565"},{url:"doc/managers/ButtonsManager.html",revision:"5cd4d2b721694f38e4c094b65ce012e6"},{url:"doc/managers/CommandsManager.html",revision:"fe0a5b56de16245f71eec6c071793991"},{url:"doc/managers/EventsManager.html",revision:"9af8653c1b1fcbd5ce0a0fb235a67d06"},{url:"doc/managers/InhibitorsManager.html",revision:"793942ec6df04f6b691c9da583794047"},{url:"doc/managers/SelectMenusManager.html",revision:"da355794e6aa652289f51980a582c7dd"},{url:"doc/other/ShewenyError.html",revision:"32b8789caad2466f4e6e75fd34065a05"},{url:"doc/other/ShewenyInformation.html",revision:"e0453b7818070410c9eb376946772f54"},{url:"doc/other/ShewenyWarning.html",revision:"1687cb81af12f53ad0cd6ecb9115ee95"},{url:"doc/structures/Button.html",revision:"14ba1f7c5f4bc2b529d56fe97072861e"},{url:"doc/structures/Command.html",revision:"b7600104bca011513077b27dd3281c02"},{url:"doc/structures/Event.html",revision:"0103eaff2ab3370c14f7d11d4bb7e9b8"},{url:"doc/structures/Inhibitor.html",revision:"92a20b6b373252754521fb3f1a427248"},{url:"doc/structures/SelectMenu.html",revision:"47a9fd09bc1be5a731bbdf1af669c5b3"},{url:"doc/typedef/CommandOptions.html",revision:"1acf17141dbc31fc9a959dbc17cb9b65"},{url:"doc/typedef/EventOptions.html",revision:"70c7fd322f94974b6049a68efa684a47"},{url:"doc/typedef/InhibitorOptions.html",revision:"fcb31627e8f1e8937aafacea5753ba7d"},{url:"doc/typedef/ManagerOptions.html",revision:"d4c5ae5f323d2fb2b72da75e4e34cde3"},{url:"doc/typedef/ManagersDefaultOptions.html",revision:"bba3abb7e7861b2ad370692648162a9a"},{url:"doc/typedef/ShewenyClientCollections.html",revision:"9ba5ad6bfc96922c6dc6c05d3ef78da7"},{url:"doc/typedef/ShewenyClientManagers.html",revision:"2ebe8aacc176259927241bcf6db660e9"},{url:"doc/typedef/ShewenyClientOptions.html",revision:"3bf6db6aae7f33427e165c627f68a993"},{url:"guide/buttons/Basic.html",revision:"bfcc3322674326a05485f0239f705569"},{url:"guide/buttons/Before.html",revision:"5b622d3e8737bf3a93b54531477c7c85"},{url:"guide/cli/Installation.html",revision:"c436ddbcf2427b7cd7f743262089d431"},{url:"guide/cli/Usage.html",revision:"c61b621ab4b5539b2418386b5033606f"},{url:"guide/commands/AutoComplete.html",revision:"32f92be794e72a18fb1bedfd38cd1c8d"},{url:"guide/commands/Basic.html",revision:"4d19061694d2544eae631d9c58b3a9b1"},{url:"guide/commands/Cooldown.html",revision:"35e1cc69fb1673c9e8490ce336319d77"},{url:"guide/commands/Permissions.html",revision:"ee30489ddfac68c5c8b46c6fe82188ed"},{url:"guide/commands/Restrictions.html",revision:"fad8055c538c514530e2bdcdeb986fa2"},{url:"guide/events/Basic.html",revision:"8e2635b8314d89cd99f695482a20ecbd"},{url:"guide/events/CustomEmitter.html",revision:"9ab3387d4dd00c8738aba6fe21db0098"},{url:"guide/events/Once.html",revision:"94ddd42ea8d72b3eeaa0f773e91ddcc6"},{url:"guide/getting-started/Client.html",revision:"36eb0e16dd8f713b6d1832f34957d2ec"},{url:"guide/getting-started/ProjectStructure.html",revision:"7168aba5565e2008a19a7f8c2b113c86"},{url:"guide/getting-started/Start.html",revision:"1fca6eddbefc1f9a546ad9fff6eb9d1e"},{url:"guide/index.html",revision:"c17a9b4c0bc322d3d65c927b30e6728f"},{url:"guide/inhibitors/Inhibitor.html",revision:"c85967aed5e85701eb4f003034991c74"},{url:"guide/inhibitors/InhibitorPriority.html",revision:"6881da5fea6af7e483568e46d8cbb0ea"},{url:"guide/inhibitors/InhibitorType.html",revision:"c2eaf455f44cca3f593943025cbc5251"},{url:"guide/managers/buttons.html",revision:"4f577a794245ce444d97a7d943f145e9"},{url:"guide/managers/commands.html",revision:"bb50d6a83057f1ea17d3a4120a30008a"},{url:"guide/managers/events.html",revision:"712f1e4ce5d252901fc71fe4c50b342c"},{url:"guide/managers/inhibitors.html",revision:"3ba793abc1b544357a8977641a140e4f"},{url:"guide/managers/selectMenus.html",revision:"8bbbcdbcecdbb6cd1736b21426326cf4"},{url:"guide/select-menus/Basic.html",revision:"5b3755818d60d07667a482771858f2b7"},{url:"guide/select-menus/Before.html",revision:"b2c9c4d372a7d14b89f905ed257b9b00"},{url:"guide/topics/BestPratices.html",revision:"cb0c778c021df375260b76458ff0fdf3"},{url:"guide/topics/V1-V2.html",revision:"c21bff0876bf1724e05204630c3dcf5e"},{url:"guide/topics/V2-V3.html",revision:"981e97eafbf0ef7ab76b75fa9fb5f93e"},{url:"images/icons/android-chrome-192x192.png",revision:"eb2450a994ed6a78d9fcca4beaf45c14"},{url:"images/icons/android-chrome-512x512.png",revision:"0454b8ea5692f2ea27c77f06c4dde38e"},{url:"index.html",revision:"f9c87e44d0970076c97d20adfac10c23"}],{})}));
