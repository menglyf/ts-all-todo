import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, List } from '@/components/todo'
import { Tabs } from 'antd'
import { addTodo, toggleTodo, deleteTodo, changeInput } from '@/reduxModels/action'
import './index.less'
const { TabPane } = Tabs

interface IReduxHandle extends IReduxModel {
  addTodo(): void
  toggleTodo(id: string): void
  deleteTodo(id: string): void
  changeInput(text: string): void
}

class TodoList extends Component<IReduxHandle, {}> {
  state = {}

  render() {
    console.log(this.props)
    const { todos, inputValue, addTodo, toggleTodo, deleteTodo, changeInput } = this.props
    let doneList = todos.filter(item => item.finished)
    let todoList = todos.filter(item => !item.finished)
    console.log(`inputValue========${inputValue}`)
    return (
      <div className='todo-container'>
        <Header
          inputValue={inputValue}
          onChange={e => changeInput(e.target.value)}
          onAdd={addTodo}
        />
        <Tabs tabPosition='left'>
          <TabPane tab={`全部(${todos.length})`} key='all'>
            {todos.length > 0 && (
              <List onDelete={deleteTodo} onChangeStatus={toggleTodo} list={todos} />
            )}
          </TabPane>
          <TabPane tab={`已完成(${doneList.length})`} key='done'>
            {doneList.length > 0 && (
              <List onDelete={deleteTodo} onChangeStatus={toggleTodo} list={doneList} />
            )}
          </TabPane>
          <TabPane tab={`未完成(${todoList.length})`} key='todo'>
            {todoList.length > 0 && (
              <List onDelete={deleteTodo} onChangeStatus={toggleTodo} list={todoList} />
            )}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
const mapStateToProps = (state: IReduxModel) => {
  return state
}
const mapDispatchToProps = (dispatch: Function) => {
  return {
    addTodo: () => dispatch(addTodo()),
    toggleTodo: (id: string) => dispatch(toggleTodo(id)),
    deleteTodo: (id: string) => dispatch(deleteTodo(id)),
    changeInput: (text: string) => dispatch(changeInput(text))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
