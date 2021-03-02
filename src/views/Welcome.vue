<template>
  <div class="welcome">
    <div>
      <img src="../img/1.jpg" alt class="ojo" />
    </div>
    <div class="hade">
      <h2>网易云音乐</h2>
      <h6>好听的音乐尽在此处,感谢你的选择</h6>
    </div>
    <div class="srk">
      <input type="search" class="input" placeholder="请输入歌名或歌手名" v-model="box" />
      <button class="search" @click="search">搜索</button>
    </div>
    <div>
        <button class="button" @click="countDown" v-if="total>0">
              {{content}}
        </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    search() {
        this.$router.push({
          path: "/songs?box=" + this.box
        });
    }
  },
  data() {
    return {
      content: "倒计时", // 按钮里显示的内容
      total: 5,
    };
  },
  methods: {
    countDown() {
      window.setInterval(() => {
        this.total--;
        this.content = this.total + "s";
      }, 1000);
    },
  },
};
</script>
<style  scoped>
h2 {
  margin-top: 50px;
  color: #533bff;
}
h6 {
  color: #533bff;
}
.srk {
  width: 100%;
  height: 80px;
  padding: 60px 0px;
}
.welcome {
  text-align: center;
  overflow: hidden;
  height: 100vh;
  line-height: 100px;
  background:aquamarine;
}
.input {
  width: 490px;
  height: 90px;
  float: left;
  margin: 50px 60px;
  border-radius: 20px;
  border: none;
  font-size: 30px;
}
.search {
  width: 100px;
  height: 60px;
  float: left;
  margin: 70px -10px;
  background-image: linear-gradient(to left, aquamarine, white);
  color: #533bff;
  font-size: 24px;
  border-radius: 7px;
  border: none;
}
.name {
  margin: 0px;
}
.name li {
  list-style: none;
  float: left;
  width: 110px;
  height: 40px;
  font-size: 28px;
  border: 1px solid red;
  line-height: 40px;
  border-radius: 50px;
}
.ojo {
  width: 200px;
  margin: 30px 0px;
}
</style>