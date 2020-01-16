import React from 'react'
import Todo from '../todo/Todo'

interface Props {
  list: ITodo[]
}
interface ITodo {
  finished: boolean
  text: string
}

const listStyle = {
  marginTop: '10px',
  border: '1px solid #eee'
}

const List: React.FC<Props> = ({ list }) => {
  return (
    <div style={listStyle}>
      {list.map((item, i) => (
        <Todo
          key={i}
          finished={item.finished}
          text={item.text}
          onClick={() => {
            debugger
          }}
        />
      ))}
    </div>
  )
}

export default List
