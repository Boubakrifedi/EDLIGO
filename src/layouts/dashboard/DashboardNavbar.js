import PropTypes from 'prop-types';
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import DarkModeToggle from "react-dark-mode-toggle";
import Iconify from '../../components/Iconify';
import account from '../../_mock/account';
import AccountPopover from './AccountPopover';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 70;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', 
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(102% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));


DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar(props) {
 
  const [currTheme, setCurrTheme] = useState(props.theme);

  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeTheme() {
    if (isDarkMode) {
      props.setTheme("light");
      setCurrTheme("light");
      setIsDarkMode(false)

    } else {
      props.setTheme("dark");
      setCurrTheme("dark");
      setIsDarkMode(true)

    }
  }
  return (
    <RootStyle  style={{backgroundColor : props.theme.body}}>
      <ToolbarStyle>
        <IconButton onClick={props.onOpenSidebar} sx={{ mr: 1, color:props.theme.text, display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center"  spacing={{ xs: 0.5 }}>
   
          <DarkModeToggle onChange={changeTheme} checked={isDarkMode} size={50} />
          
        <Box sx={{ px: 2 }}>
          <Typography variant="subtitle2"  sx={{ color: 'text.secondary' }} noWrap>
            Hey, {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}  noWrap>
            {account.role}
          </Typography>
        </Box>
          <AccountPopover theme={props.theme} setTheme={props.setTheme}/>
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
