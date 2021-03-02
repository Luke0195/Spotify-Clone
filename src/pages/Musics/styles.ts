import styled  from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color:#030304;
 margin-top:20px;
 align-items:center;
`;


export const Header = styled.View`
width: 100%;
 margin: 35px 10px;
 flex-direction:row;
 align-items:center;
 justify-content:space-between;

`;

export const HeaderContent= styled.View`
 width: 80px;
 flex-direction:row;
 justify-content:space-between;

`;

export const Card = styled.View`
 width: 300px;
 height: 230px;

 align-items:center;

`;

export const CardImage = styled.Image`
width: 200px;
height: 200px;


`;

export const CardText = styled.Text`
 width: 250px;
 color:#fff;
 text-align:center;
 margin-top: 10px;
 font-size: 16px;
 line-height:26px;
`;

export const CardTitle = styled.Text`
font-size: 16px;
font-family: 'Gotham';
color: #ccc;
opacity:0.8;

`

export const CardStrong = styled.Text`
 font-size:22px;
 color:#fff;
 font-family:'Gotham-Bold';
 margin: 16px 0;
`;

export const CardButtonText = styled.Text`
 font-size: 18px;
 font-family:'Gotham-Bold';
 color:#f5f6f9;

`;
export const CardButton = styled.TouchableOpacity`
 width: 200px;
 height: 50px;
 background:#3eb842;
 align-items:center;
 justify-content:center;
 border-radius:30px;
`
