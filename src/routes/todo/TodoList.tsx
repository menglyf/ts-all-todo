import React, { Component } from 'react'
import { Header, List } from '@/components/todo'
import { Tabs } from 'antd'
import './index.less'
const { TabPane } = Tabs
interface ITodo {
  finished: boolean
  text: string
  id: number
}
interface Props {}
interface State {
  list: ITodo[]
  text: string
}

export default class TodoList extends Component<Props, State> {
  state = {
    list: [
      {
        id: 1,
        finished: true,
        text: '我是第一个'
      },
      {
        id: 2,
        finished: false,
        text: '我是第二个'
      }
    ],
    text: ''
  }
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    })
  }
  addButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { list, text } = this.state
    list.push({
      id: new Date().getTime(),
      finished: false,
      text
    })
    this.setState({ list, text: '' })
  }

  deleteItem = (id: ITodo['id']) => {
    const { list } = this.state
    this.setState({
      list: list.filter(item => item.id != id)
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
    const { list, text } = this.state
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
