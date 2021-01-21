//index.js
//获取应用实例
const app = getApp()
var map= [
  
  {
    "fId":"1",
    "name": "教学楼",
    "scale": 15.3,
    "latitude": "36.726430",
    "longitude": "101.749042",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "化工学院",
        id:0,
        "latitude": "36.725402",
        "longitude": "101.744728",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"化工学院",
          bgColor:"#caf0f8",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        "img": [
          "cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/图书馆1.jpg",
          "cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/图书馆2.jpg"
        ],
        "description": "化工楼，新建的化工楼"
      },
      {
        "name": "农牧楼",
        id: 1,
        "latitude": "36.724628",
        "longitude": "101.750543",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"农牧楼",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "睿智楼（老化院，基础部)",
        id: 2,
        "latitude": "36.728317",
        "longitude": "101.752088",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"睿智楼",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "地质楼（计算机系）",
        id: 3,
        "latitude": "36.725350",
        "longitude": "101.749438",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"地质楼",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "科技馆（鼎新馆）",
        id: 4,
        "latitude": "36.726287",
        "longitude": "101.750597",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"科技馆",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
    
      {
        "name": "财经学院",
        id: 5,
        "latitude": "36.726442",
        "longitude": "101.748140",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"财经学院",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "智慧大厦",
        id: 6,
        "latitude": "36.724456",
        "longitude": "101.745157",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"智慧大厦",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "医学院",
        id: 7,
        "latitude": "36.723699",
        "longitude": "101.748151",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"医学院",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "藏医学院",
        id: 8,
        "latitude": "36.733020",
        "longitude": "101.751133",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"藏医学院",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "机械学院",
        id: 9,
        "latitude": "36.723119",
        "longitude": "101.745179",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"机械学院",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "综合楼",
        id: 10,
        "latitude": "36.728411",
        "longitude": "101.751283",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"综合楼",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "网络中心",
        id: 11,
        "latitude": "36.728927",
        "longitude": "101.752088",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"网络中心",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "工科实验楼",
        id: 12,
        "latitude": "36.726451",
        "longitude": "101.752271",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"工科实验楼",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "农科院园艺所",
        id: 13,
        "latitude": "36.725548",
        "longitude": "101.752239",
        "iconPath": "/img/ico/jxl.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"农科院园艺所",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        }
    ]
  },
  {
    "fId":"2",
    "name": "校门",
    "scale": 15.1,
    "latitude": 36.726431,
    "longitude": 101.749042,
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "北门",
        id: 0,
        "latitude": "36.733454",
        "longitude": "101.748934",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"北门(72路)",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "东门",
        id: 1,
        "latitude": "36.727435",
        "longitude": "101.754760",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"东门(66路)",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "南门",
        id: 2,
        "latitude": "36.723024",
        "longitude": "101.750619",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"南门(11,15路)",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "雅苑门",
        "latitude": "22.97718",
        "longitude": "113.75838",
        "iconPath": "/img/ico/xm.png",
        "width": "30",
        "height": "30",
        "img": [
          ""
        ],
        "description": ""
      }
    ]
  },
  {
    "fId":"3",
    "scale": 15.3,
    "name": "行政部门",
    "latitude": "36.726431",
    "longitude": "101.749042",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "行政楼A",
        id: 0,
        "floor": "创业楼301",
        "latitude": "36.727414",
        "longitude": "101.753515",
        "iconPath": "/img/ico/xyfu.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"行政楼A",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "行政楼B",
        id: 1,
        "floor": "创业楼1202",
        "latitude": "36.727061",
        "longitude": "101.752925",
        "iconPath": "/img/ico/xyfu.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"行政楼B",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "行政楼C",
        id: 2,
        "latitude": "36.728579",
        "longitude": "101.753129",
        "iconPath": "/img/ico/xyfu.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"行政楼C",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
    ]
  },
  {
    "fId":"4",
    "name": "食堂",
    "scale": 15.3,
    "latitude": "36.730095",
    "longitude": "101.748935",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "学生食堂",
        id: 0,
        "latitude": "36.732186",
        "longitude": "101.747051",
        "iconPath": "/img/ico/st.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"学生食堂",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "园丁食堂",
        id: 1,
        "latitude": "36.727238",
        "longitude": "101.751021",
        "iconPath": "/img/ico/st.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"园丁食堂",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "小吃街",
        id: 2,
        "latitude": "36.731920",
        "longitude": "101.751809",
        "iconPath": "/img/ico/st.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"小吃街",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "常悦食堂",
        id: 3,
        "latitude": "36.731000",
        "longitude": "101.748730",
        "iconPath": "/img/ico/st.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"常悦食堂",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "锦绣餐厅",
        id: 4,
        "latitude": "36.731335",
        "longitude": "101.748794",
        "iconPath": "/img/ico/st.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"锦绣餐厅",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
    ]
  },
  {
    "fId":"5",
    "scale": 15.2,
    "name": "宿舍",
    "latitude": "36.730096",
    "longitude": "101.748935",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "1号楼",
        id: 0,
        "latitude": "36.726988",
        "longitude": "101.749926",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"1号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "2号楼",
        id: 1,
        "latitude": "36.727470",
        "longitude": "101.750436",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"2号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "3号楼",
        id: 2,
        "latitude": "36.728317",
        "longitude": "101.750430",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"3号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "4号楼",
        id: 3,
        "latitude": "36.732427",
        "longitude": "101.753000",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"4号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "5号楼",
        id: 4,
        "latitude": "36.732436",
        "longitude": "101.752206",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"5号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "6号楼",
        id: 5,
        "latitude": "36.730320",
        "longitude": "101.747872",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"6号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "7号楼",
        id: 6,
        "latitude": "36.730957",
        "longitude": "101.747872",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"7号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "8号楼",
        id: 7,
        "latitude": "36.731567",
        "longitude": "101.747893",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"8号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "9号楼",
        id: 8,
        "latitude": "36.732281",
        "longitude": "101.748000",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"9号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "10号楼",
        id: 9,
        "latitude": "36.731133",
        "longitude": "101.746069",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"10号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "11号楼",
        id: 10,
        "latitude": "36.731541",
        "longitude": "101.746112",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"11号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "12号楼",
        id: 11,
        "latitude": "36.731920",
        "longitude": "101.746075",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"12号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "13号楼",
        id: 12,
        "latitude": "36.732337",
        "longitude": "101.746112",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"13号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "14号楼",
        id: 13,
        "latitude": "36.732728",
        "longitude": "101.746064",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"14号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "15号楼",
        id: 14,
        "latitude": "36.733111",
        "longitude": "101.746085",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"15号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "16号楼",
        id: 15,
        "latitude": "36.732655",
        "longitude": "101.748016",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"16号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "17号楼",
        id: 16,
        "latitude": "36.733042",
        "longitude": "101.748022",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"17号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "18号楼",
        id: 17,
        "latitude": "36.733093",
        "longitude": "101.744868",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"18号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "19号楼",
        id: 18,
        "latitude": "36.732663",
        "longitude": "101.744825",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"19号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "20号楼",
        id: 19,
        "latitude": "36.730664",
        "longitude": "101.744841",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"20号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "21号楼",
        id: 20,
        "latitude": "36.731129",
        "longitude": "101.744825",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"21号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "22号楼",
        id: 21,
        "latitude": "36.731584",
        "longitude": "101.744910",
        "iconPath": "/img/ico/girl_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"22号楼",
          bgColor:"#F19EC2",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "24号楼",
        id: 22,
        "latitude": "36.730552",
        "longitude": "101.746112",
        "iconPath": "/img/ico/boy_ss.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"24号楼",
          bgColor:"#1297DB",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
    ]
  },
  {
    "fId":"6",
    "scale": 15.2,
    "name": "操场",
    "latitude": "36.7269899",
    "longitude": "101.749923",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "风雨操场",
        "latitude": "36.731528",
        "longitude": "101.749540",
        "iconPath": "/img/ico/caochang.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"风雨操场",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "操场1",
        "latitude": "36.728979",
        "longitude": "101.749422",
        "iconPath": "/img/ico/caochang.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"操场1",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
        "img": [
          "校园导览/南苑男生/南苑1栋.jpg"
        ],
        "description": "南苑1栋",
      },
      {
        "name": "操场2",
        "latitude": "36.728867",
        "longitude": "101.746273",
        "iconPath": "/img/ico/caochang.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"操场2",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "室外篮球场",
        "latitude": "36.730251",
        "longitude": "101.749492",
        "iconPath": "/img/ico/caochang.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"室外篮球场",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "排球场",
        "latitude": "36.727994",
        "longitude": "101.749384",
        "iconPath": "/img/ico/caochang.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"排球场",
          bgColor:"#FFFFFF",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
  ]},
    {
    "fId":"7",
    "name": "生活服务",
    "scale": 15.3,
    "latitude": "36.726430",
    "longitude": "101.749042",
    "iconPath":"/img/bj.png",
    "data": [
      {
        "name": "水房1",
        id: 0,
        "latitude": "36.731309",
        "longitude": "101.747646",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"水房1",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "水房2",
        id:1,
        "latitude": "36.727018",
        "longitude": "101.752287",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"水房2",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "学海超市",
        id:2,
        "latitude": "36.731124",
        "longitude": "101.744846",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"学海超市",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "青大超市",
        id:3,
        "latitude": "36.732951",
        "longitude": "101.749996",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"青大超市",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "快递收发点1",
        id:4,
        "latitude": "36.733072",
        "longitude": "101.749696",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"快递收发点1",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "快递收发点2",
        id:5,
        "latitude": "36.731107",
        "longitude": "101.744621",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"快递收发点2",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "常悦超市",
        id:6,
        "latitude": "36.731434",
        "longitude": "101.748768",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"常悦超市",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
      {
        "name": "八角亭",
        id:7,
        "latitude": "36.727835",
        "longitude": "101.750662",
        "iconPath": "/img/ico/生活.png",
        "width": "30",
        "height": "30",
        callout: {padding:2,
          content:"八角亭",
          bgColor:"#FFFFFf",
          color:"#000000",
          fontSize: 12,
          borderRadius:30,
          display:"ALWAYS"},
          "img": [
            ""
          ],
          "description": ""
        },
    ]
  }
]





Page({
  data: {
    //云开发数据
      avatarUrl: './user-unlogin.png',
      userInfo: {},
      logged: false,
      takeSession: false,
      requestResult: '',

    latitude: 36.726433,
    longitude: 101.749042,
    scale:15.4,
    buildlData: map,
    isSelectedBuild:0,
    isSelectedBuildType: 0,
    islocation: true,
    focusPointId:"",
    isChecked:true ,
    currentItemId:"1"
    
  },
  //获取用户信息
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
        else{
          wx.navigateTo({
            url: '/pages/grant/grant',
          })
        }
      }
    })
  },
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
//调用云函数
  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
       
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
       
      }
    })
  },
//定位
  dingwei:function(){
    var that=this;
  wx.getLocation({
   type: 'gcj02',
   success: function(res) {
    that.setData({
     latitude:res.latitude,
     scale:16.4,
     longitude:res.longitude
    })
   //console.log(res.latitude)
   // console.log(res.longitude)
   }

  })
},
//展示标志点
  changePage: function (event) {
    
    this.setData({
      currentItemId:event.currentTarget.dataset.num,
      isSelectedBuildType: event.currentTarget.dataset.num-1,
      longitude:map[event.currentTarget.dataset.num-1].longitude,
      latitude:map[event.currentTarget.dataset.num-1].latitude,
      scale: 16,
    });
    
  },
//标记跳转
  markertap(res) {
   
  
    var mark=res.currentTarget.dataset.num;
    var markerId=res.detail.markerId;
    
    let temp=JSON.stringify(mark[markerId])//作用是把数组转变成可以在网页传递中的参数进行传递

        wx.navigateTo({
          url: "/pages/info/info?mar="+temp,
        })
    },
//聊天室跳转
  navitap:function(){
  
       wx.navigateTo({
      url: '/pages/chat/chat',
       })
      },
})