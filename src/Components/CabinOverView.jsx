import React, { useEffect, useState } from "react";
import * as apiActions from "../Components/ApiCall"
import { Box, Typography, Paper, Grid, Divider, Avatar, CardContent, Card, FormControl, FormControlLabel, RadioGroup, Radio, CardHeader, TableContainer, TableHead, Table, TableRow } from "@mui/material";
import { motion } from "framer-motion"
import SideNav from "./SideNav";
import BuildIcon from '@mui/icons-material/Build';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import VideocamIcon from '@mui/icons-material/Videocam';
import camera from '../assets/images/camera.png'
import camera1_3 from '../assets/images/camera1&3.png'
import TableCell from "@mui/material/TableCell";
import { BarChart } from '@mui/x-charts/BarChart';
const CabinOverview = () => {

    const [partType, setpartType] = useState();
    const [skidNo, setskidNo] = useState();
    const [serialNo, setserialNo] = useState();
    const [scanStatus, setscanStatus] = useState();
    const [partPosition, setpartPosition] = useState();

    const conveyorLength = 10;
    const position = (partPosition / conveyorLength) * 100;

    //Api data
    const { data, refetch } = apiActions.CabinOverview();

    useEffect(() => {
        if (data) {
            setpartType(data.part_type)
            setskidNo(data.skid_number)
            setserialNo(data.serial_number)
            setscanStatus(data.scan_Status)
            setpartPosition(data.pos)
            // console.log("==========>>>", data);
        }
    }, [data])

    // useEffect(()=>{

    //     const interval=setInterval(() => {

    //         refetch();

    //     }, 1000);
    //     return ()=> clearInterval(interval)

    // },[refetch])

    const animation = {
        initial: { left: '0%' },
        animate: { left: '100%' },
        transition: { duration: 0.1, ease: 'linear' }
    }

    return (
        <>
            <Box sx={{ display: 'flex', height: '100vh' }}>
                <SideNav />
                <Box sx={{ flexGrow: 1, marginTop: 4, padding: 4, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#3C5B6F', fontWeight: 'bold', marginBottom: '20px' }}>
                        Cabin Overview
                    </Typography>


                    {/* Main div */}
                    <motion.div
                        style={{
                            border: '1px solid black',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            width: '100%',
                        }}
                    >
                        {/* sub-div   -> Conveyor */}
                        <motion.div
                            style={{
                                position: 'relative',
                                justifyContent: 'center',
                                borderTop: '5px solid black',
                                width: '100%',
                                height: '500px',
                            }}
                        >
                            {/* Scan room */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    borderLeft: '1px solid black',
                                    borderRight: '1px solid black',
                                    borderBottom: '1px solid black',
                                    background: "linear-gradient(to bottom right, #e1efff, #b4d4ee)",
                                    width: '50%',
                                    height: '85%',
                                    top: '0',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                {/* Cameras  */}
                                {/* camera 1 */}
                                <motion.div style={{
                                    position: 'absolute',
                                    width: '40px',
                                    height: '10px',
                                    transform: 'rotate(20deg)'
                                }}>
                                    <img src={camera1_3} alt='logo' style={{ width: '40px', height: '15x' }} />
                                </motion.div>

                                {/* camera 2 */}
                                <motion.div style={{
                                    position: 'absolute',
                                    width: '40px',
                                    height: '10px',
                                    transform: 'rotate(-20deg)',
                                    top: '0',
                                    right: '0',
                                }}>
                                    <img src={camera} alt='logo' style={{ width: '40px', height: '15x' }} />
                                </motion.div>

                                {/* camera 3 */}
                                <motion.div style={{
                                    position: 'absolute',
                                    width: '40px',
                                    height: '35px',
                                    transform: 'rotate(-60deg)',
                                    bottom: '0',
                                    left: '0',
                                }}>
                                    <img src={camera1_3} alt='logo' style={{ width: '40px', height: '15x' }} />
                                </motion.div>

                                {/* camera 4 */}
                                <motion.div style={{
                                    position: 'absolute',
                                    width: '40px',
                                    height: '35px',
                                    transform: 'rotate(60deg)',
                                    bottom: '0',
                                    right: '0',
                                }}>
                                    <img src={camera} alt='logo' style={{ width: '40px', height: '15x' }} />
                                </motion.div>

                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '50%'
                                    }}
                                >
                                    {/* <Typography >Scan Area</Typography> */}

                                </motion.div>

                            </motion.div>

                            {/* SKID , HANGER, PART */}

                            {scanStatus ?
                                <>
                                    {/* SKID trolley  */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: 'blue',
                                            border: '1px solid blue',
                                            borderRadius: '10px',
                                            height: '10px',
                                            width: '50px',
                                        }}
                                        // initial={{left:'0%'}}
                                        // animate={{left:'100%'}}
                                        initial={{ left: `${position}%` }}
                                        animate={{ left: `${position}%` }}
                                        transition={{ duration: 1, ease: 'linear' }}
                                    />

                                    {/* HANGER  */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: 'blue',
                                            border: '1.5px solid black',
                                            height: '100px',
                                            width: '1px',
                                            marginTop: '10px',
                                            marginLeft: '23px'
                                        }}

                                        // initial={{left:'0%'}}
                                        //     animate={{left:'100%'}}
                                        initial={{ left: `${position}%` }}
                                        animate={{ left: `${position}%` }}
                                        transition={{ duration: 1, ease: 'linear' }}
                                    />

                                    {/* PART  */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: 'green',
                                            border: '1px solid green',
                                            borderRadius: '10px',
                                            height: '35px',
                                            width: '85px',
                                            marginTop: '100px',
                                            marginLeft: '-15px'
                                        }}
                                        // initial={{left:'0%'}}
                                        // animate={{left:'100%'}}
                                        initial={{ left: `${position}%` }}
                                        animate={{ left: `${position}%` }}
                                        transition={{ duration: 1, ease: 'linear' }}
                                    />
                                </>
                                : null}

                        </motion.div>
                    </motion.div>

                    {/* Cabin Overview Details */}
                    <Grid item xs={15} sx={{marginTop:'10px'}}>
                        <Paper elevation={12} sx={{ padding: 3 }}>
                            <Typography variant="h7" gutterBottom>
                                Cabin Overview Details
                            </Typography>
                            <Divider sx={{ marginBottom: 2 }} />
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={3}>
                                    <Card elevation={2} sx={{ backgroundColor: '#e0f7fa' }}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ bgcolor: 'blue', marginRight: 2 }}>
                                                <BuildIcon color="white" />
                                            </Avatar>
                                            <Box>
                                                <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                                                    <strong>Part Type:</strong>
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'blue' }}>{partType}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card elevation={2} sx={{ backgroundColor: '#e8f5e9' }}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ bgcolor: 'blue', marginRight: 2 }}>
                                                <SyncAltIcon color="white" />
                                            </Avatar>
                                            <Box>
                                                <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                                                    <strong>Skid Number:</strong>
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'blue' }}>{skidNo}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card elevation={2} sx={{ backgroundColor: '#fff3e0' }}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ bgcolor: 'blue', marginRight: 2 }}>
                                                <QrCodeIcon color="white" />
                                            </Avatar>
                                            <Box>
                                                <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                                                    <strong>Serial Number:</strong>
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'blue' }}>{serialNo}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card elevation={2} sx={{ backgroundColor: '#ffebee' }}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Avatar sx={{ bgcolor: scanStatus ? 'green' : 'red', marginRight: 2 }}>
                                                <VideocamIcon color="white" />
                                            </Avatar>
                                            <Box>
                                                <Typography variant="body2" sx={{ marginBottom: '4px' }}>
                                                    <strong>Scan Status:</strong>
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: scanStatus ? 'green' : 'red' }}>
                                                    {scanStatus ? "Scanning" : "Yet to scan"}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* All the Details og cabin */}
                    <Grid item xs={12} sx={{ marginTop: '10px' }}>
                    <Paper elevation={2} sx={{ padding: 3 }}>
                        <Typography variant="h7" gutterBottom>
                            All Details
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-label="history-filter"
                                name="history-filter"
                                // value={historyFilter}
                                // onChange={handleHistoryFilterChange}
                            >   
                                <FormControlLabel value="All" control={<Radio />} label="All" />
                                <FormControlLabel value="scanned" control={<Radio />} label="Scanned" />
                                <FormControlLabel value="yet-to-scan" control={<Radio />} label="Yet to Scan" />
                                
                            </RadioGroup>
                        </FormControl>

                            <Divider sx={{ marginBottom: 2 }} />
                            <Grid container spacing={2}>
                                <Grid item xs={7} md={7}>
                                <Paper elevation={2} sx={{ padding: 0 }}>
                                    <Card >
                                        {/* <CardHeader
                                            title={
                                                <Typography sx={{ fontSize: '1rem', textAlign:'center' }}> Details</Typography>
                                            }
                                        /> */}
                                        <CardContent sx={{ height:'500px', display: 'flex',  }}>
                                            <TableContainer>
                                                <Table sx={{ border:'1px solid black'}}>
                                                    <TableHead>
                                                        <TableRow >
                                                            <TableCell align="center" sx={{fontWeight:'bold'}}><strong>Sr. No</strong></TableCell>
                                                            <TableCell align="center" sx={{fontWeight:'bold'}}><strong>Part Type</strong></TableCell>
                                                            <TableCell align="center" sx={{fontWeight:'bold'}}><strong>Skid Numer</strong></TableCell>
                                                            <TableCell align="center" sx={{fontWeight:'bold'}}><strong>Seriall Number</strong></TableCell>
                                                            <TableCell align="center" sx={{fontWeight:'bold'}}><strong>Scan Status</strong></TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                        <TableRow>
                                                        <TableCell align="center"><strong>1</strong></TableCell>
                                                            <TableCell align="center" ><strong>{partType}</strong></TableCell>
                                                            <TableCell align="center"><strong>{skidNo}</strong></TableCell>
                                                            <TableCell align="center" ><strong>{serialNo}</strong></TableCell>
                                                            <TableCell align="center" ><strong style={{color:scanStatus?'green':'red'}}>{scanStatus?"Scanned":"Yet to Scan"}</strong></TableCell>
                                                        </TableRow>
                                                </Table>
                                            </TableContainer>
                                        </CardContent>
                                    </Card>
                                </Paper>
                                </Grid>
                                {/* Graph */}
                                 <Grid item xs={5} md={5}>
                                 <Paper elevation={2} sx={{ padding: 0 }}>
                                    <Card>
                                        <CardContent sx={{height:'500px', display:'flex'}}>
                                            <BarChart
                                                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                                                series={[{ data: [100, 80, 60], label:'Scanned' , color:'#3F9B0B'},
                                                         { data: [10, 15, 5] , label:'Yet to scan', color:'#FF0000' }]}
                                                width={500}
                                                height={450}
                                            />
                                        </CardContent>
                                    </Card>
                                    </Paper>
                                </Grid>

                            </Grid>
                    </Paper>
                </Grid>
                </Box>
            </Box>
        </>
    );
}

export default CabinOverview;