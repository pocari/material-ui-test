import React, { useState, useCallback, FC } from 'react'
import LayoutComponent from 'components/global/layout';

const Layout: FC<{}> = ({children}) => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setDrawerOpen(false);
  }, []);
  return (
    <LayoutComponent
      drawerOpen={drawerOpen}
      handleDrawerClose={handleDrawerClose}
      handleDrawerOpen={handleDrawerOpen}
      children={children}
    />
  )
}

export default Layout;
