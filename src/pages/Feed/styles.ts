import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
 flex: 1;
 background:#030304;
`
export const Container = styled.ScrollView``

export const Header = styled.View`
 margin: 35px 0 20px 0;
 height: 30px;

 flex-direction:row;
 align-items:center;
 justify-content:flex-end;
 padding: 0 10px;
`

export const Section = styled.ScrollView.attrs(() =>({
  horizontal:true,
}))`
 padding: 3px 0;
 margin-top: 10px;

 `;


export const Title = styled.Text`
 padding: 0 6px;
 font-size: 30px;
 line-height:26px;
 color:#fff;
 font-family:'Gotham-Bold';
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
