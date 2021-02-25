import React from 'react';
import {HeaderContent,HeaderContentImage,HeaderContentLabel,HeaderContentItem,HeaderContentItemButton} from './styles'


const cards =[
  {
    key: String(Math.random()),
    img: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Weeknd_-_After_Hours.png',
    title: 'After Hours'
  },

  {
    key: String(Math.random()),
    img: 'https://whiplash.net/imagens_promo/acdc_promo.jpg',
    title: 'Back in Black'
  },




  {
    key: String(Math.random()),
    img:'https://i.pinimg.com/originals/fe/5c/36/fe5c36b8b4cbaa728f3c03a311e002cb.png',
    title:'Curtidas'
  },


  {
    key: String(Math.random()),
    img: 'https://c4.wallpaperflare.com/wallpaper/661/734/567/foo-fighters-symbol-icon-cicle-wallpaper-preview.jpg',
    title: 'Foo Fighters'
  },

  {
    key: String(Math.random()),
    img: 'https://s2.glbimg.com/WgZpA-1scQgW9X-1JTWPmFtRC6A=/0x0:1080x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/I/D/kR79pHStus4Ykd9FASyw/drake-scorpion.jpg',
    title: 'Scorpions'
  },

  {
    key: String(Math.random()),
    img: 'https://assets2.sharedplaylists.cdn.crowds.dk/playlists/27/99/34/sz300x300_todays-top-hits-7cc8b942da.jpeg',
    title: `Top Hits `
  }




]



const SongsSuggestions:React.FC = () =>{
  return(
    <HeaderContent>
      {cards.map(card => (
      <HeaderContentItemButton key={card.key} style={{backgroundColor:'rgba(230,240, 240,0.1)'}}>
        <HeaderContentItem>
          <HeaderContentImage source={{uri: card.img, width:60, height:65}}/>
          <HeaderContentLabel> {card.title}</HeaderContentLabel>

        </HeaderContentItem>
      </HeaderContentItemButton>
      ))}


    </HeaderContent>
  )
}


export default SongsSuggestions;
