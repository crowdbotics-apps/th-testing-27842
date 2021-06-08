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
      <View style={styles.View_0_2128}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3943/b6aa/01787b34579ac80bda8c9603a45b80c6"
          }}
          style={styles.ImageBackground_0_2129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d768/ac5a/a40bfc478665051db572b00827d0f119"
          }}
          style={styles.ImageBackground_0_2130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca1d/220f/b1523a78019594fa61b90a472028b2eb"
          }}
          style={styles.ImageBackground_0_2131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8547/4c5b/c7e08aa5e3be00811e6433155e33bcd0"
          }}
          style={styles.ImageBackground_0_2132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca1d/220f/b1523a78019594fa61b90a472028b2eb"
          }}
          style={styles.ImageBackground_0_2133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8547/4c5b/c7e08aa5e3be00811e6433155e33bcd0"
          }}
          style={styles.ImageBackground_0_2134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fca/9832/8c5d1168b24527cc12f40b6df346ceb4"
          }}
          style={styles.ImageBackground_0_2135}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d94/ecb7/fdcddb50d6ad82beb83cb26080ac27ff"
          }}
          style={styles.ImageBackground_0_2138}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc0/3564/c44ea076332ec57ddcf3d1e5564f4467"
          }}
          style={styles.ImageBackground_0_2139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6249/17a3/f4b9e2b4309175d27fc11fcab2cfef2c"
          }}
          style={styles.ImageBackground_0_2142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2033/a0cc/d3322fe6b6cd77668ac4aeed9506608c"
          }}
          style={styles.ImageBackground_0_2143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d94/ecb7/fdcddb50d6ad82beb83cb26080ac27ff"
          }}
          style={styles.ImageBackground_0_2146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc0/3564/c44ea076332ec57ddcf3d1e5564f4467"
          }}
          style={styles.ImageBackground_0_2147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36f2/e3e9/475bc79118be6deafa185e9b9433f41e"
          }}
          style={styles.ImageBackground_0_2148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3943/b6aa/01787b34579ac80bda8c9603a45b80c6"
          }}
          style={styles.ImageBackground_0_2149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6249/17a3/f4b9e2b4309175d27fc11fcab2cfef2c"
          }}
          style={styles.ImageBackground_0_2152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fca/9832/8c5d1168b24527cc12f40b6df346ceb4"
          }}
          style={styles.ImageBackground_0_2153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb2b/9c57/53508eebb49015c5c27b454564420167"
          }}
          style={styles.ImageBackground_0_2154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1227/68af/19c1f8c0353c0b4e4d453a8b3cec09a0"
          }}
          style={styles.ImageBackground_0_2157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8b/51b8/bf5fafe00732a3d32818ae9f9a31b029"
          }}
          style={styles.ImageBackground_0_2158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82ef/4698/ee184b1b33b09d429339df14fc575a3a"
          }}
          style={styles.ImageBackground_0_2159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e2/35b2/79f3c0d4c100f665344a453b541753ba"
          }}
          style={styles.ImageBackground_0_2160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b92/56ed/ff7a7e28f1883df3f814eb6092a11fbd"
          }}
          style={styles.ImageBackground_0_2163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0bb/0830/c525582f56ee64bc7e53ec5fc3e541fe"
          }}
          style={styles.ImageBackground_0_2164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0bb/0830/c525582f56ee64bc7e53ec5fc3e541fe"
          }}
          style={styles.ImageBackground_0_2165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe7/1bf7/35a0d9e28dcbf87f91585b18e80c0eee"
          }}
          style={styles.ImageBackground_0_2168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1227/68af/19c1f8c0353c0b4e4d453a8b3cec09a0"
          }}
          style={styles.ImageBackground_0_2171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0bb/0830/c525582f56ee64bc7e53ec5fc3e541fe"
          }}
          style={styles.ImageBackground_0_2172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0af/07f9/373d36d12df564cadfd00728b15fd186"
          }}
          style={styles.ImageBackground_0_2175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01e6/9673/6dd122383c247366d014c3c24ca71a5e"
          }}
          style={styles.ImageBackground_0_2176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0af/07f9/373d36d12df564cadfd00728b15fd186"
          }}
          style={styles.ImageBackground_0_2179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bc0/130e/48a5a4e81d2e88be85a63c0ef5c446a2"
          }}
          style={styles.ImageBackground_0_2180}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5526/7b2f/c70995071c483bc754eff0fe12d664f9"
          }}
          style={styles.ImageBackground_0_2181}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24fc/5359/b0516e63fd061a1dbbad02a7ed167e4f"
          }}
          style={styles.ImageBackground_0_2182}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/368c/3599/6cf96f6a6057eb6388dde38878f1bff0"
          }}
          style={styles.ImageBackground_0_2183}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e73/a051/ddbb696e47449c158a33d6235d90cd14"
          }}
          style={styles.ImageBackground_0_2184}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9406/9a14/83464b4b72ce0d9e87dccf280e523681"
          }}
          style={styles.ImageBackground_0_2185}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f66/9a26/9f1a0d079c0b12726b711c9b075c7fe3"
          }}
          style={styles.ImageBackground_0_2186}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ab3/2f5f/8d790c746ebe6d8426ce9ad8bc9c2945"
          }}
          style={styles.ImageBackground_0_2187}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e89/8135/d76e39a9436712d011861a3b9512adb0"
          }}
          style={styles.ImageBackground_0_2188}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/053a/5a55/f0a0ba3b3be8eebc46d0774170dbc48d"
          }}
          style={styles.ImageBackground_0_2189}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/053a/5a55/f0a0ba3b3be8eebc46d0774170dbc48d"
          }}
          style={styles.ImageBackground_0_2190}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8682/4e9f/383bb3cb27398aa2de75dc4f05ae0866"
          }}
          style={styles.ImageBackground_0_2191}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b16/5583/aa992ad7b339a48665ba689311c28658"
          }}
          style={styles.ImageBackground_0_2192}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4257/8330/ae4ae9f8b7c5523f551a5edf599135e5"
          }}
          style={styles.ImageBackground_0_2193}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a04/2763/951941122f512d5c82a729b33ffd9596"
          }}
          style={styles.ImageBackground_0_2194}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/27f8/66e225c1d895d424a46da6240abf68ea"
          }}
          style={styles.ImageBackground_0_2195}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a04/2763/951941122f512d5c82a729b33ffd9596"
          }}
          style={styles.ImageBackground_0_2196}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/417c/27f8/66e225c1d895d424a46da6240abf68ea"
          }}
          style={styles.ImageBackground_0_2197}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6f3/717a/cf1b2d8374b7cf814abaffb204bfd125"
          }}
          style={styles.ImageBackground_0_2198}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4257/8330/ae4ae9f8b7c5523f551a5edf599135e5"
          }}
          style={styles.ImageBackground_0_2199}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2200}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b16/5583/aa992ad7b339a48665ba689311c28658"
          }}
          style={styles.ImageBackground_0_2201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2202}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b16/5583/aa992ad7b339a48665ba689311c28658"
          }}
          style={styles.ImageBackground_0_2203}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2204}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b16/5583/aa992ad7b339a48665ba689311c28658"
          }}
          style={styles.ImageBackground_0_2205}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6bf/7475/d813514958b2fdf5663733c878ac8d95"
          }}
          style={styles.ImageBackground_0_2206}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab1/af06/1b20b73f6abe040acfc916bb3f5ecebf"
          }}
          style={styles.ImageBackground_0_2207}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab1/af06/1b20b73f6abe040acfc916bb3f5ecebf"
          }}
          style={styles.ImageBackground_0_2208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac92/6fe7/6c9ab4b2d3c96b0e1f301621a026dac9"
          }}
          style={styles.ImageBackground_0_2211}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfd4/d353/de33edab8567869bc929df76ba0c00ba"
          }}
          style={styles.ImageBackground_0_2212}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_2128: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("22.938530734632685%"),
    minHeight: hp("22.938530734632685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999999%"),
    top: hp("34.03298350824588%")
  },
  ImageBackground_0_2129: {
    width: wp("1.3485668182373047%"),
    minWidth: wp("1.3485668182373047%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.9916015625%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2130: {
    width: wp("1.3246847788492837%"),
    minWidth: wp("1.3246847788492837%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.24645182291667%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2131: {
    width: wp("0.4290386517842611%"),
    minWidth: wp("0.4290386517842611%"),
    height: hp("1.3615213591476967%"),
    minHeight: hp("1.3615213591476967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.57262369791667%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2132: {
    width: wp("1.2600217183430988%"),
    minWidth: wp("1.2600217183430988%"),
    height: hp("1.403496183198074%"),
    minHeight: hp("1.403496183198074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93837890625%"),
    top: hp("21.47754857922601%")
  },
  ImageBackground_0_2133: {
    width: wp("0.4290386517842611%"),
    minWidth: wp("0.4290386517842611%"),
    height: hp("1.3615213591476967%"),
    minHeight: hp("1.3615213591476967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.31383463541667%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2134: {
    width: wp("1.2600217183430988%"),
    minWidth: wp("1.2600217183430988%"),
    height: hp("1.403496183198074%"),
    minHeight: hp("1.403496183198074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.67945963541667%"),
    top: hp("21.47754857922601%")
  },
  ImageBackground_0_2135: {
    width: wp("1.4269166310628256%"),
    minWidth: wp("1.4269166310628256%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.92194010416667%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2138: {
    width: wp("1.3517789204915365%"),
    minWidth: wp("1.3517789204915365%"),
    height: hp("1.4016167155984995%"),
    minHeight: hp("1.4016167155984995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.139355468750004%"),
    top: hp("21.479433623032236%")
  },
  ImageBackground_0_2139: {
    width: wp("1.3145211537679038%"),
    minWidth: wp("1.3145211537679038%"),
    height: hp("1.3825087711728852%"),
    minHeight: hp("1.3825087711728852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.451855468750004%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2142: {
    width: wp("1.3211931864420574%"),
    minWidth: wp("1.3211931864420574%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.7578125%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2143: {
    width: wp("1.2974508921305339%"),
    minWidth: wp("1.2974508921305339%"),
    height: hp("1.4016167155984995%"),
    minHeight: hp("1.4016167155984995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.17392578125%"),
    top: hp("21.479433623032236%")
  },
  ImageBackground_0_2146: {
    width: wp("1.351918665568034%"),
    minWidth: wp("1.351918665568034%"),
    height: hp("1.4016167155984995%"),
    minHeight: hp("1.4016167155984995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.4013671875%"),
    top: hp("21.479433623032236%")
  },
  ImageBackground_0_2147: {
    width: wp("1.3145186106363933%"),
    minWidth: wp("1.3145186106363933%"),
    height: hp("1.3825087711728852%"),
    minHeight: hp("1.3825087711728852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.714160156249996%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2148: {
    width: wp("1.372309112548828%"),
    minWidth: wp("1.372309112548828%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.02008463541667%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2149: {
    width: wp("1.3485668182373047%"),
    minWidth: wp("1.3485668182373047%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.29505208333334%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2152: {
    width: wp("1.3211931864420574%"),
    minWidth: wp("1.3211931864420574%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.54986979166668%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2153: {
    width: wp("1.4267768859863281%"),
    minWidth: wp("1.4267768859863281%"),
    height: hp("1.3614430062953142%"),
    minHeight: hp("1.3614430062953142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.64127604166667%"),
    top: hp("21.500425324447157%")
  },
  ImageBackground_0_2154: {
    width: wp("5.897186279296875%"),
    minWidth: wp("5.897186279296875%"),
    height: hp("3.6349784130456744%"),
    minHeight: hp("3.6349784130456744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.032552083333333925%"),
    top: hp("15.679538160607194%")
  },
  ImageBackground_0_2157: {
    width: wp("4.854058329264323%"),
    minWidth: wp("4.854058329264323%"),
    height: hp("2.709886302118716%"),
    minHeight: hp("2.709886302118716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.993131510416667%"),
    top: hp("16.67032999613474%")
  },
  ImageBackground_0_2158: {
    width: wp("7.685405985514322%"),
    minWidth: wp("7.685405985514322%"),
    height: hp("2.578479703934654%"),
    minHeight: hp("2.578479703934654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.144661458333333%"),
    top: hp("16.73604115910795%")
  },
  ImageBackground_0_2159: {
    width: wp("5.652221171061198%"),
    minWidth: wp("5.652221171061198%"),
    height: hp("2.6441831460063425%"),
    minHeight: hp("2.6441831460063425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.255338541666667%"),
    top: hp("16.67032999613474%")
  },
  ImageBackground_0_2160: {
    width: wp("7.291561889648437%"),
    minWidth: wp("7.291561889648437%"),
    height: hp("3.6349784130456744%"),
    minHeight: hp("3.6349784130456744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.759570312500003%"),
    top: hp("15.679538160607194%")
  },
  ImageBackground_0_2163: {
    width: wp("4.779479471842448%"),
    minWidth: wp("4.779479471842448%"),
    height: hp("2.709886302118716%"),
    minHeight: hp("2.709886302118716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.64651692708334%"),
    top: hp("16.67032999613474%")
  },
  ImageBackground_0_2164: {
    width: wp("2.6078900655110675%"),
    minWidth: wp("2.6078900655110675%"),
    height: hp("4.219885887592093%"),
    minHeight: hp("4.219885887592093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.74485677083334%"),
    top: hp("15.094625538793103%")
  },
  ImageBackground_0_2165: {
    width: wp("2.6078900655110675%"),
    minWidth: wp("2.6078900655110675%"),
    height: hp("4.219885887592093%"),
    minHeight: hp("4.219885887592093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.799511718750004%"),
    top: hp("15.094625538793103%")
  },
  ImageBackground_0_2168: {
    width: wp("5.6735890706380205%"),
    minWidth: wp("5.6735890706380205%"),
    height: hp("3.6349784130456744%"),
    minHeight: hp("3.6349784130456744%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.30227864583334%"),
    top: hp("15.679538160607194%")
  },
  ImageBackground_0_2171: {
    width: wp("4.854058329264323%"),
    minWidth: wp("4.854058329264323%"),
    height: hp("2.709886302118716%"),
    minHeight: hp("2.709886302118716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.33717447916668%"),
    top: hp("16.67032999613474%")
  },
  ImageBackground_0_2172: {
    width: wp("2.6078900655110675%"),
    minWidth: wp("2.6078900655110675%"),
    height: hp("4.219885887592093%"),
    minHeight: hp("4.219885887592093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.72291666666668%"),
    top: hp("15.094625538793103%")
  },
  ImageBackground_0_2175: {
    width: wp("2.6078900655110675%"),
    minWidth: wp("2.6078900655110675%"),
    height: hp("3.8796231843184854%"),
    minHeight: hp("3.8796231843184854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.90540364583333%"),
    top: hp("15.434894247212327%")
  },
  ImageBackground_0_2176: {
    width: wp("3.3317532857259113%"),
    minWidth: wp("3.3317532857259113%"),
    height: hp("3.3007454478937293%"),
    minHeight: hp("3.3007454478937293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.82151692708334%"),
    top: hp("16.079478571261248%")
  },
  ImageBackground_0_2179: {
    width: wp("2.6078900655110675%"),
    minWidth: wp("2.6078900655110675%"),
    height: hp("3.8796231843184854%"),
    minHeight: hp("3.8796231843184854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.69583333333334%"),
    top: hp("15.434894247212327%")
  },
  ImageBackground_0_2180: {
    width: wp("4.098073323567708%"),
    minWidth: wp("4.098073323567708%"),
    height: hp("2.709886302118716%"),
    minHeight: hp("2.709886302118716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.83570963541666%"),
    top: hp("16.67032999613474%")
  },
  ImageBackground_0_2181: {
    width: wp("3.725597381591797%"),
    minWidth: wp("3.725597381591797%"),
    height: hp("2.709886302118716%"),
    minHeight: hp("2.709886302118716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.63600260416666%"),
    top: hp("16.67032999613474%")
  },
  ImageBackground_0_2182: {
    width: wp("8.369796244303386%"),
    minWidth: wp("8.369796244303386%"),
    height: hp("4.625773680085006%"),
    minHeight: hp("4.625773680085006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.37304687500001%"),
    top: hp("5.86665895567841%")
  },
  ImageBackground_0_2183: {
    width: wp("6.564067586263021%"),
    minWidth: wp("6.564067586263021%"),
    height: hp("0.46986815096556334%"),
    minHeight: hp("0.46986815096556334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.67457682291667%"),
    top: hp("6.493143198908356%")
  },
  ImageBackground_0_2184: {
    width: wp("6.564067586263021%"),
    minWidth: wp("6.564067586263021%"),
    height: hp("0.46986815096556334%"),
    minHeight: hp("0.46986815096556334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.67457682291667%"),
    top: hp("9.390665995127435%")
  },
  ImageBackground_0_2185: {
    width: wp("8.369795227050782%"),
    minWidth: wp("8.369795227050782%"),
    height: hp("4.625773680085006%"),
    minHeight: hp("4.625773680085006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.85146484375%"),
    top: hp("5.86665895567841%")
  },
  ImageBackground_0_2186: {
    width: wp("6.564067586263021%"),
    minWidth: wp("6.564067586263021%"),
    height: hp("0.46986815096556334%"),
    minHeight: hp("0.46986815096556334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.485416666666666%"),
    top: hp("9.390665995127435%")
  },
  ImageBackground_0_2187: {
    width: wp("6.564067586263021%"),
    minWidth: wp("6.564067586263021%"),
    height: hp("0.46986815096556334%"),
    minHeight: hp("0.46986815096556334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.485416666666666%"),
    top: hp("6.493143198908356%")
  },
  ImageBackground_0_2188: {
    width: wp("25.576261393229167%"),
    minWidth: wp("25.576261393229167%"),
    height: hp("9.152718676977429%"),
    minHeight: hp("9.152718676977429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.564746093750003%"),
    top: hp("1.9926651664402186%")
  },
  ImageBackground_0_2189: {
    width: wp("0.5483091354370118%"),
    minWidth: wp("0.5483091354370118%"),
    height: hp("0.5573419616676343%"),
    minHeight: hp("0.5573419616676343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.292187499999997%"),
    top: hp("6.97405813694715%")
  },
  ImageBackground_0_2190: {
    width: wp("0.5483091354370118%"),
    minWidth: wp("0.5483091354370118%"),
    height: hp("0.5573419616676343%"),
    minHeight: hp("0.5573419616676343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.742643229166674%"),
    top: hp("6.97405813694715%")
  },
  ImageBackground_0_2191: {
    width: wp("22.48360799153646%"),
    minWidth: wp("22.48360799153646%"),
    height: hp("7.655091979156905%"),
    minHeight: hp("7.655091979156905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.041243489583337%"),
    top: hp("2.702329255294231%")
  },
  ImageBackground_0_2192: {
    width: wp("2.0563687642415363%"),
    minWidth: wp("2.0563687642415363%"),
    height: hp("1.1146839233352686%"),
    minHeight: hp("1.1146839233352686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.456477864583334%"),
    top: hp("8.463462360616568%")
  },
  ImageBackground_0_2193: {
    width: wp("2.38401362101237%"),
    minWidth: wp("2.38401362101237%"),
    height: hp("0.26907783219481873%"),
    minHeight: hp("0.26907783219481873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.456477864583334%"),
    top: hp("5.046966873008806%")
  },
  ImageBackground_0_2194: {
    width: wp("1.165331522623698%"),
    minWidth: wp("1.165331522623698%"),
    height: hp("0.64379772146245%"),
    minHeight: hp("0.64379772146245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.526106770833337%"),
    top: hp("8.934348133550415%")
  },
  ImageBackground_0_2195: {
    width: wp("1.165331522623698%"),
    minWidth: wp("1.165331522623698%"),
    height: hp("1.2875954429249%"),
    minHeight: hp("1.2875954429249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.526106770833337%"),
    top: hp("6.891903169509%")
  },
  ImageBackground_0_2196: {
    width: wp("1.165331522623698%"),
    minWidth: wp("1.165331522623698%"),
    height: hp("0.64379772146245%"),
    minHeight: hp("0.64379772146245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.011816406250006%"),
    top: hp("8.934348133550415%")
  },
  ImageBackground_0_2197: {
    width: wp("1.165331522623698%"),
    minWidth: wp("1.165331522623698%"),
    height: hp("1.2875954429249%"),
    minHeight: hp("1.2875954429249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.011816406250006%"),
    top: hp("6.891903169509%")
  },
  ImageBackground_0_2198: {
    width: wp("3.823918660481771%"),
    minWidth: wp("3.823918660481771%"),
    height: hp("0.26907783219481873%"),
    minHeight: hp("0.26907783219481873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.40537109375%"),
    top: hp("5.046966873008806%")
  },
  ImageBackground_0_2199: {
    width: wp("2.38401362101237%"),
    minWidth: wp("2.38401362101237%"),
    height: hp("0.26907783219481873%"),
    minHeight: hp("0.26907783219481873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.79407552083334%"),
    top: hp("5.046966873008806%")
  },
  ImageBackground_0_2200: {
    width: wp("2.0563687642415363%"),
    minWidth: wp("2.0563687642415363%"),
    height: hp("1.6334966919768874%"),
    minHeight: hp("1.6334966919768874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.456477864583334%"),
    top: hp("6.315381737842017%")
  },
  ImageBackground_0_2201: {
    width: wp("2.056508509318034%"),
    minWidth: wp("2.056508509318034%"),
    height: hp("1.1146839233352686%"),
    minHeight: hp("1.1146839233352686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.678157552083334%"),
    top: hp("8.463462360616568%")
  },
  ImageBackground_0_2202: {
    width: wp("2.056508509318034%"),
    minWidth: wp("2.056508509318034%"),
    height: hp("1.6334966919768874%"),
    minHeight: hp("1.6334966919768874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.678157552083334%"),
    top: hp("6.315381737842017%")
  },
  ImageBackground_0_2203: {
    width: wp("2.0563687642415363%"),
    minWidth: wp("2.0563687642415363%"),
    height: hp("1.1146839233352686%"),
    minHeight: hp("1.1146839233352686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.900000000000006%"),
    top: hp("8.463462360616568%")
  },
  ImageBackground_0_2204: {
    width: wp("2.0563687642415363%"),
    minWidth: wp("2.0563687642415363%"),
    height: hp("1.6334966919768874%"),
    minHeight: hp("1.6334966919768874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.900000000000006%"),
    top: hp("6.315381737842017%")
  },
  ImageBackground_0_2205: {
    width: wp("2.0563687642415363%"),
    minWidth: wp("2.0563687642415363%"),
    height: hp("1.1146839233352686%"),
    minHeight: hp("1.1146839233352686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.12171223958333%"),
    top: hp("8.463462360616568%")
  },
  ImageBackground_0_2206: {
    width: wp("2.056508509318034%"),
    minWidth: wp("2.056508509318034%"),
    height: hp("1.6334966919768874%"),
    minHeight: hp("1.6334966919768874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.12171223958333%"),
    top: hp("6.315381737842017%")
  },
  ImageBackground_0_2207: {
    width: wp("2.630236053466797%"),
    minWidth: wp("2.630236053466797%"),
    height: hp("1.4026347307608402%"),
    minHeight: hp("1.4026347307608402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.694433593750006%"),
    top: hp("7.247599954905361%")
  },
  ImageBackground_0_2208: {
    width: wp("2.630236053466797%"),
    minWidth: wp("2.630236053466797%"),
    height: hp("1.4026347307608402%"),
    minHeight: hp("1.4026347307608402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.17467447916667%"),
    top: hp("7.247599954905361%")
  },
  ImageBackground_0_2211: {
    width: wp("2.438202158610026%"),
    minWidth: wp("2.438202158610026%"),
    height: hp("0.6950133207855911%"),
    minHeight: hp("0.6950133207855911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.94303385416667%"),
    top: hp("0.4044334034154815%")
  },
  ImageBackground_0_2212: {
    width: wp("0.5237288157145182%"),
    minWidth: wp("0.5237288157145182%"),
    height: hp("3.6023224311611286%"),
    minHeight: hp("3.6023224311611286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.94303385416667%"),
    top: hp("0.1694983806924668%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
