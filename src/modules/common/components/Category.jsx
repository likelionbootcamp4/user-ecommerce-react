import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const categoryOptions = [
  {
    imageUrl:
      "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/laptop.avif",
    title: "Laptops",
    href: "/laptops",
  },
  {
    imageUrl:
      "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/smartphones.avif",
    title: "Smartphones",
    href: "/smartphones",
  },
  {
    imageUrl:
      "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/pc.avif",
    title: "PC",
    href: "/pc",
  },
  {
    imageUrl:
      "https://lnfdkaooikvjxeghvcba.supabase.co/storage/v1/object/public/ecommerce/banners/tablet.avif",
    title: "Tablets",
    href: "/tablets",
  },
];

export default function Category() {
  return (
    <Container>
      <ImageList>
        {categoryOptions.map((item) => (
          <Link key={item.href} to={item.href} style={{ display: "flex" }}>
            <ImageListItem>
              <img
                src={`${item.imageUrl}?w=248&fit=crop&auto=format`}
                srcSet={`${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Container>
  );
}
