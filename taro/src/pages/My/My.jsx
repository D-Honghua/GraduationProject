import React, { Component } from "react";
import { View, Image, Text } from "@tarojs/components";
import "./My.less";
import Taro from "@tarojs/taro";
import TabBar from "../../components/TabBar";
import avator from "../../images/home/avator.png";

import icon1 from "../../images/home/eng.png";
import icon2 from "../../images/home/stu_plan.png";
import icon3 from "../../images/home/target.png";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }
  tabBarClick(e) {
    if (e === 0) {
      Taro.switchTab({
        url: "/pages/Home/index",
      });
    }
  }
  componentDidMount() {
    const userInfo = Taro.getStorageSync("userInfo");
    this.setState({
      userName: userInfo.userName,
    });
  }
  loginOut() {
    Taro.showModal({
      title: "提示",
      content: "确定退出吗？",
      success: function (res) {
        if (res.confirm) {
          Taro.clearStorage();
          Taro.reLaunch({
            url: "/pages/Login/Login",
          });
        } else if (res.cancel) {
          console.log("用户点击取消");
        }
      },
    });
  }
  turnDown(url) {
    Taro.navigateTo({
      url,
    });
  }
  render() {
    return (
      <View className="index-wrap">
        <View className="my-page-wrap">
          <View className="top-box">
            <View className="avator-box">
              <Image className="avator" src={avator}></Image>
              <View className="nick-name">
                {this.state.userName ? this.state.userName : "疫情小助手"}
              </View>
            </View>
          </View>
          <View className="info-box">
            <View>
              <Text className="title">41</Text>
              <Text className="sub-title">完成打卡天数</Text>
            </View>
            <span></span>

            <View>
              <Text className="title">正常</Text>
              <Text className="sub-title">健康状态</Text>
            </View>
            <span></span>
            <View>
              <Text className="title">171</Text>
              <Text className="sub-title">进出校次数</Text>
            </View>
          </View>

          <View className="icon-box">
            <View
              className="icon-item"
              onClick={() => this.turnDown("/pages/Clock/Clock")}
            >
              <Image className="img" src={icon1}></Image>
              <Text>每日打卡</Text>
            </View>

            <View
              className="icon-item"
              onClick={() => this.turnDown("/pages/Crecord/Crecord")}
            >
              <Image className="img" src={icon2}></Image>
              <Text>打卡统计</Text>
            </View>

            <View
              className="icon-item"
              onClick={() => this.turnDown("/pages/Record/Record")}
            >
              <Image className="img" src={icon3}></Image>
              <Text>进出记录</Text>
            </View>
          </View>

          <View onClick={this.loginOut.bind(this)} className="btn-box">
            退出登录
          </View>
        </View>

        <TabBar url="/pages/Home/index" act={1} current={0}></TabBar>
      </View>
    );
  }
}
