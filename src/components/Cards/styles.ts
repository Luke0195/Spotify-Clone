import styled from 'styled-components/native'

interface CardProps{
  bg:string;
}

export const Container = styled.View`
width:350px;
margin-top:10px;
`;

export const CardContent = styled.View`
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-between;
`;

export const CardItem = styled.TouchableOpacity<CardProps>`
 width: 48%;
 margin: 6px 0;
 background:${(props => props.bg)};
 height: 100px;
 border-radius:4px;
 opacity:0.7;
`;

export const CardText = styled.Text`
padding: 10px 5px;
color:#fff;
font-size: 17px;
line-height:27px;
font-family:'GothamBold'
`;
