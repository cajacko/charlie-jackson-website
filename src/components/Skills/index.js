import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import './Skills.css';
import { about, skills } from './skills';
import Text from '../Text';
import SpacingContainer from '../Containers/SpacingContainer';
import Paragraph from '../Paragraph';

class Skills extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Me and my skills" theme="LIGHT">
        <div className="skills">
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
                <table>
                  <tbody>
                    {skills.map(({ label, ...skill }) => (
                      <tr key={label}>
                        <td>
                          <Text text={label} />
                        </td>
                        <td>
                          {skill.skills.map((skillItem, i) => (
                            <span key={skillItem}>
                              {!!i && <Text text=", " />}
                              <Text text={skillItem} />
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SpacingContainer>
          </div>
        </div>
      </ContentSpotlight>
    );
  }
}

export default Skills;
