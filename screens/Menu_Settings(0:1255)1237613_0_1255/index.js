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
      <View style={styles.View_0_1256}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afa5/8ee4/057ff7faef779914673587dc55dd77c9"
          }}
          style={styles.ImageBackground_0_1257}
        />
        <View style={styles.View_0_1258}>
          <Text style={styles.Text_0_1258}>
            Copyright 2015 © Town Hall Politics
          </Text>
        </View>
        <View style={styles.View_0_1259} />
        <View style={styles.View_0_1260} />
        <View style={styles.View_0_1261}>
          <Text style={styles.Text_0_1261}>Edit Candidates</Text>
        </View>
        <View style={styles.View_0_1262}>
          <Text style={styles.Text_0_1262}>View Questions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29aa/03de/99db41fdce94b61c53eca5e4c3a364a9"
          }}
          style={styles.ImageBackground_0_1265}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3430/8d60/e2f35a01d5e1afd2ed11c7923cabdead"
          }}
          style={styles.ImageBackground_0_1272}
        />
        <View style={styles.View_0_1273}>
          <Text style={styles.Text_0_1273}>CLOSE</Text>
        </View>
        <View style={styles.View_0_1274}>
          <Text style={styles.Text_0_1274}>LOGOUT</Text>
        </View>
        <View style={styles.View_0_1275}>
          <View style={styles.View_0_1276} />
          <View style={styles.View_0_1277}>
            <Text style={styles.Text_0_1277}>Donald Trump</Text>
          </View>
          <View style={styles.View_0_1278}>
            <Text style={styles.Text_0_1278}>Republican</Text>
          </View>
          <View style={styles.View_0_1279}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad8/ecf6/1f156dd9587a99ae444fe5eda2db8cc6"
              }}
              style={styles.ImageBackground_0_1281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a208/efe1/52af9ad2f1cbd569b4e41bbd44ce3b56"
              }}
              style={styles.ImageBackground_0_1280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/4b18/82305894887e335b68e5b48e5334bbee"
              }}
              style={styles.ImageBackground_0_1282}
            />
          </View>
          <View style={styles.View_0_1283}>
            <Text style={styles.Text_0_1283}>View Blog</Text>
          </View>
          <View style={styles.View_0_1284}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a225/ab37/0a93a6f87f89319219f514fb2be03a63"
              }}
              style={styles.ImageBackground_0_1287}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d97/38b4/c3f24c260f849d50e188e358aeed9430"
              }}
              style={styles.ImageBackground_0_1288}
            />
          </View>
          <View style={styles.View_0_1289}>
            <Text style={styles.Text_0_1289}>Watch Videos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f366/bd51/2cb3eb66d756144cada83fc418b50731"
            }}
            style={styles.ImageBackground_0_1290}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/7741/b3c16d0eeab0a0f6d332fdb71be64bfd"
            }}
            style={styles.ImageBackground_0_1293}
          />
        </View>
        <View style={styles.View_0_1295}>
          <View style={styles.View_0_1296} />
          <View style={styles.View_0_1297}>
            <Text style={styles.Text_0_1297}>Ben Carson</Text>
          </View>
          <View style={styles.View_0_1298}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad8/ecf6/1f156dd9587a99ae444fe5eda2db8cc6"
              }}
              style={styles.ImageBackground_0_1300}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a208/efe1/52af9ad2f1cbd569b4e41bbd44ce3b56"
              }}
              style={styles.ImageBackground_0_1299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/4b18/82305894887e335b68e5b48e5334bbee"
              }}
              style={styles.ImageBackground_0_1301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9a2/4d27/0d7d7aab73691e519f6fc57371e01242"
              }}
              style={styles.ImageBackground_0_1302}
            />
          </View>
          <View style={styles.View_0_1303}>
            <Text style={styles.Text_0_1303}>Republican</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02a/2c8e/05d94f05e1db9ecf300030c0e3c9b40e"
          }}
          style={styles.ImageBackground_0_1304}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683c/44d1/d4105a5d3928b0b37bfdfb84730172c9"
          }}
          style={styles.ImageBackground_0_1305}
        />
      </View>
      <View style={styles.View_0_1308} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da6f/c5aa/ab29c84e8f928444d6909278c82aad57"
        }}
        style={styles.ImageBackground_0_1309}
      />
      <View style={styles.View_0_1310}>
        <Text style={styles.Text_0_1310}>View Blog</Text>
      </View>
      <View style={styles.View_0_1311}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a225/ab37/0a93a6f87f89319219f514fb2be03a63"
          }}
          style={styles.ImageBackground_0_1314}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d97/38b4/c3f24c260f849d50e188e358aeed9430"
          }}
          style={styles.ImageBackground_0_1315}
        />
      </View>
      <View style={styles.View_0_1316}>
        <Text style={styles.Text_0_1316}>Watch Videos</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f366/bd51/2cb3eb66d756144cada83fc418b50731"
        }}
        style={styles.ImageBackground_0_1317}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/7741/b3c16d0eeab0a0f6d332fdb71be64bfd"
        }}
        style={styles.ImageBackground_0_1320}
      />
      <View style={styles.View_0_1322}>
        <Text style={styles.Text_0_1322}>Enable Notifications</Text>
      </View>
      <View style={styles.View_0_1323}>
        <Text style={styles.Text_0_1323}>Change Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebb8/5fd8/ef47fab0dcb9bf65fdf34bf3f82be981"
        }}
        style={styles.ImageBackground_0_1326}
      />
      <View style={styles.View_0_1328} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/768f/c1b0/62943ae22f8bde54b52630d218cfb822"
        }}
        style={styles.ImageBackground_0_1329}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5496/cdc7/00ec062a77c7068218b04f884e0e41d7"
        }}
        style={styles.ImageBackground_0_1330}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1256: {
    width: wp("116.66666666666667%"),
    minWidth: wp("116.66666666666667%"),
    height: hp("101.19940029985008%"),
    minHeight: hp("101.19940029985008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.666666666666667%"),
    top: hp("-0.14992503748125938%")
  },
  ImageBackground_0_1257: {
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
  View_0_1258: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("95.2023988005997%")
  },
  Text_0_1258: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1259: {
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
  View_0_1260: {
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
  View_0_1261: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.133333333333336%"),
    top: hp("45.72713643178411%")
  },
  Text_0_1261: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1262: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("77.25992960550974%")
  },
  Text_0_1262: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1265: {
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
  ImageBackground_0_1272: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.2488755622188905%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("89.05547226386805%")
  },
  View_0_1273: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("89.13059949517428%")
  },
  Text_0_1273: {
    color: "rgba(193, 50, 36, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_1274: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.599999999999994%"),
    top: hp("89.13043478260869%")
  },
  Text_0_1274: {
    color: "rgba(228, 231, 236, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_1275: {
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
  View_0_1276: {
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
  View_0_1277: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("3.1354500972170163%")
  },
  Text_0_1277: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1278: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("6.296851574212894%")
  },
  Text_0_1278: {
    color: "rgba(154, 167, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1279: {
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
  ImageBackground_0_1281: {
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
  ImageBackground_0_1280: {
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
  ImageBackground_0_1282: {
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
  View_0_1283: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("12.893553223388306%")
  },
  Text_0_1283: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1284: {
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
  ImageBackground_0_1287: {
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
  ImageBackground_0_1288: {
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
  View_0_1289: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("12.893553223388306%")
  },
  Text_0_1289: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1290: {
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
  ImageBackground_0_1293: {
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
  View_0_1295: {
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
  View_0_1296: {
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
  View_0_1297: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("3.1354500972170136%")
  },
  Text_0_1297: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1298: {
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
  ImageBackground_0_1300: {
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
  ImageBackground_0_1299: {
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
  ImageBackground_0_1301: {
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
  ImageBackground_0_1302: {
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
  View_0_1303: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("6.446776611694148%")
  },
  Text_0_1303: {
    color: "rgba(154, 167, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1304: {
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
  ImageBackground_0_1305: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("11.994002998500749%"),
    minHeight: hp("11.994002998500749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("89.20539730134932%")
  },
  View_0_1308: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("19.640179910044978%"),
    minHeight: hp("19.640179910044978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65.21739130434783%"),
    backgroundColor: "rgba(228, 231, 236, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_1309: {
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
  View_0_1310: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("36.58170914542729%")
  },
  Text_0_1310: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1311: {
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
  ImageBackground_0_1314: {
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
  ImageBackground_0_1315: {
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
  View_0_1316: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("36.58170914542729%")
  },
  Text_0_1316: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1317: {
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
  ImageBackground_0_1320: {
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
  View_0_1322: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("68.6948212905266%")
  },
  Text_0_1322: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1323: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("77.99017361436469%")
  },
  Text_0_1323: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1326: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("77.69032353940217%")
  },
  View_0_1328: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("68.84474632800787%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(0, 77, 127, 1)",
    borderWidth: 2
  },
  ImageBackground_0_1329: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.199400299850075%"),
    minHeight: hp("1.199400299850075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("69.44444647793291%")
  },
  ImageBackground_0_1330: {
    width: wp("62.133333333333326%"),
    minWidth: wp("62.133333333333326%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.800000000000001%"),
    top: hp("74.76678530851761%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
