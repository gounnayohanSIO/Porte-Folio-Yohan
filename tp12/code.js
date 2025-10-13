
function simple_affichage() {
    var n1 = prompt("Donner la Temperature en °C");
 
    
    var somme = Number(n1);
    
    
    
    
    if (somme < 10) {
        document.write("Froid");
    } 
    else if (somme >= 10 && somme < 25) {
        document.write("Normal");
    } 
    else {
        document.write("Chaud");
    }
    document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
}
    

    function calcul_moyenne() {
        var n1 = prompt("Donner la première note :");
        var n2 = prompt("Donner la deuxième note :");
        var n3 = prompt("Donner la troisième note :");
        
        var somme = Number(n1) + Number(n2) + Number(n3);
        document.write("Voici la somme : " + somme + "<br>");
        
        var moyenne = somme / 3;
        document.write("Voici la moyenne : " + moyenne.toFixed(2) + "<br>"); 
    
        
        if (moyenne < 10) {
            document.write("Résultat : Redoublant");
        } 
        else if (moyenne >= 10 && moyenne < 12) {
            document.write("Résultat : Admis – Passable");
        } 
        else if (moyenne >= 12 && moyenne < 14) {
            document.write("Résultat : Admis – Bien");
        } 
        else {
            document.write("Résultat : Admis – Très bien");
        }
        document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
    }

    function test_couleur() {
        var n1 = prompt("Donner un nombre.");
        var n2 = prompt("Donner un autre nombre.");

        if (n1<n2) {
        document.write(n1 + " < " + n2);    }

        else if  (n2<n1) {
            document.write(n2 + " < " + n1);

        }
else { (n1=n2)

document.write(n1 + " = " +n2);

}
document.write("<br>" + '<a href="index.html">Retourner à l\'index</a>');
    }

    function jeux() {

var chiffreSecret = Math.floor(Math.random() * 20) + 1;


var saisie = prompt("Devinez le chiffre secret (entre 1 et 20) :");


if (isNaN(saisie) || saisie === "" || saisie < 1 || saisie > 20) {
  alert("❌ Veuillez entrer un nombre valide entre 1 et 20 !");
} else {
  saisie = Number(saisie);

  if (saisie < chiffreSecret) {
    alert("Votre chiffre est inférieur au chiffre secret !");
  } else if (saisie > chiffreSecret) {
    alert("Votre chiffre est supérieur au chiffre secret !");
  } else {
    alert("🎉 Félicitations ! Vous avez trouvé le chiffre : " + chiffreSecret);
  }

  
  alert("Votre chiffre : " + saisie + "\nChiffre secret : " + chiffreSecret);
}
    }



    