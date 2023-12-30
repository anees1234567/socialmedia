import React from 'react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const BirthdayIcon = styled('div')({
  width: '30px',
  height: '30px',
  backgroundImage: 'url(/assets/gift.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const Birthday = ({ birthdayList }) => {
  console.log(birthdayList);

  return (
    <Box sx={{ height: '20vh', backgroundColor: 'white' }}>
      <Typography style={{ fontFamily: 'initial', marginLeft: '10px' }}>Birthdays</Typography>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <BirthdayIcon />
        {Array.isArray(birthdayList) && birthdayList.length > 0 && (
          <Typography style={{ marginLeft: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>{birthdayList[0].name}</span> and{' '}
            <span style={{ fontWeight: 'bold' }}>{birthdayList.length - 1}</span> others have Birthdays Today
          </Typography>
        )}
      </div>
    </Box>
  );
};

export default Birthday;

