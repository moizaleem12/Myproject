import React from 'react'

export default function Alert(props) {
  return (
   props.alert && <div class="alert alert-warning alert-dismissible fade show bg-danger text-light" role="alert">
      {props.alert.messege}:<strong>{props.alert.type}</strong> 
      
    </div>
  )
}
