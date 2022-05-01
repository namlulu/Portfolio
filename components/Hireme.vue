<template>
  <v-parallax
    height="200"
    :src="require('@/assets/images/hire-me.jpg')"
    alt="Contact me"
  >
    <div class="d-flex hire-me px-4 hire-me-content">
      <div class="content">
        <div class="help" data-aos="fade-right">
          같이 만들고 싶은 프로젝트가 있으면 연락주세요!
        </div>
        <v-btn
          class="ma-2"
          rounded
          large
          color="black"
          elevation="0"
          :href="mail"
          target="_blank"
          data-aos="fade-right"
        >
          이메일 보내기
        </v-btn>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      mail: Constants.CONTACT_ME
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-parallax__image {
  object-fit: cover;
}

::v-deep .v-parallax__content {
  background-color: #2320204a;
  padding: 0 !important;
}
.hire-me-content {
  margin-left: 20%;
}
.hire-me {
  .help {
    text-align: left;
    font-size: 1.5em;
    margin-bottom: 1rem;
  }
}

@media screen and (max-width: 767px) {
  .hire-me-content {
    margin-left: 0 !important;
  }
}
</style>
