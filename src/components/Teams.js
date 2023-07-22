import React from 'react';
import { Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import mustafa from '../assets/images/team/MUSTAFA_ODUOR.jpg';
import botieno from '../assets/images/team/BRIAN_OTIENO.jpg'
import cornelius from '../assets/images/team/CORNELIUS_LUSAKA.jpg'
import kenya from '../assets/images/team/country/kenya.png'
import dennis from '../assets/images/team/DENNIS_WAFULA_KAMALA.jpg'
import george from '../assets/images/team/GEORGE_DIZZO_ONYANGO.jpg'
import otilee from '../assets/images/team/ISAAC_OTIENO.jpg'
import justine from '../assets/images/team/JUSTINE_OMWANDO.jpg'
import major from '../assets/images/team/MAJOR_DERIMA.jpg'
import ogechi from '../assets/images/team/PETER_OGECHI.jpg'
import nkatha from '../assets/images/team/WYCLIFFE_NTHATA.jpg'
import neima from '../assets/images/team/NEHEMIAH_ONCHIRI.jpg'
import brian from '../assets/images/team/BRIAN_MICHIRA_MIGIRO.jpg'
import prince from '../assets/images/team/PRINCE_MITTO.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  playerCategory: {
    marginTop: theme.spacing(4),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  playerImage: {
    width: '100%',
    height: 300,
    objectPosition: 'top',
    objectFit: 'cover',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  playerName: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  playerCountry: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
  countryFlag: {
    width: 24,
    height: 24,
    marginRight: theme.spacing(1),
  },
}));

function Teams() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">Team Squad</Typography>

      <div className={classes.playerCategory}>
        <Typography variant="h2">Goalkeepers</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={mustafa} alt="GoalKeeper" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Mustafa Oduor
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more goalkeeper cards here */}
        </Grid>
      </div>

      {/* Repeat the structure for Defenders, Midfielders, and Strikers */}
      <div className={classes.playerCategory}>
        <Typography variant="h2">Defenders</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={botieno} alt="Defender" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Brian Otieno
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more goalkeeper cards here */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={cornelius} alt="Defender" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Cornelius Lusaka
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={dennis} alt="Defender" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Dennis Wafula
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={george} alt="Defender" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   George Onyango
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.playerCategory}>
        <Typography variant="h2">Midfielders</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={otilee} alt="Midfielder" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Brian Otieno
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more goalkeeper cards here */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={justine} alt="Midfielder" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Cornelius Lusaka
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={major} alt="Midfielder" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Dennis Wafula
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={ogechi} alt="Midfielder" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   George Onyango
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className={classes.playerCategory}>
        <Typography variant="h2">Strikers</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={nkatha} alt="Striker" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Wycliffe Nkantha
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more goalkeeper cards here */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={neima} alt="Striker" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Nehemiah Onchiri
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={brian} alt="Striker" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Brian Michira
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia component="img" image={prince} alt="Striker" className={classes.playerImage} />
              <CardContent>
                <Typography variant="h4" className={classes.playerName}>
                   Prince Mitto
                </Typography>
                <div className={classes.playerCountry}>
                  <img src={kenya} alt="Country Flag" className={classes.countryFlag} />
                  <Typography variant="body1">Kenya</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Teams;
