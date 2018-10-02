<template>
    <div class="wrapper">
        <div class="box">
            <a href="/pages/music/main" class="counter">去往music示例页面</a>
            <a href="/pages/mall/main" class="counter">去往mall示例页面</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                motto: 'Hello World',
                userInfo: {}
            }
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        background-image: url('http://jimqing.xin/img/miniprogram/img/index/bg.jpg');
        background-size: contain;
        height: 13.34rem;
        width: 7.5rem;
        text-align: center;
    }

    .box {
        margin: 0 auto;
        padding-top: 9rem;
        display: flex;
        flex-flow: column nowrap;
        width: 75%;
    }

    .counter {
        margin-top: .3rem;
        padding: 5px 10px;
        color: #ffffff;
        border: 1px solid #ffffff;
        animation: btn 5s;
    }
</style>