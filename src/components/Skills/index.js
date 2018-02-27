// @flow

import React from 'react';
import ContentSpotlight from '../ContentSpotlight';
import './Skills.css';
import { about, skills, SKILLS } from '../../constants/data';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';
import Paragraph from '../Paragraph';
import TextButton from '../Buttons/TextButton';

const Skills = () => (
  <ContentSpotlight title="Me and my skills" theme="LIGHT">
    <div className="skills">
      <div className="skills__columns">
        <div className="skills__column skills__column--text">
          <div className="skills__columnwrapper skills__columnwrapper--text">
            <div className="skills__content">
              <Paragraph noSpacing>
                <Text text={about} />
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="skills__column skills__column--table">
          <div className="skills__columnwrapper skills__columnwrapper--table">
            <div className="skills__content">
              <table className="skills__table">
                <tbody>
                  {skills.map(({ label, ...skill }, i) => (
                    <tr
                      key={label}
                      className={i ? 'skills__row--topborder' : ''}
                    >
                      <td className="skills__cell skills__cell--title">
                        <SpacingContainer mr2>
                          <Text text={label} color="BLUE" fontSize="SMALL" />
                        </SpacingContainer>
                      </td>
                      <td className="skills__cell">
                        <SpacingContainer mr>
                          <div>
                            {skill.skills.map((skillItem, index) => (
                              <span key={skillItem}>
                                {!!index && <Text text=", " fontSize="SMALL" />}
                                <Text text={skillItem} fontSize="SMALL" />
                              </span>
                            ))}
                          </div>
                        </SpacingContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {SKILLS.MORE_URL && (
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
              <TextButton text="More Charlie" href={SKILLS.MORE_URL} />
            </SpacingContainer>
          </footer>
        </SpacingContainer>
      )}
    </div>
  </ContentSpotlight>
);

export default Skills;
