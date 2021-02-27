import styled from 'styled-components/native';


export const Section = styled.ScrollView.attrs(() =>({
  horizontal:true,
}))`
 padding: 3px 0;
 margin-top: 10px;

 `;


export const Title = styled.Text`
 padding: 0 6px;
 font-size: 25px;
 line-height:25px;
 margin-top: 40px;
 color:#fff;
 font-family:'Gotham-Bold';
`;






export const SectionCards = styled.View`
 flex-direction:row;
 margin-top: 15px;


`;

export const SectionCard = styled.TouchableOpacity`
 width:180px;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin: 0 6px;


`;


export const SectionImage = styled.Image`
 width:150px;
 height:150px;

`;

export const SectionLabel = styled.Text`
font-size: 18px;
line-height:18px;
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
