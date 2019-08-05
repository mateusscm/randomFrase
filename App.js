import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

const styles = {
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  botao: {
    backgroundColor: "#538530",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
};

const App = () => {
  const { principal, botao, text } = styles;

  const handlePress = () => {
    var randomNumb = Math.random();
    randomNumb = Math.floor(randomNumb * 6);

    var frases = [
      ["Você não vai conseguir!"],
      ["Você está fazendo tudo errado, melhor desistir!"],
      ["Olhe para cima, que é de lá que vem tua força!"],
      [
        "Não importa o que você decidiu. O que importa é que isso te faz feliz."
      ],
      [
        "Agora é a hora de começar a surpreender aqueles que duvidaram de você!"
      ],
      ["Não deixe que duvidem de você, faça isso você mesmo!"]
    ];

    var chooseFrase = frases[randomNumb];

    alert(chooseFrase);
  };

  return (
    <View style={principal}>
      <Image source={require("./imgs/logo.png")} />
      <TouchableOpacity onPress={handlePress} style={botao}>
        <Text style={text}>Qual minha frase de hoje?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
