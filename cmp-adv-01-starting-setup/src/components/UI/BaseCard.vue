<template>
  <div>
    <!-- here as we are using the $slots and getting the info of the header where we are using this slots, if there is no such header available in that template/ the value of $slots.header is falsy, after rendering there won't be any unnecessary header component. It will be vanished after rendering ( as such in BadgeList) -->
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="js">

export default {
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
