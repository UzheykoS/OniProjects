import * as React from 'react'
import { AlertIcon } from 'mdi-react';
import Button from '@material-ui/core/Button';

const HomeComponent = () => (
  <div>
    HOME
    <AlertIcon color="#fff" />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
)

export default HomeComponent;