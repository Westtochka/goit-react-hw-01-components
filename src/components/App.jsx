import PropTypes from 'prop-types';
import { Profile } from "./Profile/Profile";
import {Statistics} from '/Statistics/Statistics';

import user from '../user.json';
import data from '../data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />

    </div>
  );
};

App.propTypes={
  obj: PropTypes.objectOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
    }
  })
  )
}
