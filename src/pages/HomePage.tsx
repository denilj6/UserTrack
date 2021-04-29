import { Component } from "react";
import React from "react";
import { View, Text, Image, Dimensions, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
    navigation: any;
}
interface State {
}

export default class LoadingPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {

    }

    render() {
        const data = 'PrettyLittleThing was co-founded in 2012 by Umar Kamani and his brother Adam Kamani.[6][7] It started with an accessory only brand with limited products on the site. Since then the company has expanded and now operates internationally, including the US, Irish, Australian, Middle East, French and Canadian markets.[8][9] The company sells Womenswear, footwear, accessories and beauty products. Celebrities including Miley Cyrus, Michelle Keegan, Rita Ora, Jessie J and Nicki Minaj were seen wearing their products.[10] In February 2017, the company reported sales of £47.7m. In September 2015, it launched its mobile application in the UK market.[11]In 2016, the brand partnered with ASOS and Lipsy on their website, as well as through the retailer Next. PrettyLittleThing was owned by the Kamani brothers until January 2017, before being acquired by their father Mahmud Kamanis company Boohoo.[12] It acquired 66% stake in the PrettyLittleThing.[13] In June 2017, PrettyLittleThing launched a range, PLT Girl for young girls aged 5–12.[14] In November 2017, the firm drew press attention when it was named one of the top three fastest growing fashion companies by Hitwise.[15].In February 2019, the brand opened their LA office on Melrose Avenue.[16] .In 2020 Boohoo acquired the remainder of PrettyLittleThing.[17] In March 2020, the brand opened their Paris showroom with a collaboration with the French YouTuber'
       const details='In October and November 2015, PrettyLittleThing launched collections with reality actress Lucy Mecklenburgh.[21] They collaborated with American reality television personality Kylie Jenner,[22] who hosted a launch party in Los Angeles.[23].In October 2016, PrettyLittleThing launched their party wear collection with Sofia Richie.[24] They signed LA influencer Chantel Jeffries as their brand ambassador.[25] In August 2017, the online retailer launched a collection with American personality Olivia Culpo.[26][27] In October 2017, PrettyLittleThing launched a collection with American reality television personality and businesswoman Kourtney Kardashian.[28][29] In May 2018, the brand announced a collaboration with streetwear label Karl Kani with a collection fronted by Teyana Taylor.[30] In June 2018, the brand launched a collaboration with British television and radio presenter Maya Jama [31][32] In September 2018, PrettyLittleThing teamed up with American model Ashley Graham to launch a collection for sizes 6–28.[33][34][35] In November 2018, the brand launched a collection with Hailey Baldwin as the face of their Christmas campaign.[36][37][38]. In February 2019, the brand launched a second collection with American model Ashley Graham.[39].In June 2019, PrettyLittleThing launched a summer collaboration with American singer, songwriter, record producer Ashanti.[40] 2019 also saw the brand launch second collections with Maya Jama[41] and Karl Kani.[42] In September 2019 PrettyLittleThing launched a collaboration with UK Love Island star Molly-Mae Hague.[43] PrettyLittleThing hosted their first catwalk in New York Fashion Week, releasing their collaboration with Saweetie.[44][45] In November 2019, they launched a collection with British girl group Little Mix.[46][47][48] .PrettyLittleThing launched a collection in June 2020 with proceeds donated to The Solutions Not Punishment Collaborative (SNaP Co), a Black trans-led organisation aimed at transforming material realities for Black transgender people.[49][50] June 2020 also saw the launch of a second collaboration with Saweetie, with all proceeds going to Black Lives Matter.[51][52][53] In September 2020 PrettyLittleThing launched their second collaboration with UK Love Island star Molly-Mae Hague.[54][55] October 2020 saw the brand team up and collaborate with entrepreneur Jordyn Woods.[56][57]. In November 2020, PrettyLittleThing released their collaboration with Lil Kim.[58] November also saw the brand launch their homeware collection with PLT Home.[59] In December 2020, Teyana Taylor was announced as Creative Director.[60].January 2021, saw the launch of PrettyLittleThing x Teyana Taylor.[61]'
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: 50 }}>
                    <Image style={{ width: 50, height: 50 }}
                        source={require('../assets/splash.png')} />
                    <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 30 }}>Home Page</Text>
                </View>
                <Text style={{ margin: 20,fontWeight:'bold' }}>{data}</Text>
                <Text style={{ margin: 20 ,fontWeight:'bold'}}>{details}</Text>
            </ScrollView>
        )
    }
}