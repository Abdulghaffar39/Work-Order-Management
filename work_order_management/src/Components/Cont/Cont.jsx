import { Box, Paper, Typography } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react'

export default function Cont({IconBgcolor,Icons, value}) {
    return (

        <Paper sx={{ border: "1px solid gainsboro", borderRadius:"10px", width: "25%", height: "150px", display: "flex", justifyContent: "space-between", alignItems: "center", padding:"20px" }}>

            <Box>

                <Typography sx={{ fontSize: "18px" }}>Total Orders</Typography>
                <Typography sx={{ fontSize: "26px", fontWeight: 800 }}>{value}</Typography>

            </Box>

            <Box sx={{ width: "50px", height: "50px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", background:IconBgcolor, borderRadius: "8px" }}>
                {Icons}
            </Box>

        </Paper>
    )
}
