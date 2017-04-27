'use strict';
var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ReactGridLayout = require('react-grid-layout');
ReactGridLayout = WidthProvider(ReactGridLayout);

/**
 * This layout demonstrates how to use static grid elements.
 * Static elements are not draggable or resizable, and cannot be moved.
 */
var StaticElementsLayout = React.createClass({
  mixins: [PureRenderMixin],

  getInitialState() {
    return {};
  },

  onLayoutChange: function(layout) {
    this.props.onLayoutChange(layout);
  },

  render() {
    return (
      <ReactGridLayout className="layout" rowHeightPercent={61.8} onLayoutChange={this.onLayoutChange}>
        <div key="1" data-grid={{x: 0, y: 0, w: 1, h: 1}} isSaveAspectRatio={true}><span className="text">1</span></div>
        <div key="2" data-grid={{x: 2, y: 0, w: 1, h: 1}}><span className="text">2 - Static</span></div>
      </ReactGridLayout>
    );
  }
});

module.exports = StaticElementsLayout;

if (require.main === module) {
  require('../test-hook.jsx')(module.exports);
}
