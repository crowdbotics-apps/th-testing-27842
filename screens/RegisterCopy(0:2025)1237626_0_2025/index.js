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
      <View style={styles.View_0_2026}>
        <Text style={styles.Text_0_2026}>Register</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e00d/691e/8119713fcfac13484633cc28d677925f"
        }}
        style={styles.ImageBackground_0_2027}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2db/8e38/b22477cdbfd222a1adcb4e4e43621bc6"
        }}
        style={styles.ImageBackground_0_2028}
      />
      <View style={styles.View_0_2029}>
        <Text style={styles.Text_0_2029}>Email</Text>
      </View>
      <View style={styles.View_0_2030}>
        <Text style={styles.Text_0_2030}>Password</Text>
      </View>
      <View style={styles.View_0_2031} />
      <View style={styles.View_0_2032}>
        <Text style={styles.Text_0_2032}>Submit</Text>
      </View>
      <View style={styles.View_0_2033}>
        <Text style={styles.Text_0_2033}>Login</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c06/ab20/7f1ba655f3055ca4255072809677ed10"
        }}
        style={styles.ImageBackground_0_2036}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ff3/16b7/c7ae82818cdf2b6c4ed4392491907cfb"
        }}
        style={styles.ImageBackground_0_2039}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7c1/d49f/003995f9534ee2a3e57e1f49c8fcf87c"
        }}
        style={styles.ImageBackground_0_2043}
      />
      <View style={styles.View_0_2044}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4af/c594/0a86b1ba1adb27761f206125cd10c67c"
          }}
          style={styles.ImageBackground_0_2045}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b31/fa1f/a180b19ff5cb1fa4018ce97c64dcbd4c"
          }}
          style={styles.ImageBackground_0_2046}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fd5/b55d/bc01ec89f1f121716112896e1cc1a802"
          }}
          style={styles.ImageBackground_0_2047}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c866/3ebb/cb1a59e9bba88965d2f1a37f17a69ab8"
          }}
          style={styles.ImageBackground_0_2048}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fd5/b55d/bc01ec89f1f121716112896e1cc1a802"
          }}
          style={styles.ImageBackground_0_2049}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c866/3ebb/cb1a59e9bba88965d2f1a37f17a69ab8"
          }}
          style={styles.ImageBackground_0_2050}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca2/63c9/1e8ddeaa919ab46c1cafb6e142e324d7"
          }}
          style={styles.ImageBackground_0_2051}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b5b/c553/54b8c3dc97c32da79d0d243a36bb95ae"
          }}
          style={styles.ImageBackground_0_2054}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9792/0b89/081d09167c59685c8f3ba4f3e99dc155"
          }}
          style={styles.ImageBackground_0_2055}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978c/fbf1/d8ff5e1f0263179a6ecf6a31bf031131"
          }}
          style={styles.ImageBackground_0_2058}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/f731/56c1d9a4722a09d259b8cd4b16e59649"
          }}
          style={styles.ImageBackground_0_2059}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b5b/c553/54b8c3dc97c32da79d0d243a36bb95ae"
          }}
          style={styles.ImageBackground_0_2062}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9792/0b89/081d09167c59685c8f3ba4f3e99dc155"
          }}
          style={styles.ImageBackground_0_2063}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f27/650e/9bd79bddf47fd22d218569fc069ca7b5"
          }}
          style={styles.ImageBackground_0_2064}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4af/c594/0a86b1ba1adb27761f206125cd10c67c"
          }}
          style={styles.ImageBackground_0_2065}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/978c/fbf1/d8ff5e1f0263179a6ecf6a31bf031131"
          }}
          style={styles.ImageBackground_0_2068}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eca2/63c9/1e8ddeaa919ab46c1cafb6e142e324d7"
          }}
          style={styles.ImageBackground_0_2069}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94b0/e577/f812671e60a6c138ea41fafa8a901b10"
          }}
          style={styles.ImageBackground_0_2070}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0908/ff1b/28a0ffebdaa713cffaa5260154bf7bec"
          }}
          style={styles.ImageBackground_0_2073}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0b8/79ec/864348bf115be1f9fc6f93951e408cc7"
          }}
          style={styles.ImageBackground_0_2074}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a7f/2b91/9c337703395ddfc2b8f0665729d42454"
          }}
          style={styles.ImageBackground_0_2075}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/517b/53cc/7dbeb822efc088db38595900ce484de8"
          }}
          style={styles.ImageBackground_0_2076}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c22/26eb/b508d487d929ea968e53de0f7a482098"
          }}
          style={styles.ImageBackground_0_2079}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/703c/18d6ba8752b35e1b307169b72d2fbfd6"
          }}
          style={styles.ImageBackground_0_2080}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/703c/18d6ba8752b35e1b307169b72d2fbfd6"
          }}
          style={styles.ImageBackground_0_2081}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd2b/0ff7/300f20e355a98623afca7026ebc1df6e"
          }}
          style={styles.ImageBackground_0_2084}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0908/ff1b/28a0ffebdaa713cffaa5260154bf7bec"
          }}
          style={styles.ImageBackground_0_2087}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b77/703c/18d6ba8752b35e1b307169b72d2fbfd6"
          }}
          style={styles.ImageBackground_0_2088}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4747/0745/e34741cba4f40d570bcd50b5ec856d95"
          }}
          style={styles.ImageBackground_0_2091}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f9/af97/82e0c57598bac0c95192406ba82faa84"
          }}
          style={styles.ImageBackground_0_2092}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4747/0745/e34741cba4f40d570bcd50b5ec856d95"
          }}
          style={styles.ImageBackground_0_2095}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8705/5c74/295a1f63203e9a2b58d96cdadf56b71e"
          }}
          style={styles.ImageBackground_0_2096}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86f4/8066/6260a37fa48ea2f58d0d31142737fcfe"
          }}
          style={styles.ImageBackground_0_2097}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a5c/cd34/1a78df957f360481da137ecddbf0dce9"
          }}
          style={styles.ImageBackground_0_2098}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/369b/5f58/071f250affb458e2407b657f3c6a701d"
          }}
          style={styles.ImageBackground_0_2099}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/055d/bf56/cf94e15b5c75b3b78f3d9afd1ac7754d"
          }}
          style={styles.ImageBackground_0_2100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f37/8e8a/1c66b54672aca91fd34ffe5a6d2f5480"
          }}
          style={styles.ImageBackground_0_2101}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdc2/53b8/c513aebcde797c443c7699c46a457320"
          }}
          style={styles.ImageBackground_0_2102}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fac0/dfe1/a64d4c229e9f862b81f0da20e9083561"
          }}
          style={styles.ImageBackground_0_2103}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b61/414b/0bb17793dd69c6cfc72ff2036527ed07"
          }}
          style={styles.ImageBackground_0_2104}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c8f/904d/7b511065da2e48f7858378854139d496"
          }}
          style={styles.ImageBackground_0_2105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c8f/904d/7b511065da2e48f7858378854139d496"
          }}
          style={styles.ImageBackground_0_2106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0b5/8035/90ec56d7e4acaa0c3e0c9a1e1834816f"
          }}
          style={styles.ImageBackground_0_2107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ca/2012/6cee4737bd1698bbe14fa77e60b07a6f"
          }}
          style={styles.ImageBackground_0_2108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4257/8330/ae4ae9f8b7c5523f551a5edf599135e5"
          }}
          style={styles.ImageBackground_0_2109}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a04/2763/951941122f512d5c82a729b33ffd9596"
          }}
          style={styles.ImageBackground_0_2110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/27f8/66e225c1d895d424a46da6240abf68ea"
          }}
          style={styles.ImageBackground_0_2111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a04/2763/951941122f512d5c82a729b33ffd9596"
          }}
          style={styles.ImageBackground_0_2112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/27f8/66e225c1d895d424a46da6240abf68ea"
          }}
          style={styles.ImageBackground_0_2113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a553/8534/a80ddec535f1d4c2ec6538784a94cfef"
          }}
          style={styles.ImageBackground_0_2114}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4257/8330/ae4ae9f8b7c5523f551a5edf599135e5"
          }}
          style={styles.ImageBackground_0_2115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ca/2012/6cee4737bd1698bbe14fa77e60b07a6f"
          }}
          style={styles.ImageBackground_0_2117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ca/2012/6cee4737bd1698bbe14fa77e60b07a6f"
          }}
          style={styles.ImageBackground_0_2119}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ca/2012/6cee4737bd1698bbe14fa77e60b07a6f"
          }}
          style={styles.ImageBackground_0_2121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4734/e60c/9ed4f165eb91f9122fffcb981901f911"
          }}
          style={styles.ImageBackground_0_2123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4734/e60c/9ed4f165eb91f9122fffcb981901f911"
          }}
          style={styles.ImageBackground_0_2124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b78d/1293/541c44cc1e3271927fb33e1b2d08d46c"
          }}
          style={styles.ImageBackground_0_2125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a8c/f565/56946e47971a7d3b8fb952b8f39a9734"
          }}
          style={styles.ImageBackground_0_2126}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_2026: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("6.146926536731634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("43.403298350824585%")
  },
  Text_0_2026: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 27,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_0_2027: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("61.09445277361319%")
  },
  ImageBackground_0_2028: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("69.9400299850075%")
  },
  View_0_2029: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333333%"),
    top: hp("56.52173913043478%")
  },
  Text_0_2029: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_2030: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("65.51724137931035%")
  },
  Text_0_2030: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_2031: {
    width: wp("81.6%"),
    minWidth: wp("81.6%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("77.06146926536732%"),
    backgroundColor: "rgba(38, 71, 122, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_2032: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%"),
    top: hp("79.76011994002998%")
  },
  Text_0_2032: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_0_2033: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.66666666666667%"),
    top: hp("44.97751124437781%")
  },
  Text_0_2033: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  ImageBackground_0_2036: {
    width: wp("1.624242401123047%"),
    minWidth: wp("1.624242401123047%"),
    height: hp("1.4909212378368921%"),
    minHeight: hp("1.4909212378368921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.92122395833334%"),
    top: hp("45.428805372704275%")
  },
  ImageBackground_0_2039: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("65.06746626686657%")
  },
  ImageBackground_0_2043: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.6986506746626686%"),
    minHeight: hp("2.6986506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("56.22188905547226%")
  },
  View_0_2044: {
    width: wp("77.60000000000001%"),
    minWidth: wp("77.60000000000001%"),
    height: hp("21.43928035982009%"),
    minHeight: hp("21.43928035982009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("11.84407796101949%")
  },
  ImageBackground_0_2045: {
    width: wp("1.2700094858805338%"),
    minWidth: wp("1.2700094858805338%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.768782552083337%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2046: {
    width: wp("1.2475186665852864%"),
    minWidth: wp("1.2475186665852864%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.892285156250004%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2047: {
    width: wp("0.40404609044392903%"),
    minWidth: wp("0.40404609044392903%"),
    height: hp("1.2809048528256624%"),
    minHeight: hp("1.2809048528256624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.082975260416667%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2048: {
    width: wp("1.1866223653157553%"),
    minWidth: wp("1.1866223653157553%"),
    height: hp("1.320394404467078%"),
    minHeight: hp("1.320394404467078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.369140625%"),
    top: hp("20.064808904141678%")
  },
  ImageBackground_0_2049: {
    width: wp("0.40404609044392903%"),
    minWidth: wp("0.40404609044392903%"),
    height: hp("1.2809048528256624%"),
    minHeight: hp("1.2809048528256624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.54798177083334%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2050: {
    width: wp("1.1866223653157553%"),
    minWidth: wp("1.1866223653157553%"),
    height: hp("1.320394404467078%"),
    minHeight: hp("1.320394404467078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.834049479166666%"),
    top: hp("20.064808904141678%")
  },
  ImageBackground_0_2051: {
    width: wp("1.3437952677408855%"),
    minWidth: wp("1.3437952677408855%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.88766276041667%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2054: {
    width: wp("1.2730345408121746%"),
    minWidth: wp("1.2730345408121746%"),
    height: hp("1.318626318020799%"),
    minHeight: hp("1.318626318020799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.975911458333336%"),
    top: hp("20.066574988872752%")
  },
  ImageBackground_0_2055: {
    width: wp("1.2379470825195313%"),
    minWidth: wp("1.2379470825195313%"),
    height: hp("1.30064962864637%"),
    minHeight: hp("1.30064962864637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.1537109375%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2058: {
    width: wp("1.2442305246988932%"),
    minWidth: wp("1.2442305246988932%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.32532552083333%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2059: {
    width: wp("1.2218711853027344%"),
    minWidth: wp("1.2218711853027344%"),
    height: hp("1.318626318020799%"),
    minHeight: hp("1.318626318020799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.54241536458333%"),
    top: hp("20.066574988872752%")
  },
  ImageBackground_0_2062: {
    width: wp("1.2731661478678384%"),
    minWidth: wp("1.2731661478678384%"),
    height: hp("1.318626318020799%"),
    minHeight: hp("1.318626318020799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.64013671875%"),
    top: hp("20.066574988872752%")
  },
  ImageBackground_0_2063: {
    width: wp("1.2379447937011718%"),
    minWidth: wp("1.2379447937011718%"),
    height: hp("1.30064962864637%"),
    minHeight: hp("1.30064962864637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.81819661458333%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2064: {
    width: wp("1.2923688252766927%"),
    minWidth: wp("1.2923688252766927%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.989811197916666%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2065: {
    width: wp("1.2700094858805338%"),
    minWidth: wp("1.2700094858805338%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.1322265625%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2068: {
    width: wp("1.2442305246988932%"),
    minWidth: wp("1.2442305246988932%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.25569661458334%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2069: {
    width: wp("1.3436637878417967%"),
    minWidth: wp("1.3436637878417967%"),
    height: hp("1.2808312183019819%"),
    minHeight: hp("1.2808312183019819%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.22529296875%"),
    top: hp("20.086322195347638%")
  },
  ImageBackground_0_2070: {
    width: wp("5.553661092122396%"),
    minWidth: wp("5.553661092122396%"),
    height: hp("3.4197494186561506%"),
    minHeight: hp("3.4197494186561506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.030631510416666785%"),
    top: hp("14.61009607500937%")
  },
  ImageBackground_0_2073: {
    width: wp("4.571297709147135%"),
    minWidth: wp("4.571297709147135%"),
    height: hp("2.5494325286087425%"),
    minHeight: hp("2.5494325286087425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.644010416666667%"),
    top: hp("15.54222278509183%")
  },
  ImageBackground_0_2074: {
    width: wp("7.237712605794271%"),
    minWidth: wp("7.237712605794271%"),
    height: hp("2.425806597433705%"),
    minHeight: hp("2.425806597433705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.495475260416669%"),
    top: hp("15.604035750679351%")
  },
  ImageBackground_0_2075: {
    width: wp("5.322965494791667%"),
    minWidth: wp("5.322965494791667%"),
    height: hp("2.487619563021224%"),
    minHeight: hp("2.487619563021224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.13365885416667%"),
    top: hp("15.54222278509183%")
  },
  ImageBackground_0_2076: {
    width: wp("6.866810607910157%"),
    minWidth: wp("6.866810607910157%"),
    height: hp("3.4197494186561506%"),
    minHeight: hp("3.4197494186561506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.142513020833334%"),
    top: hp("14.61009607500937%")
  },
  ImageBackground_0_2079: {
    width: wp("4.5010630289713545%"),
    minWidth: wp("4.5010630289713545%"),
    height: hp("2.5494325286087425%"),
    minHeight: hp("2.5494325286087425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.57001953125%"),
    top: hp("15.54222278509183%")
  },
  ImageBackground_0_2080: {
    width: wp("2.455974324544271%"),
    minWidth: wp("2.455974324544271%"),
    height: hp("3.970024360530916%"),
    minHeight: hp("3.970024360530916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.37135416666667%"),
    top: hp("14.059818845460079%")
  },
  ImageBackground_0_2081: {
    width: wp("2.455974324544271%"),
    minWidth: wp("2.455974324544271%"),
    height: hp("3.970024360530916%"),
    minHeight: hp("3.970024360530916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.248079427083326%"),
    top: hp("14.059818845460079%")
  },
  ImageBackground_0_2084: {
    width: wp("5.343088785807291%"),
    minWidth: wp("5.343088785807291%"),
    height: hp("3.4197494186561506%"),
    minHeight: hp("3.4197494186561506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.43030598958333%"),
    top: hp("14.61009607500937%")
  },
  ImageBackground_0_2087: {
    width: wp("4.571297709147135%"),
    minWidth: wp("4.571297709147135%"),
    height: hp("2.5494325286087425%"),
    minHeight: hp("2.5494325286087425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.113671874999994%"),
    top: hp("15.54222278509183%")
  },
  ImageBackground_0_2088: {
    width: wp("2.455974324544271%"),
    minWidth: wp("2.455974324544271%"),
    height: hp("3.970024360530916%"),
    minHeight: hp("3.970024360530916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.18567708333333%"),
    top: hp("14.059818845460079%")
  },
  ImageBackground_0_2091: {
    width: wp("2.455974324544271%"),
    minWidth: wp("2.455974324544271%"),
    height: hp("3.6499086348549357%"),
    minHeight: hp("3.6499086348549357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.18274739583333%"),
    top: hp("14.379937716688534%")
  },
  ImageBackground_0_2092: {
    width: wp("3.137670389811198%"),
    minWidth: wp("3.137670389811198%"),
    height: hp("3.1053065538763818%"),
    minHeight: hp("3.1053065538763818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.92900390625%"),
    top: hp("14.986354479010494%")
  },
  ImageBackground_0_2095: {
    width: wp("2.455974324544271%"),
    minWidth: wp("2.455974324544271%"),
    height: hp("3.6499086348549357%"),
    minHeight: hp("3.6499086348549357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57763671875%"),
    top: hp("14.379937716688534%")
  },
  ImageBackground_0_2096: {
    width: wp("3.8593505859375004%"),
    minWidth: wp("3.8593505859375004%"),
    height: hp("2.5494325286087425%"),
    minHeight: hp("2.5494325286087425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.53460286458333%"),
    top: hp("15.54222278509183%")
  },
  ImageBackground_0_2097: {
    width: wp("3.508572133382162%"),
    minWidth: wp("3.508572133382162%"),
    height: hp("2.5494325286087425%"),
    minHeight: hp("2.5494325286087425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.0552734375%"),
    top: hp("15.54222278509183%")
  },
  ImageBackground_0_2098: {
    width: wp("7.882235209147136%"),
    minWidth: wp("7.882235209147136%"),
    height: hp("4.351879274291077%"),
    minHeight: hp("4.351879274291077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.380436197916666%"),
    top: hp("5.3782404452070836%")
  },
  ImageBackground_0_2099: {
    width: wp("6.181695048014323%"),
    minWidth: wp("6.181695048014323%"),
    height: hp("0.4420470262038475%"),
    minHeight: hp("0.4420470262038475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.66442057291667%"),
    top: hp("5.967636909084522%")
  },
  ImageBackground_0_2100: {
    width: wp("6.181695048014323%"),
    minWidth: wp("6.181695048014323%"),
    height: hp("0.4420470262038475%"),
    minHeight: hp("0.4420470262038475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.66442057291667%"),
    top: hp("8.693593266843141%")
  },
  ImageBackground_0_2101: {
    width: wp("7.882234700520834%"),
    minWidth: wp("7.882234700520834%"),
    height: hp("4.351879274291077%"),
    minHeight: hp("4.351879274291077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.636816406250002%"),
    top: hp("5.3782404452070836%")
  },
  ImageBackground_0_2102: {
    width: wp("6.181695048014323%"),
    minWidth: wp("6.181695048014323%"),
    height: hp("0.4420470262038475%"),
    minHeight: hp("0.4420470262038475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.175585937500003%"),
    top: hp("8.693593266843141%")
  },
  ImageBackground_0_2103: {
    width: wp("6.181695048014323%"),
    minWidth: wp("6.181695048014323%"),
    height: hp("0.4420470262038475%"),
    minHeight: hp("0.4420470262038475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.175585937500003%"),
    top: hp("5.967636909084522%")
  },
  ImageBackground_0_2104: {
    width: wp("24.086383056640624%"),
    minWidth: wp("24.086383056640624%"),
    height: hp("8.610781164898508%"),
    minHeight: hp("8.610781164898508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.959049479166666%"),
    top: hp("1.7336363556502992%")
  },
  ImageBackground_0_2105: {
    width: wp("0.5163688023885091%"),
    minWidth: wp("0.5163688023885091%"),
    height: hp("0.5243414345531092%"),
    minHeight: hp("0.5243414345531092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.527604166666663%"),
    top: hp("6.420065723973952%")
  },
  ImageBackground_0_2106: {
    width: wp("0.5163688023885091%"),
    minWidth: wp("0.5163688023885091%"),
    height: hp("0.5243414345531092%"),
    minHeight: hp("0.5243414345531092%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.845019531249996%"),
    top: hp("6.420065723973952%")
  },
  ImageBackground_0_2107: {
    width: wp("21.173883056640623%"),
    minWidth: wp("21.173883056640623%"),
    height: hp("7.201829878822795%"),
    minHeight: hp("7.201829878822795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.349544270833334%"),
    top: hp("2.4012712881840326%")
  },
  ImageBackground_0_2108: {
    width: wp("1.9365802764892577%"),
    minWidth: wp("1.9365802764892577%"),
    height: hp("1.0486828691062184%"),
    minHeight: hp("1.0486828691062184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.449283854166666%"),
    top: hp("7.821284670164918%")
  },
  ImageBackground_0_2109: {
    width: wp("2.24513905843099%"),
    minWidth: wp("2.24513905843099%"),
    height: hp("0.25314559107241424%"),
    minHeight: hp("0.25314559107241424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.449283854166666%"),
    top: hp("4.607083665198651%")
  },
  ImageBackground_0_2110: {
    width: wp("1.0974480946858722%"),
    minWidth: wp("1.0974480946858722%"),
    height: hp("0.6056780579208076%"),
    minHeight: hp("0.6056780579208076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.689615885416664%"),
    top: hp("8.26428826602324%")
  },
  ImageBackground_0_2111: {
    width: wp("1.0974480946858722%"),
    minWidth: wp("1.0974480946858722%"),
    height: hp("1.2113561158416153%"),
    minHeight: hp("1.2113561158416153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.689615885416664%"),
    top: hp("6.342788078616941%")
  },
  ImageBackground_0_2112: {
    width: wp("1.0974480946858722%"),
    minWidth: wp("1.0974480946858722%"),
    height: hp("0.6056780579208076%"),
    minHeight: hp("0.6056780579208076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.2150390625%"),
    top: hp("8.26428826602324%")
  },
  ImageBackground_0_2113: {
    width: wp("1.0974480946858722%"),
    minWidth: wp("1.0974480946858722%"),
    height: hp("1.2113561158416153%"),
    minHeight: hp("1.2113561158416153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.2150390625%"),
    top: hp("6.342788078616941%")
  },
  ImageBackground_0_2114: {
    width: wp("3.601166025797526%"),
    minWidth: wp("3.601166025797526%"),
    height: hp("0.25314559107241424%"),
    minHeight: hp("0.25314559107241424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.168164062500004%"),
    top: hp("4.607083665198651%")
  },
  ImageBackground_0_2115: {
    width: wp("2.24513905843099%"),
    minWidth: wp("2.24513905843099%"),
    height: hp("0.25314559107241424%"),
    minHeight: hp("0.25314559107241424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.242968749999996%"),
    top: hp("4.607083665198651%")
  },
  ImageBackground_0_2116: {
    width: wp("1.9365802764892577%"),
    minWidth: wp("1.9365802764892577%"),
    height: hp("1.5367763868157474%"),
    minHeight: hp("1.5367763868157474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.449283854166666%"),
    top: hp("5.8003896001218145%")
  },
  ImageBackground_0_2117: {
    width: wp("1.936711883544922%"),
    minWidth: wp("1.936711883544922%"),
    height: hp("1.0486828691062184%"),
    minHeight: hp("1.0486828691062184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.483333333333334%"),
    top: hp("7.821284670164918%")
  },
  ImageBackground_0_2118: {
    width: wp("1.936711883544922%"),
    minWidth: wp("1.936711883544922%"),
    height: hp("1.5367763868157474%"),
    minHeight: hp("1.5367763868157474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.483333333333334%"),
    top: hp("5.8003896001218145%")
  },
  ImageBackground_0_2119: {
    width: wp("1.9365802764892577%"),
    minWidth: wp("1.9365802764892577%"),
    height: hp("1.0486828691062184%"),
    minHeight: hp("1.0486828691062184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.517480468749994%"),
    top: hp("7.821284670164918%")
  },
  ImageBackground_0_2120: {
    width: wp("1.9365802764892577%"),
    minWidth: wp("1.9365802764892577%"),
    height: hp("1.5367763868157474%"),
    minHeight: hp("1.5367763868157474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.517480468749994%"),
    top: hp("5.8003896001218145%")
  },
  ImageBackground_0_2121: {
    width: wp("1.9365802764892577%"),
    minWidth: wp("1.9365802764892577%"),
    height: hp("1.0486828691062184%"),
    minHeight: hp("1.0486828691062184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.55149739583334%"),
    top: hp("7.821284670164918%")
  },
  ImageBackground_0_2122: {
    width: wp("1.936711883544922%"),
    minWidth: wp("1.936711883544922%"),
    height: hp("1.5367763868157474%"),
    minHeight: hp("1.5367763868157474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.55149739583334%"),
    top: hp("5.8003896001218145%")
  },
  ImageBackground_0_2123: {
    width: wp("2.4770182291666667%"),
    minWidth: wp("2.4770182291666667%"),
    height: hp("1.3195839957676192%"),
    minHeight: hp("1.3195839957676192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.15885416666666%"),
    top: hp("6.677410806315592%")
  },
  ImageBackground_0_2124: {
    width: wp("2.4770182291666667%"),
    minWidth: wp("2.4770182291666667%"),
    height: hp("1.3195839957676192%"),
    minHeight: hp("1.3195839957676192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.17421875%"),
    top: hp("6.677410806315592%")
  },
  ImageBackground_0_2125: {
    width: wp("2.2961708068847657%"),
    minWidth: wp("2.2961708068847657%"),
    height: hp("0.6538612016852291%"),
    minHeight: hp("0.6538612016852291%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.616276041666666%"),
    top: hp("0.23944631688062223%")
  },
  ImageBackground_0_2126: {
    width: wp("0.49322032928466797%"),
    minWidth: wp("0.49322032928466797%"),
    height: hp("3.389027093661421%"),
    minHeight: hp("3.389027093661421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.616276041666666%"),
    top: hp("0.018420355252061427%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
