import { computed } from "vue";
import { useStore } from "vuex";
export const useToast = () => {
  // vuex 접근 관리
  const store = useStore();

  // 안내상자 보이거나 숨기는 변수
  const showToast = computed(() => store.state.modules.showToast);
  // 안내상자에 보여질 내용
  const toastMessage = computed(() => store.state.modules.toastMessage);
  // 안내상자 타입종류
  const toastType = computed(() => store.state.modules.toastType);
  // 타이머 식별자
  // const toastTimer = computed(() => store.state.toastTimer);
  // 안내상자 실행 메소드
  const triggerToast = (message, color) => {
    store.dispatch("modules/triggerToast", { message, color });
  };

  return {
    showToast,
    toastMessage,
    toastType,
    triggerToast,
  };
};
