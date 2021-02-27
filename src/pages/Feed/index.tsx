import React from 'react';
import { Container, Wrapper, Header,Title} from './styles';

import TrendingComponent from '../../components/Trending'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Treding from '../../components/Trending';
const Feed:React.FC = () =>{
  return(

    <Wrapper>
      <Container>
        <Header>
            <EvilIcons  name="gear" color="#fff" size={32}/>
        </Header>
          <Title> Good Afternoon </Title>
          <Treding/>

      </Container>
    </Wrapper>

  )
}

export default Feed;
