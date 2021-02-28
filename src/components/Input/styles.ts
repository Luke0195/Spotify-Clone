import styled from 'styled-components/native'
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`

 height:50px;
 margin: 20px 2px;
 background:#f5f8f9;
 width: 350px;
 flex-direction:row;
 align-items:center;
 justify-content:center;
 border-radius: 4px;
 justify-content:center;


`;

export const Content = styled.View`
 width: 200px;
 margin: 0 auto;
 flex-direction:row;
 align-items:center;

`;



export const TextInput = styled.TextInput`
font-family:'GothamBold';
font-size: 15px;
flex: 1px;
margin-left: 5px;
color:#030304;


`


export const Icon = styled(Feather)`
 margin-left:10px;

 text-align:right;



`
