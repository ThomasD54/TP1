const login_user = formulaire.elements['login_user'].value;
const password = formulaire.elements['password'].value;
const confirm_password = formulaire.elements['confirm_password'].value;
const nom = formulaire.elements['nom'].value;
const prenom = formulaire.elements['prenom'].value;
const adresse_postal = formulaire.elements['adresse_postal'].value;
const email = formulaire.elements['email'].value;
const telephone = formulaire.elements['telephone'].value;
const date_de_naissance = formulaire.elements['date_de_naissance'].value;






const formulaire = document.getElementById('monFormulaire');
const recap = document.getElementById('recap');

const infoPrenom = document.getElementById('infoPrenom');
const infoNom = document.getElementById('infoNom');
const infoEmail = document.getElementById('infoEmail');

formulaire.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs du formulaire
  const prenom = formulaire.elements['prenom'].value;
  const nom = formulaire.elements['nom'].value;
  const email = formulaire.elements['email'].value;

  // Mettre à jour le récapitulatif
  infoPrenom.textContent = `Prénom : ${prenom}`;
  infoNom.textContent = `Nom : ${nom}`;
  infoEmail.textContent = `Email : ${email}`;

  // Masquer le formulaire et afficher le récapitulatif
  formulaire.style.display = 'none';
  recap.style.display = 'block';
});