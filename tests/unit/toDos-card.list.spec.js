import { mount } from '@vue/test-utils'
import toDoCardList from '@/components/toDosCardList'
import toDoCard from '@/components/toDoCard'

describe('toDoCardList.vue testen', () => {
  it('für jede toDo eine toDo karte rendern', () => {
    // wenn
    const wrapper = mount(toDoCardList, {
      propsData: {
        toDos: [
          {
            id: 1,
            nameToDo: 'Backen',
            datum: '28.01.2022',
            typeTask: 'DAILYTASK'
          },
          {
            id: 2,
            nameToDo: 'Aufräumen',
            datum: '29.01.2022',
            typeTask: 'DAILYTASK'
          }
        ]
      }
    })
    // dann
    const toDoCards = wrapper.findAllComponents(toDoCard)
    expect(toDoCards.length).toBe(2)
  })
})
