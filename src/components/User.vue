<template>
  <div>
    USER!!!!
    {{$route.params.id}}
<!--    <button @click="editUser">Edit user</button>-->
    <router-link
        tag="button"
        :to="{name: 'EditUser', params: {id: '2222222222'}, query: {lang: 'en'}}"
    >
      Edit User
    </router-link>
    <button @click="getUserId">Get id</button>
  </div>
</template>

<script>
export default {
  name: 'User',

  methods: {
    getUserId() {
      // const id = this.$route.params.id;

      console.log(this.$route.params.id);
    }
  }

  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>
