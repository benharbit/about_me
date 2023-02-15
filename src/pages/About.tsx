import React, {useEffect} from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import background2 from './background2.jpg';
import Box from '@mui/material/Box';
import Accordian from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const myData = require('../assets/projectData.json');

const About = () => {
	const [currentSkill, setCurrentSkill] = React.useState('All');
	const [uniqueSkills, setUniqueSkills] = React.useState<any[]>([]);
	const aboutRef = useNav('About');

	
	
	const setSkills = (e: any) => {
		console.log(`skill: ${e.target.value.toString()}`)
		setCurrentSkill(e.target.value)
	}
	useEffect(() => {	
		//myData.forEach((project: any) => project.skills.unshift('All'))
		setUniqueSkills(myData.reduce((acc: any[], current: any) => {
			current.skills.forEach((skill: any) => {
				if(!acc.includes(skill)) {
					acc.push(skill)
				}
			})
			return acc;	
		}, []));
	}, [])
	
	
	return (
			<Box ref={aboutRef}
			id = 'aboutContainer'
			sx={{ 
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundImage: `url(${background2})`,
				backgroundColor: 'rgba(255, 255, 0, 0.2))',
				height: '150vh',
				width: '100vw',

			}}>
			
				<Typography variant="h3" sx={{mt:10}} >Projects Completed</Typography>
					<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<Box sx={{border: 1, borderColor: 'grey', borderRadius: '10px', 
							background: 'white' , p:'10px', mb:'10px', width: '50%'}}>
						<Typography variant="body1" sx={{ml: 2, color: 'red', fontWeight: 'bold', 'hover': {
										color: 'red',
										backgroundColor: 'blue',
									}}}>Select A Skill</Typography>
						<Box sx={{display: 'flex', flexDirection: 'rows', flexWrap: 'wrap',
									}}>
							{uniqueSkills.map(skill =>{
								return (<button className={skill===currentSkill ? 'buttonActive':'buttonClass1'} onClick={setSkills} value={skill} >{skill}</button>)	
								})}
						</Box>
					</Box>

					{myData
						.filter((project: any) => !currentSkill || currentSkill === 'All' || project.skills.includes(currentSkill))
						.map((project: any) => { return(	
						<Accordian sx={{borderRadius: '10px', width: '40%'}}>
						<AccordionSummary sx={{borderRadius: '4px'}}
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
						>
						<Typography variant="h6">
							{project.title}
						</Typography>

						</AccordionSummary>
						
						<AccordionDetails>
						<Typography display="inline" sx={{color: 'blue'}}> Description:</Typography>
						<Typography variant="body2" sx={{ml: 1}}>
							{project.description}
						</Typography>
						<Typography display="inline" sx={{color: 'blue'}}> Technology Used:</Typography>
						<Typography variant="body2" sx={{ml: 1}}>
							{project.skills.join(', ')}
						</Typography>
						
						<Typography>
							<Box sx={{display: 'flex', flexDirection: 'row'}}>
								{project.github ?
									<Typography display="inline" sx={{color: 'blue'}}> <a href={project.github}> Github Link </a> </Typography>
									: ""}
							</Box>
						</Typography>
						{project.github ?
									<Typography display="inline" sx={{color: 'blue'}}> <a href={project.website}> Website Link </a> </Typography>
									: ""}	
						</AccordionDetails>
						</Accordian>
					
				
					)})}
					</Box>
				</Box>
			
	);
};

export default About;
