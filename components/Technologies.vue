<template>
  <div class="technologies">
    <div class="technologies-title d-flex justify-center align-center">
      애용하는 <img class="heart" src="@/assets/images/heart.png" />
      <transition name="fade" mode="out-in" tag="div">
        <div v-if="currentIndex === 0" :key="currentName">
          {{ currentName }} 기술
        </div>
        <div v-if="currentIndex === 1" :key="currentName">
          {{ currentName }} 기술
        </div>
        <div v-if="currentIndex === 2" :key="currentName">
          {{ currentName }} 기술
        </div>
        <div v-if="currentIndex === 3" :key="currentName">
          {{ currentName }} 기술
        </div>
      </transition>
    </div>
    <carousel
      :autoplay="true"
      :nav="false"
      :loop="true"
      :items="1"
      @translate="translate"
    >
      <div
        v-for="skill in skills"
        :key="skill.name"
        src="@/assets/images/me.jpg"
      >
        <v-card class="tech-card text--primary" flat>
          <v-row>
            <v-col v-for="item in skill.items" :key="item.name" cols="6" md="4">
              <div class="tech">
                <img
                  class="technologies-logo"
                  :src="require(`@/assets/images/logos/${item.image}`)"
                />
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </carousel>
  </div>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      skills: Constants.SKILLS,
      skillNames: null,
      currentIndex: 0,
      currentName: null
    }
  },
  watch: {
    currentIndex(newValue, oldValue) {
      this.currentName = this.skillNames[newValue]
    }
  },
  created() {
    this.skillNames = this.skills.map((skill) => skill.name)
    this.currentName = this.skillNames[this.currentIndex]
  },
  methods: {
    translate(event) {
      this.currentIndex = event.page.index
    }
  }
}
</script>

<style lang="scss" scoped>
.technologies {
  .technologies-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .technologies-logo {
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    margin: 2rem;
  }
  .tech-card {
    background: #131313;
    .tech {
      flex-direction: column;
      display: flex;
      align-items: center;
      background: #323030;
      border-radius: 4px;
    }
  }
  .heart {
    height: 3.8rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
