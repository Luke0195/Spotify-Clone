import React from 'react';
import { Container, Wrapper, Header,Title} from './styles';

import TrendingComponent from '../../components/Trending'
import RecentyComponent from '../../components/RecentPlayed'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Feed:React.FC = () =>{
  return(

    <Wrapper>
      <Container>
        <Header>
            <EvilIcons  name="gear" color="#fff" size={32}/>
        </Header>
          <Title> Good Afternoon </Title>
          <TrendingComponent/>
          <RecentyComponent/>


      </Container>
    </Wrapper>

  )
}

export default Feed;
