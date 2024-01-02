<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-if="projects.length <= 0">
        <span>There is currently no active project.</span> <br />
        <v-btn to="/new-project" class="mt-4" v-if="userStore.isLoggedIn">Create a new one</v-btn>
      </v-col>
      <v-col cols="4"
      v-for="project in projects"
          :key="project._id">
        <v-card
          class="mx-auto"
          max-width="344"
        >
        <v-img height="100px" :src="project.assignee.avatar" cover></v-img>
          <v-card-title>{{ project.name }}</v-card-title>
          <v-card-text>
            {{ project.description }} <br />
            <span>Project Leader: <v-avatar size="32"><v-img :src="project.assignee.avatar"></v-img></v-avatar> {{ project.assignee.displayName }}</span>
          </v-card-text>
          <v-card-actions>
            <router-link :to="`project/${project.projectId}`">
              <v-btn>Open</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
</script>

<script>
import axios from 'axios';

export default {
  name: "project-comp",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      axios.get(`${import.meta.env.VITE_APP_API}/project/`)
      .then((res) => {
        this.projects = res.data.projects
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getProjects()
  }
};
</script>
