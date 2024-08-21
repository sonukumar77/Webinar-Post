import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { InputLabel, TextField } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import VideocamIcon from "@mui/icons-material/Videocam";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 700,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 8,
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
  handleModalEdit,
  editId,
  errors,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={style}>
        {/* Modal Header */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #E3E7EB",
            pb: 1,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Webinar
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", fontSize: 24 }}
            onClick={handleClose}
          />
        </Box>
        {/* Modal Body */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            marginTop: 2,
            marginLeft: -6,
          }}
        >
          <GroupIcon
            sx={{ stroke: "black", color: "white", strokeWidth: 1.5 }}
          />
          <Typography gutterBottom variant="h6" component="div" sx={{ m: 0 }}>
            Instructor Details
          </Typography>
        </Box>
        <Box component="div">
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
                  error={!!errors.instructorName}
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
                  error={!!errors.instructorRole}
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
                  error={!!errors.instructorCompany}
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
                  error={!!errors.topic}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              marginTop: 2,
              marginLeft: -6,
            }}
          >
            <VideocamIcon
              sx={{ stroke: "black", color: "white", strokeWidth: 1.5 }}
            />
            <Typography gutterBottom variant="h6" component="div" sx={{ m: 0 }}>
              Webinar Details
            </Typography>
          </Box>
          <Box sx={{ marginTop: 3 }}>
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
                error={!!errors.webinarTitle}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
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
                  error={!!errors.webinarStartDate}
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
                  error={!!errors.webinarStartTime}
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
                  error={!!errors.webinarEndTime}
                />
              </Box>
            </Box>
          </Box>

          {/* Modal Footer */}
          <Box
            component="div"
            sx={{ borderTop: "1px solid #E3E7EB", pt: 2, mt: 2 }}
          >
            {editId ? (
              <Button
                size="small"
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: "#0D51F1",
                  borderRadius: "10px",
                  textTransform: "initial",
                }}
                onClick={() => handleModalEdit(inputData)}
              >
                Edit Webinar
              </Button>
            ) : (
              <Button
                size="small"
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: "#0D51F1",
                  borderRadius: "10px",
                  textTransform: "initial",
                  padding: "0.5rem 1.5rem",
                }}
                onClick={handleCreateWebinar}
              >
                Create Webinar
              </Button>
            )}
            <Button
              size="small"
              color="primary"
              sx={{
                borderRadius: "30px",
                textTransform: "inherit",
                color: "#0D51F1",
                fontWeight: "bold",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
