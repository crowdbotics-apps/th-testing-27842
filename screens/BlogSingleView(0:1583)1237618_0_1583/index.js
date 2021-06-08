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
      <View style={styles.View_0_1584} />
      <View style={styles.View_0_1585}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_1585_0_2326}
        />
        <View style={styles.View_I0_1585_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_1585_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_1585_0_2334}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c856/535b/d1026f374122fd039e97ae88d8a3955f"
        }}
        style={styles.ImageBackground_0_1586}
      />
      <View style={styles.View_0_1614}>
        <Text style={styles.Text_0_1614}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur
          volutpat ipsum, id sollicitudin purus sagittis quis. Vivamus a dui
          massa. Fusce eget euismod est. Quisque sed blandit libero. Proin eu
          orci accumsan, malesuada est ut, cursus dolor. Proin lobortis vehicula
          turpis. Vestibulum laoreet porta nulla varius tristique. Morbi aliquet
          lectus a libero luctus tempus. Mauris iaculis luctus libero ac
          suscipit. Curabitur quis quam urna. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Morbi mollis, magna eu maximus tempus,
          enim metus semper sapien, at tempus augue lorem at sem. Donec viverra
          massa metus, ut consequat mi condimentum eu. Sed maximus arcu ut ipsum
          cursus, eget aliquam erat interdum. Suspendisse mi quam, finibus ut
          suscipit et, facilisis non justo. Cras at arcu nibh. Etiam a massa mi.
          Maecenas gravida, arcu vehicula blandit consequat, magna eros volutpat
          libero, nec vulputate metus nisl pellentesque eros. Praesent id dolor
          non ex sollicitudin pharetra. Maecenas fermentum rutrum odio at
          suscipit. Phasellus augue elit, lobortis non justo eu, tincidunt
          egestas sem. Phasellus vehicula enim vel risus fringilla ultricies.
          Praesent magna metus, convallis ac elit ac, suscipit finibus nisi.
          Integer in rhoncus nunc, in efficitur metus. Ut in nisi odio.
        </Text>
      </View>
      <View style={styles.View_0_1615}>
        <Text style={styles.Text_0_1615}>Thursday</Text>
      </View>
      <View style={styles.View_0_1616}>
        <Text style={styles.Text_0_1616}>Change is out!</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fda/fa45/190347ea64f321053e9094477548d388"
        }}
        style={styles.ImageBackground_0_1619}
      />
      <View style={styles.View_0_1621}>
        <Text style={styles.Text_0_1621}>Back</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("121.99453551912569%") },
  View_0_1584: {
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
  View_0_1585: {
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
  ImageBackground_I0_1585_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5464480874316939%")
  },
  View_I0_1585_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1585_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1585_0_2334: {
    width: wp("5.5%"),
    height: hp("2.817622950819672%"),
    top: hp("0.09392076502732238%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%")
  },
  ImageBackground_0_1586: {
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
  View_0_1614: {
    width: wp("85.33333333333334%"),
    minWidth: wp("85.33333333333334%"),
    minHeight: hp("97.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("22.404371584699454%")
  },
  Text_0_1614: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1615: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.33333333333333%"),
    top: hp("15.710382513661203%")
  },
  Text_0_1615: {
    color: "rgba(212, 212, 212, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1616: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("14.344262295081966%")
  },
  Text_0_1616: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1619: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("8.469945355191257%")
  },
  View_0_1621: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("8.60655737704918%")
  },
  Text_0_1621: {
    color: "rgba(0, 113, 188, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
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
