import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);
    // const rows = [
    //     {id: 1, task: 'Buy Groceries', status: 'Peding'},
    //     {id: 2, task: 'Complete Project Report', status: 'In Progress'},
    //     {id: 3, task: 'Book Tickets', status: 'Completed'},
    //     {id: 4, task: 'Schedule Doctor Appointment', status: 'Pending'},
    //     {id: 5, task: 'Attend Team Meeting', status: 'In Progress'},
    //     {id: 6, task: 'Renew Membership', status: 'Completed'},
    // ];

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'title', headerName: 'Task', width: 250},
        {field: 'completed', headerName: 'Status', width: 130, valueFormatter: (params) => params.value ? 'Done' : 'Pending'},
    ];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(data => setRows(data))
        .catch(error => console.error('Error loading tasks: ', error));
    }, []);

    return (
        <>
            <Navbar onMenuClick={ () => setOpen(true) } />
            <Sidebar open={open} onClose = { () => setOpen(false) } />
            <Box sx={{ p:2 }}>
                <BreadcrumbsNav />
                <Card sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant='h5'>
                            Welcome back!
                        </Typography>
                        <Typography variant='body1'>
                            Here are your latest tasks from API:
                        </Typography>
                    </CardContent>
                </Card>
                <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
            </Box> 
        </>
    );
};

export default Dashboard;