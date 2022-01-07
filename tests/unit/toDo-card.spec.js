import { mount } from '@vue/test-utils'
import toDoCard from '@/components/toDoCard'

describe('toDoCard.vue testen', () => {
  it('sollte namen der ToDo und datum rendern', () => {
    // wenn
    const wrapper = mount(toDoCard, {
      propsData: {
        toDo: {
          id: 1,
          nameToDo: 'Backen',
          datum: '28.01.2022',
          typeTask: 'DAILYTASK'
        }
      }
    })
    // dann
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Backen')
  })
})
