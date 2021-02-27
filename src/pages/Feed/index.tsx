import React from 'react';

import { Container, Wrapper, Header, Section, Title,SectionCard,SectionCards,SectionImage,SectionLabel,SectionDescription} from './styles'

const mocks = [

  {
    key: String(Math.random()),
    img: 'https://upload.wikimedia.org/wikipedia/pt/c/c2/Scorpion_Drake.jpg',
    title: 'Scorpions',
    description: 'Lorem ipsum dolor amet silor dotmet sivusr focus'
  },

  {
    key: String(Math.random()),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TNY4EejsmR7BiLs7yU7vFtjILC1OZ6_tIw&usqp=CAU',
    title: 'Baleric Beat',
    description: 'Lorem ipsum dolor amet silor dotmet sivusr focus'
  },

  {
    key: String(Math.random()),
    img: 'https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop',
    title: 'Daily Mix',
    description: 'Lorem ipsum dolor amet silor dotmet sivusr focus'
  },


  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/474x/b0/ae/73/b0ae7301bab86e3472fa6f3e5cb91360.jpg',
    title: 'Top Hits',
    description: 'Lorem ipsum dolor amet silor dotmet sivusr focus'
  },

  {
    key: String(Math.random()),
    img: 'https://i.scdn.co/image/ab67616d0000b27304db0e3bcd166c1d6cfd81f9',
    title: 'Black in Back',
    description: 'Lorem ipsum dolor amet silor dotmet sivusr focus'
  },

  {
    key: String(Math.random()),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBydMI6-dJxyY30h-rn64-0aQI_jooK6HeJA&usqp=CAU',
    title: 'Foo fighters',
    description: 'Lorem ipsum dolor amet silor dotmet sivusr focus'
  },




]

import EvilIcons from 'react-native-vector-icons/EvilIcons'
const Feed:React.FC = () =>{
  return(

    <Wrapper>
      <Container>
        <Header>
            <EvilIcons  name="gear" color="#fff" size={32}/>
        </Header>
          <Title> Good Afternoon </Title>
        <Section>
          <SectionCards>
            {mocks.map(mock => (
              <SectionCard key={mock.key} >
                <SectionImage source={[{uri: mock.img}]} resizeMode="contain"/>
                <SectionLabel> {mock.title}</SectionLabel>
                <SectionDescription> {mock.description}</SectionDescription>
             </SectionCard>
            ))}
          </SectionCards>

        </Section>


      </Container>
    </Wrapper>

  )
}

export default Feed;
