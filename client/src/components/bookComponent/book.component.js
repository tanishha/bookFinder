import React, { Component } from "react";

export default class BookComponent extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    console.log("innncoming>>>", this.props.incomingData);

    if (this.props.incomingData) {
      this.setState({
        books: this.props.incomingData,
      });
      console.log('books received>>>',this.props.books)
    }
    
  }

  render() {
    // let content=
    // this.state.books.items.forEach((item) => (
    //       <p>{item.volumeInfo.title}</p>

    //     ))
    // let data = this.props.incomingData;
    // console.log("ncoming>>>", data);

    // console.log("props>>>", this.props.books);

    //  this.props.incomingData.forEach(item=>(
    //   console.log('the items are>>>>',item.volumeInfo.title)
    //           ))
    //    let content=
    // this.props.incomingData
    // let content = this.props.incomingData.length
    //   ? this.props.incomingData.map((books) => books.volumeInfo.title)
    //   : 
    //     "";
      // console.log("new ncoming>>>", data);
 
    return (
      <>
       
        {/* <div> {content}</div> */}
        </>
    );
  }
}
