import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import jobIN from "../../Images/JobIN.png"

const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({

  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));

export default function JobIN() {

  return (

    <>

      <Box sx={{ width: "100%", height: "8.9%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "10px", border: "1px solid gray", padding: "20px", borderLeft: "none" }}>

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "28px" }}>JOB IN</Typography>
          <Typography sx={{ fontSize: "16px", }}>Manage and track all maintenance requests</Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <Search sx={{ background: "#D3D3D3", border: "1px solid gainsboro", display: "flex", alignItems: "center" }}>

            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }} />

          </Search>

          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit">

            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>

          </IconButton>
        </Box>

      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "scroll", width: "100%", height: "86.5vh" }}>
        <img style={{ width: "100%", height:"100%" }} src={jobIN} alt="dash board" />
      </Box>

    </>
  );
}
