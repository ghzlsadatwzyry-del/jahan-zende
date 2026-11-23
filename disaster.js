const results = await Promise.allSettled([
    getEarthquakes(days),
    getDisasters(days)
  ]);

  if (results[0].status === "rejected") {
    earthquakeList.innerHTML =
      '<p class="disaster-message">خطا در دریافت زمین‌لرزه‌ها: ' +
      escapeHTML(results[0].reason?.message || "خطای نامشخص") +
      "</p>";
  }

  if (results[1].status === "rejected") {
    naturalEventList.innerHTML =
      '<p class="disaster-message">خطا در دریافت سوانح طبیعی: ' +
      escapeHTML(results[1].reason?.message || "خطای نامشخص") +
      "</p>";
  }

  eventUpdateTime.textContent =
    "آخرین به‌روزرسانی: " +
    new Date().toLocaleTimeString("fa-IR");

  refreshEventsBtn.disabled = false;
  isRefreshing = false;


refreshEventsBtn.addEventListener("click", refreshDisasters);
eventRange.addEventListener("change", refreshDisasters);

refreshDisasters();

window.setInterval(refreshDisasters, 5 * 60 * 1000);