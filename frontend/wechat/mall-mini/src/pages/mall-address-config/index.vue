<template>
    <div class="wrapper">
        <TopNav :isShowInput="false" :isShowBtn="true"/>
        <!-- 按钮框 -->
        <div class="btn-con">
            <span class="red-span">{{id ? '修改' : '新增'}}收货地址</span>
        </div>
        <i-panel class="panel-box">
            <input
                class="p-input"
                v-model="username"
                placeholder="请输入用户名"
                @blur="checkOutUser"
                autofocus
            />
        </i-panel>
        <div class="btn-bottom" @click="onRedirect('mall-address')">
            <span v-if="id" @click="onDelete">删除收货地址</span>
            <span v-else @click="onAdd">保存收货地址</span>
        </div>
        <i-toast id="toast"  @touchmove.stop="scrollStop" />
    </div>
</template>

<script>
import _user from '@/services/user-service.js';
import _address from '@/services/address-service.js';
import TopNav from '@/components/mall/top-nav.vue';
import BackBtn from '@/components/mall/to-top-btn.vue';
import _cart from '@/services/cart-service.js';
import { $Toast } from '../../../static/iView/base/index';
export default {
    name: 'address-config',
    data() {
        return {
            address: {}
        };
    },
    components: {
        TopNav,
        BackBtn
    },
    computed: {
        addressList() {
            return this.$store.state.addressList;
        },
        id() {
            return this.$root.$mp.query.id || '';
        }
    },
    methods: {
        init() {
            if (!this.id) return;
            console.log(this.addressList[id]);
            this.address = this.addressList[id];
        },
        onRedirect(path) {
            wx.navigateTo({
                url: '/pages/mall-address/main'
            });
        },
        onDelete() {

        },
        onAdd() {

        }
    },
    mounted() {
        this.init();
    }
};
</script>

<style lang='less' scoped>
.wrapper{
    width: 100%;
}
</style>