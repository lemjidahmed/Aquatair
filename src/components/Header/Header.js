import React from "react";
import { Text, View, Image } from "react-native";

let user = { name: "Altair", aquacoin: 10 };

export default function Header() {
  return (
    <View style={{ flex: 2 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}></View>
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              width: "90%",
              height: "50%",
              borderRadius: "50%",
              borderColor: "gray",

              shadowColor: "#000",
              shadowOffset: { width: -2, height: 3 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="user" size={24} color="black" />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Bonjour {user.name}</Text>
            </View>
            <View style={{ flex: 2, flexDirection: "row" }}>
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingRight: "5%",
                }}
              >
                <Text style={{ fontSize: 18 }}>{user.aquacoin}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  source={require("../../../assets/wallet/aquacoin.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
