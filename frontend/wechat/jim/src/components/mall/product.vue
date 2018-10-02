<template>
    <div class="wrapper">
        <div class="box">
            <div class="header-line"></div>
            <div class="header-title">
                <i-icon type="like_fill" size="28" color="#c60023" />
                <span>花样生活</span>
            </div>
            <div class="product-flow">
                <div class="product-column" v-for="(arr, fIndex) in waterflow" :key="fIndex">
                    <div class="item" v-for="(items, index) in imgUrl" :key="index">
                        <div class="item__content item__content--large" v-if="index === 0 && fIndex === 0">
                            <div class="item-img"><img src="http://jimqing.xin/img/miniprogram/img/index/bg.jpg" alt=""></div>
                            <div class="content">{{items.content}}</div>    
                        </div>
                        <div class="item__content item__content--medium" v-else-if="index === 0 && fIndex === 1">
                            <div class="item-img"><img src="http://jimqing.xin/img/miniprogram/img/index/bg.jpg" alt=""></div>
                            <div class="content">{{items.content}}</div>
                        </div>
                        <div class="item__content item__content--large" v-else-if="index%2">
                            <div class="item-img"><img src="http://jimqing.xin/img/miniprogram/img/index/bg.jpg" alt=""></div>
                            <div class="content">{{items.content}}</div>    
                        </div>
                        <div class="item__content item__content--medium" v-else-if="index%3">
                            <div class="item-img"><img src="http://jimqing.xin/img/miniprogram/img/index/bg.jpg" alt=""></div>
                            <div class="content">{{items.content}}</div>
                        </div>
                        <div class="item__content item__content--large" v-else>
                            <div class="item-img"><img src="http://jimqing.xin/img/miniprogram/img/index/bg.jpg" alt=""></div>
                            <div class="content">{{items.content}}</div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                waterflow : ['', ''],
                imgUrl: [
                    {
                        url:'http://jimqing.xin/img/miniprogram/img/index/bg.jpg',
                        content: '1'
                    },
                    {
                        url:'http://jimqing.xin/img/miniprogram/img/index/bg.jpg',
                        content: '2'
                    },
                    {
                        url:'http://jimqing.xin/img/miniprogram/img/index/bg.jpg',
                        content: '3'
                    }
                ]
            }
        },
        methods: {
        },
        // 上拉加载回调接口
        onReachBottom() {
            this.imgUrl.push({});
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

        .header-line {
            position: relative;
            width: 75%;
            margin: .4rem auto;
        }

        .header-line::after {
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 1rpx;
            background-image: linear-gradient(0deg, transparent 50%, #605697 50%);
        }

        .header-title {
            position: relative;
            top: -.28rem;
            display: inline-block;
            width: 2.8rem;
            background: #ffffff;

            span {
                margin-right: .14rem;
                position: relative;
                top: 5rpx;
            }
        }

        /* waterflow */
        .product-flow {
            display: flex;
            flex-direction: row;
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
            height: 3rem;
            font-size: 40rpx;
            background: #a9d2e6;
            box-sizing: border-box;
            color: #18314F;
            .item-img {
                background: no-repeat #eeeeee;
                background-size: cover;
                height: 78%;
                width: 85%;
                margin-top: .2rem;
                img {
                    height: 100%;
                    width: 100%;
                }
            }
            .content {
                width: 85%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .item__content:active {
            background: #d0ddec;
        }

        .item__content--medium {
            color: #ffffff;
            background: #a9d2e6;
            height: 3.75rem;
        }

        .item__content--medium:active {
            background: #ebecee;
        }

        .item__content--large {
            color: #384E77;
            background: #a9d2e6;
            height: 4.80rem;
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