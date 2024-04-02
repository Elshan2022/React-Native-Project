import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../theme/colors/colors";

interface IModal {
  alertMessage: string;
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const CustomModal = (props: IModal) => {
  return (
    <View>
      <Modal transparent={true} visible={props.isVisible} animationType="fade">
        <View style={styles.modalView}>
          <View style={styles.alert}>
            <Text style={styles.alertTitle}>Attention!</Text>
            <Text style={styles.alertMessage}>{props.alertMessage}</Text>
            <View style={styles.alertButtonGroup}>
              <TouchableOpacity
                onPress={props.onCancel}
                style={[styles.button, styles.cancelButton]}
              >
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={props.onConfirm}
                style={[styles.button, styles.confirmButton]}
              >
                <Text style={styles.text}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  alert: {
    width: "100%",
    maxWidth: 300,
    margin: 48,
    elevation: 24,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  alertTitle: {
    margin: 24,
    fontWeight: "bold",
    fontSize: 24,
    color: "#000",
  },
  alertMessage: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    fontSize: 16,
    color: "#000",
  },
  alertButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 35,
  },
  cancelButton: {
    backgroundColor: colors.red,
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    marginRight: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
