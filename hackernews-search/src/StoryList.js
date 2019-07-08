import React from 'react';
import PropTypes from 'prop-types';
import './StoryList.css';

function StoryList({ items } ) {
  return (
    <div className="story-list">
        {items.map(item => (
          <StoryListItem item={item} key={item.objectID}/>
        ))}
    </div>
  );
}
StoryList.propTypes = {
  items: PropTypes.array.isRequired
};

function StoryListItem({ item }) {
  return (
    <div className="story-list-item">
      <h2 className="story-name">{item.title}</h2>
      <ul className="story-info">
        <li className="story-points">{item.points} points</li>
        <li className="story-author">{item.author}</li>
        <li className="story-time">{item.created_at}</li>
        <li className="story-comments">{item.num_comments} comments</li>
        <li className="story-url">({item.url})</li>
      </ul>
    </div>
  );
}
StoryListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default StoryList
