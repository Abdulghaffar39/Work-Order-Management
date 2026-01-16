import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Paper } from '@mui/material';
import Cont from '../../Components/Cont/Cont';
import SmallCont from '../../Components/SmallCont/SmallCont';
import dashbo from "../../Images/image.png"

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

export default function Dashboard() {

  return (

    <>

      <Box sx={{ width: "100%", height: "8.9%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "10px", border: "1px solid gray", padding: "20px", borderLeft: "none" }}>

        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "28px" }}>Dashboard</Typography>
          <Typography sx={{ fontSize: "16px", }}>Overview of your facility maintenance</Typography>
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

      {/* <Box sx={{ width: "100%", padding: "25px", display: "flex", flexDirection: "column", gap: "20px" }}>

        <Box sx={{ width: '100%', height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "20px" }}>


          <Cont value="8" IconBgcolor="#e7e7e7" Icons={<AssignmentIcon sx={{ fontSize: "30px", color: "#171717" }} />} />
          <Cont value="14" IconBgcolor="#fff5e5" Icons={<AccessTimeIcon sx={{ fontSize: "30px", color: "#e57f19" }} />} />
          <Cont value="9" IconBgcolor="#e9f2ff" Icons={<WarningAmberIcon sx={{ fontSize: "30px", color: "#2367fc" }} />} />
          <Cont value="2" IconBgcolor="#e5f8f2" Icons={<AddTaskIcon sx={{ fontSize: "30px", color: "#009966" }} />} />

        </Box>

        <Box sx={{ width: '100%', height: "100%", display: "flex", flexDirection: "row", gap: "20px" }}>

          <Box sx={{ width: "100%", height: "100px", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", gap: "10px", borderRadius: "18px", color: "#fef2f3", background: "#fef2f3", border: "1px solid #f3797f", padding: "0px 25px" }}>

            <Box sx={{ width: "40px", height: "40px", fontSize: "25px", background: "#fcdadc", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <WarningAmberIcon sx={{ fontSize: "25px", color: "#ec363e" }} />

            </Box>
            <Typography sx={{ color: "#e70012", fontWeight: "500" }}>1 urgent work order requiring immediate attention</Typography>

          </Box>

        </Box>

        <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", gap: "10px" }}>

          <Box sx={{ width: "60%", border: "1px solid gainsboro", borderRadius: "18px", padding: "25px" }}>


            <Box sx={{ display: "flex", justifyContent: "space-between" }}>

              <Box>
                <Typography sx={{ fontWeight: 600 }}>Recent Work Orders</Typography>
              </Box>

              <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Typography>View all</Typography>
                <ArrowForwardIcon sx={{ fontSize: "18px" }} />
              </Box>

            </Box>

            <Box sx={{ marginTop: "30px" }}>

              <Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid gainsboro", padding: "20px", borderRadius: "8px" }}>

                <Box>
                  <Box sx={{display:"flex", alignItems:"center", gap:"8px"}}>
                    <Typography sx={{fontSize:"14px", color:"gray"}}>W0-001</Typography>
                    <SmallCont background="#ffedd4" ContColor="#cd3522" value="high" border="1px solid #ffd7a8" />
                    <SmallCont background="#f3e8ff" ContColor="#ae24db" value="in progress" border="1px solid #e9d4ff" />
                    <Box></Box>
                  </Box>
                  <Box></Box>
                  <Box></Box>
                </Box>

                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Typography>View all</Typography>
                  <ArrowForwardIcon sx={{ fontSize: "18px" }} />
                </Box>

              </Box>

            </Box>


          </Box>

          <Box sx={{ width: "40%", height: "12 0px", borderRadius: "18px", }}>

            <Box sx={{ borderRadius: "18px", border: "1px solid gainsboro", height: "60px" }}></Box>
            <Box sx={{ borderRadius: "18px", border: "1px solid gainsboro", height: "60px" }}></Box>
          </Box>


        </Box>

      </Box> */}

      <Box>
        <img style={{width:"100%"}} src={dashbo} alt="dash board" />
      </Box>

    </>
  );
}
