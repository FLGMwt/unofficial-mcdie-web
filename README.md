# Unofficial McDie for Web

This is very rough _unsanctioned_ early stab a web-based reimplementation of _some of_ the functionality in Geoff Engelstein's [McDie (Monte Carlo Dice Information Explorer)](https://gengelstein.itch.io/mcdie) desktop app.

## Caveats

I don't have any idea how much time I'll spend on this so keep your expectations low. :)

## Initial Spike Roadmap

- [x] Project setup
- [x] Sample [React Flow](https://reactflow.dev/) UI & layout
- [x] Implement Die + Die => Compare Histogram in React Flow nodes (static nodes, no editing)
- [x] Implement Die + Die => Compare Histogram experiment execution UI thread
- [x] Install and configure [`vx`](https://vx-demo.vercel.app/) w/ sample graph
- [x] Chart Die + Die => Compare Histogram result w/ data-ui
- [x] Make nodes slightly less (visually) hideous
- [x] Make Die nodes configurable
- [ ] Plan out graph routing/resolution work
- [ ] Plan out any additional editing work
- [ ] Implement Die + Die => Compare Histogram experiment execution web worker
- [ ] Draw the rest of the friendly owl

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See Create React App's documentation for tooling details. In brief, dependencies with `yarn install` and run the project with `yarn start`.
