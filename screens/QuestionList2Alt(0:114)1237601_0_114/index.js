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
      <View style={styles.View_0_115} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/710d/a9d1/9ac70724abe165f8d31f9c78e8a46ef3"
        }}
        style={styles.ImageBackground_0_116}
      />
      <View style={styles.View_0_117} />
      <View style={styles.View_0_118}>
        <Text style={styles.Text_0_118}>Candidate Questions</Text>
      </View>
      <View style={styles.View_0_119}>
        <View style={styles.View_0_120}>
          <View style={styles.View_0_121} />
        </View>
        <View style={styles.View_0_122}>
          <Text style={styles.Text_0_122}>Click to change</Text>
        </View>
        <View style={styles.View_0_123}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/15dd/345fd612d5cce397794f3a2924a1d1e4"
            }}
            style={styles.ImageBackground_0_124}
          />
          <View style={styles.View_0_125}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/cd08/d810d6bddf5324b250fa6fec1dc39df9"
              }}
              style={styles.ImageBackground_0_126}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/321f/dced/159d019553272e9994773ddcd89b0a5b"
              }}
              style={styles.ImageBackground_0_127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b4d/e44f/5348c7da8a41f77f5c113821a245de5b"
              }}
              style={styles.ImageBackground_0_128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d8/50c5/6e7848d00d4e05c4c27c400a4252b261"
              }}
              style={styles.ImageBackground_0_135}
            />
          </View>
          <View style={styles.View_0_142}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d992/a639/4a0f75cd4a8a45055f5b3f9bb32a29cd"
              }}
              style={styles.ImageBackground_0_144}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/1da2/7cc28321d31cd386329d223cc21a489e"
              }}
              style={styles.ImageBackground_0_143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47a1/bee6/833c268d888e68f2ae905314befbf931"
              }}
              style={styles.ImageBackground_0_145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b38/608a/c7ccbb4810703b084933589f77eaa403"
              }}
              style={styles.ImageBackground_0_152}
            />
          </View>
          <View style={styles.View_0_159}>
            <Text style={styles.Text_0_159}>?</Text>
          </View>
        </View>
        <View style={styles.View_0_160}>
          <Text style={styles.Text_0_160}>I am not sure who to vote for</Text>
        </View>
      </View>
      <View style={styles.View_0_161}>
        <Text style={styles.Text_0_161}>Click to answer</Text>
      </View>
      <View style={styles.View_0_162} />
      <View style={styles.View_0_163}>
        <Text style={styles.Text_0_163}>You answered NO</Text>
      </View>
      <View style={styles.View_0_164}>
        <Text style={styles.Text_0_164}>
          Do you agree that a wall should be placed between the U.S. and Mexico?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
        }}
        style={styles.ImageBackground_0_165}
      />
      <View style={styles.View_0_166}>
        <View style={styles.View_0_167}>
          <View style={styles.View_0_168}>
            <View style={styles.View_0_169}>
              <View source={{ uri: "null" }} style={styles.View_0_170} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_172}>
        <View style={styles.View_0_173} />
        <View style={styles.View_0_174}>
          <Text style={styles.Text_0_174}>Tap to answer</Text>
        </View>
        <View style={styles.View_0_175}>
          <Text style={styles.Text_0_175}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_176}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
            }}
            style={styles.ImageBackground_0_177}
          />
          <View style={styles.View_0_178}>
            <Text style={styles.Text_0_178}>BUSH</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_179}>
        <Text style={styles.Text_0_179}>Tap to give a reason</Text>
      </View>
      <View style={styles.View_0_180}>
        <View style={styles.View_0_181} />
        <View style={styles.View_0_182}>
          <Text style={styles.Text_0_182}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_183}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917c/e1ea/113de2fd33844dc712e527d60c559dcc"
            }}
            style={styles.ImageBackground_0_184}
          />
          <View style={styles.View_0_185}>
            <Text style={styles.Text_0_185}>CLINTON</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaee/9ec6/61152db57a21145e668fb542aa85abbb"
        }}
        style={styles.ImageBackground_0_186}
      />
      <View style={styles.View_0_214}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_214_0_2326}
        />
        <View style={styles.View_I0_214_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_214_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_214_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_215}>
        <Text style={styles.Text_0_215}>Tap to answer</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("111.6120218579235%") },
  View_0_115: {
    width: wp("101.6%"),
    minWidth: wp("101.6%"),
    height: hp("128.4153005464481%"),
    minHeight: hp("128.4153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_116: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("37.77322404371585%")
  },
  View_0_117: {
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
  View_0_118: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("9.699453551912567%")
  },
  Text_0_118: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_119: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("18.579234972677597%")
  },
  View_0_120: {
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
  View_0_121: {
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
  View_0_122: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("11.885245901639344%")
  },
  Text_0_122: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_123: {
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
  ImageBackground_0_124: {
    width: wp("21.350724283854166%"),
    minWidth: wp("21.350724283854166%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8406249999999993%"),
    top: hp("0%")
  },
  View_0_125: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("9.810248619871713%"),
    minHeight: hp("9.810248619871713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6023803043886602%")
  },
  ImageBackground_0_126: {
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
  ImageBackground_0_127: {
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
  ImageBackground_0_128: {
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
  ImageBackground_0_135: {
    width: wp("10.746838378906249%"),
    minWidth: wp("10.746838378906249%"),
    height: hp("9.050303599873526%"),
    minHeight: hp("9.050303599873526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.362760416666669%"),
    top: hp("0.6381342319842886%")
  },
  View_0_142: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.539192708333333%"),
    top: hp("1.979273394808743%")
  },
  ImageBackground_0_144: {
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
  ImageBackground_0_143: {
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
  ImageBackground_0_145: {
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
  ImageBackground_0_152: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.5477864583333325%"),
    top: hp("-0.7744794334870235%")
  },
  View_0_159: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800000000000002%"),
    top: hp("2.04918032786885%")
  },
  Text_0_159: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_160: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.266666666666666%"),
    top: hp("3.0054644808743163%")
  },
  Text_0_160: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_161: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("52.595628415300546%")
  },
  Text_0_161: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_162: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_163: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("49.59016393442623%")
  },
  Text_0_163: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_164: {
    width: wp("64.53333333333333%"),
    minWidth: wp("64.53333333333333%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("43.44262295081967%")
  },
  Text_0_164: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_165: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("43.30601092896175%")
  },
  View_0_166: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("62.841530054644814%")
  },
  View_0_167: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_168: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_169: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_170: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_172: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("63.25136612021858%")
  },
  View_0_173: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_174: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.359375%"),
    top: hp("16.39344262295083%")
  },
  Text_0_174: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_175: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.557377049180332%")
  },
  Text_0_175: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_176: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.426041666666666%"),
    top: hp("2.7322404371584668%")
  },
  ImageBackground_0_177: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.666666666666666%"),
    top: hp("0.1366120218579283%")
  },
  View_0_178: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%")
  },
  Text_0_178: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_179: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("55.60109289617486%")
  },
  Text_0_179: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_180: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("85.38251366120218%")
  },
  View_0_181: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_182: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.420765027322403%")
  },
  Text_0_182: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_183: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7593749999999995%"),
    top: hp("2.868852459016395%")
  },
  ImageBackground_0_184: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_185: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("0%")
  },
  Text_0_185: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  ImageBackground_0_186: {
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
  View_0_214: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("1.2295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_214_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5464480874316939%")
  },
  View_I0_214_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_214_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_214_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.09392076502732238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333268%")
  },
  View_0_215: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("101.77595628415301%")
  },
  Text_0_215: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
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
