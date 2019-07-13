<template>
    <div class="map_container">
        <div v-if="!isShowMapModal" v-show="!isShowMapModal" class="header"></div>
        <div v-if="!isShowMapModal" v-show="!isShowMapModal">
            <map-route :route-info="routeInfo"></map-route>
        </div>
        <i-modal title="腾讯地图" :visible="isShowMapModal" @ok="showMap" @cancel="handleCance">
            <i-panel title="Tencent-Map">
                <input class="model-input" v-model="startPos" placeholder="请输入起点,不输入以当前位置为准" />
                <input class="model-input" v-model="endPos" placeholder="请输入目的地" />
            </i-panel>
        </i-modal>
        <i-toast id="toast" />
    </div>
</template>

<script>
import { $Toast } from '../../../static/iView/base/index';
import _Map from '@/services/map-service.js';
export default {
    data() {
        return {
            routeInfo: {},
            localPos: '',
            localInfo: {},
            isShowMapModal: true,
            startPos: '',
            startPosInfo: {},
            endPos: '',
            endPosInfo: {}
        };
    },
    mounted() {
        this.init();
        if (!this.isShowMapModal) {
            this.clear();
        }
    },
    methods: {
        // 初始化及鉴权
        init() {
            wx.getSetting({
                success: (res) => {
                    // console.log(JSON.stringify(res))
                    // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
                    // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
                    // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
                    if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
                        wx.showModal({
                            title: '请求授权当前位置',
                            content: '需要获取您的地理位置，请确认授权',
                            success: function (res) {
                            if (res.cancel) {
                                wx.showToast({
                                title: '拒绝授权',
                                icon: 'none',
                                duration: 1000
                                })
                            } else if (res.confirm) {
                                wx.openSetting({
                                success: function (dataAu) {
                                    if (dataAu.authSetting["scope.userLocation"] == true) {
                                    wx.showToast({
                                        title: '授权成功',
                                        icon: 'success',
                                        duration: 1000
                                    })
                                    //再次授权，调用wx.getLocation的API
                                    this.getLocation();
                                    } else {
                                    wx.showToast({
                                        title: '授权失败',
                                        icon: 'none',
                                        duration: 1000
                                    })
                                    }
                                }
                                })
                            }
                            }
                        })
                    } else if (res.authSetting['scope.userLocation'] == undefined) {
                    //调用wx.getLocation的API
                        this.getLocation();
                    }
                    else {
                    //调用wx.getLocation的API
                        this.getLocation();
                    }
                }
            });
        },
        async atuoGetLocation(address, flag) {
            const res = await this.getSuggestion(address);

            if (res.data && res.data.length > 2) {
                if (flag === 'start') {
                    this.routeInfo.startName = address + `(${res.data[0].address})`;
                } else if (flag === 'end') {
                    this.routeInfo.endName = address + `(${res.data[0].address})`;
                }
            } else if (res.data.length === 0) {
                return ;
            }
            return _Map.getMapLatOrLng({
                address: res.data[0].address || '广东省深圳市南山区塘兴路133号'
            }).catch(err=> {
                $Toast({
                    content: err
                });
                console.log(err);
            });
            // console.log('目标位置的lng跟lat为:');
            // console.log(res.result.location);
        },
        // 获取本地地位位置（须授权）
        getLocation() {
            const _this = this;

            // getLocation拿参数请在complete回调中拿
            wx.getLocation({
                type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
                fail: function(err) {
                    // fail
                    console.log(err);
                    $Toast({
                        content: err
                    });
                },
                complete(res) {
                    _this.localPos = res;
                    const localStr = res.latitude + ',' + res.longitude;

                    // _this.localPos = res.latitude + ',' + res.longitude;
                    _Map.reverseLocal(localStr).then(res=> {
                        console.log('获取当前位置信息（省份城市）');
                        _this.localInfo = {
                            province: res.result.address_component.province,
                            city: res.result.address_component.city,
                            street: res.result.address_component.street
                        };
                        // 省：res.result.address_component.province 
                        // 市 res.result_component.city 
                        // 街道 res.result_component.street
                    });
                }
            })
        },
        async showMap() {
            if (!!!this.endPos) {
                $Toast({
                    content: '请输入目的地。'
                });
                return;
            }
            if (this.startPos === '' || this.startPos === 'currentLocation' || this.startPos === '我的位置'){
                this.startPos = 'currentLocation';
                const pos = await this.atuoGetLocation(this.endPos, 'end');
                if (!pos) {
                    $Toast({
                        content: '目的地信息获取失败。'
                    });
                    return ;
                }
                this.endPosInfo = pos.result.location;
                this.routeInfo = {
                    ...this.routeInfo,
                    startName: this.startPos,
                    endLat: this.endPosInfo.lat,
                    endLng : this.endPosInfo.lng,
                    mode: 'car'
                }
            } else {
                const pos = await this.atuoGetLocation(this.startPos, 'start');
                const ePos = await this.atuoGetLocation(this.endPos, 'end');
                if (!pos || !ePos) {
                    $Toast({
                        content: '位置信息获取失败。'
                    });
                    return ;
                }
                this.startPosInfo = pos.result.location;
                this.endPosInfo = ePos.result.location;
                this.routeInfo = {
                    ...this.routeInfo,
                    startLat: this.startPosInfo.lat,    //起点纬度 选填
                    startLng: this.startPosInfo.lng,    //起点经度 选填
                    endLat: this.endPosInfo.lat,
                    endLng : this.endPosInfo.lng,
                    mode: 'car'
                };
            }
            this.isShowMapModal = false;
        },
        handleCance() {
            wx.redirectTo({
                url: '/pages/index/main'
            });
        },
        getSuggestion(keyword) {
            return _Map.getSuggestion({
                keyword: keyword,
                region: this.localInfo.city
            }).catch(err=> {
                console.log(err);
            });
        },
        clear() {
            this.isShowMapModal = true;
            this.startPos = '';
            this.endPos = '';
        }
    }
}
</script>

<style lang="less" scoped>
.map_container{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ghostwhite;
    .header{
        height: .41rem;
        background: #3C69EF;
        text-align: center;
        span{
            line-height:4;
            font-size: 20px;
            color: #FFFFFF;
        }
    }
    .model-input{
        width: 85%;
        font-size: 15px;
        margin: 10px auto;
        border: 1px solid ghostwhite;
        padding: .07rem;
    }
}
</style>