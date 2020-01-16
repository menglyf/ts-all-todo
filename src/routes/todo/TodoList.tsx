import React, { Component } from 'react'
import { Header, List } from '@/components/todo'
import { Tabs } from 'antd'
import './index.less'
const { TabPane } = Tabs
interface ITodo {
  finished: boolean
  text: string
}
interface Props {}
interface State {
  list: ITodo[]
}

export default class TodoList extends Component<Props, State> {
  state = {
    list: [
      {
        finished: true,
        text: '我是第一个'
      },
      {
        finished: false,
        text: '我是第二个'
      }
    ]
  }
  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger
  }
  addButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    debugger
  }
  render() {
    const { list } = this.state
    return (
      <div className='todo-container'>
        <Header onChange={this.onInputChange} onClick={this.addButtonClick} />
        <Tabs tabPosition='left'>
          <TabPane tab='全部' key='all'>
            <List list={list} />
          </TabPane>
          <TabPane tab='已完成' key='done'>
            <List list={list.filter(item => item.finished)} />
          </TabPane>
          <TabPane tab='未完成' key='todo'>
            <List list={list.filter(item => !item.finished)} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
