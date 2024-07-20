import{_ as o,r as p,o as c,c as l,a as n,b as t,F as i,d as a,e}from"./app.07ce7a66.js";const r={},u=n("h1",{id:"porting-a-program-to-unity",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#porting-a-program-to-unity","aria-hidden":"true"},"#"),a(" Porting a program to Unity")],-1),k=n("p",null,"When you have written a solana program you now maybe want to use it in the Unity Game engine. Fortunately there is a code generator which lets you port a anchor idl (a json representation of a solana program) to C#",-1),h=n("h2",{id:"generating-the-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#generating-the-client","aria-hidden":"true"},"#"),a(" Generating the Client")],-1),d=a("When using Anchor you will be able to generate an IDL file which is a JSON representation of your program. With this IDL you can then generate different clients. For example JS or C# to Unity. "),m=n("br",null,null,-1),b={href:"https://github.com/magicblock-labs/Solana.Unity.Anchor",target:"_blank",rel:"noopener noreferrer"},g=a("IDL to C# Converter"),_=n("br",null,null,-1),f=e(`<p>These two lines will generate a C# client for the game.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dotnet tool install Solana<span class="token punctuation">.</span>Unity<span class="token punctuation">.</span>Anchor<span class="token punctuation">.</span>Tool
dotnet anchorgen <span class="token operator">-</span>i idl<span class="token operator">/</span>file<span class="token punctuation">.</span>json <span class="token operator">-</span>o src<span class="token operator">/</span>ProgramCode<span class="token punctuation">.</span>cs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>This will generate you a C# representation of you program, which lets you deserialize the data and easily create instructions to the program.</p><h2 id="building-the-transaction-in-unity-c" tabindex="-1"><a class="header-anchor" href="#building-the-transaction-in-unity-c" aria-hidden="true">#</a> Building the Transaction in Unity C#</h2>`,4),y=a("Within Unity game engine we can then use the "),w={href:"https://assetstore.unity.com/packages/decentralization/infrastructure/solana-sdk-for-unity-246931",target:"_blank",rel:"noopener noreferrer"},v=a("Solana Unity SDK"),S=a(" to interact with the program."),T=n("li",null,[n("p",null,"First we find the on chain adress of the game data account with TryFindProgramAddress. We need to pass in this account to the transaction so that the Solana runtime knows that we want to change this account.")],-1),C=n("li",null,[n("p",null,"Next we use the generated client to create a MoveRight instruction.")],-1),A=n("li",null,[n("p",null,"Then we request a block hash from an RPC node. This is needed so that Solana knows how long the transaction will be valid.")],-1),R=n("li",null,[n("p",null,"Next we set the fee payer to be the players wallet.")],-1),x=n("li",null,[n("p",null,"Then we add the move right instruction to the Transaction. We can also add multiple instructions to a singe transaction if needed.")],-1),P=n("li",null,[n("p",null,"Afterwards the transaction gets signed and then send to the RPC node for processing. Solana has different Commitment levels. If we set the commitment level to Confirmed we will be able to get the new state already within the next 500ms.")],-1),I={href:"https://github.com/Woody4618/SolPlay_Unity_SDK/tree/main/Assets/SolPlay/Examples/TinyAdventure",target:"_blank",rel:"noopener noreferrer"},B=a("Full C# Source Code"),W=e(`<div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code>public async <span class="token keyword">void</span> <span class="token function">MoveRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,1);function F(U,D){const s=p("ExternalLinkIcon");return c(),l(i,null,[u,k,h,n("p",null,[d,m,n("a",b,[g,t(s)]),_]),f,n("p",null,[y,n("a",w,[v,t(s)]),S]),n("ol",null,[T,C,A,R,x,P,n("li",null,[n("p",null,[n("a",I,[B,t(s)])])])]),W],64)}var L=o(r,[["render",F]]);export{L as default};
