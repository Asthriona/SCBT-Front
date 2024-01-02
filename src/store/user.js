import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
    state: () => ({
        userId: "",
        username: "",
        displayName: "",
        email: "",
        avatar: "",
        isStaff: false, 
        roles: ["user"],
        isLoggedIn: false,
    }),
    actions: {
        setUser(user) {
            this.userId = user.userId;
            this.username =  user.username;
            this.displayName = user.displayName;
            this.email = user.email;
            this.avatar = user.avatar;
            this.isStaff = user.isStaff;
            this.roles = user.roles;
            this.isLoggedIn = user.isLoggedIn;
        }
    }
})