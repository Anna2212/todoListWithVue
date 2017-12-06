<template>
  <div>
      <p>id: {{$route.params.todo.id}}</p>
      <p>title: {{$route.params.todo.title}}</p>
      <p>done: {{ $route.params.todo.done}}</p>
      <button class="btn btn-danger" @click="back">Back</button>
  </div>
</template>
<script>
export default {
  name: 'Details',
  methods: {
    back() {
      this.$router.push({ name: 'List' });
    },
  },
};
</script>
