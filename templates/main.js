// SAVOIR POURQUOI
const savoir = document.getElementById('savoir');
savoir.addEventListener("click", (e) => {
    setTimeout(() => {
        e.target.parentElement.textContent = `Car il est très important pour valider votre commande.
         Alors remplir les correctement. Merci pour votre compréhension.`
    }, 300)
})


// NavBar caché
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
