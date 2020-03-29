import React, { FC, useState, useCallback } from 'react';
import Header from './header';
import DrawerLeft from './drawer';
import clsx from 'clsx';
import { Typography, createStyles, makeStyles } from '@material-ui/core';
import * as DrawerConstants from './drawerConstants'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -DrawerConstants.DROWER_WIDTH,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

const Layout: FC<{}> = ({children}) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <div className={classes.root}>
      <Header drawerOpen={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <DrawerLeft drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose}/>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  )
}

export default Layout
