<template lang="html">
  <transition name="fade">
    <div
      v-if="isOpen"
      class="modal-container flex pin fixed items-center z-20"
      @click.self="$emit('close')"
    >
        <div class="modal">
          <button class="button-close p-4 pin-t pin-r absolute" @click="$emit('close')">
            <img src="../assets/close-icon.svg" alt="Close Modal">
          </button>
          <slot/>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: Boolean
  }
}
</script>

<style lang="sass">
.button-close
  background: none

.modal-container
  background-color: rgba(#000, .5)

.fade-enter-active, .fade-leave-active
  transition: opacity .3s

  .modal
    transition: transform .4s

.fade-enter,
.fade-leave-to
  opacity: 0

  .modal
    transform: translateY(-50%)
</style>
