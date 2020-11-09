<template>
  <div>
    USERS!!
    <ul>
      <template v-for="(user, i) in users">
        <router-link
            tag="li"
            :to="user.link"
            :key="i"
        >
          {{ user.label }}
        </router-link>
      </template>
    </ul>
    <router-view></router-view>
    <button @click="$router.push({name: 'Main', query: {lang: 'en'}})">NAVIGATE TO HOME</button>
  </div>
</template>

<script>
export default {
  name: 'Users',

  data() {
    return {
      users: [
        {
          link: '/users/1',
          label: 'User 1'
        },
        {
          link: '/users/2',
          label: 'User 2'
        },
        {
          link: '/users/3',
          label: 'User 3'
        },
      ]
    }
  },

  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>
