<template>
    <div class="wrapper">
        <div class="box">
            <div class="box-item" v-for="(item, index) in imgUrl" :key="index">
                <i-avatar class="item-img" shape="square" size="large">
                    A
                </i-avatar>
                <span>test</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgUrl: [
                    '','','','','','','',''
                ]
            }
        },
        methods: {
        },
    }
</script>
<style lang="less" scoped>
    .wrapper {
        background: white;
        height: 4rem;
        width: 7.125rem;
        margin: 0 auto;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    .box{
        padding-top: .1rem;
        .box-item {
            display: inline-block;
            .item-img {
                display:block;
                margin-top: .5rem;
                width: 1.5rem;
            }
        }
    }
</style>
    