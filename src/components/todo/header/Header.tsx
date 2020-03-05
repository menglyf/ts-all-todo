import React from 'react'
import { Input, Button } from 'antd'
import './index.less'
interface IProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  onAdd(): void
  inputValue: string
}

const Header: React.FC<IProps> = props => {
  console.log(props)
  const { onChange, onAdd, inputValue } = props
  return (
    <div className='header-container'>
      <Input value={inputValue} className='input' onChange={onChange} onPressEnter={onAdd} />
      <Button type='primary' size='small' onClick={onAdd}>
        添加
      </Button>
    </div>
  )
}

export default Header
