<template>
  <!-- <header class="header">
    <h1>TodoList</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>-->
  <ion-header>
    <ion-toolbar>
      <ion-title>Todo List</ion-title>
      <ion-buttons slot="primary">
        <ion-button>
          <ion-icon name="information-circle-outline"></ion-icon>
        </ion-button>
        <ion-button>
          <ion-icon name="home"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {
  name: "Header"
};
</script>


<style scoped>
</style>
