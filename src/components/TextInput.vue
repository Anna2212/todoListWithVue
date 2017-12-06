<template>
  <div class="addInput">
    <div class="col-md-10 col-md-offset-1 input">
      <input type="text" class="form-control add"  v-model="newTask">
      <button class="btn btn-success" @click="addTask">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  name: 'textInput',
  data() {
    return {
      newTask: '',
    };
  },
  methods: {
    addTask() {
      const task = this.newTask.toLocaleLowerCase().trim();
      if (task) {
        this.$emit('addingTask', task);
      }
      this.newTask = '';
    },
  },
};
</script>
<style>
.input{
  display: flex;
}
.add{
  margin-right: 10px;
}
</style>


