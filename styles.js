import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
});
