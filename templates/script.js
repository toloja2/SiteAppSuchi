// NavBar caché
const offcave = document.getElementById("offcave");
const listes = document.querySelector(".listes");

offcave.addEventListener('click', () => {
    listes.classList.toggle("menu-list");
    offcave.firstChild.classList.toggle("fa-close")
    document.addEventListener("click", (e) => {
        if (!offcave.contains(e.target)) {
            listes.classList.remove("menu-list");
            offcave.firstChild.classList.replace("fa-close", "fa-bars")
        }
    })
})

// SCROLL VERS AUTRE CHOSES
function vers(id, type) {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: type
        })
    }
}


//VOIR PLUS/MOINS
const voirPlus = document.querySelector(".voirPlus");
const voirMoins = document.querySelector(".voirMoins");

voirPlus.addEventListener("click", (e) => {
    e.target.parentElement.querySelector("p").textContent += `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Repellendus laudantium ipsa aperiam iure nulla, deserunt dolor harum, nesciunt autem fugiat atque. 
Deleniti ipsum non pariatur sunt magnam, nulla quo aspernatur!` ;
    voirPlus.style.display = "none";
    voirMoins.style.display = "block";
    if (window.innerWidth <= 450) { e.target.parentElement.style.top = "10%"; }
})


voirMoins.addEventListener("click", (e) => {
    e.target.parentElement.querySelector("p").textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis illum sunt perferendis odio eum saepe
                consequatur reprehenderit magni in odit.`;
    voirPlus.style.display = "block";
    voirMoins.style.display = "none";
    if (window.innerWidth <= 450) { e.target.parentElement.style.top = "20%"; }
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
        const nomCommandeEnvoye = document.getElementById("nomCommandeEnvoye");
        const prixCommandeEnvoye = document.getElementById("prixCommandeEnvoye");
        const autoFocus = document.getElementById("autoFocus");
        autoFocus.select();
        prixEnvoye.textContent = prix.textContent;
        nomCommande.textContent = typeSuchi.textContent;
        console.log(nomCommande.textContent);
        nomCommandeEnvoye.value = nomCommande.textContent;
        prixCommandeEnvoye.value = prixEnvoye.textContent +'AR';
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