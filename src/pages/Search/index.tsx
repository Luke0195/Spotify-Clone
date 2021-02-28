import React from 'react';
import {Wrapper,Container,Header,Title} from './styles';
import Cards from '../../components/Cards';
import Input from '../../components/Input'
const Search:React.FC  = () =>{
  return(
   <Wrapper>
     <Container>
       <Title> Search</Title>
       <Header>
        <Input icon="search" />
       </Header>
       <Cards/>
     </Container>
   </Wrapper>
  )
}


export default Search;
