import { mount } from '@vue/test-utils'
import ToDos from '@/views/ToDos'
import toDosCardList from '@/components/toDosCardList'
import toDosCreateForm from '@/components/toDosCreateForm'

describe('ToDos.vue testen', () => {
  it('sollte Titel der Seite zeigen', () => {
    // wenn
    const wrapper = mount(ToDos)

    // dann
    expect(wrapper.text()).toMatch('Willkommen bei den To-Dos Informationen zur Nutzung Auf Dieser Seite haben Sie eine Übersicht von den erstellten To-Dos. Sie werden je nach Aufgabentyp angezeigt und bringen einige Funktionen mit sich.')
  })

  it('sollte toDos card list komponente haben', () => {
    // wenn
    const wrapper = mount(ToDos)

    // dann
    const cardList = wrapper.findComponent(toDosCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('sollte toDos create form haben', () => {
    // wenn
    const wrapper = mount(ToDos)

    // dann
    const createForm = wrapper.findComponent(toDosCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
