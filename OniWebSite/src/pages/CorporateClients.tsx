import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import { Button } from '@common/Button';

export function CorporateClients() {
  return (
    <div>
      CorporateClients
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Button rounded>Primary</Button>
        </div>

        <TextField id='standard-basic' label='Standard' />
        <Typography variant='h1' component='h2' gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant='h2' gutterBottom color='primary' align='left'>
          h2. Heading
        </Typography>
        <Typography variant='h3' gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant='body1' gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant='body2' gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </div>
    </div>
  );
}
