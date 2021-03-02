<template>
<div>
      <button class="button" @click="countDown">
              {{content}}
      </button>
</div>
</template>
<script>
export default {
data () {
  return {
   content: '倒计时',  // 按钮里显示的内容
   total:5
  }
},
methods: {
  countDown() {
   window.setInterval(() => {
      this.total--
      this.content = this.total + 's'
    },1000)
  }
}
}

</script>
