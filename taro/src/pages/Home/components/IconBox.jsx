import "./IconBox.less";
import { View, Image } from "@tarojs/components";
import React from "react";
import HeaderBar from "./HeaderBar";
import Taro from "@tarojs/taro";
import icon1 from "../../../images/home/xx.png";
import icon2 from "../../../images/home/xxb.png";
import icon3 from "../../../images/home/zlb.png";
import icon4 from "../../../images/home/yx.png";
import icon5 from "../../../images/home/ycb.png";
import icon6 from "../../../images/home/zy.png";

function IconBox(props) {
  const iconArray = [
    {
      img: icon1,
      name: "健康码",
      url: () => {
        props.plusClick();
      },
    },
    {
      img: icon2,
      name: "每日打卡",
      url: "/pages/Clock/Clock",
    },
    {
      img: icon3,
      name: "打卡统计",
      url: "/pages/Crecord/Crecord",
    },
    {
      img: icon4,
      name: "进出记录",
      url: "/pages/Record/Record",
    },
    {
      img: icon5,
      name: "疫情动态",
      // url: "/pages/Dt/Dt",
    },
  ];
  const iconClick = (row) => {
    if (typeof row.url !== "string") {
      row.url();
    } else {
      row.url ? Taro.navigateTo({ url: row.url }) : "";
    }
  };
  return (
    <View className="icon-box-wrap">
      <View className="icons">
        <HeaderBar title="疫情信息"></HeaderBar>
        <View className="icon-box">
          {iconArray.slice(0, 3).map((item) => {
            return (
              <View
                className="icon-item"
                key={item.name}
                onClick={() => {
                  iconClick(item);
                }}
              >
                <Image className="img" src={item.img}></Image>
                <View className="ctitle">{item.name}</View>
              </View>
            );
          })}
        </View>
      </View>

      <View className="icons">
        <HeaderBar title="疫情动态"></HeaderBar>
        <View className="icon-box">
          {iconArray.slice(3, 6).map((item) => {
            return (
              <View
                className="icon-item"
                key={item.name}
                onClick={() => {
                  iconClick(item);
                }}
              >
                <Image className="img" src={item.img}></Image>
                <View className="ctitle">{item.name}</View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default IconBox;
