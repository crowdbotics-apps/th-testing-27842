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
      <View style={styles.View_0_6} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/710d/a9d1/9ac70724abe165f8d31f9c78e8a46ef3"
        }}
        style={styles.ImageBackground_0_7}
      />
      <View style={styles.View_0_8} />
      <View style={styles.View_0_9}>
        <Text style={styles.Text_0_9}>Candidate Questions</Text>
      </View>
      <View style={styles.View_0_10}>
        <View style={styles.View_0_11}>
          <View style={styles.View_0_12} />
        </View>
        <View style={styles.View_0_13}>
          <Text style={styles.Text_0_13}>Click to change</Text>
        </View>
        <View style={styles.View_0_14}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/15dd/345fd612d5cce397794f3a2924a1d1e4"
            }}
            style={styles.ImageBackground_0_15}
          />
          <View style={styles.View_0_16}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/cd08/d810d6bddf5324b250fa6fec1dc39df9"
              }}
              style={styles.ImageBackground_0_17}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/321f/dced/159d019553272e9994773ddcd89b0a5b"
              }}
              style={styles.ImageBackground_0_18}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b4d/e44f/5348c7da8a41f77f5c113821a245de5b"
              }}
              style={styles.ImageBackground_0_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d8/50c5/6e7848d00d4e05c4c27c400a4252b261"
              }}
              style={styles.ImageBackground_0_26}
            />
          </View>
          <View style={styles.View_0_33}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d992/a639/4a0f75cd4a8a45055f5b3f9bb32a29cd"
              }}
              style={styles.ImageBackground_0_35}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/1da2/7cc28321d31cd386329d223cc21a489e"
              }}
              style={styles.ImageBackground_0_34}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47a1/bee6/833c268d888e68f2ae905314befbf931"
              }}
              style={styles.ImageBackground_0_36}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b38/608a/c7ccbb4810703b084933589f77eaa403"
              }}
              style={styles.ImageBackground_0_43}
            />
          </View>
        </View>
        <View style={styles.View_0_50}>
          <Text style={styles.Text_0_50}>I am not sure who to vote for</Text>
        </View>
        <View style={styles.View_0_51}>
          <Text style={styles.Text_0_51}>?</Text>
        </View>
      </View>
      <View style={styles.View_0_52}>
        <View style={styles.View_0_53}>
          <Text style={styles.Text_0_53}>Click to answer</Text>
        </View>
        <View style={styles.View_0_54} />
        <View style={styles.View_0_55} />
        <View style={styles.View_0_56}>
          <Text style={styles.Text_0_56}>Please explain your reason here.</Text>
        </View>
        <View style={styles.View_0_57} />
        <View style={styles.View_0_58} />
        <View style={styles.View_0_59}>
          <Text style={styles.Text_0_59}>Submit</Text>
        </View>
        <View style={styles.View_0_60}>
          <Text style={styles.Text_0_60}>Cancel</Text>
        </View>
        <View style={styles.View_0_61}>
          <Text style={styles.Text_0_61}>You answered NO</Text>
        </View>
        <View style={styles.View_0_62}>
          <Text style={styles.Text_0_62}>
            Do you agree that a wall should be placed between the U.S. and
            Mexico?
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
          }}
          style={styles.ImageBackground_0_63}
        />
        <View style={styles.View_0_64}>
          <View style={styles.View_0_65}>
            <View style={styles.View_0_66}>
              <View style={styles.View_0_67}>
                <View source={{ uri: "null" }} style={styles.View_0_68} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_70}>
          <Text style={styles.Text_0_70}>300 Characters left</Text>
        </View>
      </View>
      <View style={styles.View_0_71}>
        <View style={styles.View_0_72} />
        <View style={styles.View_0_73}>
          <Text style={styles.Text_0_73}>Tap to answer</Text>
        </View>
        <View style={styles.View_0_74}>
          <Text style={styles.Text_0_74}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_75}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
            }}
            style={styles.ImageBackground_0_76}
          />
          <View style={styles.View_0_77}>
            <Text style={styles.Text_0_77}>BUSH</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_78}>
        <View style={styles.View_0_79} />
        <View style={styles.View_0_80}>
          <Text style={styles.Text_0_80}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_81}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917c/e1ea/113de2fd33844dc712e527d60c559dcc"
            }}
            style={styles.ImageBackground_0_82}
          />
          <View style={styles.View_0_83}>
            <Text style={styles.Text_0_83}>CLINTON</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaee/9ec6/61152db57a21145e668fb542aa85abbb"
        }}
        style={styles.ImageBackground_0_84}
      />
      <View style={styles.View_0_112}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_112_0_2326}
        />
        <View style={styles.View_I0_112_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_112_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5d/fcc0/c3269034ea98cd52ee4ff64472fd2bc4"
            }}
            style={styles.ImageBackground_I0_112_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_113}>
        <Text style={styles.Text_0_113}>Tap to answer</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("137.02185792349727%") },
  View_0_6: {
    width: wp("101.6%"),
    minWidth: wp("101.6%"),
    height: hp("155.46448087431693%"),
    minHeight: hp("155.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_7: {
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
  View_0_8: {
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
  View_0_9: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("9.699453551912567%")
  },
  Text_0_9: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_10: {
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
  View_0_11: {
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
  View_0_12: {
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
  View_0_13: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("11.885245901639344%")
  },
  Text_0_13: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_14: {
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
  ImageBackground_0_15: {
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
  View_0_16: {
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
  ImageBackground_0_17: {
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
  ImageBackground_0_18: {
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
  ImageBackground_0_19: {
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
  ImageBackground_0_26: {
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
  View_0_33: {
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
  ImageBackground_0_35: {
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
  ImageBackground_0_34: {
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
  ImageBackground_0_36: {
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
  ImageBackground_0_43: {
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
  View_0_50: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.266666666666666%"),
    top: hp("3.0054644808743163%")
  },
  Text_0_50: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_51: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("4.37158469945355%")
  },
  Text_0_51: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_52: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.75409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_53: {
    width: wp("24.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%"),
    top: hp("12.841530054644807%")
  },
  Text_0_53: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_54: {
    width: wp("91.46666666666667%"),
    height: hp("50.27322404371585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_55: {
    width: wp("81.6%"),
    height: hp("23.08743169398907%"),
    top: hp("15.846994535519123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(76, 157, 212, 1)",
    borderWidth: 1
  },
  View_0_56: {
    width: wp("49.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("18.16939890710382%")
  },
  Text_0_56: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_57: {
    width: wp("39.508992513020836%"),
    height: hp("5.327868852459016%"),
    top: hp("42.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.745052083333334%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_58: {
    width: wp("39.508992513020836%"),
    height: hp("5.327868852459016%"),
    top: hp("42.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.654036458333333%"),
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1
  },
  View_0_59: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666666%"),
    top: hp("44.398907103825145%")
  },
  Text_0_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_60: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("44.398907103825145%")
  },
  Text_0_60: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_61: {
    width: wp("73.86666666666667%"),
    top: hp("9.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%")
  },
  Text_0_61: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_62: {
    width: wp("64.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("3.6885245901639294%")
  },
  Text_0_62: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_63: {
    width: wp("4%"),
    height: hp("1.912568306010929%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_0_64: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("23.087431693989075%")
  },
  View_0_65: {
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
  View_0_66: {
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
  View_0_67: {
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
  View_0_68: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_70: {
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666666%"),
    top: hp("39.34426229508197%")
  },
  Text_0_70: {
    color: "rgba(220, 221, 225, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_71: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("91.66666666666666%")
  },
  View_0_72: {
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
  View_0_73: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.359375%"),
    top: hp("16.39344262295083%")
  },
  Text_0_73: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_74: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.557377049180346%")
  },
  Text_0_74: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_75: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.426041666666666%"),
    top: hp("2.732240437158481%")
  },
  ImageBackground_0_76: {
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
  View_0_77: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%")
  },
  Text_0_77: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_78: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("113.79781420765028%")
  },
  View_0_79: {
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
  View_0_80: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.420765027322403%")
  },
  Text_0_80: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_81: {
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
  ImageBackground_0_82: {
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
  View_0_83: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("0%")
  },
  Text_0_83: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  ImageBackground_0_84: {
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
  View_0_112: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.366120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_112_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("0.5464480874316942%")
  },
  View_I0_112_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_112_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_112_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.0939207650273226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333268%")
  },
  View_0_113: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("130.19125683060108%")
  },
  Text_0_113: {
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
