// index.js
// 获取应用实例
const app = getApp()

Page({
  scanCode(e){
    const { place,state }= e.currentTarget.dataset;
    let url = 'https://yqt.catii.top'
    wx.scanCode({
      onlyFromCamera: true,
      success(res){
        const data = JSON.parse(res.result);
        if(state==0){
          url = `${url}/api/outrecord`
          console.log('出');
        }else{
          url = `${url}/api/inrecord`
          console.log('入');
        }
        wx.request({
          url: url,
          method:"POST", 
          data:{
            place,
            user:data.user,
            userName:data.userName,
          },
          success(res){
            if(res){
              wx.showToast({
                title: '扫描成功！',
              })
            }
          }
        })
      }
    })
  },
  // onLoad(){
  //   wx.request({
  //     url:'https://yqt.catii.top/api/outrecord',
  //     method:"POST",
  //     data:{place: "北大门", user: "2017211043", userName: "黄国庆"}
  //   })
  // }

  
})
