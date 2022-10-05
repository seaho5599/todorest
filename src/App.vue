<template>
  <div>
    <NavBar />
    <RouterView
      @update-todo-toast="updateTodoToast"
      @new-todo-toast="newTodoToast"
      @update-load-fail-toast="updateLoadFailToast"
      @update-todo-fail-toast="updateTodoFailToast"
      @err-subject-toast="errSubjectToast"
      @new-todo-fail-toast="newTodoFailToast"
      @list-load-fail-toast="listLoadFailToast"
      @delete-todo-toast="deleteTodoToast"
      @delete-todo-fail-toast="deleteTodoFailToast"
    />
    <Transition name="fade">
      <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" />
    </Transition>
  </div>
</template>

<script>
import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composables/toast";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    ToastBox,
    NavBar,
  },
  setup() {
    // 안내창 관련
    const { showToast, toastMessage, toastType, triggerToast } = useToast();
    const updateTodoToast = () => {
      triggerToast("내용이 업데이트 되었습니다.");
    };
    const newTodoToast = () => {
      triggerToast("새글이 등록 되었습니다.");
    };
    const updateLoadFailToast = () => {
      triggerToast("내용을 가지고 오는것에 실패하였습니다.", "danger");
    };
    const updateTodoFailToast = () => {
      triggerToast("업데이트 실패하였습니다.", "danger");
    };
    const errSubjectToast = () => {
      triggerToast("제목을 입력하세요.", "danger");
    };
    const newTodoFailToast = () => {
      triggerToast("새글 등록에 싶패하였습니다.", "danger");
    };
    const listLoadFailToast = () => {
      triggerToast(
        "서버 목록 호출에 실패했습니다. 잠시 뒤 이용해주세요.",
        "danger"
      );
    };
    const deleteTodoToast = () => {
      triggerToast("삭제되었습니다.");
    };
    const deleteTodoFailToast = () => {
      triggerToast("삭제 요청이 거부되었습니다.");
    };
    return {
      updateTodoToast,
      newTodoToast,
      showToast,
      toastMessage,
      toastType,
      triggerToast,
      updateLoadFailToast,
      updateTodoFailToast,
      errSubjectToast,
      newTodoFailToast,
      deleteTodoToast,
      deleteTodoFailToast,
      listLoadFailToast,
    };
  },
};
</script>
<style scoped>
#app {
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
