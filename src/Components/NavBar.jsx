import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { CreateApi } from '@reduxjs/toolkit/query/react'

import './navbar.css';
import { Icon } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <>
            <AppBar position="static" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={ { xs: 'flex'}}>

                        <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar-nav"
                                aria-haspopup="true"
                                onClick={ handleOpenNavMenu }
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar-nav"
                                anchorEl={ anchorElNav }
                                anchorOrigin={ {
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                } }
                                keepMounted
                                transformOrigin={ {
                                    vertical: 'top',
                                    horizontal: 'left',
                                } }
                                open={ Boolean(anchorElNav) }
                                onClose={ handleCloseNavMenu }
                                sx={ {
                                    display: { xs: 'block', md: 'none' },
                                } }
                            >
                                { pages.map((page) => (
                                    <MenuItem key={ page } onClick={ handleCloseNavMenu }>
                                        <Typography textAlign="center">{ page }</Typography>
                                    </MenuItem>
                                )) }
                            </Menu>
                        </Box>

                        <Avatar alt="Remy Sharp" src="/Icon/mugiwara.png" />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={ {
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            } }
                        >
                            FairyTail
                        </Typography>


                        <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
                            { pages.map((page) => (
                                <Button
                                    key={ page }
                                    onClick={ handleCloseNavMenu }
                                    sx={ { my: 2, color: 'white', display: 'block' } }
                                >
                                    { page }
                                </Button>
                            )) }
                        </Box>
                        <IconButton aria-label="cart" sx={{mr:2}}>
                            <StyledBadge badgeContent={ 4 } color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                        <Box sx={ { flexGrow: 0 } }>

                            <Menu
                                sx={ { mt: '45px' } }
                                id="menu-appbar-user"
                                anchorEl={ anchorElUser }
                                anchorOrigin={ {
                                    vertical: 'top',
                                    horizontal: 'right',
                                } }
                                keepMounted
                                transformOrigin={ {
                                    vertical: 'top',
                                    horizontal: 'right',
                                } }
                                open={ Boolean(anchorElUser) }
                                onClose={ handleCloseUserMenu }
                            >
                                { settings.map((setting) => (
                                    <MenuItem key={ setting } onClick={ handleCloseUserMenu }>
                                        <Typography textAlign="center">{ setting }</Typography>
                                    </MenuItem>
                                )) }
                            </Menu>
                        </Box>
                        <Tooltip title="Open settings" sx={ { ml: 2, justifyContent: "right", display: "flex" } }>
                            <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0, justifyContent: "right", display: "flex" } }>
                                <Avatar alt="Remy Sharp" src="/Icon/Ichigo.jpeg" />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default NavBar;
