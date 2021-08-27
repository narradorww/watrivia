import React from 'react';
import logo from '../../assets/img/logo.svg'
import avatar from '../../assets/img/avatar.jpg'
import { AvatarStyle, Logo, Wrapper } from './styled';
import Avatar from '@material-ui/core/Avatar'




export default function Header() {

return(
    <Wrapper>
    <Logo src={logo} alt="Logo da WA"/> 
    <h1> WA Trivia</h1>
    <AvatarStyle><Avatar src={avatar} alt="Avatar do Jogador" /></AvatarStyle>
    </Wrapper>
    )

    
}