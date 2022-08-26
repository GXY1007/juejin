<template>
  <div class="main-nav">
    <router-link to="/" class="logo">
      <img src="" alt="logo">
    </router-link>
    <nav>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/">
            首页
          </router-link>
        </li>
        <li class="nav-item">沸点</li>
        <li class="nav-item">课程</li>
        <li class="nav-item">直播</li>
        <li class="nav-item">活动</li>
        <li class="nav-item">商城</li>
        <li>
          <img src="../assets/images/member.png" alt="会员五折购" class="member">
        </li>
      </ul>
    </nav>
    <ul class="right-side-nav">
      <li class="search">
        <search-box></search-box>
      </li>
      <li class="add">
        <add></add>
      </li>
      <li class="message">
        <span class="iconfont icon-xiaoxi"></span>
        <div class="message-num">
          {{ state.message }}
        </div>
      </li>
      <li class="personal-center">
        <img src="../assets/images/test.jpg" alt="个人中心">
      </li>
    </ul>
  </div>
</template>

<script setup>
import searchBox from "@/components/mainNav/searchBox";
import add from "@/components/mainNav/add";
import {reactive} from "vue";

const state = reactive({
  message:2,
})
</script>

<style lang="less" scoped>

.router-link-active {
  text-decoration: none;
  color: black;
}
a {
  text-decoration: none;
  color: black;
}

.main-nav{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;

  .logo{
    content:url(https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg);
    text-decoration: none;
    cursor: pointer;

    //<=640px
    @media screen and (max-width:640px){
      content: url(	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg);
    }
  }

  nav{
    .nav-list{
      display: flex;
      align-items: center;

      .nav-item{
        position: relative;
        color: #86909c;
        padding: 0 1rem;
        font-size: 16px;
        margin: 0;
        min-width: 32px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;


        &:hover{
          cursor: pointer;
          color: black;

          &::after{
            content: '';
            position: absolute;
            bottom: -22px;
            height: 2px;
            width: 32px;
            background-color: @blue;
          }
        }
      }
      .member{
        width: 115px;
        height: 40px;
      }
    }

    //<=1150px
    @media screen and (max-width:1150px){
      display: none;
    }
  }
  .right-side-nav{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100%;
    margin: 0;
    order: 0;

    .personal-center {
      margin-left: 12px;

      &:hover{
        cursor: pointer;
      }

      img{
        display: inline-block;
        position: relative;
        background-size: cover;
        background-color: #eee;
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
      }
    }


    .message {
      position: relative;

      &:hover{
        cursor: pointer;
      }

      .icon-xiaoxi {
        color: #8a919f;
        font-size: 24px !important;

        &:hover{
          color: #515767;
        }
      }

      .message-num{
        position: absolute;
        top: -6px;
        right: -4px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #f03535;
        color:white;
        font-size: 4px;
        text-align: center;
      }
    }

    .add{
      //<=640px
      @media screen and (max-width:640px){
        display: none;
      }
    }
  }
}


</style>
