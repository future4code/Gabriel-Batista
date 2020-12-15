import React from 'react';
import './App.css';
import CardVerMais from './components/CardVerMais/CardVerMais';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/xmzcC9l.jpg" 
          nome="Gabriel Marques" 
          descricao="Oi! Eu Sou Goku! Não, calma! Meu Nome é Gabriel Famoso Cara do TI, Pai, Nerd e Agora Futuro Web FullStack Com a Labenu!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
         <CardVerMais
            imagemContato="https://p7.hiclipart.com/preview/194/853/248/email-telephone-number-customer-service-phone-transparent.jpg" 
            nome="Contato e Localização"
            tell="(11) 9-1111-1111"
            email='Gabriel@webfullstackteste.com'
            endereço='Rua: 123, São Paulo-SP'
         />
          <CardVerMais
            imagemHabilidades="https://p7.hiclipart.com/preview/565/211/769/businessperson-management-clip-art-businessman.jpg"
            nome="habilidades e Metas"
            habilidades="Extrema facilidade e adaptabilidade com situações complexas, absorção de conteúdo e acima de tudo calma e foco em qualquer situação."
            metas ="Meta profissional é a excelência não importa em qual cargo começar o alvo é o topo."
           />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://p7.hiclipart.com/preview/850/450/443/technical-support-customer-service-customer-support-clip-art-it-support-cliparts.jpg" 
          nome="Cliente Confidencial" 
          descricao="Suporte técnico avançado para software baseado em unix em plataformas mobile e PC com foco na experiência do Cliente e SoftSkill." 
        />
        
        <CardGrande 
          imagem="https://p1.hiclipart.com/preview/669/363/596/albert-einstein-cartoon-quotable-einstein-relativity-the-special-and-the-general-theory-scientist-united-states-of-america-physicist-theory-of-relativity-special-relativity-png-clipart.jpg" 
          nome="Hospital Albert Einstein" 
          descricao="Suporte em geral para software e hardware nos equipamentos de TI no ambiente hospitalar da diretoria aos pacientes." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://p7.hiclipart.com/preview/511/605/276/linkedin-diduco-ab-icon-linkedin-download-png.jpg" 
          texto="Linkedin" 
          link="https://www.linkedin.com/in/gabriel-marques-376742165/"
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
