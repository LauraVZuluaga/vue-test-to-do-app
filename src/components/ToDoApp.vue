<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
    <form data-test="form" @submit.prevent="createToDo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: "ToDoApp",
  props: {},
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          text: "Learn Vue Testing",
          completed: false,
        },
      ],
    };
  },
  methods: {
    createToDo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false,
      });
      console.log(this.todos.length, "incremental id");
      console.log(this.todos[0], "tareas");
      console.log(this.todos[1], "tareas");
    },
  },
};
</script>

<style></style>
