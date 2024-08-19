import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesktop>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupDesktop>
        <Logo />
        <ActionGroupDesktopSubscribe>
          <Button>
            Subscribe
          </Button>
          <LoginLink href="login.html"> Already a subscriber? </LoginLink>
        </ActionGroupDesktopSubscribe>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupDesktop = styled(ActionGroup)`
  display: none;
  flex-direction: row;
  gap: 24px;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const ActionGroupDesktopSubscribe = styled(ActionGroupDesktop)`
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const LoginLink = styled.a`
  font-weight: var(--font-weight-normal);
  font-style: italic;
  text-decoration: underline;
  position: absolute;
  top: calc(24px + 40px + 8px);
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
