import { ref, type Component, type Ref, markRaw } from 'vue'

interface IModalManagerState {
  component: Component | null
  props: object
}

class ModalManager {
  private defaultState: IModalManagerState = {
    component: null,
    props: {}
  }

  state: Ref<IModalManagerState> = ref(this.defaultState)

  public open(payload: { component: Component; props?: object }) {
    const { component, props } = payload

    this.state.value = markRaw({
      component: component,
      props: props || {}
    })
  }

  public close() {
    this.state.value = this.defaultState
  }
}

export const modalManager = new ModalManager()
