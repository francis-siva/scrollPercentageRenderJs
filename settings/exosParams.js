document.querySelector("a")
.addEventListener('click', function (e) {
    
    e.preventDefault();

    let cible = this.getAttribute('href');
    let action = confirm('Voulez-vous quitter la page ?')

    /****/
    let lien = document.querySelectorAll("a");

    lien.forEach(function (link) {
        link.addEventListener("click", function (e) {
        e.preventDefault();
        let cible = this.getAttribute('href');
        let action = confirm('Voulez-vous quitter la page ?');
    })});
})