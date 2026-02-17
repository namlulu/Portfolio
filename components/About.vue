<template>
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/me.jpeg" />
      </div>
      <div class="quotes text-center mb-10" data-aos="fade-up">
        <q>
          개발을 넘어, 시스템 인프라까지 깊게 파고들어 서비스의 근본적인 효율을 개선하는 엔지니어입니다.
        </q>
        <br />
      </div>
      <div class="content" data-aos="fade-up">
        <p>
          Node.js 개발로 커리어를 시작해 현재 <b>{{ experienceYears }}차 개발자</b>로 활동 중인 <b>Namlulu</b>입니다.
          반도체 모니터링 시스템, 회계 세무 플랫폼을 거쳐 현재는 <b>GS리테일의 SRE</b>로서 클라우드 네이티브 인프라 최적화와 시스템 안정성을 책임지고 있습니다. 
          단순한 구현을 넘어 시스템 하부 구조를 탐구하며 근본적인 성능 병목을 해결하는 과정에 몰입하고 있습니다.
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
  },
  computed: {
    // 연차 자동 계산 로직
    experienceYears() {
      const startYear = 2022; // 여기에 실제 커리어 시작 연도를 적으세요.
      const currentYear = new Date().getFullYear();
      return currentYear - startYear + 1;
    }
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