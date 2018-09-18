import React, { Component } from "react";

export default class SvgReact extends Component {
	valueToPoint = (value, index, total) => {
		const x = 0
		const y = value * -0.9
		const angle = Math.PI * 2 / total * index
		const cos = Math.cos(angle)
		const sin = Math.sin(angle)
		const tx = x * cos -  y * sin + 100
		const ty = x * sin + y * cos + 100

		return {
			x: tx,
			y: ty
		}
	}

	genPoints = stats => {
		const len = stats.length;
		return stats.map((stat, i) => {
			const {x, y} = this.valueToPoint(stat, i, len)
			return `${x},${y}`
		}).join(' ')
	}

  render() {
    return (
      <div className="flex-container flex-c">
        <svg width="200" height="200">
          <polygon points="points" fill="green" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#35495e" />
        </svg>
        <label>Sides: {0}</label>
        <input
          type="range"
          min="3"
          max="500"
          //   v-model.number="sides"
        />
        <label>Minimum Radius: {0}%</label>
        <input
          type="range"
          min="0"
          max="90"
          //   v-model.number="minRadius"
        />
        <label>Update Interval: {0} milliseconds</label>
        <input
          type="range"
          min="10"
          max="2000"
          //   v-model.number="updateInterval"
        />
      </div>
    );
  }
}
