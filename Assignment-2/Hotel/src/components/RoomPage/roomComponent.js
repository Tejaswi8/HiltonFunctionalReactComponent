import React from 'react';
import style from './roomComponent.css';

export class RoomsComponent extends React.Component {

  constructor( props ) {
    super( props ); 
    this.roomChecked = this.roomChecked.bind(this);
  } 
  roomChecked(indexValue,event){      
       this.props.onSelectRooms(indexValue,event.currentTarget.checked);
  }
  render() {
    return (
        <div id={this.props.indexCount} className={style["room-container"]}>
            <div className={style["title"]}>
                {this.props.showCheckBox ? 
                    <input type="checkbox" 
                           checked={this.props.isChecked} 
                           onChange={(event) => this.roomChecked(this.props.indexCount,event)}/>:null }                
                <label className={style["title-label"]}> Room {this.props.indexCount + 1}</label>
            </div>
            <div className={style["child-box"]}>
                <div>
                    <label className={style["lbl"]}> Adults </label>
                     <label className={style["lbl"]}> Childern </label>
                </div>
                <div className={style["age-lbls"]}>
                    <label className={style["lbl"]}> (18 +) </label>
                     <label className={style["lbl"]}> (0-17) </label>
                </div>
                <div className={style["age-lbls"]}>
                    <select className={style["dropdown"]} disabled={!this.props.isChecked && this.props.showCheckBox}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option> 
                        <option>4</option>
                    </select>
                     <select className={style["dropdown"]} disabled={!this.props.isChecked && this.props.showCheckBox}>
                        <option>0</option>
                        <option>1</option>
                    </select>
                </div>
            </div>
        </div>
    )
  }  
}
export default RoomsComponent