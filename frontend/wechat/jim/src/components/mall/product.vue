<template>
    <div class="wrapper">
        <div class="box">
            <HTitle :headerText="productTitle"></HTitle>
            <div class="product-flow">
                <div class="product-column" v-for="(arr, fIndex) in waterflow" :key="fIndex">
                    <div class="item" v-for="(items, index) in imgUrl" :key="index">
                        <div class="item__content item__content--large" v-if="index === 0 && fIndex === 0">
                            <div class="item-img"><img :src="imageHost" alt=""></div>
                            <div class="price-con">
                                <span class="price">￥{{items.price}}</span>
                            </div>
                            <div class="content">
                                {{items.name}}
                            </div>
                        </div>
                        <div class="item__content item__content--medium" v-else-if="index === 0 && fIndex === 1">
                            <div class="item-img"><img :src="imageHost" alt=""></div>
                            <div class="price-con">
                                <span class="price">￥{{items.price}}</span>
                            </div>
                            <div class="content">
                                {{items.name}}
                            </div>
                        </div>
                        <div class="item__content item__content--large" v-else-if="index%2">
                            <div class="item-img"><img :src="imageHost" alt=""></div>
                            <div class="price-con">
                                <span class="price">￥{{items.price}}</span>
                            </div>
                            <div class="content">
                                {{items.name}}
                            </div>
                        </div>
                        <div class="item__content item__content--medium" v-else-if="index%3">
                            <div class="item-img"><img :src="imageHost" alt=""></div>
                            <div class="price-con">
                                <span class="price">￥{{items.price}}</span>
                            </div>
                            <div class="content">
                                {{items.name}}
                            </div>
                        </div>
                        <div class="item__content item__content--large" v-else>
                            <div class="item-img"><img :src="imageHost" alt=""></div>
                            <div class="price-con">
                                <span class="price">￥{{items.price}}</span>
                            </div>
                            <div class="content">
                                {{items.name}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HTitle from './header';
    const imageHost = ''; // http://onlineshoppingmall.xin:8082/
    export default {
        data() {
            return {
                waterflow : ['', ''],
                imgUrl: [
                    {
                        mainImage: 'http://jimqing.xin/img/miniprogram/img/index/bg.jpg',
                        price: '6999',
                        name: '[测试学习用]Apple iPhone 7  (A1661) 128G' +
                            '玫瑰金色 移动联通电信4G手机'
                    },
                    {
                        mainImage: 'http://jimqing.xin/img/miniprogram/img/index/bg.jpg',
                        price: '6999',
                        name: '[测试学习用]Apple iPhone 7  (A1661) 128G' +
                            '玫瑰金色 移动联通电信4G手机'
                    }
                ],
                productTitle: '默认商品列表'
            }
        },
        props: ['atBottom', 'productTitle'],
        components: { HTitle },
        methods: {
        },
        watch: {
            // 到底部时触发添加商品item
            atBottom() {
                this.imgUrl.push({});
            }
        }
    }
</script>
<style lang="less" scoped>
    .wrapper {
        background: white;
        width: 7.125rem;
        margin: .2rem auto;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .box {
        padding-top: .1rem;

        /* waterflow */
        .product-flow {
            display: flex;
            flex-direction: row;
            margin-top: -.2rem;
            width: 7.125rem;
        }

        .product-column {
            display: flex;
            flex-flow: column wrap;
            width: 3.625rem;
        }

        .item {
            box-sizing: border-box;
            padding: 7rpx;
            counter-increment: item-counter;
        }

        .item__content {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            font-size: 40rpx;
            background: #ffffff;
            border: 1px solid #ebecee;
            box-sizing: border-box;
            color: #18314F;
            .item-img {
                background: no-repeat #eeeeee;
                background-size: cover;
                height: 75%;
                width: 100%;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
            .price-con {
                height: 5%;
                width: 95%;
                margin-top: .15rem;
                text-align: left;
                line-height: .36rem;
                span {
                    font-size: .36rem;
                    color: #e7380d;
                }
            }
            .content {
                width: 95%;
                height: 17%;
                color: #666;
                text-align: left;
                font-size: 22rpx;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                text-decoration: none;
            }
        }

        .item__content:active {
            background: #d0ddec;
        }

        .item__content--medium {
            height: 5.35rem;
            .item-img {
                height: 73%;
            }
            .content {
                position: relative;
                top: .1rem;
            }
        }

        .item__content--medium:active {
            background: #ebecee;
        }

        .item__content--large {
            height: 5.80rem;
            .content {
                position: relative;
                top: .1rem;
            }
        }

        .item__content--large:active {
            background: #ebecee;
        }
    }
</style>