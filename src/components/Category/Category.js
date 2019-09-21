import React, { Component, Fragment } from "react";

import { CategoryWrapper } from "./CategoryWrapperStyled/CategoryWrapperStyled";
import { Title } from "../Common/TitleStyled/TitleStyled";
import { Header } from "../Common/HeaderStyled/HeaderStyled";
import { CategoryItem } from "./CategoryItemStyled/CategoryItemStyled";
import { Loading } from "../Common/LoadingStyled/LoadingStyled";

class Category extends Component {
  state = {
    category: null,
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.finishFetch !== this.props.finishFetch) {
      this.renderView();
    };
  };

  setCategory(category) {
    this.setState({
      loading: true
    })
    this.props.fetchCards(category)
    this.props.fetchCards(category)
  };

  renderView() {
    const { finishFetch } = this.props
    
    finishFetch && this.setState({
      loading: false,
    })
    finishFetch && this.props.renderView('BattleGround')
    
  };

  render() {
    return (
      <Fragment>
        <Header>
          <Title>Choose Category</Title>
        </Header>
        {this.state.loading && <Loading />}
        <CategoryWrapper>
          <CategoryItem
            img={"/static/images/mill.png"}
            onClick={() => this.setCategory("starships")}
          />
          <CategoryItem
            img={"/static/images/luke.png"}
            onClick={() => this.setCategory("people")}
          />
        </CategoryWrapper>
      </Fragment>
    );
  };
};

export default Category;
