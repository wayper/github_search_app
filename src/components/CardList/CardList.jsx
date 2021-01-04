import React from 'react';
import PropTypes from 'prop-types';
import { CardListWrap } from './styles';
import Card from '../Card';

function CardList({ data }) {
  return (
    <CardListWrap>
      {data.map(({ id, login, name, type, description, language }) => {
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
  data: PropTypes.arrayOf(
    PropTypes.object
  )
};

CardList.defaultProps = {
  data: [],
};

export default CardList;
