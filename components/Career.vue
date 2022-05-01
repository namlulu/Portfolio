<template>
  <v-container id="career" fluid class="career portfolio-container">
    <div>
      <div class="section-title">Career</div>
      <v-row no-gutters class="px-5">
        <v-col class="text-center px-4" cols="12" sm="12">
          <v-timeline>
            <v-timeline-item
              v-for="(career, index) in careers"
              :key="career.company"
              :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
              color="transparent"
              large
            >
              <template v-slot:icon>
                <v-avatar>
                  <img
                    class="career-logo"
                    :src="require(`@/assets/images/logos/${career.logo}`)"
                  />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>{{ career.duration }}</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="career-title text-h5">
                  {{ career.company }}
                </v-card-title>
                <v-card-text class="career-description">{{
                  career.description
                }}</v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      careers: Constants.CAREER
    }
  }
}
</script>

<style lang="scss" scoped>
.career {
  color: white;
  margin-top: 3rem;
  .career-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 0.2em 0;
  }
  .career-description {
    margin-bottom: 3.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #f5f5f7;
  }
  .career-logo {
    object-fit: contain;
  }
}
</style>
