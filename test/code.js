function jeux() {

  var chiffreSecret = Math.floor(Math.random() * 10) + 1;
  var saisie = prompt("Devinez le chiffre secret (entre 1 et 10) :");

  if (isNaN(saisie) || saisie === "" || saisie < 1 || saisie > 10) {
    alert("❌ Veuillez entrer un nombre valide entre 1 et 10 !");
  } else {
    saisie = Number(saisie);

    if (saisie < chiffreSecret) {
      alert("Votre chiffre est inférieur au chiffre secret !");
    } else if (saisie > chiffreSecret) {
      alert("Votre chiffre est supérieur au chiffre secret !");
    } else {
      alert("🎉 Félicitations ! Vous avez gagné !");
      
      // 👉 Redirection vers la page cadeau
      window.location.href = "cadeau.html";
    }
  }
}