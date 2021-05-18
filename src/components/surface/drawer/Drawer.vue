<template>
    <div>
        <div
            v-if="open"
            class="drawer-overlay"
            @click="$emit('input', false)"
        />

        <div class="drawer" :class="{ open }" style="width: 250px">
            <h4 class="px-4">Menu</h4>

            <ul>
                <slot />
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Drawer",

    model: {
        prop: "open"
    },

    props: {
        open: Boolean
    }
};
</script>

<style scoped>
.drawer {
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 40;
    overflow: auto;
    transition: transform 150ms ease-in-out;
    max-width: 70vw;
    width: 16rem;
}

.drawer:not(.open) {
    transform: translateX(-100%);
}

.drawer-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.drawer-item {
    cursor: pointer;
}
</style>
