import React, {Component} from 'react';
import { findDOMNode } from 'react-dom'
import { Line, TOOL_LINE, Rectangle, TOOL_RECTANGLE } from './shapes'
import PropTypes from 'proptypes';

export const toolsMap = {
  [TOOL_LINE]: Line,
  [TOOL_RECTANGLE]: Rectangle,
};

export default class SketchPad extends Component {

  tool = null;
  interval = null;

  static propTypes = {
    animate: PropTypes.bool,
    canvasClassName: PropTypes.string,
    color: PropTypes.string,
    debounceTime: PropTypes.number,
    fillColor: PropTypes.string,
    height: PropTypes.number,
    items: PropTypes.array.isRequired,
    onCompleteItem: PropTypes.func, // function(stroke:Stroke) { ... }
    onDebouncedItemChange: PropTypes.func, // function(idStroke, points:Point[]) { ... }
    onEveryItemChange: PropTypes.func, // function(idStroke:string, x:number, y:number) { ... }
    onItemStart: PropTypes.func, // function(stroke:Stroke) { ... }
    size: PropTypes.number,
    tool: PropTypes.string,
    toolsMap: PropTypes.object,
    width: PropTypes.number,
  };

  static defaultProps = {
    animate: true,
    canvasClassName: 'canvas',
    color: '#000',
    debounceTime: 1000,
    fillColor: '',
    height: 500,
    size: 5,
    tool: TOOL_LINE,
    toolsMap,
    width: 500
  };

  constructor(props) {
    super(props);
    this.initTool = this.initTool.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    this.canvas = findDOMNode(this.canvasRef);
    this.ctx = this.canvas.getContext('2d');
    this.initTool(this.props.tool);
  }

  componentWillReceiveProps({tool, items}) {
    items
      .filter(item => this.props.items.indexOf(item) === -1)
      .forEach(item => {
        this.initTool(item.tool);
        this.tool.draw(item, this.props.animate);
      });
    this.initTool(tool);
  }

  initTool(tool) {
    this.tool = this.props.toolsMap[tool](this.ctx);
  }

  onMouseDown(e) {
    const data = this.tool.onMouseDown(...this.getCursorPosition(e), this.props.color, this.props.size, this.props.fillColor);
    if (data && data[0] && this.props.onItemStart) {
      this.props.onItemStart.apply(null, data);
    }
  }

  onMouseMove(e) {
    const data = this.tool.onMouseMove(...this.getCursorPosition(e));
    if (data && data[0] && this.props.onEveryItemChange) {
      this.props.onEveryItemChange.apply(null, data);
    }
  }

  onMouseUp(e) {
    const data = this.tool.onMouseUp(...this.getCursorPosition(e));
    if (data && data[0] && this.props.onCompleteItem) {
      this.props.onCompleteItem.apply(null, data);
    }

    if (this.props.onDebouncedItemChange) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return [
      e.clientX - left,
      e.clientY - top
    ];
  }

  render() {
    const {width, height, canvasClassName} = this.props;
    return (
      <canvas
        ref={(canvas) => { this.canvasRef = canvas; }}
        className={canvasClassName}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseUp}
        onMouseUp={this.onMouseUp}
        width={width}
        height={height}
      />
    )
  }
}
