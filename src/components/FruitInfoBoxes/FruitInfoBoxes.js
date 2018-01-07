import React, { Component } from 'react';
import FruitInfoBox from './FruitInfoBox/FruitInfoBox';
import Aux from '../../hoc/_Aux/_Aux';

// import * as fruitImgs from '../../shared/FruitImages';

import tomato from '../../Images/red_tomato.svg';
import apple from '../../Images/red_apple.svg';
import strawberry from '../../Images/red_strawberry.svg';
import orange from '../../Images/yo_orange.svg';
import pineapple from '../../Images/yo_pineapple.svg';
import kiwi from '../../Images/gr_kiwi.svg';
import grape from '../../Images/gr_grape.svg';
import blueberry from '../../Images/bp_blueberry.svg';
import pear from '../../Images/wb_pear.svg';
import peach from '../../Images/wb_peach.svg';

class FruitInfoBoxes extends Component {

    state = {
        red: { 
            title: "빨강 (Red)",
            imgs: [ { name: "tomato", src: tomato }, { name: "apple", src: apple }, { name: "strawberry", src: strawberry } ],
            desc: "성분 : 리코펜, 엘리스산, 안토시아닌\n" +
                "효과 : 면역력 증가, 혈관 강화, DNA 손상 감소, 항암 효과"
        },
        y_o: { //yellow_orange
            title: "노랑/주황 (Yellow/Orange)",
            imgs: [ {name: "orange", src: orange }, { name: "pineapple", src: pineapple } ],
        },
        gr: { //green
            title: "초록 (green)",
            imgs: [ { name: "grape", src: grape }, { name: "kiwi", src: kiwi } ],
            desc: "성분 : 안토시아닌, 레스베라트롤" + 
             "효과 : 혈액 순환, 심장질환과 뇌졸중 예방, 식욕 감소"
         },
        b_p: {
             //blue_purple
           title: "파랑/보라 (Blue/Purple)",
           imgs: [ { name: "blueberry", src: blueberry } ],
           desc: "성분 : 안토시아닌, 레스베라트롤" + 
            "효과 : 혈액 순환, 심장질환과 뇌졸중 예방, 식욕 감소"
        },
        w_b: {
            //white_brown
          title: "하양/갈색 (White/Brown)",
          imgs: [ { name: "pear", src: pear },  { name: "peach", src: peach } ],
          desc: "성분 : 안토시아닌, 레스베라트롤" + 
           "효과 : 혈액 순환, 심장질환과 뇌졸중 예방, 식욕 감소"
       }
    }

    render() {
        return (
            <Aux>
                <FruitInfoBox images={this.state.red.imgs} title={this.state.red.title} desc={this.state.red.desc} />
                <FruitInfoBox images={this.state.y_o.imgs} title={this.state.y_o.title} desc={this.state.y_o.desc}/>
                <FruitInfoBox images={this.state.gr.imgs} title={this.state.gr.title} desc={this.state.gr.desc}/>
                <FruitInfoBox images={this.state.b_p.imgs} title={this.state.b_p.title} desc={this.state.b_p.desc}/>
                <FruitInfoBox images={this.state.w_b.imgs} title={this.state.w_b.title} desc={this.state.w_b.desc}/>
            </Aux>
        )
    };
}

export default FruitInfoBoxes;