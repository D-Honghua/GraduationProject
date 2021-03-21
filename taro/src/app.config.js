export default {
  pages: [
    "pages/Home/index",
    "pages/Login/Login",
    "pages/Dt/Dt",
    "pages/My/My",
    "pages/Record/Record",
    "pages/Clock/Clock",
    "pages/Crecord/Crecord",
  ],
  tabBar: {
    custom: true,
    color: "#2d2d2d",
    selectedColor: "#231815",
    list: [
      {
        pagePath: "pages/Home/index",
        text: "首页",
        iconPath: "images/index/home.png",
        selectedIconPath: "images/index/home_act.png",
      },
      {
        pagePath: "pages/My/My",
        text: "我的",
        iconPath: "images/index/my.png",
        selectedIconPath: "images/index/my_act.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ffe346",

    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
