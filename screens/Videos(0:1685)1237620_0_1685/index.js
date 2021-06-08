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
      <View style={styles.View_0_1686} />
      <View style={styles.View_0_1687}>
        <Text style={styles.Text_0_1687}>Videos</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1688}
      />
      <View style={styles.View_0_1716}>
        <Text style={styles.Text_0_1716}>
          Candidates will send questions for you to answer. Select the
          candidates below and don’t worry, you can change this at any time.
        </Text>
      </View>
      <View style={styles.View_0_1717}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_1717_0_2326}
        />
        <View style={styles.View_I0_1717_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_1717_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_1717_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_1718}>
        <View style={styles.View_0_1720} />
        <View style={styles.View_0_1719} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb42/c2fa/3775c0654d4109ad82e5958dc10b5aa0"
          }}
          style={styles.ImageBackground_0_1721}
        />
      </View>
      <View style={styles.View_0_1722}>
        <View style={styles.View_0_1724} />
        <View style={styles.View_0_1723} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb42/c2fa/3775c0654d4109ad82e5958dc10b5aa0"
          }}
          style={styles.ImageBackground_0_1725}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/9ea5/c9440cefac9f37e9a1fd0c313f513083"
        }}
        style={styles.ImageBackground_0_1726}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/9ea5/c9440cefac9f37e9a1fd0c313f513083"
        }}
        style={styles.ImageBackground_0_1727}
      />
      <View style={styles.View_0_1728}>
        <Text style={styles.Text_0_1728}>PLAY</Text>
      </View>
      <View style={styles.View_0_1729}>
        <Text style={styles.Text_0_1729}>PLAY</Text>
      </View>
      <View style={styles.View_0_1730} />
      <View style={styles.View_0_1731}>
        <Text style={styles.Text_0_1731}>Watched</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1686: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 50, 36, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1687: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("11.394302848575713%")
  },
  Text_0_1687: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  ImageBackground_0_1688: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("1.3493253373313343%")
  },
  View_0_1716: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("7.646176911544228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("18.290854572713645%")
  },
  Text_0_1716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1717: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("1.3493253373313343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1717_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5997001499250374%")
  },
  View_I0_1717_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1717_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1717_0_2334: {
    width: wp("5.5%"),
    height: hp("3.0922038980509745%"),
    top: hp("0.10307346326836586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%")
  },
  View_0_1718: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("27.2863568215892%"),
    minHeight: hp("27.2863568215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("31.93403298350825%")
  },
  View_0_1720: {
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
  View_0_1719: {
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
  ImageBackground_0_1721: {
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
  View_0_1722: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("27.2863568215892%"),
    minHeight: hp("27.2863568215892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("65.21739130434783%")
  },
  View_0_1724: {
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
  View_0_1723: {
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
  ImageBackground_0_1725: {
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
  ImageBackground_0_1726: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("13.493253373313344%"),
    minHeight: hp("13.493253373313344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("38.830584707646175%")
  },
  ImageBackground_0_1727: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("13.493253373313344%"),
    minHeight: hp("13.493253373313344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("72.11394302848576%")
  },
  View_0_1728: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333334%"),
    top: hp("44.22788605697151%")
  },
  Text_0_1728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_0_1729: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.4%"),
    top: hp("77.5112443778111%")
  },
  Text_0_1729: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_0_1730: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("67.46626686656671%"),
    backgroundColor: "rgba(208, 2, 27, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1731: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333333%"),
    top: hp("67.76611694152923%")
  },
  Text_0_1731: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
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
