// Bares caché
const offcave = document.getElementById("offcave");
const listes = document.querySelector(".listes");

offcave.addEventListener('click', () => {
    listes.classList.toggle("menu-list")
})

//VOIR PLUS/MOINS
const voirPlus = document.querySelector(".voirPlus");
const voirMoins = document.querySelector(".voirMoins");

voirPlus.addEventListener("click", (e) => {
    e.target.parentElement.querySelector("p").textContent += `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repellendus laudantium ipsa aperiam iure nulla, deserunt dolor harum, nesciunt autem fugiat atque. 
Deleniti ipsum non pariatur sunt magnam, nulla quo aspernatur!` ;
    voirPlus.style.display = "none";
    voirMoins.style.display = "block";
})


voirMoins.addEventListener("click", (e) => {
    e.target.parentElement.querySelector("p").textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illum sunt perferendis odio eum saepe
                consequatur reprehenderit magni in odit.`;
    voirPlus.style.display = "block";
    voirMoins.style.display = "none";
})

// BOUTTON COMMANDE
const main = document.getElementById("main");
const service = document.getElementById("service");
const commandeForm = document.getElementById('commandeForm');

// RECUPERATION DES DONNES

const connexion = document.getElementById("connexion");
connexion.addEventListener("submit", () => {
    localStorage.setItem("nom",document.getElementById("nom").value);
    localStorage.setItem("numeroTel",document.getElementById("numeroTel").value);
    window.location.href = "https://toloja2.github.io/SiteAppSuchi/templates/index.html";

})

const nomPerso = document.getElementById("nomPerso");
nomPerso.value = localStorage.getItem("nom");
const numeroTelPerso = document.getElementById("numeroTelPerso");
numeroTelPerso.value = localStorage.getItem("numeroTel");


main.addEventListener("click", (e) => {
    // verifions si on clique avec un document avec class bouttonCommander
    if (e.target.classList.contains('bouttonCommander')) {
        const parent = e.target.parentElement;
        const typeSuchi = parent.querySelector('h1');
        const prix = parent.querySelector("span");
        const prixEnvoye = document.getElementById("prixEnvoye");
        const nomCommande = document.getElementById("nomCommande");
        prixEnvoye.textContent = prix.textContent;
        nomCommande.textContent = typeSuchi.textContent;
        commandeForm.style.display = "flex";
        main.style.display = "none";
    }


})

// Voir autre commande
const voirAutreCommande = document.getElementById('voirAutreCommande');
voirAutreCommande.addEventListener("click", () => {
    commandeForm.style.display = "none";
    main.style.display = "block";


})
