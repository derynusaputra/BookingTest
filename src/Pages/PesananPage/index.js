import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import IconRNVA from "react-native-vector-icons/MaterialCommunityIcons";
import { sizes } from "../../Constan/constan";
import { RadioButton } from "react-native-paper";
import { Gap } from "../../Components";

const PesananPage = ({ navigation }) => {
  const [checked, setChecked] = useState("");
  const data = [
    "Saya memesan untuk diri sendiri",
    "Saya memesan untuk orang lain",
  ];
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    const apiUrl = "https://parseapi.back4app.com/classes/hotel/bVonXoSUHK";

    const headers = {
      "X-Parse-Application-Id": "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
      "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy",
    };
    fetch(apiUrl, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((responseData) => {
        setDatas(responseData);
        setLoading(false);
        console.log("babi", responseData?.chosen_hotel?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          height: sizes(54),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: sizes(24),
            width: sizes(24),
            borderRadius: sizes(24 / 2),
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#395A97",
            marginRight: sizes(5),
          }}
        >
          <Text style={{ color: "white" }}>1</Text>
        </View>
        <Text>Detail Pesanan</Text>
      </View>
      {/* section desain pesanan */}
      <View style={{ paddingHorizontal: sizes(15), backgroundColor: "white" }}>
        <Text style={{ fontSize: sizes(14), fontWeight: "700" }}>
          Detail Pesanan
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "green",
            padding: sizes(9),
            // marginHorizontal: sizes(15),
            marginVertical: sizes(11),
            borderRadius: sizes(9),
            borderWidth: sizes(1),
            borderColor: "#DFDDE0",
            // height: sizes(56),
            // position: "relative",
          }}
        >
          <Image
            style={{
              height: sizes(56),
              width: sizes(56),
              borderRadius: sizes(9),
              marginRight: sizes(10),
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1692744645657-5470ebc15f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            }}
          />
          <View
            style={{
              justifyContent: "space-between",
              // backgroundColor: "red",
              flex: 1,
              // height: "100%",
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: sizes(12),
                color: "#395A97",
              }}
            >
              Novotel Tangeerang
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: sizes(10),
                color: "#BBBBBB",
              }}
            >
              Dery
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: sizes(10),
                color: "#BBBBBB",
              }}
            >
              Dery
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: sizes(14), fontWeight: "700" }}>
            Check-In
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: sizes(11),
              color: "#ADADAD",
            }}
          >
            10 November 2023
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: sizes(14), fontWeight: "700" }}>
            Check-Out
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: sizes(11),
              color: "#ADADAD",
            }}
          >
            10 November 2023
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconRNVA
            name="bitcoin"
            size={sizes(18)}
            style={
              {
                // padding: sizes(20),
              }
            }
            color={"#FFAD5B"}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: sizes(12),
              color: "#FFAD5B",
            }}
          >
            Dapat direfund jika dibatalkan
          </Text>
        </View>
      </View>
      {/* Section desi */}
      <View style={{ paddingHorizontal: sizes(15), backgroundColor: "white" }}>
        <Text style={{ fontSize: sizes(14), fontWeight: "700" }}>
          Detail Pemesan
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "green",
            padding: sizes(9),
            // marginHorizontal: sizes(15),
            marginVertical: sizes(11),
            borderRadius: sizes(9),
            borderWidth: sizes(1),
            borderColor: "#DFDDE0",
            // height: sizes(56),
            // position: "relative",
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              // backgroundColor: "red",
              flex: 1,
              // height: "100%",
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: sizes(12),
                color: "#395A97",
              }}
            >
              Novotel Tangeerang
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: sizes(10),
                color: "#BBBBBB",
              }}
            >
              Dery
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: sizes(10),
                color: "#BBBBBB",
              }}
            >
              Dery
            </Text>
          </View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: sizes(12),
              color: "#395A97",
            }}
          >
            Ubah
          </Text>
        </View>
        {/*  */}
        <CustomRadioButtonCOM
          aktif={checked === data[0] ? true : false}
          value={data[0]}
          onTap={() => {
            setChecked(data[0]);
          }}
        />
        <Gap height={sizes(8)} />
        <CustomRadioButtonCOM
          aktif={checked === data[1] ? true : false}
          value={data[1]}
          onTap={() => {
            setChecked(data[1]);
          }}
        />
        <Gap height={sizes(30)} />

        <Text
          style={{
            fontSize: sizes(14),
            fontWeight: "700",
            marginBottom: sizes(15),
          }}
        >
          Data Tamu
        </Text>
        <CardTamuCOM />
        <CardTamuCOM />
        <CardTamuCOM />
        <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("EditDataTamu");
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: sizes(12),
                color: "#395A97",
                textDecorationLine: "underline",
              }}
            >
              Ubah Data Tamu
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const CardTamuCOM = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "green",
        padding: sizes(9),
        // marginHorizontal: sizes(15),
        marginBottom: sizes(11),
        borderRadius: sizes(9),
        borderWidth: sizes(1),
        borderColor: "#DFDDE0",
        // height: sizes(56),
        // position: "relative",
      }}
    >
      <Image
        style={{
          height: sizes(26),
          width: sizes(26),
          marginHorizontal: sizes(10),
          borderRadius: sizes(26),
          marginRight: sizes(10),
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1692744645657-5470ebc15f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        }}
      />
      <Text
        style={{
          fontWeight: "600",
          fontSize: sizes(12),
        }}
      >
        Novotel Tangeerang
      </Text>
    </View>
  );
};

const CustomRadioButtonCOM = ({ aktif = false, value = "", onTap }) => {
  const blue = "#2E52A2";
  return (
    <Pressable onPress={onTap}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            height: "auto",
            width: "auto",
            borderRadius: sizes(30),
            // backgroundColor: "blue",
            borderWidth: sizes(2),
            borderColor: aktif ? blue : "grey",
          }}
        >
          <View
            style={{
              height: sizes(15),
              width: sizes(15),
              margin: 2,
              borderRadius: sizes(19 / 2),
              backgroundColor: aktif ? blue : "white",
              borderWidth: aktif ? sizes(1) : 0,
              // borderColor: "red",
            }}
          />
        </View>
        <Gap width={sizes(5)} />
        <Text style={{ fontSize: sizes(12), fontWeight: "700" }}>{value}</Text>
      </View>
    </Pressable>
  );
};

export default PesananPage;

const styles = StyleSheet.create({});
