<template>
  <div class="home">
    <nav>
      <main-nav></main-nav>
    </nav>
    <subnav
        style="position: sticky; top: 0px; background: white; z-index: 1"
    ></subnav
    ><!--吸顶功能-->
    <div class="container">
      <main>
        <router-view></router-view>
      </main>
      <aside>
        <div class="sidebar-box">
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png" alt="">
          <div class="content-box">
            <div class="headline">下载稀土掘金APP</div>
            <div class="desc">一个帮助开发者成长的社区</div>
          </div>
        </div>
        <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/addd03fc12614209b6e0c81669f17703~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="">
        <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0cad2a115ea4118bf43f7d815d2cfbe~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="">
        <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e98ddb1fa7443e8a8fd7c81f6d2b9eb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?" alt="">
        <div class="index-aside-footer">

        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import mainNav from "@/components/mainNav"
import subnav from "@/components/subnav";
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: @background;

  nav {
    min-height: 30px;
    background-color: white;
  }

  .container {
    flex: 1;

    display: flex;
    flex-direction: row;

    width: 80%;
    margin: 0 auto;
    padding-top: 20px;



    main {
      flex: 1;
      // background-color: white;

      // <=960
      @media screen and (max-width: 960px) {
        width: 100%;
      }
    }

    aside {
      width: 260px;
      margin-left: 20px;
      background-color: transparent;

      //<=960
      @media screen and (max-width: 960px) {
        display: none;
      }

      .sidebar-box{
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
        border-radius: 2px;
        font-size: 14rem;
        line-height: 20px;
        color: #333;
        display: flex;
        padding: 10px;

        img {
          margin-right: 16px;
          width: 60px;
          height: 60px;
        }

        .headline{
          font-weight: 500;
          font-size: 14px;
          line-height: 22px;
          color: #1d2129;
          margin-top: 16px;
        }

        .desc{
          margin-top: 5px;
          font-size: 12px;
          line-height: 20px;
          color: #86909c;
        }
      }

      img {
        width: 260px;
        height: 220px;
        margin: 10px 0;
      }
    }
  }
}
</style>
