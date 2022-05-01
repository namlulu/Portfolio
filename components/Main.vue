<template>
  <v-container fluid>
    <Home />
    <About />
    <Career />
    <Area />
    <Hireme />
    <Works />
    <Contact />
  </v-container>
</template>

<script>
import Home from '@/components/Home'
import About from '@/components/About'
import Career from '@/components/Career'
import Area from '@/components/Area'
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import Hireme from '@/components/Hireme'

export default {
  components: {
    Home,
    About,
    Career,
    Area,
    Hireme,
    Works,
    Contact
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #232020;
}
.portfolio-content {
  background-color: #232020;
  height: 100vh;
}
.wrapper {
  position: relative;
}
</style>
