<template>
    <div id="app">
        <div class="card">
            <div class="card-block">
                <TextField label="Test" />
                <button class="btn btn-primary">sdfasd</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "./components/form/text-field/TextField.vue";

export default Vue.extend({
    name: "App",

    props: {
        text: String
    },

    components: { TextField }
});
</script>
