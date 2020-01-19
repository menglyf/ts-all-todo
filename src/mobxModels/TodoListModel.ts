import { observable, computed, action } from 'mobx'
import { TodoModel } from './TodoModel'

export default class TodoStore {
  @observable public todos: Array<TodoModel> = []
  @observable public inputValue: string = ''
  @action
  changeInput(newValue: string) {
    this.inputValue = newValue
  }

  @computed
  get activeTodos() {
    return this.todos.filter(todo => !todo.finished)
  }

  @computed
  get completedTodos() {
    return this.todos.filter(todo => todo.finished)
  }
  @computed
  get allNum() {
    return this.todos.length
  }
  @computed
  get activeTodosNum() {
    return this.activeTodos.length
  }

  @computed
  get completedTodosNum() {
    return this.completedTodos.length
  }
  @action
  changeStatus = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished
      }
      return todo
    })
  }

  @action
  addTodo = (): void => {
    this.todos.push(new TodoModel(this.inputValue))
  }
  @action
  deleteTodo = (id: string): void => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}
