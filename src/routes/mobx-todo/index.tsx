import React from 'react'
import { Provider } from 'mobx-react'
import TodoStore from '@/mobxModels/TodoListModel'
import TodoList from './TodoList'

const store = {
  todoModel: new TodoStore()
}

const index: React.FC = () => {
  return (
    <Provider>
      <TodoList {...store} />
    </Provider>
  )
}

export default index
