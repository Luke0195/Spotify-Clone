import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import RadarImage from '../../assets/radar.jpg';

import {Wrapper, Header,Main,MainImage,MainText,MainTitle,Container} from './styles';
export const Feed:React.FC  = ()  =>{
  return(
    <>
      <Wrapper>
        <Header>
          <AntDesign  name="user" size={24} color="#fff"/>
          <EvilIcons name="gear" size={30} color="#fff"/>
        </Header>
        <Container>
        <Main>
          <MainTitle> Made for you </MainTitle>
          <MainImage source={RadarImage} resizeMode="cover"/>
          <MainText>
            Never miss a new release! Catch all the latest music from artists you care about, plus now ...
          </MainText>
        </Main>
        </Container>
      </Wrapper>
    </>
  )
}


export default Feed;
