import Link from "next/link";
import { ProductCreatedAt } from "./styles";
import {
  ProductImage,
  ProductImageWrapper,
  ProductCardWrapper,
  ProductName,
  ProductInfoWrapper,
  ProductAuthor,
  ProductPriceWrapper,
  ProductPrice,
  ProductType,
} from "./styles";

const ProductCard = ({
  id,
  title,
  author,
  authorID,
  createdAt,
  price,
  image,
  auction = false,
}) => {
  return (
    <Link href={`/tienda/${id}`}>
      <a>
        <ProductCardWrapper>
          <ProductImageWrapper>
            <ProductImage
              src={image}
              width={100}
              height={60}
              layout="responsive"
              objectFit="cover"
              alt="Image Product"
              priority={true}
            />
          </ProductImageWrapper>
          <ProductInfoWrapper>
            <ProductName>{title}</ProductName>
            <Link href={`/profile/${authorID}`}>
              <ProductAuthor>{author}</ProductAuthor>
            </Link>
            <ProductCreatedAt>{createdAt}</ProductCreatedAt>
          </ProductInfoWrapper>
          <ProductPriceWrapper>
            <ProductType>
              {auction ? "Subasta abierta" : "Precio fijo"}
            </ProductType>
            <ProductPrice id="price">{`${price} USD`}</ProductPrice>
          </ProductPriceWrapper>
        </ProductCardWrapper>
      </a>
    </Link>
  );
};

export default ProductCard;
