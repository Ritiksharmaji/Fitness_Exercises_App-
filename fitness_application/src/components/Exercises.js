import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utility/fetchData';
import ExerciseCard from './ExerciseCard ';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  console.log(exercises)
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  // by using the [bodyPart] in useEffect we are defining that this useEffect will re-run when ever the bodypart will change.

   // Pagination
   const indexOfLastExercise = currentPage * exercisesPerPage;
   const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
   const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


const paginate = (e, value)=>{

  setCurrentPage(value)
  window.scrollTo({ top: 1800, behavior: 'smooth' });

}
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
    {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>

      {/* this stack is for paggination */}
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises