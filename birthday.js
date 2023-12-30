document.addEventListener("DOMContentLoaded", function () {
    const birthdayForm = document.getElementById("birthdayForm");
    const calculateButton = document.getElementById("calculateButton");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", function (event) {
        event.preventDefault(); // Зупинити стандартну відправку форми

        const birthdayDate = new Date(document.getElementById("birthdayDate").value);
        const day = birthdayDate.getDate();
        const month = birthdayDate.getMonth() + 1; // Months are 0-based
        const year = birthdayDate.getFullYear();

        const a = (14 - month) / 12;
        const y = year - a;
        const m = month + 12 * a - 2;
        const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor(31 * m / 12)) % 7;

        const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

        result.textContent = `Ви народилися в ${[dayOfWeek === 0 ? 6 : dayOfWeek - 1]}.`;
    });
});