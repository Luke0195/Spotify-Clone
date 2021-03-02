import React from 'react';
import {Container,CardContent,CardItem,CardText} from './styles';

const mocks = [
  {
    key: String(Math.random()),
    title: 'New Releases',
    bgColor: "#f72585"
  },

  {
    key: String(Math.random()),
    title: 'Charts',
    bgColor: "#B5179e"
  },

  {
    key: String(Math.random()),
    title: 'Amplify: Emotional Health',
    bgColor: "#7209b7"
  },

  {
    key: String(Math.random()),
    title: 'Hip-Hop',
    bgColor: "#560bad"
  },


  {
    key: String(Math.random()),
    title: 'Mod',
    bgColor: "#480ca8",
  },

  {
    key: String(Math.random()),
    title: 'Pop',
    bgColor:"#3a0ca3"
  },

  {
    key: String(Math.random()),
    title: 'Workout',
    bgColor: "#3f37c9"
  },

  {
    key: String(Math.random()),
    title: 'Country',
    bgColor: "#4361ee"
  },

  {
    key: String(Math.random()),
    title: 'Rock',
    bgColor: "#4895ef"
  },


  {
    key: String(Math.random()),
    title: 'Funk',
    bgColor: "#4cc9f0"
  },
]

const Cards:React.FC = () =>{
  return(
    <Container>
      <CardContent>
        {mocks.map(mock =>(
          <CardItem key={mock.key} bg={mock.bgColor} >
            <CardText> {mock.title}</CardText>
          </CardItem>
        ))}
      </CardContent>
    </Container>

  )
}


export default Cards;
