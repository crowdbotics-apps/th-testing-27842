import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1398}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1399}
      />
      <View style={styles.View_0_1400}>
        <Text style={styles.Text_0_1400}>Income</Text>
      </View>
      <View style={styles.View_0_1401}>
        <Text style={styles.Text_0_1401}>Race</Text>
      </View>
      <View style={styles.View_0_1402} />
      <View style={styles.View_0_1403} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad7/94d8/2303116fcccfb4b6331372169107083e"
        }}
        style={styles.ImageBackground_0_1406}
      />
      <View style={styles.View_0_1407}>
        <Text style={styles.Text_0_1407}>Your Information</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a30/3a82/6c4bd4190785b8b0f0e34aee61af35a7"
        }}
        style={styles.ImageBackground_0_1408}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00d/691e/8119713fcfac13484633cc28d677925f"
        }}
        style={styles.ImageBackground_0_1409}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1410}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1411}
      />
      <View style={styles.View_0_1412} />
      <View style={styles.View_0_1413}>
        <Text style={styles.Text_0_1413}>Street Address</Text>
      </View>
      <View style={styles.View_0_1414}>
        <Text style={styles.Text_0_1414}>Gender</Text>
      </View>
      <View style={styles.View_0_1415}>
        <Text style={styles.Text_0_1415}>Male</Text>
      </View>
      <View style={styles.View_0_1416}>
        <Text style={styles.Text_0_1416}>Female</Text>
      </View>
      <View style={styles.View_0_1417}>
        <Text style={styles.Text_0_1417}>Zip Code</Text>
      </View>
      <View style={styles.View_0_1418}>
        <Text style={styles.Text_0_1418}>Birth Year</Text>
      </View>
      <View style={styles.View_0_1419} />
      <View style={styles.View_0_1420}>
        <Text style={styles.Text_0_1420}>Submit</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1421}
      />
      <View style={styles.View_0_1449}>
        <Text style={styles.Text_0_1449}>
          Please tell us more about yourself, so we can establish your voting
          status.
        </Text>
      </View>
      <View style={styles.View_0_1450}>
        <Text style={styles.Text_0_1450}>
          Please fill your demographic information, so candidates can take
          everyone’s views into consideration.
        </Text>
      </View>
      <View style={styles.View_0_1451}>
        <Text style={styles.Text_0_1451}>Demographic Info</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("116.93989071038251%") },
  ImageBackground_0_1398: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("85.58743169398907%")
  },
  ImageBackground_0_1399: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("93.5792349726776%")
  },
  View_0_1400: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("81.55737704918032%")
  },
  Text_0_1400: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1401: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("89.54918032786885%")
  },
  Text_0_1401: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1402: {
    width: wp("76.71536458333334%"),
    minWidth: wp("76.71536458333334%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("71.99453551912568%"),
    backgroundColor: "rgba(228, 231, 236, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1403: {
    width: wp("76.71536458333334%"),
    minWidth: wp("76.71536458333334%"),
    height: hp("13.866120218579233%"),
    minHeight: hp("13.866120218579233%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("77.73224043715847%"),
    backgroundColor: "rgba(76, 157, 212, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1406: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.46666666666667%"),
    top: hp("74.52185792349727%")
  },
  View_0_1407: {
    width: wp("67.73333333333333%"),
    minWidth: wp("67.73333333333333%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("11.133879781420765%")
  },
  Text_0_1407: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_0_1408: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("33.26502732240437%")
  },
  ImageBackground_0_1409: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("77.52732240437157%")
  },
  ImageBackground_0_1410: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("41.32513661202186%")
  },
  ImageBackground_0_1411: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("49.31693989071038%")
  },
  View_0_1412: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.133333333333333%"),
    top: hp("27.18579234972678%"),
    backgroundColor: "rgba(193, 50, 36, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1413: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("29.098360655737704%")
  },
  Text_0_1413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1414: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("73.63387978142076%")
  },
  Text_0_1414: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  View_0_1415: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("80.60109289617486%")
  },
  Text_0_1415: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  View_0_1416: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("86.0655737704918%")
  },
  Text_0_1416: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  View_0_1417: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("37.295081967213115%")
  },
  Text_0_1417: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1418: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("45.28688524590164%")
  },
  Text_0_1418: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1419: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("104.50819672131149%"),
    backgroundColor: "rgba(38, 71, 122, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1420: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("106.9672131147541%")
  },
  Text_0_1420: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_0_1421: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("1.2295081967213115%")
  },
  View_0_1449: {
    width: wp("73.6%"),
    minWidth: wp("73.6%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("18.0327868852459%")
  },
  Text_0_1449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1450: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.000000000000002%"),
    top: hp("62.704918032786885%")
  },
  Text_0_1450: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1451: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("56.284153005464475%")
  },
  Text_0_1451: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
