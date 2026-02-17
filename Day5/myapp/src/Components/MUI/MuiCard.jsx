import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import profileImage from "../../assets/image.png";

const Student = [
  {
    name: "user",
    email: "user@gmail.com",
    phone: "1234567890",
    address: "Mangalore",
    profileImage: profileImage,
  },
];

export default function MediaCard() {
  return (
    <div>
      {Student.map((student) => (
        <Card sx={{ maxWidth: 345 }} key={student.email}>
          <CardMedia
            sx={{ height: 140 }}
            image={student.profileImage}
            title={student.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {student.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Email: {student.email}
              <br />
              Phone: {student.phone}
              <br />
              Address: {student.address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
