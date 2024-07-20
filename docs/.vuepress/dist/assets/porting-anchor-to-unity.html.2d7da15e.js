import{_ as p,r as e,o as c,c as i,a as n,b as t,F as l,d as a,e as o}from"./app.07ce7a66.js";const u={},r=n("h1",{id:"pag-port-ng-isang-programa-sa-unity",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pag-port-ng-isang-programa-sa-unity","aria-hidden":"true"},"#"),a(" Pag-port ng isang programa sa Unity")],-1),g=n("p",null,"Kapag nakapagsulat ka na ng solana program ay baka gusto mo na itong gamitin sa Unity Game engine. Sa kabutihang palad mayroong isang code generator na nagbibigay-daan sa iyo na mag-port ng isang anchor idl (isang representasyon ng json ng isang solana program) sa C#",-1),k=n("h2",{id:"pagbuo-ng-kliyente",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pagbuo-ng-kliyente","aria-hidden":"true"},"#"),a(" Pagbuo ng Kliyente")],-1),m=a("Kapag gumagamit ng Anchor makakabuo ka ng isang IDL file na isang representasyon ng JSON ng iyong programa. Gamit ang IDL na ito maaari kang makabuo ng iba't ibang mga kliyente. Halimbawa JS o C# sa Unity. "),d=n("br",null,null,-1),b={href:"https://github.com/magicblock-labs/Solana.Unity.Anchor",target:"_blank",rel:"noopener noreferrer"},h=a("IDL to C# Converter"),y=n("br",null,null,-1),_=o(`<p>Ang dalawang linyang ito ay bubuo ng isang C# client para sa laro.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dotnet tool install Solana<span class="token punctuation">.</span>Unity<span class="token punctuation">.</span>Anchor<span class="token punctuation">.</span>Tool
dotnet anchorgen <span class="token operator">-</span>i idl<span class="token operator">/</span>file<span class="token punctuation">.</span>json <span class="token operator">-</span>o src<span class="token operator">/</span>ProgramCode<span class="token punctuation">.</span>cs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Ito ay bubuo sa iyo ng isang C# na representasyon ng iyong programa, na nagbibigay-daan sa iyong deserialize ang data at madaling gumawa ng mga instruction sa programa.</p><h2 id="pagbuo-ng-transaksyon-sa-unity-c" tabindex="-1"><a class="header-anchor" href="#pagbuo-ng-transaksyon-sa-unity-c" aria-hidden="true">#</a> Pagbuo ng Transaksyon sa Unity C#</h2>`,4),v=a("Sa loob ng Unity game engine, magagamit natin ang "),f={href:"https://assetstore.unity.com/packages/decentralization/infrastructure/solana-sdk-for-unity-246931",target:"_blank",rel:"noopener noreferrer"},S=a("Solana Unity SDK"),A=a(" upang makipag-ugnayan sa programa."),C=n("li",null,[n("p",null,"Una nating mahanap ang nasa chain address ng game data account na may TryFindProgramAddress. Kailangan nating ipasa ang account na ito sa transaksyon para malaman ng Solana runtime na gusto nating baguhin ang account na ito.")],-1),P=n("li",null,[n("p",null,"Susunod na ginagamit namin ang nabuong kliyente upang lumikha ng MoveRight na pagtuturo.")],-1),T=n("li",null,[n("p",null,"Pagkatapos ay humiling kami ng block hash mula sa isang RPC node. Ito ay kinakailangan upang malaman ni Solana kung gaano katagal ang magiging bisa ng transaksyon.")],-1),w=n("li",null,[n("p",null,"Susunod na itinakda namin ang nagbabayad ng bayad upang maging wallet ng mga manlalaro.")],-1),R=n("li",null,[n("p",null,"Pagkatapos ay idinagdag namin ang paglipat ng tamang pagtuturo sa Transaksyon. Maaari din kaming magdagdag ng maraming instruction sa isang solong transaksyon kung kinakailangan.")],-1),I=n("li",null,[n("p",null,"Pagkatapos ang transaksyon ay mapirmahan at pagkatapos ay ipadala sa RPC node para sa pagproseso. May iba't ibang antas ng Commitment ang Solana. Kung itatakda namin ang antas ng pangako sa Nakumpirma, makukuha na namin ang bagong estado sa loob ng susunod na 500ms.")],-1),B={href:"https://github.com/Woody4618/SolPlay_Unity_SDK/tree/main/Assets/SolPlay/Examples/TinyAdventure",target:"_blank",rel:"noopener noreferrer"},x=a("Buong C# Source Code"),U=o(`<div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>public async <span class="token keyword">void</span> <span class="token function">MoveRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    PublicKey<span class="token punctuation">.</span><span class="token function">TryFindProgramAddress</span><span class="token punctuation">(</span>new<span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">{</span>
        Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span><span class="token string">&quot;level1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ProgramId<span class="token punctuation">,</span> out gameDataAccount<span class="token punctuation">,</span> out var bump<span class="token punctuation">)</span><span class="token punctuation">;</span>

    MoveRightAccounts account <span class="token operator">=</span> new <span class="token function">MoveRightAccounts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    account<span class="token punctuation">.</span>GameDataAccount <span class="token operator">=</span> gameDataAccount<span class="token punctuation">;</span>
    TransactionInstruction moveRightInstruction <span class="token operator">=</span> TinyAdventureProgram<span class="token punctuation">.</span><span class="token function">MoveRight</span><span class="token punctuation">(</span>account<span class="token punctuation">,</span> ProgramId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    var walletHolderService <span class="token operator">=</span> ServiceFactory<span class="token punctuation">.</span>Resolve<span class="token operator">&lt;</span>WalletHolderService<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    var result <span class="token operator">=</span> await walletHolderService<span class="token punctuation">.</span>BaseWallet<span class="token punctuation">.</span>ActiveRpcClient<span class="token punctuation">.</span><span class="token function">GetRecentBlockHashAsync</span><span class="token punctuation">(</span>Commitment<span class="token punctuation">.</span>Confirmed<span class="token punctuation">)</span><span class="token punctuation">;</span>

    Transaction transaction <span class="token operator">=</span> new <span class="token function">Transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    transaction<span class="token punctuation">.</span>FeePayer <span class="token operator">=</span> walletHolderService<span class="token punctuation">.</span>BaseWallet<span class="token punctuation">.</span>Account<span class="token punctuation">.</span>PublicKey<span class="token punctuation">;</span>
    transaction<span class="token punctuation">.</span>RecentBlockHash <span class="token operator">=</span> result<span class="token punctuation">.</span>Result<span class="token punctuation">.</span>Value<span class="token punctuation">.</span>Blockhash<span class="token punctuation">;</span>
    transaction<span class="token punctuation">.</span>Signatures <span class="token operator">=</span> new List<span class="token operator">&lt;</span>SignaturePubKeyPair<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    transaction<span class="token punctuation">.</span>Instructions <span class="token operator">=</span> new List<span class="token operator">&lt;</span>TransactionInstruction<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    transaction<span class="token punctuation">.</span>Instructions<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>moveRightInstruction<span class="token punctuation">)</span><span class="token punctuation">;</span>

    Transaction signedTransaction <span class="token operator">=</span> await walletHolderService<span class="token punctuation">.</span>BaseWallet<span class="token punctuation">.</span><span class="token function">SignTransaction</span><span class="token punctuation">(</span>transaction<span class="token punctuation">)</span><span class="token punctuation">;</span>

    RequestResult<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> signature <span class="token operator">=</span> await walletHolderService<span class="token punctuation">.</span>BaseWallet<span class="token punctuation">.</span>ActiveRpcClient<span class="token punctuation">.</span><span class="token function">SendTransactionAsync</span><span class="token punctuation">(</span>
        Convert<span class="token punctuation">.</span><span class="token function">ToBase64String</span><span class="token punctuation">(</span>signedTransaction<span class="token punctuation">.</span><span class="token function">Serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        true<span class="token punctuation">,</span> Commitment<span class="token punctuation">.</span>Confirmed<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1);function K(H,D){const s=e("ExternalLinkIcon");return c(),i(l,null,[r,g,k,n("p",null,[m,d,n("a",b,[h,t(s)]),y]),_,n("p",null,[v,n("a",f,[S,t(s)]),A]),n("ol",null,[C,P,T,w,R,I,n("li",null,[n("p",null,[n("a",B,[x,t(s)])])])]),U],64)}var L=p(u,[["render",K]]);export{L as default};
