<template>
  <div>
    <input
      class="search"
      v-focus
      v-model="searchQuery"
      type="search"
      placeholder="abc..."
    />
    <div class="search__content" v-for="post in searchedPosts" :key="post.id">
      <div>{{ post.id }}</div>
      <div>{{ post.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      posts: [
        { id: 1, title: 'abc' },
        { id: 2, title: 'abf' },
        { id: 3, title: 'ghi' },
        { id: 4, title: 'jkl' },
        { id: 5, title: 'abo' },
      ],
    };
  },
  computed: {
    searchedPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.search {
  border: 1px solid #42b983;
  padding: 10px 15px;
  margin-top: 15px;
}
.search__content {
  padding: 15px;
  border: 2px solid #42b983;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
