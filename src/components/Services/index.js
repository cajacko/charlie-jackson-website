import React, { Component } from 'react';
import './Services.css';
import Text from '../Text';
import services from './services';
import Icon from '../Icon';
import HorizontalList from '../Lists/HorizontalList';
import ContactButton from '../Buttons/ContactButton';
import ContentContainer from '../Containers/ContentContainer';
import SpacingContainer from '../Containers/SpacingContainer';
import SectionHeading from '../SectionHeading';
import Button from '../Buttons/Button';

class Services extends Component {
  render() {
    return (
      <section>
        <header className="services__header">
          <ContentContainer>
            <div className="services__headerwrap">
              <SectionHeading text="I can build" />
              <nav>
                <HorizontalList
                  list={services.map(({ label, icon }) => ({
                    key: label,
                    component: (
                      <Button>
                        <Icon icon={icon} />
                        <Text text={label} />
                      </Button>
                    ),
                  }))}
                />
              </nav>
            </div>
          </ContentContainer>
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
