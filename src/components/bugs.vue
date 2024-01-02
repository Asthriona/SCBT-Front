<template>
  <v-container>
    <v-row>
      <v-card
      width="100%">
        <v-card-title> {{ bug.bugId }} - {{ bug.title }} </v-card-title>
        <v-card-text>
          <span class="text-truncate">
            {{ bug.description }}
          </span>
          <br />
          <div
            class="users mt-4"
            v-if="bug.author.userId == bug.assignedTo.userId"
          >
            By:
            <v-avatar size="32" class="ml-1 mr-1"
              ><v-img :src="bug.author.avatar"></v-img
            ></v-avatar>
            {{ bug.author.displayName }}
          </div>
          <div class="users" v-else>
            <span
              >Reported by:
              <v-avatar size="32" class="ml-1 mr-1"
                ><v-img :src="bug.author.avatar"></v-img
              ></v-avatar>
              {{ bug.author.displayName }}</span
            >
            <br />
            <span
              >Assigned To:
              <v-avatar size="32" class="ml-1 mr-1"
                ><v-img :src="bug.assignedTo.avatar"></v-img
              ></v-avatar>
              {{ bug.assignedTo.displayName }}</span
            >
            <br />
          </div>
        </v-card-text>
        <v-card-actions>
          <router-Link :to="`/project/${this.$route.params.projectId}/${bug.bugId}`" @click="console.log(`/project/${this.$route.params.projectId}/${bug.bugId}`)"><v-btn>Open</v-btn></router-Link>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "bug-comp",
  props: ["bug"],
};
</script>
