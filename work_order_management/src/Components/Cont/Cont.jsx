import { Box, Paper, Typography } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react'

export default function Cont({background}) {
    return (

        <Paper sx={{ border: "1px solid gainsboro", width: "25%", height: "150px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>

            <Box>

                <Typography sx={{ fontSize: "18px" }}>Total Orders</Typography>
                <Typography sx={{ fontSize: "26px", fontWeight: 800 }}>8</Typography>

            </Box>

            <Box sx={{ width: "40px", height: "40px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", background:{background}, borderRadius: "8px" }}>
                <AssignmentIcon />
            </Box>

        </Paper>
    )
}
