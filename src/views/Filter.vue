<template>
  <div>
    <select class="filter" v-model="selectedSort">
      <option disabled value="">Select from list</option>
      <option
        v-for="option in sortOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <transition-group name="post-list">
      <div class="filter__content" v-for="post in sortedPosts" :key="post.id">
        <div>{{ post.id }}</div>
        <div>Title: {{ post.title }}</div>
        <div>Description: {{ post.body }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSort: '',
      posts: [
        { id: 1, title: 'A', body: 'B' },
        { id: 2, title: 'C', body: 'A' },
        { id: 3, title: 'B', body: 'D' },
        { id: 4, title: 'E', body: 'C' },
        { id: 5, title: 'D', body: 'E' },
      ],
      sortOptions: [
        { value: 'title', name: 'By title' },
        { value: 'body', name: 'By description' },
      ],
    };
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
  },
};
</script>

<style scoped>
.filter__content {
  padding: 15px;
  border: 2px solid #42b983;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
