import React from 'react';

import { Drawer, DrawerProps } from './Drawer';
import { Navbar } from './Navbar';

export type NavigationProps = {
  sections: DrawerProps['sections'];
  children?: React.ReactNode;
  drawerId?: string;
};

export const Navigation = ({ sections, drawerId = 'drawer', children }: NavigationProps) => (
  <div className="drawer">
    <input id={drawerId} type="checkbox" className="drawer-toggle" />
    <div className="flex flex-col drawer-content">
      <Navbar drawerId={drawerId} />
      {children}
    </div>
    <Drawer sections={sections} drawerId={drawerId} />
  </div>
);
