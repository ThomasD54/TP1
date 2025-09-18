
const formulaire = document.getElementById('monFormulaire');
const recap = document.getElementById('recap');

const infoPrenom = document.getElementById('infoPrenom');
const infoNom = document.getElementById('infoNom');
const infoEmail = document.getElementById('infoEmail');

formulaire.addEventListener('submit', function(event) {

  // Récupérer les valeurs du formulaire
    const login_user = formulaire.elements['login_user'].value;
    const password = formulaire.elements['password'].value;
    const confirm_password = formulaire.elements['confirm_password'].value;
    const nom = formulaire.elements['nom'].value;
    const prenom = formulaire.elements['prenom'].value;
    const adresse_postal = formulaire.elements['adresse_postal'].value;
    const email = formulaire.elements['email'].value;
    const telephone = formulaire.elements['telephone'].value;
    const date_de_naissance = formulaire.elements['date_de_naissance'].value;

  // Mettre à jour le récapitulatif
    infoPrenom.textContent = `Login : ${login_user}`;
    infoNom.textContent = `Mot de passe : ${password}`;
    infoEmail.textContent = `Confirmation de votre mot de passe : ${confirm_password}`;
    infoEmail.textContent = `Nom : ${nom}`;
    infoEmail.textContent = `Prénom : ${prenom}`;
    infoEmail.textContent = `Adresse : ${adresse_postal}`;
    infoEmail.textContent = `Email : ${email}`;
    infoEmail.textContent = `Télephone : ${telephone}`;
    infoEmail.textContent = `Date de naissance : ${date_de_naissance}`;

  // Masquer le formulaire et afficher le récapitulatif
    formulaire.style.display = 'none';
    recap.style.display = 'block';
});