<template>
    <div class="wrapper">
        <i-toast id="toast" />
        <div class="box">
            <div class="box-header">Mall - mini</div>
            <div class="search-con">
                <input v-model="content" class="search-input" id="search-input" placeholder="请输入您想要搜索的商品！" @confirm="onShow">
            </div>
            <div class="back" v-show="isShowBack" @click.prevent="jumpToTop">
                <i-avatar class="back-avatar" shape="square" size="large">
                    <i-icon type="packup" class="back-icon" color="#ffffff" size="32" />
                </i-avatar>
            </div>
            <Banner></Banner>
            <Guide></Guide>
            <Product :atBottom="isBottom" :productTitle="productTitle" :productInfo="product"></Product>
            <BottomNav></BottomNav>
            <i-button class="more-btn" type="ghost" @click="handleText">更多精彩...</i-button>
        </div>
        <div class="window" v-if="isShowWindow" @touchmove.stop="scrollStop">
            <p>注意：本小程序商城仅用于个人自学作品的演示！所有商品均为虚拟商品，且不会有真实交易产生！</p>
            <i-button class="more-btn" type="ghost" @click="closeWindow">了解并使用</i-button>
        </div>
        <div class="mask" v-if="isShowWindow" @touchmove.stop="scrollStop"></div>
        <!-- <div class="auth-page">
            <p>Mall 商城 - 欢迎您的使用</p>
            <button class="auth-btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">
                获取用户信息
            </button>
            <button class="auth-btn" open-type="openSetting">打开授权设置页</button>
        </div> -->
    </div>
</template>

<script>
    import Banner from '@/components/mall/banner.vue';
    import BottomNav from '@/components/mall/bottom-nav.vue';
    import Guide from '@/components/mall/guide.vue';
    import Product from '@/components/mall/product.vue';
    import _user from '@/services/user-service.js';
    import {
        $Toast
    } from '../../../static/iView/base/index';
    export default {
        data() {
            return {
                content: '',
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
        computed: {
            isShowWindow() {
                return this.$store.state.isShowWindow;
            }
        },
        components: {
            Banner,
            Guide,
            Product,
            BottomNav
        },
        methods: {
            getLoginInfo() {
                // 获取用户信息
                wx.login({
                    success: () => {
                        wx.getUserInfo({
                            success: res=> {
                                this.$store.commit('USER_INFO', Object.assign(res.userInfo, this.$store.state.userInfo));
                            }
                        })
                    }
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
            onShow() {
                wx.navigateTo({
                    url: '../mall-product/main?content=' + this.content
                })
            },
            closeWindow() {
                this.$store.commit('TIPS', false);
            },
            onGotUserInfo(e) {
                console.log('onGotUserInfo', e);
            },
            scrollStop() {}
        },
        // 获取滚动条当前位置
        onPageScroll(e) {
            this.isShowBack = e.scrollTop > 250;
            this.scrollPos = e.scrollTop;
        },
        // 上拉加载回调接口
        onReachBottom() {
            this.isBottom = !this.isBottom;
        },
        mounted() {
            this.getLoginInfo();
            // 后门
            _user.login({
                username: 'jimqing',
                password: '123456'
            }).then(res=> {
                if (res.status === 0) {
                    this.$store.commit('USER_INFO', Object.assign(res.data, this.$store.state.userInfo));
                    this.$store.commit('USER_STATES', true);
                }
            });
        }
    }

</script>

<style lang="less" scoped>
    .wrapper {
        background: ghostwhite;
        background-size: contain;
        width: 7.5rem;
        text-align: center;
    }

    .box {
        display: flex;
        flex-flow: column nowrap;
        width: 95%;
        margin: 0 auto;
        margin-top: 2rem;

        .box-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            padding: 55rpx 0 80rpx 25rpx;
            height: .68rem;
            background: #fcfcfc;
            font-size: .48rem;
            font-weight: 700;
            color: #c60023;
            text-align: left;
            text-decoration: none;
            border-bottom: 1px solid #edf2f7;
            z-index: 20;
        }

        .search-con {
            position: fixed;
            top: 1.39rem;
            width: 95%;
            z-index: 20;

            .search-input {
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

        .back {
            position: fixed;
            bottom: 1.3rem;
            right: .3rem;
            z-index: 999;

            .back-icon {
                position: relative;
                top: -.05rem;
            }
        }

        .more-btn {
            margin-bottom: 1rem;
        }
    }
    .window{
        position: absolute;
        top: 50%;
        left: 50%;
        color: #495060;
        font-weight: bold;
        background: white;
        width: 6rem;
        margin: .2rem auto;
        padding: .3rem .35rem;
        text-align: center;
        transform: translate(-50%, -50%);
        border: 1px solid #eeeeee;
        border-radius: .08rem;
        z-index: 51;
        p {
            margin-top: .15rem;
        }
    }
        
    .auth-page {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        text-align: center;
        background: #fcfcfc;
        z-index: 999;
        p {
            margin-top: 2rem;
            .auth-btn{
                width: 80%;
                margin: 0 auto;
                margin-top: 2rem;
            }
        }
    }

    .mask{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #412d2d;
        opacity: .3;
        z-index: 50;
    }

</style>
