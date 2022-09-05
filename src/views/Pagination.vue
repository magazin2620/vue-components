<template>
  <div class="posts" v-for="post in posts" :key="post.id">
    <div>{{ post.id }}</div>
    <div>Title: {{ post.title }}</div>
    <div>Description: {{ post.body }}</div>
  </div>
  <div class="pagination">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page': page === pageNumber }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
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
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    page() {
      this.fetchPosts();
    },
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
.pagination {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
}
.current-page {
  border: 2px solid #42b983;
}
</style>
