import React, { Component } from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.less";
import Taro from "@tarojs/taro";
import Layer from "./components/Layer";
import TabBar from "../../components/TabBar";
import IconBox from "./components/IconBox";

// import banner1 from "../../images/home/banner01.png";
// import banner2 from "../../images/home/banner02.png";

import plus from "../../images/index/plus.png";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plusState: false,
    };
  }
  componentDidMount() {
    // Taro.request({
    //   url: "http://192.168.123.15:7001/api/inrecord",
    //   method: "POST",
    //   data: { place: "北大门", user: "2017211043", userName: "黄国庆" },
    //   success(res) {
    //     console.log(res);
    //   },
    // });

    const userInfo = Taro.getStorageSync("userInfo");
    if (!userInfo) {
      Taro.reLaunch({ url: "/pages/Login/Login" });
    }
  }
  plusClick() {
    this.setState({
      plusState: !this.state.plusState,
    });
  }

  render() {
    return (
      <View className="index-wrap">
        <Layer showFlag={this.state.plusState}></Layer>
        <View className="swiper-box">
          <Swiper
            className="swiper"
            indicatorColor="#999"
            indicatorActiveColor="#333"
            circular
            indicatorDots
            autoplay
          >
            <SwiperItem>
              <Image
                className="img"
                src="https://i.loli.net/2020/02/12/LwIEueDSh52YHBc.png"
                alt=""
              />
            </SwiperItem>
            <SwiperItem>
              <Image
                className="img"
                src="https://i.loli.net/2020/02/12/LwIEueDSh52YHBc.png"
                alt=""
              />
            </SwiperItem>
          </Swiper>
        </View>

        <IconBox plusClick={this.plusClick.bind(this)}></IconBox>

        <Image
          className={`plus-btn ${
            this.state.plusState ? "rotation-beigin" : "rotation-end"
          }`}
          src={plus}
          onClick={() => this.plusClick()}
        ></Image>

        <TabBar url="/pages/My/My" act={0} current={1}></TabBar>
      </View>
    );
  }
}
