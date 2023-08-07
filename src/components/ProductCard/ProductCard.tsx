import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 350, marginX: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/hero.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard dsadsan asjd sdjad
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $1.200,00
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};
