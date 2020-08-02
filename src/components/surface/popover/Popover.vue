<template>
  <!-- todo styles -->
  <div class="popover-wrapper" :style="suggestionsWrapperStyle">
    <div class="popover" ref="suggestionsList" :style="suggestionsStyle">
      <slot />
    </div>
  </div>
</template>

<script>
const SUGGESTIONS_WINDOW_MARGIN = 28;

export default {
  name: "Popover",

  model: {
    prop: "show",
  },

  props: {
    anchorElement: Element,
    show: Boolean,
  },

  data() {
    return {
      suggestionsWrapperTop: null,
      suggestionsWrapperBottom: null,
      suggestionsWrapperLeft: null,

      suggestionsPosition: null,
      suggestionsBottom: null,
      suggestionsMinWidth: null,

      isListenerRegistered: false,
    };
  },

  mounted() {
    if (this.show) {
      this.onShowChanged();
    }
  },

  beforeDestroy() {
    if (this.show) {
      window.removeEventListener("click", this.hide);
    }
  },

  computed: {
    suggestionsWrapperStyle() {
      return {
        top: this.suggestionsWrapperTop,
        bottom: this.suggestionsWrapperBottom,
        left: this.suggestionsWrapperLeft,
        visibility: this.show ? "visible" : "hidden",
      };
    },

    suggestionsStyle() {
      return {
        position: this.suggestionsPosition,
        bottom: this.suggestionsBottom,
        minWidth: this.suggestionsMinWidth,
      };
    },
  },

  watch: {
    show() {
      this.onShowChanged();
    },
  },

  methods: {
    onShowChanged() {
      if (this.show) {
        this.updateSuggestionsPositioning();
        this.startListeningScroll();
        this.$nextTick(() => setTimeout(() => this.startListeningClick(), 250));
      } else {
        this.stopListeningScroll();
        this.stopListeningClick();
      }
    },

    hide(event) {
      if (
        !this.$refs.suggestionsList.contains(event.target) &&
        !this.anchorElement.contains(event.target)
      ) {
        this.$emit("input", false);
      }
    },

    startListeningClick() {
      window.addEventListener("click", this.hide);
    },

    stopListeningClick() {
      window.removeEventListener("click", this.hide);
    },

    startListeningScroll() {
      document.addEventListener("scroll", this.scrollListener, {
        capture: true,
        passive: true,
      });
    },

    stopListeningScroll() {
      document.removeEventListener("scroll", this.scrollListener);
    },

    scrollListener(event) {
      if (event.target !== this.$refs.suggestionsList) {
        this.updateSuggestionsPositioning();
      }
    },

    updateSuggestionsPositioning() {
      if (!this.anchorElement || !this.$refs.suggestionsList) return;

      const anchorRect = this.anchorElement.getBoundingClientRect();
      const anchorHeight = this.anchorElement.offsetHeight;

      if (window.innerHeight - anchorRect.y < 200) {
        this.suggestionsWrapperTop =
          Math.max(anchorRect.y - 30 * 14, SUGGESTIONS_WINDOW_MARGIN) + "px";
        this.suggestionsWrapperBottom =
          window.innerHeight - anchorRect.y + "px";

        this.suggestionsPosition = "absolute";
        this.suggestionsBottom = 0;
      } else {
        this.suggestionsWrapperTop = anchorRect.y + anchorHeight + "px";
        this.suggestionsWrapperBottom =
          Math.max(
            window.innerHeight - anchorRect.y - anchorHeight - 30 * 14,
            SUGGESTIONS_WINDOW_MARGIN
          ) + "px";

        this.suggestionsPosition = null;
        this.suggestionsBottom = null;
      }

      if (
        anchorRect.x + this.$refs.suggestionsList.offsetWidth >
        window.innerWidth
      ) {
        this.suggestionsWrapperLeft =
          anchorRect.x +
          this.anchorElement.offsetWidth -
          this.$refs.suggestionsList.offsetWidth +
          "px";
      } else {
        this.suggestionsWrapperLeft = anchorRect.x + "px";
      }

      this.suggestionsMinWidth = this.anchorElement.offsetWidth + "px";
    },
  },
};
</script>
