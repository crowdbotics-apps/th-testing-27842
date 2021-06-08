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
      <View style={styles.View_0_1170}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afa5/8ee4/057ff7faef779914673587dc55dd77c9"
          }}
          style={styles.ImageBackground_0_1171}
        />
        <View style={styles.View_0_1172}>
          <Text style={styles.Text_0_1172}>
            Copyright 2015 © Town Hall Politics
          </Text>
        </View>
        <View style={styles.View_0_1173} />
        <View style={styles.View_0_1174} />
        <View style={styles.View_0_1175}>
          <Text style={styles.Text_0_1175}>Edit Candidates</Text>
        </View>
        <View style={styles.View_0_1176}>
          <Text style={styles.Text_0_1176}>View Questions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29aa/03de/99db41fdce94b61c53eca5e4c3a364a9"
          }}
          style={styles.ImageBackground_0_1179}
        />
        <View style={styles.View_0_1184}>
          <View style={styles.View_0_1185} />
          <View style={styles.View_0_1186}>
            <Text style={styles.Text_0_1186}>Donald Trump</Text>
          </View>
          <View style={styles.View_0_1187}>
            <Text style={styles.Text_0_1187}>Republican</Text>
          </View>
          <View style={styles.View_0_1188}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad8/ecf6/1f156dd9587a99ae444fe5eda2db8cc6"
              }}
              style={styles.ImageBackground_0_1190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a208/efe1/52af9ad2f1cbd569b4e41bbd44ce3b56"
              }}
              style={styles.ImageBackground_0_1189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/4b18/82305894887e335b68e5b48e5334bbee"
              }}
              style={styles.ImageBackground_0_1191}
            />
          </View>
          <View style={styles.View_0_1192}>
            <Text style={styles.Text_0_1192}>View Blog</Text>
          </View>
          <View style={styles.View_0_1193}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a225/ab37/0a93a6f87f89319219f514fb2be03a63"
              }}
              style={styles.ImageBackground_0_1196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d97/38b4/c3f24c260f849d50e188e358aeed9430"
              }}
              style={styles.ImageBackground_0_1197}
            />
          </View>
          <View style={styles.View_0_1198}>
            <Text style={styles.Text_0_1198}>Watch Videos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f366/bd51/2cb3eb66d756144cada83fc418b50731"
            }}
            style={styles.ImageBackground_0_1199}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/7741/b3c16d0eeab0a0f6d332fdb71be64bfd"
            }}
            style={styles.ImageBackground_0_1202}
          />
        </View>
        <View style={styles.View_0_1204}>
          <View style={styles.View_0_1205} />
          <View style={styles.View_0_1206}>
            <Text style={styles.Text_0_1206}>Ben Carson</Text>
          </View>
          <View style={styles.View_0_1207}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad8/ecf6/1f156dd9587a99ae444fe5eda2db8cc6"
              }}
              style={styles.ImageBackground_0_1209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a208/efe1/52af9ad2f1cbd569b4e41bbd44ce3b56"
              }}
              style={styles.ImageBackground_0_1208}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/4b18/82305894887e335b68e5b48e5334bbee"
              }}
              style={styles.ImageBackground_0_1210}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9a2/4d27/0d7d7aab73691e519f6fc57371e01242"
              }}
              style={styles.ImageBackground_0_1211}
            />
          </View>
          <View style={styles.View_0_1212}>
            <Text style={styles.Text_0_1212}>Republican</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02a/2c8e/05d94f05e1db9ecf300030c0e3c9b40e"
          }}
          style={styles.ImageBackground_0_1213}
        />
        <View source={{ uri: "null" }} style={styles.View_0_1214} />
      </View>
      <View style={styles.View_0_1216} />
      <View style={styles.View_0_1217} />
      <View style={styles.View_0_1218}>
        <Text style={styles.Text_0_1218}>SAVE</Text>
      </View>
      <View style={styles.View_0_1219} />
      <View style={styles.View_0_1220} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da6f/c5aa/ab29c84e8f928444d6909278c82aad57"
        }}
        style={styles.ImageBackground_0_1221}
      />
      <View style={styles.View_0_1222}>
        <Text style={styles.Text_0_1222}>View Blog</Text>
      </View>
      <View style={styles.View_0_1223}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a225/ab37/0a93a6f87f89319219f514fb2be03a63"
          }}
          style={styles.ImageBackground_0_1226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d97/38b4/c3f24c260f849d50e188e358aeed9430"
          }}
          style={styles.ImageBackground_0_1227}
        />
      </View>
      <View style={styles.View_0_1228}>
        <Text style={styles.Text_0_1228}>Watch Videos</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f366/bd51/2cb3eb66d756144cada83fc418b50731"
        }}
        style={styles.ImageBackground_0_1229}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/7741/b3c16d0eeab0a0f6d332fdb71be64bfd"
        }}
        style={styles.ImageBackground_0_1232}
      />
      <View style={styles.View_0_1234}>
        <Text style={styles.Text_0_1234}>Current Password</Text>
      </View>
      <View style={styles.View_0_1235}>
        <Text style={styles.Text_0_1235}>New Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a397/b3d5/384f235c7d20ecf2ad1257c2c69bff4a"
        }}
        style={styles.ImageBackground_0_1238}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a397/b3d5/384f235c7d20ecf2ad1257c2c69bff4a"
        }}
        style={styles.ImageBackground_0_1242}
      />
      <View style={styles.View_0_1244}>
        <View style={styles.View_0_1245}>
          <Text style={styles.Text_0_1245}>Disable Notifications</Text>
        </View>
        <View style={styles.View_0_1246} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ed2/a61b/04c5af2b20246cd9e53ce0b213a72821"
          }}
          style={styles.ImageBackground_0_1247}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5496/cdc7/00ec062a77c7068218b04f884e0e41d7"
          }}
          style={styles.ImageBackground_0_1248}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3430/8d60/e2f35a01d5e1afd2ed11c7923cabdead"
        }}
        style={styles.ImageBackground_0_1251}
      />
      <View style={styles.View_0_1252}>
        <Text style={styles.Text_0_1252}>CLOSE</Text>
      </View>
      <View style={styles.View_0_1253}>
        <Text style={styles.Text_0_1253}>LOGOUT</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683c/44d1/d4105a5d3928b0b37bfdfb84730172c9"
        }}
        style={styles.ImageBackground_0_1254}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1170: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    height: hp("101.19940029985008%"),
    minHeight: hp("101.19940029985008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.666666666666667%"),
    top: hp("-0.14992503748125938%")
  },
  ImageBackground_0_1171: {
    width: wp("77.33333333333333%"),
    minWidth: wp("77.33333333333333%"),
    height: hp("100.14992503748125%"),
    minHeight: hp("100.14992503748125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1172: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("95.2023988005997%")
  },
  Text_0_1172: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1173: {
    width: wp("77.33333333333333%"),
    minWidth: wp("77.33333333333333%"),
    height: hp("84.8575712143928%"),
    minHeight: hp("84.8575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666705%"),
    top: hp("0.14992503748125938%"),
    backgroundColor: "rgba(154, 167, 182, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1174: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    height: hp("8.545727136431784%"),
    minHeight: hp("8.545727136431784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("74.36281859070465%"),
    backgroundColor: "rgba(0, 77, 127, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1175: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.133333333333336%"),
    top: hp("45.72713643178411%")
  },
  Text_0_1175: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1176: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("77.25992960550974%")
  },
  Text_0_1176: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1179: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.4992503748125936%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("77.96101949025487%")
  },
  View_0_1184: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("18.74062968515742%"),
    minHeight: hp("18.74062968515742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("2.9985007496251876%")
  },
  View_0_1185: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    height: hp("18.74062968515742%"),
    minHeight: hp("18.74062968515742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1186: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("3.1354500972170163%")
  },
  Text_0_1186: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1187: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("6.296851574212894%")
  },
  Text_0_1187: {
    color: "rgba(154, 167, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1188: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.24887556221889%")
  },
  ImageBackground_0_1190: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1189: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1191: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1192: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("12.893553223388306%")
  },
  Text_0_1192: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1193: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("13.343328335832082%")
  },
  ImageBackground_0_1196: {
    width: wp("1.67356325785319%"),
    minWidth: wp("1.67356325785319%"),
    height: hp("1.6312564867011075%"),
    minHeight: hp("1.6312564867011075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7930989583333332%"),
    top: hp("0.01791706685719774%")
  },
  ImageBackground_0_1197: {
    width: wp("1.67356325785319%"),
    minWidth: wp("1.67356325785319%"),
    height: hp("1.6312564867011075%"),
    minHeight: hp("1.6312564867011075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.01791706685719774%")
  },
  View_0_1198: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("12.893553223388306%")
  },
  Text_0_1198: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1199: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("4.497751124437781%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.533333333333335%"),
    top: hp("11.694152923538232%")
  },
  ImageBackground_0_1202: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.0989505247376314%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333333%"),
    top: hp("12.893553223388306%")
  },
  View_0_1204: {
    width: wp("83.2%"),
    minWidth: wp("83.2%"),
    height: hp("18.74062968515742%"),
    minHeight: hp("18.74062968515742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("23.538230884557723%")
  },
  View_0_1205: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    height: hp("18.74062968515742%"),
    minHeight: hp("18.74062968515742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1206: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("3.1354500972170136%")
  },
  Text_0_1206: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1207: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.2488755622188883%")
  },
  ImageBackground_0_1209: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1208: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1210: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1211: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.496251874062969%"),
    minHeight: hp("7.496251874062969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.533333333333335%"),
    top: hp("-0.44977511244377766%")
  },
  View_0_1212: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("6.446776611694148%")
  },
  Text_0_1212: {
    color: "rgba(154, 167, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1213: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("84.70764617691154%")
  },
  View_0_1214: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("97.90104947526237%")
  },
  View_0_1216: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("38.08095952023988%"),
    minHeight: hp("38.08095952023988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.776611694152926%"),
    backgroundColor: "rgba(228, 231, 236, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1217: {
    width: wp("63.2%"),
    minWidth: wp("63.2%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("75.26236881559221%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1218: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.4%"),
    top: hp("77.06146926536732%")
  },
  Text_0_1218: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1219: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("59.820089955022496%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(154, 167, 182, 1)",
    borderWidth: 1
  },
  View_0_1220: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("66.86656671664169%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(154, 167, 182, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1221: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("121.73913043478262%"),
    minHeight: hp("121.73913043478262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.53333333333333%"),
    top: hp("0%")
  },
  View_0_1222: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("36.58170914542729%")
  },
  Text_0_1222: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1223: {
    width: wp("3.4666666666666663%"),
    minWidth: wp("3.4666666666666663%"),
    height: hp("1.6491754122938531%"),
    minHeight: hp("1.6491754122938531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("37.031484257871064%")
  },
  ImageBackground_0_1226: {
    width: wp("1.67356325785319%"),
    minWidth: wp("1.67356325785319%"),
    height: hp("1.6312564867011075%"),
    minHeight: hp("1.6312564867011075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7930989583333332%"),
    top: hp("0.017917066857194186%")
  },
  ImageBackground_0_1227: {
    width: wp("1.67356325785319%"),
    minWidth: wp("1.67356325785319%"),
    height: hp("1.6312564867011075%"),
    minHeight: hp("1.6312564867011075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.017917066857194186%")
  },
  View_0_1228: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("36.58170914542729%")
  },
  Text_0_1228: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1229: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("4.497751124437781%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.733333333333334%"),
    top: hp("35.38230884557721%")
  },
  ImageBackground_0_1232: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.0989505247376314%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("36.58170914542729%")
  },
  View_0_1234: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("61.76911544227887%")
  },
  Text_0_1234: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1235: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("68.81559220389805%")
  },
  Text_0_1235: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1238: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("61.6191904047976%")
  },
  ImageBackground_0_1242: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("1.9490254872563717%"),
    minHeight: hp("1.9490254872563717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("68.66566716641678%")
  },
  View_0_1244: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("6.5967016491754125%"),
    minHeight: hp("6.5967016491754125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("50.524737631184415%")
  },
  View_0_1245: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("0.029154124109808777%")
  },
  Text_0_1245: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1246: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.17907916159107629%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(0, 77, 127, 1)",
    borderWidth: 2
  },
  ImageBackground_0_1247: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.199400299850075%"),
    minHeight: hp("1.199400299850075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999999%"),
    top: hp("0.7787793115161108%")
  },
  ImageBackground_0_1248: {
    width: wp("62.4%"),
    minWidth: wp("62.4%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.026155623360182%")
  },
  ImageBackground_0_1251: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.2488755622188905%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("88.9055472263868%")
  },
  View_0_1252: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("88.98067445769303%")
  },
  Text_0_1252: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_1253: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("88.98050974512743%")
  },
  Text_0_1253: {
    color: "rgba(228, 231, 236, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_0_1254: {
    width: wp("3.586206817626953%"),
    minWidth: wp("3.586206817626953%"),
    height: hp("2.021461126507669%"),
    minHeight: hp("2.021461126507669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.813802083333336%"),
    top: hp("89.05547226386807%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
