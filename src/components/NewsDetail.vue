<!-- NewsDetail.vue -->
<template>
    <div>
      <div v-if="selectedArticle">
        <h2>{{ selectedArticle.title }}</h2>
        <p>{{ selectedArticle.description }}</p>
        <p>Source: {{ selectedArticle.source.name }}</p>
        <p>Published At: {{ formatDate(selectedArticle.publishedAt) }}</p>
        <img :src="selectedArticle.urlToImage" alt="Article Image" />
        <p>{{ selectedArticle.content }}</p>
        <!-- Teks "Selengkapnya Baca disini" -->
        <p>
          Selengkapnya Baca disini: 
          <a :href="selectedArticle.url" target="_blank" rel="noopener noreferrer">Baca disini</a>
        </p>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <!-- Tombol Kembali -->
      <button @click="goBack">Kembali</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedArticle: null,
      };
    },
    mounted() {
      // Ambil data artikel dari local storage saat komponen dimuat
      const storedArticle = localStorage.getItem('selectedArticle');
      if (storedArticle) {
        this.selectedArticle = JSON.parse(storedArticle);
      }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      },
      goBack() {
        // Kembali ke halaman sebelumnya
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style>
  /* Styling sesuai kebutuhan Anda */
  </style>
  