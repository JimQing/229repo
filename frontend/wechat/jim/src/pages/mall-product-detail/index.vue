<template>
    <div class="wrapper">
        <div class="box">
            <div class="return-btn" @click="toBack">
                <i-icon type="return" class="btn-icon" size="26"/>
            </div>
            <div class="home-btn" @click="toHome">
                <i-icon type="homepage_fill" class="btn-icon" size="26"/>
            </div>
            <div class="box-header">Mall - mini</div>
            <!-- 搜索框 -->
            <div class="search-con">
                <input class="search-input" id="search-input" :placeholder="content">
            </div>
            <!-- 内容  -->
            <div class="product-box">
                <Banner :bannerHeight="bannerHeight"></Banner>
                <div class="content">
                    <div class="product-name">{{productName}}</div>
                    <div class="product-price">
                        Price: 
                        <span>￥6999</span>
                    </div>
                    <div class="line"></div>
                    <div class="product-detail">
                        <span class="detail-title">商品详情: </span>
                        <div class="detail-box">
                        </div>
                    </div>
                </div>
            </div>
            <i-button type="ghost" @click="handleText">这里是地板</i-button>
            <i-toast id="toast" />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/mall/banner.vue';
    import { $Toast } from '../../../static/iView/base/index';
    export default {
        data() {
            return {
                productName: '[测试学习用]Apple iPhone 7  (A1661) 128G 玫瑰金色 移动联通电信4G手机',
                content: '',
                isBottom: false,
                bannerHeight: '500rpx'
            }
        },
        components: { Banner },
        methods: {
            handleText () {
                $Toast({
                    content: '这里是地板'
                });
            },
            toBack() {
                wx.navigateBack({
                    delta: 1, // 回退前 delta(默认为1) 页面
                });
            },
            toHome() {
                wx.reLaunch({
                    url: '../mall/main'
                });
            }
        },
        // 上拉加载回调接口
        onReachBottom() {
            this.isBottom = !this.isBottom;
        },
        // created钩子在query拿到之前，所以报undefined，所以在mounted里边拿到
        mounted() {
            this.content = this.$root.$mp.query.content || 'null';
        }
    }
</script>

<style lang="less" scoped>
    .wrapper{
        background: #eeeeee;
        background-size: contain;
        width: 100%;
        text-align: center;
    }

    .box {
        margin: 0 auto;
        display: flex;
        flex-flow: column nowrap;
        width: 95%;
        .return-btn {
            position: absolute;
            top: .55rem;
            left: .2rem;
            display: inline-block;
            width: .65rem;
            font-size: .48rem;
            font-weight: 700;
        }
        .home-btn {
            position: absolute;
            top: .55rem;
            left: 1rem;
            display: inline-block;
            width: .65rem;
            font-size: .48rem;
            font-weight: 700;
        }
        .box-header {
            background: #eeeeee;
            margin-top: .55rem;
            margin-bottom: .25rem;
            font-size: .48rem;
            font-weight: 700;
            color: #c60023;
            text-decoration: none;
        }
        .btn-icon {
            position: relative;
            top: -.02rem;
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
        .content {
            background: white;
            width: 7.125rem;
            margin: 0 auto;
            text-align: center;
            position: relative;
            overflow: hidden;
            .product-price {
                height: .5rem;
                width: 95%;
                text-align: right;
                line-height: .5rem;
                margin: .15rem auto;
                span {
                    font-size: .5rem;
                    color: #e7380d;
                }
            }
            .product-name {
                width: 95%;
                font-size: .4rem;
                text-align: left;
                margin: .15rem auto;
                color: #c60023;
                font-weight: bold;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
            }
            .line {
                position: relative;
                width: 95%;
                margin: 0 auto;
            }
            .line::after {
                content: " ";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 1rpx;
                background-image: linear-gradient(0deg, transparent 50%, #eeeeee 50%);
            }
            .product-detail {
                width: 95%;
                text-align: left;
                margin: .3rem auto;
                .detail-title {
                    font-size: .36rem;
                    color: #c60023;
                    font-weight: bold;
                }
                .detail-box {
                    /* 预留待删 */
                    height: 13rem;
                    margin: .15rem auto;
                    border: 1px solid #000000;
                }
            }
        }
    }
</style>