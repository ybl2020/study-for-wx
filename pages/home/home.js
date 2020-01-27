// pages/home/home.js
Page({
  data:{
    name: 'Coderwhy!',
    age:'18',
    students:[
      {id:110,name:"kobe",age:30},
      { id: 110, name: "kobe", age: 31 },
      { id: 110, name: "kobe", age: 20 },
      { id: 110, name: "why", age: 18}
    ],
    counter:0
  },
  handleBtnClick(){
    //1.错误做法：界面不会刷新！
    //this.data.counter += 1,
    //console.log("按钮发生了点击")

    //2.this.setData()
    this.setData({
      counter : this.data.counter + 1
    }),
    console.log("按钮发生了点击")
  },
   handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    }),
      console.log("按钮发生了点击")
  }
})