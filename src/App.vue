<script setup lang="ts">
import { modalManager } from '@/services/modal'
import CModal from '@/components/CModal.vue'
import CContentComponent from '@/components/CContentComponent.vue'

function openModal() {
  modalManager.open({
    component: CContentComponent,
    props: {
      value: 13
    }
  })
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <button @click="openModal" class="modal-trigger">open modal</button>
  </main>

  <CModal />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.modal-trigger {
  color: #fff;
  border: none;
  padding: 8px;
  border-radius: 4px;
  background-color: #41b883;
}
</style>
