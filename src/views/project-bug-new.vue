<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-form>
                <v-text-field
                v-model="bug.title"
                label="Title"
                required></v-text-field>
                <v-text-field
                v-model="bug.description"
                label="Description"
                required></v-text-field>
                <v-text-field
                v-model="bug.file.path"
                label="File path"
                required></v-text-field>
                <v-text-field
                v-model="bug.file.line"
                label="Line number"
                required></v-text-field>
                <v-select
                v-model="bug.priority"
                :items="['Low', 'Normal', 'High', 'Critical']"></v-select>
                <v-select
                v-model="bug.assignedTo"
                :items=staffSelect></v-select>
                <v-btn @click="submitBug">LET'S GO!!!!!!!!</v-btn>
            </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "new-bug-view",
    data() {
        return { 
            staffSelect: [],
            bug: {
                title: "",
                description: "",
                file: {
                    path: "",
                    line: "",
                },
                priority: "",
                status: "new",
                assignedTo: "",
                tags: ["ur mom", "is so fat", "she can't", "fit the door"],
            },
        }
    },
    methods: {
        getStaffUsers() {
        axios.get(`${import.meta.env.VITE_APP_API}/project/staff`)
        .then((res) => {
            const users = res.data.staff;
            users.forEach(u => {
                this.staffSelect.push({
                    title: u.displayName,
                    value: u._id
                });
            });
        })
    },
    submitBug() {
        console.log(this.bug)
        axios.post(`${import.meta.env.VITE_APP_API}/bug/${this.$route.params.projectId}`, {
            bug: this.bug
        }, { withCredentials: true })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.error(err.response.data);
        })
    }
    },
    mounted() {
        this.getStaffUsers()
    }
}
</script>