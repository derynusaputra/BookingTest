import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { sizes } from "../../Constan/constan";
import SelectDropdown from "react-native-select-dropdown";
import {
  Button,
  Divider,
  Menu,
  PaperProvider,
  Provider,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Gap } from "../../Components";

const EditDataTamu = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View
      style={{
        paddingHorizontal: sizes(15),
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: sizes(14),
          color: "#395A97",
        }}
      >
        Data Tamu
      </Text>
      <Gap height={sizes(10)} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity
              onPress={() => {
                openMenu();
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    // alignSelf: "flex-start",//ngikuti konten
                    height: sizes(50),
                    width: sizes(70),
                    padding: sizes(9),
                    // marginHorizontal: sizes(15),
                    borderRadius: sizes(9),
                    borderWidth: sizes(1),
                    borderColor: "#DFDDE0",
                    // height: sizes(56),
                    // position: "relative",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: sizes(12),
                    }}
                  >
                    MR
                  </Text>
                  <Icon name="chevron-down" size={sizes(24)} />
                </View>
              </View>
            </TouchableOpacity>
          }
        >
          {/* <Menu.Item onPress={() => {}} title="Item 1" /> */}
          <TouchableOpacity
            onPress={() => {
              // navigate("EditUpload", { item });
              closeMenu();
            }}
          >
            <View
              style={{
                paddingHorizontal: sizes(30),
                paddingVertical: sizes(15),
                // backgroundColor: "red",
              }}
            >
              <Text>MR</Text>
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            onPress={() => {
              // navigate("EditUpload", { item });
              closeMenu();
            }}
          >
            <View
              style={{
                paddingHorizontal: sizes(30),
                paddingVertical: sizes(15),
                // backgroundColor: "red",
              }}
            >
              <Text>MS</Text>
            </View>
          </TouchableOpacity>
        </Menu>
        <TextInput
          style={{
            flex: 1,
            height: sizes(50),
            width: "auto",
            borderRadius: sizes(9),
            borderWidth: sizes(1),
            marginHorizontal: sizes(15),
            borderColor: "#DFDDE0",
            paddingHorizontal: sizes(10),
          }}
          onChangeText={onChangeText}
          value={text}
        />

        <Icon name="trash-can-outline" size={sizes(24)} />
      </View>
    </View>
  );
};

export default EditDataTamu;

const styles = StyleSheet.create({});
