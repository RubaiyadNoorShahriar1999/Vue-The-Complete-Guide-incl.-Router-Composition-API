<template>
  <div>
    <the-header></the-header>
    <!-- or we can use it as - <TheHeader /> -->
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals> -->
    <!-- Implementation of the scoped slots. slotProps is an object, so we need to access the :item (item is a self given property name) defined in the slot skeleton in CourseGoals, we need to use slotProps.item-->
    <!-- <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <!- can also access the object properties like this ->
        <p>{{ slotProps["another-prop"] }}</p>
      </template> 
    </course-goals>-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- keep alive will allow the contents written in the input field not be destroyed after tab change using the buttons. You can't even comment in keep-alive tag cause it expects only one child component-->

    <!-- Dynamic component. this <component> component is given by Vue itself and it requires a bind property is which will have the property defined in the data() as here it's selectedComponent. -->
    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<!-- If we use <script scoped> </script>  then it will be treated as a local style for that particular component-->
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
