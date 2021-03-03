import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {Container, Wrapper, Header, HeaderTitle, Section,SectionTitle,SectionButton,SectionButtonText,} from './styles'

import LikeSongs from '../../components/Likesongs';

const  Music:React.FC  = () =>{
  return(
    <Wrapper>
    <Container>
      <Header>
        <Feather name="arrow-left" color="#fff" size={25}/>
        <HeaderTitle> Músicas Curtidas </HeaderTitle>
        <Feather name="more-vertical" color="#fff" size={25}/>
      </Header>
      <Section>
        <SectionTitle> Músicas Curtidas </SectionTitle>
        <SectionButton>
          <SectionButtonText> ordem aleatória </SectionButtonText>
        </SectionButton>
      </Section>
      <LikeSongs/>
    </Container>

    </Wrapper>
  )
}


export default Music;
