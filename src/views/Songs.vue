<template>
  <div id="songs">
    <div class="heard">
      <input type="search" v-model="$route.query.box" class="input" placeholder="请输入歌曲名或歌手名"/>
      <button class="but">搜索</button>
    </div>
    <div>
      <ul class="name">
        <li>林俊杰</li>
        <li>{{obj[6].name}}</li>
        <li>{{obj[7].name}}</li>
      </ul>
    </div>
    <div class="disxi di1" @click="go">
            <span class="xi">我的中国心</span>
            <span>AUlim 民国歌曲</span>
            <span>林俊杰</span>
        </div>
          <div class="disxi di2">
            <span class="xi">我的中国心</span>
             <span>AUlim 民国歌曲</span>
             <span>林俊杰</span>
        </div>
          <div class="disxi di3">
            <span class="xi">我的中国心</span>
             <span>AUlim 民国歌曲</span>
             <span>林俊杰</span>
        </div>
          <div class="disxi di4">
            <span class="xi">我的中国心</span>
             <span>AUlim 民国歌曲</span>
             <span>林俊杰</span>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj:''
    }
  },
  methods: {
    go() {
      this.$router.push({
        path: "/song"
      });
    }
  },
   created() {
      this.axios.get("http://yapi.dapengjiaoyu.com/mock/380/order").then((res)=>{
       this.obj=res.data.data
       console.log(res.data.data)
      })
    },
};
</script>
<style scoped>
.heard {
  padding: 10px 60px;
}
#songs {
  height: 100vh;
  background-image: linear-gradient(to bottom, aquamarine, white);
}
.input {
  width: 500px;
  height: 60px;
  border-radius: 10px;
  border: none;
  font-size: 30px;
}
.but {
  width: 100px;
  height: 60px;
  margin-left: 10px;
  font-size: 24px;
  background-image: linear-gradient(to right, aquamarine, white);
  color: #533bff;
  border-radius: 7px;
  border: none;
  outline: none;
}
.name {
  margin: 0px 60px;
  display:flex;
  flex-wrap: wrap;
}
.name li {
  list-style: none;
  float: left;
  padding: 10px;
  height: 30px;
  text-align: center;
  border-radius: 30px;
  color: white;
  font-size: 30px;
  line-height: 30px;
  background: aquamarine;
  border: 1px solid white;
  overflow: hidden;
}
.disxi{
    padding: 0.34667rem;
    font-size: 0.46667rem;
    border-radius: 0.10667rem;
    background: aliceblue;
    margin: 10px 0px;
}
.disxi>span:nth-of-type(2){
    font-size: 0.26667rem;
    float: right;
}
.disxi>span:nth-of-type(3){
     display: flex;
    font-size: 13px;
}
.di1{
  animation: anim 2s;
}
.di2{
  animation: anim 3s;
}
.di3{
  animation: anim 4s;
}
.di4{
  animation: anim 4.8s;
}
@keyframes anim{
  0%{
    opacity: 0;
    transform: rotateY(0deg) translate3d(0,30px,0);
  }
  100%{
    opacity: 1;
    transform: rotate(0deg) translate3d(0,0,0);
  }
}

</style>