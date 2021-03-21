import React, { Component } from "react";
import { View } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtCard, AtDivider, AtNavBar } from "taro-ui";
import "./Record.less";
import moment from "moment";
import request from "../../util/request";
import Taro from "@tarojs/taro";
import img1 from "../../images/home/zy.png";
import img2 from "../../images/home/yx.png";
export default class Record extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [],

      current: 0,
      tabList: [{ title: "出校" }, { title: "入校" }],
    };
  }
  async componentWillMount() {
    const dataList = await request.get("/getrecords");
    this.setState({
      dataList,
    });
  }
  handleClick(value) {
    this.setState({
      current: value,
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
            title="进出记录"
            leftIconType="chevron-left"
          />
        ) : (
          ""
        )}

        <View className="top-box">
          <AtTabs
            current={this.state.current}
            tabList={this.state.tabList}
            onClick={this.handleClick.bind(this)}
            style="color:#ff9900 !important;"
          >
            <AtTabsPane current={this.state.current} index={0}>
              <View style="background-color: #FAFBFC; padding:5vw 0 15vw 0;">
                {this.state.dataList
                  .filter((it) => it.type === 0)
                  .map((item, i) => {
                    return (
                      <View style="margin-bottom:10px;" key={i}>
                        <AtCard
                          note="无异常"
                          extra="出"
                          title={moment(item.time).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                          thumb={img1}
                        >
                          {item.place}
                        </AtCard>
                      </View>
                    );
                  })}
              </View>
              <AtDivider
                content="没有更多了"
                fontColor="#ff9900"
                lineColor="#ff9900"
              />
            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={1}>
              <View style="background-color: #FAFBFC; padding:5vw 0 15vw 0; ">
                {this.state.dataList
                  .filter((it) => it.type === 1)
                  .map((item, i) => {
                    return (
                      <View style="margin-bottom:10px;" key={i}>
                        <AtCard
                          note="无异常"
                          extra="入"
                          title={moment(item.time).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                          thumb={img2}
                        >
                          {item.place}
                        </AtCard>
                      </View>
                    );
                  })}
              </View>
              <AtDivider
                content="没有更多了"
                fontColor="#ff9900"
                lineColor="#ff9900"
              />
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    );
  }
}
