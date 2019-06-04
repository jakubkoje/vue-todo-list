<template>
  <!-- <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{todo.message}}
      <button @click="$emit('del-todo', todo._id)" class="del">x</button>
    </p>
  </div>-->
  <ion-item>
    <ion-toggle checked v-if="todo.completed" class="ion-padding-end" @ionChange="markComplete"></ion-toggle>
    <ion-toggle v-else class="ion-padding-end" @ionChange="markComplete"></ion-toggle>
    <ion-label>
      <h2 v-bind:class="{'is-complete':todo.completed}">{{todo.message}}</h2>
    </ion-label>
    <ion-button color="danger" size="small" @click="$emit('del-todo', todo._id)">X</ion-button>
  </ion-item>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
      this.$emit("toggle-todo", this.todo._id);
    }
  }
};
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
}
</style>

