import React from 'react'
import styled from 'react-emotion'
import {FancyH2} from '../FancyHeader/FancyHeader'

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
  }
  time:before {
    content: '';
    width: 100%;
    height: 7px;
    position: absolute;
    left: -5px;
    bottom: 0px;
    background-color: #89bcfe;
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
  line-height: 0.9em;
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
                    <Line/>
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
                                    </a>, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>
                                    <strong>Tasks:</strong><br/>
                                    <p>
                                        - Participation in the development WAY4 web part.<br/>
                                        - Stress testing and optimization of web applications.<br/>
                                        - Penetration testing web applications.<br/>
                                        - Performing responsibility of Information Security Officer (PCI DSS).<br/>
                                        - Analysis and review commit's included in the project for the presence of the
                                        impact of changes in PA-DSS certification.
                                    </p>
                                    <p><strong>List of technologies:</strong> JavaScript, Typescript, AngularJS, Java, SQL, TeamCity,
                                        Windows</p>
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
                                    </a>, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>
                                    <strong>Tasks:</strong>
                                    <p>
                                        - Developing UI of the operating and accounting platform.<br/>
                                        - Writing stored procedures and views in PostgreSQL.<br/>
                                        - Architecture development and writing of server-side and client-side parts of
                                        the platform.<br/>
                                        - Developing of personal accounts of clients.<br/>
                                        - Architecture development and writing of server-side and client-side parts of
                                        the platform according to the requirements of external customers.<br/>
                                        - Integration of the operating and accounting platform with other external and
                                        internal systems.<br/>
                                        - Implementation of applications for data synchronization via REST, SOAP, SMTP.<br/>
                                        - Deploy developed applications.<br/>
                                        - Setting up the production environment.<br/>
                                        - Configuration and optimization of web servers.<br/>
                                        - Configure nginx, apache, puppet configurations.<br/>
                                    </p>
                                    <p>
                                        <strong>The list of technologies:</strong><br/>
                                        client-side:<br/>
                                        languages – JS, Dart, Typescript<br/>
                                        build systems/task runners – Gulp, Webpack, Grunt<br/>
                                        css frameworks – Bootstrap, Foundation<br/>
                                        js frameworks – Angular(1,2), Backbone.js, Polymer, Ampersand<br/>
                                    <br/>
                                        server-side:<br/>
                                        languages – Python2.7, PL/SQL<br/>
                                        frameworks – Flask, Botlle<br/>
                                        libraries – Sqlalchemy, Psycopg2, Celery, Pandas, Webargs<br/>
                                    </p>
                                    <p>
                                        Postrgresql, GIT, Nginx, Apache2, Debian, Puppet
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
                                    </a>, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>

                                        <strong>Tasks:</strong>
                                    <p>
                                        - Monitoring of performance and optimization of performance of the company's
                                        systems.<br/>
                                        - Participation in the elimination of emergency situations in the server
                                        SOFTWARE (regardless of the time of day).<br/>
                                        - Improvement of existing processes to respond to emergency situations.<br/>
                                    </p>

                                        <strong>Functions:</strong>
                                    <p>
                                        - Setting up a monitoring system to display the necessary information for
                                        technical support and specialists responsible for their respective systems.<br/>
                                        - Support uninterrupted operation of the monitoring system.<br/>
                                        - Performance of tasks on service of services of the company.<br/>
                                        - Elimination of errors in the company's systems.<br/>
                                        - Technical advice to internal divisions of the company.
                                    </p>
                                    <p>
                                        <strong>List of technologies:</strong> Debian, Puppet, Apache/Nginx/Tomcat, SQL, TCP/IP, Zabbix,
                                        Java, Python, Bash.
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
                                    </a>, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>
                                    <strong>Tasks:</strong>
                                    <p>
                                    - Providing support for the uninterrupted operation of servers, websites and other
                                    services of the company.
                                    </p>
                                    <strong>Functions:</strong>
                                    <p>
                                    - Round-the-clock monitoring of the company's servers and services and rapid
                                    response to problems.<br/>
                                    - Maintenance, configuration and improvement of the monitoring system.<br/>
                                    - Elimination of errors in the company's systems (independently or with the
                                    assistance of specialists).<br/>
                                    - Technical consultations to corporate clients of the company.<br/>
                                    - Technical advice to internal divisions of the company.
                                    </p>
                                    <p>
                                    <strong>List of technologies:</strong> Debian, SMPP, Apache / Nginx / Tomcat, SQL, TCP / IP, Zabbix,
                                    Python, Bash
                                    </p>
                                </EventDescription>
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
                                    </a>, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>
                                    <strong>Responsibilities:</strong>
                                    <p>
                                    - Consulting clients on technical issues.<br/>
                                    - Localization and elimination of problems related to the functioning of the
                                    services provided by the company.
                                    </p>
                                    <strong>Functions:</strong>
                                    <p>
                                    - Debugging and analysis of application traffic in the interaction of the main
                                    protocols (DNS, FTP, SSH, POP3, SMTP, HTTP).<br/>
                                    - Configuration and monitoring of the Linux/FreeBSD operating system family,
                                    configuration and monitoring of services (Apache, Nginx, MySQL, exim/postfix).<br/>
                                    - Work on the bash, vi command line with the main GNU utilities.<br/>
                                    - Administration of web servers and organization of web sites.<br/>
                                    - Competent written and oral communication with clients, ability to formulate the
                                    thoughts and correctly to bring them to the interlocutor.
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
                                    Rosplat Invest, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>
                                    <strong>Tasks:</strong>
                                    <p>
                                    - Technical support of terminals.<br/>
                                    - Hardware and software Troubleshooting.<br/>
                                    - Replacement of components.<br/>
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
