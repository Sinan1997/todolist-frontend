import { mount } from '@vue/test-utils'
import ToDos from '@/views/ToDos'
import toDosCardList from '@/components/toDosCardList'
import toDosCreateForm from '@/components/toDosCreateForm'

describe('ToDos.vue testen', () => {
  it('sollte Titel der Seite zeigen', () => {
    // wenn
    const wrapper = mount(ToDos)

    // dann
    expect(wrapper.text()).toMatch('Informationen zur Nutzung Auf Dieser Seite haben Sie eine Übersicht von den erstellten To-Dos. Sie werden je nach Aufgabentyp angezeigt und bringen einige Funktionen mit sich. Dazu gehört das erstellen einer To-Do mit dem Button unten rechts. Außerdem haben Sie die Möglichkeit einzelne To-Dos zu löschen oder abzuhaken. Falls Sie eine To-Do löschen, wird sie beim erneuten aktualisieren der Seite nicht mehr angezeigt. Falls Sie lernen müssen stellen wir auch einen Pomodoro Timer zur verfügung, den sehen Sie in der Navigations Leiste, um so produktiv wie möglich zu sein.')
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
