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
import ContactDialog from "../ContactAnchor";

interface NavProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  teamRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export default function Nav({
  aboutRef,
  teamRef,
  projectsRef,
  contactRef,
}: NavProps) {
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

  const scrollToSection = (section: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      team: teamRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const sectionRef = refMap[section];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawerList = (
    <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <ListItem disablePadding>
        <ListItemButton onClick={() => (window.location.href = "/")}>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => scrollToSection("about")}>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => scrollToSection("team")}>
          <ListItemText primary="Team" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => scrollToSection("projects")}>
          <ListItemText primary="Projects" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => scrollToSection("contact")}>
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
            <a onClick={() => scrollToSection("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("team")}>Team</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
          </li>
          <li>
            <ContactDialog />
          </li>
        </ul>
      )}
    </nav>
  );
}
