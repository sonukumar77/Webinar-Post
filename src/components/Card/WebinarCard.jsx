import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { formatDate } from "../../utils/common";
import { RANDOM_AVATAR_URL } from "../../constants/data";

export default function WebinarCard({
  id,
  instructorName,
  instructorRole,
  instructorCompany,
  topic,
  color,
  webinarTitle,
  webinarStartDate,
  webinarStartTime,
  webinarEndTime,
  handleDeleteWebinar,
  handleEditWebinar,
}) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        width: "33%",
        padding: 2,
        margin: "auto",
        borderRadius: "15px",
        border: "1px solid #E3E7EB",
        boxShadow: "none",
      }}
    >
      <CardActionArea>
        <Box
          component="section"
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: color ? color : "purple",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <Box component="div">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ margin: 0 }}
            >
              {instructorName}
            </Typography>
            <Typography variant="subtitle1">{instructorRole}</Typography>
            <Typography variant="subtitle1">{instructorCompany}</Typography>
          </Box>
          <Avatar
            sx={{ bgcolor: "green[500]", width: 56, height: 56 }}
            variant="rounded"
            src={RANDOM_AVATAR_URL}
            alt="card-image"
          />
        </Box>

        <CardContent sx={{ p: 0, mt: 2 }}>
          <Typography variant="subtitle1" style={{ color }}>
            {topic}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ margin: 0, fontWeight: "bold" }}
          >
            {webinarTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${formatDate(
              webinarStartDate
            )},${webinarStartTime} - ${webinarEndTime}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ mt: 2 }}>
        <Button
          size="small"
          variant="contained"
          sx={{
            borderRadius: "30px",
            textTransform: "inherit",
            backgroundColor: "#F9E8E8",
            color: "#D14040",
            fontWeight: "bold",
            boxShadow: "none",
            ":hover": {
              backgroundColor: "#F9E8E8",
              boxShadow: "none",
            },
          }}
          onClick={() => handleDeleteWebinar(id)}
        >
          Delete
        </Button>
        <Button
          size="small"
          sx={{
            borderRadius: "30px",
            textTransform: "inherit",
            color: "#0D51F1",
            fontWeight: "bold",
          }}
          onClick={() => handleEditWebinar(id)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
