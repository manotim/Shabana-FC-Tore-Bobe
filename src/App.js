import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  styled,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ArticleIcon from '@mui/icons-material/Article';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';

import News from './components/News';
import Fans from './components/Fans';
import Fixtures from './components/Fixtures';
import Home from './components/Home';
import Teams from './components/Teams';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Tickets from './components/Tickets';
import PaymentPage from './components/PaymentPage';

const theme = createTheme();

const NavWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  marginLeft: theme.spacing(3),
  '&.active': {
    color: '#f18c06',
  },
}));

const MenuButton = styled(MenuIcon)(({ theme }) => ({
  color: '#fff',
  marginLeft: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const MobileNav = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const App = () => {
  const [showNavLinks, setShowNavLinks] = React.useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <AppBar position="static" sx={{ backgroundColor: '#d00027', marginBottom: theme.spacing(2) }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" component="h1" sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(1), color: '#fff', textDecoration: 'none' }}>
                <SportsSoccerIcon fontSize="large" />
                Shabana FC
              </Typography>
              <NavWrapper>
                <NavLinkStyled exact to="/" activeClassName="active">
                  <HomeIcon />
                  Home
                </NavLinkStyled>
                <NavLinkStyled exact to="/news" activeClassName="active">
                  <ArticleIcon />
                  News
                </NavLinkStyled>
                <NavLinkStyled exact to="/teams" activeClassName="active">
                  <SportsSoccerIcon />
                  Teams
                </NavLinkStyled>
                <NavLinkStyled exact to="/tickets" activeClassName="active">
                  <ConfirmationNumberIcon />
                  Tickets
                </NavLinkStyled>
                <NavLinkStyled exact to="/login" activeClassName="active">
                  <AccountCircleIcon />
                  Login
                </NavLinkStyled>
                <NavLinkStyled exact to="/signup" activeClassName="active">
                  <AccountCircleIcon />
                  Sign Up
                </NavLinkStyled>
                <NavLinkStyled exact to="/payment" activeClassName="active">
                  <PaymentIcon />
                  Payment
                </NavLinkStyled>
                <NavLinkStyled exact to="/cart" activeClassName="active">
                  <ShoppingCartIcon />
                  Cart
                </NavLinkStyled>
              </NavWrapper>
              {!showNavLinks && (
                <MenuButton onClick={toggleNavLinks} style={{ display: showNavLinks ? 'none' : 'block' }} />
              )}
            </Toolbar>
            {showNavLinks && (
              <MobileNav>
                {/* Drawer for mobile view */}
                <Drawer
                  anchor="right"
                  open={showNavLinks}
                  onClose={toggleNavLinks}
                  sx={{ width: '200px' }}
                >
                  <List>
                    <ListItem button component={NavLink} to="/" onClick={toggleNavLinks}>
                      <ListItemIcon><HomeIcon /></ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/news" onClick={toggleNavLinks}>
                      <ListItemIcon><ArticleIcon /></ListItemIcon>
                      <ListItemText primary="News" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/teams" onClick={toggleNavLinks}>
                      <ListItemIcon><SportsSoccerIcon /></ListItemIcon>
                      <ListItemText primary="Teams" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/tickets" onClick={toggleNavLinks}>
                      <ListItemIcon><ConfirmationNumberIcon /></ListItemIcon>
                      <ListItemText primary="Tickets" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/login" onClick={toggleNavLinks}>
                      <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                      <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/signup" onClick={toggleNavLinks}>
                      <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                      <ListItemText primary="Sign Up" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/payment" onClick={toggleNavLinks}>
                      <ListItemIcon><PaymentIcon /></ListItemIcon>
                      <ListItemText primary="Payment" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/cart" onClick={toggleNavLinks}>
                      <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                      <ListItemText primary="Cart" />
                    </ListItem>
                  </List>
                  <IconButton onClick={toggleNavLinks} sx={{ ml: 'auto' }}>
                    <CloseIcon />
                  </IconButton>
                </Drawer>
              </MobileNav>
            )}
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route path="/fans/*" element={<Fans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
