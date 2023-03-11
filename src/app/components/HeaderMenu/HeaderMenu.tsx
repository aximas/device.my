'use client'

import Link from 'next/link'
import React from 'react'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './HeaderMenu.module.scss'
import Fade from '@mui/material/Fade';

const menuData = [
    {
        url: '/',
        name: 'Main'
    },
    {
        url: '/geo',
        name: 'Geo'
    },
    {
        url: '/gyroscope',
        name: 'Gyroscope'
    },
    {
        url: '/accelerometer',
        name: 'Accelerometer'
    },
    {
        url: '/vibrate',
        name: 'Vibrate'
    },
    {
        url: '/battery',
        name: 'Battery'
    },
    {
        url: '/light',
        name: 'Light'
    },
    {
        url: '/proximity',
        name: 'Proximity'
    }
]

const HeaderMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <nav className={styles.nav}>
        <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Menu
        </Button>
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'fade-button'
            }}
            TransitionComponent={Fade}
        >
            {menuData.map(menu => {
                return <MenuItem onClick={handleClose} className={styles.menuItem} key={menu.url}>
                    <Link href={menu.url} className={styles.menuLink}>
                        {menu.name}
                    </Link>
                </MenuItem>
            })}
        </Menu>
    </nav>
}

export default HeaderMenu