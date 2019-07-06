import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function StoryList({ items } ) {
  return (
    <table className="story-list">
      <tbody>
        {items.map(item => (
          <StoryListItem item={item} key={item.objectID}/>
        ))}
      </tbody>
    </table>
  );
}
StoryList.propTypes = {
  items: PropTypes.array.isRequired
};

function StoryListItem({ item }) {
  return (
    <tr className="strory-list-item">
      <td className="story-name">{item.title}</td>
    </tr>
  );
}
StoryListItem.propTypes = {
  item: PropTypes.object.isRequired
};
  
const testStoryList = [
  {
    "created_at": "2019-07-05T03:49:40.000Z",
    "title": "California law banning bots from pretending to be real people without disclosure",
    "url": "https://www.newyorker.com/tech/annals-of-technology/will-californias-new-bot-law-strengthen-democracy",
    "author": "woodgrainz",
    "points": 591,
    "story_text": null,
    "comment_text": null,
    "num_comments": 226,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1562298580,
    "relevancy_score": 8925,
    "objectID": "20359700",
  },
  {
    "created_at": "2019-07-05T09:36:04.000Z",
    "title": "Is this Paypal experience customary?",
    "url": "https://gist.github.com/stratosgear/6923623321adacd368e965ff193fe2ce",
    "author": "stratosgear",
    "points": 471,
    "story_text": null,
    "comment_text": null,
    "num_comments": 237,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1562319364,
    "relevancy_score": 8925,
    "objectID": "20361129",
  },
  {
    "created_at": "2019-07-05T12:20:44.000Z",
    "title": "Raspberry Pi 4 not working with some chargers",
    "url": "https://www.scorpia.co.uk/2019/06/28/pi4-not-working-with-some-chargers-or-why-you-need-two-cc-resistors/",
    "author": "styx31",
    "points": 330,
    "story_text": null,
    "comment_text": null,
    "num_comments": 230,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1562329244,
    "relevancy_score": 8925,
    "objectID": "20361946",
    }
];

ReactDOM.render(
  <StoryList items={testStoryList}/>,
  document.getElementById('root')
);    	 
