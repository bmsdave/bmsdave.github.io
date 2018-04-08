import React from "react";
import styled from "react-emotion";
import {FancyH2} from "../FancyHeader/FancyHeader";

const Event = styled('div')`
  position: relative;
  bottom: -2px;
  padding: 0;
  margin: 0;
  padding-bottom: 14px;
`

const EventTitle = styled('div')`
  font-size: 0.9em;
`


const EventSubtitle = styled('div')`
  font-size: 0.6em;
  color: #999;
  padding-left: 10px;
  line-height: 0.6em;
`


type Props = {
    awards: Array < {label: string, value: number} >
};

export default class AwardsBlock extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <FancyH2>Awards</FancyH2>
                {this.props.awards.map(award => (
                    <Event key={award.title} >
                        <EventTitle>{award.title}</EventTitle>
                        <EventSubtitle>{award.date}</EventSubtitle>
                    </Event>
                ))}
            </React.Fragment>
        );
    }
}
