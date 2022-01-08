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
            datum: '2022-01-10',
            typeTask: 'DAILYTASK'
          },
          {
            id: 2,
            nameToDo: 'Aufräumen',
            datum: '2022-01-11',
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
