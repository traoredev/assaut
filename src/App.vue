<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center mb-6">Bienvenue à la 3ème journée scientifique sur les hépatites virales</h1>

      <button class="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded m-2" @click="showParticipantForm">S'inscrire Participant</button>
      <!--button class="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded m-2" @click="navigateToAdmin">Administrateur</button-->
      <!--a href="InterfaceAdministrateur.html" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">Administrateur</a-->
      <a href="InterfaceAdministrateur.html" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">Administrateur</a>

      <!-- Utilisez v-if pour afficher le formulaire de participant si showParticipant est vrai -->
      <ParticipantForm v-if="showParticipant" />

      <!-- Ajoutez ici la logique pour afficher l'interface de l'administrateur -->
    </div>
  </div>
</template>

<script>
import ParticipantForm from './components/ParticipantForm.vue';

export default {
  components: {
    ParticipantForm,
  },
  data() {
    return {
      showParticipant: false, // Initialisez à false
    };
  },
  methods: {
    showParticipantForm() {
      // Lorsque l'utilisateur clique sur "S'inscrire Participant", passez showParticipant à true pour afficher le formulaire.
      this.showParticipant = true;
    },
   
  },
};
</script>
