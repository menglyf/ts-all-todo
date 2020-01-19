import React from 'react'
import { Icon, Checkbox } from 'antd'
import './index.less'

interface IProp {
  data: ITodo
  onDelete(id: ITodo['id']): void
  onChange(id: ITodo['id']): void
}

const Todo: React.FC<IProp> = ({ data, onDelete, onChange }) => {
  const { finished, text, id } = data
  return (
    <div className={`todo ${finished ? 'modal' : ''}`}>
      <Checkbox checked={finished} onChange={() => onChange(id)}>
        <span className={finished ? 'line' : ''}>{text}</span>
      </Checkbox>
      <Icon type='delete' onClick={() => onDelete(id)} />
    </div>
  )
}

export default Todo
