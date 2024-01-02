<template>
  <v-container>
    <v-row>
      <div class="report" v-if="isLoading == false">
        <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-avatar class="mr-4 mb-2"><v-img :src="report.author.avatar"></v-img></v-avatar>
            <span class="text-h4 align-self-center"
              >{{ report.author.displayName }}
              <span class="code" v-if="report.author.isStaff == true"
                >Staff</span
              ></span
            >
          </v-card-title>
          <v-card-text class="ml-4">
            {{ report.description }} <br />
            File: <span> {{ userStore.isStaff ? report.file ? report.file : "**Hidden**" : "**Hidden**" || "Null" }}</span> <br />
            Line: <span> {{ userStore.isStaff ? report.Line ? report.Line : "**Hidden**" : "**Hidden**" || "Null" }}</span> <br />
            <hr class="mt-4" />
            <div class="ticket-status mt-4">
              Status: {{ report.status }} <br />
              Assigned to:
              <v-avatar
                ><v-img :src="report.assignedTo.avatar"></v-img
              ></v-avatar>
              <span>{{ report.assignedTo.displayName }}</span> <br />
              priority: <v-btn variant="outlined" :color="report.priority == 'High' || report.priority == 'critical' ? 'red' : 'blue' ">{{ report.priority }}</v-btn> <br />
              Created at: {{ new Date(report.createdAt).toLocaleString() }} <br />
              Last updated: {{ report.updatedAt == null ? "Never" : new Date(report.updatedAt).toLocaleString() }}
            </div>
          </v-card-text>
        </v-card>
        <!-- TODO: Add the comments: -->
      </v-col>
      <v-col cols="12">
        <v-card>
                <v-card-title>
                    Discutions:
                </v-card-title>
                <v-card-text>This feature is yet to be implemented.</v-card-text>
            </v-card>
      </v-col>
      </div>
      <v-col cols="12" v-else>
        <h1>Page is loading...</h1>
      </v-col>
    </v-row>
  </v-container>
  <pre style="display: none">{{ userStore }}</pre>
</template>

<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>

<script>
import axios from "axios";
export default {
  name: "bug-views",
  data() {
    return {
      report: {},
      isLoading: true,
    };
  },
  async beforeMount() {
    await this.getReport();
  },
  methods: {
    getReport() {
      axios
        .get(`${import.meta.env.VITE_APP_API}/bug/${this.$route.params.bugId}`)
        .then((res) => {
          this.report = res.data.report[0];
          this.isLoading = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
.code {
  background-color: rgb(var(--v-theme-code));
  color: rgb(var(--v-theme-on-code));
  border-radius: 4px;
  line-height: 1.8;
  font-size: 0.5em;
  font-weight: normal;
  padding: 0.2em 0.4em;
  margin-top: 0.5em !important;
}
</style>
