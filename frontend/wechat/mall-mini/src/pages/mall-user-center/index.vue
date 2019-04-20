<template>
    <div class="wrapper">
        <TopNav :isShowInput="false"/>
        <div class="top">
            <img class="top-img" src="../../../static/image/user-top.jpg" alt="">
            <div class="square" :style="getAvatarUrl">
            </div>
            <div class="nick-name">用户名称: {{userInfo.nickName}}</div>
        </div>
        <div class="user-info">
            <div class="form-circle" v-for="item in list" :key="item.export" @click="onRedirect(item.export)">
                <div class="item-img">
                    <img class="item-icon" :src="'../../../../../static/image/' + item.type +'.png'" alt="">
                </div>
                <span>{{item.word}}</span>
            </div>
            <i-toast id="toast" />
        </div>
        <div class="tip">
            <p>本小程序由 JimQing 开发实现</p>
            <p>仅作为自学作品展示使用!!</p>
        </div>
    </div>
</template>

<script>
import { $Toast } from '../../../static/iView/base/index';
import TopNav from '@/components/mall/top-nav.vue';
export default {
    name: 'user_center',
    data() {
        return {
            content: 'User-Center',
            list: [
                {
                    type: 'nav_cart',
                    word: '我的购物车',
                    export: 'mall-cart'
                },
                {
                    type: 'nav_order',
                    word: '我的订单',
                    export: 'mall-order-center'
                },
                {
                    type: 'address',
                    word: '我的地址',
                    export: 'mall-address'
                },
                {
                    type: 'me',
                    word: '关于我',
                    export: ''
                }
            ]
        };
    },
    components: {
        TopNav
    },
    computed: {
        getAvatarUrl() {
            if (this.userInfo) {
                return 'background-image: url(' + this.userInfo.avatarUrl + ')';
            }
        },
        userInfo() {
            return this.$store.state.userInfo
        }
    },
    methods: {
        onRedirect(path) {
            if(!path) {
                return;
            }
            wx.navigateTo({
                url: '/pages/' + path + '/main'
            });
        }
    },
    mounted() {
        $Toast({
            content: '加载用户信息中...',
            type: 'loading',
            duration: 0
        });
        if (this.$store.state.isLogin) {
            $Toast.hide();
        } else {
            wx.navigateTo({
                url: '/pages/mall-login/main'
            });
            $Toast.hide();
        }
    }
};
</script>

<style lang='less' scoped>
.wrapper{
    width: 100%;
    background-color: #ffffff;
    .top{
        height: 5rem;
        width: 100%;
        margin-top: .02rem; 
        margin-bottom: 1.3rem;
        box-shadow: 0 .03rem .1rem 0 #dfdede;
        .top-img{
            width: 100%;
            height: 100%;
        }
        .square{
            position: absolute;
            top: 4.5rem;
            left: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            background-image: url(data:image/jpeg;base64,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);
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: .05rem .08rem .16rem 0 #868686;
        }
        .nick-name{
            text-align: center;
            padding-left: .4rem;
            line-height: 3.5;
        }
    }
    .user-info{
        display: flex;
        justify-content: center;
        flex-flow: wrap;
        width: 100%;
        margin: 0 auto;
        .form-line{
            height: 1rem;
            line-height: 1rem;
            font-size: .36rem;
            border-bottom: 1px solid #dfdede;
            background: ghostwhite;
            .label{
                display: inline-block;
                width: 1.5rem;
                padding: 0 .2rem;
            }
        }
        .form-circle{
            position: relative;
            display: inline-block;
            height: 1.6rem;
            width: 1.6rem;
            padding: .2rem;
            margin: .4rem;
            text-align: center;
            font-size: .3rem;
            background-color: #ffffff;
            border: 1rpx solid #c60023;
            border-radius: 50%;
            box-shadow: 0rpx 3rpx 6rpx rgba(0,0,0,0.3),
            0 0 10rpx rgba(0,0,0,0.1) inset; 
            .item-img {
                position: absolute;
                top: 38%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin-top: .06rem;
                margin-bottom: .04rem;
                margin: 0 auto;
                .item-icon{
                    width: .6rem;
                    height: .6rem;
                }
            }
            span{
                display: inline-block;
                position: absolute;
                top: 68%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 1.5rem;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
    }
    .tip{
        text-align: center;
        font-size: .28rem;
        padding: .2rem .05rem;
        p{
            padding: .02rem;
        }
    }
}
</style>