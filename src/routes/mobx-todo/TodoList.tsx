import React, { Component } from 'react'
import { trace } from 'mobx'
import { observer } from 'mobx-react'
import { Header, List } from '@/components/todo'
import { Tabs } from 'antd'
import TodoListModel from '@/mobxModels/TodoListModel'
import './index.less'
const { TabPane } = Tabs

interface Props {
  todoModel: TodoListModel
}
interface State {}
// @inject('todoModel')
@observer
export default class TodoList extends Component<Props, State> {
  state = {}

  render() {
    trace()
    const { todoModel } = this.props
    return (
      <div className='todo-container'>
        <Header
          inputValue={todoModel.inputValue}
          onChange={e => todoModel.changeInput(e.target.value)}
          onClick={e => todoModel.addTodo()}
        />
        <Tabs tabPosition='left'>
          <TabPane tab={`全部(${todoModel.allNum})`} key='all'>
            <List
              onDelete={todoModel.deleteTodo}
              onChangeStatus={todoModel.changeStatus}
              list={todoModel.todos}
            />
          </TabPane>
          <TabPane tab={`已完成(${todoModel.completedTodosNum})`} key='done'>
            <List
              onDelete={todoModel.deleteTodo}
              onChangeStatus={todoModel.changeStatus}
              list={todoModel.completedTodos}
            />
          </TabPane>
          <TabPane tab={`未完成(${todoModel.activeTodosNum})`} key='todo'>
            <List
              onDelete={todoModel.deleteTodo}
              onChangeStatus={todoModel.changeStatus}
              list={todoModel.activeTodos}
            />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}