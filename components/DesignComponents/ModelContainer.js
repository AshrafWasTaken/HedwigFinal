import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from "react-native";
import { PrimaryButton } from "../PrimaryButton";
import { FAB, TextInput, Text, IconButton } from "react-native-paper";
import Firebase, { ft } from "../Firebase/config";
import { RunSimulation } from "../Simulation/RunSimulation";

require("firebase/auth");

export const ModelContainer = (props) => {
  const [speedAtAvarage, setSpeedAtAvarage] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(-1);
  const [batteryUse, setBatteryUse] = useState(-1);
  const [distanceSave, setdistanceSave] = useState(props.distance);

  //Function for checking valid valus
  const checkValues = async () => {
    if (name === "") {
      alert("Please enter a name");
      return;
    }
    if (isNaN(speedAtAvarage) && speedAtAvarage < 5) {
      alert("invalid input at speed At Avarage");
    } else if (isNaN(batteryLevel) && batteryLevel < 1 && batteryLevel > 101) {
      alert("invalid input at battery Level");
    } else if (isNaN(batteryUse) && batteryUse <= 0) {
      alert("invalid input at battery Use");
    } else if (props.distance / batteryUse > 100) {
      alert(
        "your drone lack the ablility to complet this deliver during that your battery can hold the traviling charge"
      );
    } else {
      calculateOption();
    }
  };

  const calculateOption = () => {
    if (props.distance / batteryUse >= batteryUse - 10) {
      alert(
        "Battery can't hold for this delivery please make sure your battery charged more than " +
          Math.ceil(props.distance / batteryUse + 10) +
          "%"
      );
    } else {
      alert(
        "your drone deliver time is : " +
          convertMinsToTime(props.distance / ((speedAtAvarage * 1000) / 60))
      );
      addToHistory();
      RunSimulation(props.path);
      console.log("done");
    }
  };
  //
  const convertMinsToTime = (mins) => {
    let hours = Math.floor(mins / 60);
    let minutes = Math.ceil(mins % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours ? `${hours}hrs:` : ""}${minutes}mins`;
  };
  const onClose = () => {
    setSpeedAtAvarage(0);
    setBatteryLevel(-1);
    setBatteryUse(-1);
  };

  const speedInputHandler = async (speed) => {
    let check = Number.parseInt(speed);
    await setSpeedAtAvarage(check);
  };
  const levelInputHandler = (level) => {
    let check = Number.parseInt(level);
    setBatteryLevel(check);
  };
  const useInputHandler = (battery) => {
    let check = Number.parseInt(battery);
    setBatteryUse(check);
  };

  let currentLoggedInUser;
  if (Firebase.auth().currentUser.email != null)
    currentLoggedInUser = Firebase.auth().currentUser.email;

  const addToHistory = () => {
    if (name === "" || props.distance <= 0) {
      return;
    }
    ft.collection("history")
      .doc(currentLoggedInUser)
      .collection("past-orders")
      .doc(name)
      .set({
        name: name,
        date: new Date().toISOString().slice(0, 10),
        distance: props.distance,
        email: currentLoggedInUser,
      })
      .then(() => console.log("Successfuly added the order."))
      .catch((error) => console.log(error));
  };
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setdistanceSave(props.distance);
  }, [speedAtAvarage, batteryLevel, batteryUse, props]);
  return (
    <>
      <FAB
        style={styles.fab}
        icon="check"
        label="Ready To Go"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FAB
                  icon="close"
                  size={25}
                  color="black"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    onClose();
                  }}
                  style={styles.iconButton}
                />
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                  style={styles.container}
                >
                  <>
                    <View style={styles.inner}>
                      <Text style={styles.header}>Ready to go</Text>
                      <Text style={styles.show}>
                        Distance is : {props.distance} m
                      </Text>
                      <TextInput
                        label="Send to"
                        mode="outlined"
                        onChangeText={setName}
                      />
                      <TextInput
                        label="Speed at avarage"
                        mode="outlined"
                        onChangeText={speedInputHandler}
                        keyboardType="numeric"
                        right={<TextInput.Affix text="/kmh" />}
                      />
                      <TextInput
                        label="bettery level"
                        mode="outlined"
                        onChangeText={levelInputHandler}
                        keyboardType="numeric"
                        right={<TextInput.Affix text="/100" />}
                      />
                      <TextInput
                        label="meter travel per 1%"
                        mode="outlined"
                        onChangeText={useInputHandler}
                        keyboardType="numeric"
                        right={<TextInput.Affix text="/ 1%" />}
                      />

                      <PrimaryButton
                        style={styles.btnContainer}
                        onPress={checkValues}
                      >
                        start
                      </PrimaryButton>
                    </View>
                  </>
                </KeyboardAvoidingView>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
    backgroundColor: "#89a6be",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    height: "100%",
  },
  modalView: {
    opacity: 0.95,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
  },
  btnContainer: {
    backgroundColor: "transparent",
    margin: 10,
    padding: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  iconButton: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    position: "absolute",
    right: 0,
    top: 0,
    margin: 10,
    borderColor: "black",
  },
  text: {
    height: 100,
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  show: {
    padding: 15,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: "rgba(245,245,245,0.8)",
    borderColor: "gray",
  },
});

export default ModelContainer;
