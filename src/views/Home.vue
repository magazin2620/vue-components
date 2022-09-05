<template>
  <div class="home">
    <button @click="showModal">Show modal</button>
    <Modal v-model:show="modalVisible" />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'Home',
  components: {
    Modal,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
  },
};
</script>
