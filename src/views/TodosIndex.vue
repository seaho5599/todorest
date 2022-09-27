<template>
  <div class="container">
    <AppTitle :apptitle="apptitle" />

    <!-- 할일입력 -->
    <TodoForm @add-todo="addTodo" style="margin-top: 10px" />
    <!-- 서버에러 출력 -->
    <ErrorBox :errtext="errtext" />
    <div style="color: red">{{ error }}</div>
    <!-- 목록없음 안내 -->
    <div v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <!-- 할일목록 -->
    <TodoList
      :todos="todos"
      @delete-todo="deleteTodo"
      @toggle-todo="toggleTodo"
    />
    <!-- 할일검색폼 -->
    <input
      class="form-control w-25"
      type="text"
      v-model="searchText"
      placeholder="Search"
    />
    <!-- Pagination -->
    <PaginationView :page="page" :totalpage="totalPage" @get-todo="getTodo" />
  </div>
</template>
<script>
import axios from "axios";
import { computed, ref, watchEffect, watch } from "vue";
import AppTitle from "@/components/AppTitle.vue";
import TodoForm from "@/components/TodoSimpleForm.vue";
import TodoList from "@/components/TodoList.vue";
import PaginationView from "@/components/PaginationView.vue";
import ErrorBox from "@/components/ErrorBox.vue";
export default {
  components: {
    AppTitle,
    TodoForm,
    TodoList,
    PaginationView,
    ErrorBox,
  },
  setup() {
    const apptitle = ref("");
    apptitle.value = "Todo List";
    const todos = ref([]);

    // Pagination 구현
    // 전체목록수
    const totalCout = ref(0);
    // 페이지당 보여줄 개수
    const limit = 5;
    // 현재페이지
    const page = ref(1);
    // 총페이지수
    const totalPage = computed(() => {
      return Math.ceil(totalCout.value / limit);
    });
    const searchText = ref("");
    // ref, reactive, computed, props 등이 변경될때 마다 실행
    // watchEffect 를 사용
    watchEffect(() => {
      // console.log(page.value);
      // console.log(totalCout.value);
      // console.log(filterTodos.value);
      // console.log(totalPage.value);
    });
    // 변하기 전의 값 과 현재 값을 동시에 감시한다.
    // 연속으로 검색어를 무수하게 보내는 부분 일정
    let timeout = null;
    watch(searchText, () => {
      // 일정한 시간이 지나고 난 다음에 1번만 실행한다.
      // 타이머를 없앤다.
      clearTimeout(timeout);
      // 그리고 다시 타이머를 생성한다.
      timeout = setTimeout(() => {
        getTodo(1);
      }, 2000);
    });

    const filterTodos = computed(() => {
      if (searchText.value) {
        return todos.value.filter((todo) => {
          return todo.subject.includes(searchText.value);
        });
      }
      return todos.value;
    });

    const getTodo = async (nowPage = page.value) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/todos?_page=${nowPage}&_limit=${limit}&subject_like=${searchText.value}&_order=desc&_sort=id`
        );
        todos.value = response.data;

        // console.log(response.headers);
        // 총 목록수
        totalCout.value = response.headers["x-total-count"];
        page.value = nowPage;
      } catch (err) {
        error.value = "서버 목록 호출에 실패했습니다. 잠시 뒤 이용해주세요.";
      }
    };
    getTodo();
    const error = ref("");
    const addTodo = async (todo) => {
      try {
        await axios.post("http://localhost:3000/todos", {
          subject: todo.subject,
          complete: todo.complete,
          id: todo.id,
        });
        todos.value.push(todo);
        // 목록 갱신이 되므로 1페이지로 이동
        getTodo(1);
      } catch (err) {
        console.log("🚀 ~ err", err);
        error.value = "목록 추가 실패";
      }
    };

    const deleteTodo = async (index) => {
      try {
        // 현재 index는 배열 인덱스 번호 0,1,2,3,4가 전송된다.
        // 실제 저장되어 있는 id를 파악한다.
        const id = todos.value[index].id;
        await axios.delete("http://localhost:3000/todos/" + id);
        todos.value.splice(index, 1);
        // 현재페이지 유지
        getTodo(page.value);
      } catch (err) {
        error.value = "삭제 요청이 거부되었습니다.";
      }
    };
    const toggleTodo = async (index) => {
      try {
        // 어느 데이터를 수정할것인가를 전달
        // 업데이트 할 내용을 전달합니다.
        const id = todos.value[index].id;
        const complete = !todos.value[index].complete;
        await axios.patch("http://localhost:3000/todos/" + id, {
          complete,
        });
        todos.value[index].complete = complete;
      } catch (err) {
        error.value = "업데이트에 실패하였습니다.";
      }
    };
    return {
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      filterTodos,
      searchText,
      error,
      getTodo,
      totalPage,
      page,
      apptitle,
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
