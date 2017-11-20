import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

class  NestedMessage extends React.Component {

    render() {
        return (
            <Text
                style={{
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    fontSize: 0.8,
                    color: '#bada55',
                    fontWeight: '400',
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
                {this.props.message}
            </Text>

        );
    }
};

export default class WelcomeToVR extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <View>
        <Pano source={asset('222.jpg')}/>
        <NestedMessage message={"Hello NM VR"}/>

        {/*<Text*/}
          {/*style={{*/}
            {/*backgroundColor: 'rgba(0,0,0,0.4)',*/}
            {/*fontSize: 0.8,*/}
              {/*color: '#bada55',*/}
            {/*fontWeight: '400',*/}
            {/*layoutOrigin: [0.5, 0.5],*/}
            {/*paddingLeft: 0.2,*/}
            {/*paddingRight: 0.2,*/}
            {/*textAlign: 'center',*/}
            {/*textAlignVertical: 'center',*/}
            {/*transform: [*/}
                {/*{translate: [0, 0.2, -3.1]},*/}
                {/*//{rotateY: this.state.rotation},*/}
                {/*{rotateX: 20},*/}
                {/*{rotateZ: -10}*/}
            {/*],*/}
          {/*}}*/}
            {/*>*/}
            {/*{this.props.message}*/}
        {/*</Text>*/}


      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
