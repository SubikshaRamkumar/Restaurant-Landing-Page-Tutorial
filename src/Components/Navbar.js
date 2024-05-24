// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import Logo from "../Assets/Logo.svg";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import ChatIcon from "@mui/icons-material/Chat";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//   ];

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="AeroInspect Logo" />
//       </div>
//       <div className="navbar-links-container">
//         <a href="/" >Home</a>
//         <a href="aero/about">About</a>
//         <a href="aero/contact">Contact</a>
//         <button className="primary-button">Learn More</button>
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  

  // const handleAboutClick = () => {
  //   console.log("about clicked")

  //   const aboutSection = document.getElementById("about-section");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  //   setOpenMenu(false);
  // };

  const handleAboutClick = () => {
    // Navigate to the home page first
    window.location.href = "/";
    // Scroll to the about section after a delay to ensure the home page is loaded
    setTimeout(() => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Adjust the delay as needed
    setOpenMenu(false);
  };
  const handleContactClick = () => {
    // Navigate to the home page first
    window.location.href = "/";
    // Scroll to the about section after a delay to ensure the home page is loaded
    setTimeout(() => {
      const aboutSection = document.getElementById("contact-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // Adjust the delay as needed
    setOpenMenu(false);
  };
  
  const handleHomeClick = () => {
    console.log("home clicked")
    const homeSection = document.getElementById("home-section");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: handleHomeClick,
    },
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: handleAboutClick,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      onClick: handleContactClick,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="AeroInspect Logo" />
      </div>
      <div className="navbar-links-container">
        <a href="/" onClick={handleHomeClick}>Home</a>
        <a href="#about-section">About</a>
        <a href="#contact-section">Contact</a>
        <button className="primary-button">Learn More</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
