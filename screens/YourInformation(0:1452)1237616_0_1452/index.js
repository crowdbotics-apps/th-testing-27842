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
      <View style={styles.View_0_1453}>
        <Text style={styles.Text_0_1453}>Your Information</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00d/691e/8119713fcfac13484633cc28d677925f"
        }}
        style={styles.ImageBackground_0_1454}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00d/691e/8119713fcfac13484633cc28d677925f"
        }}
        style={styles.ImageBackground_0_1455}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1456}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1457}
      />
      <View style={styles.View_0_1458}>
        <Text style={styles.Text_0_1458}>Street Address</Text>
      </View>
      <View style={styles.View_0_1459}>
        <Text style={styles.Text_0_1459}>Gender</Text>
      </View>
      <View style={styles.View_0_1460}>
        <Text style={styles.Text_0_1460}>Zip Code</Text>
      </View>
      <View style={styles.View_0_1461}>
        <Text style={styles.Text_0_1461}>Birth Year</Text>
      </View>
      <View style={styles.View_0_1462} />
      <View style={styles.View_0_1463}>
        <Text style={styles.Text_0_1463}>Submit</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1464}
      />
      <View style={styles.View_0_1492}>
        <Text style={styles.Text_0_1492}>
          Please tell us more about yourself, so we can establish your voting
          status.
        </Text>
      </View>
      <View style={styles.View_0_1493}>
        <Text style={styles.Text_0_1493}>
          Please fill your demographic information, so candidates can take
          everyone’s views into consideration.
        </Text>
      </View>
      <View style={styles.View_0_1494}>
        <Text style={styles.Text_0_1494}>Demographic Info</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1495}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_1496}
      />
      <View style={styles.View_0_1497}>
        <Text style={styles.Text_0_1497}>Income</Text>
      </View>
      <View style={styles.View_0_1498}>
        <Text style={styles.Text_0_1498}>Race</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("116.93989071038251%") },
  View_0_1453: {
    width: wp("67.73333333333333%"),
    minWidth: wp("67.73333333333333%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("11.133879781420765%")
  },
  Text_0_1453: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_0_1454: {
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
  ImageBackground_0_1455: {
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
  ImageBackground_0_1456: {
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
  ImageBackground_0_1457: {
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
  View_0_1458: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("29.098360655737704%")
  },
  Text_0_1458: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1459: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("73.36065573770492%")
  },
  Text_0_1459: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1460: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("37.295081967213115%")
  },
  Text_0_1460: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1461: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("45.28688524590164%")
  },
  Text_0_1461: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1462: {
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
  View_0_1463: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("106.9672131147541%")
  },
  Text_0_1463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_0_1464: {
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
  View_0_1492: {
    width: wp("73.6%"),
    minWidth: wp("73.6%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("18.0327868852459%")
  },
  Text_0_1492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1493: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.000000000000002%"),
    top: hp("62.704918032786885%")
  },
  Text_0_1493: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1494: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("56.284153005464475%")
  },
  Text_0_1494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1495: {
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
  ImageBackground_0_1496: {
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
  View_0_1497: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("81.55737704918032%")
  },
  Text_0_1497: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1498: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("89.54918032786885%")
  },
  Text_0_1498: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
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
