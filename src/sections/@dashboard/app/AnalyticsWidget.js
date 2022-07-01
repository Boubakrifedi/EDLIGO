import PropTypes from 'prop-types';
import { Card, Typography } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { Box } from '@mui/material';


AnalyticsWidget.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default function AnalyticsWidget({ title, total, icon,date,number,bg, color,sx,theme, ...other }) {
  return (
    <Card
      sx={{
        py: 3,
        boxShadow: 0,
        padding: "20px 10px",
        backgroundColor : theme.projectCard,
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ display: "flex", flexDirection: "row" ,justifyContent:"space-around",alignItems:"center" ,maringTop:"10px" }}>
          <Iconify icon={icon} width={35} height={35}  style={{borderRadius:"100%" ,padding:"5px" ,color:"white" }} backgroundColor={bg}/>
          <Box sx={{ display: "flex", flexDirection: "column"  }}>
              <Typography  style={{fontSize:"10px",fontWeight:"900",padding:"5px 0"}}>
              <span style={{color : theme.text}}>{title}</span>
                
              </Typography> 
              <Typography  sx={{ color: 'text.secondary' ,fontSize:"10px"}}>
              <span style={{color : theme.text}}>{date}</span>
                
              </Typography> 
        </Box>
        <Typography color={color} style={{fontSize:"10px"}}>{total}</Typography>
        <Typography sx={{fontFamily:"Impact" }}style={{fontSize:"12px"}}><span style={{color : theme.text}}>{number}</span></Typography>
      </Box>
    </Card>
  );
}
