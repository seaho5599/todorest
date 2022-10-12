<template>
  <div>
    <NavBar />
    <RouterView />
    <Transition name="fade">
      <ToastBox />
    </Transition>
  </div>
</template>

<script>
import ToastBox from "@/components/ToastBox.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    ToastBox,
    NavBar,
  },
  setup() {
    const getCookie = () => {
      let x, y;
      let val = document.cookie.split(";");
      for (let i = 0; i < val.length; i++) {
        x = val[i].substr(0, val[i].indexOf("="));
        y = val[i].substr(val[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, ""); // 앞과 뒤의 공백 제거하기
        if (x == "loginState") {
          return unescape(y); // unescape로 디코딩 후 값 리턴
        }
      }
    };
    console.log(getCookie());
    return {};
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
