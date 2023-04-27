import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import home from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  View,
  ViewBase,
  TextInput,
  Image,
} from "react-native";
import User from "./assets/user.png";

import book1 from "./assets/book1.png";
import book2 from "./assets/book2.png";
import book3 from "./assets/book3.png";
import book4 from "./assets/book4.png";
import book5 from "./assets/book5.png";
import Rectangle14 from "./assets/Rectangle14.png";
import Rectangle15 from "./assets/Rectangle15.png";
import Rectangle18 from "./assets/Rectangle18.png";
import Rectangle19 from "./assets/Rectangle19.png";
import Rectangle20 from "./assets/Rectangle20.png";
import Rectangle21 from "./assets/Rectangle21.png";
import Rectangle22 from "./assets/Rectangle22.png";

export default function App() {
  const [text, setText] = useState("");
  return (
    <>
      <View style={styles.header}>
        <View style={styles.header_context}>
          <View style={{ padding: 4 }}>
            <View style={{ flexDirection: "row", gap: 26 }}>
              <Image source={User} />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                >
                  Olá, Marcos Eduardo! Dez, 2023
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                >
                  Bem-Vindo(a) de volta!
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 16,
                }}
              >
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: "#EEEEEE",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ zIndex: 1 }}>
                    <View
                      style={{
                        position: "absolute",
                        backgroundColor: "#3A98B9",
                        borderRadius: 50,
                        width: 10,
                        height: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    ></View>
                  </View>
                  <Icon name="bell" size={20} />
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
            <Icon
              name="search"
              size={20}
              style={{ marginLeft: 10, color: "#FFFFFF" }}
            />
            <TextInput
              placeholder="Por qual livro você procura?"
              placeholderTextColor="#FFFFFF"
              style={styles.input}
              onChangeText={(text) => setText(text)}
              value={text}
            />
          </View>
          <View style={{ position: "absolute" }}>
            <View style={{ position: "relative", top: 75 }}>
              <Icon name="chevron-down" size={16} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <Text style={{ color: "#3A98B9", fontWeight: "bold" }}>
          Livros mais pesquisados
        </Text>
        <Text style={{ color: "#3A98B9", fontWeight: "bold" }}>
          VER MAIS <Icon name="arrow-right"></Icon>
        </Text>
      </View>

      <View style={{ padding: 10, flexDirection: "row" }}>
        <Image source={book1} />
        <Image source={book2} />
        <Image source={book3} />
        <Image source={book4} />
        <Image source={book5} />
      </View>

      <View
        style={{
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <Text style={{ color: "#3A98B9", fontWeight: "bold" }}>
          Livros recém chegados
        </Text>
        <Text style={{ color: "#3A98B9", fontWeight: "bold" }}>
          VER MAIS <Icon name="arrow-right"></Icon>
        </Text>
      </View>

      <View style={{ padding: 10, flexDirection: "row", gap: 10 }}>
        <Image source={Rectangle14} />
        <Image source={Rectangle15} />
      </View>

      <View
        style={{
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-between",
          padding: 8,
        }}
      >
        <Text style={{ color: "#3A98B9", fontWeight: "bold" }}>
          Internacionais renomados
        </Text>
        <Text style={{ color: "#3A98B9", fontWeight: "bold" }}>
          VER MAIS <Icon name="arrow-right"></Icon>
        </Text>
      </View>

      <View style={{ padding: 10, flexDirection: "row", gap: 10 }}>
        <Image source={Rectangle18} />
        <Image source={Rectangle19} />
        <Image source={Rectangle20} />
        <Image source={Rectangle21} />
        <Image source={Rectangle22} />
      </View>

      <View style={{ height: 100, backgroundColor: "#EEEEEE" }}>
        <View
          style={{
            textAlign: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: 10,
            color: "#3A98B9",
          }}
        >
          <Text style={{ color: "#3A98B9" }}>
            <Icon name="heart" size={35} />
          </Text>
          <Text style={{ color: "#3A98B9" }}>
            <Icon name="bookmark" size={35} />
          </Text>
          <Text style={{ color: "#3A98B9" }}>
            <Icon name="home" size={35} />
          </Text>
          <Text style={{ color: "#3A98B9" }}>
            <Icon name="comment" size={35} />
          </Text>
          <Text style={{ color: "#3A98B9" }}>
            <Icon name="user" size={35} />
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 206,
    backgroundColor: "#3A98B9",
    borderRadius: 30,
  },
  header_context: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    width: 212,
    borderRadius: 10,
    textAlign: "center",
  },
});
