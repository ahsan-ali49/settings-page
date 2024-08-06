import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProfileSection from './_components/ProfileSection';
import ChangeEmailSection from './_components/ChangeEmailSection';
import PasswordSection from './_components/PasswordSection';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProfileSection />
        </Grid>
        <Grid item xs={12}>
          <ChangeEmailSection />
        </Grid>
        <Grid item xs={12}>
          <PasswordSection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
