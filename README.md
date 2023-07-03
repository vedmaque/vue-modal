# Vue (really) reusable modal

## Usage

```
import { modalManager } from '@/services/modal'

modalManager.open({
  component: ComponentToDisplay,
  props: {
    value: 13
  }
})
```
