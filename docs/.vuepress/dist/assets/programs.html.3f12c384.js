import{_ as i,r as a,o as c,c as d,a as o,b as t,w as l,F as _,d as e,e as n}from"./app.07ce7a66.js";const h={},p=o("h1",{id:"programs",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#programs","aria-hidden":"true"},"#"),e(" Programs")],-1),g=o("p",null,"\uC5B4\uB5A4 \uAC1C\uBC1C\uC790\uB4E0 Solana \uBE14\uB85D\uCCB4\uC778\uC5D0 Program\uC744 \uC791\uC131\uD558\uACE0 \uBC30\uD3EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. Program(\uB2E4\uB978 \uD504\uB85C\uD1A0\uCF5C\uB4E4\uC5D0\uC11C smart contract\uB85C \uC54C\uB824\uC9C4)\uB4E4\uC740 DeFi, NFTs\uBD80\uD130 \uC18C\uC15C \uBBF8\uB514\uC5B4\uC640 \uAC8C\uC784\uAE4C\uC9C0 \uBAA8\uB4E0 \uAC83\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uB294 on-chain \uD65C\uB3D9\uC744 \uC704\uD55C \uAE30\uBC18 \uC5ED\uD560\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.",-1),m=o("h2",{id:"facts",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#facts","aria-hidden":"true"},"#"),e(" Facts")],-1),u={class:"custom-container tip"},b=o("p",{class:"custom-container-title"},"Fact Sheet",-1),P=o("li",null,[e("Program\uC740 \uC0AC\uC6A9\uC790\uB098 \uB2E4\uB978 Program\uC73C\uB85C\uBD80\uD130 \uBC1B\uC740 "),o("a",{href:"./transactions"},"instructions"),e("\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4.")],-1),f=e("\uBAA8\uB4E0 Program\uB4E4\uC740 \uC0C1\uD0DC\uB97C \uBCF4\uC874\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC989, Program\uB4E4\uC774 \uC0AC\uC6A9\uD558\uB294 \uBAA8\uB4E0 \uB370\uC774\uD130\uB294 Instruction\uB4E4\uC744 \uAC70\uCCD0 \uBD84\uB9AC\uB41C "),k=e("Account"),y=e("\uB4E4\uB85C \uBCF4\uB0B4\uC9D1\uB2C8\uB2E4."),v=o("li",null,[e("Program \uADF8 \uC790\uCCB4\uB294 "),o("code",null,"executable"),e(" \uD45C\uC2DC\uB41C Account\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.")],-1),L=e("\uBAA8\uB4E0 Program\uC740 "),S={href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader",target:"_blank",rel:"noopener noreferrer"},x=e("BPF Loader"),F=e("\uC5D0 \uC758\uD574 \uC18C\uC720\uB418\uACE0 "),A={href:"https://docs.solana.com/developing/programming-model/runtime",target:"_blank",rel:"noopener noreferrer"},R=e("Solana Runtime"),C=e("\uC5D0 \uC758\uD574 \uC2E4\uD589\uB429\uB2C8\uB2E4."),B=e("\uAC1C\uBC1C\uC790\uB4E4\uC740 \uBCF4\uD1B5 Rust\uB098 C++\uB85C Program\uC744 \uC791\uC131\uD569\uB2C8\uB2E4. \uD558\uC9C0\uB9CC, "),D={href:"https://llvm.org/",target:"_blank",rel:"noopener noreferrer"},I=e("LLVM"),E=e("\uC758 "),N={href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter",target:"_blank",rel:"noopener noreferrer"},w=e("BPF"),T=e(" backend\uB85C \uBE4C\uB4DC\uB418\uB294 \uC5B4\uB5A4 \uC5B8\uC5B4\uB3C4 \uC120\uD0DD \uAC00\uB2A5\uD569\uB2C8\uB2E4."),V=n("<li>\uBAA8\uB4E0 Program\uC740 Instruction \uCC98\uB9AC\uAC00 \uC77C\uC5B4\uB098\uB294 \uB2E8\uC77C entry point\uB97C \uAC16\uACE0 \uC788\uC2B5\uB2C8\uB2E4.(i.e. <code>process_instructio</code>);<br> \uC544\uB798\uB294 \uD56D\uC0C1 \uD3EC\uD568\uB418\uB294 \uD30C\uB77C\uBBF8\uD130\uB4E4\uC785\uB2C8\uB2E4. <ul><li><code>program_id</code>: <code>pubkey</code></li><li><code>accounts</code>: <code>array</code>,</li><li><code>instruction_data</code>: <code>byte array</code></li></ul></li>",1),M=o("h2",{id:"deep-dive",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#deep-dive","aria-hidden":"true"},"#"),e(" Deep Dive")],-1),z=o("p",null,"\uB300\uBD80\uBD84\uC758 \uB2E4\uB978 \uBE14\uB85D\uCCB4\uC778\uB4E4\uACFC \uB2E4\uB974\uAC8C, Solana\uB294 \uB370\uC774\uD130\uC640 \uCF54\uB4DC\uB97C \uC644\uBCBD\uD558\uAC8C \uBD84\uB9AC\uD569\uB2C8\uB2E4. Program\uC774 \uC0C1\uD638 \uC791\uC6A9\uD558\uB294 \uBAA8\uB4E0 \uB370\uC774\uD130\uB4E4\uC740 \uBD84\uB9AC\uB41C Account\uB4E4\uC5D0 \uC800\uC7A5\uB418\uBA70, Instruction\uB4E4\uC744 \uAC70\uCCD0 \uD638\uCD9C\uB429\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBAA8\uB378\uC740 \uB2E8\uC77C Generic Program\uC774 \uCD94\uAC00\uC801\uC778 \uBC30\uD3EC \uC5C6\uC774 \uB2E4\uC591\uD55C Account\uB4E4\uC744 \uAC70\uCCD0 \uB3D9\uC791\uD558\uB294 \uAC83\uC744 \uAC00\uB2A5\uD558\uAC8C \uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uD328\uD134\uC758 \uD754\uD55C \uC608\uB294 Native\uC640 SPL Program \uB4E4\uC5D0\uC11C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),O=o("h3",{id:"native-programs-the-solana-program-library-spl",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#native-programs-the-solana-program-library-spl","aria-hidden":"true"},"#"),e(" Native Programs & The Solana Program Library (SPL)")],-1),j=e("Solana\uB294 on-chain \uC0C1\uD638 \uC791\uC6A9\uC744 \uC704\uD574 \uD589\uC2DD \uAD6C\uC131 \uC694\uC18C\uB85C\uC368 \uAE30\uB2A5\uD558\uB294 \uB2E4\uC218\uC758 Program\uB4E4\uC744 \uAC16\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774 Program\uB4E4\uC740 "),U={href:"https://docs.solana.com/developing/runtime-facilities/programs#bpf-loader",target:"_blank",rel:"noopener noreferrer"},G=e("Native Program"),H=e("\uB4E4\uACFC "),J={href:"https://spl.solana.com/",target:"_blank",rel:"noopener noreferrer"},K=e("Solana Program Library (SPL) Program"),W=e("\uB4E4\uB85C \uB098\uB269\uB2C8\uB2E4."),q=e("Native Program\uB4E4\uC740 validator\uB4E4\uC744 \uC6B4\uC601\uD558\uAE30 \uC704\uD574 \uC694\uAD6C\uB418\uB294 \uAE30\uBC18 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 Program\uB4E4 \uC911\uC5D0 \uAC00\uC7A5 \uC798 \uC54C\uB824\uC9C4 \uAC83\uC774 "),Q={href:"https://docs.solana.com/developing/runtime-facilities/programs#system-program",target:"_blank",rel:"noopener noreferrer"},X=e("System Program"),Y=e("\uC785\uB2C8\uB2E4. System Program\uC740 \uC0C8\uB85C\uC6B4 Account\uB4E4\uC744 \uAD00\uB9AC\uD558\uB294 \uAC83\uACFC \uB450 \uC9D1\uB2E8 \uC0AC\uC774\uC5D0\uC11C SOL\uC744 \uC804\uC1A1\uD558\uB294 \uAC83\uC744 \uCC45\uC784\uC9D1\uB2C8\uB2E4."),Z=e("SLP Program\uC740 \uD1A0\uD070 \uC0DD\uC131, \uAD50\uD658, \uB300\uC5EC\uD558\uB294 \uAC83\uC5D0 \uB354\uD574 stake pool\uC744 \uBC1C\uC0DD\uC2DC\uD0A4\uACE0, on-chain name service\uB97C \uC720\uC9C0\uD558\uB294 \uAC83 \uD3EC\uD568\uD574 \uB2E4\uC218\uC758 on-chain \uD65C\uB3D9\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4. "),$={href:"https://spl.solana.com/token",target:"_blank",rel:"noopener noreferrer"},oo=e("SPL Token Program"),eo=e("\uB4E4\uC740 CLI\uB97C \uAC70\uCCD0 \uC9C1\uC811 \uD638\uCD9C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBC18\uBA74\uC5D0 "),to={href:"https://spl.solana.com/associated-token-account",target:"_blank",rel:"noopener noreferrer"},ro=e("Associated Token Account Program"),no=e(" \uAC19\uC740 \uB2E4\uB978 \uAC83\uB4E4\uC740 \uBCF4\uD1B5 Custom Program\uB4E4\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4."),ao=o("h3",{id:"writing-programs",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#writing-programs","aria-hidden":"true"},"#"),e(" Writing Programs")],-1),so=e("Program\uB4E4\uC740 \uBCF4\uD1B5 Rust\uC640 C++\uB85C \uAC1C\uBC1C\uB429\uB2C8\uB2E4. \uD558\uC9C0\uB9CC, LLVM\uC758 BPF backend\uB85C \uBE4C\uB4DC\uB418\uB294 \uC5B4\uB5A4 \uC5B8\uC5B4\uB85C\uB3C4 \uAC1C\uBC1C \uAC00\uB2A5\uD569\uB2C8\uB2E4. "),io={href:"https://neon-labs.org/",target:"_blank",rel:"noopener noreferrer"},co=e("Neon Labs"),lo=e("\uC640 "),_o={href:"https://solang.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"},ho=e("Solang"),po=e("\uC740 \uCD5C\uADFC "),go={href:"https://ethereum.org/en/developers/docs/evm/",target:"_blank",rel:"noopener noreferrer"},mo=e("EVM"),uo=e(" \uD638\uD658\uC744 \uAC00\uB2A5\uD558\uAC8C \uD558\uACE0 \uAC1C\uBC1C\uC790\uB4E4\uC774 Program\uC744 Solidity\uC5D0\uC11C \uC791\uC131\uD560 \uC218 \uC788\uAC8C \uD558\uB294 \uC2DC\uB3C4\uB97C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."),bo=n("<p>\uB300\uBD80\uBD84\uC758 Rust \uAE30\uBC18 Program\uB4E4\uC740 \uC544\uB798\uC640 \uAC19\uC740 \uC544\uD0A4\uD14D\uCC98\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.:</p><table><thead><tr><th>File</th><th>Description</th></tr></thead><tbody><tr><td>lib.rs</td><td>Registering modules</td></tr><tr><td>entrypoint.rs</td><td>Entrypoint to the program</td></tr><tr><td>instruction.rs</td><td>Program API, (de)serializing instruction data</td></tr><tr><td>processor.rs</td><td>Program logic</td></tr><tr><td>state.rs</td><td>Program objects, (de)serializing state</td></tr><tr><td>error.rs</td><td>Program-specific errors</td></tr></tbody></table>",2),Po=e("\uCD5C\uADFC\uC5D0\uB294, "),fo={href:"https://github.com/coral-xyz/anchor",target:"_blank",rel:"noopener noreferrer"},ko=e("Anchor"),yo=e("\uAC00 Program\uC744 \uAC1C\uBC1C\uD558\uAE30 \uC704\uD55C \uD504\uB808\uC784\uC6CC\uD06C\uB85C \uB728\uACE0 \uC788\uC2B5\uB2C8\uB2E4. Anchor\uB294 boilerplate\uB97C \uC904\uC774\uACE0 (de)serialization \uCC98\uB9AC\uB97C \uAC04\uC18C\uD654\uD558\uB294 Ruby on Rails\uC640 \uBE44\uC2B7\uD55C Rust \uAE30\uBC18 \uD504\uB808\uC784\uC6CC\uD06C\uC785\uB2C8\uB2E4."),vo=n('<p>Program\uB4E4\uC740 \uBCF4\uD1B5 Testnet\uACFC Mainnet\uC5D0 \uBC30\uD3EC\uB418\uAE30 \uC804\uC5D0 Localhost\uC640 Devnet \uD658\uACBD\uC5D0\uC11C \uAC1C\uBC1C\uB418\uACE0 \uD14C\uC2A4\uD2B8\uB429\uB2C8\uB2E4. Solana\uB294 \uC544\uB798 \uD658\uACBD\uB4E4\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p><table><thead><tr><th>Cluster Environment</th><th>RPC Connection URL</th></tr></thead><tbody><tr><td>Mainnet-beta</td><td>https://api.mainnet-beta.solana.com</td></tr><tr><td>Testnet</td><td>https://api.testnet.solana.com</td></tr><tr><td>Devnet</td><td>https://api.devnet.solana.com</td></tr><tr><td>Localhost</td><td>Default port: 8899 (e.g. http://localhost:8899, http://192.168.1.88:8899)</td></tr></tbody></table><p>\uC77C\uB2E8 \uD658\uACBD\uC5D0 \uBC30\uD3EC\uB418\uACE0 \uB098\uBA74, Client\uB4E4\uC740 \uAC01\uAC01\uC758 Cluster\uB85C\uC758 RPC \uC5F0\uACB0\uC744 \uD1B5\uD574 On-chain Program\uB4E4\uACFC \uC0C1\uD638\uC791\uC6A9 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="deploying-programs" tabindex="-1"><a class="header-anchor" href="#deploying-programs" aria-hidden="true">#</a> Deploying Programs</h3>',4),Lo=e("\uAC1C\uBC1C\uC790\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 "),So={href:"https://docs.solana.com/cli/deploy-a-program",target:"_blank",rel:"noopener noreferrer"},xo=e("CLI"),Fo=e("\uB97C \uD1B5\uD574 Program\uC744 \uBC30\uD3EC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),Ao=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>solana program deploy <span class="token operator">&lt;</span>PROGRAM_FILEPATH<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,1),Ro=e("Program\uC774 \uBC30\uD3EC\uB420 \uB54C, "),Co={href:"https://en.wikipedia.org/wiki/Executable_and_Linkable_Format",target:"_blank",rel:"noopener noreferrer"},Bo=e("ELF shared object"),Do=e("(BPF bytecode\uB97C \uD3EC\uD568\uD558\uB294)\uB85C \uCEF4\uD30C\uC77C\uB418\uACE0 Solana Cluster\uB85C \uC5C5\uB85C\uB4DC\uB429\uB2C8\uB2E4. Program\uB4E4\uC740 \uADF8\uB4E4\uC758 Account\uAC00 "),Io=o("code",null,"execuable",-1),Eo=e(" \uD45C\uC2DC\uB418\uACE0 BPF Loader\uC5D0 \uD560\uB2F9\uB420 \uB54C\uB97C \uC81C\uC678\uD558\uACE0 Account \uC548\uC5D0 \uC874\uC7AC\uD569\uB2C8\uB2E4. \uC774 Account\uC758 \uC8FC\uC18C\uB294 "),No=o("code",null,"program_id",-1),wo=e("\uB85C\uC368 \uBAA8\uB4E0 Transaction\uC5D0\uC11C Program\uC744 \uCC38\uC870\uD558\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB429\uB2C8\uB2E4."),To=e("Solana\uB294 \uCD5C\uADFC "),Vo={href:"https://explorer.solana.com/address/BPFLoaderUpgradeab1e11111111111111111111111",target:"_blank",rel:"noopener noreferrer"},Mo=e("Upgradable BPF Loader"),zo=e("\uB97C \uD3EC\uD568\uD574 multiple BPF Loader\uB97C \uC9C0\uC6D0\uD569\uB2C8\uB2E4. BPF Loader\uB294 Program\uC758 Account\uB97C \uAD00\uB9AC\uD558\uB294\uB370 Client\uB4E4\uC774 "),Oo=o("code",null,"program_id",-1),jo=e("\uB97C \uD1B5\uD574 \uC774\uAC83\uC744 \uAC00\uB2A5\uD558\uAC8C \uB9CC\uB4E4 \uCC45\uC784\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uBAA8\uB4E0 Program\uB4E4\uC740 Instruction\uC5D0 \uB300\uD55C \uCC98\uB9AC\uAC00 \uC77C\uC5B4\uB098\uB294 \uD558\uB098\uC758 Entry Point\uB97C \uAC16\uACE0 \uC788\uC2B5\uB2C8\uB2E4. (i.e. "),Uo=o("code",null,"process_instruction",-1),Go=e(")"),Ho=o("br",null,null,-1),Jo=e(" \uC544\uB798\uB294 \uD56D\uC0C1 \uD3EC\uD568\uB418\uB294 \uD30C\uB77C\uBBF8\uD130\uB4E4\uC785\uB2C8\uB2E4."),Ko=n('<ul><li><code>program_id</code>: <code>pubkey</code></li><li><code>accounts</code>: <code>array</code>,</li><li><code>instruction_data</code>: <code>byte array</code></li></ul><p>\uC77C\uB2E8 \uD638\uCD9C\uB418\uACE0 \uB098\uBA74, Program\uB4E4\uC740 Solana Runtime\uC5D0 \uC758\uD574 \uC2E4\uD589\uB429\uB2C8\uB2E4.</p><h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources" aria-hidden="true">#</a> Other Resources</h2>',3),Wo={href:"https://docs.solana.com/developing/on-chain-programs/overview",target:"_blank",rel:"noopener noreferrer"},qo=e("Official Documentation"),Qo={href:"https://spl.solana.com/",target:"_blank",rel:"noopener noreferrer"},Xo=e("SPL Documentation"),Yo={href:"https://jstarry.notion.site/Program-deploys-29780c48794c47308d5f138074dd9838",target:"_blank",rel:"noopener noreferrer"},Zo=e("Program Deploys by Justin Starry"),$o={href:"https://book.solmeet.dev/notes/solana-starter-kit",target:"_blank",rel:"noopener noreferrer"},oe=e("Solana Starter Kit by Iron Addicted Dog"),ee={href:"https://paulx.dev/blog/2021/01/14/programming-on-solana-an-introduction/",target:"_blank",rel:"noopener noreferrer"},te=e("Programming on Solana by Paulx"),re={href:"https://2501babe.github.io/posts/solana101.html",target:"_blank",rel:"noopener noreferrer"},ne=e("An Introduction to the Solana Blockchain by Hana"),ae={href:"https://github.com/coral-xyz/anchor",target:"_blank",rel:"noopener noreferrer"},se=e("Anchor");function ie(ce,de){const s=a("RouterLink"),r=a("ExternalLinkIcon");return c(),d(_,null,[p,g,m,o("div",u,[b,o("ul",null,[P,o("li",null,[f,t(s,{to:"/kr/core-concepts/accounts.html"},{default:l(()=>[k]),_:1}),y]),v,o("li",null,[L,o("a",S,[x,t(r)]),F,o("a",A,[R,t(r)]),C]),o("li",null,[B,o("a",D,[I,t(r)]),E,o("a",N,[w,t(r)]),T]),V])]),M,z,O,o("p",null,[j,o("a",U,[G,t(r)]),H,o("a",J,[K,t(r)]),W]),o("p",null,[q,o("a",Q,[X,t(r)]),Y]),o("p",null,[Z,o("a",$,[oo,t(r)]),eo,o("a",to,[ro,t(r)]),no]),ao,o("p",null,[so,o("a",io,[co,t(r)]),lo,o("a",_o,[ho,t(r)]),po,o("a",go,[mo,t(r)]),uo]),bo,o("p",null,[Po,o("a",fo,[ko,t(r)]),yo]),vo,o("p",null,[Lo,o("a",So,[xo,t(r)]),Fo]),Ao,o("p",null,[Ro,o("a",Co,[Bo,t(r)]),Do,Io,Eo,No,wo]),o("p",null,[To,o("a",Vo,[Mo,t(r)]),zo,Oo,jo,Uo,Go,Ho,Jo]),Ko,o("ul",null,[o("li",null,[o("a",Wo,[qo,t(r)])]),o("li",null,[o("a",Qo,[Xo,t(r)])]),o("li",null,[o("a",Yo,[Zo,t(r)])]),o("li",null,[o("a",$o,[oe,t(r)])]),o("li",null,[o("a",ee,[te,t(r)])]),o("li",null,[o("a",re,[ne,t(r)])]),o("li",null,[o("a",ae,[se,t(r)])])])],64)}var _e=i(h,[["render",ie]]);export{_e as default};
