import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
 flex: 1;
 background:#030404;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
 height: 60px;
 background:rgba(179, 179, 179, 0.3);
 flex-direction:row;
 align-items:center;
 justify-content:space-between;
 padding: 0 8px;
`;


export const Main = styled.View`
 width: 100%;
 max-width: 300px;
 margin: 50px auto;;
 flex-direction:column;
 align-items:center;

`;
export const MainTitle = styled.Text`
 color:#fff;
 margin-bottom: 15px;
 font-size:25px;
 line-height: 35px;
 font-family:'Gotham-Bold';
`;
export const MainImage = styled.Image`
 width: 240px;
 height: 250px;
 border-radius: 4px;
`;
export const MainText = styled.Text`
color:#fff;
font-size:15px;
line-height:25px;
text-align:center;
font-family:'GothamRegular';
margin-top: 8px;
`;
