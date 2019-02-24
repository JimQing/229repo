<template>
    <div class="wrapper">
        <TopNav :isShowInput="false"/>
        <!-- 按钮框 -->
        <div class="btn-con">
            <span class="red-span">订单信息</span>
        </div>
        <div class="order-detail">
            <div class="content">
                <p>订单号: <span>{{orderNo}}</span></p>
                <p>收件人: <span>{{orderInfo.receiverName}}</span></p>
                <p>创建时间: <span>{{orderInfo.createTime}}</span></p>
                <p>订单状态: <span>{{orderInfo.statusDesc}}</span></p>
                <p>支付方式: <span>{{orderInfo.paymentTypeDesc}}</span></p>
            </div>
            <div class="order-box" v-if="orderList.length > 0">
                <div class="content">
                    <div class="product-box">
                        <div class="desc" v-for="(product, index) in orderList" :key="index">
                            <div class="img-box">
                                <img :src="imgHost + product.productImage" alt="">
                            </div>
                            <span>{{product.productName}}</span>
                        </div>
                        <div class="opera">
                            <span class="left-label">商品数量： {{orderList.length || 0}}</span>
                            <span class="right-label">总价：￥{{orderInfo.payment}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <i-button class="btn" type="ghost" @click="submit">去支付</i-button>
            <i-button class="btn" type="ghost" @click="cancel">取消订单</i-button>
        </div>
        <i-toast id="toast"  @touchmove.stop="scrollStop" />
    </div>
</template>

<script>
import _user from '@/services/user-service.js';
import _order from '@/services/order-service.js';
import _address from '@/services/address-service.js';
import { $Toast } from '../../../static/iView/base/index';
import TopNav from '@/components/mall/top-nav.vue';
export default {
    name: 'order',
    data() {
        return {
            orderList: [],
            orderInfo: {},
            addressList: [],
            orderNo: 1550998825364,
            imgHost: 'http://onlineshoppingmall.xin:8082/'
        };
    },
    components: {
        TopNav
    },
    methods: {
        init() {
            _order.getOrderDetail(this.orderNo).then(res=> {
                this.orderInfo = res.data;
                this.orderList = res.data.orderItemVoList;
            });
        },
        submit() {
            $Toast({
                content: '支付功能,暂未开通！'
            });
        },
        cancel() {
            _order.cancelOrder(this.orderNo).then(res=> {
                $Toast({
                    content: '取消成功'
                });
                // 跳转购物车
                wx.redirectTo({
                    url: '/pages/mall-cart/main'
                });
            });
        }
    },
    mounted() {
        this.orderNo = this.$root.$mp.query.orderNo;
        this.init();
        console.log('orderNo', this.orderNo);
    }
};
</script>

<style lang='less' scoped>
.wrapper{
    .btn-con{
        display: flex;
        width: 100%;
        margin-top: 1.2rem;
        background: #fcffff;
        justify-content: center;
        span {
            color: #333;
            font-size: .34rem;
            padding: .25rem .2rem;
        }
        .red-span{
            font-weight: 700;
            color: #c60023;
        }
    }
    .order-detail{
        padding-bottom: 0.3rem;
        background: #ffffff;
        .content{
            width: 100%;
            p{
                width: 90%;
                margin: 0 auto;
                margin-bottom: .1rem;
                font-size: .33rem;
                color: #b1acac;
                span{
                    width: 70%;
                    float: right;
                    color: #757575
                }
            }
            .btn {
                margin-bottom: .1rem;
            }
        }
        .order-box{
            margin-top: 0.3rem;
            .content{
                width: 100%;
                .product-box{
                    width: 95%;
                    margin: 0 auto;
                    margin-bottom: .2rem;
                    text-align: center;
                    background: #ffffff;
                    border: 1px solid #eeeeee;
                    border-radius: 0.08rem;
                    .desc{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 95%;
                        margin: .35rem auto;
                        letter-spacing: 1rpx;
                        padding-bottom: .35rem;
                        border-bottom: 1px solid #eeeeee;
                        .img-box{
                            height: 120rpx;
                            min-width: 120rpx;
                            margin: 0 .1rem;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        span:nth-of-type(1) {
                            font-size: .3rem;
                            text-align: left;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                        span:nth-of-type(2) {
                            width: 1.3rem;
                            margin-right: .2rem;
                            color: #b1acac;
                        }
                    }
                    .opera{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 93%;
                        margin: .25rem auto;
                        color: #b1acac;
                        font-size: .33rem;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>