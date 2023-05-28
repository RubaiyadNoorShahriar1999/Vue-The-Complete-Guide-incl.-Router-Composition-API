// Basic Vue app
// const app = Vue.createApp({
//   data() {
//     return {
//       currentUserInput: "",
//       message: "Vue is great!",
//     };
//   },
//   methods: {
//     saveInput(event) {
//       this.currentUserInput = event.target.value;
//     },
//     setText() {
//       this.message = this.currentUserInput;
//     },
//   },
// });

// app.mount("#app");

// Vue's reactivity system under the hood
let message = "Hello!";
let longMessage = message + "World!";
console.log(longMessage);

message = "Hello!!!!";
console.log(longMessage);

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    // message is the property that is being set. target is the global object
    if (key === "message") {
      target.longMessage = value + "World!";
    }
    target.message = value;
  },
};

// Proxy takes 2 arguments . First argument data is the object that you want to monitor and second argument is the handler which will handle the dynamic changes to the object
const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!!";
console.log(proxy.longMessage);

// Template ref
const app2 = Vue.createApp({
  // this template syntax is not that important but good to know.
  template: `
    <p>{{ app2Message }}</p>`,
  data() {
    return {
      app2Message: "Using multiple Vue apps in one HTML file",
    };
  },
});

app2.mount("#app2");

// App3 using ref property of Vue
const app3 = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      // this.$refs.userInput refers to the element with ref="userText" in the template. $ref is a special property of Vue which has all the elements with ref property as key value pairs
      this.message = this.$refs.userText.value;
      // console.log(this.$refs.userText);

      // dir will return the input object with all the properties in the console
      // console.dir(this.$refs.userInput);
    },
  },

  // Vue lifecycle hooks

  // nothing will render on the screen before this hook
  beforeCreate() {
    console.log("beforeCreate()");
  },

  // nothing will render on the screen before this hook
  created() {
    console.log("created()");
  },

  // nothing will render on the screen before this hook
  beforeMount() {
    console.log("beforeMount()");
  },

  // it will be rendered in the screen in this hook
  mounted() {
    console.log("mounted()");
  },

  // nothing will be updated in this stage
  beforeUpdate() {
    console.log("beforeUpdate()");
  },

  // it will be rendered in the screen in this hook and the changes will be visible
  updated() {
    console.log("updated()");
  },

  // nothing will be really unmounted but on process of unmounting
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
});

app3.mount("#app3");

// unmounting the app3 after 3 seconds
// setTimeout(function () {
//   app3.unmount();
// }, 3000);
