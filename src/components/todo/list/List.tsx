import React from 'react'
import Todo from '../todo/Todo'
import { TodoModel } from '@/mobxModels/TodoModel'

interface Props {
  list: TodoModel[]
  onDelete(id: ITodo['id']): void
  onChangeStatus(id: ITodo['id']): void
}

const listStyle = {
  marginTop: '10px',
  border: '1px solid #eee'
}

const List: React.FC<Props> = ({ list, onDelete, onChangeStatus }) => {
  return (
    <div style={listStyle}>
      {list.map(item => (
        <Todo key={item.id} data={item} onDelete={onDelete} onChange={onChangeStatus} />
      ))}
    </div>
  )
}

export default List
