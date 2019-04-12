<template>
  <div class="about">
  <h3>He has carried the burden of the nation for 21 years.</h3>
    <chart>
    <h3>Stats of his century throughtout his carrier.</h3>
    <p>dfbdsfb</p>
    <area-chart :data=data></area-chart>
    </chart>
  </div>
</template>

<script>
// @ is an alias to /src
import chart from '@/components/chart.vue'
import Vue from 'vue'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {adapter: Chart})

export default {
  name: 'home',
  components: {
    chart
  }
}
</script>
