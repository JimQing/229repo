<template>
    <div class="wrapper">
        <div class="box">
            <div class="box-item" v-for="(item, index) in guider" :key="index" @click="JumpToProduct(item.content)">
                <div class="item-img">
                    <i-icon :type="item.icon" class="item-icon" size="32" color="#c60023"/>
                </div>
                <span>{{item.content}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                guider: [
                    {
                        icon: 'mobilephone',
                        content: '手机'
                    },
                    {
                        icon: 'camera',
                        content: '数码'
                    },
                    {
                        icon: 'computer',
                        content: '电脑'
                    },
                    {
                        icon: 'activity',
                        content: '办公配件'
                    },
                    {
                        icon: 'live',
                        content: '电视'
                    },
                    {
                        icon: 'integral',
                        content: '珠宝'
                    },
                    {
                        icon: 'document',
                        content: '图书'
                    },
                    {
                        icon: 'homepage',
                        content: '家装'
                    }
                ]
            }
        },
        methods: {
            JumpToProduct(content) {
                wx.navigateTo({
                    url: '../mall-product/main?content=' + content
                })
            }
        },
    }
</script>
<style lang="less" scoped>
    .wrapper {
        background: white;
        height: 3.3rem;
        width: 7.125rem;
        margin: 0 auto;
        text-align: center;
        position: relative;
        overflow: hidden;
    }
    .box{
        .box-item {
            display: inline-block;
            font-size: .35rem;
            padding-left: .05rem;
            .item-img {
                display:block;
                margin-top: .325rem;
                margin-bottom: .04rem;
                width: 1.5rem;
            }
            .item-icon {
            }
        }
    }
</style>
    