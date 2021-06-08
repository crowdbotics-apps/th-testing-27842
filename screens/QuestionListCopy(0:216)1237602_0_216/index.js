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
      <View style={styles.View_0_217} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/710d/a9d1/9ac70724abe165f8d31f9c78e8a46ef3"
        }}
        style={styles.ImageBackground_0_218}
      />
      <View style={styles.View_0_219}>
        <View style={styles.View_0_220}>
          <View style={styles.View_0_221} />
        </View>
        <View style={styles.View_0_222}>
          <Text style={styles.Text_0_222}>Click to change</Text>
        </View>
        <View style={styles.View_0_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/15dd/345fd612d5cce397794f3a2924a1d1e4"
            }}
            style={styles.ImageBackground_0_224}
          />
          <View style={styles.View_0_225}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/cd08/d810d6bddf5324b250fa6fec1dc39df9"
              }}
              style={styles.ImageBackground_0_226}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/321f/dced/159d019553272e9994773ddcd89b0a5b"
              }}
              style={styles.ImageBackground_0_227}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b4d/e44f/5348c7da8a41f77f5c113821a245de5b"
              }}
              style={styles.ImageBackground_0_228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d8/50c5/6e7848d00d4e05c4c27c400a4252b261"
              }}
              style={styles.ImageBackground_0_235}
            />
          </View>
          <View style={styles.View_0_242}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d992/a639/4a0f75cd4a8a45055f5b3f9bb32a29cd"
              }}
              style={styles.ImageBackground_0_244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/1da2/7cc28321d31cd386329d223cc21a489e"
              }}
              style={styles.ImageBackground_0_243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/955a/2cee/4d3436265dc0d41360276674b0c17cef"
              }}
              style={styles.ImageBackground_0_245}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bf6/0e43/f4381701e9df401ce8cac6e13a12a7b7"
              }}
              style={styles.ImageBackground_0_252}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4ef/d55f/145f62f38ff9acf24ebe2b2b8bcf7887"
            }}
            style={styles.ImageBackground_0_259}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75b9/1fb4/5008fd3de4b491cc8d416aed7071ff29"
            }}
            style={styles.ImageBackground_0_260}
          />
        </View>
        <View style={styles.View_0_261}>
          <Text style={styles.Text_0_261}>I am voting for Donald Trump</Text>
        </View>
      </View>
      <View style={styles.View_0_262} />
      <View style={styles.View_0_263}>
        <Text style={styles.Text_0_263}>Candidate Questions</Text>
      </View>
      <View style={styles.View_0_264}>
        <Text style={styles.Text_0_264}>Click to answer</Text>
      </View>
      <View style={styles.View_0_265} />
      <View style={styles.View_0_266}>
        <View style={styles.View_0_267}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/718c/72300b28c821543f6eb0961d2bab4d0c"
            }}
            style={styles.ImageBackground_0_268}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/718c/72300b28c821543f6eb0961d2bab4d0c"
            }}
            style={styles.ImageBackground_0_269}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
            }}
            style={styles.ImageBackground_0_270}
          />
          <View style={styles.View_0_271}>
            <Text style={styles.Text_0_271}>Yes</Text>
          </View>
        </View>
        <View style={styles.View_0_272}>
          <View style={styles.View_0_273}>
            <Text style={styles.Text_0_273}>No</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc0/a2ff/1496d39bad5921ad635de435fb816039"
            }}
            style={styles.ImageBackground_0_274}
          />
        </View>
        <View style={styles.View_0_277}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
            }}
            style={styles.ImageBackground_0_278}
          />
          <View style={styles.View_0_279}>
            <Text style={styles.Text_0_279}>Undecided</Text>
          </View>
        </View>
        <View style={styles.View_0_280}>
          <View style={styles.View_0_281}>
            <View style={styles.View_0_282}>
              <Text style={styles.Text_0_282}>
                Do you agree that a wall should be placed between the U.S. and
                Mexico?
              </Text>
            </View>
            <View style={styles.View_0_283}>
              <View style={styles.View_0_284}>
                <Text style={styles.Text_0_284}>Watch video</Text>
              </View>
              <View style={styles.View_0_285}>
                <View source={{ uri: "null" }} style={styles.View_0_286} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9d2/70e2/c91174a392db2e3f852cdddae2c8b0f5"
                  }}
                  style={styles.ImageBackground_0_289}
                />
              </View>
            </View>
            <View style={styles.View_0_291}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
                }}
                style={styles.ImageBackground_0_292}
              />
              <View style={styles.View_0_293}>
                <Text style={styles.Text_0_293}>TRUMP</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_0_294}>
            <View style={styles.View_0_295}>
              <Text style={styles.Text_0_295}>Read more</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_296}>
        <View style={styles.View_0_297} />
        <View style={styles.View_0_298}>
          <Text style={styles.Text_0_298}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_299}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
            }}
            style={styles.ImageBackground_0_300}
          />
          <View style={styles.View_0_301}>
            <Text style={styles.Text_0_301}>BUSH</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_302}>
        <View style={styles.View_0_303} />
        <View style={styles.View_0_304}>
          <Text style={styles.Text_0_304}>Click to answer</Text>
        </View>
        <View style={styles.View_0_305}>
          <Text style={styles.Text_0_305}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_306}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917c/e1ea/113de2fd33844dc712e527d60c559dcc"
            }}
            style={styles.ImageBackground_0_307}
          />
          <View style={styles.View_0_308}>
            <Text style={styles.Text_0_308}>CLINTON</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_309}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35fd/7580/5829288505c32ad41d64696294b0d378"
          }}
          style={styles.ImageBackground_0_312}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e47/bf6e/c5f1ff5e663f581469d4c5d8bfa28211"
          }}
          style={styles.ImageBackground_0_313}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaee/9ec6/61152db57a21145e668fb542aa85abbb"
        }}
        style={styles.ImageBackground_0_314}
      />
      <View style={styles.View_0_342}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_342_0_2326}
        />
        <View style={styles.View_I0_342_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_342_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_342_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_343}>
        <Text style={styles.Text_0_343}>Tap to answer</Text>
      </View>
      <View style={styles.View_0_344} />
      <View style={styles.View_0_345} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6339/5ce2/5f5157204a3b04bf983c5aa746ccb8ed"
        }}
        style={styles.ImageBackground_0_348}
      />
      <View style={styles.View_0_349}>
        <Text style={styles.Text_0_349}>All Topics</Text>
      </View>
      <View style={styles.View_0_350}>
        <Text style={styles.Text_0_350}>
          Aliquam Vestibulum Nunc dignissim Cras ornare Vivamus vestibulum
          Praesent Fusce Integer vitae libero Vestibulum Ut aliquam Cras iaculis
          ultricies
        </Text>
      </View>
      <View style={styles.View_0_351}>
        <Text style={styles.Text_0_351}>10</Text>
      </View>
      <View style={styles.View_0_352}>
        <Text style={styles.Text_0_352}>4</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b8c/4e58/69cc61ef6d3fec40a3a5fd4b62253135"
        }}
        style={styles.ImageBackground_0_353}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b8c/4e58/69cc61ef6d3fec40a3a5fd4b62253135"
        }}
        style={styles.ImageBackground_0_354}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("148.77049180327867%") },
  View_0_217: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("144.39890710382514%"),
    minHeight: hp("144.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_218: {
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
  View_0_219: {
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
  View_0_220: {
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
  View_0_221: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_222: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("11.885245901639344%")
  },
  Text_0_222: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_223: {
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
  ImageBackground_0_224: {
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
  View_0_225: {
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
  ImageBackground_0_226: {
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
  ImageBackground_0_227: {
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
  ImageBackground_0_228: {
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
  ImageBackground_0_235: {
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
  View_0_242: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.056494749308935%"),
    minHeight: hp("7.056494749308935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5391276041666675%"),
    top: hp("1.979273394808743%")
  },
  ImageBackground_0_244: {
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
  ImageBackground_0_243: {
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
  ImageBackground_0_245: {
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
  ImageBackground_0_252: {
    width: wp("20.67826131184896%"),
    minWidth: wp("20.67826131184896%"),
    height: hp("9.3799747404505%"),
    minHeight: hp("9.3799747404505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.5478515625%"),
    top: hp("-0.7744794334870235%")
  },
  ImageBackground_0_259: {
    width: wp("9.91884053548177%"),
    minWidth: wp("9.91884053548177%"),
    height: hp("4.905124309935856%"),
    minHeight: hp("4.905124309935856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.55651041666667%"),
    top: hp("2.925851957394123%")
  },
  ImageBackground_0_260: {
    width: wp("7.565217590332031%"),
    minWidth: wp("7.565217590332031%"),
    height: hp("3.7003571869897063%"),
    minHeight: hp("3.7003571869897063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7333333333333325%"),
    top: hp("3.571290396601775%")
  },
  View_0_261: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3.0054644808743163%")
  },
  Text_0_261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_262: {
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
  View_0_263: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("9.699453551912567%")
  },
  Text_0_263: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_264: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("61.47540983606557%")
  },
  Text_0_264: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_265: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("54.09836065573771%"),
    minHeight: hp("54.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("48.63387978142077%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_266: {
    width: wp("76.53333333333333%"),
    minWidth: wp("76.53333333333333%"),
    height: hp("46.44808743169399%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("50.68306010928961%")
  },
  View_0_267: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.868852459016395%")
  },
  ImageBackground_0_268: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316948%")
  },
  ImageBackground_0_269: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.978142076502735%")
  },
  ImageBackground_0_270: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000025%"),
    top: hp("0.4781420765027349%")
  },
  View_0_271: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333335%"),
    top: hp("0.06830601092896416%")
  },
  Text_0_271: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_272: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("35.65573770491804%")
  },
  View_0_273: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2666666666666675%"),
    top: hp("0.06830601092896416%")
  },
  Text_0_273: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_274: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    top: hp("0.4781420765027349%")
  },
  View_0_277: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("43.306010928961754%")
  },
  ImageBackground_0_278: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    top: hp("0.4781420765027349%")
  },
  View_0_279: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2666666666666675%"),
    top: hp("0.06830601092894995%")
  },
  Text_0_279: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_280: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("0%")
  },
  View_0_281: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    height: hp("24.316939890710383%"),
    minHeight: hp("24.316939890710383%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_282: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%")
  },
  Text_0_282: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_283: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240438%")
  },
  View_0_284: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000000000000002%"),
    top: hp("0.4098360655737707%")
  },
  Text_0_284: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_285: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_286: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_0_289: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_291: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_292: {
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
  View_0_293: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  Text_0_293: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_294: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("21.17486338797815%")
  },
  View_0_295: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_295: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_296: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("104.50819672131149%")
  },
  View_0_297: {
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
  View_0_298: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.557377049180303%")
  },
  Text_0_298: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_299: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.426041666666666%"),
    top: hp("2.7322404371584383%")
  },
  ImageBackground_0_300: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6.666666666666666%"),
    top: hp("0.13661202185794252%")
  },
  View_0_301: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371587083%")
  },
  Text_0_301: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_302: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("126.63934426229508%")
  },
  View_0_303: {
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
  View_0_304: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.29270833333334%"),
    top: hp("16.39344262295083%")
  },
  Text_0_304: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_305: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.420765027322403%")
  },
  Text_0_305: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_306: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7593749999999995%"),
    top: hp("2.8688524590164093%")
  },
  ImageBackground_0_307: {
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
  View_0_308: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("0%")
  },
  Text_0_308: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_309: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("71.85792349726776%")
  },
  ImageBackground_0_312: {
    width: wp("2.18850580851237%"),
    minWidth: wp("2.18850580851237%"),
    height: hp("2.026915159381804%"),
    minHeight: hp("2.026915159381804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.344791666666673%"),
    top: hp("0.02227949965846676%")
  },
  ImageBackground_0_313: {
    width: wp("2.18850580851237%"),
    minWidth: wp("2.18850580851237%"),
    height: hp("2.026915159381804%"),
    minHeight: hp("2.026915159381804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.02227949965846676%")
  },
  ImageBackground_0_314: {
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
  View_0_342: {
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
  ImageBackground_I0_342_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("0.5464480874316942%")
  },
  View_I0_342_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_342_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_342_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.0939207650273226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333268%")
  },
  View_0_343: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("120.9016393442623%")
  },
  Text_0_343: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_344: {
    width: wp("86.09314778645833%"),
    minWidth: wp("86.09314778645833%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.563346354166668%"),
    top: hp("40.16393442622951%"),
    backgroundColor: "rgba(228, 231, 236, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_0_345: {
    width: wp("86.09314778645833%"),
    minWidth: wp("86.09314778645833%"),
    height: hp("76.90673994887722%"),
    minHeight: hp("76.90673994887722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.603515625%"),
    top: hp("45.90163934426229%"),
    backgroundColor: "rgba(76, 157, 212, 1)",
    borderColor: "rgba(212, 212, 212, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_0_348: {
    width: wp("2.8364768981933595%"),
    minWidth: wp("2.8364768981933595%"),
    height: hp("0.9023706769682671%"),
    minHeight: hp("0.9023706769682671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.01263020833333%"),
    top: hp("42.64989967554645%")
  },
  View_0_349: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("41.80327868852459%")
  },
  Text_0_349: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
    textTransform: "none"
  },
  View_0_350: {
    width: wp("78.828125%"),
    minWidth: wp("78.828125%"),
    minHeight: hp("78.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("49.86338797814208%")
  },
  Text_0_350: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_351: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.4%"),
    top: hp("47.404371584699454%")
  },
  Text_0_351: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_352: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.8%"),
    top: hp("54.03005464480874%")
  },
  Text_0_352: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_353: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("49.59016393442623%")
  },
  ImageBackground_0_354: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.66666666666667%"),
    top: hp("56.284153005464475%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
