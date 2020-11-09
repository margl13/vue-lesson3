import Vue from 'vue';

export const Users = {
  createUser: (user) => Vue.http.post(`users.json`, user),
  getUsers: () => Vue.http.get(`users.json`),
  deleteUser: (id) => Vue.http.delete(`users/${id}.json`),
  updateUser: (id, user) => Vue.http.put(`users/${id}.json`, user)
}
