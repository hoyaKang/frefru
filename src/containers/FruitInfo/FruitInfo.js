import React, {Component} from 'react';
import FruitInfoBoxes from '../../components/FruitInfoBoxes/FruitInfoBoxes';

import classes from './FruitInfo.css'

class FruitInfo extends Component {

    render() {
        return (
        <div>
            <div className={classes.Intro}>
                주스에 들어가는 과일 성분, 지금까지 모르고 드셨나요? <br />
                FreFru가 알려주는 과일별 효능과 성분들! <br />
                이제부터 자신에게 필요한 과일을 알고 먹어볼까요? 
            </div>
            <FruitInfoBoxes />
        </div>

          
        )
    }
} 

export default FruitInfo;