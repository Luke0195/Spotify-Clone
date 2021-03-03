import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const Container = styled.View`

 margin: 0 5px;

`;


export const Cards = styled.View`
 flex-direction:column;

`;

export const Card = styled.TouchableOpacity`
border-radius: 8px;
margin:10px 0;
 flex-direction:row;
 background-color:#302d29;
 opacity:0.8;
 justify-content:space-between;

`;

export const CardContenImage = styled.View`
 position:relative;
`;

export const CardImage = styled.Image`
width:80px;
height:80px;
margin-right:3px;
border-radius: 8px;
`;

export const IconsContent = styled.View`
 width: 70px;
align-items:center;
 flex-direction:row;
 justify-content:space-between;
 padding-right: 10px;
`;
export const Icon = styled(FontAwesome)`
 position:absolute;
 top:35px;
 left: 40px;

`;

export const CardArtisInfo = styled.View`

flex:1;
`;

export const CardArtistMusic = styled.Text`
 color:#fff;
 margin:3px 0;
 font-size: 15px;
 line-height:25px;
 text-align:left;

 padding: 10px;
 font-family: 'GothamMedium';
`;

export const CardArtist = styled.Text`
 color:#ccc;
 padding-left: 10px;
 font-size: 16px;
`
