import React from 'react';
import PropTypes from 'prop-types';
import { CardListWrap } from './styles';
import Card from '../Card';

function CardList({ cardList }) {
  return (
    <CardListWrap>
      {cardList.map(({ id, login, name, type, description, language }) => {
        const cardContent = [
          { title: 'Name', text: name },
          { title: 'Type', text: type },
          { title: 'Description', text: description },
          { title: 'Language', text: language },
        ].filter(({ text }) => text);

        return (
          <Card
            key={id}
            heading={login || ''}
            content={cardContent}
          />
        )
      })}
    </CardListWrap>
  )
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.object
  )
};

CardList.defaultProps = {
  cardList: [],
};

export default CardList;
