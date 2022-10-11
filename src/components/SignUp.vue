<template>
  <div class="container sign-up">
    <p>회원가입</p>
    <input type="text" v-model="email" placeholder="email" /><br />
    <input type="password" v-model="password" placeholder="password" /><br />
    <button @click="signUp">가입하기</button>
    <span>또는 로그인으로 돌아가기</span>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const auth = getAuth();
    const router = useRouter();
    const errMsg = ref();
    const signUp = () => {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("🚀 ~ file: SignUp.vue ~ line 27 ~ .then ~ user", user);
          router.push("/");
          // ...
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "이메일을 잘못 입력 하셨습니다.";
              break;
            case "auth/user-not-found":
              errMsg.value = "존재하지 않는 이메일 주소입니다.";
              break;
            case "auth/wrong-password":
              errMsg.value = "비밀번호를 잘못 입력 하셨습니다.";
              break;
            case "auth/too-many-requests":
              errMsg.value = "접속 시도를 너무 많이 하셨습니다.";
              break;
            default:
              errMsg.value = "이메일 혹은 비밀번호가 틀렸습니다.";
              break;
          }
          alert(errMsg.value);
          console.log(error.code);
        });
    };
    return {
      email,
      password,
      signUp,
    };
  },
};
</script>

<style scoped>
.signUp {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 20px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 15px;
}
</style>
