import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ISmallProductCardProp {
  name: string;
  price: number;
  images: string[];
  brand: string;
}

export const SmallProductCard: React.FC<ISmallProductCardProp> = (
  props: ISmallProductCardProp
) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={200}
          image={
            props.images.length
              ? props.images[0]
              : `https://res.cloudinary.com/daz0uw1rn/image/upload/v1692075597/yury-ecommerce/assets/pkucaglcoo9be8ger4pb.png`
          }
          alt={props.name}
          sx={{ minWidth: "100%" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
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
