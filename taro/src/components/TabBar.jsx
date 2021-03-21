import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";

import homeIcon from "../images/index/home.png";
import homeIconAct from "../images/index/home_act.png";
import myIcon from "../images/index/my.png";
import myIconAct from "../images/index/my_act.png";

export default class TabBar extends Component {
  tabBarClick(e) {
    if (e === this.props.current) {
      Taro.switchTab({
        url: this.props.url,
      });
    }
  }
  render() {
    return (
      <AtTabBar
        color="#2d2d2d"
        selectedColor="#231815"
        fixed={true}
        tabList={[
          {
            title: "主页",
            image: homeIcon,
            selectedImage: homeIconAct,
          },
          {
            title: "我的",
            image: myIcon,
            selectedImage: myIconAct,
          },
        ]}
        onClick={this.tabBarClick.bind(this)}
        current={this.props.act}
      />
    );
  }
}
