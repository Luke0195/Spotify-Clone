import React from 'react';
import {Container,Title,Card,CardImage,CardLabel,Cards} from './styles';


const mocks =[
  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/236x/e5/e6/02/e5e60248e0310c65048dd8819a6a4e01.jpg',
    description: 'Rihanna'
  },

  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/474x/65/0c/7b/650c7bdf624575b81300c8ce3a13fa4c.jpg',
    description: ' The Weekend'
  },

  {
    key: String(Math.random()),
    img: 'https://pbs.twimg.com/media/DMmgL2vV4AABnfg.jpg',
    description: ' Devvon Terrell'
  },

  {
    key: String(Math.random()),
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCeXcaJika5DhZ5G4IVpsu6ierUiZAJ9E_A&usqp=CAU',
    description: 'Jorja Smith'
  },

  {
    key: String(Math.random()),
    img: 'https://i.pinimg.com/474x/e1/1f/aa/e11faafddddc8a3c91fe7467063c6dd9.jpg',
    description: ' Ty Dolla'
  },

  {
    key: String(Math.random()),
    img: 'https://pbs.twimg.com/media/ESIUn5iWoAIyVbN.jpg',
    description: ' Her'
  }


]



const MadeForYou:React.FC = () =>{
  return(
    <Container>
      <Title> Play on demand </Title>
      <Cards>
        {mocks.map(mock => (
          <Card key={mock.key}>
            <CardImage  source={{uri: mock.img}} resizeMode="contain"/>
            <CardLabel style={{color: 'rgba(255,255,255,0.5)'}}> {mock.description}</CardLabel>
          </Card>

        ))}
      </Cards>
    </Container>

  )


}

export default  MadeForYou;
