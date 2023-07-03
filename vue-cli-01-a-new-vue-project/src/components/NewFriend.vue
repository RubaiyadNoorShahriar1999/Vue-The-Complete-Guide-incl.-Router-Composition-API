<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="name">Phone</label>
      <input type="tel" id="name" v-model="enteredPhone" />
    </div>
    <div>
      <label for="name">Email</label>
      <input type="email" id="name" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>
<script lang="js">
export default {
    emits: ["add-contact"],
    data(){
        return{
            enteredName: "",
            enteredPhone: "",
            enteredEmail: ""
        }
    },
    methods: {
        submitData(){
            this.$emit("add-contact",
                this.enteredName,
                this.enteredPhone,
                this.enteredEmail
            )
        },
    }
}
</script>
