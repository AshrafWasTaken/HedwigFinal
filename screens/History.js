import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import _ from "lodash";
import LoadingScreen from "./LoadingScreen";
import Firebase, { ft } from "../components/Firebase/config";
import { LinearGradient } from "expo-linear-gradient";

export const History = () => {
  const [columns, setColumns] = useState(["Date", "Distance", "Name"]);
  const [direction, setDirection] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [data, setData] = useState([]);
  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {columns.map((column, index) => {
        {
          return (
            <TouchableOpacity key={index} style={styles.columnHeader}>
              <Text style={styles.columnHeaderTxt}>
                {column + " "}
                {selectedColumn === column && (
                  <MaterialCommunityIcons
                    name={
                      direction === "desc"
                        ? "arrow-down-drop-circle"
                        : "arrow-up-drop-circle"
                    }
                  />
                )}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
  const getPastOrders = async () => {
    const currentEmail = Firebase.auth().currentUser.email;
    const pastOrdersCollection = ft
      .collection("history")
      .doc(currentEmail)
      .collection("past-orders");
    await pastOrdersCollection.get().then((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((snapshot) => {
        docs.push(snapshot.data());
      });
      setData(docs);
    });
  };
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
    getPastOrders();
  }, []);
  if (!loaded) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#f2f5fa", "#cedef2"]} style={styles.container}>
        <FlatList
          data={data}
          style={{ width: "90%" }}
          keyExtractor={(item, index) => index + ""}
          ListHeaderComponent={tableHeader}
          stickyHeaderIndices={[0]}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  ...styles.tableRow,
                  backgroundColor: index % 2 == 1 ? "#F0FBFC" : "white",
                }}
              >
                <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>
                  {item.Name}
                </Text>
                <Text style={styles.columnRowTxt}>{item.date}</Text>
                <Text style={styles.columnRowTxt}>{item.distance}</Text>
                <Text style={styles.columnRowTxt}>{item.name}</Text>
              </View>
            );
          }}
        />
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",
  },
  tableHeader: {
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "50%",
    marginLeft: "5%",
  },
});

export default History;
