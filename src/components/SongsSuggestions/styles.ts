import styled from 'styled-components/native';


export const HeaderContent = styled.View`
 width: 100%;

 margin-top:30px;
 flex-direction:row;
 flex-wrap: wrap;

`;

export const HeaderContentItemButton = styled.TouchableOpacity`
 width: 47%;

 margin:5px;
 height:65px;
 flex-direction:row;
 align-items:center;
 border-radius: 8px;

`;

export const HeaderContentItem = styled.View`
 flex-direction:row;
 align-items:center;

`;

export const HeaderContentImage = styled.Image`
border-radius: 8px;
`;

export const HeaderContentLabel = styled.Text`
 color:#fff;
 font-family:'Gotham-Bold';
 padding-left: 4px;
 font-size: 15px;
 text-align:justify;

`
