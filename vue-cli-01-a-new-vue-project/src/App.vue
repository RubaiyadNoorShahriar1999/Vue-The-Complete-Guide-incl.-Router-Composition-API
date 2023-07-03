<template>
  <section>
    <div>
      <header><h1>My Friends</h1></header>
      <new-friend @add-contact="addContact"></new-friend>
      <ul>
        <!-- here for props we should use Kebab case notation -->
        <!-- We are using dynamic binding for accessing the value -->
        <!-- toggle-favorite is a custom emit event name that will be listened by the parent -->
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-address="friend.email"
          :isFavorite="friend.isFavorite"
          @toggle-favorite="toggleFavorite"
          @delete="deleteContact"
        ></friend-contact>
        <!-- As we used props here, we can omit the non-required fields. But if we remove a required field ,like name, it will throw a warning in the console-->
        <!-- <friend-contact
          name="Julie Jones"
          phone-number="233622 5464164 41464"
          email-address="efg@gmail.com"
          isFavorite="0"
        ></friend-contact> -->
      </ul>
    </div>
  </section>
</template>

<script>
// It says that this object here is the default export of this App.vue file
export default {
  data() {
    return {
      // This wasn't at first mandatory as we are getting the values using the props but for dynamic v-bind with props we need this to iterate and get the value in our custom component.
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "abc@gmail.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "01234 5678 991",
          email: "efg@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleFavorite(friendId) {
      // arrow function used here to get the friendId
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },

    addContact(name, phone, email) {
      // psudo unique ID
      // property name should be same as the name of the dummy object in the App data component
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
