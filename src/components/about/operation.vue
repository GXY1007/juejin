<template>
<div class="operation">
  <div class="item">
    <span class="iconfont icon-dianzan"></span>
  </div>
  <div class="item">
    <span class="iconfont icon-pinglun"></span>
  </div>
  <div class="item">
    <span class="iconfont icon-shoucangfill"></span>
  </div>
  <div class="item">
    <span class="iconfont icon-fenxiang"></span>
  </div>
  <hr />
  <div class="item">
    <span class="iconfont icon-jubao"></span>
  </div>
  <div class="item">
    <span class="iconfont icon-bg-fullscreen"></span>
  </div>
</div>
</template>

<script>
export default {
  name: "operation"
}
</script>

<style lang="less" scoped>
.operation{
  position: fixed;
  margin-left: 10px;
  top: 120px;
  //z-index: 2;

  .item{
    position: relative;
    margin-bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;

    .iconfont{
      font-size: 22px !important;
      color: #8a919f;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &:hover{
        cursor: pointer;
        color: #515767;
      }
    }
  }

  hr{
    width: 32px;
    background: #e4e6eb;
    height: 1px;
    margin: 0 auto 20px;
    border: none;
  }

  //<=1150px
  @media screen and (max-width:1150px){
    display: none;
  }
}
</style>
