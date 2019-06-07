<template>
  <div class="ion-page">
    <Header/>
    <ion-content class="ion-padding">
      <AddTodo v-on:add-todo="addTodo"/>
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" v-on:toggle-todo="toggleTodo"/>
    </ion-content>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import Header from "../components/Layout/Header";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo,
    Header
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
      const { title } = newTodo;
      axios
        .post("https://todo-list-api-jakubkoje.herokuapp.com/add-todo", {
          title
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => alert(err));
    },
    toggleTodo(id) {
      axios
        .put(`https://todo-list-api-jakubkoje.herokuapp.com/toggle-todo/${id}`)
        .catch(err => alert(err));
    }
  },
  created() {
    axios
      .get("https://todo-list-api-jakubkoje.herokuapp.com/get-todos")
      .then(res => (this.todos = res.data))
      .catch(err => alert(err));
  }
};
</script>

<style>
</style>
