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
      <View style={styles.View_0_1332}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afa5/8ee4/057ff7faef779914673587dc55dd77c9"
          }}
          style={styles.ImageBackground_0_1333}
        />
        <View style={styles.View_0_1334}>
          <Text style={styles.Text_0_1334}>
            Copyright 2015 © Town Hall Politics
          </Text>
        </View>
        <View style={styles.View_0_1335} />
        <View style={styles.View_0_1336} />
        <View style={styles.View_0_1337}>
          <Text style={styles.Text_0_1337}>Edit Candidates</Text>
        </View>
        <View style={styles.View_0_1338}>
          <Text style={styles.Text_0_1338}>View Questions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29aa/03de/99db41fdce94b61c53eca5e4c3a364a9"
          }}
          style={styles.ImageBackground_0_1341}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f439/0aa1/2dfb12f95f957cbd71964f9acfb78baf"
          }}
          style={styles.ImageBackground_0_1348}
        />
        <View style={styles.View_0_1349}>
          <Text style={styles.Text_0_1349}>SETTINGS</Text>
        </View>
        <View style={styles.View_0_1350}>
          <Text style={styles.Text_0_1350}>LOGOUT</Text>
        </View>
        <View style={styles.View_0_1351}>
          <View style={styles.View_0_1352} />
          <View style={styles.View_0_1353}>
            <Text style={styles.Text_0_1353}>Donald Trump</Text>
          </View>
          <View style={styles.View_0_1354}>
            <Text style={styles.Text_0_1354}>Republican</Text>
          </View>
          <View style={styles.View_0_1355}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad8/ecf6/1f156dd9587a99ae444fe5eda2db8cc6"
              }}
              style={styles.ImageBackground_0_1357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a208/efe1/52af9ad2f1cbd569b4e41bbd44ce3b56"
              }}
              style={styles.ImageBackground_0_1356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/4b18/82305894887e335b68e5b48e5334bbee"
              }}
              style={styles.ImageBackground_0_1358}
            />
          </View>
          <View style={styles.View_0_1359}>
            <Text style={styles.Text_0_1359}>View Blog</Text>
          </View>
          <View style={styles.View_0_1360}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a225/ab37/0a93a6f87f89319219f514fb2be03a63"
              }}
              style={styles.ImageBackground_0_1363}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d97/38b4/c3f24c260f849d50e188e358aeed9430"
              }}
              style={styles.ImageBackground_0_1364}
            />
          </View>
          <View style={styles.View_0_1365}>
            <Text style={styles.Text_0_1365}>Watch Videos</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f366/bd51/2cb3eb66d756144cada83fc418b50731"
            }}
            style={styles.ImageBackground_0_1366}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/7741/b3c16d0eeab0a0f6d332fdb71be64bfd"
            }}
            style={styles.ImageBackground_0_1369}
          />
        </View>
        <View style={styles.View_0_1371}>
          <View style={styles.View_0_1372} />
          <View style={styles.View_0_1373}>
            <Text style={styles.Text_0_1373}>Ben Carson</Text>
          </View>
          <View style={styles.View_0_1374}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ad8/ecf6/1f156dd9587a99ae444fe5eda2db8cc6"
              }}
              style={styles.ImageBackground_0_1376}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a208/efe1/52af9ad2f1cbd569b4e41bbd44ce3b56"
              }}
              style={styles.ImageBackground_0_1375}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19cc/4b18/82305894887e335b68e5b48e5334bbee"
              }}
              style={styles.ImageBackground_0_1377}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9a2/4d27/0d7d7aab73691e519f6fc57371e01242"
              }}
              style={styles.ImageBackground_0_1378}
            />
          </View>
          <View style={styles.View_0_1379}>
            <Text style={styles.Text_0_1379}>Republican</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c02a/2c8e/05d94f05e1db9ecf300030c0e3c9b40e"
          }}
          style={styles.ImageBackground_0_1380}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3590/e32b/4c29e0ee2bdb9738730396e0117a970c"
          }}
          style={styles.ImageBackground_0_1381}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da6f/c5aa/ab29c84e8f928444d6909278c82aad57"
        }}
        style={styles.ImageBackground_0_1384}
      />
      <View style={styles.View_0_1385}>
        <Text style={styles.Text_0_1385}>View Blog</Text>
      </View>
      <View style={styles.View_0_1386}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a225/ab37/0a93a6f87f89319219f514fb2be03a63"
          }}
          style={styles.ImageBackground_0_1389}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d97/38b4/c3f24c260f849d50e188e358aeed9430"
          }}
          style={styles.ImageBackground_0_1390}
        />
      </View>
      <View style={styles.View_0_1391}>
        <Text style={styles.Text_0_1391}>Watch Videos</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f366/bd51/2cb3eb66d756144cada83fc418b50731"
        }}
        style={styles.ImageBackground_0_1392}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f77b/7741/b3c16d0eeab0a0f6d332fdb71be64bfd"
        }}
        style={styles.ImageBackground_0_1395}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1332: {
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
  ImageBackground_0_1333: {
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
  View_0_1334: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.2%"),
    top: hp("95.2023988005997%")
  },
  Text_0_1334: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1335: {
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
  View_0_1336: {
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
  View_0_1337: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.133333333333336%"),
    top: hp("45.72713643178411%")
  },
  Text_0_1337: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_1338: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("77.25992960550974%")
  },
  Text_0_1338: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1341: {
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
  ImageBackground_0_1348: {
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
  View_0_1349: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("89.13059949517428%")
  },
  Text_0_1349: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_1350: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.599999999999994%"),
    top: hp("89.13043478260869%")
  },
  Text_0_1350: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_1351: {
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
  View_0_1352: {
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
  View_0_1353: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("3.1354500972170163%")
  },
  Text_0_1353: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1354: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("6.296851574212894%")
  },
  Text_0_1354: {
    color: "rgba(154, 167, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1355: {
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
  ImageBackground_0_1357: {
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
  ImageBackground_0_1356: {
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
  ImageBackground_0_1358: {
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
  View_0_1359: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("12.893553223388306%")
  },
  Text_0_1359: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1360: {
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
  ImageBackground_0_1363: {
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
  ImageBackground_0_1364: {
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
  View_0_1365: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("12.893553223388306%")
  },
  Text_0_1365: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1366: {
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
  ImageBackground_0_1369: {
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
  View_0_1371: {
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
  View_0_1372: {
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
  View_0_1373: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("3.1354500972170136%")
  },
  Text_0_1373: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1374: {
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
  ImageBackground_0_1376: {
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
  ImageBackground_0_1375: {
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
  ImageBackground_0_1377: {
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
  ImageBackground_0_1378: {
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
  View_0_1379: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.000000000000004%"),
    top: hp("6.446776611694148%")
  },
  Text_0_1379: {
    color: "rgba(154, 167, 182, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1380: {
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
  ImageBackground_0_1381: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("11.994002998500749%"),
    minHeight: hp("11.994002998500749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("89.20539730134932%")
  },
  ImageBackground_0_1384: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("121.73913043478262%"),
    minHeight: hp("121.73913043478262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.8%"),
    top: hp("0%")
  },
  View_0_1385: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("36.58170914542729%")
  },
  Text_0_1385: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1386: {
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
  ImageBackground_0_1389: {
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
  ImageBackground_0_1390: {
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
  View_0_1391: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("36.58170914542729%")
  },
  Text_0_1391: {
    color: "rgba(0, 77, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1392: {
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
  ImageBackground_0_1395: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.0989505247376314%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("36.58170914542729%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
