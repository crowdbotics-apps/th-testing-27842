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
      <View style={styles.View_0_822}>
        <View style={styles.View_0_824} />
        <View style={styles.View_0_823} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb42/c2fa/3775c0654d4109ad82e5958dc10b5aa0"
          }}
          style={styles.ImageBackground_0_825}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/9ea5/c9440cefac9f37e9a1fd0c313f513083"
        }}
        style={styles.ImageBackground_0_826}
      />
      <View style={styles.View_0_827}>
        <Text style={styles.Text_0_827}>PLAY</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40f1/48b8/22c1ee6c862c909330d2a62ae440b0b6"
        }}
        style={styles.ImageBackground_0_828}
      />
      <View style={styles.View_0_858}>
        <Text style={styles.Text_0_858}>Register</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00d/691e/8119713fcfac13484633cc28d677925f"
        }}
        style={styles.ImageBackground_0_859}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_860}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_861}
      />
      <View style={styles.View_0_862}>
        <Text style={styles.Text_0_862}>Email</Text>
      </View>
      <View style={styles.View_0_863}>
        <Text style={styles.Text_0_863}>Username</Text>
      </View>
      <View style={styles.View_0_864}>
        <Text style={styles.Text_0_864}>Password</Text>
      </View>
      <View style={styles.View_0_865} />
      <View style={styles.View_0_866}>
        <Text style={styles.Text_0_866}>Submit</Text>
      </View>
      <View style={styles.View_0_867}>
        <Text style={styles.Text_0_867}>Login</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c06/ab20/7f1ba655f3055ca4255072809677ed10"
        }}
        style={styles.ImageBackground_0_870}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b30b/1a3f/f7e053cd586c237e24cf839d0bdcf583"
        }}
        style={styles.ImageBackground_0_871}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff3/16b7/c7ae82818cdf2b6c4ed4392491907cfb"
        }}
        style={styles.ImageBackground_0_874}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7c1/d49f/003995f9534ee2a3e57e1f49c8fcf87c"
        }}
        style={styles.ImageBackground_0_878}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_822: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("27.2863568215892%"),
    minHeight: hp("27.2863568215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("13.193403298350825%")
  },
  View_0_824: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("27.2863568215892%"),
    minHeight: hp("27.2863568215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_823: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("27.2863568215892%"),
    minHeight: hp("27.2863568215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_825: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("27.2863568215892%"),
    minHeight: hp("27.2863568215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_826: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("13.493253373313344%"),
    minHeight: hp("13.493253373313344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.733333333333334%"),
    top: hp("20.089955022488756%")
  },
  View_0_827: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.4%"),
    top: hp("25.487256371814095%")
  },
  Text_0_827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  ImageBackground_0_828: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("1.9490254872563717%")
  },
  View_0_858: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("6.146926536731634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("46.92653673163419%")
  },
  Text_0_858: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_0_859: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("61.844077961019494%")
  },
  ImageBackground_0_860: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("70.83958020989505%")
  },
  ImageBackground_0_861: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("79.83508245877061%")
  },
  View_0_862: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("57.271364317841076%")
  },
  Text_0_862: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_863: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("66.4167916041979%")
  },
  Text_0_863: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_864: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("75.41229385307346%")
  },
  Text_0_864: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_865: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("86.05697151424287%"),
    backgroundColor: "rgba(38, 71, 122, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_866: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.93333333333334%"),
    top: hp("88.75562218890555%")
  },
  Text_0_866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_867: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("48.425787106446776%")
  },
  Text_0_867: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_0_870: {
    width: wp("1.624242401123047%"),
    minWidth: wp("1.624242401123047%"),
    height: hp("1.4909212378368921%"),
    minHeight: hp("1.4909212378368921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.25455729166667%"),
    top: hp("48.87706293337706%")
  },
  ImageBackground_0_871: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("66.11694152923539%")
  },
  ImageBackground_0_874: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("74.96251874062968%")
  },
  ImageBackground_0_878: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("56.97151424287856%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
