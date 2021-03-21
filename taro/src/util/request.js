import Taro from "@tarojs/taro";

// const base_url = "http://127.0.0.1:7001/api";
// const base_url = "/api";
const base_url = "https://yqt.catii.top/api";
export default {
  get(url, data = {}) {
    const userInfo = Taro.getStorageSync("userInfo");
    return new Promise((resove, reject) => {
      data.user ? "" : (data.user = userInfo.user);
      Taro.request({
        url: `${base_url}${url}`,
        method: "GET",
        data,
        success(res) {
          const { code, data, msg } = res.data;
          if (code !== 200) {
            Taro.showToast({
              title: msg,
              icon: "none",
            });
          } else {
            resove(data);
          }
        },
        fail(res) {
          Taro.showToast({
            title: "net error!!",
            icon: "none",
          });
          reject(res);
        },
      });
    });
  },
  post(url, data = {}) {
    const userInfo = Taro.getStorageSync("userInfo");
    return new Promise((resove, reject) => {
      data.user ? "" : (data.user = userInfo.user);
      Taro.request({
        url: `${base_url}${url}`,
        method: "POST",
        data,
        success(res) {
          const { code, data, msg } = res.data;
          if (code !== 200) {
            Taro.showToast({
              title: msg,
              icon: "none",
            });
          } else {
            resove(data);
          }
        },
        fail(res) {
          Taro.showToast({
            title: "net error!!",
            icon: "none",
          });
          reject(res);
        },
      });
    });
  },
};
