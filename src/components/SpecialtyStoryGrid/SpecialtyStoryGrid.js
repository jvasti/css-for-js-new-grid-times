import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr;
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`;

const MarketsSection = styled.section`
  overflow: auto;

  @media ${QUERIES.laptopAndUp} {
    border-right: solid 1px var(--color-gray-300);
    padding-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

const SportsSection = styled.section`
  overflow: auto;

  @media ${QUERIES.laptopAndUp} {
    margin-left: -16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: row;
    flex-wrap: none;
    overflow: auto;
  }
`;

export default SpecialtyStoryGrid;
