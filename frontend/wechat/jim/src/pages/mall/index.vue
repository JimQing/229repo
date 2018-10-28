<template>
    <div class="wrapper">
        <i-toast id="toast" />
        <div class="box">
            <div class="box-header">Mall - mini</div>
            <div class="search-con">
                <input v-model="content" class="search-input" id="search-input" placeholder="请输入您想要搜索的商品！"
                    @confirm="onShow">
            </div>
            <div class="back" v-show="isShowBack" @click.prevent="jumpToTop">
                <i-avatar class="back-avatar" shape="square" size="large">
                    <i-icon type="packup" class="back-icon" color="#ffffff" size="32"/>
                </i-avatar>
            </div>
            <Banner></Banner>
            <Guide></Guide>
            <Product :atBottom="isBottom" :productTitle="productTitle" :productInfo="product"></Product>
            <i-button type="ghost" @click="handleText">更多精彩...</i-button>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/mall/banner.vue';
    import Guide from '@/components/mall/guide.vue';
    import Product from '@/components/mall/product.vue';
    import { $Toast } from '../../../static/iView/base/index';
    export default {
        data() {
            return {
                content: '',
                userInfo: {},
                scrollPos: '',
                isBottom: false,
                isShowBack: false,
                productTitle: '花样生活',
                product: {
                    keyword: '手机',
                    orderBy: 'default',
                    pageNum: 1,
                    pageSize: 20
                }
            }
        },
        components: { Banner, Guide , Product },
        methods: {
            jumpToTop() {
                if (wx.pageScrollTo) {
                    wx.pageScrollTo({
                        scrollTop: 0
                    });
                    this.isShowBack = false;
                } else {
                    wx.showModal({
                        title: '提示',
                        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
                    })
                }
            },
            onShow() {
                console.log(this.content);
                wx.navigateTo({
                    url: '../mall-product/main?content=' + this.content
                })
            }
        },
        // 获取滚动条当前位置
        onPageScroll(e) {
            this.isShowBack = e.scrollTop > 250;
            this.scrollPos = e.scrollTop;
        },
        // 上拉加载回调接口
        onReachBottom() {
            this.isBottom = !this.isBottom;
        }
    }
</script>

<style lang="less" scoped>
    .wrapper {
        background: #f1f2f3;
        background-size: contain;
        width: 7.5rem;
        text-align: center;
    }
        .box-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 55rpx 0 0 25rpx;
            height: .68rem;
            background: #fcfcfc;
            font-size: .48rem;
            font-weight: 700;
            color: #c60023;
            text-align: left;
            text-decoration: none;
            border-bottom: 1px solid #edf2f7;
            z-index: 999;
        }

    .box {
        display: flex;
        flex-flow: column nowrap;
        width: 95%;
        margin: 0 auto;
        .search-input {
            width: 95%;
            margin: 0 auto;
            margin-top: 1.32rem;
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
            bottom: .5rem;
            right: .3rem;
            z-index: 999;
            .back-icon {
                position: relative;
                top: -.05rem;
            }
        }
    }
</style>