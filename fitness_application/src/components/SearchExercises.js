import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData,exerciseOptions } from '../utility/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises() {

  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  // to decribe the category of execise we are efine the state and useEffect also
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0', exerciseOptions);

      // here the fetchData() function is a user defeine function which is define in utility folder beause to fetch the data 
      // from a resource we required the same syntax to make the resuable we are creating in in utility foler.

      console.log(`exercisesData data:` ,exercisesData)

      // to fetch the data which match the srach inpput data..
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      // setting the search
      
      setSearch('');
      setExercises(searchedExercises);
      
    }
  };


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
           value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

         <Button className="search-btn" 
         sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} 
         onClick={handleSearch}>
          Search
        </Button>

     </Box>

     <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts}  />
      </Box>
    </Stack>
  )
}

export default SearchExercises