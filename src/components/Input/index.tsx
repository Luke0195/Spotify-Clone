import React from 'react';
import {TextInputProps} from 'react-native'
import {Container,TextInput,Icon,Content} from './styles'

interface InputProps extends TextInputProps{
  icon: string;

}
const Input:React.FC<InputProps> = ({icon}) =>{
  return(
    <Container>
      <Content>
       <Icon name={icon} size={25} color="#000"/>
       <TextInput placeholderTextColor="#030304" placeholder="Artist, Song, Music"/>
      </Content>
    </Container>

  )
}


export default Input;
