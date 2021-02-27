import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import TrendingComponent from '../../components/Trending';
import RecentyComponent from '../../components/RecentPlayed';
import MadeForYou from '../../components/MadeForYou'

import { Container, Wrapper, Header,Title} from './styles';

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
          <MadeForYou/>


      </Container>
    </Wrapper>

  )
}

export default Feed;
