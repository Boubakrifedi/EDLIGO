import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import image from "../assets/images/Edligo.png"

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  
  const logo = (
    <Box sx={{ width: 200, height: 100, ...sx }}>
      <img src ={image} alt="LOGO"/> 
    </Box>
  );
  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
