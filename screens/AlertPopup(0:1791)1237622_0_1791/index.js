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
      <View style={styles.View_0_1792} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1793}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1794}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1795}
      />
      <View style={styles.View_0_1796}>
        <Text style={styles.Text_0_1796}>Select a Candidate</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
        }}
        style={styles.ImageBackground_0_1797}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
        }}
        style={styles.ImageBackground_0_1798}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec7/9c50/c61d9c90666c64bc9bd705b0694f5440"
        }}
        style={styles.ImageBackground_0_1799}
      />
      <View style={styles.View_0_1802}>
        <Text style={styles.Text_0_1802}>Hillary Clinton Democratic Party</Text>
      </View>
      <View style={styles.View_0_1803}>
        <Text style={styles.Text_0_1803}>Jeb Bush Republican Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1804}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
        }}
        style={styles.ImageBackground_0_1805}
      />
      <View style={styles.View_0_1806}>
        <Text style={styles.Text_0_1806}>Ben Carson Republican Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1807}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
        }}
        style={styles.ImageBackground_0_1808}
      />
      <View style={styles.View_0_1809}>
        <Text style={styles.Text_0_1809}>Joe Biden Democratic Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1810}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
        }}
        style={styles.ImageBackground_0_1811}
      />
      <View style={styles.View_0_1812}>
        <Text style={styles.Text_0_1812}>Rand Paul Republican Party</Text>
      </View>
      <View style={styles.View_0_1813}>
        <Text style={styles.Text_0_1813}>Donald Trump Republican Party</Text>
      </View>
      <View style={styles.View_0_1814}>
        <Text style={styles.Text_0_1814}>
          Candidates will send questions for you to answer. Select the
          candidates below and don’t worry, you can change this at any time.
        </Text>
      </View>
      <View style={styles.View_0_1815} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6220/b805/163f9875f7e7726c7637b335b2a80f96"
        }}
        style={styles.ImageBackground_0_1816}
      />
      <View style={styles.View_0_1817} />
      <View style={styles.View_0_1818} />
      <View style={styles.View_0_1819}>
        <Text style={styles.Text_0_1819}>Yes!</Text>
      </View>
      <View style={styles.View_0_1820}>
        <Text style={styles.Text_0_1820}>No, Thank you</Text>
      </View>
      <View style={styles.View_0_1821}>
        <Text style={styles.Text_0_1821}>Can we notify you?</Text>
      </View>
      <View style={styles.View_0_1822}>
        <Text style={styles.Text_0_1822}>
          Do you mind if we notify you when a new question has been submitted?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1823}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1792: {
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
  ImageBackground_0_1793: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("39.130434782608695%")
  },
  ImageBackground_0_1794: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("50.524737631184415%")
  },
  ImageBackground_0_1795: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("62.06896551724138%")
  },
  View_0_1796: {
    width: wp("67.46666666666667%"),
    minWidth: wp("67.46666666666667%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("10.794602698650674%")
  },
  Text_0_1796: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  ImageBackground_0_1797: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("43.77811094452774%")
  },
  ImageBackground_0_1798: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("55.322338830584705%")
  },
  ImageBackground_0_1799: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("32.53373313343329%")
  },
  View_0_1802: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("41.22938530734633%")
  },
  Text_0_1802: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1803: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("52.7736131934033%")
  },
  Text_0_1803: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1804: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("73.46326836581709%")
  },
  ImageBackground_0_1805: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("66.71664167916042%")
  },
  View_0_1806: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("64.16791604197901%")
  },
  Text_0_1806: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1807: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("84.8575712143928%")
  },
  ImageBackground_0_1808: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("78.11094452773614%")
  },
  View_0_1809: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("75.56221889055472%")
  },
  Text_0_1809: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1810: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("96.25187406296851%")
  },
  ImageBackground_0_1811: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("89.50524737631184%")
  },
  View_0_1812: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("86.95652173913044%")
  },
  Text_0_1812: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1813: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("29.83508245877061%")
  },
  Text_0_1813: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1814: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("7.646176911544228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("18.290854572713645%")
  },
  Text_0_1814: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1815: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("94.00299850074963%"),
    minHeight: hp("94.00299850074963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.997001499250374%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.699999988079071,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1816: {
    width: wp("83.73333333333333%"),
    minWidth: wp("83.73333333333333%"),
    height: hp("35.23238380809595%"),
    minHeight: hp("35.23238380809595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("30.73463268365817%")
  },
  View_0_1817: {
    width: wp("33.040704345703126%"),
    minWidth: wp("33.040704345703126%"),
    height: hp("5.847076461769116%"),
    minHeight: hp("5.847076461769116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("54.5727136431784%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1818: {
    width: wp("33.040704345703126%"),
    minWidth: wp("33.040704345703126%"),
    height: hp("5.847076461769116%"),
    minHeight: hp("5.847076461769116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("54.5727136431784%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_0_1819: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.26666666666667%"),
    top: hp("56.37181409295352%")
  },
  Text_0_1819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_1820: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("56.37181409295352%")
  },
  Text_0_1820: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_1821: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("35.98200899550225%")
  },
  Text_0_1821: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_1822: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("43.32833583208396%")
  },
  Text_0_1822: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1823: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("1.3493253373313343%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
