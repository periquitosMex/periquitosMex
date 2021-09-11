import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia } from '@material-ui/core';
import cx from 'clsx';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: '40vw',
    width: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    overflow: 'hidden',
    boxShadow: 'none',
    [theme.breakpoints.down('xs')]: {
      height: '85vw',
    },
  },
  card: {
    width: '100%',
    padding: '1rem',
    boxShadow: 'none',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function FameGrid({ photos }) {
  const classes = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {photos.map((fame) => (
          <Grid item xs={12} sm={6} className={classes.item}>
            <Card className={classes.card}>
              <CardMedia
                className={`${cx(shadowStyles.root)} ${classes.media}`}
                image={fame.src}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
