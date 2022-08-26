<template>
  <div class="home">
    <nav>
      <main-nav></main-nav>
    </nav>
    <operation></operation>
    <div class="container">
      <main>
        <h1>{{ state.blog.title }}</h1>
        <div class="info">
          <img :src=state.blog.author.headProtrait alt="头像">
          <div class="details">
            <div class="name">{{ state.blog.author.name }}</div>
            <div class="meta-box">{{ state.blog.publishTime }} · 阅读{{ state.blog.read }}</div>
          </div>
          <button v-if="!state.blog.author.isfollowed" class="not-follow">
            <span class="iconfont icon-jiahao"></span>
            关注
          </button>
          <button v-else>
            √
            已关注
          </button>
        </div>
        <img :src=state.blog.image alt="">
        <div
            id="markdown"
            class="markdown markdown-body"
            v-html="state.blog.content"
            v-highlight
        ></div>
      </main>
      <aside>
        <nav>
          <div class="catalog-title">
            目录
          </div>
          <div class="catalog-body">
            <ul class="catalog-list">
              <li
                  v-for="(nav, index) in state.catalogList"
                  :key="index"
                  :class="{ active: state.activeName === nav.name }"
                  @click="currentClick(nav.name)"
              >
                <a
                    href="javascript:;"
                    @click="pageJump(nav.name)"
                >
                  {{ nav.name }}
                </a>
                <ul
                    class="sub-list"
                    v-if="nav.children.length > 0"
                >
                  <li
                      v-for="(item, childindex) in nav.children"
                      :key="childindex"
                      :class="{ active: state.activeName === item.name }"
                      @click.stop="currentClick(item.name)"
                  >
                    <div class="a-container">
                      <a
                          href="javascript:;"
                          @click="pageJump(item.name)"
                      >
                        {{ item.name }}
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script setup>
import mainNav from '@/components/mainNav'
import operation from "@/components/about/operation";
import {onMounted, reactive, onUnmounted} from "vue";
import 'github-markdown-css';
import {getMD} from "@/api/request";
const {marked} = require("marked");

const state = reactive({
  blog:{
    title:'HTML&CSS优化',
    author:{
      name:'不会起名字的阿关',
      headProtrait:require('../assets/images/birthday.png'),
      isfollowed:false,
    },
    publishTime:'2022年08月11日 23:02',
    read:'12',
    image:require('../assets/images/test.jpg'),
    content:'',
  },
  catalogList:[],
  activeName:'',
  scrollTop:''
})

const getParentIndex = (nav, endIndex) => {
  for (var i = endIndex - 1; i >= 0; i--) {
    if (nav[endIndex].level > nav[i].level) {
      return nav[i].index;
    }
  }
}

const getTitle = (content) => {
  let nav = [];

  let tempArr = [];
  let title = content.match(/<h[1-6]\x20id\=\"(\S*)\"/g);
  title.forEach((v, i) => {
    let realTitle = v.match(/\".*\"/g).toString().replace(/[-&\"]/g,"")
    tempArr.push({
      name: realTitle,
      level: v.charAt(2),
      children: [],
    });
  })

  // 只处理二级到四级标题，以及添加与id对应的index值，这里还是有点bug,因为某些code里面的注释可能有多个井号
  nav = tempArr.filter((item) => item.level >= 2 && item.level <= 4);
  let index = 0;
  let res = nav.map((item) => {
    item.index = index++;
    return item;
  })
  res.forEach((item) => {
    const parentIndex = getParentIndex(res, item.index)
    item.parent = parentIndex
  })
  return filterArray(res);
}


onMounted(
    () => {
      getMD().then(res => {
            state.blog.content = marked(res.data);
            const navs = getTitle(state.blog.content)
            state.catalogList = navs
            console.log(state.catalogList)
          })
      window.addEventListener('scroll', docsScroll)
    },
)

onUnmounted(
    () => {
      window.removeEventListener('scroll', docsScroll)
    }
)

const pageJump = (name) => {
  // document.querySelector(`#${name}`).scrollIntoView({
  //   behavior: "smooth",
  //   block: "start",
  //   inline: "nearest",
  // })
  const targetOffsetTop = document.querySelector(`#${name}`).offsetTop
  state.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const STEP = 100
  if (state.scrollTop > targetOffsetTop ){
    smoothUp()
  }else{
    smoothDown()
  }
  function smoothUp() {
    if (state.scrollTop > targetOffsetTop) {
      if (state.scrollTop - targetOffsetTop >= STEP) {
        state.scrollTop -= STEP
      }else{
        state.scrollTop = targetOffsetTop
      }
      document.body.scrollTop = state.scrollTop
      document.documentElement.scrollTop = state.scrollTop
      requestAnimationFrame(smoothUp)
    }
  }

  function smoothDown() {
    if (state.scrollTop < targetOffsetTop) {
      if (targetOffsetTop - state.scrollTop >= STEP) {
        state.scrollTop += STEP
      }else {
        state.scrollTop = targetOffsetTop
      }
      document.body.scrollTop = state.scrollTop
      document.documentElement.scrollTop = state.scrollTop
      requestAnimationFrame(smoothDown)
    }
  }
}


const currentClick = (name) => {
  state.activeName = name;
}

// 将标题数据处理成树结构
const filterArray = (data, parent) => {
  var tree = []
  var temp
  for (var i = 0; i < data.length; i++) {
    if (data[i].parent === parent) {
      var obj = data[i]
      temp = filterArray(data, data[i].index)
      if (temp.length > 0) {
        obj.children = temp
      }
      tree.push(obj)
    }
  }
  return tree
}

const docsScroll = () => {
  const el = document.querySelector('#markdown')
  const navContents = el.querySelectorAll('h1,h2,h3,h4,h5,h6')
  const offsetTopArr = []
  navContents.forEach(item => {
    offsetTopArr.push(item.offsetTop)
  })
  state.scrollTop = document.documentElement.scrollTop + 20 || document.body.scrollTop + 20
  let navIndex = 0
  let count = 0
  for (let n=0; n<offsetTopArr.length; n++) {
    if (state.scrollTop >= offsetTopArr[n]) {
      navIndex = n
      if (navIndex >= 10) count++
    }
  }
  currentClick(navContents[navIndex].innerHTML)
  let nav = document.getElementsByClassName('catalog-list')
  if (navIndex >= 10) {
    nav.style.top = -20 * count + 'px'
  }
}
</script>

<style lang="less" scoped>

.home{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: @background;
  text-align: left;

  nav{
    min-height: 60px;
    background-color: white;
    box-shadow: 0 8px 5px -5px @borderShadow;
  }

  .container{
    flex: 1;

    display: flex;
    flex-direction: row;

    max-width: 80%;
    margin: 0 auto;
    padding-top: 20px;

    //<=1500
    @media screen and (max-width:1150px){
      max-width: 100%;
    }

    main{
      flex: 1;
      background-color: white;
      border-radius: 5px;
      padding: 26px 24px;

      img{
        position: relative;
        object-fit: cover;
        width: 100%;
        max-height: 424px;
      }

      .info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;

        img{
          flex: 0 0 auto;
          margin-right: 1rem;
          width: 3.333rem;
          height: 3.333rem;
          border-radius: 50%;
        }

        .details{
          min-width: 0;
          flex: 1;
          min-height: 43px;
          letter-spacing: 1px;
          align-items: stretch;
          line-height: normal;

          .name{
            font-size: 20px;
            font-weight: 500;
            color: #515767;
          }
          .meta-box{
            color: #8a919f;
          }
        }

        .not-follow{
          margin: 0 0 0 auto;
          padding: 0 1rem;
          height: 34px;
          font-size: 14px;
          color: #1e80ff;
          background: rgba(30,128,255,.05);
          border: 1px solid rgba(30,128,255,.3);
          border-radius: 4px;
          display: flex;
          align-items: center;
        }
      }

      .markdown{
        margin: 12px;
      }
    }
    aside{
      width: 260px;
      height: 200px;

      nav{
        width: inherit;
        margin-left: 20px;
        background-color: white;
        border-radius: 4px;
        padding: 22px;

        position: fixed;
        top: 80px;
        transition: top .2s;

        .catalog-title{
          font-weight: 500;
          padding-bottom: 18px;
          font-size: 16px;
          line-height: 22px;
          color: #1d2129;
          border-bottom: 1px solid #e4e6eb;
        }

        .catalog-body {
          max-height: 460px;
          overflow: auto;

          .catalog-list,.sub-list{
            margin: 4px 0;
            padding: 0;
          }

          li{
            list-style: none;
            color: #000;

            a {
              height: 36px;
              line-height: 36px;
              text-decoration: none;
              color: inherit;
              display: inline-block;
              width: 90%;
              font-weight: 400;
              font-size: 14px;
              //height: 22px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              padding-left: 6px;

              &:hover{
                background-color: #F7F8FA;
                border-radius: 4px;
                cursor: pointer;
              }
            }

            .a-container {
              margin: 0;
              padding: 0 0 0 11px;
            }


          }
          .active{
            color: @blue;
            background-color: white;

            &::before{
              content: "";
              position: absolute;
              left: 0;
              width: 4px;
              height: 16px;
              margin-top: 8px;
              background: @blue;
              border-radius: 0 4px 4px 0;
            }
          }


        }
      }

      //<=960
      @media screen and (max-width:960px){
        display: none;
      }
    }
  }
}




::-webkit-scrollbar{

  width:6px;

  //height:16px;

  background-color:white;

}

/*定义滚动条轨道

圆角*/

::-webkit-scrollbar-track{

  border-radius:10px;

  background-color:white;

}

/*定义滑块

圆角*/

::-webkit-scrollbar-thumb{

  border-radius:10px;
  background-color: #E4E6EB;

}

</style>
