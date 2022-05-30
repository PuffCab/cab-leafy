import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export default function Footer() {
  const [value, setValue] = useState(null);
  const { user, setUser } = useContext(AuthContext);
  const login = () => {
    console.log(user);
    setUser({ userName: "Lina" });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ bgcolor: "lightgreen" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/details"
          label="Browse Plants"
          icon={<SpaOutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/login"
          label="Login"
          icon={<PersonOutlineOutlinedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/chat"
          label="Chat"
          icon={<ChatOutlinedIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}

/*    {
          user ? (
            <BottomNavigationAction
              onClick={logout}
              label="Logout"
              icon={<PersonOutlineOutlinedIcon />}
            />
          ) : (
            <BottomNavigationAction
              onClick={login}
              label="Login"
              icon={<PersonOutlineOutlinedIcon />}
            />
          );
        } */
