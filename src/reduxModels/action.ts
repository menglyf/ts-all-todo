import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CHANGE_INPUT } from './actionType'

export interface IAddTodoAction {
  type: ADD_TODO
}
export interface IToggleTodoAction {
  id: string
  type: TOGGLE_TODO
}
export interface IDeleteTodoAction {
  id: string
  type: DELETE_TODO
}
export interface IChangeInpuAction {
  text: string
  type: CHANGE_INPUT
}

export type TodoAction = IAddTodoAction | IToggleTodoAction | IDeleteTodoAction | IChangeInpuAction

// Action Creators
export const addTodo = (): IAddTodoAction => ({
  type: ADD_TODO
})
export const toggleTodo = (id: IToggleTodoAction['id']): IToggleTodoAction => ({
  id,
  type: TOGGLE_TODO
})
export const deleteTodo = (id: IDeleteTodoAction['id']): IDeleteTodoAction => ({
  id,
  type: DELETE_TODO
})
export const changeInput = (text: IChangeInpuAction['text']): IChangeInpuAction => ({
  text,
  type: CHANGE_INPUT
})
