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
    '#top-hud .btn-endgame{font-size:12px!important;padding:4px 10px!important;bottom:-34px!important}}';
  document.head.appendChild(s);

  /* iPhone, yazısı 16px'ten küçük kutuya dokununca ekranı büyütür; dokunurken kutuyu 16px yap */
  document.addEventListener('touchstart', function (e) {
    var t = e.target;
    if (t && /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName) && parseFloat(getComputedStyle(t).fontSize) < 16) {
      t.style.fontSize = '16px';
    }
  }, { capture: true, passive: true });
})();
