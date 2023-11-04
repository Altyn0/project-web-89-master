import { Button, Input, Card, Space } from 'antd'
import { AddSquare } from 'iconsax-react'
import React from 'react'

const AddTask = () => {
  return (
    <Card>
        <Input.Search size='large' onSearch={(val)=>alert(val)} enterButton='Add Task' placeholder='add new Task'/>
    </Card> 
    
  )
}

export default AddTask