<template>
    <div class="container">
        
        <div class="g-img1">
            <div class="music-box">
                <a type="primary" class="counter" @tap="listenerButtonPlay">播放</a>
                <a type="primary" class="counter" @tap="listenerButtonPause">暂停</a>
                <a type="primary" class="counter" @tap="listenerButtonSeek">设置播放进度</a>
                <a type="primary" class="counter" @tap="listenerButtonStop">停止播放</a>
                <a type="primary" class="counter" @tap="listenerButtonGetPlayState">获取播放状态</a>
            </div>
        </div>
        <div class="g-img2"></div>
        <div class="g-img3"></div>
    </div>
</template>

<script>
    export default {
        data: {
            // text:"这是一个页面"
        },
        onLoad(options) {
            // 页面初始化 options为页面跳转所带来的参数
            /**
             * 监听音乐播放
             */
            wx.onBackgroundAudioPlay(function () {
                console.log('onBackgroundAudioPlay')
            })

            /**
             * 监听音乐暂停
             */
            wx.onBackgroundAudioPause(function () {
                console.log('onBackgroundAudioPause')
            })

            /**
             * 监听音乐停止
             */
            wx.onBackgroundAudioStop(function () {
                console.log('onBackgroundAudioStop')
            })

            /**
             * 修改标题
             */
            wx.setNavigationBarTitle({
                title: 'Music',
                success: function (res) {
                    // success
                }
            })
        },
        methods: {
            //播放音乐
            listenerButtonPlay: function () {
                console.log('listenerButtonPlay');
                wx.playBackgroundAudio({
                    //播放地址
                    dataUrl: 'http://jimqing.xin/music/Despacito.mp3',
                    title: 'Despacito'
                })
            },
            /**
            * 播放状态
            */
            listenerButtonGetPlayState: function () {
                wx.getBackgroundAudioPlayerState({
                    success: function (res) {
                        console.log(res)
                        //duration 总时长
                        //currentPosition 当前播放位置
                        //status 播放状态
                        //downloadPercent 下载状况 100 即为100%
                        //dataUrl 当前播放音乐地址
                    }
                })
            },
            /**
            * 监听button暂停按钮
            */
            listenerButtonPause: function () {
                wx.pauseBackgroundAudio();
            },
            /**
            * 设置进度
            */
            listenerButtonSeek: function () {
                wx.seekBackgroundAudio({
                    position: 30
                })
            },
            /**
            *停止播放
            */
            listenerButtonStop: function () {
                wx.stopBackgroundAudio()
            }
        }
    }
</script>

<style lang="less" scoped>
    .g-word {
        height: 4rem;
    }

    .g-img1 {
        background-image: url('http://img.zcool.cn/community/01685e580a976ba84a0e282bac9ea1.jpg');
        width: 100%;
        height: 13.34rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        .music-box {
            position: relative;
            display: flex;
            justify-content: center;
            flex-flow: column nowrap;
            margin-top: 2rem;
            .counter {
                display: inline-block;
                margin: 10px auto;
                padding: 5px 10px;
                color: #ffffff;
                border: 1px solid #ffffff;
            }
        }
    }

    .g-img2 {
        background-image: url('http://img.zcool.cn/community/01cc0859ce199ba80120446348fa09.jpg');
        background-size: cover;
        width: 100%;
        height: 13.34rem;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
    }

    .g-img3 {
        background-image: url('http://img0.imgtn.bdimg.com/it/u=588996812,154798558&fm=26&gp=0.jpg');
        background-size: cover;
        width: 100%;
        height: 13.34rem;
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
    }

    
</style>