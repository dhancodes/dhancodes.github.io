(function () {
  var items = null, loading = false, waiting = [];

  function load(url, cb) {
    if (items) return cb();
    waiting.push(cb);
    if (loading) return;
    loading = true;
    fetch(url).then(function (r) { return r.json(); }).then(function (d) {
      items = d.map(function (x) {
        x.hay = (x.title + " " + (x.tags || []).join(" ") + " " + x.text).toLowerCase();
        x.t = x.title.toLowerCase();
        return x;
      });
      waiting.splice(0).forEach(function (f) { f(); });
    });
  }

  function snippet(text, q) {
    var i = text.toLowerCase().indexOf(q);
    if (i < 0) return text.slice(0, 110);
    var a = Math.max(0, i - 50);
    return (a ? "…" : "") + text.slice(a, i + 70) + "…";
  }

  // input: the search <input>; box: element that receives the result links;
  // limit: max results; dropdown: hide the box when there is nothing to show
  window.initSearch = function (input, box, limit, dropdown) {
    function render() {
      var terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
      box.textContent = "";
      if (!terms.length) { if (dropdown) box.hidden = true; return; }
      var hits = items.filter(function (x) {
        return terms.every(function (t) { return x.hay.indexOf(t) >= 0; });
      }).sort(function (a, b) {
        var sa = terms.every(function (t) { return a.t.indexOf(t) >= 0; }) ? 0 : 1;
        var sb = terms.every(function (t) { return b.t.indexOf(t) >= 0; }) ? 0 : 1;
        return sa - sb;
      }).slice(0, limit);
      if (!hits.length) {
        var none = document.createElement("p");
        none.className = "sr-none";
        none.textContent = "No results";
        box.appendChild(none);
      }
      hits.forEach(function (x) {
        var a = document.createElement("a");
        a.href = x.url;
        var t = document.createElement("span"), m = document.createElement("span"), s = document.createElement("span");
        t.className = "sr-title"; t.textContent = x.title;
        m.className = "sr-meta"; m.textContent = x.meta;
        s.className = "sr-snip"; s.textContent = snippet(x.text, terms[0]);
        a.appendChild(t); a.appendChild(m); a.appendChild(s);
        box.appendChild(a);
      });
      if (dropdown) box.hidden = false;
    }
    input.addEventListener("focus", function () { load(input.dataset.index, function () {}); });
    input.addEventListener("input", function () { load(input.dataset.index, render); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { input.value = ""; render(); if (dropdown) input.blur(); }
      if (e.key === "Enter") { var a = box.querySelector("a"); if (a) location.href = a.href; }
    });
    if (dropdown) {
      document.addEventListener("keydown", function (e) {
        if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
          e.preventDefault(); input.focus();
        }
      });
      document.addEventListener("click", function (e) {
        if (!box.contains(e.target) && e.target !== input) box.hidden = true;
      });
    }
  };
})();
