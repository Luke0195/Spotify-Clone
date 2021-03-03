import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Container,Cards,Card,CardContenImage,CardImage,CardArtisInfo,CardArtist,CardArtistMusic, Icon, IconsContent} from './styles'

const mocks =[

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b2733d2dc1ad7bc94f4f431a2e14',
    artist: 'Pacific Rim',
    music: 'Uprising'
  },

  {
    key: String(Math.random()),
    img: 'https://upload.wikimedia.org/wikipedia/pt/c/c2/Scorpion_Drake.jpg',
    artist: 'Scorpions',
    music:'Nonstop',
  },

  {
    key: String(Math.random()),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TNY4EejsmR7BiLs7yU7vFtjILC1OZ6_tIw&usqp=CAU',
    artist: 'Baleric Beat',
    music: 'Survival'
  },

  {
    key: String(Math.random()),
    img: 'https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop',
    artist: 'Daily Mix',
    music: 'One dance'
  },


  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/474x/b0/ae/73/b0ae7301bab86e3472fa6f3e5cb91360.jpg',
    artist: 'Top Hits',
    music: 'Finese'
  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b27304db0e3bcd166c1d6cfd81f9',
    artist: 'Black in Back',
    music: 'ThunderStruck'
  },

  {
    key: String(Math.random()),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBydMI6-dJxyY30h-rn64-0aQI_jooK6HeJA&usqp=CAU',
    artist: 'Foo fighters',
    music: 'Pretender'
  },



  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67706f00000003e4eadd417a05b2546e866934',
    artist: 'Deep Focus',
    music: 'Summer',

  },


  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e',
    artist: 'LoFiBeats',
    music: 'Times like this'

  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b27304db0e3bcd166c1d6cfd81f9',
    artist: 'Black in Back',
    music: 'HighWay to Hell'
  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67706f000000033ca17b400e47bb8a61ab73a1',
    artist: 'Study Beats',
    music: 'Paris'
  },

  {
    key: String(Math.random()),
    img: 'https://m.media-amazon.com/images/I/617uAQl0l1L._SS500_.jpg',
    artist: 'Hip Hop',
    music: 'Home'
  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b273f725c7571e840f71d092c1a4',
    artist: 'Eletronic',
    music: 'Do you Remember'
  },

  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/236x/e5/e6/02/e5e60248e0310c65048dd8819a6a4e01.jpg',
    artist: 'Rihanna',
    music: 'Love on the Brain'
  },

  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/474x/65/0c/7b/650c7bdf624575b81300c8ce3a13fa4c.jpg',
    artist: ' The Weekend',
    music: 'Blinding by the lights'
  },

  {
    key: String(Math.random()),
    img: 'https://pbs.twimg.com/media/DMmgL2vV4AABnfg.jpg',
    artist: ' Devvon Terrell',
    music: 'Same Love'
  },

  {
    key: String(Math.random()),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCeXcaJika5DhZ5G4IVpsu6ierUiZAJ9E_A&usqp=CAU',
    artist: 'Jorja Smith',
    music: 'Give me love'
  },

  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/474x/e1/1f/aa/e11faafddddc8a3c91fe7467063c6dd9.jpg',
    artist: ' Ty Dolla',
    music: 'Taste'
  },

  {
    key: String(Math.random()),
    img: 'https://pbs.twimg.com/media/ESIUn5iWoAIyVbN.jpg',
    artist: ' Her',
    music: 'Best Part'
  },

]


const LikeSongs:React.FC  = () =>{
  return(
    <Container>
      <Cards>
        {mocks.map((item) =>(
          <Card key={item.key}>
            <CardContenImage>
              <CardImage source={{uri: item.img}} resizeMode="contain"/>
              <Icon name="play" size={16} color="#fff"/>
            </CardContenImage>
            <CardArtisInfo>
              <CardArtistMusic> {item.music}</CardArtistMusic>
              <CardArtist> {item.artist}</CardArtist>
            </CardArtisInfo>
            <IconsContent>
            <FontAwesome name="heart" size={25} color="#1ed760"/>
            <Feather name="more-vertical" size={25} color="#fff"/>
            </IconsContent>
          </Card>
        ))}
      </Cards>
    </Container>
  )
}


export default LikeSongs;
