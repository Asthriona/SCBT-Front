<template>
  <router-view />
</template>

<script setup>
  import { useUserStore } from '@/store/user';
import { onMounted } from 'vue';
import axios from 'axios';
  const useStore = useUserStore();
  // App is mounted:
  onMounted(() => {
    // get user from back-end
    axios.get(`${import.meta.env.VITE_APP_API}/auth/whoami`, {
      withCredentials: true
    })
    .then((res) => {
      console.log(`[DEBUG]: User ${res.data.user.username} is logged in.`)
      const { userId, username, avatar, displayName, email, isStaff, roles } = res.data.user;
      // Set the fucking store
      useStore.setUser({
        userId,
        username,
        displayName,
        email,
        avatar,
        isStaff, 
        roles,
        isLoggedIn: true,
      })
    })
    .catch((err) => {
      console.log(`User is not logged in`);
      console.log(err)
    })
  })
</script>
