// =========================
// NOVA - script.js
// =========================

// Apparition des sections au défilement
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Effet sur les cartes
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,.25),
        #181818 60%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#181818";

    });

});

// Boutons
document.querySelectorAll(".gold-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// Année automatique
const footer=document.querySelector("footer");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} NOVA - Tous droits réservés`;

}

console.log("Nova est prêt 🚀");