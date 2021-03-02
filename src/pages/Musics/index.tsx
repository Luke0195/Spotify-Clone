import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Container, Header, HeaderContent} from './styles'


const  Music:React.FC  = () =>{
  return(
    <Container>
      <Header>
        <Feather name="chevron-left" size={25} color="#fff"/>
        <HeaderContent>
          <Feather name="heart" size={25} color="#fff"/>
          <Feather name="more-vertical" size={25} color="#fff"/>
        </HeaderContent>
      </Header>
    </Container>
  )
}


export default Music;
