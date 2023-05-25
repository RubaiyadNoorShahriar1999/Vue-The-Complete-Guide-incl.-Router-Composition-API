const app = Vue.createApp({
  // This name should be exactly data and it should return an object no matter what
  data() {
    return {
      // In this data property courseGoal, we can add any property we want as key value pair. It could be a string, number, array, object, etc. Anything in this object can be used in the HTMl section that we are handling using Vue.
      courseGoal1: "Finish the course and learn Vue!",
      courseGoal2: "Master the course and learn Vue!",
      courseGoal3: "<h2>Master the course and learn Vue!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  //   methods() helps you to find functions when something happens in the HTML section/ a user event like click happens . For example, when a button is clicked, we can call a method to do something. Method takes an object and it will be full of methods that we want to execute when something happens in the HTML section.Every method should be a function and it should be callable.
  methods: {
    // this outputGoal() method is a function that we can call from the HTML section
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // In this context, this refers to the Vue instance that we are working with. So, this.courseGoal1 is the same as app.courseGoal1. It can access all the properties that's in the return object of the data() method and all the methods methods:{}.
        return this.courseGoal1;
        // return "Learn Vue!";
      } else if (randomNumber < 0.9) {
        return this.courseGoal2;
        // return "Master Vue!";
      } else {
        return this.courseGoal3;
      }
    },
  },
});

// By this we are telling Vue to connect with the section which has the ID user-goal and control it using vue properties
app.mount("#user-goal");
