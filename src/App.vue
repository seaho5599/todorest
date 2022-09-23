<template>
  <div class="container">
    <h2>Todo List</h2>
    <!-- 할일검색폼 -->
    <input
      class="form-control"
      type="text"
      v-model="searchText"
      placeholder="Search"
    />
    <!-- 할일입력 -->
    <TodoForm @add-todo="addTodo" />
    <!-- 목록없음 안내 -->
    <div v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <!-- 할일목록 -->
    <TodoList
      :todos="filterTodos"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
  </div>
  <h3>{{ count }}</h3>
  <h3>{{ doubleCount }}</h3>
  <h3>{{ dFn() }}</h3>
  <button @click="count++">버튼</button>
</template>
<script>
import { computed, ref } from "vue";
import TodoForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";
export default {
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    const todos = ref([
      { id: 1, subject: "할일목록 1", complete: false },
      { id: 2, subject: "할일목록 2", complete: false },
      { id: 3, subject: "할일목록 3", complete: false },
    ]);
    const searchText = ref("");
    const filterTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter((todo) => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });
    const addTodo = (todo) => {
      todos.value.push(todo);
    };
    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };
    const toggleTodo = (index) => {
      todos.value[index].complete = !todos.value[index].complete;
    };
    const count = ref(1);
    const doubleCount = computed(() => {
      return count.value + 1;
    });
    const dFn = () => {
      return count.value * 2;
    };
    return {
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      filterTodos,
      searchText,
      count,
      doubleCount,
      dFn,
    };
  },
};
</script>
<style>
#app {
}
.todostyle {
  text-decoration: line-through;
  color: gray;
}
</style>
