<template>
  <div class="posts" v-for="post in posts" :key="post.id">
    <div>{{ post.id }}</div>
    <div>Title: {{ post.title }}</div>
    <div>Description: {{ post.body }}</div>
  </div>
  <div ref="observer" class="observer"></div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          { params: { _page: this.page, _limit: this.limit } }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert('Error');
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          { params: { _page: this.page, _limit: this.limit } }
        );
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Error');
      }
    },
  },
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style scoped>
.posts {
  padding: 15px;
  border: 2px solid #42b983;
  margin-top: 15px;
  text-align: left;
}
</style>
