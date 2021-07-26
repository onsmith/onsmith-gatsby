import * as React from 'react';

import {
  faChalkboardTeacher,
  faCoffee,
  faDatabase,
  faDesktop,
  faEnvelope,
  faFileArchive,
  faGem,
  faGraduationCap,
  faHandsHelping,
  faMapMarkerAlt,
  faTerminal,
  faTh,
  faUniversity,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

import {
  faAws,
  faDocker,
  faGithub,
  faLinkedin,
  faJs,
  faPython,
  faReact,
  faTwitter,
  faJava,
} from '@fortawesome/free-brands-svg-icons';

import Layout from 'components/layout/layout';
import InfoCard from 'components/card/info-card/info-card';
import CardText from 'components/card/card-text/card-text';
import CardTitle from 'components/card/card-title/card-title';
import CardIcon from 'components/card/card-icon/card-icon';
import CardPhoto from 'components/card/card-photo/card-photo';
import CardList from 'components/card/card-list/card-list';
import CardListItem from 'components/card/card-list/card-list-item';
import CardContactList from 'components/card/card-contact-list/contact-list';
import CardContactListItem from 'components/card/card-contact-list/contact-list-item';

import CV from '../static/SmithAaronTeachingCV.pdf';

export default function IndexPage() {
  return (
    <Layout>
      <InfoCard>
        <CardPhoto />

        <CardTitle>Hi, I&apos;m Aaron.</CardTitle>

        <CardText>
          I&apos;m a Teaching Assistant Professor of Computer&nbsp;Science at
          UNC Chapel Hill.
        </CardText>

        <CardText>
          In 2021, I received a PhD in Computer Science from UNC Chapel Hill. My
          published research includes video codec design, frameless video
          representation, and CS education.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faHandsHelping} />

        <CardTitle>Mission</CardTitle>

        <CardText>
          I try to make the world a better place by respecting, inspiring,
          enabling, and listening to those around me.
        </CardText>

        <CardText>
          My interests include developing equitable and scalable tools for
          undergraduate CS education; web technology; data compression;
          entrepreneurship; cloud services; and software engineering best
          practices.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faGraduationCap} />

        <CardTitle>Education</CardTitle>

        <CardText>
          I studied Computer Science at the{' '}
          <a href="https://www.unc.edu/" target="_blank" rel="noreferrer">
            University of North Carolina at Chapel Hill
          </a>{' '}
          from 2014 to 2021. I received a M.S. in 2019 and a Ph.D. in 2021.
        </CardText>

        <CardText>
          I attended{' '}
          <a href="https://www.coastal.edu/" target="_blank" rel="noreferrer">
            Coastal Carolina University
          </a>{' '}
          in Conway, SC for undergrad from 2010 to 2014. I received B.S. degrees
          in Applied Mathematics and Computer Science, with a 4.0 cumulative
          GPA.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faMapMarkerAlt} />

        <CardTitle>Location</CardTitle>

        <CardText>
          I was born in <strong>Worcester,&nbsp;MA</strong>, grew up in{' '}
          <strong>Myrtle&nbsp;Beach,&nbsp;SC</strong>, and now live in{' '}
          <strong>Chapel&nbsp;Hill,&nbsp;NC</strong>.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faFileArchive} />

        <CardTitle>Compression Research</CardTitle>

        <CardText>
          My Ph.D. research was in video compression. My thesis argued that
          video content should be encoded at the source using a flexible initial
          representation that supports top-down, receiver-driven adaptation for
          use by diverse applications.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faUniversity} />

        <CardTitle>Educational Research</CardTitle>

        <CardText>
          I am very interested in educational research, particularly in
          developing teaching resources that scale to large course sizes.
        </CardText>

        <CardText>
          I created{' '}
          <a href="https://mydigitalhand.org" target="_blank" rel="noreferrer">
            My&nbsp;Digital&nbsp;Hand
          </a>{' '}
          to improve student-led office&nbsp;hours in large CS&nbsp;courses. My
          Digital Hand is used by numerous universities in North America,
          including UNC.
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faChalkboardTeacher} />

        <CardTitle>Teaching</CardTitle>

        <CardText>
          I have been the primary instructor for CS courses at UNC since 2019.
          Most recently, I teach COMP 301 Foundations of Programming (Java OOP,
          testing, design patterns, GUIs, frameworks, concurrency) and COMP 455
          Models of Computation (automata, formal languages, grammars, regular
          expressions, Turing machines, decidability).
        </CardText>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faDesktop} />

        <CardText>Here are some technologies I love:</CardText>

        <CardList>
          <CardListItem icon={faJs}>TypeScript</CardListItem>
          <CardListItem icon={faReact}>React</CardListItem>
          <CardListItem icon={faDatabase}>PostgreSQL</CardListItem>
          <CardListItem icon={faAws}>AWS</CardListItem>
          <CardListItem icon={faPython}>Python</CardListItem>
          <CardListItem icon={faVideo}>H.265/HEVC</CardListItem>
          <CardListItem icon={faTerminal}>C/C++</CardListItem>
          <CardListItem icon={faJava}>Java</CardListItem>
          <CardListItem icon={faDocker}>Docker</CardListItem>
          <CardListItem icon={faGem}>Ruby on Rails</CardListItem>
          <CardListItem icon={faTh}>MATLAB</CardListItem>
        </CardList>
      </InfoCard>

      <InfoCard>
        <CardIcon icon={faCoffee} />

        <CardText>
          Want to learn more? Check out{' '}
          <a href={CV} rel="noreferrer" target="_blank">
            my curriculum vitae
          </a>
          .
        </CardText>

        <CardText>
          Want to get in touch, grab a coffee, or have a conversation?
          Here&apos;s how to reach me.
        </CardText>

        <CardContactList>
          <CardContactListItem
            href="mailto:onsmith@cs.unc.edu"
            icon={faEnvelope}
          />
          <CardContactListItem
            href="https://www.linkedin.com/in/onsmith13/"
            icon={faLinkedin}
          />
          <CardContactListItem
            href="https://twitter.com/onsmith13"
            icon={faTwitter}
          />
          <CardContactListItem
            href="https://github.com/onsmith"
            icon={faGithub}
          />
        </CardContactList>
      </InfoCard>
    </Layout>
  );
}
