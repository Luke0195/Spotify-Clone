import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Container, Header, HeaderContent,Card,CardImage,CardButton, CardText, CardTitle, CardButtonText,CardStrong} from './styles'


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
        <Card>
          <CardImage source={{uri:`https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format&auto=compress&codec=mozjpeg&cs=strip`}} resizeMode="contain"/>
          <CardStrong> Daily Mix </CardStrong>
          <CardButton>
            <CardButtonText> Play Now</CardButtonText>
          </CardButton>
          <CardText> Kid Cudi <CardTitle> The Range</CardTitle> Tritonal <CardTitle> Out My Mind-Club Mix </CardTitle>
            Breaking Benjamim <CardTitle> Torn in Two </CardTitle> Cash Cash <CardTitle> Finest Hour(feat.Abir) - and more</CardTitle>
          </CardText>
        </Card>
    </Container>
  )
}


export default Music;
