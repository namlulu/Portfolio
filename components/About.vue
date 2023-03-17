<template>
  <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/me.jpeg" />
      </div>
      <div class="quotes text-center mb-10" data-aos="fade-up">
        <q>
          만들고 싶고 해보고 싶은 것이 있습니다.
        </q>
        <br />
      </div>
      <div class="content" data-aos="fade-up">
        <p>
          Node.js 개발을 시작으로 현재 3년차 개발자인 <b>Namlulu</b>입니다.
          반도체 모니터링 시스템, 회계 세무 플랫폼을 더불어서, 현재는 GS
          Retail에서 다양한 프로젝트를 수행하고 있습니다. 웹, 앱, 서버 등 다양한
          분야에 관심이 있으며 최근에는 모바일 앱 개발에 빠져 있습니다.
        </p>
      </div>
      <div data-aos="fade-up">
        <Technologies />
      </div>
    </div>
  </v-container>
</template>

<script>
import Technologies from '@/components/Technologies'

export default {
  components: {
    Technologies
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: white;

  .content {
    padding: 0 3rem;
    p {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }

  .quotes {
    margin: 2rem auto 0;
    font-size: 2rem;
    max-width: 50rem;
  }

  .me-img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 2px solid rgb(54, 51, 51);
    object-fit: cover;
  }
}
@media screen and (max-width: 767px) {
  .content {
    padding: 0 !important;
  }
}
</style>
