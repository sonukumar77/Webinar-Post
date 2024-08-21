import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar({ children }) {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #E3E7EB",
        }}
      >
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </Box>
  );
}
