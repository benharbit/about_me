import React, { useEffect } from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import background2 from './unsplash22.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { coursesData } from './courseData'


// Courses I have taken
const Courses = () => {
  const courseRef = useNav('courses');
  return (
    <Box ref={courseRef}
      id='courses'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${background2})`,
        backgroundColor: 'rgba(255, 255, 0, 0.2))',
        height: '100vh',
        width: '100vw',

      }}>
      <Typography variant="h3" sx={{ mt: 10 }} >Courses/Books/Tutorials</Typography>

      <Typography variant="h5">
        <List sx={{ width: '80%', maxWidth: 560, bgcolor: 'background.paper', borderRadius: '12px' }}>
          {coursesData.map((course) => {
            return (
              <ListItem alignItems="flex-start" >
                <ListItemText sx={{ p:0, m:0}}
                  primary={course.name}
                  secondary={
                    <Link href={course.link}>{course.description}</Link>
                  }
                />
              </ListItem>
            )
          })}
        </List>
      </Typography>

    </Box>

  );
};

export default Courses;
