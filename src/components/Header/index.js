import React, {useState} from 'react';
import { Container, Logo, SearchInput } from './styled';

export default () => {
    const [inputActive, setInputActive] = useState(false);

    const handleInputFocus = () => {
        setInputActive(true)
    }

    const handleInputBlur = () => {
        setInputActive(false)
    }



    return (
        <Container>
            <Logo src="/assests/logo.png"/>
            <SearchInput 
            type="text" 
            placeholder="Digite um produto..."
            active={inputActive}
            onFocus={handleInputFocus} 
            onBlur={handleInputBlur}
            />
        </Container>
    );
}