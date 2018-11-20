import * as React from 'react';
import './App.css';

// import logo from './logo.svg';

import { SketchPad, TOOL_ELLIPSE, TOOL_LINE, TOOL_PENCIL, TOOL_RECTANGLE } from './sketchpad';

// import io from 'socket.io-client';
// const wsClient: io = io(`ws://127.0.0.1:3000`);

interface IRecipeProps {
  dummy?: string,
}

interface IRecipeState {
  color?: string,
  fill?: boolean,
  fillColor?: string,
  items?: object[],
  size?: number,
  tool?: string,
}

class App extends React.Component<IRecipeProps, IRecipeState> {
  // private socket = null;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: [],
      size: 2,
      tool: TOOL_PENCIL
    };

    this.onPencilButtonClick = this.onPencilButtonClick.bind(this);
    this.onLineButtonClick = this.onLineButtonClick.bind(this);
    this.onEllipseButtonClick = this.onEllipseButtonClick.bind(this);
    this.onRectangleButtonClick = this.onRectangleButtonClick.bind(this);
    this.onLineSizeChange = this.onLineSizeChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onFillColorCheckboxChange = this.onFillColorCheckboxChange.bind(this);
    this.onFillColorChange = this.onFillColorChange.bind(this);
  }

  public componentDidMount() {
    // wsClient.on('addItem', item => this.setState({items: this.state.items.concat([item])}));
  }

  public onPencilButtonClick() {
    this.setState({tool:TOOL_PENCIL});
  }

  public onLineButtonClick() {
    this.setState({tool:TOOL_LINE});
  }

  public onEllipseButtonClick() {
    this.setState({tool:TOOL_ELLIPSE});
  }

  public onRectangleButtonClick() {
    this.setState({tool:TOOL_RECTANGLE});
  }

  public onLineSizeChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({size: parseInt(e.target.value, 10)});
  }

  public onColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({color: e.target.value});
  }

  public onFillColorCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({fill: e.target.checked});
  }

  public onFillColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({fillColor: e.target.value});
  }

  public render() {
    const { tool, size, color, fill, fillColor, items } = this.state;

    // let buttonStyle = (tool === TOOL_PENCIL ? {fontWeight:'bold'} : undefined);
    // var buttonStyle = undefined;
    // if (tool === TOOL_PENCIL)
    // {
    //   buttonStyle = {fontWeight:'bold'};
    // }


    return (
      <div>
        <h1>React SketchPad</h1>
        <div style={{float:'left', marginRight:20}}>
          <SketchPad
            width={500}
            height={500}
            animate={true}
            size={size}
            color={color}
            fillColor={fill ? fillColor : ''}
            items={items}
            tool={tool}
            // onCompleteItem={(i) => wsClient.emit('addItem', i)}
          />
        </div>
        <div style={{float:'left'}}>
          <div className="tools" style={{marginBottom:20}}>
            <button
              style={{fontWeight:'bold'}}
              className={tool === TOOL_PENCIL  ? 'item-active' : 'item'}
              onClick={this.onPencilButtonClick}
            >Pencil</button>
            <button
              style={{fontWeight:'bold'}}
              className={tool === TOOL_LINE  ? 'item-active' : 'item'}
              onClick={this.onLineButtonClick}
            >Line</button>
            <button
              style={{fontWeight:'bold'}}
              className={tool === TOOL_ELLIPSE  ? 'item-active' : 'item'}
              onClick={this.onEllipseButtonClick}
            >Ellipse</button>
            <button
              style={{fontWeight:'bold'}}
              className={tool === TOOL_RECTANGLE  ? 'item-active' : 'item'}
              onClick={this.onRectangleButtonClick}
            >Rectangle</button>
          </div>
          <div className="options" style={{marginBottom:20}}>
            <label htmlFor="">size: </label>
            <input min="1" max="20" type="range" value={size} onChange={this.onLineSizeChange} />
          </div>
          <div className="options" style={{marginBottom:20}}>
            <label htmlFor="">color: </label>
            <input type="color" value={color} onChange={this.onColorChange} />
          </div>
          {(this.state.tool === TOOL_ELLIPSE || this.state.tool === TOOL_RECTANGLE) ?
            <div>
              <label htmlFor="">fill in:</label>
              <input type="checkbox" value={fill ? 1 : 0} style={{margin:'0 8'}}
                     onChange={this.onFillColorCheckboxChange} />
              {fill ? <span>
                  <label htmlFor="">with color:</label>
                  <input type="color" value={fillColor} onChange={this.onFillColorChange} />
                </span> : ''}
            </div> : ''}
        </div>
      </div>
    );
  }
}

export default App;
