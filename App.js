import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Componentes de página

const PaginaInicial = () => {
  return (
    <View style={styles.container}>
     <View style={styles.box}>
     <Image
source={{uri:'https://0.academia-photos.com/94012921/63095150/51396272/s200_maria.medeiros.jpg'}}
style={styles.image} />
          <Text style={styles.titulo}>Maria Luiza Soares de Medeiros</Text>
          <Text style={styles.titulo}>Um pouco sobre mim:</Text>
          <Text style={styles.texto}>Olá, meu nome é Maria Luiza Medeiros, tenho 26 anos e estou no terceiro período do curso de Análise e Desenvolvimento de Sistemas na Faculdade SENAC Pernambuco. Sou mestranda acadêmica em História, ambas formações pela UFPE. Porém nos últimos anos decidi me dedicar a minha segunda paixão: a tecnologia! Considero-me uma pessoa comunicativa, organizada, responsável e pró-ativa!</Text>
          <StatusBar style="auto" />
        </View>
        </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
       <View style={styles.box}>
       <Text style={styles.titulo}>Formação e Cursos</Text>
      <Text style={styles.texto}>•Graduanda em Análise e Desenvolvimento de Sistemas - Faculdade SENAC{'\n'}•Curso - Formação Front-end - HTML, CSS, JavaScript, React{'\n'}•Curso - Algoritmos e Lógica de Programação{'\n'}•Curso - Programação Python do Zero ao Avançado{'\n'}•Curso - Formação Cientista de Dadoso{'\n'}•Oficina - Introdução ao Figma SENAC{'\n'}•Oficina - Apresentação de Pitch SENAC
</Text>
    </View>
    </View>
  );
};

const handleAbrirEntrevista = () => {
  Linking.openURL('https://globoplay.globo.com/v/12505044/');
};
const handleAbrirEmbratur = () => {
  Linking.openURL('https://inovacao.embraturlab.com.br/desafio-rota-gastronomica/');
};
const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
       <View style={styles.box}>
       <Text style={styles.titulo}>Experiência e Projetos</Text>
      <Text style={styles.texto}>•Redatora, gestora e analista de dados na StartUp Apé</Text>
      <TouchableOpacity onPress={handleAbrirEntrevista}>
        <Text style={styles.texto}>•Entrevista no NETV sobre a Incubadora I.d.e.i.a.s.</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAbrirEmbratur}>
        <Text style={styles.texto}>•Participação no desafio gastronômico da Embratur Lab com o Apé, sendo uma das StartUp vencedoras</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};


const handleAbrirLinkedIn = () => {
  Linking.openURL('https://www.linkedin.com/in/mluizamedeiros');
};

const handleAbrirWhatsApp = () => {
  Linking.openURL('whatsapp://send?phone=5581982553887');
};

const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
       <View style={styles.box}>
      <Text style={styles.titulocontato}>Aqui estão algumas formas que você pode me encontrar</Text>
       <Text style={styles.titulo}>Linkedin:</Text>
      <TouchableOpacity onPress={handleAbrirLinkedIn}>
        <Text style={styles.texto}>Clique aqui e confira o meu LinkedIn</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>E-mail:</Text>
      <Text style={styles.texto}>mluizasoaresmads@gmail.com</Text>
      <Text style={styles.titulo}>WhatsApp:</Text>
      <TouchableOpacity onPress={handleAbrirWhatsApp}>
        <Text style={styles.texto}>Clique aqui para me enviar uma mensagem no WhatsAppm</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};


const App = () => {
  

  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-lavender-simple-rose-texture-image_28475.jpg' }} style={styles.imageBackground}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.titulocurriculo}>Meu Currículo</Text>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
            <Text>☰</Text>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        {menuAberto && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
              <Text style={styles.menuItemText}>Página Inicial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
              <Text style={styles.menuItemText}>Formação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
              <Text style={styles.menuItemText}>Experiência e Projetos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
              <Text style={styles.menuItemText}>Contato</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Conteúdo */}
        <View style={styles.content}>{renderizarPagina()}</View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
  menuIcon: {
    padding: 10,
    marginTop:30,
  },
  menu: {
    backgroundColor: 'rgba(248, 248, 255, 0.55)',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 17,
    color:'#483D8B',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    width:150,
    height:150,
    borderRadius:75,
    marginTop:20,
  },
  titulo:{
    color:'#483D8B',
    fontWeight:'bold',
    fontSize: 19,
    marginTop:20,
  },
  titulocurriculo:{
    color:'#483D8B',
    fontWeight:'bold',
    fontSize: 19,
    marginTop:30,
  },
  titulocontato:{
    color:'#483D8B',
    fontWeight:'bold',
    fontSize: 19,
    marginTop:30,
    justifyContent: 'center',
  },
  box: {
    width: 350, // Define a largura como 100 unidades
    alignItems: 'center',
    justifyContent: 'justify',
  },
  texto:{
    color:'#4F4F4F',
    fontWeight:'light',
    fontSize: 17,
    textAlign:'justify',
    marginTop:20,
  }
  
});

export default App;
