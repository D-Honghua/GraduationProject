import React, { Component } from "react";
import { View } from "@tarojs/components";
import { QRCode } from "taro-code";
import Taro from "@tarojs/taro";
import "./Layer.less";
export default class Layer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        className={`layer-wrap ${
          this.props.showFlag ? "showLayer" : "hideLayer"
        }`}
      >
        <View className="img">
          <View className="code">
            <QRCode
              text={JSON.stringify(Taro.getStorageSync("userInfo"))}
              size={200}
              scale={4}
              errorCorrectLevel="M"
              typeNumber={2}
            />
          </View>

          <View className="state">未见异常</View>
          <View className="desc">请妥善保管您的健康码</View>
        </View>
      </View>
    );
  }
}
