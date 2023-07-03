<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <hr />
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script lang="js">
export default {
  // First approach of defining props
  // use camel case notation for props. This props act like data properties but make sure don't name the props as the same name as the data properties. It will have conflicts
  // props:[
  //   "name",
  //   "phoneNumber",
  //   "emailAddress",
  //   "isFavorite"
  // ],

  // Second approach of defining props
  // We can use object notation for props. rather than just using name: String, we can pass an object where we can pass  properties like type, required, default etc.

  // Supported Prop Values String

  // Number
  // Boolean
  // Array
  // Object
  // Date
  // Function
  // Symbol
  // type can also be any constructor function (built-in ones like Date or custom ones). Types are always in sentence case

  props:{
    id:{
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    // this default in non required fields can  be functions too. We can use a validator property that will return true of false. it takes the "value" as a parameter and we can check if the value is valid or not. If it's valid then it will return true and if it's not valid then it will return false. If it returns false then it will throw an error in the console.
    isFavorite: {
        type: Boolean,
        required: false,
        default: false,
        // validator: function(value){
        //   return value === "0" || value === "1";
        // }
    }
  },
  emits: ["toggle-favorite", "delete"],
  // emits: {
  //   "toggle-favorite": function(id){
  //     if(id){
  //       return true;
  //     }
  //     else{
  //       console.warn("No id provided for toggle-favorite")
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      // here we have to use a single object that contains all the data that we want to use in the template. This is because the component is isolated from the app and it can't access the app data directly. So we have to pass the data to the component as an object. And this object is a part of the main app data object.
      detailsAreVisible: false,
      //   it's friend not friends of the main data
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "01234 5678 991",
      //   email: "abc@gmail.com",
      // },
      // friendIsFavorite is not required as we are getting the value from the props dynamic binding but we need this to toggle the favorite button
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // if(this.friendIsFavorite === "1"){
      //   this.friendIsFavorite = "0";
      // }
      // else{
      //   this.friendIsFavorite = "1";
      // }
      // this.friendIsFavorite = !this.friendIsFavorite;


      // Here this.id will be the first parameter received by the toggleFavorite method in App.vue and this.id will be passed to the toggle-favorite custom event
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend(){

    },
  },
};
</script>
