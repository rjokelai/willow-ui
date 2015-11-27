import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions/counters';
import cubism from 'cubism';
import d3 from 'd3';
import _ from 'lodash';
import './Graph.scss'

class Graph extends PureComponent {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, this.props.dispatch);
    this.graphId = _.uniqueId('cubism-graph')
  }

  render() {
    return (
      <div id={this.graphId} className="cubism-graph" ref="graph"></div>
    )
  }

  componentDidMount() {
    function random_ma(name) {
      return context.metric(function(start,stop,step,callback){
        var values = [Math.random()];
        while ( start < stop -1 ){
          start += step;
          values.push( values[values.length-1] + (Math.random()-0.5) * 0.1);
        }
        callback(null,values);
      }, name)
    }

    const context = cubism.context().size(700)
    const horizon = context.horizon().extent([0,2])
    context.step(1000)
    horizon.metric(random_ma)
    const metrics = ["X","Y","Z"];
    d3.select(this.refs.graph).selectAll(".horizon")
      .data(metrics)
      .enter()
      .append("div")
      .attr("class", "horizon")
      .call(horizon);

    // set rule
    d3.select(this.refs.graph).append("div")
      .attr("class", "rule")
      .call(context.rule());

    // set focus
    context.on("focus", function(i) {
      d3.selectAll(".value")
        .style( "right", i == null ? null : context.size() - i + "px");
    });
    // set axis
    var axis = context.axis()
    d3.select(this.refs.graph).append("div").attr("class", "axis").append("g").call(axis);

    this.context = context
    this.horizon = horizon
  }

  componentWillUnmount() {
    if(this.horizon) {
      d3.select(".horizon")
        .call(this.horizon.remove)
        .remove();
      this.horizon = undefined
    }
  }
}

export default connect( state => {
  return {counters: state.get('counters')}
} ) (Graph)
