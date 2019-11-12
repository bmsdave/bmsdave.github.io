import React from 'react'
import styled from 'react-emotion'
import { FancyH2 } from '../FancyHeader/FancyHeader'
import monokaiColors from '../../../monokaiColors'

const Timeline = styled('section')`
  position: relative;
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
    max-width: 730px;
    margin-left: 0px;
    padding-left: 0;
    padding-right: 10px;
    padding-bottom: 10px;
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

const EventTitle = styled('div')`
  display: inline-block;
  font-size: 1.1em;
  font-weight: bold;

  :before {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    left: -10px;
    top: 10px;
    background-color: #b0b0b0;
    opacity: 0.6;
    z-index: -2;
  }
`

const EventTimeMain = styled('div')`
  display: inline-block;
  color: hsla(0, 0%, 0%, 0.9);
`

const EventTime = styled('div')`
  display: inline-block;
  font-size: 0.9em;
  color: #999;
  padding-left: 10px;
  line-height: 1.4em;
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

export default class ExperienceBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>
          Experience <EventTimeMain>(9 yrs)</EventTimeMain>
        </FancyH2>
        <Timeline>
          <ul>
            <li>
              <Event>
                <EventTitle>Product Owner / Software Engineer</EventTitle>
                <EventTime>
                  <EventTimeMain>(1 yr)</EventTimeMain> Dec 2018 — present
                </EventTime>
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
                    <strong>Responsibilities:</strong>
                    <br />
                    - Developing. Monitoring the quality of code.<br />
                    {/* - Supports product development according to the Roadmap.<br /> */}
                    {/* - Product quality assurance, including:<br /> */}
                    {/* * monitoring the quality of code;<br /> */}
                    - Ensuring the required level of test coverage, high quality
                    Release Notes.<br />
                    {/* - Ensuring high quality Release Notes.<br /> */}
                    {/** developing software to facilitate manual/automated product
                     testing<br /> */}
                    {/** applying current and reliable software development
                     technologies (for developing products)<br /> */}
                    - Maintaining PA DSS/PCI DSS requirements and high level of
                    security.
                    {/* * Controlling usage of 3rd party libraries in terms of
                    absense of known security vulnerabilities and ensuring
                    license compliance.<br /> */}
                    {/* - Fixing defects according to regulations (SLA).<br /> */}
                    {/* - Ensures implementation of non-functional requirements for
                    the product.<br /> */}
                    {/* - Performing the functions of the Information Security Officer
                    (PCI DSS). */}
                  </p>
                  <p>
                    <strong>Technologies</strong>: JS, TS, Angular, Java, SQL,
                    TeamCity
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>Software Engineer</EventTitle>
                <EventTime>
                  <EventTimeMain>(2 yrs 2 mos)</EventTimeMain> Nov 2016 — Dec
                  2018
                </EventTime>
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
                    <strong>Responsibilities:</strong>
                    <br />
                    - Developing.<br />
                    - Stress/penetration testing and optimization of web
                    applications.<br />
                    - Maintaining PA DSS/PCI DSS requirements and a high level
                    of security.
                  </p>
                  <p>
                    <strong>Technologies</strong>: JS, TS, Angular, Java, SQL,
                    TeamCity
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>Full-Stack Web Developer</EventTitle>
                <EventTime>
                  <EventTimeMain>(1 yr 10 mos)</EventTimeMain> Feb 2015 — Nov
                  2016
                </EventTime>
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
                    <strong>Responsibilities</strong>:<br />
                    - Architecture development. development of server-side,
                    client-side, DB of the platform.<br />
                    {/* - Developing clients’ personal accounts.<br /> */}
                    {/* - Architecture development and writing server-side and
                    client-side parts of the platform according to the external
                    customers’ requirements.<br /> */}
                    - Integration of the platform with external and internal
                    systems.<br />
                    {/* - Implementation of applications for data synchronization
                    via REST, SOAP, SMTP.<br /> */}
                    {/* - Developed applications deployment.<br /> */}
                    - Setting up CI/CD. Configure nginx, apache, puppet
                    configurations. <br />
                    {/* - Configuration and optimization of web servers.<br /> */}
                    {/* - Configure nginx, apache, puppet configurations. */}
                  </p>
                  <p>
                    <strong>Technologies</strong>: JS, TS, Dart, Angular, React,
                    Backbone.js, Python, PL/SQL, Nginx, Apache2, Debian, Puppet
                  </p>
                </EventDescription>
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>Monitoring System Administrator</EventTitle>
                <EventTime>
                  <EventTimeMain>(6 mos)</EventTimeMain> Sep 2014 — Feb 2015
                </EventTime>
                <EventSubtitle>
                  <a
                    href="http://www.i-free.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    i-Free
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                {/* <EventDescription>
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
                </EventDescription> */}
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>Technical Support Engineer</EventTitle>
                <EventTime>
                  <EventTimeMain>(1 yr 8 mos)</EventTimeMain> Feb 2013 — Sep
                  2014
                </EventTime>
                <EventSubtitle>
                  <a
                    href="http://www.i-free.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    i-Free
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                {/* <EventDescription>
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
                </EventDescription> */}
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>Technical Support Engineer</EventTitle>
                <EventTime>
                  <EventTimeMain>(5 mos)</EventTimeMain> Jan 2010 — May 2010
                </EventTime>
                <EventSubtitle>
                  <a
                    href="https://www.majordomo.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Majordomo
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                {/* <EventDescription>
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
                </EventDescription> */}
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>Hardware System Administrator</EventTitle>
                <EventTime>
                  <EventTimeMain>(1 yr)</EventTimeMain> Jan 2009 — Dec 2009
                </EventTime>
                <EventSubtitle>
                  Rosplat Invest, Saint Petersburg, Russia
                </EventSubtitle>
                {/* <EventDescription>
                  <p>
                    <strong>Job Responsibilities</strong>:<br />
                    - Technical support of terminals.<br />
                    - Hardware and software troubleshooting.<br />
                    - Replacement of the IT components.
                  </p>
                </EventDescription> */}
              </Event>
            </li>
          </ul>
        </Timeline>
      </React.Fragment>
    )
  }
}
