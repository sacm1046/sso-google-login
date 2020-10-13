import React, { FC } from 'react';
import Logo from '../../statics/GoogleLogo.png';
import { StyledButton } from './style';

interface Props {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const GoogleButton: FC<Props> = ({ text, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <img src={Logo} alt="Google" />
            <span>{text}</span>
        </StyledButton>
    )
}

export default GoogleButton
