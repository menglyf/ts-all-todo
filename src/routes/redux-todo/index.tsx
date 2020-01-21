import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoReducer from '@/reduxModels/reducer'
import TodoList from './TodoList'

const store = createStore(todoReducer)

const index: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}

export default index
