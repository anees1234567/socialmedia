import { Chat, MoreVert, Share, ThumbUp } from '@mui/icons-material'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'


function Post(item) {
    
  return (
        <>
     <Card  >
      <CardHeader
        avatar={
          <Avatar alt="Segun Adebayo" src={item.image} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title={item.name}
        subheader={item.dateOfPost}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height={420}
        image={item.image}
        style={{ objectFit: 'cover',  }}
        alt="Chakra UI"
      />
      <CardActions
        sx={{
          '& > button': {
            minWidth: '136px',
          },
        }}
      >
        <Button startIcon={<ThumbUp/>}>Like</Button>
        <Button startIcon={<Chat />}>Comment</Button>
        <Button startIcon={<Share />}>Share</Button>
      </CardActions>
    </Card>
        
        
        
        
        </>
  )
}

export default Post