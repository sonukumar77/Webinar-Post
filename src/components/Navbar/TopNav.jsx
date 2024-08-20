import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import SelectInput from "../SelectInput/SelectInput";

export default function TopNav({
  handleAddWebinar,
  handleSelectInput,
  topicList,
}) {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
      <Navbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Webinar
        </Typography>
        <Button variant="contained" onClick={handleAddWebinar}>
          Add Webinar
        </Button>
      </Navbar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Search Box
        </Typography>
        <SelectInput
          handleSelectInput={handleSelectInput}
          topicList={topicList}
        />
      </Box>
    </Box>
  );
}
