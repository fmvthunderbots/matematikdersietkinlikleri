/* Bütün oyunlar için telefon düzeltmeleri. Tablet ve bilgisayarda görünümü değiştirmez. */
(function () {
  var s = document.createElement('style');
  s.textContent =
    'html{-webkit-text-size-adjust:100%;text-size-adjust:100%}' +
    /* dokunmatik ekranda çift dokunma yakınlaştırması ve 300 ms tıklama gecikmesi olmasın */
    '@media (pointer:coarse){html{touch-action:manipulation}*{-webkit-tap-highlight-color:transparent}}' +
    /* telefonda sayfa yana kaymasın */
    '@media (max-width:600px){html,body{overflow-x:clip}' +
    /* yağmur/kutup oyunlarının ortak üst çubuğu (#top-hud) telefona sığsın */
    '#top-hud{padding:8px 6px!important;gap:6px;flex-wrap:wrap;justify-content:center!important}' +
    '#top-hud .hud-side{gap:6px}' +
    '#top-hud .team-box{min-width:0!important;padding:6px 10px!important}' +
    '#top-hud .team-name{font-size:13px!important}' +
    '#top-hud .question-text{font-size:14px!important}' +
    '#top-hud .score-display{font-size:22px!important;padding:2px 10px!important}' +
    '#top-hud #timer-box{min-width:0!important;padding:6px 10px!important}' +
    '#top-hud .timer-val{font-size:24px!important}' +
    '#top-hud .timer-label{font-size:10px!important}' +
    '#top-hud .btn-endgame{font-size:12px!important;padding:4px 10px!important;bottom:-34px!important}}' +
    /* YATAY TELEFON (kısa ekran): yağmur/kutup şablonu (#app-overlay menüleri, #top-hud, düşen nesneler) */
    '@media (max-height:500px) and (orientation:landscape){' +
    'html,body{overflow-x:clip}' +
    '#app-overlay{overflow-y:auto;align-items:flex-start!important}' +
    '#app-overlay>.card{margin:auto;padding:10px 18px!important;max-width:min(600px,88vw)!important;border-radius:18px}' +
    '#app-overlay>.card [style*="margin-bottom"]{margin-bottom:8px!important}' +
    '#app-overlay>.card [style*="margin-top"]{margin-top:8px!important}' +
    '#app-overlay>.card [style*="font-size: 6"],#app-overlay>.card [style*="font-size: 7"],#app-overlay>.card [style*="font-size:6"],#app-overlay>.card [style*="font-size:7"]{font-size:32px!important;margin-bottom:2px!important}' +
    '#app-overlay .start-title{font-size:22px!important;margin-bottom:0!important;line-height:1.15}' +
    /* başla + lider tablosu yan yana; öğretmen ayar dişlisi (kurallar yüzünden zaten çalışmıyor) kapatma düğmesinin altına düşmesin */
    '#app-overlay #startScreen .btn-start{width:61%!important;display:inline-block;vertical-align:middle}' +
    '#app-overlay #startScreen .btn-start+.btn-subtle{width:37%!important;margin:0 0 0 1%!important;display:inline-block;vertical-align:middle;font-size:13px!important;padding:8px 4px!important;white-space:nowrap;overflow:hidden}' +
    '#app-overlay>.card [style*="font-size: 4"],#app-overlay>.card [style*="font-size: 5"],#app-overlay>.card [style*="font-size:4"],#app-overlay>.card [style*="font-size:5"]{font-size:28px!important;margin-bottom:2px!important;line-height:1.1}' +
    '#app-overlay>.card [style*="dashed"]{padding:4px 10px!important;font-size:12.5px!important;line-height:1.3}' +
    '#app-overlay>.card>img{width:60px!important;height:60px!important;margin:0 auto 4px!important;border-width:2px!important}' +
    '#app-overlay .card>button[onclick^="openSettings"]{display:none!important}' +
    '#app-overlay .start-subtitle{font-size:13px!important;margin-bottom:8px!important}' +
    '#app-overlay .btn-subtle{padding:7px 14px!important;font-size:14px!important}' +
    '#app-overlay .input-player{padding:7px 12px!important;font-size:15px!important}' +
    '#app-overlay .btn-start{padding:7px 20px!important;font-size:21px!important}' +
    '#app-overlay .btn-action{padding:7px 16px!important;font-size:17px!important;margin-bottom:6px!important}' +
    '#app-overlay .score-summary-grid{margin-bottom:8px!important}' +
    '#app-overlay .score-item{padding:6px 22px!important}' +
    '#app-overlay .score-item .val{font-size:28px!important}' +
    '#app-overlay .lb-row td{padding:6px 8px!important}' +
    '#app-overlay .lb-table{margin-bottom:8px!important}' +
    '.celebration-modal{padding:8px!important}' +
    '.celebration-card{padding:12px 18px!important;max-height:calc(100dvh - 16px);overflow-y:auto}' +
    '#celIcon{font-size:36px!important}.cel-name{font-size:26px!important}.cel-score{font-size:20px!important;margin-bottom:6px!important}' +
    '.btn-cel-close{padding:8px!important;font-size:17px!important}' +
    '#top-hud{padding:6px 10px!important;gap:6px}' +
    '.gomulu #top-hud{padding-right:70px!important}' +
    '#top-hud .hud-side{gap:6px}' +
    '#top-hud .team-box{min-width:0!important;padding:4px 12px!important;border-radius:12px}' +
    '#top-hud .team-name{font-size:12px!important;margin:0!important}' +
    '#top-hud .question-text{font-size:15px!important}' +
    '#top-hud .score-display{font-size:22px!important;padding:2px 12px!important}' +
    '#top-hud #timer-box{min-width:0!important;padding:4px 12px!important}' +
    '#top-hud .timer-val{font-size:22px!important}' +
    '#top-hud .timer-label{font-size:11px!important}' +
    '#top-hud .btn-endgame{font-size:13px!important;padding:3px 10px!important;bottom:-30px!important}' +
    '.falling-item{width:72px!important;height:72px!important}' +
    '.falling-item::before{font-size:54px!important}' +
    '.falling-item span{font-size:18px!important}' +
    /* 30 kartlı takım yarışmaları (Çarpanlar-Katlar, ZQ, Rasyonel Yağmuru): üstte düğmeler+takımlar, altta 10x3 kart */
    'body:has(#grid.card-grid){padding:0!important;justify-content:flex-start!important;height:100dvh!important;overflow:hidden!important}' +
    'body>.absolute.top-4.left-4:has(#btn-last-round){position:absolute!important;top:6px!important;left:8px!important;margin:0!important;flex-direction:row!important;width:auto!important;gap:6px!important}' +
    'body>.absolute.top-4.left-4:has(#btn-last-round) button{font-size:13px!important;padding:5px 10px!important;width:auto!important;white-space:nowrap}' +
    '#app:has(#grid.card-grid){height:100dvh!important;max-width:none!important;padding:6px 10px!important;justify-content:flex-start!important}' +
    '.gomulu #app:has(#grid.card-grid){padding-right:70px!important}' +
    '#app:has(#grid.card-grid)>.text-center:first-child{display:none!important}' +
    '#app #teams{margin:0 0 6px 215px!important;gap:6px!important;max-width:none!important;width:auto!important}' +
    '#app #teams .team-box{padding:1px 6px!important}' +
    '#app #teams .text-sm{font-size:12px!important;margin:0!important}' +
    '#app #teams .text-3xl,#app #teams .text-4xl{font-size:22px!important}' +
    '#app #grid.card-grid{grid-template-columns:repeat(10,1fr)!important;grid-auto-rows:1fr;gap:5px!important;max-width:none!important;width:100%;flex:1;min-height:0;margin:0!important}' +
    '#grid.card-grid .card{height:auto!important}' +
    '#modal-q .modal-box,#modal-j .modal-box{max-height:calc(100dvh - 16px);overflow-y:auto;padding:12px 16px!important;border-width:4px!important}' +
    '#app #teams .text-sm{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '#joker-icon{font-size:28px!important;margin:0!important}' +
    '#winner-screen>:first-child{font-size:48px!important;margin-bottom:4px!important}' +
    '#winner-name{font-size:40px!important;margin-bottom:2px!important}' +
    '#winner-theme-message{font-size:17px!important;margin-bottom:8px!important}' +
    '#winner-score{font-size:22px!important;margin-bottom:12px!important;padding:2px 18px!important}' +
    '#winner-screen>button{font-size:20px!important;padding:6px 24px!important}' +
    /* soru penceresi üstte: yazarken açılan klavye soruyu ve kutuyu örtmesin; kutu ile düğme yan yana */
    '#modal-q{align-items:flex-start!important;padding-top:22px}' +
    '#modal-q .modal-box{overflow:visible!important;display:grid;grid-template-columns:1fr auto;column-gap:8px;align-items:center}' +
    '#modal-q .modal-box>*{grid-column:1/-1}' +
    '#modal-q .modal-box>.text-4xl{display:none}' +
    '#modal-question{font-size:17px!important;margin:6px 0 8px!important;line-height:1.35!important}' +
    '#modal-q #modal-input{grid-column:1;margin:0!important;padding:6px 10px!important;font-size:18px!important}' +
    '#modal-q #modal-input+button{grid-column:2;width:auto!important;padding:8px 14px!important;font-size:16px!important}}';
  document.head.appendChild(s);
  /* portal oyunu çerçevede açar; sağ üstteki kapatma düğmesine yer açmak için */
  if (window.top !== window) document.documentElement.classList.add('gomulu');

  /* iPhone, yazısı 16px'ten küçük kutuya dokununca ekranı büyütür; dokunurken kutuyu 16px yap */
  document.addEventListener('touchstart', function (e) {
    var t = e.target;
    if (t && /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName) && parseFloat(getComputedStyle(t).fontSize) < 16) {
      t.style.fontSize = '16px';
    }
  }, { capture: true, passive: true });
})();
