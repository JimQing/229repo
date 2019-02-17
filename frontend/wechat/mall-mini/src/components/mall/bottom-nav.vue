<template>
    <div class="bar-bottom">
        <div class="item">
            <i-icon type="homepage_fill" class="item-icon" size="32" color="#80848f" @click="onRedirect('mall-user-center')" />
            <p>首页</p>
        </div>
        <div class="item" @click="onRedirect('mall-cart')">
            <i-icon type="label" class="item-icon" size="32" color="#80848f" />
            <p>购物车</p>
        </div>
        <div class="item" @click="onRedirect('mall-user-center')">
            <i-icon type="mine" class="item-icon" size="32" color="#80848f" />
            <p>用户中心</p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            onRedirect(path) {
                wx.navigateTo({
                    url: '/pages/' + path + '/main'
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.bar-bottom{
    display: flex;
    justify-content: center;
    align-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    width: 100%;
    background: #ffffff;
    border-top: 1rpx solid #eeeeee;
    font-size: .26rem;
    color: #333333;
    z-index: 20;
    .item{
        width: 33.33%;
    }
}
</style>
