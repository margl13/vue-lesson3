import HelloWorld from "@/components/HelloWorld";
import Users from "@/components/Users";
import User from "@/components/User";
import EditUser from "@/components/EditUser";

export const routes = [
  {
    path: '',
    component: HelloWorld,
    name: 'Main'
  },
  {
    path: '/users',
    component: Users,
    name: 'Users',
    children: [
      {
        path: ':id',
        component: User,
        name: 'User'
      },
      {
        path: ':id/edit',
        component: EditUser,
        name: 'EditUser'
      }
    ]
  },
  {
    path: '*',
    component: HelloWorld
  }
]
