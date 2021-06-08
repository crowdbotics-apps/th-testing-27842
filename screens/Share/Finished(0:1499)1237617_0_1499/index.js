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
      <View style={styles.View_0_1500} />
      <View style={styles.View_0_1501}>
        <Text style={styles.Text_0_1501}>Thank you!</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1502}
      />
      <View style={styles.View_0_1530}>
        <Text style={styles.Text_0_1530}>
          You’ve finished answering all the questions. Share this so others can
          let their voices be heard as well!
        </Text>
      </View>
      <View style={styles.View_0_1531}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_1531_0_2326}
        />
        <View style={styles.View_I0_1531_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_1531_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_1531_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_1532}>
        <View style={styles.View_0_1533}>
          <Text style={styles.Text_0_1533}>This is your country</Text>
        </View>
        <View style={styles.View_0_1534}>
          <Text style={styles.Text_0_1534}>
            Please answer the questions below.
          </Text>
        </View>
        <View style={styles.View_0_1535}>
          <View style={styles.View_0_1536} />
        </View>
        <View style={styles.View_0_1537}>
          <Text style={styles.Text_0_1537}>Click to change</Text>
        </View>
        <View style={styles.View_0_1538}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe7/15dd/345fd612d5cce397794f3a2924a1d1e4"
            }}
            style={styles.ImageBackground_0_1539}
          />
          <View style={styles.View_0_1540}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/cd08/d810d6bddf5324b250fa6fec1dc39df9"
              }}
              style={styles.ImageBackground_0_1541}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/321f/dced/159d019553272e9994773ddcd89b0a5b"
              }}
              style={styles.ImageBackground_0_1542}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6f3/6caa/39fd9679943faf372df3ec52a091ebd6"
              }}
              style={styles.ImageBackground_0_1543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d8/50c5/6e7848d00d4e05c4c27c400a4252b261"
              }}
              style={styles.ImageBackground_0_1550}
            />
          </View>
          <View style={styles.View_0_1557}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d992/a639/4a0f75cd4a8a45055f5b3f9bb32a29cd"
              }}
              style={styles.ImageBackground_0_1559}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ad/1da2/7cc28321d31cd386329d223cc21a489e"
              }}
              style={styles.ImageBackground_0_1558}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/955a/2cee/4d3436265dc0d41360276674b0c17cef"
              }}
              style={styles.ImageBackground_0_1560}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b43e/52f7/e2c673360706dfaad41e401ddef8f21e"
              }}
              style={styles.ImageBackground_0_1567}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb0b/c937/99d92c677ca68a77d5afc94a79d200d3"
            }}
            style={styles.ImageBackground_0_1574}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75b9/1fb4/5008fd3de4b491cc8d416aed7071ff29"
            }}
            style={styles.ImageBackground_0_1575}
          />
        </View>
        <View style={styles.View_0_1576}>
          <Text style={styles.Text_0_1576}>I am voting for Donald Trump</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6420/1f9a/f46007e07f51b8e98361f307cddfc3b0"
        }}
        style={styles.ImageBackground_0_1577}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06ee/3db7/dbeea0ea7b4e9136eb39bdabbd4ce09e"
        }}
        style={styles.ImageBackground_0_1580}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_1500: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(193, 50, 36, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1501: {
    width: wp("41.06666666666667%"),
    minWidth: wp("41.06666666666667%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333332%"),
    top: hp("56.07196401799101%")
  },
  Text_0_1501: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  ImageBackground_0_1502: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("5.997001499250374%"),
    minHeight: hp("5.997001499250374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("1.3493253373313343%")
  },
  View_0_1530: {
    width: wp("71.2%"),
    minWidth: wp("71.2%"),
    minHeight: hp("7.646176911544228%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.533333333333335%"),
    top: hp("62.968515742128936%")
  },
  Text_0_1530: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1531: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("1.4992503748125936%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1531_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5997001499250378%")
  },
  View_I0_1531_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1531_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1531_0_2334: {
    width: wp("5.5%"),
    height: hp("3.0922038980509745%"),
    top: hp("0.10307346326836586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333268%")
  },
  View_0_1532: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("31.03448275862069%"),
    minHeight: hp("31.03448275862069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("11.394302848575713%")
  },
  View_0_1533: {
    width: wp("73.6%"),
    minWidth: wp("73.6%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333332%"),
    top: hp("0%")
  },
  Text_0_1533: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_1534: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.266666666666666%"),
    top: hp("6.896551724137932%")
  },
  Text_0_1534: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1535: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("17.24137931034483%"),
    minHeight: hp("17.24137931034483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.793103448275861%")
  },
  View_0_1536: {
    width: wp("86.13333333333333%"),
    minWidth: wp("86.13333333333333%"),
    height: hp("17.24137931034483%"),
    minHeight: hp("17.24137931034483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_1537: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("26.836581709145428%")
  },
  Text_0_1537: {
    color: "rgba(76, 157, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1538: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("11.994002998500749%"),
    minHeight: hp("11.994002998500749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("16.34182908545727%")
  },
  ImageBackground_0_1539: {
    width: wp("21.350724283854166%"),
    minWidth: wp("21.350724283854166%"),
    height: hp("11.994002998500749%"),
    minHeight: hp("11.994002998500749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8405924479166682%"),
    top: hp("0%")
  },
  View_0_1540: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("10.766269849694293%"),
    minHeight: hp("10.766269849694293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6610830327024004%")
  },
  ImageBackground_0_1541: {
    width: wp("2.01739133199056%"),
    minWidth: wp("2.01739133199056%"),
    height: hp("1.038850658479659%"),
    minHeight: hp("1.038850658479659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.591308593750002%"),
    top: hp("0.009443520427282692%")
  },
  ImageBackground_0_1542: {
    width: wp("2.01739133199056%"),
    minWidth: wp("2.01739133199056%"),
    height: hp("1.038850658479659%"),
    minHeight: hp("1.038850658479659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.591308593750002%"),
    top: hp("9.72741168478261%")
  },
  ImageBackground_0_1543: {
    width: wp("10.746838378906249%"),
    minWidth: wp("10.746838378906249%"),
    height: hp("9.932267219051608%"),
    minHeight: hp("9.932267219051608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09033203125%"),
    top: hp("0.700321226105693%")
  },
  ImageBackground_0_1550: {
    width: wp("10.746838378906249%"),
    minWidth: wp("10.746838378906249%"),
    height: hp("9.932267219051608%"),
    minHeight: hp("9.932267219051608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.362825520833335%"),
    top: hp("0.700321226105693%")
  },
  View_0_1557: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.744159155163629%"),
    minHeight: hp("7.744159155163629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5391276041666675%"),
    top: hp("2.1721378080491007%")
  },
  ImageBackground_0_1559: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.744159155163629%"),
    minHeight: hp("7.744159155163629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1558: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.744159155163629%"),
    minHeight: hp("7.744159155163629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1560: {
    width: wp("13.785507202148436%"),
    minWidth: wp("13.785507202148436%"),
    height: hp("7.744159155163629%"),
    minHeight: hp("7.744159155163629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1567: {
    width: wp("20.67826131184896%"),
    minWidth: wp("20.67826131184896%"),
    height: hp("10.294065232398449%"),
    minHeight: hp("10.294065232398449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.547819010416667%"),
    top: hp("-0.8499717426442999%")
  },
  ImageBackground_0_1574: {
    width: wp("9.91884053548177%"),
    minWidth: wp("9.91884053548177%"),
    height: hp("5.3831349248471465%"),
    minHeight: hp("5.3831349248471465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.55651041666667%"),
    top: hp("3.2109982606353107%")
  },
  ImageBackground_0_1575: {
    width: wp("7.565217590332031%"),
    minWidth: wp("7.565217590332031%"),
    height: hp("4.060961710459467%"),
    minHeight: hp("4.060961710459467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7333333333333325%"),
    top: hp("3.9192988954741352%")
  },
  View_0_1576: {
    width: wp("40.53333333333333%"),
    minWidth: wp("40.53333333333333%"),
    minHeight: hp("6.5967016491754125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("17.09145427286357%")
  },
  Text_0_1576: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1577: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("7.34632683658171%"),
    minHeight: hp("7.34632683658171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("76.7616191904048%")
  },
  ImageBackground_0_1580: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.333333333333336%"),
    top: hp("76.7616191904048%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
