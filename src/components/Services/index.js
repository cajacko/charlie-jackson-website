import React, { Component } from 'react';
import './Services.css';
import Text from '../Text';
import services from './services';
import Icon from '../Icon';
import HorizontalList from '../Lists/HorizontalList';
import ContactButton from '../Buttons/ContactButton';

class Services extends Component {
  render() {
    return (
      <section>
        <header>
          <h3>
            <Text fontSize="LARGE" bold text="I can build" />
          </h3>
          <nav>
            <HorizontalList
              list={services.map(({ label, icon }) => ({
                key: label,
                component: (
                  <button>
                    <Icon icon={icon} />
                    <Text text={label} />
                  </button>
                ),
              }))}
            />
          </nav>
        </header>
        <div>
          <img src={services[0].image} alt={services[0].imageAlt} />
          <Text text={services[0].text} />
        </div>
        <footer>
          <ContactButton />
        </footer>
      </section>
    );
  }
}

export default Services;
