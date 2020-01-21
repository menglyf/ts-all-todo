interface ITodo {
  finished: boolean
  text: string
  id: string
}
interface IMobxTodo extends ITodo {
  changeStatus(id: ITodo['id']): void
}

interface IMobxTodoList {
  list: IMobxTodo[]
  inputText: string
  onInputChange(e: ChangeEvent<HTMLInputElement>): void
  addButtonClick(): void
  deleteItem(id: ITodo['id']): void
}

interface IReduxModel {
  inputValue: string
  todos: ITodo[]
}
