import { observable } from 'mobx'
import { v4 as uuid } from 'uuid'

export class TodoModel {
  readonly id: string
  @observable public text: string
  @observable public finished: boolean

  constructor(text: string) {
    this.id = uuid()
    this.text = text
    this.finished = false
  }
}

export default TodoModel
