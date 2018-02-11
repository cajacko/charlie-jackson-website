import React, { PureComponent } from 'react';
import ContentSpotlight from '../ContentSpotlight';
import './Skills.css';
import { about, skills } from './skills';
import Text from '../Text';

class Skills extends PureComponent {
  render() {
    return (
      <ContentSpotlight title="Me and my skills" theme="LIGHT">
        <div className="skills">
          <div>
            <Text text={about} />
          </div>
          <div>
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
        </div>
      </ContentSpotlight>
    );
  }
}

export default Skills;
