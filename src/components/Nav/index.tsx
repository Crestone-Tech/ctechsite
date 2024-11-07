import React, { useState } from "react";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useMediaQuery,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./nav.css";

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:480px)");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerList = (
    <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <ListItem disablePadding>
        <ListItemButton component="a" href="./about">
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="./team">
          <ListItemText primary="Team" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="./projects">
          <ListItemText primary="Projects" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="./contact">
          <ListItemText primary="Contact Us" />
        </ListItemButton>
      </ListItem>
    </List>
  );
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        width: "100%",
      }}
    >
      {isMobile ? (
        <div className="icon-container">
          <IconButton
            onClick={toggleDrawer(true)}
            edge="end"
            aria-label="menu"
            sx={{ color: "white", ml: "auto" }}
          >
            <MenuIcon style={{ fontSize: "2rem" }} />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {drawerList}
          </SwipeableDrawer>
        </div>
      ) : (
        <ul>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./team">Team</a>
          </li>
          <li>
            <a href="./projects">Projects</a>
          </li>
          <li>
            <a href="./contact">Contact Us</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

// export default function Nav() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="./about">About</a>
//         </li>
//         <li>
//           <a href="./team">Team</a>
//         </li>
//         <li>
//           <a href="./projects">Projects</a>
//         </li>
//         <li>
//           <a href="./contact">Contact Us</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
