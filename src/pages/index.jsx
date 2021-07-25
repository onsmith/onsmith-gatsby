import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faBeer,
  faBook,
  faCoffee,
  faCompass,
  faDatabase,
  faDesktop,
  faEnvelope,
  faFlask,
  faGem,
  faGraduationCap,
  faTerminal,
  faUniversity,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

import {
  faAws,
  faCss3,
  faEmber,
  faFontAwesome,
  faGithub,
  faLinkedin,
  faMicrosoft,
  faPython,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/layout/layout';
import InfoCard from 'components/card/info-card/info-card';
import CardText from 'components/card/card-text/card-text';
import CardTitle from 'components/card/card-title/card-title';
import CardIcon from 'components/card/card-icon/card-icon';
import CardPhoto from 'components/card/card-photo/card-photo';

export default function IndexPage() {
  return (
    <Layout>
      <InfoCard>
        <CardPhoto />

        <CardTitle>Hi. I&apos;m Aaron.</CardTitle>

        <CardText>
          I am a Teaching Assistant Professor of Computer&nbsp;Science at UNC
          Chapel Hill.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faCompass} />

        <CardText>
          I was born in <strong>Worcester,&nbsp;MA</strong>, grew up in{' '}
          <strong>Myrtle&nbsp;Beach,&nbsp;SC</strong>, and now live in{' '}
          <strong>Chapel&nbsp;Hill,&nbsp;NC</strong>.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faGraduationCap} />

        <CardText>
          In 2021, I received a Ph.D. degree
          <br />
          in Computer Science from UNC Chapel Hill.
        </CardText>

        <CardText>
          In 2019, I received a M.S. degree
          <br />
          in Computer Science from UNC Chapel Hill.
        </CardText>

        <CardText>
          In 2014, I received B.S. degrees
          <br />
          in Computer Science and Applied Mathematics
          <br />
          from Coastal Carolina University.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faFlask} />

        <CardText>
          My Ph.D. thesis argues that video content should be encoded using a
          flexible initial representation that supports top-down,
          receiver-driven adaptation.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faUniversity} />

        <CardText>
          I also help teach at UNC. I help instruct our{' '}
          <strong>Java&nbsp;CS2</strong> course as well as{' '}
          <strong>Introduction to Web Programming</strong>.
        </CardText>

        <CardText>
          I developed{' '}
          <a href="https://mydigitalhand.org" target="_blank" rel="noreferrer">
            My&nbsp;Digital&nbsp;Hand
          </a>{' '}
          to improve student-led office&nbsp;hours in large CS&nbsp;courses like
          those at UNC.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faBeer} />

        <CardText>
          In my free time, I like to
          <strong>tinker with software</strong>,
          <strong>play video games</strong>,<strong>follow politics</strong>,
          <strong>hang out at bars</strong>,<strong>watch sports</strong> (go
          Heels!), and
          <strong>travel</strong>.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faBook} />

        <CardText>I have many interests! Here are a few:</CardText>

        <ul className="index-section-list">
          <li>entrepreneurship</li>
          <li>pedagogy</li>
          <li>physics</li>
          <li>web development</li>
          <li>software design</li>
          <li>politics</li>
          <li>video games</li>
          <li>NFL</li>
          <li>coffee</li>
          <li>philosophy</li>
        </ul>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faDesktop} />

        <CardText>...and here are some technologies I love:</CardText>

        <ul className="index-section-list">
          <li>
            <FontAwesomeIcon icon={faEmber} /> EmberJS
          </li>
          <li>
            <FontAwesomeIcon icon={faMicrosoft} /> Visual Studio
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} /> PostgreSQL
          </li>
          <li>
            <FontAwesomeIcon icon={faAws} /> AWS
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} /> Python
          </li>
          <li>
            <FontAwesomeIcon icon={faFontAwesome} /> Font Awesome
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} /> Bootstrap 4
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} /> HEVC
          </li>
          <li>
            <FontAwesomeIcon icon={faTerminal} /> C / C++
          </li>
          <li>
            <FontAwesomeIcon icon={faGem} /> Ruby on Rails
          </li>
        </ul>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faCoffee} />

        <CardText>
          Want to stay in touch, grab a coffee, or have a conversation?
          Here&apos;s how to reach me.
        </CardText>

        <ul className="index-section-contact-list">
          <li className="index-section-contact-icon index-section-email">
            <a
              href="mailto:ajsmith7@coastal.edu"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li className="index-section-contact-icon index-section-linkedin">
            <a
              href="https://www.linkedin.com/in/acodesmith/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="index-section-contact-icon index-section-twitter">
            <a
              href="https://twitter.com/ajcodesmith"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="index-section-contact-icon index-section-github">
            <a
              href="https://github.com/onsmith"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </InfoCard>
    </Layout>
  );
}
