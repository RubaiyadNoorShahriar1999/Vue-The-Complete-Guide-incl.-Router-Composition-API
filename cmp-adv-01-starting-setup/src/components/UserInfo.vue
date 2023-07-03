<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default
        ><p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<!-- This scoped style is only accessible in this component. Not in  other components where we are sending the contents of this userInfo component.-->
<!-- <style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> -->
