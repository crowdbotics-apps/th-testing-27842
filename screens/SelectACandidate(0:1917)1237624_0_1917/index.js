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
      <View style={styles.View_0_1918} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1919}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1920}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1921}
      />
      <View style={styles.View_0_1922}>
        <Text style={styles.Text_0_1922}>Select Candidates</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1923}
      />
      <View style={styles.View_0_1951}>
        <Text style={styles.Text_0_1951}>
          Candidates will send questions for you to answer. Select the
          candidates below and don’t worry, you can change this at any time.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1644/f21f/d15aafd127035a4322d359fddd1390af"
        }}
        style={styles.ImageBackground_0_1952}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d4/ca72/e7c4b58b0fc66084540fe5e9e79db28d"
        }}
        style={styles.ImageBackground_0_1955}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d4/ca72/e7c4b58b0fc66084540fe5e9e79db28d"
        }}
        style={styles.ImageBackground_0_1957}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d4/ca72/e7c4b58b0fc66084540fe5e9e79db28d"
        }}
        style={styles.ImageBackground_0_1959}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d4/ca72/e7c4b58b0fc66084540fe5e9e79db28d"
        }}
        style={styles.ImageBackground_0_1961}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60d4/ca72/e7c4b58b0fc66084540fe5e9e79db28d"
        }}
        style={styles.ImageBackground_0_1963}
      />
      <View style={styles.View_0_1965}>
        <Text style={styles.Text_0_1965}>Hillary Clinton Democratic Party</Text>
      </View>
      <View style={styles.View_0_1966}>
        <Text style={styles.Text_0_1966}>Jeb Bush Republican Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1967}
      />
      <View style={styles.View_0_1968}>
        <Text style={styles.Text_0_1968}>Ben Carson Republican Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1969}
      />
      <View style={styles.View_0_1970}>
        <Text style={styles.Text_0_1970}>Joe Biden Democratic Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1971}
      />
      <View style={styles.View_0_1972}>
        <Text style={styles.Text_0_1972}>Rand Paul Republican Party</Text>
      </View>
      <View style={styles.View_0_1973}>
        <Text style={styles.Text_0_1973}>Donald Trump Republican Party</Text>
      </View>
      <View style={styles.View_0_1974}>
        <Text style={styles.Text_0_1974}>View Bio</Text>
      </View>
      <View style={styles.View_0_1975}>
        <Text style={styles.Text_0_1975}>View Bio</Text>
      </View>
      <View style={styles.View_0_1976}>
        <Text style={styles.Text_0_1976}>View Bio</Text>
      </View>
      <View style={styles.View_0_1977}>
        <Text style={styles.Text_0_1977}>View Bio</Text>
      </View>
      <View style={styles.View_0_1978}>
        <Text style={styles.Text_0_1978}>View Bio</Text>
      </View>
      <View style={styles.View_0_1979}>
        <Text style={styles.Text_0_1979}>View Bio</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1918: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(76, 157, 212, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1919: {
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
  ImageBackground_0_1920: {
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
  ImageBackground_0_1921: {
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
  View_0_1922: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("11.394302848575713%")
  },
  Text_0_1922: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  ImageBackground_0_1923: {
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
  View_0_1951: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("7.646176911544228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("18.290854572713645%")
  },
  Text_0_1951: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1952: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("32.23388305847077%")
  },
  ImageBackground_0_1955: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("43.62818590704648%")
  },
  ImageBackground_0_1957: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("55.02248875562219%")
  },
  ImageBackground_0_1959: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("66.4167916041979%")
  },
  ImageBackground_0_1961: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("77.81109445277362%")
  },
  ImageBackground_0_1963: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("89.50524737631184%")
  },
  View_0_1965: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("41.22938530734633%")
  },
  Text_0_1965: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1966: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("52.7736131934033%")
  },
  Text_0_1966: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1967: {
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
  View_0_1968: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("64.16791604197901%")
  },
  Text_0_1968: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1969: {
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
  View_0_1970: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("75.56221889055472%")
  },
  Text_0_1970: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1971: {
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
  View_0_1972: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("86.95652173913044%")
  },
  Text_0_1972: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1973: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("29.83508245877061%")
  },
  Text_0_1973: {
    color: "rgba(0, 113, 188, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1974: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("32.98350824587706%")
  },
  Text_0_1974: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1975: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("44.07796101949025%")
  },
  Text_0_1975: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1976: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("55.472263868065966%")
  },
  Text_0_1976: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1977: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("67.01649175412294%")
  },
  Text_0_1977: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1978: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("78.56071964017991%")
  },
  Text_0_1978: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1979: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("90.10494752623688%")
  },
  Text_0_1979: {
    color: "rgba(212, 212, 212, 1)",
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
