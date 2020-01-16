import React from 'react'
import { Button } from 'antd'
import './index.less'

interface ITodo {
  finished: boolean
  text: string
  onClick(): void
}

const Todo: React.FC<ITodo> = ({ finished, text, onClick }) => {
  return (
    <div className='todo'>
      <span>{text}</span>
      <Button size='small' type='danger' onClick={onClick}>
        删除
      </Button>
    </div>
  )
}

export default Todo
