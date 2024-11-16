import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

import styles from './Navbar.module.css';

  const Navbar = () => {

    return (
      <NavigationMenu className={styles.Root}>
        <NavigationMenuList className={styles.MenuList}>
        <NavigationMenuItem>
          <NavigationMenuLink className={styles.Link} href="#home">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={styles.Link} href="#projects">Projects</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={styles.Link} href="#about">About Me</NavigationMenuLink>
        </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  export default Navbar;