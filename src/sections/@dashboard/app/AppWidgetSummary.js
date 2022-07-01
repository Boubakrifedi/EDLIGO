import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { Box } from '@mui/material';

import { CircularProgressbar} from "react-circular-progressbar";

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon,date, bg,percentage, sx,theme, ...other }) {
  return (
    <Card
    
      sx={{
        py: 3,
        boxShadow: 0,
        textAlign: 'left',
        padding: "20px 10px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor : theme.projectCard,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Iconify icon={icon} width={40} height={40}  style={{borderRadius:"100%" ,padding:"5px" ,color:"white"}} backgroundColor={bg}/>
         <Typography  style={{fontSize:"12px",fontWeight:"900",padding:"10px 0"}}>
         <span style={{color:theme.text}}> {title}</span>
        </Typography> 
        <Typography  sx={{paddingBottom:"10px" ,fontFamily:"Impact"}}><span style={{color:theme.text}}> {total}</span></Typography>
        <Typography  sx={{ color: 'text.secondary' ,fontSize:"10px"}}><span style={{color:theme.text}}>Updated : {date}</span></Typography>
      </Box>
      <Box style={{ width:"60px",height:"60px"}}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{text: { fontSize: '24px' }}}/>
      </Box>
    </Card>
  );
}
