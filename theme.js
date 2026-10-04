// Selector de temas: aplica el tema de la app a la página y lo recuerda en este navegador.
// El atributo data-theme se pone también en un <script> inline del <head> para evitar el parpadeo.
(function () {
  var KEY = 'setrya-theme';
  var DEFAULT = 'oscura';
  // Mismo color de fondo que cada tema en la app; sirve para la barra del navegador del móvil.
  var BG = {
    oscura: '#0a100c',
    clara: '#eff7f6',
    relax: '#f3f1ec',
    neon: '#0b1020',
    astro: '#05060a',
    menta: '#061a18',
    prisma: '#0b1320',
    lavanda: '#120b24'
  };

  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');

  function saved() {
    try {
      var v = localStorage.getItem(KEY);
      return BG.hasOwnProperty(v) ? v : DEFAULT;
    } catch (e) {
      return DEFAULT;
    }
  }

  function apply(id) {
    root.setAttribute('data-theme', id);
    if (meta) meta.setAttribute('content', BG[id]);
    var opts = document.querySelectorAll('.theme-opt');
    for (var i = 0; i < opts.length; i++) {
      opts[i].setAttribute('aria-checked', opts[i].getAttribute('data-theme-id') === id ? 'true' : 'false');
    }
    // Capturas y vídeos de la app, en el tema elegido (assets/capturas/<tema>/)
    var shots = document.querySelectorAll('img[data-shot]');
    for (var s = 0; s < shots.length; s++) {
      shots[s].src = 'assets/capturas/' + id + '/' + shots[s].getAttribute('data-shot') + '.webp';
    }
    var clips = document.querySelectorAll('video[data-clip]');
    for (var c = 0; c < clips.length; c++) {
      var next = 'assets/capturas/' + id + '/' + clips[c].getAttribute('data-clip') + '.mp4';
      if (clips[c].getAttribute('src') !== next) {
        clips[c].setAttribute('src', next);
        clips[c].load();
      }
    }
  }

  apply(saved());

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.theme-opt') : null;
    if (!btn) return;
    var id = btn.getAttribute('data-theme-id');
    apply(id);
    try {
      localStorage.setItem(KEY, id);
    } catch (err) {
      // Sin almacenamiento (modo privado, datos bloqueados): el tema solo dura esta visita.
    }
  });
})();
