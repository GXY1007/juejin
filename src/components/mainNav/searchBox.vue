<template>
  <div class="search-box">
    <input type="search" maxlength="32" placeholder="探索稀土掘金" :value="state.searchValue" class="serach-input">
    <span class="iconfont icon-sousuo"></span>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const state = reactive({
  searchValue:''
})
</script>

<style lang="less" scoped>
.search-box{
  background-color: #ffffff;
  border-radius: 4px;
  position: relative;
  width: 220px;
  height: 28px;
  border: 1px solid #c2c8d1;
  transition: width .2s;
  padding: 4px 0 4px 8px;
  font-size: 14px;

  //<=640px
  @media screen and (max-width:640px){
    width: 150px;
  }

  input{
    width: 100%;
    height: 100%;
    border: none;
    color: #c2c8d1;
  }

  .iconfont{
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    width: 34px;
    background: @background;
    border-radius: 2px;
    padding-top: 5px;
    padding-left: 10px;
  }

  .icon-sousuo{
    display: inline-block;
    font-size: 22px;
    color:#6a737d;
    cursor: pointer;

  }
}


</style>
