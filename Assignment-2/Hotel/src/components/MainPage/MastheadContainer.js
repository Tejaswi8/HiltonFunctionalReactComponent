import React, { Component, PropTypes } from 'react'
import RoomsComponent from '../../Components/RoomPage'
import style from './MastheadContainer.css'
export class MastheadContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      numberOfroomsBlock: [{
        title: "Room",
        isChecked: false
      },
      {
        title: "Room1",
        isChecked: false
      },
      {
        title: "Room2",
        isChecked: false
      },
      {
        title: "Room4",
        isChecked: false
      }]
    };
    this.onSelectRooms = this.onSelectRooms.bind(this);
  }
  onSelectRooms(indexValue,isChecked) {
    let numberOfroomsBlock = this.state.numberOfroomsBlock;
        numberOfroomsBlock.forEach((item,index) =>{
      if((indexValue > index) || (indexValue === index && isChecked)) {
        item.isChecked = true;
      }else {
        item.isChecked = false;
      }
    })
    this.setState({numberOfroomsBlock});
  }

  createRoomPage() {
    return(<div>
      {
       this.state.numberOfroomsBlock.map((value,index)=>(          
          <RoomsComponent showCheckBox={index === 0 ? false : true} 
                          indexCount={index} 
                          onSelectRooms={this.onSelectRooms}
                          isChecked={value.isChecked}>
          </RoomsComponent>
       ))
      }
   </div>)
  }     
  render(){    
    return(
            <div>            
             {this.createRoomPage()}
             <div className={style["submitBtn"]}>
               <input type="submit" value="Submit"/>
              </div>                    
            </div>
          );
        }
}

export default MastheadContainer