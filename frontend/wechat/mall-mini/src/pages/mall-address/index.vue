<template>
    <div class="wrapper">
        <TopNav :isShowInput="false" :isShowBtn="true"/>
        <!-- 按钮框 -->
        <div class="btn-con">
            <span class="red-span">选择地址</span>
        </div>
        <BackBtn v-if="isShowBack"/>
        <i-toast id="toast"  @touchmove.stop="scrollStop" />
    </div>
</template>

<script>
import TopNav from '@/components/mall/top-nav.vue';
import BackBtn from '@/components/mall/to-top-btn.vue';
import _cart from '@/services/cart-service.js';
import { $Toast } from '../../../static/iView/base/index';
export default {
    name: 'user_center',
    data() {
        return {
            addressList: []
        };
    },
    components: {
        TopNav,
        BackBtn
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    },
    // 获取滚动条当前位置
    onPageScroll(e) {
        setTimeout(() => {
            this.isShowBack = e.scrollTop > 250;
        }, 100);
    }
};
</script>

<style lang='less' scoped>
.wrapper{
    width: 100%;
    .btn-con{
        display: flex;
        width: 100%;
        margin-top: 1.2rem;
        background: #fcffff;
        justify-content: space-between;
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
}
</style>