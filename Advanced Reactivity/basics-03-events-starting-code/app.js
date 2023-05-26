// use , to add more methods/properties

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },

  watch: {
    counter(value) {
      const that = this;
      if (value > 50) {
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },

    // name(value) {
    //   if (value == "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + "Shahriar";
    //   }
    // },
    // lastName(value) {
    //   if (value == "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },

  computed: {
    fullName() {
      console.log("Running again..");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    // Again this keyword is used to access the data of the Vue instance

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    setValue1(event) {
      this.name = event.target.value;
    },

    setValue2(event, secondName) {
      this.name = event.target.value + " " + secondName;
    },

    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
