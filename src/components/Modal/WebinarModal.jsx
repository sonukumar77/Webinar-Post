import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InputLabel, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 700,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export default function WebinarModal({
  open,
  handleClose,
  handleInput,
  inputData,
  handleCreateWebinar,
  isEdit,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Modal Header */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid gray",
            pb: 1,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Webinar
          </Typography>
          <span
            style={{ cursor: "pointer", fontSize: 24 }}
            onClick={handleClose}
          >
            X
          </span>
        </Box>
        {/* Modal Body */}
        <Box component="div">
          <Typography gutterBottom variant="h6" component="div">
            Instructor Details
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 3,
              width: "100%",
            }}
          >
            {/* Modal Body Left content */}
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box component="div" sx={{ width: "100%" }}>
                <InputLabel sx={{ color: "black" }} required>
                  Instructor Name
                </InputLabel>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Type the instructor name"
                  name="instructorName"
                  value={inputData.instructorName}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
              <Box component="div">
                <InputLabel sx={{ color: "black" }} required>
                  Instructor Role
                </InputLabel>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Type the instructor role"
                  name="instructorRole"
                  value={inputData.instructorRole}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
              <Box component="div">
                <InputLabel sx={{ color: "black" }} required>
                  Instructor company
                </InputLabel>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Type the instructor company"
                  name="instructorCompany"
                  value={inputData.instructorCompany}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
            </Box>
            {/* Modal Body Right content */}
            <Box sx={{ width: "50%" }}>
              <Box component="div">
                <InputLabel sx={{ color: "black" }} required>
                  Topic
                </InputLabel>
                <TextField
                  type="text"
                  fullWidth
                  placeholder="Type the topic"
                  name="topic"
                  value={inputData.topic}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginTop: 3 }}>
            <Typography gutterBottom variant="h6" component="div">
              Webinar Details
            </Typography>
            <Box component="div" sx={{ mb: 2 }}>
              <InputLabel sx={{ color: "black" }} required>
                Webinar Title
              </InputLabel>
              <TextField
                type="text"
                fullWidth
                placeholder="Type the instructor name"
                name="webinarTitle"
                value={inputData.webinarTitle}
                onChange={(e) => handleInput(e)}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box component="div" sx={{ width: "100%" }}>
                <InputLabel sx={{ color: "black" }} required>
                  Start Date
                </InputLabel>
                <TextField
                  type="date"
                  placeholder="Type start date"
                  name="webinarStartDate"
                  value={inputData.webinarStartDate}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
              <Box component="div" sx={{ width: "100%" }}>
                <InputLabel sx={{ color: "black" }} required>
                  Start Time
                </InputLabel>
                <TextField
                  type="time"
                  name="webinarStartTime"
                  value={inputData.webinarStartTime}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
              <Box component="div" sx={{ width: "100%" }}>
                <InputLabel sx={{ color: "black" }} required>
                  End Time
                </InputLabel>
                <TextField
                  type="time"
                  name="webinarEndTime"
                  value={inputData.webinarEndTime}
                  onChange={(e) => handleInput(e)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Modal Footer */}
        <Box component="div" sx={{ borderTop: "1px solid gray", pt: 2, mt: 2 }}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            sx={{ textTransform: "inherit" }}
            onClick={handleCreateWebinar}
          >
            {isEdit ? "Edit Webinar" : "Create Webinar"}
          </Button>
          <Button
            size="small"
            color="primary"
            sx={{ textTransform: "inherit" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
