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
      <View style={styles.View_0_1733}>
        <View style={styles.View_0_1734} />
      </View>
      <View style={styles.View_0_1735}>
        <Text style={styles.Text_0_1735}>
          As of right now, who would you vote for?
        </Text>
      </View>
      <View style={styles.View_0_1736}>
        <Text style={styles.Text_0_1736}>
          Select the candidates you’d vote for right now. You can change this at
          any time.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1737}
      />
      <View style={styles.View_0_1765}>
        <View style={styles.View_0_1766} />
      </View>
      <View style={styles.View_0_1767}>
        <Text style={styles.Text_0_1767}>Search</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1768}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1769}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1770}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1771}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
        }}
        style={styles.ImageBackground_0_1772}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
        }}
        style={styles.ImageBackground_0_1773}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
        }}
        style={styles.ImageBackground_0_1774}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c79f/af0d/b020e70ac82fdda534fa4284964f2a40"
        }}
        style={styles.ImageBackground_0_1775}
      />
      <View style={styles.View_0_1778}>
        <Text style={styles.Text_0_1778}>Hillary Clinton Democratic Party</Text>
      </View>
      <View style={styles.View_0_1779}>
        <Text style={styles.Text_0_1779}>I’m Undecided</Text>
      </View>
      <View style={styles.View_0_1780}>
        <Text style={styles.Text_0_1780}>Jeb Bush Republican Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1781}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
        }}
        style={styles.ImageBackground_0_1782}
      />
      <View style={styles.View_0_1783}>
        <Text style={styles.Text_0_1783}>Ben Carson Republican Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1784}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
        }}
        style={styles.ImageBackground_0_1785}
      />
      <View style={styles.View_0_1786}>
        <Text style={styles.Text_0_1786}>Joe Biden Democratic Party</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_1787}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
        }}
        style={styles.ImageBackground_0_1788}
      />
      <View style={styles.View_0_1789}>
        <Text style={styles.Text_0_1789}>Rand Paul Republican Party</Text>
      </View>
      <View style={styles.View_0_1790}>
        <Text style={styles.Text_0_1790}>Donald Trump Republican Party</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1733: {
    width: wp("103.73333333333335%"),
    minWidth: wp("103.73333333333335%"),
    height: hp("108.82758620689654%"),
    minHeight: hp("108.82758620689654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.866666666666667%"),
    top: hp("-2.7586206896551726%")
  },
  View_0_1734: {
    width: wp("103.73333333333335%"),
    minWidth: wp("103.73333333333335%"),
    height: hp("108.82758620689654%"),
    minHeight: hp("108.82758620689654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 77, 127, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1735: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("11.586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.2%"),
    top: hp("10.068965517241379%")
  },
  Text_0_1735: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_1736: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("4.689655172413794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("26.482758620689655%")
  },
  Text_0_1736: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1737: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.517241379310345%"),
    minHeight: hp("5.517241379310345%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("1.2413793103448276%")
  },
  View_0_1765: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("7.03448275862069%"),
    minHeight: hp("7.03448275862069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("35.58620689655172%")
  },
  View_0_1766: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("7.03448275862069%"),
    minHeight: hp("7.03448275862069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1767: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.0689655172413794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("38.20689655172414%")
  },
  Text_0_1767: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_0_1768: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("64%")
  },
  ImageBackground_0_1769: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("74.48275862068967%")
  },
  ImageBackground_0_1770: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("53.79310344827586%")
  },
  ImageBackground_0_1771: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("85.10344827586206%")
  },
  ImageBackground_0_1772: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("68.27586206896552%")
  },
  ImageBackground_0_1773: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("47.58620689655172%")
  },
  ImageBackground_0_1774: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("78.89655172413794%")
  },
  ImageBackground_0_1775: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("57.931034482758626%")
  },
  View_0_1778: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("4.551724137931035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("65.93103448275862%")
  },
  Text_0_1778: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1779: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("1.5172413793103448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("46.48275862068966%")
  },
  Text_0_1779: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1780: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.310344827586207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("76.55172413793103%")
  },
  Text_0_1780: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1781: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("95.58620689655173%")
  },
  ImageBackground_0_1782: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("89.37931034482759%")
  },
  View_0_1783: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3.310344827586207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("87.0344827586207%")
  },
  Text_0_1783: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1784: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("102.48275862068965%")
  },
  ImageBackground_0_1785: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("99.86206896551724%")
  },
  View_0_1786: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("4.551724137931035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("97.51724137931035%")
  },
  Text_0_1786: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_1787: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.27586206896551724%"),
    minHeight: hp("0.27586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("102.89655172413794%")
  },
  ImageBackground_0_1788: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.206896551724138%"),
    minHeight: hp("2.206896551724138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("96.6896551724138%")
  },
  View_0_1789: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.310344827586207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("104.41379310344827%")
  },
  Text_0_1789: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_1790: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.310344827586207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("55.44827586206896%")
  },
  Text_0_1790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
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
