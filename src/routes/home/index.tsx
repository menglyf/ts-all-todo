import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {}

const Home: React.FC<Props> = () => {
  const activeStyle = {
    textDecoration: 'none',
    color: '#4b85fc'
  }
  return (
    <ul className='menu'>
      <li>
        <NavLink to='/app' activeStyle={activeStyle}>
          App
        </NavLink>
      </li>
      <li>
        <NavLink to='/home' activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/todo' activeStyle={activeStyle}>
          todo
        </NavLink>
      </li>
      <li>
        <NavLink to='/mobx-todo' activeStyle={activeStyle}>
          mobx-todo
        </NavLink>
      </li>
    </ul>
  )
}

export default Home
