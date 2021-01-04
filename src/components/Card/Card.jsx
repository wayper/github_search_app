import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrap,
  ContentItem,
  CardHeading,
  ContentItemText,
  ContentItemTitle,
} from './styles';

function Card({
  heading,
  content,
}) {
  return (
    <CardWrap>
      <CardHeading>
        {heading}
      </CardHeading>
      {content.map(({ title, text }) => (
        <ContentItem key={title}>
          <ContentItemTitle>
            {title}:
          </ContentItemTitle>
          <ContentItemText>
            {text}
          </ContentItemText>
        </ContentItem>
      ))}

    </CardWrap>
  )
}

Card.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

Card.defaultProps = {
  heading: '',
  content: [],
};

export default Card;
