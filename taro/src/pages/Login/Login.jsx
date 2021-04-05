import React, { Component } from "react";
import { View, Image, Input, Button } from "@tarojs/components";
import "./Login.less";
import Taro from "@tarojs/taro";
import request from "../../util/request";
import logo from "../../images/login/logo.jpg";
import zh from "../../images/login/user.png";
import pas from "../../images/login/pas.png";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }
  userInput(e) {
    this.setState({
      user: e.detail.value,
    });
  }
  userPassword(e) {
    this.setState({
      password: e.detail.value,
    });
  }
  async login() {
    const { user, password } = this.state;
    if (!user || !password)
      Taro.showToast({
        title: "请输入账号密码！",
        icon: "none",
      });
    const data = await request.get("/login", {
      user,
      password,
    });
    if (data) {
      Taro.showToast({
        title: "登录成功!",
        icon: "success",
        complete: () => {
          Taro.setStorageSync("userInfo", data);
          Taro.reLaunch({
            url: "/pages/Home/index",
          });
        },
      });
    } else {
      Taro.showToast({
        title: "登录失败！",
        icon: "none",
      });
    }
  }
  render() {
    return (
      <View className="login-wrap">
        <View className="logo-box">
          <Image className="logo" src={logo}></Image>
          <View className="title">校园疫情通</View>
        </View>

        <View className="form-box">
          <View className="input-item">
            <Image className="icon" src={zh}></Image>
            <Input
              className="inp"
              value={this.state.user}
              onInput={this.userInput.bind(this)}
              placeholder="账号"
            ></Input>
          </View>
          <View className="input-item">
            <Image className="icon" src={pas}></Image>
            <Input
              className="inp"
              value={this.state.password}
              onInput={this.userPassword.bind(this)}
              placeholder="密码"
              type="password"
            ></Input>
          </View>
          <View className="desc-box">
            {/* <View>注册</View> */}
            <View>忘记密码?</View>
          </View>

          <Button
            className="btn"
            onClick={() => {
              this.login();
            }}
          >
            登 录
          </Button>
          <View className="desc2">@CatiiHuang-毕业设计</View>
        </View>
      </View>
    );
  }
}
