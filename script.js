data.daily.time.forEach((date, index) => {
      const dayInfo = getWeatherInfo(data.daily.weather_code[index]);

      const card = document.createElement("div");
      card.className = "forecast-card";

      const day = document.createElement("h4");
      day.textContent = new Date(date).toLocaleDateString("fa-IR", {
        weekday: "long"
      });

      const icon = document.createElement("div");
      icon.textContent = dayInfo[1];

      const description = document.createElement("p");
      description.textContent = dayInfo[0];

      const max = document.createElement("strong");
      max.textContent =
        Math.round(data.daily.temperature_2m_max[index]) + "°";

      const min = document.createElement("span");
      min.textContent =
        " / " + Math.round(data.daily.temperature_2m_min[index]) + "°";

      card.append(day, icon, description, max, min);
      forecast.appendChild(card);
    });

    showMessage("اطلاعات آب‌وهوا با موفقیت دریافت شد.");

   (error)
    console.error("Weather Error:", error);

    showMessage(error.message || "خطا در دریافت اطلاعات آب‌وهوا");

    temperature.textContent = "نامشخص";
    weatherDescription.textContent = "اطلاعات در دسترس نیست";
    weatherIcon.textContent = "🌡️";
    humidity.textContent = "--";
    wind.textContent = "--";
    feelsLike.textContent = "--";
    forecast.innerHTML = "";

    {
    if (searchBtn) {
      searchBtn.disabled = false;
    }
  }


if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value.trim());
  });
}

if (cityInput) {
  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && searchBtn) {
      searchBtn.click();
    }
  });
}

getWeather("Tehran");
