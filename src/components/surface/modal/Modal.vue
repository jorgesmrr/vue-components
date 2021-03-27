<template>
    <div class="modal" :class="{ open: show }" @mousedown="handleClick($event)">
        <div class="modal-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",

    model: {
        prop: "show",
        event: "change"
    },

    props: {
        show: {
            type: Boolean | Object,
            default: false
        },

        allowDismiss: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        dismiss() {
            if (!this.allowDismiss) return;

            this.$emit("dismiss");
            this.$emit("change", null);
        },

        handleClick(event) {
            if (
                event.target.classList.contains("modal") ||
                event.target.classList.contains("modal-content")
            ) {
                event.preventDefault();
                event.stopPropagation();
                this.dismiss();
            }
        }
    }
};
</script>

<style scoped>
/** Modals **/

.modal {
    position: fixed;
    display: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    opacity: 0;
    transition: opacity 3s ease-in-out;
    background-color: #00000044;
}

.modal .modal-content {
    position: relative;
    margin: 2rem;
    height: calc(100vh - 4rem);
    opacity: 0;
}

@media (min-width: 576px) {
    .modal .modal-content {
        width: 400px;
        margin: 2rem auto 2rem;
    }
}

.modal.open {
    display: block;
    animation: showModal 0.4s forwards;
}

.modal.open .modal-content {
    animation: showModalBody 0.4s forwards;
}

@keyframes showModal {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes showModalBody {
    from {
        top: -300px;
        opacity: 0;
    }
    to {
        top: 0;
        opacity: 1;
    }
}
</style>
