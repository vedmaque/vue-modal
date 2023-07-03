<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { modalManager } from '@/services/modal'

const componentName = computed(() => modalManager.state.value.component)
const componentProps = computed(() => modalManager.state.value.props)

function close() {
  modalManager.close()
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div class="modal-wrapper" v-if="componentName">
      <Transition name="modal-fade">
        <div class="modal-overlay"></div>
      </Transition>
      <Transition name="modal-fade">
        <div class="modal-window">
          <div class="modal-header">
            <h2>Modal title</h2>
            <button class="modal-close" @click="close">x</button>
          </div>
          <div class="modal-content">
            <component :is="componentName" v-bind="componentProps" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style lang="scss">
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
}

.modal-overlay {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1010;
}

.modal-window {
  position: relative;
  min-width: 288px;
  z-index: 1020;
  background-color: #fff;
  box-shadow: 0 0 10px #424242;
  border-radius: 8px;
}

.modal-header {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #aaaaaa;

  h2 {
    margin: 0 8px 0 0;
  }
}

.modal-close {
  border: 1px solid #aaaaaa;
  border-radius: 16px;
  width: 32px;
  height: 32px;
  background-color: #fff;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #0000002a;
  }
}

.modal-content {
  padding: 8px;
}

/* modal-fade */
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.modal-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1) !important;
}
/* ---- */
</style>
