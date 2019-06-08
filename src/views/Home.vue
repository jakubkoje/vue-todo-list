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
        .delete(`https://todo-list-api-jakubkoje.herokuapp.com/del-todo/${id}`)
        .then(() => (this.todos = this.todos.filter(todo => todo._id !== id)))
        .catch(() => this.showAlert("Request failed", "Failed to remove todo"));
    },
    addTodo(newTodo) {
      const { title } = newTodo;
      axios
        .post("https://todo-list-api-jakubkoje.herokuapp.com/add-todo", {
          title
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(() =>
          this.showAlert(
            "Request failed",
            "Please add todo with length from 4 to 20 symbols"
          )
        );
    },
    toggleTodo(id) {
      axios
        .put(`https://todo-list-api-jakubkoje.herokuapp.com/toggle-todo/${id}`)
        .catch(() => this.showAlert("Request failed", "Failed to toggle todo"));
    },
    showAlert(header, message) {
      return this.$ionic.alertController
        .create({
          header,
          message,
          buttons: ["OK"]
        })
        .then(a => a.present());
    }
  },
  created() {
    axios
      .get("https://todo-list-api-jakubkoje.herokuapp.com/get-todos")
      .then(res => (this.todos = res.data))
      .catch(() => this.showAlert("Request failed", "Failed to get todos"));
  }
};
</script>

<style>
</style>
