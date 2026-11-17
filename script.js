(function () {
  var GITHUB_URL = "";   // add your GitHub profile URL to show GitHub links
  var BOOKING_URL = "";  // add a Calendly / Cal.com link to enable live booking
  var PURPOSES = ["Project discussion", "Hiring or role", "Technical question"];
  var SLOTS = ["10:00", "11:30", "14:00", "16:00"]; // edit to match your real availability
  var $ = function (id) { return document.getElementById(id); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // optional links
  if (GITHUB_URL) document.querySelectorAll('[data-gh]').forEach(function (n) { n.hidden = false; var a = n.tagName === 'A' ? n : n.querySelector('a'); a.href = GITHUB_URL; });
  if (BOOKING_URL) { var c = $('cal'); c.hidden = false; c.href = BOOKING_URL; }

  // marquee (list duplicated for a seamless loop)
  var tech = ["PHP", "MySQL", "REST APIs", "JavaScript", "Bootstrap", "CSS", "HTML", "Git", "Linux", "Nginx", "Apache"];
  $('mq').innerHTML = tech.concat(tech).map(function (t) { return '<li>' + t + '</li>'; }).join('');

  // views
  var home = $('home'), bookv = $('bookv');
  function route(first) {
    var h = location.hash.slice(1), isBook = h === 'book';
    home.hidden = isBook; bookv.hidden = !isBook;
    if (isBook) window.scrollTo(0, 0);
    else if (h && $(h)) $(h).scrollIntoView({ behavior: first || reduce ? 'auto' : 'smooth' });
    else if (!first) window.scrollTo(0, 0);
    closeMenu();
  }
  window.addEventListener('hashchange', function () { route(false); });

  // mobile menu
  var mb = $('mbtn'), sh = $('sheet');
  function closeMenu() { sh.hidden = true; mb.setAttribute('aria-expanded', 'false'); mb.textContent = 'Menu'; document.body.style.overflow = ''; }
  mb.addEventListener('click', function () { var o = sh.hidden; sh.hidden = !o; mb.setAttribute('aria-expanded', String(o)); mb.textContent = o ? 'Close' : 'Menu'; document.body.style.overflow = o ? 'hidden' : ''; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
  sh.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });

  // statement: words brighten as it scrolls into view
  var st = $('st'), words = [];
  st.innerHTML = st.textContent.split(' ').map(function (w) { return '<span class="wd">' + w + '</span>'; }).join(' ');
  words = st.querySelectorAll('.wd');
  if (!reduce) {
    st.classList.add('dim');
    var tick = false;
    function paint() {
      tick = false;
      var r = st.getBoundingClientRect(), vh = innerHeight;
      var p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
      var n = Math.round(p * words.length);
      words.forEach(function (w, i) { w.classList.toggle('on', i < n); });
    }
    addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(paint); } }, { passive: true });
    paint();
  }

  // project hover spotlight
  if (!reduce) document.querySelectorAll('.shot').forEach(function (s) {
    s.addEventListener('pointermove', function (e) { var b = s.getBoundingClientRect(); s.style.setProperty('--mx', (e.clientX - b.left) / b.width * 100 + '%'); s.style.setProperty('--my', (e.clientY - b.top) / b.height * 100 + '%'); });
  });

  // hero parallax (small, desktop pointer only)
  var hero = document.querySelector('.hero .bg');
  if (!reduce && matchMedia('(pointer: fine)').matches) addEventListener('pointermove', function (e) {
    var x = (e.clientX / innerWidth - .5) * 24, y = (e.clientY / innerHeight - .5) * 16;
    hero.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
  }, { passive: true });

  // contact form
  $('cf').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('cn').value, em = $('ce').value, s = $('cs').value, m = $('cm').value;
    $('ok').classList.add('on');
    setTimeout(function () { location.href = 'mailto:ayomidedaniel451@gmail.com?subject=' + encodeURIComponent('Project inquiry: ' + s + ' (' + n + ')') + '&body=' + encodeURIComponent('From: ' + n + ' (' + em + ')\n\n' + m); }, 800);
  });

  // booking interface
  var pick = { purpose: PURPOSES[0], day: '', time: '' };
  function chips(id, items, key, label) {
    var box = $(id); box.innerHTML = '';
    items.forEach(function (it, i) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'chip';
      b.textContent = label ? label(it) : it;
      b.setAttribute('aria-pressed', String(key === 'purpose' && i === 0));
      b.addEventListener('click', function () {
        pick[key] = it; box.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c === b)); }); update();
      });
      box.appendChild(b);
    });
  }
  var days = [], d = new Date();
  while (days.length < 8) { d = new Date(d.getTime() + 864e5); if (d.getDay() % 6) days.push(d); }
  chips('pur', PURPOSES, 'purpose');
  chips('days', days, 'day', function (x) { return x.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }); });
  chips('tms', SLOTS, 'time');
  function msg() {
    var day = pick.day ? pick.day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }) : '';
    return 'Hi Ayomide, I’d like to book a 30-minute call about: ' + pick.purpose + '.\nPreferred time: ' + day + ' at ' + pick.time + ' WAT.\nName: ' + $('bn').value + '\n' + $('bm').value;
  }
  function update() {
    var ready = pick.day && pick.time;
    $('bw').disabled = $('be').disabled = !ready;
    $('sum').textContent = ready ? 'Requesting ' + pick.purpose.toLowerCase() + ', ' + pick.day.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }) + ' at ' + pick.time + ' WAT.' : 'Choose a day and a time to continue.';
  }
  $('bw').addEventListener('click', function () { window.open('https://wa.me/2348087824544?text=' + encodeURIComponent(msg()), '_blank', 'noopener'); });
  $('be').addEventListener('click', function () { location.href = 'mailto:ayomidedaniel451@gmail.com?subject=' + encodeURIComponent('Call request: ' + pick.purpose) + '&body=' + encodeURIComponent(msg()); });

  var rows = document.querySelectorAll('.wk');
  rows.forEach(function (li) {
    var b = li.querySelector('button');
    b.addEventListener('click', function () {
      var open = li.getAttribute('data-open') !== 'true';
      rows.forEach(function (x) { x.setAttribute('data-open', 'false'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
      if (open) { li.setAttribute('data-open', 'true'); b.setAttribute('aria-expanded', 'true'); }
    });
  });
  route(true);
})();
