import styled from 'styled-components/native';

export const Container = styled.View`
 margin: 50px auto;
 width:90%;
 flex-direction:column;
 align-items:center;
 text-align:center;


`;


export const Title = styled.Text`
 color:#fff;
 font-size:20px;
 font-family:'Gotham-Bold';

`;


export const Cards = styled.View`
 margin-top: 16px;
 flex-direction:row;
 justify-content:space-between;
 flex-wrap: wrap;
 align-items:center;
 text-align:center;

`


export const Card = styled.TouchableOpacity`
 flex-direction:column;
 align-items:center;
 text-align:center;
 margin: 20px 0;
 width: 150px;
`;

export const CardImage = styled.Image`
 width: 150px;
 height: 150px;



`;


export const CardLabel = styled.Text`
 margin-top: 10px;
 font-size: 17px;
 line-height:27px;
 font-family:'Gotham-Meddium';
 text-align:center;

`;
