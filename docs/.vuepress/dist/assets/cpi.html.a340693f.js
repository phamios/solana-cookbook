import{_ as t,r as p,o as c,c as i,a,b as e,F as l,e as o,d as n}from"./app.07ce7a66.js";const r={},u=o('<h1 id="cross-program-invocations-cpis" tabindex="-1"><a class="header-anchor" href="#cross-program-invocations-cpis" aria-hidden="true">#</a> Cross Program Invocations (CPIs)</h1><p>Ang Cross-Program Invocation (CPI) ay isang direktang tawag mula sa isang programa patungo sa isa pa, na nagbibigay-daan para sa composability ng mga programang Solana. Tulad ng sinumang kliyente na maaaring tumawag sa anumang programa gamit ang JSON RPC, anumang programa ay maaaring tumawag sa anumang iba pang programa sa pamamagitan ng isang CPI. Talagang ginagawa ng mga CPI ang buong Solana ecosystem sa isang higanteng API na magagamit mo bilang isang developer.</p><p>Ang layunin ng seksyong ito ay magbigay ng mataas na antas ng pangkalahatang-ideya na mga CPI. Mangyaring sumangguni sa mga naka-link na mapagkukunan sa ibaba para sa mas detalyadong mga paliwanag, halimbawa, at walkthrough.</p><h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>Ang\xA0Cross-Program Invocation (CPI)\xA0ay isang tawag mula sa isang programa patungo sa isa pa, na nagta-target ng isang partikular na instruction sa tinatawag na program</li><li>Binibigyang-daan ng mga CPI ang programa sa pagtawag na palawigin ang mga pribilehiyo ng pagpirma nito sa programang tumatawag</li><li>Maaaring magsagawa ng mga CPI ang mga programa gamit ang alinman sa <code>invoke</code> o <code>invoke_signed</code> sa loob ng kanilang mga instruction</li><li>Ang <code>invoke</code> ay ginagamit kapag ang lahat ng kinakailangang lagda ay naa-access bago ang invocation, nang hindi nangangailangan ng mga PDA na kumilos bilang mga pumirma</li><li>Ang <code>invoke_signed</code> ay ginagamit kapag ang mga PDA mula sa programa sa pagtawag ay kinakailangan bilang mga pumirma sa CPI</li><li>Pagkatapos maisagawa ang isang CPI sa isa pang programa, ang program na tumatawag ay maaaring gumawa ng karagdagang mga CPI sa iba pang mga programa, hanggang sa maximum na lalim na 4</li></ul></div><h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive" aria-hidden="true">#</a> Deep Dive</h2><p>Pinapagana ng Cross Program Invocations (CPIs) ang composability ng mga programang Solana, na nagbibigay-daan sa mga developer na gamitin at bumuo sa pagtuturo ng mga kasalukuyang programa.</p>',7),g=n("Upang magsagawa ng mga CPI, gamitin ang "),k={href:"https://docs.rs/solana-program/latest/solana_program/program/fn.invoke.html",target:"_blank",rel:"noopener noreferrer"},m=n("invoke"),d=n(" o [invoke_signed](https://docs.rs/solana-program /latest/solana_program/program/fn.invoke_signed.html) function na makikita sa "),b=a("code",null,"solana_program",-1),h=n(" crate."),_=o(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">// Used when there are not signatures for PDAs needed</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">invoke</span><span class="token punctuation">(</span>
    instruction<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Instruction</span><span class="token punctuation">,</span>
    account_infos<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;_</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span>

<span class="token comment">// Used when a program must provide a &#39;signature&#39; for a PDA, hence the signer_seeds parameter</span>
<span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">invoke_signed</span><span class="token punctuation">(</span>
    instruction<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Instruction</span><span class="token punctuation">,</span>
    account_infos<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;_</span><span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    signers_seeds<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">ProgramResult</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Upang makagawa ng CPI, kailangan mong tukuyin at bumuo ng isang pagtuturo sa programang ini-invoke at magbigay ng listahan ng mga account na kailangan para sa pagtuturo na iyon. Kung ang isang PDA ay kinakailangan bilang isang pumirma, ang <code>signers_seeds</code> ay dapat ding ibigay kapag gumagamit ng <code>invoke_signed</code>.</p><h3 id="cpi-with-invoke" tabindex="-1"><a class="header-anchor" href="#cpi-with-invoke" aria-hidden="true">#</a> CPI with\xA0<code>invoke</code></h3><p>Ginagamit ang function na <code>invoke</code> kapag gumagawa ng CPI na hindi nangangailangan ng anumang PDA upang kumilos bilang mga pumirma. Kapag gumagawa ng mga CPI, pinapahaba ng runtime ng Solana ang orihinal na lagda na ipinasa sa isang programa sa programa ng callee.</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token function">invoke</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span>some_instruction<span class="token punctuation">,</span>                           <span class="token comment">// instruction to invoke</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> account_two<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// accounts required by instruction</span>
<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="cpi-with-invoke-signed" tabindex="-1"><a class="header-anchor" href="#cpi-with-invoke-signed" aria-hidden="true">#</a> CPI with\xA0<code>invoke_signed</code></h3><p>Para gumawa ng CPI na nangangailangan ng PDA bilang signer, gamitin ang <code>invoke_signed</code> function at ibigay ang mga kinakailangang seed para makuha ang kinakailangang PDA ng calling program.</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token function">invoke_signed</span><span class="token punctuation">(</span>
    <span class="token operator">&amp;</span>some_instruction<span class="token punctuation">,</span>                   <span class="token comment">// instruction to invoke</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pda<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// accounts required by instruction, where one is a pda required as signer</span>
    <span class="token operator">&amp;</span><span class="token punctuation">[</span>signers_seeds<span class="token punctuation">]</span><span class="token punctuation">,</span>                    <span class="token comment">// seeds to derive pda</span>
<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Bagama&#39;t walang sariling mga pribadong susi ang mga PDA, maaari pa rin silang kumilos bilang isang lumagda sa isang pagtuturo sa pamamagitan ng CPI. Para ma-verify na ang isang PDA ay kabilang sa calling program, ang mga seed na ginamit upang bumuo ng PDA na kinakailangan bilang isang signer ay dapat isama bilang <code>signers_seeds</code>.</p><p>Ang runtime ng Solana ay panloob na tatawag sa\xA0<code>create_program_address</code>\xA0gamit ang mga seed na ibinigay at ang\xA0<code>program_id</code>\xA0ng calling program. Ang resultang PDA ay ihahambing sa mga address na ibinigay sa pagtuturo. Kung may tugma, ang PDA ay itinuturing na isang wastong pumirma.</p><h3 id="cpi-instruction" tabindex="-1"><a class="header-anchor" href="#cpi-instruction" aria-hidden="true">#</a> CPI <code>Instruction</code></h3><p>Depende sa program kung saan ka tumatawag, maaaring mayroong available na crate na may mga function ng helper para sa paggawa ng\xA0<code>Instruction</code>. Maraming indibidwal at organisasyon ang gumagawa ng mga crates na available sa publiko kasama ng kanilang mga programa na naglalantad ng mga ganitong uri ng mga function upang pasimplehin ang pagtawag sa kanilang mga programa.</p><p>Ang kahulugan ng uri ng <code>Pagtuturo</code> na kinakailangan para sa isang CPI ay kinabibilangan ng:</p><ul><li><code>program_id</code>\xA0- ang pampublikong key ng program na nagsasagawa ng pagtuturo</li><li><code>accounts</code>\xA0- isang listahan ng lahat ng account na maaaring basahin o sulatan sa panahon ng pagpapatupad ng pagtuturo</li><li><code>data</code>\xA0- ang data ng pagtuturo na kinakailangan ng pagtuturo</li></ul><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">Instruction</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> program_id<span class="token punctuation">:</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> accounts<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">AccountMeta</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> data<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">u8</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The\xA0<code>AccountMeta</code>\xA0struct has the following definition:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">AccountMeta</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> pubkey<span class="token punctuation">:</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> is_signer<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token keyword">pub</span> is_writable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Kapag gumagawa ng CPI, gamitin ang sumusunod na syntax upang tukuyin ang <code>AccountMeta</code> para sa bawat account:</p><ul><li><code>AccountMeta::new</code>\xA0- nagsasaad ng maisusulat</li><li><code>AccountMeta::new_readonly</code>\xA0- nagsasaad ng\xA0<em>hindi</em>\xA0masusulat</li><li><code>(pubkey, true)</code>\xA0- nagsasaad na ang account ay lumagda</li><li><code>(pubkey, false)</code>\xA0- nagsasaad na ang account ay\xA0<em>hindi</em>\xA0pumirma</li></ul><p>Narito ang isang halimbawa:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">solana_program<span class="token punctuation">::</span>instruction<span class="token punctuation">::</span></span><span class="token class-name">AccountMeta</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> account_metas <span class="token operator">=</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>account1_pubkey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span>account2_pubkey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new_readonly</span><span class="token punctuation">(</span>account3_pubkey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">AccountMeta</span><span class="token punctuation">::</span><span class="token function">new_readonly</span><span class="token punctuation">(</span>account4_pubkey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="cpi-accountinfo" tabindex="-1"><a class="header-anchor" href="#cpi-accountinfo" aria-hidden="true">#</a> CPI <code>AccountInfo</code></h3><p>Para magamit ang <code>invoke</code> at <code>invoke_signed</code>, kailangan din ng listahan ng <code>account_infos</code>. Katulad ng listahan ng <code>AccountMeta</code> sa pagtuturo, kailangan mong isama ang lahat ng <code>AccountInfo</code> ng bawat account kung saan babasahin o susulatan ng program na iyong tinatawagan.</p><p>Para sa sanggunian, ang <code>AccountInfo</code> struct ay may sumusunod na kahulugan:</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token comment">/// Account information</span>
<span class="token attribute attr-name">#[derive(Clone)]</span>
<span class="token keyword">pub</span> <span class="token keyword">struct</span> <span class="token type-definition class-name">AccountInfo</span><span class="token operator">&lt;</span><span class="token lifetime-annotation symbol">&#39;a</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/// Public key of the account</span>
    <span class="token keyword">pub</span> key<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token comment">/// Was the transaction signed by this account&#39;s public key?</span>
    <span class="token keyword">pub</span> is_signer<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// Is the account writable?</span>
    <span class="token keyword">pub</span> is_writable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// The lamports in the account.  Modifiable by programs.</span>
    <span class="token keyword">pub</span> lamports<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token keyword">u64</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">/// The data held in this account.  Modifiable by programs.</span>
    <span class="token keyword">pub</span> data<span class="token punctuation">:</span> <span class="token class-name">Rc</span><span class="token operator">&lt;</span><span class="token class-name">RefCell</span><span class="token operator">&lt;</span><span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token keyword">mut</span> <span class="token punctuation">[</span><span class="token keyword">u8</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span>
    <span class="token comment">/// Program that owns this account</span>
    <span class="token keyword">pub</span> owner<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token lifetime-annotation symbol">&#39;a</span> <span class="token class-name">Pubkey</span><span class="token punctuation">,</span>
    <span class="token comment">/// This account&#39;s data contains a loaded program (and is now read-only)</span>
    <span class="token keyword">pub</span> executable<span class="token punctuation">:</span> <span class="token keyword">bool</span><span class="token punctuation">,</span>
    <span class="token comment">/// The epoch at which this account will next owe rent</span>
    <span class="token keyword">pub</span> rent_epoch<span class="token punctuation">:</span> <span class="token class-name">Epoch</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,25),y=n("Maaari kang lumikha ng kopya ng "),w=a("code",null,"AccountInfo",-1),f=n(" para sa bawat kinakailangang account gamit ang "),v={href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html#impl-Clone-for-AccountInfo%3C'a%3E",target:"_blank",rel:"noopener noreferrer"},P=n("Clone"),I=n(" na katangian, na ipinatupad para sa "),A={href:"https://docs.rs/solana-program/latest/solana_program/account_info/struct.AccountInfo.html",target:"_blank",rel:"noopener noreferrer"},C=n("AccountInfo"),x=n(" struct sa "),D=a("code",null,"solana_program",-1),M=n(" crate ."),S=o(`<div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">let</span> accounts_infos <span class="token operator">=</span> <span class="token punctuation">[</span>
    account_one<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    account_two<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    account_three<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Bagama&#39;t ang seksyong ito ay nagbigay ng mataas na antas na pangkalahatang-ideya ng mga CPI, ang mga mas detalyadong paliwanag, halimbawa, at walkthrough ay makikita sa mga naka-link na mapagkukunan sa ibaba.</p><h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources" aria-hidden="true">#</a> Other Resources</h2>`,3),R={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},T=n("Official Documentation"),N={href:"https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation",target:"_blank",rel:"noopener noreferrer"},B=n("Solana Cookbook Reference"),E={href:"https://www.soldev.app/course/cpi",target:"_blank",rel:"noopener noreferrer"},V=n("Solana Course Native CPI Lesson"),K={href:"https://www.soldev.app/course/anchor-cpi",target:"_blank",rel:"noopener noreferrer"},F=n("Solana Course Anchor CPI Lesson"),L={href:"https://github.com/solana-developers/program-examples/tree/main/basics/cross-program-invocation",target:"_blank",rel:"noopener noreferrer"},U=n("Solana Developers Program Examples");function q(O,G){const s=p("ExternalLinkIcon");return c(),i(l,null,[u,a("p",null,[g,a("a",k,[m,e(s)]),d,b,h]),_,a("p",null,[y,w,f,a("a",v,[P,e(s)]),I,a("a",A,[C,e(s)]),x,D,M]),S,a("ul",null,[a("li",null,[a("a",R,[T,e(s)])]),a("li",null,[a("a",N,[B,e(s)])]),a("li",null,[a("a",E,[V,e(s)])]),a("li",null,[a("a",K,[F,e(s)])]),a("li",null,[a("a",L,[U,e(s)])])])],64)}var W=t(r,[["render",q]]);export{W as default};
