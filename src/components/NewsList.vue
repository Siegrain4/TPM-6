<!-- NewsList.vue -->
<template>
    <div>
      <h2>Berita Terkini</h2>
      <ul>
        <li v-for="article in articles" :key="article.url" @click="viewDetail(article)">
          <div class="news-item">
            <img :src="article.urlToImage" alt="News Image" class="news-image" />
            <div class="news-details">
              <span>{{ article.source.name }}</span>
              <h3>{{ article.title }}</h3>
              <p>{{ formatDate(article.publishedAt) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['articles']),
    },
    mounted() {
      this.fetchNews();
    },
    methods: {
      ...mapActions(['fetchNews']),
      viewDetail(article) {
  const encodedUrl = encodeURIComponent(article.url);
  // Simpan data artikel ke local storage
  localStorage.setItem('selectedArticle', JSON.stringify(article));
  this.$router.push({ name: 'NewsDetail', params: { id: encodedUrl } });
},

      formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      },
    },
  };
  </script>
  
  <style>
  .news-item {
    display: flex;
    margin-bottom: 20px;
  }
  
  .news-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .news-details {
    flex-grow: 1;
  }
  </style>
  