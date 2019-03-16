<template>
    <div class="wrapper" :style="{height: bannerHeight, width: bannerWidth}">
        <div class="box" id="banner">
            <img  v-for="(item, index) in imgUrl" :key="index"
                :src="item"
                class="banner-img" alt="">
            <img class="banner-img" :src="imgUrl[0]" alt="">
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
                'https://jimqing.xin/mall/mmall-fe/dist/resource/banner1.jpg',
                'https://jimqing.xin/mall/mmall-fe/dist/resource/banner2.jpg',
                'https://jimqing.xin/mall/mmall-fe/dist/resource/banner3.jpg',
                'https://jimqing.xin/mall/mmall-fe/dist/resource/banner4.jpg'
            ]
        }
    },
    methods: {
        reBackArray() {

        }
    }
}
</script>

<style lang="less" scoped>
    .wrapper {
        margin: .2rem auto;
        text-align: center;
        position: relative;
        overflow: hidden;
        border-radius: .08rem;
        .box {
            width: 42.625rem;
            height: 100%;
            animation: imgbox 15s ease-in-out infinite forwards;
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
        0%{
            margin-left: 0;
        }
        20%,
        25% {
            margin-left: -7.118rem;
        }
        45%,
        50% {
            margin-left: -14.222rem;
        }
        70%,
        75% {
            margin-left: -21.348rem;
        }
        95%,
        100% {
            margin-left: -28.448rem;
        }
    }
</style>