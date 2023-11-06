import { Button, Input, Card, Space } from 'antd'
import { AddSquare } from 'iconsax-react'
import React from 'react'

const AddTask = ({onAddTask}) => {
  return (
    <Card>
        <Input.Search size='large' onSearch={(val)=>onAddTask({id: val,
        title: val})} enterButton='Add Task' placeholder='add new Task'/>
    </Card> 
    
  )
}

export default AddTask