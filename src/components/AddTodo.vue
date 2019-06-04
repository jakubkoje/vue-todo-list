<template>
  <!--   <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>-->
  <div>
    <form @submit="addTodo">
      <ion-item>
        <ion-label class="ion-padding-end">Todo:</ion-label>
        <ion-input
          type="text"
          placeholder="Add Todo..."
          :value="title"
          @ionInput="title = $event.target.value"
        ></ion-input>
      </ion-item>
      <ion-button expand="block" type="submit" class="ion-margin-top ion-margin-bottom">Submit</ion-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title
      };

      this.$emit("add-todo", newTodo);

      this.title = "";
    }
  }
};
</script>

<style scoped>
</style>
