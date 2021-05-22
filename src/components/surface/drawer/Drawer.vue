<template>
    <div class="drawer" :class="{ 'drawer--open': open }" :style="styles">
        <div
            v-if="open"
            class="drawer__overlay"
            @click="$emit('input', false)"
        />

        <div class="drawer__body" style="width: 250px">
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
        open: Boolean,
        width: { type: String, default: "16rem" },
        background: { type: String, default: "white" },
        shadow: { type: String, default: "none" },
        overlayOpacity: { type: Number, default: 0.5 },
        zIndex: { type: Number, default: 40 },
        animationDuration: { type: String, default: "150ms" },
        animationCurve: { type: String, default: "ease-in-out" }
    },

    computed: {
        styles() {
            return {
                "--drawer-width": this.width,
                "--drawer-background": this.background,
                "--drawer-shadow": this.shadow,
                "--drawer-overlay-opacity": this.overlayOpacity,
                "--drawer-z-index": this.zIndex,
                "--drawer-overlay-z-index": this.zIndex,
                "--drawer-animation-duration": this.animationDuration,
                "--drawer-animation-curve": this.animationCurve
            };
        }
    }
};
</script>

<style scoped>
.drawer__body {
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: var(--drawer-z-index);
    overflow: auto;
    max-width: 70vw;
    width: var(--drawer-width);
    height: 100vh;
    background: var(--drawer-background);
    box-shadow: var(--drawer-shadow);
    transform: translateX(-100%);
    transition: transform var(--drawer-animation-duration)
        var(--drawer-animation-curve);
}

.drawer--open .drawer__body {
    transform: translateX(0);
}

.drawer__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0;
    z-index: var(--drawer-overlay-z-index);
    pointer-events: none;
    transition: opacity var(--drawer-animation-duration)
        var(--drawer-animation-curve);
}

.drawer--open .drawer__overlay {
    pointer-events: auto;
    opacity: var(--drawer-overlay-opacity);
}
</style>
