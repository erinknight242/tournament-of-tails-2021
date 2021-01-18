import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Layout from './Layout';
import config from '../config.js';
// require('../assets/css/style.scss');

injectTapEventPlugin();

export default class App extends Component {
    constructor(props, context) {
    super(props, context);

    // Initialize Firebase
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    
    const db = firebase.firestore();
    this.state = {
      db,
      data: [],
      games: [],
      currentRound: 0
    };
  }

  componentDidMount() {
    const data = [];
    const games = [];
    let currentRound = "";
    this.state.db.collection("pets").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data[doc.id] = (doc.data());
      });
      this.setState({ data });
    });
    this.state.db.collection("games").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        games[doc.id] = (doc.data());
      });
      this.setState({ games });
    });
    this.state.db.collection("currentRound").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        currentRound = doc.data().round;
      });
      this.setState({ currentRound });
    });
  }

  setCurrentRound = (currentRound) => {
    this.setState({ currentRound });
  }

  render() {
    const { data, games, currentRound } = this.state;
    return (
      <Layout
        data={data}
        games={games}
        currentRound={currentRound}
        setCurrentRound={this.setCurrentRound}
      />
    );
  }
}
