<template>
    <div class="notices">
        <h2>공지사항</h2>
        <swiper ref="mySwiper" :options="swiperOptionNotice">
            <swiper-slide v-for="notice in notices" :key="notice.id">
                {{ notice.text }}
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Autoplay } from 'swiper/core';
SwiperCore.use([Autoplay]); // Autoplay 모듈 활성화

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            notices: [
                { id: 1, text: '크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내' },
                { id: 2, text: '[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트' },
                { id: 3, text: '스타벅스커피 코리아 애플리케이션 버전 업데이트 안내' },
                { id: 4, text: '[당첨자 발표] 뉴이어 전자영수증 이벤트' },
            ],
            swiperOptionNotice: {
                direction: 'vertical',
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                modules: [Autoplay]
            }
        };
    }
};
</script>