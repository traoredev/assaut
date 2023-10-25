<template>
    <div>
      <h2 class="text-2xl font-bold my-4">Inscription Participant</h2>
  
      <form @submit.prevent="registerParticipant">
        <div class="mb-4">
          <label for="nom" class="block text-sm font-medium text-gray-700">Nom :</label>
          <input v-model="nom" type="text" id="nom" name="nom" class="mt-1 p-2 border rounded" required>
        </div>
  
        <div class="mb-4">
          <label for="prenom" class="block text-sm font-medium text-gray-700">Prénom :</label>
          <input v-model="prenom" type="text" id="prenom" name="prenom" class="mt-1 p-2 border rounded" required>
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Adresse e-mail :</label>
          <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 border rounded" required>
        </div>
  
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Générer mon code QR</button>
      </form>
  
      <!-- Affichez ici le code QR généré -->
      <div v-if="codeQR">
        <img :src="codeQR" alt="Code QR généré">
      </div>
      <a v-if="codeQR" :href="codeQR" :download="nomFichier">
  Télécharger le code QR de {{ nomComplet }}
</a>

    </div>
  </template>
  
  <script>
  import QRCode from 'qrcode'; // Importez la bibliothèque QRCode
  
  export default {
    data() {
      return {
        nom: "",
        prenom: "",
        email: "",
        codeQR: null, // Initialisé à null
        nomComplet: "", // Ajoutez cette ligne
      };
    },
    methods: {
      async registerParticipant() {
        this.nomComplet = this.nom + ' ' + this.prenom; // Combinez nom et prénom
        const data = {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
        };
  
        try {
            const nomFichier = `${this.nomComplet}_codeQR.png`; // Générez le nom du fichier
      const codeQR = await QRCode.toDataURL(JSON.stringify(data));
      this.codeQR = codeQR;
      this.nomFichier = nomFichier; // Assurez-vous d'ajouter cette ligne
          //const codeQR = await QRCode.toDataURL(JSON.stringify(data));
          //this.codeQR = codeQR;
        } catch (error) {
          console.error('Erreur lors de la génération du code QR :', error);
        }
      },
    },
  };
  </script>
  