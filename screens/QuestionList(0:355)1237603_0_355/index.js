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
      <View style={styles.View_0_356} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/710d/a9d1/9ac70724abe165f8d31f9c78e8a46ef3"
        }}
        style={styles.ImageBackground_0_357}
      />
      <View style={styles.View_0_358}>
        <View style={styles.View_0_359}>
          <View style={styles.View_0_360} />
        </View>
        <View style={styles.View_0_361}>
          <Text style={styles.Text_0_361}>Click to change</Text>
        </View>
        <View style={styles.View_0_362}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/15dd/345fd612d5cce397794f3a2924a1d1e4"
            }}
            style={styles.ImageBackground_0_363}
          />
          <View style={styles.View_0_364}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/cd08/d810d6bddf5324b250fa6fec1dc39df9"
              }}
              style={styles.ImageBackground_0_365}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/321f/dced/159d019553272e9994773ddcd89b0a5b"
              }}
              style={styles.ImageBackground_0_366}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f3/6caa/39fd9679943faf372df3ec52a091ebd6"
              }}
              style={styles.ImageBackground_0_367}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d8/50c5/6e7848d00d4e05c4c27c400a4252b261"
              }}
              style={styles.ImageBackground_0_374}
            />
          </View>
          <View style={styles.View_0_381}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d992/a639/4a0f75cd4a8a45055f5b3f9bb32a29cd"
              }}
              style={styles.ImageBackground_0_383}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/1da2/7cc28321d31cd386329d223cc21a489e"
              }}
              style={styles.ImageBackground_0_382}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/955a/2cee/4d3436265dc0d41360276674b0c17cef"
              }}
              style={styles.ImageBackground_0_384}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bf6/0e43/f4381701e9df401ce8cac6e13a12a7b7"
              }}
              style={styles.ImageBackground_0_391}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4ef/d55f/145f62f38ff9acf24ebe2b2b8bcf7887"
            }}
            style={styles.ImageBackground_0_398}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75b9/1fb4/5008fd3de4b491cc8d416aed7071ff29"
            }}
            style={styles.ImageBackground_0_399}
          />
        </View>
        <View style={styles.View_0_400}>
          <Text style={styles.Text_0_400}>I am voting for Ben Carson</Text>
        </View>
      </View>
      <View style={styles.View_0_401} />
      <View style={styles.View_0_402}>
        <Text style={styles.Text_0_402}>Candidate Questions</Text>
      </View>
      <View style={styles.View_0_403}>
        <Text style={styles.Text_0_403}>Click to answer</Text>
      </View>
      <View style={styles.View_0_404} />
      <View style={styles.View_0_405}>
        <View style={styles.View_0_406}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/718c/72300b28c821543f6eb0961d2bab4d0c"
            }}
            style={styles.ImageBackground_0_407}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c4/718c/72300b28c821543f6eb0961d2bab4d0c"
            }}
            style={styles.ImageBackground_0_408}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
            }}
            style={styles.ImageBackground_0_409}
          />
          <View style={styles.View_0_410}>
            <Text style={styles.Text_0_410}>Yes</Text>
          </View>
        </View>
        <View style={styles.View_0_411}>
          <View style={styles.View_0_412}>
            <Text style={styles.Text_0_412}>No</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc0/a2ff/1496d39bad5921ad635de435fb816039"
            }}
            style={styles.ImageBackground_0_413}
          />
        </View>
        <View style={styles.View_0_416}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/540d/2dcc179601a290d73341ad259d245e64"
            }}
            style={styles.ImageBackground_0_417}
          />
          <View style={styles.View_0_418}>
            <Text style={styles.Text_0_418}>Undecided</Text>
          </View>
        </View>
        <View style={styles.View_0_419}>
          <View style={styles.View_0_420}>
            <View style={styles.View_0_421}>
              <Text style={styles.Text_0_421}>
                Do you agree that a wall should be placed between the U.S. and
                Mexico?
              </Text>
            </View>
            <View style={styles.View_0_422}>
              <View style={styles.View_0_423}>
                <Text style={styles.Text_0_423}>Watch video</Text>
              </View>
              <View style={styles.View_0_424}>
                <View source={{ uri: "null" }} style={styles.View_0_425} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9d2/70e2/c91174a392db2e3f852cdddae2c8b0f5"
                  }}
                  style={styles.ImageBackground_0_428}
                />
              </View>
            </View>
            <View style={styles.View_0_430}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
                }}
                style={styles.ImageBackground_0_431}
              />
              <View style={styles.View_0_432}>
                <Text style={styles.Text_0_432}>TRUMP</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_0_433}>
            <View style={styles.View_0_434}>
              <Text style={styles.Text_0_434}>Read more</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_435}>
        <View style={styles.View_0_436} />
        <View style={styles.View_0_437}>
          <Text style={styles.Text_0_437}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_438}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af2/cb09/e1c12e59b2d5c9e701af467aaef3cbe8"
            }}
            style={styles.ImageBackground_0_439}
          />
          <View style={styles.View_0_440}>
            <Text style={styles.Text_0_440}>BUSH</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_441}>
        <View style={styles.View_0_442} />
        <View style={styles.View_0_443}>
          <Text style={styles.Text_0_443}>Click to answer</Text>
        </View>
        <View style={styles.View_0_444}>
          <Text style={styles.Text_0_444}>
            Another question that can be asked will go here?
          </Text>
        </View>
        <View style={styles.View_0_445}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/917c/e1ea/113de2fd33844dc712e527d60c559dcc"
            }}
            style={styles.ImageBackground_0_446}
          />
          <View style={styles.View_0_447}>
            <Text style={styles.Text_0_447}>CLINTON</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_448}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35fd/7580/5829288505c32ad41d64696294b0d378"
          }}
          style={styles.ImageBackground_0_451}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e47/bf6e/c5f1ff5e663f581469d4c5d8bfa28211"
          }}
          style={styles.ImageBackground_0_452}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e5/7bb8/e3710f9f147464f63c4f11bd734654de"
        }}
        style={styles.ImageBackground_0_453}
      />
      <View style={styles.View_0_481}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_481_0_2326}
        />
        <View style={styles.View_I0_481_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_481_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_481_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_482}>
        <Text style={styles.Text_0_482}>Tap to answer</Text>
      </View>
      <View style={styles.View_0_483} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6339/5ce2/5f5157204a3b04bf983c5aa746ccb8ed"
        }}
        style={styles.ImageBackground_0_486}
      />
      <View style={styles.View_0_487}>
        <Text style={styles.Text_0_487}>All Topics</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("148.77049180327867%") },
  View_0_356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("144.39890710382514%"),
    minHeight: hp("144.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.46448087431694%"),
    backgroundColor: "rgba(244, 245, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_357: {
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
  View_0_358: {
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
  View_0_359: {
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
  View_0_360: {
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
  View_0_361: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("11.885245901639344%")
  },
  Text_0_361: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_362: {
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
  ImageBackground_0_363: {
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
  View_0_364: {
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
  ImageBackground_0_365: {
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
  ImageBackground_0_366: {
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
  ImageBackground_0_367: {
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
  ImageBackground_0_374: {
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
  View_0_381: {
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
  ImageBackground_0_383: {
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
  ImageBackground_0_382: {
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
  ImageBackground_0_384: {
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
  ImageBackground_0_391: {
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
  ImageBackground_0_398: {
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
  ImageBackground_0_399: {
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
  View_0_400: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("3.0054644808743163%")
  },
  Text_0_400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_401: {
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
  View_0_402: {
    width: wp("76.26666666666667%"),
    minWidth: wp("76.26666666666667%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("9.699453551912567%")
  },
  Text_0_402: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_403: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("61.20218579234973%")
  },
  Text_0_403: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_404: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("54.09836065573771%"),
    minHeight: hp("54.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("48.36065573770492%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_405: {
    width: wp("80.53333333333333%"),
    minWidth: wp("80.53333333333333%"),
    height: hp("46.31147540983606%"),
    minHeight: hp("46.31147540983606%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("50.54644808743169%")
  },
  View_0_406: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9999999999999982%"),
    top: hp("27.732240437158474%")
  },
  ImageBackground_0_407: {
    width: wp("74.13333333333333%"),
    minWidth: wp("74.13333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%")
  },
  ImageBackground_0_408: {
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
  ImageBackground_0_409: {
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
  View_0_410: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.933333333333335%"),
    top: hp("0.06830601092894995%")
  },
  Text_0_410: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_411: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("35.5191256830601%")
  },
  View_0_412: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2666666666666675%"),
    top: hp("0.06830601092896416%")
  },
  Text_0_412: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_413: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333464%"),
    top: hp("0.4781420765027491%")
  },
  View_0_416: {
    width: wp("33.06666666666666%"),
    minWidth: wp("33.06666666666666%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("43.16939890710383%")
  },
  ImageBackground_0_417: {
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
  View_0_418: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2666666666666675%"),
    top: hp("0.06830601092894995%")
  },
  Text_0_418: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_419: {
    width: wp("80.53333333333333%"),
    minWidth: wp("80.53333333333333%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_420: {
    width: wp("80.53333333333333%"),
    minWidth: wp("80.53333333333333%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_421: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("3.961748633879786%")
  },
  Text_0_421: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_422: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("20.628415300546443%")
  },
  View_0_423: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000000000000002%"),
    top: hp("0.40983606557378494%")
  },
  Text_0_423: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_424: {
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
  View_0_425: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_0_428: {
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
  View_0_430: {
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
  ImageBackground_0_431: {
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
  View_0_432: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("0.1366120218579212%")
  },
  Text_0_432: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_433: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.400000000000006%"),
    top: hp("21.038251366120228%")
  },
  View_0_434: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_434: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_435: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("104.23497267759562%")
  },
  View_0_436: {
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
  View_0_437: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.557377049180346%")
  },
  Text_0_437: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_438: {
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
  ImageBackground_0_439: {
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
  View_0_440: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158282%")
  },
  Text_0_440: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_441: {
    width: wp("91.38541666666666%"),
    minWidth: wp("91.38541666666666%"),
    height: hp("20.491803278688526%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.307291666666667%"),
    top: hp("126.36612021857923%")
  },
  View_0_442: {
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
  View_0_443: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.29270833333334%"),
    top: hp("16.39344262295083%")
  },
  Text_0_443: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_444: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.692708333333332%"),
    top: hp("6.420765027322403%")
  },
  Text_0_444: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_445: {
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
  ImageBackground_0_446: {
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
  View_0_447: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("0%")
  },
  Text_0_447: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4285714030265808,
    textTransform: "none"
  },
  View_0_448: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%"),
    top: hp("71.58469945355192%")
  },
  ImageBackground_0_451: {
    width: wp("2.18850580851237%"),
    minWidth: wp("2.18850580851237%"),
    height: hp("2.026915159381804%"),
    minHeight: hp("2.026915159381804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3448567708333385%"),
    top: hp("0.02227949965846676%")
  },
  ImageBackground_0_452: {
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
  ImageBackground_0_453: {
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
  View_0_481: {
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
  ImageBackground_I0_481_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5464480874316939%")
  },
  View_I0_481_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_481_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_481_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.09392076502732238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%")
  },
  View_0_482: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("120.62841530054644%")
  },
  Text_0_482: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_483: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.757682291666667%"),
    top: hp("40.16393442622951%"),
    backgroundColor: "rgba(228, 231, 236, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_486: {
    width: wp("2.8364768981933595%"),
    minWidth: wp("2.8364768981933595%"),
    height: hp("0.9023706769682671%"),
    minHeight: hp("0.9023706769682671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.61263020833333%"),
    top: hp("42.64989967554645%")
  },
  View_0_487: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("41.80327868852459%")
  },
  Text_0_487: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.75,
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
