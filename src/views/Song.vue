<template>
    <div id="song">
    <div class="heard">
      <input type="search" placeholder="请输入歌手名或歌手名" class="input" />
      <button class="but">搜索</button>
    </div>
    <div>
      <ul class="name">
        <li>周杰伦</li>
        <li>刘德华</li>
        <li>林俊杰</li>
      </ul>
    </div>
    <div>
        <ul class="gqxq">
            <li><img src="../img/1.jpg" alt="" class="tp1"></li>
            <li><h4>{{obj[8].name}}</h4></li>
            <li>{{obj[10].name}}</li>
            <!-- <li><img src="../img/c885bb2425a8af756e29b57872b6cede副本.png" alt="" class="tp2"></li> -->
        </ul>
    </div>
    <div class="gl">
      <ul class="nr">
        <li v-for="(objs,index) in obj" :key="index">
          {{objs.name}}
        </li>
        <!-- <li>[00:01]作词:黄沾</li>
        <li>[00:24]编曲:吴智强</li>
        <li>[00:29]河山只在我梦萦</li>
        <li>[00:30]祖国已多年未亲近</li>
        <li>[00:31]可是不管怎样也改变不了</li>
        <li>[00:32]我的中国心</li>
        <li>[00:33]洋装虽然穿在身</li> -->
      </ul>
        <!-- <ul>
            <li v-for="(objs,index) in obj" :key="index">
                <p>{{objs.name}}</p>
            </li>
        </ul> -->
        <!-- <p v-for="(objs,index) in obj" :key="index">
            {{obj[6].name}}</p> -->
           <!-- 1----------- {{obj[6].name}} -->

    </div>
      <div>
        <!-- <img src="../img/未标题-1.png" alt="" class="tp3"> -->
        <audio src="#" controls="controls"></audio>
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
    created() {
        this.axios.get("http://yapi.dapengjiaoyu.com/mock/380/order").then((res)=>{
             this.obj=res.data.data;
            console.log(res.data.data)
        });
    },
}
</script>
<style scoped>
.heard {
  padding: 10px 60px;
}
#song {
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
  border: 1px white solid;
  overflow: hidden;
}
.tp1{
    width: 300px;
    height: 300px;
    border-radius: 150px;
    margin: 80px 210px;
}
.gqxq li:nth-of-type(2){
  margin: -60px 210px;
  list-style: none;
  font-size: 50px;
}
.gqxq li:nth-of-type(3){
  margin: 60px 270px;
  list-style: none;
  font-size: 50px;
}
.tp2{
  width: 100px;
  height: 100px;
  margin: 0px 300px;
}
.gl{
  width:520px;
  height: 400px;
  overflow-y:scroll;
  margin: 0px 120px;
}
.nr li{
 list-style: none;
 font-size: 45px;
}
.tp3{
  width: 100%;
  height: 90px;
  margin: 10px 0px;
}
#img_z{
  transform: rotate(360deg);
  animation: rotation 8s linear infinite;
}
/* @keyframes rotation{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
} */
</style>