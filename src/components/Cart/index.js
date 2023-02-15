import React, { useState } from "react";
import { useSelector } from "react-redux";

import { CartArea,
         CartHeader,
         CartIcon,
         CartText,
         CartBody 
} from './styled';

export default () => {
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }


    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assests/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show && 
                    <CartIcon  src="/assests/down.png"/>
                }
            </CartHeader>
            <CartBody show={show}>
                <div style={{width: 50, height: 300,  backgroundColor: 'white'}}></div>
            </CartBody>
        </CartArea>
    );
}