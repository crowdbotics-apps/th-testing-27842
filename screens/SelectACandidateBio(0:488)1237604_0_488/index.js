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
      <View style={styles.View_0_489} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d0d/40aa/23c043da86413b72bfe72ff44f472f09"
        }}
        style={styles.ImageBackground_0_492}
      />
      <View style={styles.View_0_494}>
        <Text style={styles.Text_0_494}>Back</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e5/7bb8/e3710f9f147464f63c4f11bd734654de"
        }}
        style={styles.ImageBackground_0_495}
      />
      <View style={styles.View_0_523}>
        <Text style={styles.Text_0_523}>
          Senator Rand Paul, M.D. is one of the nation’s leading advocates for
          liberty. Elected to the U.S. Senate in 2010, Dr. Paul has proven to be
          an outspoken champion for constitutional liberties and fiscal
          responsibility. As a fierce advocate against government overreach,
          Rand has fought tirelessly to return government to its limited,
          constitutional scope. During his free time, Dr. Paul performs pro-bono
          eye surgeries for patients across Kentucky. Additionally, he provides
          free eye surgery to children from around the world through his
          participation in the Children of the Americas Program. Most recently,
          he traveled to Guatemala on a medical mission trip with the University
          of Utah&#39;s Moran Eye Center. During the week over 200 patients,
          many of them blind with cataracts, had their vision restored by Dr.
          Paul. Dr. Paul&#39;s entrance into politics is indicative of his
          life’s work as a surgeon: a desire to diagnose problems and provide
          practical solutions, whether it be in Bowling Green, Kentucky or
          Washington, D.C.
        </Text>
      </View>
      <View style={styles.View_0_524}>
        <Text style={styles.Text_0_524}>Republican Party</Text>
      </View>
      <View style={styles.View_0_525}>
        <Text style={styles.Text_0_525}>Rand Paul</Text>
      </View>
      <View style={styles.View_0_526}>
        <View style={styles.View_0_528} />
        <View style={styles.View_0_527} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/430e/3bbc/779c0ad7e64a60d9816c130511cff3ea"
          }}
          style={styles.ImageBackground_0_529}
        />
      </View>
      <View style={styles.View_0_530} />
      <View style={styles.View_0_531} />
      <View style={styles.View_0_532}>
        <Text style={styles.Text_0_532}>Select Rand Paul</Text>
      </View>
      <View style={styles.View_0_533}>
        <Text style={styles.Text_0_533}>Select Rand Paul</Text>
      </View>
      <View style={styles.View_0_534}>
        <View style={styles.View_0_536} />
        <View style={styles.View_0_535} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5944/b1c6/6890c8431d157ae02cc20fe859ebf798"
          }}
          style={styles.ImageBackground_0_537}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4c/9ea5/c9440cefac9f37e9a1fd0c313f513083"
        }}
        style={styles.ImageBackground_0_538}
      />
      <View style={styles.View_0_539}>
        <Text style={styles.Text_0_539}>PLAY</Text>
      </View>
      <View style={styles.View_0_540}>
        <Text style={styles.Text_0_540}>
          &quot;I am running for president to return our country to the
          principles of liberty and limited government.&quot;
        </Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("213.11475409836066%") },
  View_0_489: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(76, 157, 212, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_492: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("1.5027322404371584%")
  },
  View_0_494: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("1.639344262295082%")
  },
  Text_0_494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_495: {
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
  View_0_523: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    minHeight: hp("84.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("60.65573770491803%")
  },
  Text_0_523: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_524: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.333333333333333%"),
    top: hp("56.14754098360656%")
  },
  Text_0_524: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_525: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.333333333333333%"),
    top: hp("51.502732240437155%")
  },
  Text_0_525: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_526: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("29.37158469945355%"),
    minHeight: hp("29.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("17.759562841530055%")
  },
  View_0_528: {
    width: wp("85.19480794270832%"),
    minWidth: wp("85.19480794270832%"),
    height: hp("29.37158469945355%"),
    minHeight: hp("29.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_527: {
    width: wp("85.19480794270832%"),
    minWidth: wp("85.19480794270832%"),
    height: hp("29.37158469945355%"),
    minHeight: hp("29.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_529: {
    width: wp("85.19480794270832%"),
    minWidth: wp("85.19480794270832%"),
    height: hp("29.37158469945355%"),
    minHeight: hp("29.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_530: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("9.289617486338798%"),
    backgroundColor: "rgba(193, 50, 36, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_531: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("202.59562841530055%"),
    backgroundColor: "rgba(193, 50, 36, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_532: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("11.202185792349727%")
  },
  Text_0_532: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_533: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.266666666666666%"),
    top: hp("204.37158469945356%")
  },
  Text_0_533: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_534: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("172.95081967213116%")
  },
  View_0_536: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_535: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_537: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_538: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("179.23497267759564%")
  },
  View_0_539: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.4%"),
    top: hp("184.15300546448088%")
  },
  Text_0_539: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_0_540: {
    width: wp("82.13333333333334%"),
    minWidth: wp("82.13333333333334%"),
    minHeight: hp("17.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("149.59016393442624%")
  },
  Text_0_540: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 22,
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
