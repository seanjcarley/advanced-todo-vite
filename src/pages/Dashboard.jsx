import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { DataGrid as Datagrid } from '@mui/x-data-grid';

export default function Dashboard() {
    const[open, setOpen] = useState(false);
    const rows = [
        {id: 1, task: 'Buy Groceries', status: 'Peding'},
        {id: 2, task: 'Complete Project Report', status: 'In Progress'},
        {id: 3, task: 'Book Tickets', status: 'Completed'},
        {id: 4, task: 'Schedule Doctor Appointment', status: 'Pending'},
        {id: 5, task: 'Attend Team Meeting', status: 'In Progress'},
        {id: 6, task: 'Renew Membership', status: 'Completed'},
    ];
    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'task', headerName: 'Task', width: 250},
        {field: 'status', headerName: 'Status', width: 150,},
    ];

    return (
        <>
            <Navbar onMenuClick={ () => setOpen(true) } />
            <Sidebar open={open} onClose = { () => setOpen(false) } />
            <Box sx={{ p:2 }}>
                <BreadcrumbsNav />
                <Card sx={{ mb: 3 }}>
                    <CardContent>
                        <Typography variant='h5' gutterBottom>
                            Welcome to your Dashboard
                        </Typography>
                        <Typography variant='body1'>
                            Here you can manage your tasks and view your progress.
                        </Typography>
                    </CardContent>
                </Card>
                <Datagrid autoHeight rows={rows} columns={columns} pageSize={5} />
            </Box> 
        </>
    );
}
