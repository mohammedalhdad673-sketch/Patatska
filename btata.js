(function () {
  "use strict";

  // أثر الماوس: نسخة آمنة ومحدودة تمنع تكدّس عناصر DOM بلا حدود (كانت الثغرة تُنشئ
  // عنصراً جديداً لكل حركة ماوس مما يستنزف الذاكرة). نستخدم عناصر مُجمّعة وخانقاً (throttle).
  var MAX_DOTS = 14;
  var THROTTLE_MS = 22;
  var active = 0;
  var lastTime = 0;

  function spawn(x, y) {
    if (active >= MAX_DOTS) return;
    active += 1;
    var dot = document.createElement("span");
    dot.className = "mouse-dot";
    dot.style.left = x + "px";
    dot.style.top = y + "px";
    // التنظيف عند انتهاء الحركة لتفادي أي تسريب في الذاكرة
    dot.addEventListener("animationend", function () {
      if (dot.parentNode) dot.parentNode.removeChild(dot);
      active -= 1;
    });
    document.body.appendChild(dot);
  }

  document.addEventListener("mousemove", function (event) {
    var now = event.timeStamp || Date.now();
    if (now - lastTime < THROTTLE_MS) return;
    lastTime = now;
    spawn(event.pageX, event.pageY);
  }, { passive: true });

  // تحديث سنة الكوبي رايت بأمان (بدون سكربت مضمّن لتوافقه مع CSP)
  var yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
