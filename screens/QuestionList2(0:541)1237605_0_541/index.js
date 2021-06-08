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
      <View style={styles.View_0_542} />
      <View style={styles.View_0_543} />
      <View style={styles.View_0_544}>
        <Text style={styles.Text_0_544}>Candidate Questions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e5/7bb8/e3710f9f147464f63c4f11bd734654de"
        }}
        style={styles.ImageBackground_0_545}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4525/9c4f/ae194716b1437e5b43e7110a60e98d15"
        }}
        style={styles.ImageBackground_0_573}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4525/9c4f/ae194716b1437e5b43e7110a60e98d15"
        }}
        style={styles.ImageBackground_0_574}
      />
      <View style={styles.View_0_575} />
      <View style={styles.View_0_576} />
      <View style={styles.View_0_577}>
        <Text style={styles.Text_0_577}>Click to answer</Text>
      </View>
      <View style={styles.View_0_578}>
        <Text style={styles.Text_0_578}>Click to give a reason</Text>
      </View>
      <View style={styles.View_0_579}>
        <Text style={styles.Text_0_579}>( 15s left )</Text>
      </View>
      <View style={styles.View_0_580}>
        <Text style={styles.Text_0_580}>Click to answer</Text>
      </View>
      <View style={styles.View_0_581}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_581_0_2326}
        />
        <View style={styles.View_I0_581_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_581_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_581_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_582}>
        <Text style={styles.Text_0_582}>
          Another question that can be asked will go here?
        </Text>
      </View>
      <View style={styles.View_0_583}>
        <Text style={styles.Text_0_583}>
          More questions that can be asked will go here?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
        }}
        style={styles.ImageBackground_0_584}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917c/e1ea/113de2fd33844dc712e527d60c559dcc"
        }}
        style={styles.ImageBackground_0_585}
      />
      <View style={styles.View_0_586}>
        <Text style={styles.Text_0_586}>You answered NO</Text>
      </View>
      <View style={styles.View_0_587}>
        <Text style={styles.Text_0_587}>
          Do you agree that a wall should be placed between the U.S. and Mexico?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
        }}
        style={styles.ImageBackground_0_588}
      />
      <View style={styles.View_0_589}>
        <Text style={styles.Text_0_589}>Bush:</Text>
      </View>
      <View style={styles.View_0_590}>
        <Text style={styles.Text_0_590}>Clinton:</Text>
      </View>
      <View style={styles.View_0_591}>
        <View style={styles.View_0_592}>
          <View style={styles.View_0_593} />
        </View>
        <View style={styles.View_0_594}>
          <Text style={styles.Text_0_594}>Click to change</Text>
        </View>
        <View style={styles.View_0_595}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/15dd/345fd612d5cce397794f3a2924a1d1e4"
            }}
            style={styles.ImageBackground_0_596}
          />
          <View style={styles.View_0_597}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/cd08/d810d6bddf5324b250fa6fec1dc39df9"
              }}
              style={styles.ImageBackground_0_598}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/321f/dced/159d019553272e9994773ddcd89b0a5b"
              }}
              style={styles.ImageBackground_0_599}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f3/6caa/39fd9679943faf372df3ec52a091ebd6"
              }}
              style={styles.ImageBackground_0_600}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d8/50c5/6e7848d00d4e05c4c27c400a4252b261"
              }}
              style={styles.ImageBackground_0_607}
            />
          </View>
          <View style={styles.View_0_614}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d992/a639/4a0f75cd4a8a45055f5b3f9bb32a29cd"
              }}
              style={styles.ImageBackground_0_616}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/1da2/7cc28321d31cd386329d223cc21a489e"
              }}
              style={styles.ImageBackground_0_615}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47a1/bee6/833c268d888e68f2ae905314befbf931"
              }}
              style={styles.ImageBackground_0_617}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6845/dc7b/9cc4f1a831b84a0dffb92793dc4b3ecf"
              }}
              style={styles.ImageBackground_0_624}
            />
          </View>
        </View>
        <View style={styles.View_0_631}>
          <Text style={styles.Text_0_631}>I am not sure who to vote for</Text>
        </View>
        <View style={styles.View_0_632}>
          <Text style={styles.Text_0_632}>?</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("133.87978142076503%") },
  View_0_542: {
    width: wp("101.6%"),
    minWidth: wp("101.6%"),
    height: hp("23.08743169398907%"),
    minHeight: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_543: {
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
  View_0_544: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("32.240437158469945%")
  },
  Text_0_544: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  ImageBackground_0_545: {
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
  ImageBackground_0_573: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.22131147540983%")
  },
  ImageBackground_0_574: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("140.1639344262295%")
  },
  View_0_575: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("23.08743169398907%"),
    minHeight: hp("23.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("40.84699453551913%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_576: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("55.73770491803278%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_0_577: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("80.39617486338798%")
  },
  Text_0_577: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_578: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.4%"),
    top: hp("57.240437158469945%")
  },
  Text_0_578: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_579: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("57.240437158469945%")
  },
  Text_0_579: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_580: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("101.84426229508196%")
  },
  Text_0_580: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_581: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("1.366120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_581_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5464480874316942%")
  },
  View_I0_581_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_581_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_581_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.0939207650273226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333268%")
  },
  View_0_582: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("70.42349726775956%")
  },
  Text_0_582: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_583: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.6%"),
    top: hp("91.73497267759562%")
  },
  Text_0_583: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_584: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("66.87158469945356%")
  },
  ImageBackground_0_585: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333334%"),
    top: hp("87.63661202185791%")
  },
  View_0_586: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("49.59016393442623%")
  },
  Text_0_586: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_587: {
    width: wp("64.53333333333333%"),
    minWidth: wp("64.53333333333333%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("43.5792349726776%")
  },
  Text_0_587: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_588: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("43.30601092896175%")
  },
  View_0_589: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("66.46174863387978%")
  },
  Text_0_589: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_590: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("87.36338797814209%")
  },
  Text_0_590: {
    color: "rgba(0, 113, 188, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_591: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("9.01639344262295%")
  },
  View_0_592: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_593: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(212, 212, 212, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_594: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("11.885245901639346%")
  },
  Text_0_594: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_595: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.3224043715846996%")
  },
  ImageBackground_0_596: {
    width: wp("21.350724283854166%"),
    minWidth: wp("21.350724283854166%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8405598958333336%"),
    top: hp("0%")
  },
  View_0_597: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("9.810248619871713%"),
    minHeight: hp("9.810248619871713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.602380304388662%")
  },
  ImageBackground_0_598: {
    width: wp("2.01739133199056%"),
    minWidth: wp("2.01739133199056%"),
    height: hp("0.9466029907184872%"),
    minHeight: hp("0.9466029907184872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.591276041666669%"),
    top: hp("0.008604956454917101%")
  },
  ImageBackground_0_599: {
    width: wp("2.01739133199056%"),
    minWidth: wp("2.01739133199056%"),
    height: hp("0.9466029907184872%"),
    minHeight: hp("0.9466029907184872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.591276041666669%"),
    top: hp("8.863638789275956%")
  },
  ImageBackground_0_600: {
    width: wp("10.746838378906249%"),
    minWidth: wp("10.746838378906249%"),
    height: hp("9.050303599873526%"),
    minHeight: hp("9.050303599873526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09036458333333464%"),
    top: hp("0.6381342319842886%")
  },
  ImageBackground_0_607: {
    width: wp("10.746838378906249%"),
    minWidth: wp("10.746838378906249%"),
    height: hp("9.050303599873526%"),
    minHeight: hp("9.050303599873526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.362825520833335%"),
    top: hp("0.6381342319842886%")
  },
  View_0_614: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5391276041666675%"),
    top: hp("1.979273394808743%")
  },
  ImageBackground_0_616: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.056494749308935%"),
    minHeight: hp("7.056494749308935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_615: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.056494749308935%"),
    minHeight: hp("7.056494749308935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_617: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.056494749308935%"),
    minHeight: hp("7.056494749308935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_624: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.5478515625%"),
    top: hp("-0.7744794334870218%")
  },
  View_0_631: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.266666666666666%"),
    top: hp("3.0054644808743163%")
  },
  Text_0_631: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_632: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("4.371584699453553%")
  },
  Text_0_632: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 34,
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
