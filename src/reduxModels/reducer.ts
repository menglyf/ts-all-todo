import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CHANGE_INPUT } from './actionType'
import { TodoAction } from './action'
import { v4 as uuid } from 'uuid'
const todos = (
  state: IReduxModel = { inputValue: '', todos: [] },
  action: TodoAction
): IReduxModel => {
  switch (action.type) {
    case ADD_TODO: {
      return (state = {
        inputValue: '',
        todos: [
          ...state.todos,
          {
            id: uuid(),
            finished: false,
            text: state.inputValue
          }
        ]
      })
    }
    case TOGGLE_TODO:
      return (state = {
        ...state,
        todos: state.todos.map(
          (todo): ITodo => (todo.id === action.id ? { ...todo, finished: !todo.finished } : todo)
        )
      })
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case CHANGE_INPUT:
      state = { ...state, inputValue: action.text }
      return state
    default:
      return state
  }
}

export default todos
