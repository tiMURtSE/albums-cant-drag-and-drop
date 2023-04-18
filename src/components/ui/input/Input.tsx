import React from 'react';
import StyledInput from './Input.styled';

type Props = {};

const Input = (props: Props) => {
    return (
        <StyledInput>
            <input className='input' type="text" />
        </StyledInput>
    );
};

export default Input;