<template>
  <div>
    <van-list
      class="context"
      v-model="loading"
      :finished="finished"
      finished-text="我可是有底线的！！！"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="(item, index) in datalist"
        :key="item"
        @click="handlecontext"
        class="curr"
      >
        <i
          @mouseover.self="handletag"
          v-show="item.article_info"
          @click="deletecell(index)"
          >×</i
        >
        <div class="tag" v-show="isShow" @mouseleave="isShow = false">
          <ul class="tagtext">
            <li>不感兴趣</li>
            <li>屏蔽作者</li>
            <li>屏蔽标签</li>
            <li>举报</li>
          </ul>
        </div>
        <div class="cardhead">
          {{ item.author_name || item.author_user_info.user_name }}
          | {{ Math.ceil(Math.random() * 5) }}天前
        </div>
        <img
          :src="
            item.picture ||
            item.article_info.cover_image ||
            item.author_user_info.avatar_large
          "
        />

        <div class="title">{{ item.title || item.article_info.title }}</div>
        <div class="context">
          {{ item.brief || item.article_info.brief_content }}
        </div>
        <div class="footer" v-if="item.article_info">
          <div class="foot_item">
            <b class="iconfont icon-yanjing"></b
            ><span>{{ dianzanFilter(item.article_info.view_count) }}</span>
            <b class="iconfont icon-dianzan"></b
            ><span>{{ dianzanFilter(item.article_info.collect_count) }}</span
            ><b class="iconfont icon-xiaoxi_o"></b
            ><span>{{ dianzanFilter(item.article_info.comment_count) }}</span>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import maintext from "../../assets/maindata/maintxt.json";

export default {
  data() {
    return {
      datalist: [],
      loading: false,
      finished: false,
      curr: 0,
      isShow: false,
    };
  },
  computed: {
    ramdomtime() {
      let a = Math.floor(Math.random() * 5);
      return a;
    },
  },
  mounted() {
    // console.log(maintext);
    for (let i = 0; i < 10; i++) {
      this.datalist.push(maintext[i].item_info);
    }
    this.curr++;
  },
  methods: {
    handlecontext() {
      this.$router.push('/about')
    },
    dianzanFilter(res) {
      if (res / 10000 > 1) return (res / 10000).toFixed(1) + "w";
      else return res;
    },
    handletag(e) {},
    deletecell(index) {
      this.datalist.splice(index, 1);
    },
    onLoad() {
      if (this.datalist.length >= maintext.length) {
        this.finished = true;
        this.loading = false;
        return;
      }
      if (maintext.length - this.datalist.length < 10) {
        for (let i = this.curr * 10; i < maintext.length; i++) {
          this.datalist.push(maintext[i].item_info);
        }
      } else {
        for (let i = this.curr * 10; i < this.curr * 10 + 10; i++) {
          this.datalist.push(maintext[i].item_info);
        }
        this.curr++;
      }

      this.loading = false;
    },
  },
};
</script>
<style  lang="less" scoped>
.context {
  padding: 0;
  position: relative;
  .tag {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  .curr {
    cursor: pointer;
  }
  .van-cell {
    display: block;
    box-sizing: border-box;
    list-style: none;
    padding: 12px 20px 0px 20px;
    width: 100%;
    height: 150px;
    background-color: #fff;
    border-bottom: 1px solid #4e5969;
    text-align: left;

    i {
      float: right;
    }

    .cardhead {
      font-size: 12px;
      line-height: 16px;
    }

    img {
      width: 120px;
      height: 80px;
      float: right;
    }

    .title {
      padding: 10px 0;
      line-height: 20px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .context {
      line-height: 22px;
      font-size: 14px;
      color: #86909c;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 这里是超出几行省略 */
      overflow: hidden;
    }
    .footer {
      z-index: 1;
      margin-top: 5px;
      height: 22px;
      display: flex;
      flex-direction: row;
      .foot_item {
        display: block;
        height: 10px;
        border: transparent;
        b {
          font-size: 16px;
        }
        span {
          margin: 0 15px 0 5px;
        }
      }
    }
  }
}
.tagtext {
  background-color: #fff;
  border: 1px solid #ccc;
}
</style>
