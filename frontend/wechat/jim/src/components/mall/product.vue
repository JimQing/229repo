<template>
    <div class="wrapper">
        <div class="box">
            <div class="header-line"></div>
            <div class="header-title">
                <i-icon type="like_fill" size="28" color="#c60023" />
                <span>花样生活</span>
            </div>
            <div class="product-flow">
                <div class="product-column">
                        <div class="item">
                            <div class="item__content--large">
                            </div>
                        </div>
                        <div class="item">
                            <div class="item__content--medium">
                            </div>
                        </div>
                </div>
                <div class="product-column">
                    <div class="item">
                        <div class="item__content--medium">
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__content--large">
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
                imgUrl: [
                    '', '', '', '', '', '', '', ''
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
        }

        /* @media only screen and (min-width: 750rpx) {
            .product-flow {
                flex-direction: row;
            }
        } */

        .product-column {
            display: flex;
            flex-flow: column wrap;
            width: 100%;
        }

        /* @media only screen and (min-width: 750rpx) {
            .product-column {
                width: calc(100%/5);
            }
        } */

        .item {
            box-sizing: border-box;
            padding: 10rpx;
            counter-increment: item-counter;
        }

        .item__content {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 220rpx;
            font-size: 40rpx;
            color: #070319;
            background: currentColor;
            box-sizing: border-box;
            color: #18314F;
        }

        .item__content:hover {
            background: #22446e;
        }

        /* .item__content:before {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 13rpx;
            width: 2rem;
            height: 2rem;
            line-height: 2em;
            text-align: center;
            font-weight: bold;
            background-color: #8aafdc;
            content: counter(item-counter);
        } */

        /* .item__content:after {
            color: #010003;
            content: 'ಠ‿ಠ';
        } */

        .item__content--medium {
            color: #ffffff;
            background: #bad46a;
            height: 3.75rem;
        }

        .item__content--medium:active {
            background: #ebecee;
        }

        .item__content--medium:after {
            content: '◔ᴗ◔';
            position: relative;
            top: 1.65rem;
        }

        .item__content--large {
            color: #384E77;
            background: #9da583;
            height: 4.80rem;
        }

        .item__content--large:active {
            background: #ebecee;
        }

        .item__content--large:after {
            content: 'ಠ_๏';
            position: relative;
            top: 1.65rem;
        }
    }
</style>