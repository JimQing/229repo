<template>
    <div class="wrapper">
        <div class="box">
            <div class="box-header">Mall - mini</div>
            <div class="search-con">
                <input class="search-input" id="search-input" placeholder="请输入您想要搜索的商品！">
            </div>
            <div class="back" v-show="isShowBack" @click.prevent="jumpToTop">
                <i-avatar class="back-avatar" shape="square" size="large">
                    <i-icon type="packup" class="back-icon" color="#ffffff" size="32"/>
                </i-avatar>
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
                userInfo: {},
                scrollPos: '',
                isShowBack: false
            }
        },
        components: { Banner, Guide , Product },
        methods: {
            jumpToTop() {
                if (wx.pageScrollTo) {
                    wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 400
                    });
                } else {
                    wx.showModal({
                        title: '提示',
                        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                    })
                }
            }
        },
        // 获取滚动条当前位置
        onPageScroll(e) {
            this.isShowBack = e.scrollTop > 250;
            this.scrollPos = e.scrollTop;
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
        .back {
            position: fixed;
            bottom: .2rem;
            right: .2rem;
            z-index: 999;
            .back-icon {
                position: relative;
                top: -.05rem;
            }
        }
    }
</style>