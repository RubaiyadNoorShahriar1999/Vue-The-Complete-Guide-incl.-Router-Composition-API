// This is the Declarative approach of building the app with Vue
// createApp takes a configuration object as an argument where we configure the vue app and this returns a Vue instance
Vue.createApp({
  // this data function is for the data that we want to use in our app and it returns an object that our vue app will manage and be aware of
  data() {
    return {
      // these are the pieces of data vue is aware of and can manage. These are like key value pair. Key is the goal and value is the entered value
      goals: [],
      enteredValue: "",
    };
  },
  // This method also holds and object. This methods should contain methods/functions that are callable from within the HTML Code
  methods: {
    addGoal() {
      // this refers to the object that vue is managing and it will push the entered value in the empty array and make the entered value empty for the next input
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
  // by .mount() we are telling vue to take control of the element with the id app
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
