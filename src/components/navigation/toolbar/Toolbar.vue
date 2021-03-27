<template>
    <nav :class="{ busy: loading }">
        <div v-if="loading">Please wait...</div>
        <template v-else>
            <slot />
        </template>
    </nav>
</template>

<script>
export default {
    name: "Toolbar",

    props: {
        loading: Boolean
    }
};
</script>

<style scoped>
.toolbar {
    display: flex;
}
</style>
