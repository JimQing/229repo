<template>
    <div class="wrapper">
        <div class="box">
            <div class="box-header">Mall - mini</div>
            <div class="search-con">
                <input class="search-input" id="search-input" placeholder="请输入您想要搜索的商品！">
            </div>
            <Banner></Banner>
            <Guide></Guide>
            <Product></Product>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/mall/banner.vue';
    import Guide from '@/components/mall/guide.vue';
    import Product from '@/components/mall/product.vue';
    export default {
        data() {
            return {
                motto: 'Hello World',
                userInfo: {}
            }
        },
        components: { Banner, Guide , Product },
        methods: {
            bindViewTap() {
                const url = '../logs/main'
                wx.navigateTo({ url })
            },
            clickHandle(msg, ev) {
                console.log('clickHandle:', msg, ev)
            }
        }
    }
</script>

<style lang="less" scoped>
    .wrapper {
        background: #eeeeee;
        background-size: contain;
        width: 7.5rem;
        text-align: center;
    }

    .box {
        display: flex;
        flex-flow: column nowrap;
        width: 95%;
        margin: 0 auto;
        .box-header {
            background: #eeeeee;
            margin-top: .55rem;
            margin-bottom: .25rem;
            font-size: .48rem;
            font-weight: 700;
            color: #c60023;
            text-align: left;
            text-decoration: none;
        }
        .search-input {
            width: 95%;
            margin: 0 auto;
            height: .5rem;
            line-height: .4rem;
            font-size: .3rem;
            border: 1px solid #c60023;
            border-radius: 7px;
            background: #ffffff;
            outline: none;
        }
    }
</style>