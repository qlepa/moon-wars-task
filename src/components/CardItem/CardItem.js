import React, { memo } from "react";

import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const CardItem = memo(function CardItem(props) {
    const { classes, card, id } = props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography>Player {id} </Typography>
          <Typography className={classes.title}>
            {card.name}
          </Typography>
          <Typography className={classes.atribute}>
            {card.mass}
            {card.crew}
          </Typography>
        </CardContent>
      </Card>
    );
});

const styles = () => ({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    color: "#000000",
    textAlign: "center",
    width: "40%"
  },
  content: {
    backgroundColor: "#ffffff"
  },
  title: {
    backgroundColor: "#ffffff",
    color: "#000000",
    marginTop: '5px',
  },
  atribute: {
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: "3em",
    marginTop: "20px"
  }
});

CardItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardItem);
