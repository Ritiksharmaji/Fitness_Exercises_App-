import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utility/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  console.log(exercises)

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {exercises.map((exercise, idx) => (
          <Typography key={idx} variant="h6">
            {exercise.name}
          </Typography>
        ))}
      </Stack>

    </Box>
  )
}

export default Exercises