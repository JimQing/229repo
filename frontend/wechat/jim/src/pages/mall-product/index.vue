<template>
    <div class="wrapper">
        <div class="box">
            <i-button type="ghost" @click="handleText">只显示文本</i-button>
            <i-toast id="toast" />
        </div>
    </div>
</template>

<script>
    import { $Toast } from '../../../static/iView/base/index';
    export default {
        data() {
            return {
                motto: 'Hello World'
            }
        },
        methods: {
            handleText () {
                $Toast({
                    content: this.$root.$mp.query.content
                });
            },
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
</style>