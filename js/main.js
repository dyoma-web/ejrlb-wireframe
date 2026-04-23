(function () {
  // --- Auto-pulse on page load (shows what's clickable, then fades) ---
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("auto-discovery");
    setTimeout(function () {
      document.body.classList.remove("auto-discovery");
    }, 3200);

    // --- Discovery-mode toggle (persists across pages via sessionStorage) ---
    var btn = document.querySelector(".discovery-toggle");
    if (btn) {
      var persisted = sessionStorage.getItem("discoveryMode") === "1";
      if (persisted) {
        document.body.classList.add("discovery-mode");
        btn.classList.add("on");
      }
      btn.addEventListener("click", function () {
        var on = document.body.classList.toggle("discovery-mode");
        btn.classList.toggle("on", on);
        sessionStorage.setItem("discoveryMode", on ? "1" : "0");
      });
    }

    // --- Keyboard shortcut: "?" toggles discovery mode ---
    document.addEventListener("keydown", function (e) {
      if (e.key === "?" && !/^(input|textarea)$/i.test((e.target.tagName || ""))) {
        if (btn) btn.click();
      }
    });

    // --- Click delegation for data-nav elements without a real href ---
    document.body.addEventListener("click", function (e) {
      var el = e.target.closest("[data-nav-go]");
      if (el) {
        e.preventDefault();
        window.location.href = el.getAttribute("data-nav-go");
      }
    });
  });
})();
