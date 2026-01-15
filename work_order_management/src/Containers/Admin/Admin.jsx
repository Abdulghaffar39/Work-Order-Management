import "./admin.css"
import React, { useEffect, useState } from 'react'
import BuildIcon from '@mui/icons-material/Build';
import LogoutIcon from '@mui/icons-material/Logout';
import ReportIcon from '@mui/icons-material/Report';
import profile_pic from "../../Images/profile_pic.jfif";
import HandymanIcon from '@mui/icons-material/Handyman';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Container, Icon, Stack, Typography } from '@mui/material'
import Dashboard from "../Dashboard/Dashboard";
import Maintenance from "../Maintenance/Maintenance";
import Upcoming from "../Upcoming/Upcoming";
import Completed from "../Completed/Completed";
import Overdue from "../Overdue/Overdue";
import Technician from "../Technician/Technician";
import Report from "../Report/Report";
import Setting from "../Setting/Setting";

export default function Admin() {

    const [active, setActive] = useState("dashboard");

    const renderContent = () => {

        switch (active) {
            case "users":
                return <Users />;
            case "jobs":
                return <Jobs />;
            case "maintenance":
                return <Maintenance />;
            case "completed":
                return <Completed />;
            case "overdue":
                return <Overdue />;
            case "upcoming":
                return <Upcoming />;
            case "technician":
                return <Technician />;
            case "report":
                return <Report />;
            case "setting":
                return <Setting />;
            default:
                return <Dashboard />;
        }

    }

    return (

        <Box sx={{ width: "100%", display: "flex", flexDirection: "row", }}>

            <Box sx={{ width: "200px", height: "97vh", background: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", width: { xs: "1000px", sm: "400px", xl: "300px" }, }}>

                <Box sx={{ width: "100%", height: "10%", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", border: "1px solid gray", padding: "20px"}}>

                    <Box sx={{ width: "35px", height: "35px", background: "black", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <BuildIcon sx={{ fontSize: "18px", color: "gray" }} />
                    </Box>

                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>WorkFlow</Typography>
                    </Box>

                </Box>

                <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "start", gap: "0px", padding: "20px 0px", padding: "20px 0px", borderLeft:"1px solid gray", borderRight:"1px solid gray", }}>

                    <Box onClick={() => setActive("dashboard")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <DashboardIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Dashboard</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("maintenance")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <EngineeringIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Maintenance</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("upcoming")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <UpcomingIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Upcoming</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("completed")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <OfflinePinIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Completed</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("overdue")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <WatchLaterIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Overdue</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("technician")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <HandymanIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Technician</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("report")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <ReportIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Technician Report</Typography>
                        </Box>

                    </Box>

                    <Box onClick={() => setActive("setting")} sx={{ width: "90%", borderRadius: "8px", display: "flex", alignItems: "center", margin: "0 auto", gap: "10px", padding: "10px", ":hover": { background: "gray" }, cursor: "pointer" }}>

                        <Box>
                            <SettingsIcon />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 600, textTransform: "uppercase" }}>Setting</Typography>
                        </Box>

                    </Box>

                </Box>

                <Box sx={{ width: "100%", height: "10%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", border: "1px solid gray", padding: { xs: "10px", xl: "20px" } }}>

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>

                        <Box sx={{ width: { xs: "40px", }, display: "flex", alignItems: "center" }}>
                            <img style={{ borderRadius: "50px", display: "flex", alignItems: "center" }} src={profile_pic} width="100%" alt="person" />
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: { xs: 700 }, fontSize: { xs: "14px", xl: "18px" } }}>Abdul Aleem</Typography>
                            <Typography sx={{ fontSize: { xs: "12px", xl: "15px" } }}>Admin</Typography>
                        </Box>

                    </Box>

                    <Box>
                        <LogoutIcon sx={{ color: "black", fontWeight: 800, cursor: "pointer" }} />
                    </Box>

                </Box>

            </Box>

            <Box sx={{ width: "80%", background:"white" }}>

                {renderContent()}

            </Box>




        </Box >
    )
}
