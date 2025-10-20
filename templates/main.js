const offcave = document.getElementById("offcave");
const listes = document.querySelector(".listes");

offcave.addEventListener('click', () => {
    listes.classList.toggle("menu-list")
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
