<template>
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/me.jpeg" />
      </div>
      <div class="quotes text-center mb-10" data-aos="fade-up">
        <q>
          돌아간다고 좋은 시스템은 아닙니다.
        </q>
        <br />
      </div>
      <div class="content" data-aos="fade-up">
        <p>
          시스템이 놓일 자리를 설계하고, 그 선택을 비용과 안정성으로 증명하는
          <b>{{ experienceYears }}년 차 클라우드 아키텍트</b>
          <b>Namlulu</b>입니다. 애플리케이션 개발자로 시작해 반도체 모니터링
          시스템, 세무 플랫폼, GS리테일 이커머스 서비스를 만들었고, 이후
          GS리테일 클라우드인프라팀에서 AWS·GCP 하이브리드 인프라를 설계하고
          운영했습니다.
        </p>
        <p>
          현재는 코오롱인더스트리에서 VMware 온프레미스와 Azure를 아우르는
          하이브리드 환경의 워크로드 배치 원칙을 세우고, GPU 클러스터 기반의
          MLOps 플랫폼(KServe·MLflow)을 구축하고 있습니다. 개발자 출신으로서
          개발팀이 실제로 받아들이는 인프라 표준을 만드는 일을 가장 잘합니다.
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
      const startYear = 2022 // 여기에 실제 커리어 시작 연도를 적으세요.
      const currentYear = new Date().getFullYear()
      return currentYear - startYear + 1
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
