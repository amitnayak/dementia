import { StyleSheet, Button, View, Text, ScrollView } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import RadioGroup from "react-native-radio-buttons-group";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  buttonStyle: {
    margin: 10,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export function SupportPage({ navigation }: any) {
  const [requestDetails, setRequestDetails] = React.useState("");
  const [selectedId, setSelectedId] = React.useState();

  const helpList = [
    { name: "Discussion 1", loc: "Loc1" },
    { name: "Discussion 2", loc: "Loc2" },
    { name: "Discussion 3", loc: "Loc3" },
  ];

  let helpRenderList = [];

  for (let i = 0; i < helpList.length; i++) {
    helpRenderList.push(
      <View key={i}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.item}> {helpList[i].name}</Text>
          <Text style={styles.item}> {helpList[i].loc}</Text>
        </View>
      </View>
    );
  }

  const radioButtons = React.useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Patient Care Service",
        value: "Patient Care Service",
      },
      {
        id: "2",
        label: "Medical advice",
        value: "Medical advice",
      },
      {
        id: "3",
        label: "Job information",
        value: "Job information",
      },
      {
        id: "4",
        label: "Mental health guidance for caretakers",
        value: "Mental health guidance for caretakers",
      },
      {
        id: "5",
        label: "Mental health guidance for patients",
        value: "Mental health guidance for patients",
      },
      {
        id: "6",
        label: "Education on patient care",
        value: "Education on patient care",
      },
    ],
    []
  );

  const handleSupport = () => {};

  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <RadioGroup
            radioButtons={radioButtons}
            // onPress={setSelectedId}
            selectedId={selectedId}
          />
        </SafeAreaView>
        <SafeAreaView>
          <Text style={styles.textStyle}>Request Details</Text>
          <TextInput
            style={styles.input}
            onChangeText={setRequestDetails}
            value={requestDetails}
          />
        </SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SafeAreaView style={styles.buttonStyle}>
            <Button title="Request for support" onPress={handleSupport} />
          </SafeAreaView>
        </View>
        <SafeAreaView>
          <Text style={styles.subHeading}>Help around me</Text>
          {helpRenderList}
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
