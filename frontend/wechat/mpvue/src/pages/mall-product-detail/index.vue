<template>
    <div class="wrapper">
        <div class="box">
            <TopNav :keyword='content' :isShowInput="false"/>
            <!-- 内容  -->
            <div class="product-box">
                <Banner :bannerHeight="bannerHeight" :imgUrl="ImgUrl"></Banner>
                <div class="content">
                    <div class="product-name">{{productDetail.name}}</div>
                    <div class="product-price">
                        Price: 
                        <span class="price">￥{{productDetail.price}}</span>
                    </div>
                    <div class="product-store">
                        Store: 
                        <span class="store">{{productDetail.stock}}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="product-detail">
                        <span class="detail-title">商品详情: </span>
                        <div class="detail-box">
                            <p>{{productDetail.subtitle}}</p>
                            <div v-html="productDetail.detail" class="detail-message"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="back" v-show="isShowBack" @click.prevent="jumpToTop">
                <i-avatar class="back-avatar" shape="square" size="large">
                    <i-icon type="packup" class="back-icon" color="#ffffff" size="32"/>
                </i-avatar>
            </div>
            <div class="product-bottom">
                <div class="collect" @click="onCollect"><span>★</span></div>
                <div class="buy" @click="onBuy"><span>立即购买</span></div>
            </div>
            <i-button type="ghost" @click="handleText">这里是地板</i-button>
            <i-toast id="toast" />
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/mall/banner.vue';
    import TopNav from '@/components/mall/top-nav.vue';
    import _product from '@/services/product-service.js';
    import { $Toast } from '../../../static/iView/base/index';
    export default {
        data() {
            return {
                id: '',
                productDetail: {},
                ImgUrl: [],
                productName: '[测试学习用]Apple iPhone 7  (A1661) 128G 玫瑰金色 移动联通电信4G手机',
                content: '',
                isBottom: false,
                isShowBack: false,
                bannerHeight: '650rpx'
            };
        },
        // created钩子在query拿到之前，所以报undefined，所以在mounted里边拿到
        mounted() {
            this.content = this.$root.$mp.query.content || 'null';
            this.id = this.$root.$mp.query.id || 73;
            this.getProductDetail(this.id);
        },
        components: { Banner, TopNav },
        methods: {
            handleText () {
                $Toast({
                    content: '这里是地板'
                });
            },
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
            async getProductDetail(id) {
                const res = await _product.getProductDetail(id);

                this.productDetail = res.data;
                this.ImgUrl = this.productDetail.subImages.split(',').map(item => {
                    item = 'http://img.happymmall.com/' + item;
                    return item;
                });
            },
            onBuy() {
                $Toast({
                    content: '购买功能暂未开通！'
                });
            },
            onCollect() {
                $Toast({
                    content: '收藏功能暂未开通！'
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
        .product-box{
            margin-top: 1.32rem;
        }
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
            margin: .2rem auto;
            text-align: center;
            position: relative;
            overflow: hidden;
            .product-price, .product-store{
                height: .5rem;
                width: 95%;
                text-align: right;
                line-height: .5rem;
                margin: .15rem auto;
                .price {
                    font-size: .5rem;
                    color: #e7380d;
                }
                .store {
                    font-size: .35rem;
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
                    margin: .15rem auto;
                    .detail-message {
                        width: 100%!important;
                    }
                }
            }
        }
        .product-bottom {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1.2rem;
            width: 100%;
            background: #412d2d;
            z-index: 1000;
            .collect {
                display: table;
                font-size: .6rem;
                width: 25%;
                color: #38413d;
                height: 100%;
                border-right: 1px solid #c60023;
                background: #f6fa16;
            }
            .buy {
                display: table;
                font-size: .5rem;
                width: 75%;
                height: 100%;
                color: #ffffff;
                background: #c0314b;
            }
            span {
                display: table-cell;
                vertical-align: middle;
            }
        }
        .back {
            position: fixed;
            bottom: 1.3rem;
            right: .2rem;
            z-index: 999;
            .back-icon {
                position: relative;
                top: -.05rem;
            }
        }
    }
</style>