<template>
    <div class="wrapper" :style="{height: bannerHeight, width: bannerWidth}">
        <div class="box">
            <img  v-for="(item, index) in imgUrl" :key="index" :src="item" class="banner-img" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bannerHeight: {
                type: String,
                default: '300rpx'
            },
            bannerWidth: {
                type: String,
                default: '712.5rpx'
            },
            imgUrl: {
                type: Array,
                default: [
                    'http://onlineshoppingmall.xin:8083/mmall-fe/dist/resource/banner1.jpg',
                    'http://onlineshoppingmall.xin:8083/mmall-fe/dist/resource/banner2.jpg',
                    'http://onlineshoppingmall.xin:8083/mmall-fe/dist/resource/banner3.jpg',
                    'http://onlineshoppingmall.xin:8083/mmall-fe/dist/resource/banner4.jpg',
                    'http://onlineshoppingmall.xin:8083/mmall-fe/dist/resource/banner1.jpg'
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrapper {
        background: #523f3d;
        margin: .2rem auto;
        text-align: center;
        position: relative;
        overflow: hidden;
        .box {
            width: 35.625rem;
            height: 100%;
            animation: imgbox 8s ease-in-out infinite forwards;
            /* 如果想手指按住不动不执行动画，不能使用hover而是使用active */
            &:active {
                animation-play-state: paused;
            }
            .banner-img {
                color: white;
                background-repeat: no-repeat;
                background-size: contain; 
                height: 100%;
                width: 7.125rem;
                float: left;
            }
        }
    }

    @keyframes imgbox {
        0%,
        14% {
            margin-left: 0;
        }
        21%,
        35% {
            margin-left: -7.118rem;
        }
        42%,
        56% {
            margin-left: -14.222rem;
        }
        63%,
        77% {
            margin-left: -21.348rem;
        }
        86%,
        to {
            margin-left: -28.472rem;
        }
    }
</style>