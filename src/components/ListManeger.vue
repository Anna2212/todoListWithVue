<template>
  <div>
    <h1 class="title">{{ msg }}</h1>
    <add-input @addingTask="addTask"/>
    <br>
    <br>
    <input type="text" class="form-control add" @input="handleSearch">
    <br>
    <button class="btn btn-info" @click="changeFilter('all')">All</button>
    <button class="btn btn-info" @click="changeFilter('completed')">Completed</button>
    <button class="btn btn-info" @click="changeFilter('active')">Active</button>
    <ul>
      <li v-for="(todo, index) in filteredTodos" :key="todo.title" >
        <list
        @newTitle="updateTitle(index, $event)"
        @detItem="del"
        @changeT="changeT(index, $event)"
        :todo="todo"
        :todos="todos"
        class="item"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import AddInput from './TextInput';
import List from './ListItem';

const todosList = [
  {
    id: 1,
    title: 'learn Vue',
    done: false,
  },
  {
    id: 2,
    title: 'learn Vuex',
    done: false,
  },
];

const STORAGE_KEY = 'vue-js-todo-P7oZi9sL';
const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || todosList;
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

export default {
  data() {
    return {
      msg: 'Todo List',
      todos: todoStorage.fetch(),
      filteredTodos: [],
      listEdit: false,
      isComplete: false,
      currentFilter: '',
    };
  },
  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
    },
    currentFilter: {
      handler(currentFilter) {
        if (currentFilter === 'completed') {
          this.filteredTodos = this.todos.filter(todo => todo.done);
        } else if (currentFilter === 'active') {
          this.filteredTodos = this.todos.filter(todo => !todo.done);
        } else {
          this.filteredTodos = this.todos;
        }
      },
    },
  },
  methods: {
    handleSearch(e) {
      this.filteredTodos = this.todos.filter(
        (todo) => todo.title.toLowerCase().includes(e.target.value)
      );
    },
    changeFilter(filter) {
      this.currentFilter = filter;
    },
    addTask(e) {
      const newTask = {
        id: Math.floor((Math.random() * 100) + 1),
        title: e,
        done: false,
      };
      this.todos.push(newTask);
    },
    updateTitle(i, e) {
      const newItem = {
        id: Math.floor((Math.random() * 100) + 1),
        title: e,
        done: false,
      };
      this.todos.splice(i, 1, newItem);
    },
    del(e) {
      const index = this.todos.indexOf(e);
      this.todos.splice(index, 1);
    },
    changeT(index, event) {
      console.log(event);
    },
  },
  components: {
    AddInput,
    List,
  },
  mounted() {
    this.filteredTodos = this.todos;
  },
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
}
.item {
  list-style: none;
  background: #ff8c00;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 10px;
}
.todo-complete {
  text-decoration: line-through;
}
</style>
