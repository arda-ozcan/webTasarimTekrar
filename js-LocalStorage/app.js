document.addEventListener("DOMContentLoaded", () => {
    let adInput = document.getElementById("ad");
    let emailInput = document.getElementById("email");
    let mesajInput = document.getElementById("mesaj");
    let buton = document.querySelector("button");

    adInput.value = localStorage.getItem("ad") || "";
    emailInput.value = localStorage.getItem("email") || "";
    mesajInput.value = localStorage.getItem("mesaj") || "";


    // Kullanıcı girdi alanında etkileşimde bulundukça tetiklenen event = input
    adInput.addEventListener("input", () => localStorage.setItem("ad", adInput.value));
    emailInput.addEventListener("input", () => localStorage.setItem("email", emailInput.value));
    mesajInput.addEventListener("input", () => localStorage.setItem("mesaj", mesajInput.value));

    
    // Gondere basıldığı zaman, verileri silmek
    document.getElementById("kullaniciFormu").addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.removeItem("ad");
        localStorage.removeItem("email");
        localStorage.removeItem("mesaj");

        // adInput.value = "";
        // emailInput.value = "";
        // mesajInput.value = "";
    });
});



