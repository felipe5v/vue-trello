<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
      class="no-selection"
      @click="markAsCompleted({ task })"
      @dblclick="deleteT(task)"
    >
      {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Añade una nueva tarea..."
      v-model="title"
      @keyup.enter="add"
    />
  </ul>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "task-list",
    props: {
      listId: String,
      tasks: Array,
    },
    data() {
      return {
        title: "",
      };
    },
    methods: {
      ...mapActions(["addTask", "markAsCompleted", "deleteTask"]),
      add() {
        this.addTask({ list: this.listId, title: this.title });
        this.title = "";
      },
      deleteT(task) {
        this.deleteTask({ taskId: task.id });
      },
    },
  };
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    background-color: #fafafa;
    border-radius: 3px;
    border-bottom: 1px solid #ccc;
    margin: 0.25rem 0;
    padding: 1rem;

    &.completed {
      background-color: #cfd8dc;
      color: #90a4ae;
    }
    &.no-selection {
      user-select: none;
    }
  }
  input {
    box-sizing: border-box;
    background-color: #eceff1;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    margin: 0.5rem;
    outline: 0;
    padding: 0.75rem 0;
    transition: background-color 600ms ease;
    width: 100%;

    &:active,
    &:focus {
      background-color: #fafafa;
      border-bottom: 1px solid #ccc;
      margin: 0.25rem 0;
      padding: 1rem;
    }
    &::placeholder {
      color: #90a4ae;
    }
  }
</style>
