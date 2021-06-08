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
      <View style={styles.View_0_880} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_881}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_882}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
        }}
        style={styles.ImageBackground_0_883}
      />
      <View style={styles.View_0_884}>
        <Text style={styles.Text_0_884}>Select Candidates</Text>
      </View>
      <View style={styles.View_0_885}>
        <View style={styles.View_0_886}>
          <Text style={styles.Text_0_886}>
            Select the candidates you’d like to influence. Don’t worry, you can
            change this at any time.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
          }}
          style={styles.ImageBackground_0_887}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
          }}
          style={styles.ImageBackground_0_888}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec7/9c50/c61d9c90666c64bc9bd705b0694f5440"
          }}
          style={styles.ImageBackground_0_889}
        />
        <View style={styles.View_0_892}>
          <Text style={styles.Text_0_892}>
            Hillary Clinton Democratic Party
          </Text>
        </View>
        <View style={styles.View_0_893}>
          <Text style={styles.Text_0_893}>Jeb Bush Republican Party</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
          }}
          style={styles.ImageBackground_0_894}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
          }}
          style={styles.ImageBackground_0_895}
        />
        <View style={styles.View_0_896}>
          <Text style={styles.Text_0_896}>Ben Carson Republican Party</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
          }}
          style={styles.ImageBackground_0_897}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
          }}
          style={styles.ImageBackground_0_898}
        />
        <View style={styles.View_0_899}>
          <Text style={styles.Text_0_899}>Joe Biden Democratic Party</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/b64a/bd88197b6417da7fdd6545781bdd2acd"
          }}
          style={styles.ImageBackground_0_900}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a965/f4fb/1dd95685ece3a751b933956a41e70cf8"
          }}
          style={styles.ImageBackground_0_901}
        />
        <View style={styles.View_0_902}>
          <Text style={styles.Text_0_902}>Rand Paul Republican Party</Text>
        </View>
        <View style={styles.View_0_903}>
          <Text style={styles.Text_0_903}>Donald Trump Republican Party</Text>
        </View>
      </View>
      <View style={styles.View_0_904}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c67/7c11/846a94cbca48fe29d1fc0c0aa7cee7c9"
          }}
          style={styles.ImageBackground_0_905}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24c6/981c/630e5611e6a7c55c2c48a2d1de632cd8"
          }}
          style={styles.ImageBackground_0_906}
        />
        <View style={styles.View_0_907} />
        <View style={styles.View_0_908}>
          <Text style={styles.Text_0_908}>Enable Notifications</Text>
        </View>
        <View style={styles.View_0_909}>
          <Text style={styles.Text_0_909}>Change Password</Text>
        </View>
        <View style={styles.View_0_910}>
          <Text style={styles.Text_0_910}>Videos</Text>
        </View>
        <View style={styles.View_0_911}>
          <Text style={styles.Text_0_911}>Blogs</Text>
        </View>
        <View style={styles.View_0_912}>
          <Text style={styles.Text_0_912}>Topics</Text>
        </View>
        <View style={styles.View_0_913}>
          <Text style={styles.Text_0_913}>Settings</Text>
        </View>
        <View style={styles.View_0_914}>
          <Text style={styles.Text_0_914}>Logout</Text>
        </View>
        <View style={styles.View_0_915}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e48/b8cd/36854a2c11b08f587a30154ddb6a2001"
            }}
            style={styles.ImageBackground_0_918}
          />
          <View source={{ uri: "null" }} style={styles.View_0_919} />
          <View style={styles.View_0_920}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5207/62ba/4b03543d1ff826288e586580d61ba733"
              }}
              style={styles.ImageBackground_0_923}
            />
            <View source={{ uri: "null" }} style={styles.View_0_928} />
          </View>
        </View>
        <View style={styles.View_0_929}>
          <Text style={styles.Text_0_929}>
            Copyright 2015 © Town Hall Politics
          </Text>
        </View>
      </View>
      <View style={styles.View_0_930}>
        <Text style={styles.Text_0_930}>Candidates</Text>
      </View>
      <View style={styles.View_0_931}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0616/a33c/c7fd75ab42b9d938058d0cce58799c65"
          }}
          style={styles.ImageBackground_0_934}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2039/360c/18e223ac914fe66bd6a8d744f34a13d3"
          }}
          style={styles.ImageBackground_0_937}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8811/5367/e1147f42d22cfc6ded94a8b42432f7fc"
        }}
        style={styles.ImageBackground_0_938}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae3d/1438/4ecf346c7ac542dec13b4deb06f3a24f"
        }}
        style={styles.ImageBackground_0_941}
      />
      <View style={styles.View_0_943} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
        }}
        style={styles.ImageBackground_0_944}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97e5/7bb8/e3710f9f147464f63c4f11bd734654de"
        }}
        style={styles.ImageBackground_0_945}
      />
      <View style={styles.View_0_973}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b631/1f66/a71ad3bf97f5d2fe8aca800d6c4c7208"
          }}
          style={styles.ImageBackground_I0_973_0_2326}
        />
        <View style={styles.View_I0_973_0_2328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9463/cbf4/4232f21f7aad90819a251180fa4fb096"
            }}
            style={styles.ImageBackground_I0_973_0_2331}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7d/08f9/cc2e587635cc9f08956179d55736ed6e"
            }}
            style={styles.ImageBackground_I0_973_0_2334}
          />
        </View>
      </View>
      <View style={styles.View_0_974}>
        <View source={{ uri: "null" }} style={styles.View_0_975} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02eb/bc84/bbcfe13919eb61ab5642699bf87744a2"
          }}
          style={styles.ImageBackground_0_978}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c0/1ab4/62e2e5958233b8f9ab3acfd4968ff183"
        }}
        style={styles.ImageBackground_0_980}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f439/0aa1/2dfb12f95f957cbd71964f9acfb78baf"
        }}
        style={styles.ImageBackground_0_985}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8811/5367/e1147f42d22cfc6ded94a8b42432f7fc"
        }}
        style={styles.ImageBackground_0_986}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8811/5367/e1147f42d22cfc6ded94a8b42432f7fc"
        }}
        style={styles.ImageBackground_0_987}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8811/5367/e1147f42d22cfc6ded94a8b42432f7fc"
        }}
        style={styles.ImageBackground_0_988}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ea/883b/ba29bd7bbf08eb51b9bca8585689a6ac"
        }}
        style={styles.ImageBackground_0_989}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_0_880: {
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
  ImageBackground_0_881: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("39.130434782608695%")
  },
  ImageBackground_0_882: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("50.524737631184415%")
  },
  ImageBackground_0_883: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("62.06896551724138%")
  },
  View_0_884: {
    width: wp("64.8%"),
    minWidth: wp("64.8%"),
    minHeight: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("11.394302848575713%")
  },
  Text_0_884: {
    color: "rgba(24, 48, 85, 1)",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.9117646217346191,
    textTransform: "none"
  },
  View_0_885: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("78.26086956521739%"),
    minHeight: hp("78.26086956521739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("18.290854572713645%")
  },
  View_0_886: {
    width: wp("82.66666666666667%"),
    minWidth: wp("82.66666666666667%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0%")
  },
  Text_0_886: {
    color: "rgba(155, 155, 155, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_887: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("25.487256371814095%")
  },
  ImageBackground_0_888: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("37.03148425787106%")
  },
  ImageBackground_0_889: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("14.242878560719642%")
  },
  View_0_892: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("22.938530734632682%")
  },
  Text_0_892: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_893: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("34.48275862068965%")
  },
  Text_0_893: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_894: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.172413793103445%")
  },
  ImageBackground_0_895: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("48.425787106446776%")
  },
  View_0_896: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("45.87706146926537%")
  },
  Text_0_896: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_897: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.56671664167916%")
  },
  ImageBackground_0_898: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("59.820089955022496%")
  },
  View_0_899: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("4.94752623688156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("57.271364317841076%")
  },
  Text_0_899: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_0_900: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77.96101949025487%")
  },
  ImageBackground_0_901: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666675%"),
    top: hp("71.2143928035982%")
  },
  View_0_902: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("68.6656671664168%")
  },
  Text_0_902: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_903: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("11.544227886056966%")
  },
  Text_0_903: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_0_904: {
    width: wp("120%"),
    minWidth: wp("120%"),
    height: hp("94.00299850074963%"),
    minHeight: hp("94.00299850074963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4%"),
    top: hp("5.997001499250374%")
  },
  ImageBackground_0_905: {
    width: wp("117.33333333333333%"),
    minWidth: wp("117.33333333333333%"),
    height: hp("94.00299850074963%"),
    minHeight: hp("94.00299850074963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0%")
  },
  ImageBackground_0_906: {
    width: wp("74.66666666666667%"),
    minWidth: wp("74.66666666666667%"),
    height: hp("94.00299850074963%"),
    minHeight: hp("94.00299850074963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("0%")
  },
  View_0_907: {
    width: wp("77.33333333333333%"),
    minWidth: wp("77.33333333333333%"),
    height: hp("19.79010494752624%"),
    minHeight: hp("19.79010494752624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.57271364317841%"),
    backgroundColor: "rgba(0, 113, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_908: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("58.24602347263868%")
  },
  Text_0_908: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_909: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("67.67450015226761%")
  },
  Text_0_909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_910: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("16.47879673444528%")
  },
  Text_0_910: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_911: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("27.00846842203898%")
  },
  Text_0_911: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_912: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("37.37986963549475%")
  },
  Text_0_912: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_913: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("47.601345811469265%")
  },
  Text_0_913: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_914: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%"),
    top: hp("76.83658170914542%")
  },
  Text_0_914: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_915: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("22.488755622188904%"),
    minHeight: hp("22.488755622188904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666665%"),
    top: hp("17.091454272863572%")
  },
  ImageBackground_0_918: {
    width: wp("4.800666809082031%"),
    minWidth: wp("4.800666809082031%"),
    height: hp("2.69902556732498%"),
    minHeight: hp("2.69902556732498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("10.344827586206897%")
  },
  View_0_919: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_920: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("12.443778110944528%"),
    minHeight: hp("12.443778110944528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%"),
    top: hp("10.044977511244376%")
  },
  ImageBackground_0_923: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.4992503748125936%"),
    minHeight: hp("1.4992503748125936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    top: hp("10.944527736131931%")
  },
  View_0_928: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_929: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    minHeight: hp("1.7991004497751124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("88.00599700149925%")
  },
  Text_0_929: {
    color: "rgba(127, 127, 127, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_930: {
    width: wp("63.06666666666667%"),
    minWidth: wp("63.06666666666667%"),
    minHeight: hp("3.389971617279739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("12.130970647488756%")
  },
  Text_0_930: {
    color: "rgba(74, 74, 74, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_931: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("11.994002998500749%")
  },
  ImageBackground_0_934: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_937: {
    width: wp("5.5%"),
    minWidth: wp("5.5%"),
    height: hp("3.0922038980509745%"),
    minHeight: hp("3.0922038980509745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%"),
    top: hp("0.10307346326836608%")
  },
  ImageBackground_0_938: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("18.74062968515742%")
  },
  ImageBackground_0_941: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("2.848575712143928%"),
    minHeight: hp("2.848575712143928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("73.31334332833583%")
  },
  View_0_943: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("64.46776611694153%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 2
  },
  ImageBackground_0_944: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.199400299850075%"),
    minHeight: hp("1.199400299850075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("65.06746626686657%")
  },
  ImageBackground_0_945: {
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
  View_0_973: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("3.2983508245877062%"),
    minHeight: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("1.3493253373313343%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_973_0_2326: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666667%"),
    top: hp("0.5997001499250374%")
  },
  View_I0_973_0_2328: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_973_0_2331: {
    width: wp("5.866666666666666%"),
    height: hp("3.2983508245877062%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_973_0_2334: {
    width: wp("5.5%"),
    height: hp("3.0922038980509745%"),
    top: hp("0.10307346326836586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18333333333333357%")
  },
  View_0_974: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.8980509745127434%"),
    minHeight: hp("3.8980509745127434%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("22.788605697151425%")
  },
  View_0_975: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.598200899550225%"),
    minHeight: hp("3.598200899550225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2998500749625208%")
  },
  ImageBackground_0_978: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.998500749625187%"),
    minHeight: hp("2.998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_980: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("18.74062968515742%"),
    minHeight: hp("18.74062968515742%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("67.01634534295351%")
  },
  ImageBackground_0_985: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.2488755622188905%"),
    minHeight: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("54.12293853073463%")
  },
  ImageBackground_0_986: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("29.08545727136432%")
  },
  ImageBackground_0_987: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("39.430284857571216%")
  },
  ImageBackground_0_988: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("49.77511244377811%")
  },
  ImageBackground_0_989: {
    width: wp("65.86666666666666%"),
    minWidth: wp("65.86666666666666%"),
    height: hp("0.4497751124437781%"),
    minHeight: hp("0.4497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("70.31484257871064%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
