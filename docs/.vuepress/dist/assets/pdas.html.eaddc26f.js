import{_ as t,r as l,o,c as s,a,b as r,w as d,F as m,d as e,e as c}from"./app.07ce7a66.js";var u="/assets/account-matrix.c3a79f80.png",p="/assets/pda-curve.7c0b9307.png";const k={},g=a("h1",{id:"program-derived-addresses-pdas-programdan-turetilmis-adresler",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#program-derived-addresses-pdas-programdan-turetilmis-adresler","aria-hidden":"true"},"#"),e(" Program Derived Addresses (PDAs) (Programdan T\xFCretilmi\u015F Adresler)")],-1),h=e("Program Derived Addresses (Programdan T\xFCretilmi\u015F Adresler, PDA\u2019lar), belirli bir program taraf\u0131ndan kontrol edilmek \xFCzere tasarlanm\u0131\u015F account'lara ev sahipli\u011Fi yapar. PDA'lar ile programlar, private key\u2019e ihtiya\xE7 duymadan belirli adresleri programl\u0131 olarak imzalayabilir. PDA'lar, Solana uygulamalar\u0131n\u0131n birbirleriyle birle\u015Ftirilebilir olmas\u0131n\u0131 sa\u011Flayan "),b={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#cross-program-invocations",target:"_blank",rel:"noopener noreferrer"},_=e("Cross-Program Invocation"),y=e("\u2019\u0131n(programlar aras\u0131 \xE7a\u011F\u0131rma) temeli olarak hizmet eder."),f=a("h2",{id:"facts-ozet-bilgiler",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#facts-ozet-bilgiler","aria-hidden":"true"},"#"),e(" Facts (\xD6zet Bilgiler)")],-1),P=a("p",null,[a("strong",null,"Bilgi Tablosu")],-1),v=a("li",null,"PDA'lar, public key\u2019lere benzeyen ancak kar\u015F\u0131l\u0131k gelen private key\u2019e sahip olmayan 32 byte\u2019l\u0131k array\u2019lerdir.",-1),A=a("li",null,[a("code",null,"findProgramAddress"),e(", bir programId ve seed\u2019lerden (bayt koleksiyonu) deterministik olarak bir PDA t\xFCretecektir.")],-1),D=a("li",null,"Potansiyel bir PDA'y\u0131 ed25519 eliptik e\u011Friden \xE7\u0131karmak i\xE7in bir bump (bir bayt) kullan\u0131l\u0131r.",-1),z=e("Programlar, seed\u2019ler "),x={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-signed-accounts",target:"_blank",rel:"noopener noreferrer"},B=e("invoke_signed"),w=e(" ile kendi PDA'lar\u0131 i\xE7in imzalama yapabilir."),I=a("li",null,"Bir PDA yaln\u0131zca t\xFCretildi\u011Fi program taraf\u0131ndan imzalanabilir.",-1),T=e("Programlar\u0131n farkl\u0131 talimatlar\u0131 imzalamas\u0131na izin vermenin yan\u0131 s\u0131ra, PDA'lar ayr\u0131ca "),C=e("Account'lar\u0131 indekslemek"),E=e(" i\xE7in hashmap benzeri bir aray\xFCz sa\u011Flar."),L=c('<h2 id="deep-dive-derinlemesine-bak\u0131s" tabindex="-1"><a class="header-anchor" href="#deep-dive-derinlemesine-bak\u0131s" aria-hidden="true">#</a> Deep Dive (Derinlemesine Bak\u0131\u015F)</h2><p>PDA&#39;lar, Solana&#39;da programlar geli\u015Ftirmek i\xE7in temel bir yap\u0131 ta\u015F\u0131d\u0131r. PDA&#39;lar sayesinde programlar, hi\xE7bir harici kullan\u0131c\u0131n\u0131n ayn\u0131 Account i\xE7in ge\xE7erli bir imza olu\u015Fturamayaca\u011F\u0131n\u0131 garanti ederken Account\u2019lar\u0131 imzalayabilir. Hesaplar\u0131 imzalamaya ek olarak, belirli programlar kendi PDA&#39;lar\u0131nda tutulan account&#39;lar\u0131 da de\u011Fi\u015Ftirebilir.</p><p><img src="'+u+'" alt="Accounts matrix"></p><p><small style="text-align:center;display:block;">Image courtesy of <a href="https://twitter.com/pencilflip">Pencilflip</a></small></p><h3 id="generating-pdas-pda-lar-olusturma" tabindex="-1"><a class="header-anchor" href="#generating-pdas-pda-lar-olusturma" aria-hidden="true">#</a> Generating PDAs (PDA\u2019lar Olu\u015Fturma)</h3><p>PDA&#39;lar\u0131n arkas\u0131ndaki kavram\u0131 anlamak i\xE7in, PDA&#39;lar\u0131n teknik olarak yarat\u0131lmad\u0131\u011F\u0131n\u0131, daha \xE7ok bulundu\u011Funu d\xFC\u015F\xFCnmek faydal\u0131 olabilir. PDA&#39;lar, seed (<code>&quot;vote_account&quot;</code> string\u2019i gibi) ve bir program kimli\u011Fi kombinasyonundan olu\u015Fturulur. Bu seed ve program kimli\u011Fi kombinasyonu daha sonra, ed25519 eliptik e\u011Fri \xFCzerinde yer alan bir public key olu\u015Fturup olu\u015Fturmad\u0131klar\u0131n\u0131 g\xF6rmek i\xE7in bir sha256 hash fonksiyonu arac\u0131l\u0131\u011F\u0131yla \xE7al\u0131\u015Ft\u0131r\u0131l\u0131r.</p><p>Program kimli\u011Fimizi ve seed\u2019leri bir hash fonksiyonu arac\u0131l\u0131\u011F\u0131yla \xE7al\u0131\u015Ft\u0131r\u0131rken, eliptik e\u011Fri \xFCzerinde yer alan ge\xE7erli bir public key ile kar\u015F\u0131la\u015Fma \u015Fans\u0131m\u0131z ~%50&#39;dir. Bu durumda, girdimizi biraz ge\xE7i\u015Ftirmek i\xE7in bir \u015Feyler ekleriz ve tekrar deneriz. Bu fudge fakt\xF6r i\xE7in teknik terim bump\u2019t\u0131r. Solana&#39;da, bump = 255 ile ba\u015Fl\u0131yoruz ve eliptik e\u011Fride olmayan bir adres elde edene kadar, bump = 254, bump = 253, vb. ile a\u015Fa\u011F\u0131 do\u011Fru yineliyoruz. Bu ilkel g\xF6r\xFCnebilir, ancak bir kez bulundu\u011Funda bize ayn\u0131 PDA&#39;y\u0131 tekrar tekrar t\xFCretmenin deterministik bir yolunu sunar.</p><p><img src="'+p+'" alt="PDA Curve"></p><h3 id="interacting-with-pdas-pda-lar-ile-etkilesim" tabindex="-1"><a class="header-anchor" href="#interacting-with-pdas-pda-lar-ile-etkilesim" aria-hidden="true">#</a> Interacting with PDAs (PDA\u2019lar ile Etkile\u015Fim)</h3><p>Bir PDA olu\u015Fturuldu\u011Funda, <code>findProgramAddress</code> hem adresi hem de adresi eliptik e\u011Friden \xE7\u0131karmak i\xE7in kullan\u0131lan bump\u2019\u0131 d\xF6nd\xFCr\xFCr. Bu bump ile donanm\u0131\u015F bir program, daha sonra PDA&#39;s\u0131n\u0131 gerektiren herhangi bir talimat i\xE7in imzalayabilir. \u0130mzalamak i\xE7in, programlar\u0131n talimat\u0131, account listesini ve PDA&#39;y\u0131 <code>invoke_signed</code> olarak t\xFCretmek i\xE7in kullan\u0131lan seed ve bump\u2019\u0131 ge\xE7mesi gerekir. Talimatlar\u0131 imzalamaya ek olarak, PDA&#39;lar <code>invoke_signed</code> arac\u0131l\u0131\u011F\u0131yla kendi yarat\u0131mlar\u0131 i\xE7in de imzalamal\u0131d\u0131r.</p><p>PDA&#39;larla olu\u015Ftururken, bump seed account verilerinin kendisinde saklamak yayg\u0131nd\u0131r. Bu, geli\u015Ftiricilerin, bir talimat arg\xFCman\u0131 olarak bump\u2019tan ge\xE7mek zorunda kalmadan bir PDA&#39;y\u0131 kolayca do\u011Frulamas\u0131n\u0131 sa\u011Flar.</p><h2 id="other-resources-diger-kaynaklar" tabindex="-1"><a class="header-anchor" href="#other-resources-diger-kaynaklar" aria-hidden="true">#</a> Other Resources (Di\u011Fer Kaynaklar)</h2>',12),N={href:"https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses",target:"_blank",rel:"noopener noreferrer"},S=e("Official Documentation"),V={href:"https://www.brianfriel.xyz/understanding-program-derived-addresses/",target:"_blank",rel:"noopener noreferrer"},F=e("Understanding Program Derived Addresses");function O(R,q){const i=l("ExternalLinkIcon"),n=l("RouterLink");return o(),s(m,null,[g,a("p",null,[h,a("a",b,[_,r(i)]),y]),f,P,a("ul",null,[v,A,D,a("li",null,[z,a("a",x,[B,r(i)]),w]),I,a("li",null,[T,r(n,{to:"/tr/guides/account-maps.html"},{default:d(()=>[C]),_:1}),E])]),L,a("ul",null,[a("li",null,[a("a",N,[S,r(i)])]),a("li",null,[a("a",V,[F,r(i)])])])],64)}var H=t(k,[["render",O]]);export{H as default};
