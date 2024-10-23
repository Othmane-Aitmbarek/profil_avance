function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Tous les champs doivent être remplis.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return false;
    }

    alert("Formulaire soumis avec succès !");
    return true;
}
