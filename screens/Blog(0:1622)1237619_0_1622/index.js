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
      <View style={styles.View_0_1623} />
      <View style={styles.View_0_1624}>
        <Text style={styles.Text_0_1624}>Blog</Text>
      </View>
      <View style={styles.View_0_1625}>
        <Text style={styles.Text_0_1625}>
          Something about keeping you up to date on what’s going on with our
          stance on the issues.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1626}
      />
      <View style={styles.View_0_1654}>
        <Text style={styles.Text_0_1654}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          venenatis libero sed vehicula blandit. Proin vel laoreet tellus. Donec
          tincidunt fermentum pellentesque...
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4525/9c4f/ae194716b1437e5b43e7110a60e98d15"
        }}
        style={styles.ImageBackground_0_1655}
      />
      <View style={styles.View_0_1656}>
        <Text style={styles.Text_0_1656}>Thursday</Text>
      </View>
      <View style={styles.View_0_1657}>
        <Text style={styles.Text_0_1657}>Thursday</Text>
      </View>
      <View style={styles.View_0_1658}>
        <Text style={styles.Text_0_1658}>Read</Text>
      </View>
      <View style={styles.View_0_1659}>
        <Text style={styles.Text_0_1659}>Read</Text>
      </View>
      <View style={styles.View_0_1660}>
        <Text style={styles.Text_0_1660}>Latest Post</Text>
      </View>
      <View style={styles.View_0_1661}>
        <Text style={styles.Text_0_1661}>Change is out!</Text>
      </View>
      <View style={styles.View_0_1662}>
        <Text style={styles.Text_0_1662}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          venenatis libero sed vehicula blandit. Proin vel laoreet tellus. Donec
          tincidunt…
        </Text>
      </View>
      <View style={styles.View_0_1663}>
        <Text style={styles.Text_0_1663}>A new title goes here.</Text>
      </View>
      <View style={styles.View_0_1664}>
        <Text style={styles.Text_0_1664}>Thursday</Text>
      </View>
      <View style={styles.View_0_1665}>
        <Text style={styles.Text_0_1665}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          venenatis libero sed vehicula blandit. Proin vel laoreet tellus...
        </Text>
      </View>
      <View style={styles.View_0_1666}>
        <Text style={styles.Text_0_1666}>A new title goes here.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4525/9c4f/ae194716b1437e5b43e7110a60e98d15"
        }}
        style={styles.ImageBackground_0_1667}
      />
      <View style={styles.View_0_1668}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_1668_0_2326}
        />
        <View style={styles.View_I0_1668_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_1668_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_1668_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_1669}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e4/3034/9350e2671e57133946b00f52e570adf5"
          }}
          style={styles.ImageBackground_0_1670}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8796/2848/5fd918028397fd03c3c5b2e496aaefe7"
          }}
          style={styles.ImageBackground_0_1671}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad00/04dc/c8857babdfdd1c0b2a45fd1ede96785f"
          }}
          style={styles.ImageBackground_0_1672}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e4/3034/9350e2671e57133946b00f52e570adf5"
          }}
          style={styles.ImageBackground_0_1673}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a3/135b/8f3c77f4531b16229a418458046d38e0"
          }}
          style={styles.ImageBackground_0_1676}
        />
      </View>
      <View style={styles.View_0_1677}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e4/3034/9350e2671e57133946b00f52e570adf5"
          }}
          style={styles.ImageBackground_0_1678}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8796/2848/5fd918028397fd03c3c5b2e496aaefe7"
          }}
          style={styles.ImageBackground_0_1679}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad00/04dc/c8857babdfdd1c0b2a45fd1ede96785f"
          }}
          style={styles.ImageBackground_0_1680}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e4/3034/9350e2671e57133946b00f52e570adf5"
          }}
          style={styles.ImageBackground_0_1681}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a3/135b/8f3c77f4531b16229a418458046d38e0"
          }}
          style={styles.ImageBackground_0_1684}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("105.87431693989072%") },
  View_0_1623: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 50, 36, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1624: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("10.382513661202186%")
  },
  Text_0_1624: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_1625: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.666666666666668%"),
    top: hp("16.666666666666664%")
  },
  Text_0_1625: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1626: {
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
  View_0_1654: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("39.61748633879781%")
  },
  Text_0_1654: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1655: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("55.19125683060109%")
  },
  View_0_1656: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("35.10928961748634%")
  },
  Text_0_1656: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1657: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%"),
    top: hp("62.158469945355186%")
  },
  Text_0_1657: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1658: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("58.7431693989071%")
  },
  Text_0_1658: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1659: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("32.240437158469945%")
  },
  Text_0_1659: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1660: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("26.912568306010932%")
  },
  Text_0_1660: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1661: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("30.46448087431694%")
  },
  Text_0_1661: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1662: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("66.66666666666666%")
  },
  Text_0_1662: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1663: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.800000000000001%"),
    top: hp("57.513661202185794%")
  },
  Text_0_1663: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1664: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%"),
    top: hp("85.92896174863388%")
  },
  Text_0_1664: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1665: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("90.43715846994536%")
  },
  Text_0_1665: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1666: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.800000000000001%"),
    top: hp("81.28415300546447%")
  },
  Text_0_1666: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1667: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78.96174863387978%")
  },
  View_0_1668: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("1.2295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1668_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5464480874316939%")
  },
  View_I0_1668_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1668_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1668_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.09392076502732238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%")
  },
  View_0_1669: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("55.46448087431693%")
  },
  ImageBackground_0_1670: {
    width: wp("0.32000001271565753%"),
    minWidth: wp("0.32000001271565753%"),
    height: hp("0.7614753936809269%"),
    minHeight: hp("0.7614753936809269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6800130208333144%"),
    top: hp("0%")
  },
  ImageBackground_0_1671: {
    width: wp("0.47999998728434246%"),
    minWidth: wp("0.47999998728434246%"),
    height: hp("0.8494262486859097%"),
    minHeight: hp("0.8494262486859097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1599934895833286%"),
    top: hp("0%")
  },
  ImageBackground_0_1672: {
    width: wp("0.47999998728434246%"),
    minWidth: wp("0.47999998728434246%"),
    height: hp("0.8494262486859097%"),
    minHeight: hp("0.8494262486859097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5599934895833201%"),
    top: hp("0%")
  },
  ImageBackground_0_1673: {
    width: wp("0.32000001271565753%"),
    minWidth: wp("0.32000001271565753%"),
    height: hp("0.7614753936809269%"),
    minHeight: hp("0.7614753936809269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1999999999999886%"),
    top: hp("0%")
  },
  ImageBackground_0_1676: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  },
  View_0_1677: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%"),
    top: hp("28.96174863387978%")
  },
  ImageBackground_0_1678: {
    width: wp("0.32000001271565753%"),
    minWidth: wp("0.32000001271565753%"),
    height: hp("0.7614753936809269%"),
    minHeight: hp("0.7614753936809269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6800130208333144%"),
    top: hp("0%")
  },
  ImageBackground_0_1679: {
    width: wp("0.47999998728434246%"),
    minWidth: wp("0.47999998728434246%"),
    height: hp("0.8494262486859097%"),
    minHeight: hp("0.8494262486859097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1599934895833286%"),
    top: hp("0%")
  },
  ImageBackground_0_1680: {
    width: wp("0.47999998728434246%"),
    minWidth: wp("0.47999998728434246%"),
    height: hp("0.8494262486859097%"),
    minHeight: hp("0.8494262486859097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5599934895833201%"),
    top: hp("0%")
  },
  ImageBackground_0_1681: {
    width: wp("0.32000001271565753%"),
    minWidth: wp("0.32000001271565753%"),
    height: hp("0.7614753936809269%"),
    minHeight: hp("0.7614753936809269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1999999999999886%"),
    top: hp("0%")
  },
  ImageBackground_0_1684: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
