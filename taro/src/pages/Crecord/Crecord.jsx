import React, { Component } from "react";
import { View, ScrollView } from "@tarojs/components";
import "./Crecord.less";
import { AtCalendar, AtAccordion, AtList, AtListItem, AtNavBar } from "taro-ui";
import requser from "../../util/request";
import icon1 from "../../images/home/xx.png";
import icon2 from "../../images/home/zy.png";
import Taro from "@tarojs/taro";
export default class Crecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateList: [{ open: false }, { open: false }, { open: false }],
      open: true,
    };
  }
  async componentWillMount() {
    const data = await requser.get("/getclocklist");
    this.setState({
      dateList: data.map((item) => {
        item.open = true;
        return item;
      }),
    });
  }
  handleClick(i) {
    const temp = this.state.dateList;
    temp[i].open = !temp[i].open;
    this.setState({
      dateList: temp,
    });
  }
  render() {
    return (
      <View className="page-wrap">
        {process.env.TARO_ENV !== "weapp" ? (
          <AtNavBar
            onClickLeftIcon={() => {
              Taro.navigateBack();
            }}
            color="#2b2b2b"
            title="打卡记录"
            leftIconType="chevron-left"
          />
        ) : (
          ""
        )}

        <View className="top-box">
          <View>
            <AtCalendar />
          </View>
          <View className="ctitle">打卡记录</View>
        </View>
        <ScrollView className="scroll-box" scrollY scrollWithAnimation>
          {this.state.dateList.map((item, i) => (
            <AtAccordion
              key={i}
              open={item.open}
              onClick={this.handleClick.bind(this, i)}
              title={item.time}
            >
              <AtList hasBorder={false}>
                <AtListItem
                  title={`${item.name}---${item.temp}℃`}
                  note={item.phone}
                  extraText={item.place}
                  arrow="right"
                  thumb={icon2}
                />
              </AtList>
            </AtAccordion>
          ))}
        </ScrollView>
      </View>
    );
  }
}
