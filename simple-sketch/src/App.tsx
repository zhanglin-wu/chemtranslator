import * as React from 'react';
import './App.css';

import { SketchPad, TOOL_LINE, TOOL_RECTANGLE } from './sketchpad';

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
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: [],
      size: 2,
      tool: TOOL_LINE
    };

    this.onLineButtonClick = this.onLineButtonClick.bind(this);
    this.onRectangleButtonClick = this.onRectangleButtonClick.bind(this);
    this.onLineSizeChange = this.onLineSizeChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  public onLineButtonClick() {
    this.setState({tool:TOOL_LINE});
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

  public render() {
    const { tool, size, color, fill, fillColor, items } = this.state;

    return (
      <div>
        <div style={{marginLeft:100, marginRight:40}}>
          <h1>React SketchPad</h1>
        </div>
        <div style={{float:'left', marginLeft:10, marginRight:20}}>
          <SketchPad
            width={500}
            height={500}
            animate={true}
            size={size}
            color={color}
            fillColor={fill ? fillColor : ''}
            items={items}
            tool={tool}
          />
        </div>
        <div style={{float:'left'}}>
          <div className="tools" style={{marginBottom:20}}>
            <button
              style={{fontWeight:'bold'}}
              className={tool === TOOL_LINE  ? 'item-active' : 'item'}
              onClick={this.onLineButtonClick}
            >Line</button>
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
        </div>
      </div>
    );
  }
}

export default App;
