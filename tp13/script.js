function calculer() {
    let total = 0;
    const lignes = document.querySelectorAll('tbody tr');

    lignes.forEach(ligne => {
        const quantite = parseFloat(ligne.querySelector('.quantite').value) || 0;
        const prix = parseFloat(ligne.querySelector('.prix').value) || 0;
        const resultat = quantite * prix;

        ligne.querySelector('.resultat').value = resultat.toFixed(2);
        total += resultat;
    });

    document.getElementById('total').value = total.toFixed(2);
}

document.getElementById('calcul').addEventListener('click', calculer);

document.getElementById('reset').addEventListener('click', function() {
    document.querySelectorAll('input[type="text"], input[type="number"], textarea').forEach(input => {
        if (!input.readOnly) input.value = '';
    });
    document.getElementById('total').value = '';
});

// Calcul automatique à chaque modification
document.querySelectorAll('.quantite, .prix').forEach(input => {
    input.addEventListener('input', calculer);
});