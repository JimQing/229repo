<template>
<div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586281912773&di=81d4a2afc99515c7c235041862851a28&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_0905%2F24_65548_2835f8eaa933ff6.jpg" alt="" srcset=""></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586281912773&di=81d4a2afc99515c7c235041862851a28&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_0905%2F24_65548_2835f8eaa933ff6.jpg" alt="" srcset=""></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586281912773&di=81d4a2afc99515c7c235041862851a28&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_0905%2F24_65548_2835f8eaa933ff6.jpg" alt="" srcset=""></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586281912773&di=81d4a2afc99515c7c235041862851a28&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_0905%2F24_65548_2835f8eaa933ff6.jpg" alt="" srcset=""></swiper-slide>
        <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586281912773&di=81d4a2afc99515c7c235041862851a28&imgtype=0&src=http%3A%2F%2Fbbs.jooyoo.net%2Fattachment%2FMon_0905%2F24_65548_2835f8eaa933ff6.jpg" alt="" srcset=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component(
    {
        Swiper,
        SwiperSlide
    }
)
export default class MySwiper extends Vue {
    name = 'swipe';
    swiperOptions = {
        pagination: {
            el: '.swiper-pagination'
        }
    };

    get swiper() {
        // eslint-disable-next-line
        return (this.$refs.mySwiper as any).$swiper;
    }
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style lang='less'>
.wrapper {
    width: 100%;
    height: 100%;
}
img {
    width: 100%;
    height: 100%;
}
</style>