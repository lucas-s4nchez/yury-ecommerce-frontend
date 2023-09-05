import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { formatPrice } from "../../helpers";

interface ILargeProductCardProp {
  name: string;
  price: number;
  images: string[];
  brand: string;
}

export const LargeProductCard: React.FC<ILargeProductCardProp> = (
  props: ILargeProductCardProp
) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardActionArea
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <CardMedia
          component="img"
          image={
            props.images.length
              ? props.images[0]
              : `https://res.cloudinary.com/daz0uw1rn/image/upload/v1692075597/yury-ecommerce/assets/pkucaglcoo9be8ger4pb.png`
          }
          alt={props.name}
          sx={{
            width: { xs: 124, sm: 194, md: 230 },
            height: { xs: 124, sm: 194, md: 230 },
          }}
        />
        <CardContent sx={{ padding: "16px 8px 16px 0" }}>
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
