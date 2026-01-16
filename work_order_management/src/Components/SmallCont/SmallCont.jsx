import { Box } from '@mui/material'
import React from 'react'

export default function SmallCont({ background, ContColor, border, value }) {
    return (
        <Box sx={{ border: "1px solid gainsboro", background: background, color: ContColor, border:border, padding: "2px 12px", borderRadius: "10px", textAlign: "center" }}>
            {value}
        </Box>
    )
}
