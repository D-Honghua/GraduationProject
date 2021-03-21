import React, { Component } from "react";
import { View } from "@tarojs/components";
import "./Clock.less";
import {
  AtForm,
  AtInput,
  AtButton,
  AtRadio,
  AtCheckbox,
  AtNavBar,
} from "taro-ui";
import Taro from "@tarojs/taro";

import request from "../../util/request";
export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        sex: "boy",
        phone: "",
        place: "",
        temp: "",
        healthy: ["无异常状况"],
      },
    };

    this.checkboxOption = [
      { value: "无异常状况", label: "无异常状况" },
      { value: "感冒，乏力，头痛", label: "感冒，乏力，头痛" },
      { value: "发烧发热", label: "发烧发热" },
      { value: "其它", label: "其它" },
    ];
  }
  componentWillMount() {}
  handleChange(key, e) {
    const temp = this.state.form;
    temp[key] = e;
    this.setState({
      form: temp,
    });
  }
  async onSubmit() {
    const check = Object.keys(this.state.form).every((key) => {
      if (
        this.state.form[key] instanceof Array &&
        !this.state.form[key].length
      ) {
        return false;
      }
      return this.state.form[key] ? true : false;
    });

    if (!check) {
      Taro.showToast({
        title: "请将信息补充完整！",
        icon: "none",
      });
      return;
    }
    console.log(this.state.form);
    const data = await request.post("/clock", this.state.form);

    if (data) {
      Taro.showToast({
        title: "打卡成功！",
        complete() {
          setTimeout(() => {
            Taro.navigateBack();
          }, 2000);
        },
      });
    }
  }

  checkboxChange(e) {
    console.log(e);
    const temp = this.state.form;
    temp.healthy = e;
    this.setState({
      form: temp,
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
            title="每日打卡"
            leftIconType="chevron-left"
          />
        ) : (
          ""
        )}
        <View className="page-title">疫情上报</View>
        <View className="form-box">
          <AtForm onSubmit={this.onSubmit.bind(this)}>
            <AtInput
              name="name"
              title="姓名"
              required={true}
              type="text"
              value={this.state.form.name}
              onChange={this.handleChange.bind(this, "name")}
            />

            <AtRadio
              options={[
                { label: "男", value: "boy" },
                { label: "女", value: "girl" },
              ]}
              required={true}
              value={this.state.form.sex}
              onClick={this.handleChange.bind(this, "sex")}
            />

            <AtInput
              name="phone"
              title="电话"
              required={true}
              type="text"
              value={this.state.form.phonee}
              onChange={this.handleChange.bind(this, "phone")}
            />

            <AtInput
              name="place"
              title="现居住地"
              type="text"
              required={true}
              value={this.state.form.place}
              onChange={this.handleChange.bind(this, "place")}
            />

            <AtInput
              name="temp"
              title="体温"
              type="text"
              required={true}
              value={this.state.form.temp}
              onChange={this.handleChange.bind(this, "temp")}
            />

            <View className="ctitle">健康状况</View>
            <AtCheckbox
              options={this.checkboxOption}
              selectedList={this.state.form.healthy}
              required={true}
              onChange={this.checkboxChange.bind(this)}
            />

            <AtButton className="btn" formType="submit">
              提交
            </AtButton>
          </AtForm>
        </View>
      </View>
    );
  }
}
