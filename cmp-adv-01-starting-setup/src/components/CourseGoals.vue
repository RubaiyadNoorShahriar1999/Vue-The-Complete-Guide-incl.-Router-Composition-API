<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- Using the scoped slots -->
      <slot :item="goal" another-prop="Extra Element"></slot>
    </li>
  </ul>
</template>

<script lang="js">
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
