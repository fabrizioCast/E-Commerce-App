// Next JS
import Slider from "components/Slider";
import Link from "next/link";
import { useState } from "react";

// Styled Components
import {
  ProducDetails,
  ProducInfoWrapper,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
  SpinnerWrapper,
  ProductCategoryItem,
  ProductCategoryWrapper,
  ProductSellerAvatar,
  ProductSellerInfo,
  ProductSellerName,
  ProductShopDetails,
} from "./styles";
import { ProductPriceValue } from "./styles";
import { ProductSellerTitle } from "./styles";
import { ProductAddToCart } from "./styles";

import Spinner from "components/Spinner";
import RelatedPosts from "./RelatedPosts";

const ProducInfo = ({
  title,
  price,
  author,
  img,
  description,
  categories,
  relatedPosts,
}) => {
  const [showSlider, setShowSlider] = useState(false);
  const [imgLoading, setImgLoading] = useState(true); // false = loaded, true = loading

  return (
    <>
      <ProducInfoWrapper>
        {imgLoading && (
          <SpinnerWrapper>
            <Spinner width="100px" heigth="100px" border="4px" />
          </SpinnerWrapper>
        )}
        <ProductImage
          visible={imgLoading}
          src={img[0].url}
          alt="product"
          onClick={() => setShowSlider(true)}
          onLoad={() => setImgLoading(false)}
        />

        <ProducDetails>
          <ProductTitle>{title}</ProductTitle>

          <ProductCategoryWrapper>
            {categories.map((el, index) => (
              <ProductCategoryItem key={index}>{el}</ProductCategoryItem>
            ))}
          </ProductCategoryWrapper>

          <ProductDescription>{description}</ProductDescription>
        </ProducDetails>

        <div>
          <ProductShopDetails>
            <ProductSellerTitle>Oferta del vendedor</ProductSellerTitle>
            <Link href={`/profile/${author.id}`}>
              <ProductSellerInfo title="Ir al perfil">
                <ProductSellerAvatar
                  src={author.photoURL}
                  alt="avatar"
                  referrerpolicy="no-referrer"
                />
                <ProductSellerName>{author.name}</ProductSellerName>
              </ProductSellerInfo>
            </Link>

            <ProductPrice>
              Precio
              <ProductPriceValue>${price}</ProductPriceValue>
            </ProductPrice>

            <ProductAddToCart>Agregar al carrito</ProductAddToCart>
          </ProductShopDetails>
        </div>
      </ProducInfoWrapper>

      {showSlider && <Slider img={img} setShowSlider={setShowSlider} />}
    </>
  );
};

export default ProducInfo;
