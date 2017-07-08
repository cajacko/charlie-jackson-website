import React from 'react';
import SocialListItem from 'components/SocialListItem/SocialListItem';

const items = [
  {
    icon: 'instagram',
    url: '',
    title: 'Instagram',
  },
  {
    icon: 'twitter',
    url: '',
    title: 'Twitter',
  },
  {
    icon: 'github',
    url: '',
    title: 'GitHub',
  },
  {
    icon: 'linkedin',
    url: '',
    title: 'LinkedIn',
  },
  {
    icon: 'pinterest',
    url: '',
    title: 'Pinterest',
  },
  {
    icon: 'email',
    url: '',
    title: 'Email',
  },
  {
    icon: 'youtube',
    url: '',
    title: 'YouTube',
  },
];

const Social = () => (
  <section className="Social">
    <h2 className="Social-title">Follow Me</h2>
    <ul className="Social-list">
      {
        items.map(({ icon, url, title }) => (
          <SocialListItem key={title} icon={icon} url={url} title={title} />
        ))
      }
    </ul>
  </section>
);

export default Social;
