<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`http://localhost:3000/del-todo/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo._id !== id)))
        .catch(err => alert(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("http://localhost:3000/add-todo", {
          title
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => alert(err));
      console.log(this.todos);
    },
    toggleTodo(toggledTodo) {}
  },
  created() {
    axios
      .get("http://localhost:3000/get-todos")
      .then(res => (this.todos = res.data))
      .catch(err => alert(err));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.8rem;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
