import React from 'react'
class ReactLifecyleMethods extends React.Component {
  constructor() {
    super();
    //console.log("Constructor Mounted"); -> 1
    this.state = {
      number: 0
    };
  }
  updateNum = () => {
    this.setState({ number: this.state.number + 1 });
  }
  //useEffect with empty dependency
  componentDidMount() { //->4
    console.log("Mounting comp");
    //this.setState({ number: this.state.number + 1 });
    //console.log("Component mounted");
  }
  componentDidUpdate(prevProps,prevState) {
    if(prevState.number != this.state.number){
      console.log("Update comp",prevState.number,this.state.number);
    }    
    //this.setState({ number: this.state.number + 1 });
    //console.log("Component mounted");
    /* setInterval({()=>{
      console.log("Update")}
    },5000) */
  }
  componentWillUnmount(){
    //clearInterval(0)
    this.setState({number:0});
    console.log("Unmounted");
  }
  render() {
    //console.log("Inside render"); -> 2
    return (
      <div>
        {/*console.log("Inside return") -> 3*/}
        <h1>This is React LifeCyle Methods</h1>
        <h2>The state value is {this.state.number}</h2>
        <button onClick={this.updateNum}>+</button>
      </div>
    );
  }
}
export default ReactLifecyleMethods