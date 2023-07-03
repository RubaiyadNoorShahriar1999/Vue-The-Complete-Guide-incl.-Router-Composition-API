<template>
  <section>
    <base-card>
      <!-- if we comment out the v-slot:header section we will able to see the functionalities of v-if="$slots.header" in BaseCard where the slot header is designed-->
      <template v-slot:header>
        <h2>Available Badges</h2>
      </template>
      <!-- a SHORTHAND OF V-SLOT IS # -->
      <template #default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>
