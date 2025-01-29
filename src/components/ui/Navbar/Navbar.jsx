import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import { Link } from 'react-router-dom';
import {pages} from '../../../constants'
import Search from '../Search';
import AppContext from '../../../context';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Navbar() {

  const {userItems, } = React.useContext(AppContext);  

  React.useEffect(() => {
            localStorage.setItem('userItems', JSON.stringify(userItems));
        }, [userItems]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <MovieFilterOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            <Typography 
              variant="h6"
              component={Link}
              to='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                flexGrow: 20
              }}
            > movie-portal</Typography>

            <Search />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}s
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' },}}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu} >
                  <Link key={page.name} to={page.url}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
            <Typography
            variant="h7"
            flexWrap='wrap'
            to='/'
            component={Link}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            movie-portal
          </Typography>
          
          
            <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
                href= '/like'              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                Like
              </Button>
              <Button
                href= '/user'              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <AccountCircleIcon />
                </IconButton>
                {userItems.map(user => user.session && user.email) }
                
              </Button>
            {/* {pages.map((page) => (
              <Button
              key={page.name}
                href= {
                  page.url
                }                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <Icon  iconName={page.icon} />
                </IconButton>
                {// {userItems.map(user => user.session && user.email)}
                 }
                {page.name}
              </Button>
            ))} 
            */}
            </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
