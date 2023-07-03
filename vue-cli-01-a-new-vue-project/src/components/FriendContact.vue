<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script lang="js">
export default {
  data() {
    return {
      // here we have to use a single object that contains all the data that we want to use in the template. This is because the component is isolated from the app and it can't access the app data directly. So we have to pass the data to the component as an object. And this object is a part of the main app data object.
      detailsAreVisible: false,
      //   it's friend not friends of the main data
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "abc@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
