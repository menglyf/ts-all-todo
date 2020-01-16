import React from 'react'
import { Input, Button } from 'antd'
import './index.less'
interface IProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  onClick(e: React.MouseEvent<HTMLButtonElement>): void
}

const Header: React.FC<IProps> = props => {
  console.log(props)
  const { onChange, onClick } = props
  return (
    <div className='header-container'>
      <Input className='input' onChange={onChange} />
      <Button type='primary' size='small' onClick={onClick}>
        添加
      </Button>
    </div>
  )
}

export default Header
