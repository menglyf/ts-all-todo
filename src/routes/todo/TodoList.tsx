import React, { Component } from 'react'
import { Header, List } from '@/components/todo'
import { Tabs } from 'antd'
import { v4 as uuid } from 'uuid'
import './index.less'
const { TabPane } = Tabs

interface Props {}
interface State {
  list: ITodo[]
  inputText: string
}

export default class TodoList extends Component<Props, State> {
  state = {
    list: [
      {
        id: uuid(),
        finished: true,
        text: '我是第一个'
      },
      {
        id: uuid(),
        finished: false,
        text: '我是第二个'
      }
    ],
    inputText: ''
  }
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputText: e.target.value
    })
  }
  addButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { list, inputText: text } = this.state
    list.push({
      id: uuid(),
      finished: false,
      text
    })
    this.setState({ list, inputText: '' })
  }

  deleteItem = (id: ITodo['id']) => {
    const { list } = this.state
    this.setState({
      list: list.filter(item => item.id !== id)
    })
  }

  changeStatus = (id: ITodo['id']) => {
    const { list } = this.state
    const this_obj = list.find(item => item.id === id) as ITodo
    this_obj.finished = !this_obj.finished
    this.setState({
      list
    })
  }

  render() {
    const { list, inputText: text } = this.state
    return (
      <div className='todo-container'>
        <Header inputValue={text} onChange={this.onInputChange} onClick={this.addButtonClick} />
        <Tabs tabPosition='left'>
          <TabPane tab='全部' key='all'>
            <List onDelete={this.deleteItem} onChangeStatus={this.changeStatus} list={list} />
          </TabPane>
          <TabPane tab='已完成' key='done'>
            <List
              onDelete={this.deleteItem}
              onChangeStatus={this.changeStatus}
              list={list.filter(item => item.finished)}
            />
          </TabPane>
          <TabPane tab='未完成' key='todo'>
            <List
              onDelete={this.deleteItem}
              onChangeStatus={this.changeStatus}
              list={list.filter(item => !item.finished)}
            />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
