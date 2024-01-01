import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'


function Feed() {

  const postsArray = [
    {
      name: "John Doe",
      dateOfPost: "25-12-2023",
      image: "/assets/person/1.jpeg",
      likeCount: 56,
      comment: [
        {
          name: "Jane",
          comment: "Nice picture!"
        }
      ]
    },
    {
      name: "Alice Johnson",
      dateOfPost: "25-12-2023",
      image: "/assets/person/2.jpeg",
      likeCount: 72,
      comment: [
        {
          name: "Bob",
          comment: "Great shot!"
        }
      ]
    },
    {
      name: "Charlie Brown",
      dateOfPost: "25-12-2023",
      image: "/assets/person/3.jpeg",
      likeCount: 45,
      comment: [
        {
          name: "Diana",
          comment: "Beautiful!"
        }
      ]
    },
    {
      name: "Eva Smith",
      dateOfPost: "25-12-2023",
      image: "/assets/person/4.jpeg",
      likeCount: 88,
      comment: [
        {
          name: "Frank",
          comment: "Amazing!"
        }
      ]
    },
    {
      name: "Gary Wilson",
      dateOfPost: "25-12-2023",
      image: "/assets/person/5.jpeg",
      likeCount: 62,
      comment: [
        {
          name: "Helen",
          comment: "Stunning!"
        }
      ]
    },
    {
      name: "Ivy Thomas",
      dateOfPost: "25-12-2023",
      image: "/assets/person/6.jpeg",
      likeCount: 50,
      comment: [
        {
          name: "Jack",
          comment: "Fantastic!"
        }
      ]
    },
    {
      name: "Kevin White",
      dateOfPost: "25-12-2023",
      image: "/assets/person/7.jpeg",
      likeCount: 75,
      comment: [
        {
          name: "Linda",
          comment: "Impressive!"
        }
      ]
    },
    {
      name: "Mia Jackson",
      dateOfPost: "25-12-2023",
      image: "/assets/person/8.jpeg",
      likeCount: 60,
      comment: [
        {
          name: "Nathan",
          comment: "Superb!"
        }
      ]
    },
    {
      name: "Oliver Miller",
      dateOfPost: "25-12-2023",
      image: "/assets/person/9.jpeg",
      likeCount: 42,
      comment: [
        {
          name: "Pamela",
          comment: "Excellent!"
        }
      ]
    },
    {
      name: "Quinn Taylor",
      dateOfPost: "25-12-2023",
      image: "/assets/person/10.jpeg",
      likeCount: 55,
      comment: [
        {
          name: "Ryan",
          comment: "Brilliant!"
        }
      ]
    }
  ];
  
 
  

  return (
    <Box
    flex={6}
    p={1}
    sx={{
      overflowY: 'scroll',
      // Adjust scrollbar width using a CSS rule within sx
      '&::-webkit-scrollbar': {
        width: '5px',
      },
    }}
  >
      {postsArray.map((item) => (
        <Post key={item.name} {...item} />
      ))}
    </Box>
  );
}

export default Feed