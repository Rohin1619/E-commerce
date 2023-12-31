import React, { useState, forwardRef } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, IconButton, Typography, Container, Avatar, Button, Tooltip, Link } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Dialog, Slide, Badge, List } from '@mui/material';
import { useSelector } from 'react-redux';
import './navbar.css';
import Cart from '../pages/Cart';
import { useAuth0 } from '@auth0/auth0-react';


const pages = [
    {
        label: 'Products',
        link: '/',
    },
    {
        label: 'Pricing',
        link: '/',
    },
    {
        label: 'Blog',
        link: '/',
    }
]
const settings = ['Profile', 'Account', 'Dashboard'];

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const cartItems = useSelector((state) => state.cart.items);
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

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

    const calculateTotalItemCount = () => {
        let totalCount = 0;
        cartItems.forEach(() => {
            totalCount++;
        });
        return totalCount;
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        console.log("asass")
        loginWithRedirect()
    }

    const handleLogout = () => {
        logout();
    };
    
    return (
        <>
            <AppBar position="static" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={ { xs: 'flex' } }>

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
                                    <MenuItem key={ page.label } onClick={ handleCloseNavMenu }>
                                        <Typography textAlign="center">{ page.label }</Typography>
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
                                <Link
                                    href="/"
                                    key={ page.label }
                                    onClick={ handleCloseNavMenu }
                                    sx={ { my: 2, color: 'white', display: 'block', m: 2 } }
                                >
                                    { page.label }
                                </Link>
                            )) }
                        </Box>
                        <IconButton
                            aria-label="cart"
                            sx={ { mr: 2 } }
                            onClick={ handleClickOpen }>
                            <StyledBadge badgeContent={ calculateTotalItemCount() } color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                        <Dialog
                            fullScreen
                            open={ open }
                            onClose={ handleClose }
                            TransitionComponent={ Transition }
                        >
                            <AppBar sx={ { position: 'relative' } }>
                                <Toolbar>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={ handleClose }
                                        aria-label="close"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography sx={ { ml: 2, flex: 1 } } variant="h6" component="div">
                                        Products
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            <List>
                                <Cart onCloseDialog={ handleClose } />
                            </List>
                        </Dialog>
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

                        { isAuthenticated ? ( 
                            <Tooltip title="Open settings" sx={ { ml: 2, justifyContent: "right", display: "flex" } }>
                                <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0, justifyContent: "right", display: "flex" } }>
                                    <Avatar alt="Remy Sharp" src={ user.picture } />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <IconButton
                                aria-label="login"
                                sx={ { mr: 2 } }
                                onClick={ handleLogin }
                            >
                                <LoginIcon />
                            </IconButton>
                        ) }
                        { isAuthenticated && ( 
                            <Tooltip title="Logout" sx={ { ml: 4, justifyContent: "right", display: "flex" } }>
                                <IconButton onClick={ handleLogout } sx={ { p: 0, justifyContent: "right", display: "flex", ml:2 } }>
                                    <LogoutIcon />
                                </IconButton>
                            </Tooltip>
                        ) }
                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
};
export default NavBar;
