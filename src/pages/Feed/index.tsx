import React from  'react';
import SongSuggestions from '../../components/SongsSuggestions'
import {Container, Header, HeaderTitle,HeaderTopContent} from './styles';

import EvilIcons from 'react-native-vector-icons/EvilIcons';


const Feed:React.FC  =() =>{
  return(
  <>
      <Container>
        <Header>
           <HeaderTopContent>
             <HeaderTitle> Bom dia </HeaderTitle>
              <EvilIcons name="gear" size={32} color="#f5f5f5"/>
           </HeaderTopContent>
           <SongSuggestions/>
        </Header>
      </Container>
  </>
  )
}

export default Feed;
