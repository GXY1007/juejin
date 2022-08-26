<template>
  <div class="subnav">
    <ul>
      <router-link to="/recommended" active-class="active">综合</router-link>
      <router-link to="/following" active-class="active">关注</router-link>
      <router-link to="/backend" active-class="active">后端</router-link>
      <router-link to="/frontend" active-class="active">前端</router-link>
      <router-link to="/android" active-class="active">Android</router-link>
      <router-link to="/ios" active-class="active">iOS</router-link>
      <router-link to="/ai" active-class="active">人工智能</router-link>
      <router-link to="/freebie" active-class="active">开发工具</router-link>
      <router-link to="/career" active-class="active">代码人生</router-link>
      <router-link to="/article" active-class="active">阅读</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "subnav",
};
</script>

<style scoped lang="less">
.subnav {
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 1px solid @background;
  box-shadow: 0 8px 5px -5px @borderShadow;

  ul {
    display: flex;
    align-items: center;
    width: 1000px;
    height: 50px;
    margin-left: 100px;
    line-height: 45px;
    text-align: center;

    a {
      flex: 1;
      color: #71777c;
      flex: 1;
      text-decoration: none;
      position: relative;


     &:hover{
        cursor: pointer;
        content: @blue;
      }
    }
  }
}

.active {
  color: #007fff !important;
}
</style>
