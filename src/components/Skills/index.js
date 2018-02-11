import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import './Skills.css';
import { about, skills } from './skills';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';
import Paragraph from '../Paragraph';
import TextButton from '../Buttons/TextButton';

class Skills extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Me and my skills" theme="LIGHT">
        <div className="skills">
          <div className="skills__columns">
            <div className="skills__column">
              <SpacingContainer mr2>
                <div className="skills__content">
                  <Paragraph noSpacing>
                    <Text text={about} />
                  </Paragraph>
                </div>
              </SpacingContainer>
            </div>
            <div className="skills__column">
              <SpacingContainer ml2>
                <div className="skills__content">
                  <table className="skills__table">
                    <tbody>
                      {skills.map(({ label, ...skill }, i) => (
                        <tr
                          key={label}
                          className={!!i ? 'skills__row--topborder' : ''}
                        >
                          <td className="skills__cell">
                            <SpacingContainer mr2>
                              <Text
                                text={label}
                                color="BLUE"
                                fontSize="SMALL"
                              />
                            </SpacingContainer>
                          </td>
                          <td className="skills__cell">
                            <SpacingContainer mr>
                              {skill.skills.map((skillItem, i) => (
                                <span key={skillItem}>
                                  {!!i && <Text text=", " fontSize="SMALL" />}
                                  <Text text={skillItem} fontSize="SMALL" />
                                </span>
                              ))}
                            </SpacingContainer>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SpacingContainer>
            </div>
          </div>
          <SpacingContainer mt2>
            <footer className="skills__footer">
              <Paragraph noSpacing center>
                <Text fontSize="SMALL" text="Want more?" />
              </Paragraph>
              <Paragraph noSpacing center>
                <Text
                  fontSize="SMALL"
                  text="Read my article on me, my process and experience"
                />
              </Paragraph>
              <SpacingContainer mt>
                <TextButton text="More Charlie" />
              </SpacingContainer>
            </footer>
          </SpacingContainer>
        </div>
      </ContentSpotlight>
    );
  }
}

export default Skills;
