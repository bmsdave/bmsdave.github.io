import React from 'react'
import styled from 'react-emotion'
import { FancyH2 } from '../FancyHeader/FancyHeader'
import monokaiColors from '../../../monokaiColors'

const Timeline = styled('section')`
  position: relative;
  margin-top: 30px;
  min-height: 600px;
  width: 100%;
  font-size: 0.9em;
  font-family: 'Fira Sans', 'Helvetica Neue', serif;

  ul {
    margin: 0;
    padding: 0;
  }

  p {
    margin-bottom: 0.5em;
  }

  ul li {
    list-style-type: none;
    position: relative;
    margin: 0;
    max-width: 630px;
    margin-left: 110px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
  }

  ul li::after {
    content: '';
    position: absolute;
    left: -60px;
    top: 1px;
    transform: translateX(-50%);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: white;
  }
`

const Event = styled('div')`
  position: relative;
  bottom: -2px;
  padding: 0;
  margin: 0;
`

const EventTime = styled('div')`
  height: 30px;
  width: 120px;
  position: absolute;
  left: -120px;
  text-align: center;
  top: 1px;
  z-index: 99;
  font-size: 0.85em;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;

  time {
    position: relative;
    font-size: 1em;
  }
  time:before {
    content: '';
    width: 100%;
    height: 7px;
    position: absolute;
    left: -5px;
    bottom: 0px;
    background-color: ${monokaiColors.colors['list.focusBackground']};
    opacity: 0.6;
    z-index: -2;
  }
`

const EventTitle = styled('div')`
  font-size: 1.1em;
`

const MoveToEvent = styled('div')`
  font-size: 0.9em;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  color: #888;
  display: inline-block;
`

const EventSubtitle = styled('div')`
  font-size: 0.9em;
  color: #999;
  padding-left: 10px;
  line-height: 1.4em;
`

const EventDescription = styled('div')`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.9em;
  line-height: 1.3em;
  font-family: 'Open Sans', 'Helvetica Neue', serif;
`

const Line = styled('div')`
  position: absolute;
  left: 50px;
  top: -40px;
  height: 100%;
  z-index: -2;
  width: 1px;
  border-left: 2px solid #000;
`

export default class ExperienceBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Experience</FancyH2>
        <Timeline>
          <Line />
          <ul>
            <li>
              <EventTime>
                <time>Nov 2016 — present</time>
              </EventTime>
              <Event>
                <EventTitle>Software Engineer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.openwaygroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OpenWay Group
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription>
                  <p>
                    <strong>Project</strong>: WAY4WEB
                  </p>
                  <p>
                    <strong>Scope of project</strong>: The standard delivery of
                    the project consists of more than 10 thousand screens (forms
                    of display of certain entities, such as information about a
                    client, a cardholder, a merchant, etc.). In addition to
                    this, we provide powerful tools for customization of the
                    interface.
                  </p>
                  <p>
                    <strong>Clients</strong>: NETS, Santander, SberBank,
                    OpenBank, etc.
                  </p>
                  <p>
                    <strong>Job Responsibilities:</strong>
                    <br />
                    - Participation in the development of a WAY4 product web
                    part.<br />
                    - Stress testing and optimization of web applications.<br />
                    - Web applications penetration testing.<br />
                    - Performing the duties of the Information Security Officer
                    (PCI DSS).<br />
                    - Analysis and review of commits included in the project for
                    the presence of the impact of changes in PA-DSS
                    certification.
                  </p>
                  <p>
                    <strong>Technologies</strong>: JavaScript, Typescript,
                    AngularJS, Java, SQL, TeamCity, Windows
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Feb 2015 — Nov 2016</time>
              </EventTime>
              <Event>
                <EventTitle>Full-Stack Web Developer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.i-free.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    i-Free
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription>
                  <p>
                    <strong>Projects</strong>: BackOffice, Messaging
                  </p>
                  <p>
                    <strong>Scope of projects</strong>: Messaging is a
                    high-performance SMS sending system (3000 SMS per second at
                    peak load). BackOffice - billing system working in real time
                    (deals with billing and invoicing for the sent SMS via
                    Messaging).
                  </p>
                  <p>
                    <strong>Clients</strong>: i-Free, Channel One Russia,
                    MailRu, Facebook, Google, Alfabank, Raiffeisen Bank, VTB24,
                    etc.
                  </p>
                  <p>
                    <strong>Job Responsibilities</strong>:<br />
                    - Developing UI of the operational accounting platform.<br />
                    - Writing stored procedures and views in PostgreSQL.<br />
                    - Architecture development and writing server-side and
                    client-side parts of the platform.<br />
                    - Developing clients’ personal accounts.<br />
                    - Architecture development and writing server-side and
                    client-side parts of the platform according to the external
                    customers’ requirements.<br />
                    - Integration of the operational accounting platform with a
                    number of external and internal systems.<br />
                    - Implementation of applications for data synchronization
                    via REST, SOAP, SMTP.<br />
                    - Developed applications deployment.<br />
                    - Setting up the production environment.<br />
                    - Configuration and optimization of web servers.<br />
                    - Configure nginx, apache, puppet configurations.
                  </p>
                  <p>
                    <strong>Technologies</strong>: JS, Dart, Typescript,
                    Angular(1,2), React, Backbone.js, Polymer, Ampersand
                    Python2.7, PL/SQL, Flask, SqlAlchemy, PostrgreSQL, GIT,
                    Nginx, Apache2, Debian, Puppet
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Sep 2014 — Feb 2015</time>
              </EventTime>
              <Event>
                <EventTitle>Monitoring System Administrator</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.i-free.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    i-Free
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription>
                  <p>
                    <strong>Project</strong>: Messaging
                  </p>
                  <p>
                    <strong>Scope of project</strong>: Messaging is a
                    high-performance SMS sending system (3000 SMS per second at
                    peak load).
                  </p>
                  <p>
                    <strong>Clients</strong>: Channel One Russia, MailRu,
                    Facebook, Google, Alfabank, Raiffeisen Bank, VTB24, etc.
                  </p>
                  <p>
                    <strong>Job Responsibilities</strong>:<br />
                    - Monitoring and optimization of the IT systems performance.<br />
                    - Participation in the elimination of emergencies in the
                    server software workflow (regardless of the time of day).<br />
                    - Improvement of existing emergency response processes.
                  </p>
                  <p>
                    <strong>Functions</strong>:<br />
                    - Setting up a monitoring system to display the necessary
                    information for technical support staff and specialists
                    responsible for the respective systems.<br />
                    - Supporting uninterrupted operation of the monitoring
                    system.<br />
                    - Performing tasks on maintaining company’s services in
                    operation.<br />
                    - Eliminating errors in the company's systems.<br />
                    - Providing technical recommendations to internal divisions
                    of the company.
                  </p>
                  <p>
                    <strong>Technologies</strong>: Debian, Puppet,
                    Apache/Nginx/Tomcat, SQL, TCP/IP, Zabbix, Java, Python,
                    Bash.
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Feb 2013 — Sep 2014</time>
              </EventTime>
              <Event>
                <EventTitle>Technical Support Engineer</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.i-free.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    i-Free
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription>
                  <p>
                    <strong>Project</strong>: Messaging
                  </p>
                  <p>
                    <strong>Scope of project</strong>: Messaging is a
                    high-performance SMS sending system. (3000 SMS per second at
                    peak load).
                  </p>
                  <p>
                    <strong>Clients</strong>: Channel One Russia, MailRu,
                    Facebook, Google, Alfabank, Raiffeisen Bank, VTB24, etc.
                  </p>
                  <p>
                    <strong>Job Responsibilities</strong>:<br />
                    - Providing support for the uninterrupted operation of
                    servers, websites and other services of the company.
                  </p>
                  <p>
                    <strong>Functions</strong>:<br />
                    - Round-the-clock monitoring of the company's servers and
                    services and rapid response to the occurred problems.<br />
                    - Maintenance, configuration and improvement of the
                    monitoring system.<br />
                    - Elimination of errors in the company's systems
                    (independently or with the assistance of specialists).<br />
                    - Providing technical consultations to corporate clients of
                    the company.<br />
                    - Providing technical recommendations to the company’s
                    internal divisions.
                  </p>
                  <p>
                    <strong>Technologies</strong>: Debian, SMPP, Apache, Nginx,
                    Tomcat, SQL, TCP/IP, Zabbix, Python, Bash
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Sep 2012 — Dec 2012</time>
              </EventTime>
              <Event>
                <EventTitle>Industrial climber</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.gazprom.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gazprom
                  </a>, Ust-Luga, Russia
                </EventSubtitle>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jan 2011 — Aug 2012</time>
              </EventTime>
              <Event>
                <EventTitle>Sapper</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.mil.by/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Armed Forces of the Republic of Belarus
                  </a>, Mogilev, Belarus
                </EventSubtitle>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Aug 2010 — Jan 2011</time>
              </EventTime>
              <Event>
                <EventTitle>Road Worker of the Second Category</EventTitle>
                <EventSubtitle>
                  <a
                    href="http://www.belcement.by/en/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Belarusian Cement Plant
                  </a>, Kastsyukovichy, Belarus
                </EventSubtitle>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jan 2010 — May 2010</time>
              </EventTime>
              <Event>
                <EventTitle>Technical Support Engineer</EventTitle>
                <EventSubtitle>
                  <a
                    href="https://www.majordomo.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Majordomo
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription>
                  <p>
                    <strong>Job Responsibilities</strong>:<br />
                    - Consulting clients on technical issues.<br />
                    - Localization and elimination of problems related to the
                    functioning of the services provided by the company.
                  </p>
                  <p>
                    <strong>Functions</strong>:<br />
                    - Debugging and analysis of application traffic in the
                    interaction of the main protocols (DNS, FTP, SSH, POP3,
                    SMTP, HTTP).<br />
                    - Configuration and monitoring of the Linux/FreeBSD
                    operating system group, configuration and monitoring of
                    services (Apache, Nginx, MySQL, exim/postfix).<br />
                    - Work on the bash, vi command line with the main GNU
                    utilities.<br />
                    - Administration of web servers and organization of
                    websites.<br />
                    - Competent written and oral communication with clients,
                    ability to formulate the thoughts and deliver them in a
                    clear way to the interlocutor.
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <EventTime>
                <time>Jan 2009 — Dec 2009</time>
              </EventTime>
              <Event>
                <EventTitle>Hardware System Administrator</EventTitle>
                <EventSubtitle>
                  Rosplat Invest, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription>
                  <p>
                    <strong>Job Responsibilities</strong>:<br />
                    - Technical support of terminals.<br />
                    - Hardware and software troubleshooting.<br />
                    - Replacement of the IT components.
                  </p>
                </EventDescription>
              </Event>
            </li>
          </ul>
        </Timeline>
      </React.Fragment>
    )
  }
}
