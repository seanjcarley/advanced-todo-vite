import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export default function () {
  return (
    <Breadcrumbs sx={{my: 2}}>
        <Link underline='hover' color='inherit' href='#'>Home</Link>
        <Typography color='text.primary'>Tasks</Typography>
    </Breadcrumbs>
  );
}
