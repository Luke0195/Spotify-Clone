import React from 'react';
import {Container,Title, Content,Button,ButtonText} from './styles';



const Premium:React.FC = () =>{
  return(
    <Container>
        <Content>
          <Title>  Get news features for your spotify  </Title>
          <Button>
            <ButtonText> Get Premium Now </ButtonText>
          </Button>
        </Content>
    </Container>
  )
}

export default Premium;
