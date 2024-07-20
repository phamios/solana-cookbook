import{_ as l,r as o,o as u,c as i,a,b as s,w as c,F as r,e,d as n}from"./app.07ce7a66.js";const k={},b=e(`<h1 id="staking-stake-etme" tabindex="-1"><a class="header-anchor" href="#staking-stake-etme" aria-hidden="true">#</a> Staking (Stake Etme)</h1><h2 id="get-current-validators-gecerli-validator-lar\u0131-getirme" tabindex="-1"><a class="header-anchor" href="#get-current-validators-gecerli-validator-lar\u0131-getirme" aria-hidden="true">#</a> Get Current Validators (Ge\xE7erli Validator\u2019lar\u0131 Getirme)</h2><p>SOL&#39;u stake edebilir ve a\u011F\u0131n g\xFCvenli\u011Fini sa\u011Flamaya yard\u0131mc\u0131 oldu\u011Fumuz i\xE7in \xF6d\xFCller kazanabiliriz. Stake etmek i\xE7in, SOL&#39;u s\u0131rayla i\u015Flemleri i\u015Fleyen validator\u2019lara devrederiz.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> clusterApiUrl<span class="token punctuation">,</span> Connection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@solana/web3.js&quot;</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;devnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;confirmed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Get all validators, categorized by current (i.e. active) and deliquent (i.e. inactive)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> current<span class="token punctuation">,</span> delinquent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getVoteAccounts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;current validators: &quot;</span><span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;all validators: &quot;</span><span class="token punctuation">,</span> current<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>delinquent<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="create-stake-account-stake-hesab\u0131-olusturma" tabindex="-1"><a class="header-anchor" href="#create-stake-account-stake-hesab\u0131-olusturma" aria-hidden="true">#</a> Create Stake Account (Stake hesab\u0131 olu\u015Fturma)</h2>`,5),d=n("T\xFCm stake etme talimatlar\u0131, "),m={href:"https://docs.solana.com/developing/runtime-facilities/programs#stake-program",target:"_blank",rel:"noopener noreferrer"},g=n("Stake Program"),h=n("\u0131 taraf\u0131ndan i\u015Flenir. Ba\u015Flamak i\xE7in, standart bir "),y=n("sistem account"),w=n("'\u0131ndan farkl\u0131 olarak olu\u015Fturulan ve y\xF6netilen bir "),q={href:"https://docs.solana.com/staking/stake-accounts",target:"_blank",rel:"noopener noreferrer"},f=n("Stake Hesab\u0131"),v=n(" olu\u015Fturuyoruz. \xD6zellikle, account'\u0131n "),_=a("code",null,"Stake Authority",-1),S=n("\u2019sini ve "),A=a("code",null,"Withdrawal Authority",-1),x=n("\u2019sini ayarlamal\u0131y\u0131z."),T=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Setup a transaction to create our stake account</span>
<span class="token comment">// Note: \`StakeProgram.createAccount\` returns a \`Transaction\` preconfigured with the necessary \`TransactionInstruction\`s</span>
<span class="token keyword">const</span> createStakeAccountTx <span class="token operator">=</span> StakeProgram<span class="token punctuation">.</span><span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  authorized<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Authorized</span><span class="token punctuation">(</span>wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Here we set two authorities: Stake Authority and Withdrawal Authority. Both are set to our wallet.</span>
  fromPubkey<span class="token operator">:</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  lamports<span class="token operator">:</span> amountToStake<span class="token punctuation">,</span>
  lockup<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Lockup</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Optional. We&#39;ll set this to 0 for demonstration purposes.</span>
  stakePubkey<span class="token operator">:</span> stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> createStakeAccountTxId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>
  connection<span class="token punctuation">,</span>
  createStakeAccountTx<span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    wallet<span class="token punctuation">,</span>
    stakeAccount<span class="token punctuation">,</span> <span class="token comment">// Since we&#39;re creating a new stake account, we have that account sign as well</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account created. Tx Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>createStakeAccountTxId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check our newly created stake account balance. This should be 0.5 SOL.</span>
<span class="token keyword">let</span> stakeBalance <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getBalance</span><span class="token punctuation">(</span>stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account balance: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stakeBalance <span class="token operator">/</span> <span class="token constant">LAMPORTS_PER_SOL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> SOL</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Verify the status of our stake account. This will start as inactive and will take some time to activate.</span>
<span class="token keyword">let</span> stakeStatus <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getStakeActivation</span><span class="token punctuation">(</span>stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account status: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stakeStatus<span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="delegate-stake-delegate-stake" tabindex="-1"><a class="header-anchor" href="#delegate-stake-delegate-stake" aria-hidden="true">#</a> Delegate Stake (Delegate Stake)</h2><p>Bir stake account finanse edildi\u011Finde, <code>Stake Authority</code> bunu bir validator\u2019e devredebilir. Her stake account ayn\u0131 anda yaln\u0131zca bir validator\u2019e devredilebilir. Ayr\u0131ca, account&#39;taki t\xFCm tokenlar ya delegated(devredilebilir) ya da un-delegated(devredilemez) olmal\u0131d\u0131r. Bir kez devredildikten sonra, bir stake account&#39;\u0131n\u0131n aktif hale gelmesi birka\xE7 epoch(d\xF6ng\xFC)s\xFCrer.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// With a validator selected, we can now setup a transaction that delegates our stake to their vote account.</span>
<span class="token keyword">const</span> delegateTx <span class="token operator">=</span> StakeProgram<span class="token punctuation">.</span><span class="token function">delegate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  stakePubkey<span class="token operator">:</span> stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  authorizedPubkey<span class="token operator">:</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  votePubkey<span class="token operator">:</span> selectedValidatorPubkey<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> delegateTxId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> delegateTx<span class="token punctuation">,</span> <span class="token punctuation">[</span>
  wallet<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account delegated to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>selectedValidatorPubkey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Tx Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>delegateTxId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check in on our stake account. It should now be activating.</span>
stakeStatus <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getStakeActivation</span><span class="token punctuation">(</span>stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account status: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stakeStatus<span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="get-delegator-by-validators-validator-account-a-stake-eden-account-lar\u0131-getirme" tabindex="-1"><a class="header-anchor" href="#get-delegator-by-validators-validator-account-a-stake-eden-account-lar\u0131-getirme" aria-hidden="true">#</a> Get Delegator by Validators (Validator account\u2019a stake eden account\u2019lar\u0131 getirme)</h2>`,5),P=n("Birden fazla account, belirli bir validator account\u2019a stake etmi\u015F olabilir. T\xFCm stakerlar\u0131 getirmek i\xE7in "),K=a("code",null,"getProgramAccounts",-1),B=n(" veya "),z=a("code",null,"getParsedProgramAccounts",-1),O=n(" API kullanaca\u011F\u0131z. Daha fazla bilgi i\xE7in "),E=n("k\u0131lavuzlar b\xF6l\xFCm\xFC"),V=n("ne bak\u0131n. Bahis account'lar\u0131 200 bayt uzunlu\u011Fundad\u0131r ve Voter Public Key 124 bayttan ba\u015Flar. "),G={href:"https://github.com/solana-labs/solana/blob/e960634909a9617fb98d5d836c9c4c5e0d9d59cc/sdk/program/src/stake/state.rs",target:"_blank",rel:"noopener noreferrer"},I=n("Referans"),C=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token constant">STAKE_PROGRAM_ID</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PublicKey</span><span class="token punctuation">(</span>
  <span class="token string">&quot;Stake11111111111111111111111111111111111111&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">VOTE_PUB_KEY</span> <span class="token operator">=</span> <span class="token string">&quot;27MtjMSAQ2BGkXNuJEJkxFyCJT8dugGAaHJ9T7Gc6x4x&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Connection</span><span class="token punctuation">(</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;mainnet-beta&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;confirmed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> accounts <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getParsedProgramAccounts</span><span class="token punctuation">(</span><span class="token constant">STAKE_PROGRAM_ID</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  filters<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      dataSize<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      memcmp<span class="token operator">:</span> <span class="token punctuation">{</span>
        offset<span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span> <span class="token comment">// number of bytes</span>
        bytes<span class="token operator">:</span> <span class="token constant">VOTE_PUB_KEY</span><span class="token punctuation">,</span> <span class="token comment">// base58 encoded string</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Accounts for program </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">STAKE_PROGRAM_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Total number of delegators found for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">VOTE_PUB_KEY</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>accounts<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>accounts<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sample delegator:</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>accounts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
// Output

  Accounts for program Stake11111111111111111111111111111111111111: 
  Total number of delegators found for 27MtjMSAQ2BGkXNuJEJkxFyCJT8dugGAaHJ9T7Gc6x4x is: 184
  Sample delegator: 
  {
    &quot;account&quot;: {
      &quot;data&quot;: {
        &quot;parsed&quot;: {
          &quot;info&quot;: {
            &quot;meta&quot;: {
              &quot;authorized&quot;: {
                &quot;staker&quot;: &quot;3VDVh3rHTLkNJp6FVYbuFcaihYBFCQX5VSBZk23ckDGV&quot;,
                &quot;withdrawer&quot;: &quot;EhYXq3ANp5nAerUpbSgd7VK2RRcxK1zNuSQ755G5Mtxx&quot;
              },
              &quot;lockup&quot;: {
                &quot;custodian&quot;: &quot;3XdBZcURF5nKg3oTZAcfQZg8XEc5eKsx6vK8r3BdGGxg&quot;,
                &quot;epoch&quot;: 0,
                &quot;unixTimestamp&quot;: 1822867200
              },
              &quot;rentExemptReserve&quot;: &quot;2282880&quot;
            },
            &quot;stake&quot;: {
              &quot;creditsObserved&quot;: 58685367,
              &quot;delegation&quot;: {
                &quot;activationEpoch&quot;: &quot;208&quot;,
                &quot;deactivationEpoch&quot;: &quot;18446744073709551615&quot;,
                &quot;stake&quot;: &quot;433005300621&quot;,
                &quot;voter&quot;: &quot;27MtjMSAQ2BGkXNuJEJkxFyCJT8dugGAaHJ9T7Gc6x4x&quot;,
                &quot;warmupCooldownRate&quot;: 0.25
              }
            }
          },
          &quot;type&quot;: &quot;delegated&quot;
        },
        &quot;program&quot;: &quot;stake&quot;,
        &quot;space&quot;: 200
      },
      &quot;executable&quot;: false,
      &quot;lamports&quot;: 433012149261,
      &quot;owner&quot;: {
        &quot;_bn&quot;: &quot;06a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc000000000&quot;
      },
      &quot;rentEpoch&quot;: 264
    },
    &quot;pubkey&quot;: {
      &quot;_bn&quot;: &quot;0dc8b506f95e52c9ac725e714c7078799dd3268df562161411fe0916a4dc0a43&quot;
    }
  }
  
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br></div></div><h2 id="deactivate-stake-stake-i-devre-d\u0131s\u0131-b\u0131rakma" tabindex="-1"><a class="header-anchor" href="#deactivate-stake-stake-i-devre-d\u0131s\u0131-b\u0131rakma" aria-hidden="true">#</a> Deactivate Stake (Stake\u2019i Devre D\u0131\u015F\u0131 B\u0131rakma)</h2><p>Bir stake account devredildikten sonra herhangi bir zamanda, <code>Stake Authority</code> account&#39;\u0131 devre d\u0131\u015F\u0131 b\u0131rakmay\u0131 se\xE7ebilir. Devre d\u0131\u015F\u0131 b\u0131rakman\u0131n tamamlanmas\u0131 birka\xE7 epoch alabilir ve herhangi bir SOL geri \xE7ekilmeden \xF6nce gereklidir.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// At anytime we can choose to deactivate our stake. Our stake account must be inactive before we can withdraw funds.</span>
<span class="token keyword">const</span> deactivateTx <span class="token operator">=</span> StakeProgram<span class="token punctuation">.</span><span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  stakePubkey<span class="token operator">:</span> stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  authorizedPubkey<span class="token operator">:</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> deactivateTxId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>
  connection<span class="token punctuation">,</span>
  deactivateTx<span class="token punctuation">,</span>
  <span class="token punctuation">[</span>wallet<span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account deactivated. Tx Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>deactivateTxId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Check in on our stake account. It should now be inactive.</span>
stakeStatus <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getStakeActivation</span><span class="token punctuation">(</span>stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account status: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stakeStatus<span class="token punctuation">.</span>state<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="withdraw-stake-stake-i-cekme" tabindex="-1"><a class="header-anchor" href="#withdraw-stake-stake-i-cekme" aria-hidden="true">#</a> Withdraw Stake (Stake\u2019i \xC7ekme)</h2><p>Devre d\u0131\u015F\u0131 b\u0131rak\u0131ld\u0131\u011F\u0131nda,<code>Withdrawal Authority</code> SOL&#39;yi bir sistem account&#39;\u0131na geri \xE7ekebilir. Bir stake hasab\u0131 art\u0131k devredilmedi\u011Finde ve 0 SOL bakiyesine sahip oldu\u011Funda, etkili bir \u015Fekilde yok edilir.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Once deactivated, we can withdraw our SOL back to our main wallet</span>
<span class="token keyword">const</span> withdrawTx <span class="token operator">=</span> StakeProgram<span class="token punctuation">.</span><span class="token function">withdraw</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  stakePubkey<span class="token operator">:</span> stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  authorizedPubkey<span class="token operator">:</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  toPubkey<span class="token operator">:</span> wallet<span class="token punctuation">.</span>publicKey<span class="token punctuation">,</span>
  lamports<span class="token operator">:</span> stakeBalance<span class="token punctuation">,</span> <span class="token comment">// Withdraw the full balance at the time of the transaction</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> withdrawTxId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">sendAndConfirmTransaction</span><span class="token punctuation">(</span>connection<span class="token punctuation">,</span> withdrawTx<span class="token punctuation">,</span> <span class="token punctuation">[</span>
  wallet<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account withdrawn. Tx Id: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>withdrawTxId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Confirm that our stake account balance is now 0</span>
stakeBalance <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getBalance</span><span class="token punctuation">(</span>stakeAccount<span class="token punctuation">.</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Stake account balance: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>stakeBalance <span class="token operator">/</span> <span class="token constant">LAMPORTS_PER_SOL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> SOL</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,7);function L(R,D){const t=o("ExternalLinkIcon"),p=o("RouterLink");return u(),i(r,null,[b,a("p",null,[d,a("a",m,[g,s(t)]),h,s(p,{to:"/tr/references/accounts.html#create-a-system-account"},{default:c(()=>[y]),_:1}),w,a("a",q,[f,s(t)]),v,_,S,A,x]),T,a("p",null,[P,K,B,z,O,s(p,{to:"/guides/get-program-accounts.html"},{default:c(()=>[E]),_:1}),V,a("a",G,[I,s(t)])]),C],64)}var $=l(k,[["render",L]]);export{$ as default};
