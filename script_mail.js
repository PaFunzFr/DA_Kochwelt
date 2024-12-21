function sendMail(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xeoqbzzl", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(() => {
        window.location.href = "./send_mail.html"; // Weiterleitung nach Erfolg
    })
    .catch((error) => {
        console.error("Fehler beim Senden:", error);
    });
}   