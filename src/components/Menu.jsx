import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const buttonStyle = {
  background: "var(--secondary-color)",
  color: "var(--primary-color)",
  border: "none",
  padding: "2px ",
  fontSize: "1rem",
  cursor: "pointer",
};
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        style={buttonStyle}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Resume
      </button>
      <div className="pl-2">
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          // MenuListProps={{
          //   "aria-labelledby": "basic-button",
          // }}
        >
          <MenuItem onClick={handleClose}>English</MenuItem>
          <MenuItem onClick={handleClose}>Français</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
