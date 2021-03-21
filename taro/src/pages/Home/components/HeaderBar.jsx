import "./HeaderBar.less";
import { View } from "@tarojs/components";
import React from "react";

function HeaderBar(props) {
  return (
    <View className="header-bar">
      <View className="span"></View> <View>{props.title}</View>{" "}
    </View>
  );
}

export default HeaderBar;
