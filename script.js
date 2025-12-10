
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

// FONCTIONS AJOUT PRODIT
function ajoutProduit(imageProduit, titreProduit, descriptionProduit, prixProduit) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    div.classList.add("imageCard");
    div.style.background = `url(../Medias/${imageProduit}) center/cover no-repeat`;
    const titre = document.createElement("h1");
    titre.textContent = titreProduit.toUpperCase();
    const desctiption = document.createElement('p');
    desctiption.textContent = descriptionProduit;
    const prixProduitContent = document.createElement("p");
    prixProduitContent.innerHTML = `Prix : <span> ${prixProduit} </span> Ariary`;
    const btn = document.createElement('button');
    btn.classList.add("bouttonCommander");
    btn.textContent = "COMMANDER";
    section.appendChild(div);
    section.appendChild(titre);
    section.appendChild(prixProduitContent);
    section.appendChild(btn);
    service.appendChild(section);
}
const produit1 = ajoutProduit("image1.jpeg", "Suchi 1",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "15000");
const produit2 = ajoutProduit("image2.jpg", "Suchi 2",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "25000");
const produit3 = ajoutProduit("image3.jpeg", "Suchi 3",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "35000");
const produit4 = ajoutProduit("image4.jpeg", "Suchi 4",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "45000");
const produit5 = ajoutProduit("image5.jpeg", "Suchi 5",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "55000");
const produit6 = ajoutProduit("image6.jpeg", "Suchi 6",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "65000");
const produit7 = ajoutProduit("image7.jpeg", "Suchi 7",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta praesentium voluptatem dicta aut modi ad.`,
                         "105000");




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
        prixCommandeEnvoye.value = prixEnvoye.textContent + 'AR';
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