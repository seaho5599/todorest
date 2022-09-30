<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <h2 class="mb-5 mt-5">ToDo List</h2>
    <div
      class="clock-wrap d-flex flex-column justify-content-center align-items-center rounded-circle"
    >
      <div
        class="clock d-flex flex-column justify-content-center align-items-center border border-4 border-dark rounded-circle"
      >
        <div class="hour">
          <div
            id="hr"
            class="hr d-flex justify-content-center rounded-circle"
          ></div>
        </div>
        <div class="min">
          <div
            id="mn"
            class="mn d-flex justify-content-center rounded-circle"
          ></div>
        </div>
        <div class="sec">
          <div
            id="sc"
            class="sc d-flex justify-content-center rounded-circle"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      const deg = 6;
      const hr = document.querySelector("#hr");
      const mn = document.querySelector("#mn");
      const sc = document.querySelector("#sc");
      setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
      });
    });

    return {};
  },
};
</script>

<style scoped>
.clock-wrap {
  width: 26.04vw;
  min-height: 26.04vw;
  background-color: #235440;
}
.clock {
  width: 350px;
  height: 350px;
  background: url("@/assets/images/clock.png");
  background-size: cover;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 -5px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
}

.clock:before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #7d6983;
  border-radius: 50%;
  z-index: 10;
}

.clock .hour,
.clock .min,
.clock .sec {
  position: absolute;
}

.clock .hour .hr {
  width: 160px;
  height: 160px;
}

.clock .min .mn {
  width: 190px;
  height: 190px;
}

.clock .sec .sc {
  width: 230px;
  height: 230px;
}

.hr:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 80px;
  background: #7f748c;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}

.mn:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 90px;
  background: #7f748c;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}

.sc:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 150px;
  background: #7a6e83;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
</style>
