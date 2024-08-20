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
    <Card sx={{ maxWidth: 345 }}>
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
          }}
        >
          <Box component="div">
            <Typography gutterBottom variant="h6" component="div">
              {instructorName}
            </Typography>
            <Typography variant="subtitle1">{instructorRole}</Typography>
            <Typography variant="body2">{instructorCompany}</Typography>
          </Box>
          <Avatar
            sx={{ bgcolor: "green[500]", width: 56, height: 56 }}
            variant="rounded"
            src="https://picsum.photos/300/500"
            alt="card-image"
          ></Avatar>
        </Box>

        <CardContent>
          <Typography variant="subtitle1" style={{ color }}>
            {topic}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {webinarTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${formatDate(
              webinarStartDate
            )},${webinarStartTime} - ${webinarEndTime}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="error"
          variant="contained"
          sx={{ borderRadius: "30px", textTransform: "inherit" }}
          onClick={() => handleDeleteWebinar(id)}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          sx={{ borderRadius: "30px", textTransform: "inherit" }}
          onClick={() => handleEditWebinar(id)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
