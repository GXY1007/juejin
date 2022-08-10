<template>
  <div class="home">
    <nav></nav>
    <subnav></subnav>
    <div class="container">
      <main>
        <span class="iconfont icon-xiala1"></span>
      </main>
      <aside></aside>
    </div>
  </div>
</template>

<script setup>
import subnav from "@/components/subnav";

</script>

<style lang="less" scoped>

.home{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: @background;

  nav{
    min-height: 30px;
    background-color: white;
  }

  .container{
    flex: 1;

    display: flex;
    flex-direction: row;

    width: 80%;
    margin: 0 auto;
    padding-top: 20px;

    main{
      flex: 1;
      background-color: white;


    }

    aside{
      width: 260px;
      margin-left: 20px;
      background-color: white;

      //<=960
      @media screen and (max-width:960px){
        display: none;
      }

    }
  }

  .iconfont{
    font-size: 22px !important;
  }
  .icon-xiala1{
    color: #F56C6C;
    &:hover{
      cursor: pointer;
    }
  }
}

</style>
