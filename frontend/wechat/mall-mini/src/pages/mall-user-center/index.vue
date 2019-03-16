<template>
    <div class="wrapper">
        <TopNav :isShowInput="false"/>
        <div class="top">
            <img class="top-img" src="../../../static/image/user-top.jpg" alt="">
            <div class="square" :style="getAvatarUrl">
            </div>
            <div class="nick-name">ID: {{userInfo.nickName}}</div>
        </div>
        <div class="user-info">
            <div class="form-line">
                <span class="label">用户名：</span>
                <span class="text">{{userInfo.username}}</span>
            </div>
            <div class="form-line">
                <span class="label">电 话：</span>
                <span class="text">{{userInfo.phone}}</span>
            </div>
            <div class="form-line">
                <span class="label">邮 箱：</span>
                <span class="text">{{userInfo.email}}</span>
            </div>
            <div class="form-line">
                <span class="label">问 题：</span>
                <span class="text">{{userInfo.question}}</span>
            </div>
            <div class="form-line">
                <span class="label">答 案：</span>
                <span class="text">{{userInfo.answer}}</span>
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
            content: 'User-Center'
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
    .top{
        height: 5rem;
        width: 100%;
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
            box-shadow: .05rem .08rem .2rem 0 #868686;
        }
        .nick-name{
            text-align: center;
            line-height: 3.5;
        }
    }
    .user-info{
        width: 85%;
        margin: 0 auto;
        .form-line{
            height: 1rem;
            line-height: 1rem;
            font-size: .36rem;
            margin-bottom: .08rem;
            border-bottom: 1px solid #dfdede;
            background: ghostwhite;
            box-shadow: 0 .03rem .08rem 0 #dfdede;
            .label{
                display: inline-block;
                width: 1.5rem;
                padding: 0 .2rem;
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