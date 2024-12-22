// ========== Общие функции ==========

// Пример: Анимация заголовка на главной странице
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    if (title) {
        title.style.transition = "transform 0.5s ease";
        title.addEventListener("mouseover", () => {
            title.style.transform = "scale(1.1)";
        });
        title.addEventListener("mouseout", () => {
            title.style.transform = "scale(1)";
        });
    }
});

// ========== Эффекты для интерактивных элементов ==========

// Пример: Кнопка "Наверх"
document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "Наверх";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px 15px";
    scrollButton.style.backgroundColor = "#ffcc00";
    scrollButton.style.color = "#000";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "5px";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.display = "none";

    document.body.appendChild(scrollButton);

    // Показываем кнопку при прокрутке
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Прокрутка вверх
    scrollButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
