import React from "react";
import { 
    Container,
    ProductPhotoArea,
    ProductInfoArea,
    ProductButtonArea,
    ProductPhoto,
    ProductPrice,
    ProductName,
    ProductIngredients,
    ProductButton
} from "./styled";

export default ({data}) => {
    return (
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>{data.price}</ProductPrice>
                <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assests/next.png" />
            </ProductButtonArea>
        </Container>
    )
}