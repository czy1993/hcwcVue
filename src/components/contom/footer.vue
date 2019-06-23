<template>
    <div class="footer">
        <ul >
            <li>
                <h1>服务指南</h1>
                <p>——</p>
                <p>发布方式</p>
                <p>在线发布</p>
            </li>
            <li>
                <h1>VIP须知</h1>
                <p>——</p>
                <p>艺术品买卖流程</p>
                <p>买家须知</p>
                <p>卖家须知</p>
                <p>线上鉴定须知</p>
                <p>会员隐私声明</p>
            </li>
            <li>
                <h1>物流配送</h1>
                <p>——</p>
                <p>配送常见问题</p>
                <p>送货上门</p>
                <p>武装押运</p>
            </li>
            <li>
                <h1>服务指南</h1>
                <p>——</p>
                <p>卖家认证</p>
                <p>联系客服</p>
                <p>账户功能</p>
                <p>查找买品</p>
            </li>
        </ul>
        <div class="footer-bot">
            <p>网站访问量</p>
            <p>请广大藏友认真阅读文化部《艺术品经营管理办法》，确认未受到工作人员的不实宣传的误导和承诺。</p>
            <p>COPYRIGHT © 2019 瑞丰文藏. ALL RIGHTS RESERVED 网站建设：</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        
    }
}
</script>
<style lang="less" scoped>
.footer{
    width: 100%;
    overflow: auto;
    box-sizing: border-box;
   
    background: rgba(39, 39, 39, 1);
    margin-top: 100px;
    color: #fff;
    ul{
        width: 100%;
        overflow: auto;
        padding: 25px 180px;
        list-style: none;
        display: flex;
        justify-content: space-around;
        li{
            h1{
                font-size: 20px;
            }
            p{
                margin-bottom: 10px;
            }
        }
    }
    .footer-bot{
        width: 100%;
        height: 150px;
        background: rgba(20, 20, 20, 1);
        p{
            text-align: center;
            font-size: 16px;
            padding: 10px;
        }
    }
}
</style>


