<template>
  <div class="hello">
    <Header></Header>
    <div class="swiperDiv">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide>
          <img src="static\img\home\b1.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="static\img\home\b2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="static\img\home\b3.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </div>
    <div class="classify">
      <div class="classify-tile">
        <img src="static\img\home\6.png" alt="">
        <span>藏品分类</span>
        <img src="static\img\home\7.png" alt="">
      </div>
      <div class="classify-cent">
        <div class="classify-cent-list" v-for="(item,index) in classifyList" >
          <img :src=item.url alt="">
          <p>{{item.china}}</p>
          <p>{{item.english}}</p>
        </div>
      </div>
     </div>
     <div class="classify classZX">
      <div class="classify-tile">
        <img src="static\img\home\6.png" alt="">
        <span>资讯中心</span>
        <img src="static\img\home\7.png" alt="">
      </div>
      <div class="classZX-cent">
        <div class="classZX-cent-img">
          <img src="../../static/img/home/2015271520pb.jpeg" alt="">
        </div>
        <div class="classZX-cent-text">
          <div v-for="(item,index) in classZXList">
            <img src="../../tatic/img/home/18.png" alt="">
            <p>{{item}}</p>
            <span>new</span>
          </div>
        </div>
      </div>
     </div> 
  </div>
</template>

<script>
import Swiper from 'swiper'
import Header from './contom/header'
import Footer from './contom/foorer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        classifyList:[
          {
            burl:'static/img/home/8.png',
            url:'static/img/home/13.png',
            china:"瓷器",
            english:"PORCELAIN"
          },
          {
            burl:'static/img/home/9.png',
            url:'static/img/home/14.png',
            china:"玉器",
            english:"PORCELAIN"
          },
          {
            burl:'static/img/home/10.png',
            url:'static/img/home/15.png',
            china:"字画",
            english:"PORCELAIN"
          },
          {
            burl:'static/img/home/11.png',
            url:'static/img/home/16.png',
            china:"杂项",
            english:"PORCELAIN"
          },
          {
            burl:'static/img/home/12.png',
            url:'static/img/home/17.png',
            china:"钱币",
            english:"PORCELAIN"
          }
        ],
        classZXList:[
          '艺术品上线市场展望',
          '景德镇陶瓷的成长与变迁',
          '文物展出率从2%到30%故宫展览“大爆发”',
          '不是你有钱了才收藏，而是收藏会令你更富有',
          '馆藏国宝【史前至汉代玉贝】'
        ]
    }
  },
  components:{
    Header,
    Header
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .swiper-container {
        width: 100%;
        min-width: 960px;
        height: 738px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
    }
    .swiperDiv{
      margin-top: -60px;
    }
    .classify{
      width: 100%;
      .classify-tile{
        height: 150px;
        padding: 40px;
        span{
              color: #000;
            font-size: 26px;
            font-weight: 600;
            font-family: KaiTi;
            text-align: center;
            letter-spacing: 3px;
            line-height: 20px;
            display: inline-block;
        }
      }
      .classify-cent{
        width:1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        .classify-cent-list{
          width: 240px;
          height: 240px;
          margin: 0;
          padding: 0;
          background-size: 100%;
          background-repeat: no-repeat;
          box-sizing: border-box;
          padding-top: 60px;
          p{
            color: #fff;
          }
        }
        .classify-cent-list:nth-child(1){
          background:url('../../static/img/home/8.png') 
        }
        .classify-cent-list:nth-child(2){
          background:url('../../static/img/home/9.png') 
        }
        .classify-cent-list:nth-child(3){
          background:url('../../static/img/home/10.png') 
        }
        .classify-cent-list:nth-child(4){
          background:url('../../static/img/home/11.png') 
        }
        .classify-cent-list:nth-child(5){
          background:url('../../static/img/home/12.png') 
        }
      }

    }
    .classZX{
      .classZX-cent{
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: space-around;
      }
    }
</style>

