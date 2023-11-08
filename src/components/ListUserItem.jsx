import { Button } from 'antd'
import { Building } from 'iconsax-react'
import React from 'react'

const ListUserItem = ({user, color, size, onCheckEmail}) => {
  return (
    <div style={{marginBottom:16,}}>
        <h5 style={{color:color ?? '#212121'}}>{user.name} {user.company && <Building size ={20} color='red'/>} </h5>
        <p>{user.email}</p>
        <Button onClick={onCheckEmail}> Check </Button>
        </div>
  )
}

export default ListUserItem