import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <View>
        <Pano source={asset('111.jpg')}/>
        <Text
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            fontSize: 0.8,
              color: '#bada55',
            fontWeight: '500',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
                {translate: [0, 0.2, -3.1]},
                //{rotateY: this.state.rotation},
                {rotateX: 20},
                {rotateZ: -10}
            ],
          }}
            >
          VR Task
        </Text>



        {/*<Text style={front}>*/}
            {/*Back*/}
        {/*</Text>*/}

          {/*<Text style={back}>*/}
              {/*Front*/}
          {/*</Text>*/}

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
