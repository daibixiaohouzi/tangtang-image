require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
var ImagesData = require('../data/imageDatas.json');

//let yeomanImage = require('../images/yeoman.png');

//获取图片相关数据。利用自执行函数，url转换
ImagesData = (function getImageURL(imagesDataArray){
  for(var i = 0,j = imagesDataArray.length;i < j ;i++){
    let singleImage =  imagesDataArray[i];
    singleImage.imageURL = require('../images/'+singleImage.fileName);
    imagesDataArray[i] = singleImage;
  }
  return imagesDataArray;
})(ImagesData);

class AppComponent extends React.Component {
  componentWillMount(){

  }
  render() {
    return (
      <div className="index">
        {ImagesData.map((value,key)=>{
          return (<div key={key} className="item">
            <img src={value.imageURL} />
              {false&&<p>{value.desc}</p>}
          </div>)
        })}
        {/*<div className="flip-container">*/}
          {/*<div className="flipper">*/}
            {/*<div className="front">1111*/}
            {/*</div>*/}
            {/*<div className="back">2222*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
