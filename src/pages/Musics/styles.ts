import styled  from 'styled-components/native';


export const Wrapper = styled.ScrollView`
flex: 1;
background:#030304;

`
export const Container = styled.View`
flex:1;
background:#030404;
margin: 30px 8px;
`;

export const Header = styled.View`
 flex-direction: row;
 align-items:center;
 justify-content:space-between;
`;

export const HeaderTitle = styled.Text`
 color:#fff;
 font-size: 18px;
 line-height:28px;
 font-family: 'GothamBold';
`;

export const Section = styled.View`
 margin-top: 25px;

 align-items:center;
`;

export const SectionTitle = styled.Text`
 font-size: 23px;
 text-align:center;
 color:#fff;
 font-family:'GothamBold';
`;

export const SectionButton = styled.TouchableOpacity`
  margin: 25px 0;
  background:#1ed760;
  width:240px;
  height:50px;
  align-items:center;
  justify-content:center;
  border-radius:50px;

`;

export const SectionButtonText = styled.Text`
  color:#f5f7f9;
  text-transform:uppercase;
  font-family:'GothamBold';
  letter-spacing:2px;


`;


