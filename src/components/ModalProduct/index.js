import React from "react";

import { 
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductIngredients, 
    ProductName,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice
} from "./styled";

export default ({ data }) => {
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage src="/assests/minus.png" />
                            <ProductQtText>9</ProductQtText>
                            <ProductQtImage src="/assests/plus.png" />
                        </ProductQuantity>
                        <ProductPrice>
                            R${data.price}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>

            <ProductButtons>
                <ProductButton small={true}>Cancelar</ProductButton>
                <ProductButton>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}