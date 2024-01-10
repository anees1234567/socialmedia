import React from 'react'
import Chatlist from './Chatlist'
import Chatbox from './Chatbox'
import { Stack } from '@mui/material'

function Inboxpage() {
  return (
    <Stack  direction={'row'} style={{backgroundColor:'black',height:'80vh',width:'100vw'}}>


        <Chatlist/>
        <Chatbox/>



    </Stack>
  )
}

export default Inboxpage