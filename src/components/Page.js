import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

import "../assets/style.css"
const Page = forwardRef(({ children, title = '',meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`EDLIGO | ${title} `}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other} style={{paddingTop:"0px"}}  >
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
