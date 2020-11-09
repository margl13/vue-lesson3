<template>
  <div id="app">
<!--    <div>-->
<!--      <h1>USEER FORM</h1>-->
<!--      <div>-->
<!--        <label>Mail</label>-->
<!--        <input type="text" v-model="user.mail">-->
<!--      </div>-->
<!--      <div>-->
<!--        <label>Password</label>-->
<!--        <input type="text" v-model="user.password">-->
<!--      </div>-->
<!--      <button @click="addUser">Add user</button>-->
<!--      <button @click="getUsers">GET USERS</button>-->

<!--      <ul>-->
<!--        <li v-for="user in users" :key="user.id">-->
<!--          {{user.mail}} - {{user.password}}-->
<!--          <button @click="removeUser(user.id)">remove</button>-->
<!--          <button @click="editUser(user.id, user)">edit</button>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->

<!--    <button @click="login">add token</button>-->
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/"
            active-class="active"
            exact
        >
          Main
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            active-class="active"
            to="/users"
        >
          Users
        </router-link>
      </li>
    </ul>
      <router-view></router-view>
  </div>
</template>

<script>

import {Api} from "@/components/api";

export default {
  name: 'App',
  components: {
  },

  data() {
    return {
      user: {
        mail: '',
        password: ''
      },
      users: []
    }
  },

  methods: {
    async addUser() {
      await Api.Users.createUser(this.user)
      // this.$http.post('user.json', this.user)
    },

    async getUsers() {
      const users = await Api.Users.getUsers();
      const arr = [];
      // Object.values(users.body).forEach(e => arr.push(e))
      Object.entries(users.body).forEach(([key, value]) => arr.push({...value, id: key}))
      this.users = arr;
    },

    async removeUser(id) {
      await Api.Users.deleteUser(id)
    },

    async editUser(id, user) {
      user.name = 'Bob'
      await Api.Users.updateUser(id, user)
    },

    login() {
      localStorage.setItem('token', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
    }
  },

  async beforeMount() {
    await this.getUsers()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
