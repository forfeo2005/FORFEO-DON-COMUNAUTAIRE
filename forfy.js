/* * CERVEAU DE FORFY 🐶
 * Ce script gère l'affichage du chat et les réponses intelligentes basées sur toutes les pages du site.
 */

// 1. CONFIGURATION ET STYLE
const forfyStyles = `
    #forfy-widget {
        position: fixed; bottom: 20px; right: 20px; z-index: 9999;
        font-family: 'Segoe UI', sans-serif;
    }
    #forfy-icon {
        width: 60px; height: 60px; border-radius: 50%; 
        background: #112240; border: 2px solid #64ffda;
        cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        display: flex; align-items: center; justify-content: center;
        overflow: hidden; transition: transform 0.3s;
    }
    #forfy-icon:hover { transform: scale(1.1); }
    #forfy-icon img { width: 100%; height: 100%; object-fit: cover; }
    
    #forfy-window {
        display: none; width: 320px; height: 450px;
        background: #0a192f; border: 1px solid #64ffda;
        border-radius: 15px; overflow: hidden;
        flex-direction: column; box-shadow: 0 5px 25px rgba(0,0,0,0.5);
        margin-bottom: 80px; position: absolute; bottom: 0; right: 0;
    }
    .chat-header {
        background: #112240; padding: 15px; border-bottom: 1px solid #233554;
        display: flex; justify-content: space-between; align-items: center; color: #e6f1ff;
    }
    .chat-messages {
        flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px;
    }
    .msg { padding: 10px; border-radius: 10px; font-size: 0.9em; max-width: 85%; }
    .msg-bot { background: #112240; color: #a8b2d1; align-self: flex-start; border-left: 3px solid #64ffda; }
    .msg-user { background: #64ffda; color: #0a192f; align-self: flex-end; font-weight: bold; }
    
    .chat-input-area {
        padding: 10px; border-top: 1px solid #233554; display: flex; gap: 5px; background: #0a192f;
    }
    #user-input {
        flex: 1; padding: 8px; border-radius: 5px; border: 1px solid #233554;
        background: #112240; color: #fff; outline: none;
    }
    #send-btn {
        background: #64ffda; color: #0a192f; border: none; padding: 8px 15px;
        border-radius: 5px; font-weight: bold; cursor: pointer;
    }
`;

// Injecter le CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = forfyStyles;
document.head.appendChild(styleSheet);

// 2. LA BASE DE CONNAISSANCES (Le savoir de Forfy)
const knowledgeBase = [
    // GÉNÉRAL
    { keys: ["bonjour", "salut", "hello", "hi"], response: "Wouf ! Bonjour ! Je suis Forfy. Comment puis-je vous aider à propos de Forfeo ?" },
    { keys: ["c'est quoi", "mission", "forfeo"], response: "Forfeo est une plateforme de forfaits qui reverse 1% de ses bénéfices aux organismes du Québec. On transforme l'achat plaisir en geste solidaire ! 🐾" },
    { keys: ["1%", "pourcentage", "don", "argent"], response: "C'est simple : Forfeo prend 1% de ses propres bénéfices nets et le met dans une cagnotte. À la fin du mois, la communauté vote pour donner cet argent à une cause." },
    
    // ORGANISMES
    { keys: ["organisme", "partenaire", "inscrire", "obnl"], response: "Les organismes peuvent s'inscrire gratuitement via l'onglet 'Espace Organismes'. C'est simple et sans frais ! 🏢" },
    { keys: ["critère", "selection", "choisi"], response: "Nous choisissons des OBNL enregistrés au Québec, sérieux et apolitiques. Chaque mois, 2 à 4 finalistes sont soumis au vote." },
    
    // VIDÉOS & TUTORIEL
    { keys: ["video", "film", "envoyer", "upload"], response: "Pour envoyer une vidéo : 1. Filmez votre expérience. 2. Envoyez-la via WeTransfer à client@forfeo.com. Consultez la page 'Vidéos' pour le tutoriel complet ! 🎥" },
    { keys: ["gagner", "rabais", "concours"], response: "En envoyant votre vidéo ou en achetant un forfait, vous êtes éligible à nos concours. Si votre vidéo est publiée, vous recevez un code promo exclusif !" },
    
    // VOTE
    { keys: ["vote", "voter", "choisir"], response: "Le vote est ouvert à tous ! Allez sur la page 'Vote', choisissez votre cause préférée et validez. C'est vous qui décidez où va le 1%." },
    
    // CONTACT
    { keys: ["contact", "aide", "parler", "humain"], response: "Besoin d'un humain ? Écrivez à support@forfeo.com. Moi je ne suis qu'un chien virtuel ! 🐶" }
];

// 3. LOGIQUE INTELLIGENTE
function getBotResponse(input) {
    input = input.toLowerCase();
    
    // Recherche par mot-clé
    for (let entry of knowledgeBase) {
        for (let key of entry.keys) {
            if (input.includes(key)) {
                return entry.response;
            }
        }
    }
    return "Je ne suis pas sûr de comprendre (je suis un petit chien après tout 🐶). Essayez 'vidéo', 'organisme' ou 'vote' !";
}

// 4. CRÉATION DU WIDGET HTML
const widgetHTML = `
    <div id="forfy-widget">
        <div id="forfy-window">
            <div class="chat-header">
                <span>🐶 Forfy - Assistant</span>
                <span onclick="toggleChat()" style="cursor:pointer;">✖</span>
            </div>
            <div class="chat-messages" id="chat-messages">
                </div>
            <div class="chat-input-area">
                <input type="text" id="user-input" placeholder="Posez une question..." onkeypress="handleKeyPress(event)">
                <button id="send-btn" onclick="sendMessage()">➤</button>
            </div>
        </div>
        <div id="forfy-icon" onclick="toggleChat()">
            <img src="https://placehold.co/60x60/64ffda/0a192f?text=🐶" alt="Forfy">
        </div>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', widgetHTML);

// 5. FONCTIONS DU CHAT
function toggleChat() {
    const win = document.getElementById("forfy-window");
    if (win.style.display === "none" || win.style.display === "") {
        win.style.display = "flex";
        contextualGreeting(); // Dire bonjour selon la page
    } else {
        win.style.display = "none";
    }
}

function appendMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("msg", sender === "bot" ? "msg-bot" : "msg-user");
    div.innerText = text;
    document.getElementById("chat-messages").appendChild(div);
    document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const text = input.value.trim();
    if (!text) return;
    
    appendMessage(text, "user");
    input.value = "";
    
    // Délai de réflexion simulé
    setTimeout(() => {
        const response = getBotResponse(text);
        appendMessage(response, "bot");
    }, 600);
}

function handleKeyPress(e) {
    if (e.key === "Enter") sendMessage();
}

// 6. ACCUEIL CONTEXTUEL (Forfy sait où il est)
let hasGreeted = false;
function contextualGreeting() {
    if (hasGreeted) return;
    
    const path = window.location.pathname;
    let msg = "Wouf ! Bienvenue sur Forfeo. Je peux vous aider ?";
    
    if (path.includes("videos.html")) {
        msg = "Wouf ! Vous voulez savoir comment nous envoyer vos vidéos pour gagner des rabais ? 🎥";
    } else if (path.includes("partenaires.html")) {
        msg = "Bienvenue aux organismes ! 🏢 Je peux vous expliquer comment bénéficier du 1%.";
    } else if (path.includes("vote.html")) {
        msg = "C'est le moment de voter ! 🗳️ Besoin d'aide pour choisir ?";
    } else if (path.includes("causes.html")) {
        msg = "Nous soutenons de belles causes. Laquelle vous touche le plus ?";
    }
    
    appendMessage(msg, "bot");
    hasGreeted = true;
}
