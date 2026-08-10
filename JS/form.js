"use strict"

function visForm() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;
    let richiesta = document.getElementById("richiesta").value;
    let messaggio = document.getElementById("messaggio").value;
    let privacy = document.getElementById("privacy").checked;
    alert("Schiaccia f12 e vai su console per visualizzare il tuo form completo!");
    console.log("Nome e cognome: " + nome + " " + cognome + "\n Email: " + email + "\n Richiesta: " + richiesta + "\n Messaggio: " + messaggio + "\n Privacy: " + privacy);
}