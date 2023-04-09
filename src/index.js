import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// // import './index.css';

import user from 'user.json';
import data from 'data.json';

/* <Profile
  username=
  tag={user.tag}
  location=
  avatar={user.avatar}
  stats={user.stats}
/>; */

const profile = (
  <div className="profile">
    <div className="description">
      <img src={user.avatar} alt="User avatar" className="avatar" />
      <p className="name">{user.username}</p>
      <p className="tag">{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{user.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);

const statistics = (
  <section className="statistics">
    <h2 className="title">"Upload stats" stats={data}</h2>

    <ul className="stat-list">
      <li className="item">
        <span className="label">stats={data.label}</span>
        <span className="percentage">stats={data.percentage}</span>
      </li>
      <li className="item">
        <span className="label">stats={data.label}</span>
        <span className="percentage">stats={data.percentage}</span>
      </li>
      <li className="item">
        <span className="label">stats={data.label}</span>
        <span className="percentage">stats={data.percentage}</span>
      </li>
      <li className="item">
        <span className="label">stats={data.label}</span>
        <span className="percentage">stats={data.percentage}</span>
      </li>
    </ul>
  </section>
);

// const page = ({ profile }, { statistics });

ReactDOM.createRoot(document.getElementById('root')).render(profile);
