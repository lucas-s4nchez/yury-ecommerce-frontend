import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { formatPrice } from "../../helpers";

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
        <CardContent sx={{ paddingY: 2 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textTransform: "capitalize" }}
          >
            {props.name}
          </Typography>
          <Typography component="span" color="text.secondary" fontSize={24}>
            {formatPrice(props.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
