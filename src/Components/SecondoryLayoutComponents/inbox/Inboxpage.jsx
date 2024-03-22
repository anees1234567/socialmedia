import React from 'react'
import Chatlist from './Chatlist'
import Chatbox from './Chatbox'
import { Stack } from '@mui/material'

function Inboxpage() {
  return (
    <Stack  direction={'row'} style={{height:'80vh',width:'100vw'}}>


<Chatlist style={{ height: '100%', width: '20vw' }} />
    <Chatbox style={{ height: '100%', width: '80vw' }} />



    </Stack>
  )
}

export default Inboxpage