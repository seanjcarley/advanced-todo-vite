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
    const [openDialog, setOpenDialog] = useState(false);
    const [newTask, setNewTask] = useState('');
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

    const handleAddTask = () => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: newTask,
                completed: false,
                userId: 1
            }),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(data => {
            setRows(prev => [...prev, {...data, id: prev.length + 1}]);
            setOpenDialog(false);
            setNewTask('');
        });
    };



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=1000')
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
                <Button 
                    variant='contained'
                    startIcon={<AddIcon />}
                    onClick={() => setOpenDialog(true)}
                    sx={{ mb: 2 }}
                >
                    Add Task
                </Button>

                <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                    <DialogTitle>Add New Task</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin='dense'
                            label='Task Title'
                            fullWidth
                            variant='outlined'
                            value={newTask}
                            onChange={e => setNewTask(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                        <Button onClick={handleAddTask}>Add</Button>
                    </DialogActions>
                </Dialog>
            </Box> 
        </>
    );
};

export default Dashboard;