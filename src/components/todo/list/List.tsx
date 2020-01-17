import React from 'react'
import Todo from '../todo/Todo'

interface Props {
  list: ITodo[]
  onDelete(id: ITodo['id']): void
  onChangeStatus(id: ITodo['id']): void
}
interface ITodo {
  finished: boolean
  text: string
  id: number
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
