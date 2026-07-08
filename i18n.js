const languageSwitcher = document.getElementById("languageSwitcher");

async function changeLanguage(lang) {

const response = await fetch(`./lang/${lang}.json`);

const translations = await response.json();

document.querySelectorAll("[data-i18n]").forEach(element => {

const key = element.dataset.i18n;

element.textContent = translations[key];

});

}

languageSwitcher.addEventListener("change", function () {

changeLanguage(this.value);

});

changeLanguage("pt");