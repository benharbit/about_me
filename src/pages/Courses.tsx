import React, { useEffect } from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import background2 from './unsplash22.webp';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { coursesData } from './courseData'



const Courses = () => {
  const courseRef = useNav('courses');
  return (
    <Box ref={courseRef}
      id='courses'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundImage: `url(${background2})`,
        backgroundColor: 'rgba(255, 255, 0, 0.2))',
        minHeight: '100vh',
        minWidth: '100vw',
        p: 2,

      }}>
      
        <Typography variant={window.screen.width > 500 ? "h3" : "h6" } sx={{ mt: window.screen.width > 600 ?  10 : 0, mb: 2}} >Courses/Books/Tutorials</Typography>
       
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

    </Box>

  );
};

export default Courses;
