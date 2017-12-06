<template>
  <div class="hello">
    <div v-if="!editList" class="wrapper">
      <div class="wraperT">
        <input type="checkbox" @click="comleteItem(todo)" v-model="checked" v-bind:false-value="!checked">
        <p class="todo-title" :class="{'todo-complete': todo.done}">
          {{ todo.title }}
        </p>
      </div>
      <div class="buttons">
        <button class="btn btn-primary" @click="likeTask(todo)">Like</button>
        <button class="btn btn-warning" @click="changeTitle()">Change</button>
        <button class="btn btn-info" @click="detail(todo)">Details</button>
        <button class="btn btn-danger" @click="delTodo(todo)">&times;</button>
      </div>
    </div>
    <add-input v-if="editList" @addingTask="updateTitle"/>
  </div>
</template>

<script>
import AddInput from './TextInput';

export default {
  props: ['todo'],
  name: 'List',
  data() {
    return {
      editList: false,
      isComplete: false,
      isLike: false,
      checked: false,
    };
  },
  methods: {
    delTodo(todo) {
      this.$emit('detItem', todo);
    },
    changeTitle() {
      this.editList = true;
    },
    updateTitle(newTitle) {
      this.$emit('newTitle', newTitle);
      this.editList = false;
    },
    comleteItem(todo) {
      if (this.checked === true) {
        this.todo.done = false;
      } else {
        this.todo.done = true;
      }
      this.$emit('changeT', todo);
    },
    likeTask(todo) {
      this.$emit('like', todo);
    },
    detail(todo) {
      debugger;
      this.$router.push({ name: 'Details', params: { todo, id: todo.id } });
    },
  },
  components: {
    AddInput,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wraperT{
  width: 52%;
  display: flex;

}
.title {
  font-family: Helvetica, Arial;
  color: teal;
  font-weight: bold;
}
.taskItem_ {
  display: flex;
}
.todo-complete {
  text-decoration: line-through;
}
.todo-title{
  margin-left: 10px;
}
.like-task{
  background: yellow;
}
.buttons {
  width: 48%;
  display: flex;
  justify-content: space-between;
}
</style>
