import styled from 'styled-components/native';

export const Container = styled.View`
 flex:1;
 background: #030304;
 justify-content:center;
`;

export const Content = styled.View`
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;

`

export const Title = styled.Text`
 color:#fff;
 font-size: 23px;
 line-height:23px;
 width: 270px;
 font-family:'GothamMedium';
 text-align:center;
`;



export const Button = styled.TouchableOpacity`
 margin: 30px 0 0 0;
  background:#1ed760;
  width:240px;
  height:50px;
  align-items:center;
  justify-content:center;
  border-radius:50px;


`;


export const ButtonText = styled.Text`
 color:#fff;
 font-size: 16px;
 line-height:16px;
 font-family:'Gotham';

`;
