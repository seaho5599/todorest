<template>
  <div class="modal-wrap">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title"></slot>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span @click="onClose">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><slot name="body"></slot></p>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["close-modal"],
  setup(props, { emit }) {
    const onClose = () => {
      emit("close-modal", {});
    };

    return {
      onClose,
    };
  },
};
</script>

<style scoped>
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
}
</style>
