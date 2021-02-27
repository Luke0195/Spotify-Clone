import styled from 'styled-components/native';


export const Section = styled.ScrollView.attrs(() =>({
  horizontal:true,
}))`
 padding: 3px 0;
 margin-top: 10px;

 `;





export const SectionCards = styled.View`
 flex-direction:row;
 margin-top: 15px;


`;

export const SectionCard = styled.View`
 width:180px;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin: 0 16px;


`;


export const SectionImage = styled.Image`
 width:180px;
 height:180px;

`;

export const SectionLabel = styled.Text`
font-size: 24px;
line-height:24px;
margin-top:15px;
text-align:center;
color:#f5f6f7;
font-family:'GothamBold';
`;

export const SectionDescription = styled.Text`
margin-top: 8px;
font-size: 16px;
line-height:25px;
color:#fff;
font-family:'Gotham';
text-align:center;
`;
