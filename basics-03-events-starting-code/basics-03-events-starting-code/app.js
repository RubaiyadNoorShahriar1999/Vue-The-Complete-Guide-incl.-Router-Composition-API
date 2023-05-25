// use , to add more methods/properties

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    // Again this keyword is used to access the data of the Vue instance

    add(num) {
      // this.counter++;
      this.counter = this.counter + num;
    },
    reduce(num) {
      // this.counter--;
      this.counter = this.counter - num;
    },

    // This event is a default parameter which will take the values of the event from the browser. We can use this to access the value of the input field. We don't need to send this event parameter from the HTML code.
    setValue1(event) {
      this.name = event.target.value;
    },

    setValue2(event, secondName) {
      this.name = event.target.value + " " + secondName;
    },

    submitForm() {
      alert("Submitted");
    },

    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
