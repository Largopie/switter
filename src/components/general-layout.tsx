import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './menu';

const Wrapper = styled.div`
  display: flex;
`;

const Page = styled.div`
  flex-grow: 5;
`;

export default function GeneralLayout() {
  return (
    <Wrapper>
      <Menu />
      <Page>
        <Outlet />
      </Page>
    </Wrapper>
  );
}
