<template>
    <div class="header">
            <div class="header-top">
                <div class="header-top-left">
                    <div>
                        <img src="static/img/home/tz.png" alt="">
                        <span>重要通知:</span>
                        
                    </div>
                    <div class="inner">
                        <Marquee :lists="lists"></Marquee>
                    </div>
                </div>
                <div class="header-top-right">
                    <a href="#">登录</a>
                    <i>|</i>
                    <a href="#">注册</a>
                    <span style="margin-left: 10px">分享到:</span>
                    <img src="static/img/home/wechart.png" alt="">
                    <img src="static/img/home/qq.png" alt="">
                    <img src="static/img/home/weibo.png" alt="">
                </div>
            </div>
            <div class="header-nav">
                <div class="header-nav-top">
                    <img src="static/img/home/logo.png" alt="">
                    <div>
                        <h3>瑞丰文藏</h3>
                        <p>全球艺术品中介服务平台</p>
                    </div>
                </div>
                <div class="header-nav-center">
                    <div>
                        <router-link to="">环球展厅</router-link>
                        <router-link to="">展览展销</router-link>
                        <router-link to="">VIP专场</router-link>
                        <router-link to="">关于我们</router-link>
                        <!-- <a href="spzx.html">环球展厅</a>
                        <a href="zxzx.html">展览展销</a>
                        <a href="VIP.html">VIP专场</a>
                        <a href="about.html">关于我们</a> -->
                    </div>
                    <div class="header-nav-sousuo">
                        <input type="text">
                        <div>
                            <img src="static/img/home/sousuo.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="header-nav-foot">
                    <img src="static/img/home/phone.png" alt="">
                    <div>
                        <p>官方统一热线</p>
                        <h4>027  --  -- </h4>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import Marquee from "../dome/marquee.vue"
export default {
    data(){
        return{
            lists: [
				'凡需要在本平台进行展览推广的藏品',
				'本平台免费提供资深专家鉴定',
				'鉴定结果符合本平台服务要求的藏品才能进行展览推广服务'
			],
        }
    },
     components:{
        Marquee,
    },
}
</script>

<style lang="less" scoped>
.header-top{
    height: 28px;
    background: #000;
    color: #fff;
    width: 100%;
    min-width: 1200px;
    box-sizing: border-box;
    padding: 0 200px;
    line-height: 28px;
    
}
.header-top img{
    float: left;
    height: 28px;
}
.header-top span{
    float: left;
    margin-right: 10px;
}

.ad-wrapper-box{
    float: left;
    width: 250px;
    font-size: 14px;
    height: 28px;
    line-height: 28px;
}
.header-top-left{
    float: left;
    width: 500px;
}
.header-top-right{
    float: right;
    width: 250px;
}
.header-top-right a{
    float: left !important;
}
.header-top-right i{
    float: left !important;
    margin: 0 7px;
}
.header-top-right img{
    float: left;
    height: 20px;
    margin: 4px 10px;
}
.header-nav{
    width: 100%;
    height: 130px;
    min-width: 1200px;
    box-sizing: border-box;
    padding: 20px 100px; 
    display: flex;
    justify-content: space-around;
    background: url("../../../static/img/home/beijing.png");
    border-bottom: 3px solid #d28a10;
}
.header-nav-top{
    width: 250px;
}
.header-nav-top img{
    float: left;
    height: 80px;
    border-radius: 100px;
    margin-right: 10px;
}
.header-nav-top div{
    float: left;
    color: #b38740;
    text-align: center;
    padding-top: 20px;
}
.header-nav-center{
    width: 300px;
    height: 80px;
    box-sizing: border-box;
    padding-top: 5px;
}

.header-nav-center div:nth-child(1){
    width: 300px;;
}
.header-nav-sousuo{
    height: 45px;
    padding: 0;
    margin: 0;
    padding-top: 7px;
    position: relative;
}
.header-nav-sousuo input{
    display: inline-block;
    width: 250px;
    height: 35px;
    border: 1px solid #424242;
    padding: 0 !important;
    margin: 0 !important;
}
.header-nav-sousuo div{
    position: absolute;
    right: 0;
    top: 7px;
    display: inline-block;
    width: 51px;
    height: 35px;
    background-color: #b08235;
    margin: 0 !important;
    z-index: 1;
    box-sizing: border-box;
    padding: 3px 8px;
}
.header-nav-sousuo div img{
    height: 29px;
    /* padding-top: 10px; */
}
.header-nav-foot img{
    float: left;
    margin-top: 15px;
}
.header-nav-foot div{
    float: left;
    margin-left: 10px;
    margin-top: 15px;
    color: #b30608;
    padding-top: 10px;
}
</style>


