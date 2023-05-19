import React, {useEffect} from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import background2 from './yuriy-kovalev-nN1HSDtKdlw-unsplash.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


const Courses = () => {
	const courseRef = useNav('courses');	
	return (
			<Box ref={courseRef}
			id = 'courses'
			sx={{ 
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: `url(${background2})`,
				backgroundColor: 'rgba(255, 255, 0, 0.2))',
				height: '100vh',
				width: '100vw',

			}}>		
				<Typography variant="h3" sx={{mt:10}} >Courses/Books/Tutorials</Typography>
         
            <Typography  variant="h5">
                <List sx={{ width: '80%', maxWidth: 560, bgcolor: 'background.paper', borderRadius: '12px' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary="Operating Systems"
                      secondary={
                          <Link href="https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O">Nesso Academy</Link>
                      }
                      />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText> 
                    <ListItemText
                      primary="Design Patterns"
                      secondary={
                          <>Head First Pattern Design by Freeman, Bates, Sierra, Robson</>
                      }
                      />
                    </ListItemText>
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText> 
                    <ListItemText
                      primary="Machine Learning"
                      secondary={
                        <Link href="http://cs231n.stanford.edu/">Stanford Machine Learning Vision cs231n</Link>
                      }
                      />
                    </ListItemText>
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemText> 
                    <ListItemText
                      primary="Data Structure and Algorithm "
                      secondary={
                        <>Grokking Algorithm by Aditya Bhargav</>
                    }
                      />
                    </ListItemText>
                  </ListItem>
                </List>
            </Typography>
          
				</Box>
			
	);
};

export default Courses;
