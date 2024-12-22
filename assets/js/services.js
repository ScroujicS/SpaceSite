// ========== Реализация страницы services.html с помощью JS ==========

// Убедимся, что код работает только на странице services.html
document.addEventListener("DOMContentLoaded", () => {
    // Создаём стили для страницы
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        header, footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
        }
        header h1, footer p {
            margin: 0;
        }
        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 10px 0 0;
        }
        nav ul li {
            display: inline;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }
        main {
            padding: 20px;
        }
        h2 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
        ul, ol, dl {
            margin: 20px 0;
        }
        dl dt {
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    // Создаём шапку сайта
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.textContent = "Космические миссии";
    header.appendChild(headerTitle);

    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    ["Главная", "Космические миссии", "О нас"].forEach((item, index) => {
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.textContent = item;
        navLink.href = index === 1 ? "services.html" : index === 0 ? "index.html" : "about.html";
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });
    nav.appendChild(navList);
    header.appendChild(nav);
    document.body.appendChild(header);

    // Основной контент
    const main = document.createElement("main");

    // Раздел "Известные миссии"
    const knownMissionsSection = document.createElement("section");
    const knownMissionsTitle = document.createElement("h2");
    knownMissionsTitle.textContent = "Известные миссии";
    knownMissionsSection.appendChild(knownMissionsTitle);

    const knownMissionsList = document.createElement("ul");
    ["Миссия 'Аполлон-11' — первый полёт человека на Луну.",
        "Миссия 'Вояджер' — изучение дальних планет и выход за пределы Солнечной системы.",
        "Миссия 'Марс Ровер Curiosity' — изучение поверхности Марса."
    ].forEach(mission => {
        const listItem = document.createElement("li");
        listItem.textContent = mission;
        knownMissionsList.appendChild(listItem);
    });
    knownMissionsSection.appendChild(knownMissionsList);

    const knownMissionsOrderedList = document.createElement("ol");
    ["'Аполлон-11' — 1969 г.", "'Вояджер-1' — 1977 г.", "'Марс Ровер Curiosity' — 2012 г."].forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        knownMissionsOrderedList.appendChild(listItem);
    });
    knownMissionsSection.appendChild(knownMissionsOrderedList);
    main.appendChild(knownMissionsSection);

    // Раздел "Основные термины"
    const termsSection = document.createElement("section");
    const termsTitle = document.createElement("h2");
    termsTitle.textContent = "Основные термины";
    termsSection.appendChild(termsTitle);

    const termsList = document.createElement("dl");
    [["Космическая миссия:", "Программа или проект, цель которого — изучение космоса или выполнение определённых задач."],
        ["Орбитальный аппарат:", "Космический корабль, предназначенный для работы на орбите планеты или спутника."]
    ].forEach(([term, definition]) => {
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = term;
        dd.textContent = definition;
        termsList.appendChild(dt);
        termsList.appendChild(dd);
    });
    termsSection.appendChild(termsList);
    main.appendChild(termsSection);

    // Раздел "Таблицы"
    const tableSection = document.createElement("section");
    const tableTitle = document.createElement("h2");
    tableTitle.textContent = "Таблицы";
    tableSection.appendChild(tableTitle);

    [["Космические аппараты", [
        ["Название", "Год запуска", "Цель"],
        ["Вояджер-1", "1977", "Изучение дальнего космоса"],
        ["Марс Ровер Curiosity", "2012", "Исследование Марса"]
    ]],
        ["Межпланетные миссии", [
            ["Название", "Цель"],
            ["Венера-7", "Изучение Венеры"],
            ["Кассини", "Исследование Сатурна"]
        ]]
    ].forEach(([title, rows]) => {
        const subtitle = document.createElement("h3");
        subtitle.textContent = title;
        tableSection.appendChild(subtitle);

        const table = document.createElement("table");
        rows.forEach((row, index) => {
            const tr = document.createElement("tr");
            row.forEach(cellText => {
                const cell = document.createElement(index === 0 ? "th" : "td");
                cell.textContent = cellText;
                tr.appendChild(cell);
            });
            table.appendChild(tr);
        });
        tableSection.appendChild(table);
    });

    main.appendChild(tableSection);

    document.body.appendChild(main);

    // Подвал
    const footer = document.createElement("footer");
    const footerText = document.createElement("p");
    footerText.textContent = "© 2024 Космические исследования";
    footer.appendChild(footerText);
    document.body.appendChild(footer);
});