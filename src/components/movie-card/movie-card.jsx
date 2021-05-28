import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container>

        <Row>
          <Col>
            <Card className="m-1 p-1" border="warning">
              <Card.Img variant="top" src={movie.ImagePath} alt="movie poster" />
              <Card.Footer className="text-center">
                <Link to={`/movies/${movie._id}`}>
                  <h4>{movie.Title}</h4>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
};