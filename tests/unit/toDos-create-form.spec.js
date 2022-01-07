import { mount } from '@vue/test-utils'
import toDosCreateForm from '@/components/toDosCreateForm'

describe('toDosCreateForm.vue testen', () => {
  it('sollte formular nicht autonatisch zeigen', () => {
    // wenn
    const wrapper = mount(toDosCreateForm)

    // dann
    expect(wrapper.find('#toDos-create-offcanvas').classes()).not.toContain('show')
  })
})
