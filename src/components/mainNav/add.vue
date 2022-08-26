<template>
<div class="add" >
  <span>创作者中心</span>
  <span class="iconfont icon-xiala" @click="showMenu"></span>

  <ul class="box" v-if="isShow">
    <li class="box-item">
      <van-icon name="edit" />
      写文章
    </li>
    <li class="box-item">
      <van-icon name="miniprogram-o" />
      发沸点
    </li>
    <li class="box-item">
      <van-icon name="records" />
      写代码
    </li>
    <li class="box-item">
      <van-icon name="coupon-o" />
      草稿箱
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "add",
  data(){
    return {
      isShow: false
    }
  },
  mounted() {
    // this.close()
  },
  methods:{
    showMenu(){
      this.isShow = !this.isShow
    },
    // close(){
    //   document.addEventListener("click", this.handleClose);
    // },
    // handleClose(){
    //   this.isShow = false
    // }
  }
}
</script>

<style lang="less" scoped>
.add {
  position: relative;
  display: flex;
  height: 38px;
  line-height: 38px;
  color: white;
  font-size: 14px;
  background-color: @blue;
  border-radius: 3px;
  margin: 0 8px;

  transition: background-color .1s linear .05s;
}


span {
  padding: 0 8px;
  border-radius: 3px;

  &:hover{
    cursor: pointer;
    background-color:#1171EE;
  }

  &::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 6;
    left: 86px;
    display: inline-block;
    width: 1px;
    height: 100%;
    background-color:rgb(0,156,255);
  }

}

.box{
  position: absolute;
  top: 120%;
  left: -7px;
  right: 0;
  padding: 6px 0;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 0 24px rgb(81 87 103 / 16%);
  border-radius: 6px;
  width: 120px;
  color: #6B707E;

  .box-item{
    line-height: 32px;
    width: 80%;
    margin: 0 auto;
    border-radius: 4px;
    letter-spacing: 1px;

    .van-icon{
      margin: 6px 6px 0 8px;
      font-size: 20px;
    }

    &:hover{
      cursor: pointer;
      background-color: #f9f9f9;
    }
  }
}
</style>
