import React from 'react'
import BuildIcon from '@mui/icons-material/Build';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Container, Icon, Stack, Typography } from '@mui/material'
import "./admin.css"
import profile_pic from "../../Images/profile_pic.jfif"

export default function Admin() {
    return (

        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", margin: "0px" }}>

            <Box sx={{ width: "20%", height: "98vh", background: "gray", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                <Box sx={{ width: "100%", height: "10%", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", border: "1px solid black", padding: "20px" }}>

                    <Box sx={{ width: "35px", height: "35px", background: "black", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <BuildIcon sx={{ fontSize: "18px", color: "gray" }} />
                    </Box>

                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>WorkFlow</Typography>
                    </Box>

                </Box>

                <Box>

                    <Container>

                        <Box>
                            <img src="" alt="" />
                        </Box>

                        <Box>
                            <Typography>WorkFlow</Typography>
                        </Box>

                    </Container>

                    <Container>

                        <Box>
                            <img src="" alt="" />
                        </Box>

                        <Box>
                            <Typography>WorkFlow</Typography>
                        </Box>

                    </Container>

                    <Container>

                        <Box>
                            <img src="" alt="" />
                        </Box>

                        <Box>
                            <Typography>WorkFlow</Typography>
                        </Box>

                    </Container>

                    <Container>

                        <Box>
                            <img src="" alt="" />
                        </Box>

                        <Box>
                            <Typography>WorkFlow</Typography>
                        </Box>

                    </Container>

                    <Container>

                        <Box>
                            <img src="" alt="" />
                        </Box>

                        <Box>
                            <Typography>WorkFlow</Typography>
                        </Box>

                    </Container>

                </Box>

                <Box sx={{ width: "100%", height: "10%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", border: "1px solid black", padding: "20px" }}>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", }}>

                        <Box sx={{ width: "50px", }}>
                            <img style={{ borderRadius: "50px" }} src={profile_pic} width="100%" alt="person" />
                        </Box>

                        <Box>
                            <Typography>WorkFlow</Typography>
                            <Typography>WorkFlow</Typography>
                        </Box>

                    </Box>

                    <Box>
                        <LogoutIcon sx={{ color: "gainsboro", fontWeight: 800 }} />
                    </Box>

                </Box>

            </Box>

            <Box sx={{ width: "80%" }}>h2</Box>

        </Box >
    )
}
