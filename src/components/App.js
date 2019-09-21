import React, { Component } from "react";
import swapi from "../api/swapi";

import Category from "./Category/Category";
import BattleGround from "./BattleGround/BattleGround";
import { Wrapper } from "./Common/WrapperStyled/WrapperStyled";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.baseState = this.state;
  }

  getInitialState() {
    return {
      errorFetch: null,
      finishFetch: false,
      view: "Category",
      cards: []
    };
  }

  fetchCategoryCounter = category => {
    return swapi
      .get(`/${category}`)
      .then(response => response.data.count)
      .catch(error => error);
  };

  fetchCards = async category => {
    const counter = await this.fetchCategoryCounter(category);
    const itemsPerPage = 10;
    const rest = counter % 10;
    const howManyPages = rest
      ? parseInt((counter / itemsPerPage).toFixed(0))
      : (counter / itemsPerPage).toFixed(0);
    const page = Math.floor(Math.random() * howManyPages) + 1;
    const link = `/${category}/?page=${page}`;
    const itemIndex = page === howManyPages ? rest - 1 : itemsPerPage;
    const randomItem = Math.floor(Math.random() * itemIndex);
    const response = await swapi.get(`${link}`).catch(error => error);

    if (response.message) {
      this.setState({
        errorFetch: response.message,
        finishFetch: true
      });
    } else {
      this.setState(state => ({
        cards: [...state.cards, response.data.results[randomItem]]
      }));
      if (this.state.cards.length === 2) {
        this.setState({
          finishFetch: true
        });
      }
    }
  };

  renderView = view => {
    this.setState({
      view: view
    });
  };

  resetGame = () => {
    this.setState(this.baseState);
  };

  clearCards = () => {
    this.setState({
      cards: []
    });
  };

  render() {
    const { view, cards, errorFetch, finishFetch } = this.state;

    switch (view) {
      case "BattleGround":
        return (
          <Wrapper>
            <BattleGround
              fetchCards={this.fetchCards}
              cards={cards}
              clearCards={this.clearCards}
              resetGame={this.resetGame}
              errorFetch={errorFetch}
            />
          </Wrapper>
        );
      default:
        return (
          <Wrapper>
            <Category
              fetchCards={this.fetchCards}
              renderView={this.renderView}
              finishFetch={finishFetch}
              errorFetch={this.state.errorFetch}
            />
          </Wrapper>
        );
    }
  }
}

export default App;
