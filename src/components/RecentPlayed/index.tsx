import { DefaultTheme } from '@react-navigation/native';
import React from 'react';
import {SectionCards,Section,SectionCard,SectionImage, SectionLabel,Title} from './styled'


const mocks = [

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b2733d2dc1ad7bc94f4f431a2e14',
    title: 'Pacific Rim',

  },



  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67706f00000003e4eadd417a05b2546e866934',
    title: 'Deep Focus',

  },


  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e',
    title: 'LoFiBeats',

  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b27304db0e3bcd166c1d6cfd81f9',
    title: 'Black in Back',

  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67706f000000033ca17b400e47bb8a61ab73a1',
    title: 'Study Beats',

  },

  {
    key: String(Math.random()),
    img: 'https://m.media-amazon.com/images/I/617uAQl0l1L._SS500_.jpg',
    title: 'Hip Hop',

  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b273f725c7571e840f71d092c1a4',
    title: 'Eletronic',

  },
]



const RecentPlayed:React.FC = () =>{
  return(
    <>
      <Title> Recented Played</Title>
    <Section>
    <SectionCards>
      {mocks.map(mock => (
        <SectionCard key={mock.key} >
          <SectionImage source={[{uri: mock.img}]} resizeMode="contain"/>
          <SectionLabel> {mock.title}</SectionLabel>
       </SectionCard>
      ))}
    </SectionCards>
  </Section>
  </>
  );
}


export default RecentPlayed;
