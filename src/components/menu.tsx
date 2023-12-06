import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';

const MenuWrapper = styled.div`
  display: flex;
  padding-top: 4px;
  margin-left: 4rem;
  align-items: flex-end;
  width: 20%;
`;

const MenuSubWrapper = styled.div`
  display: flex;
  padding: 0px 20px;
  width: 80%;
  flex-direction: column;
  gap: 0.25rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  &:hover {
    background-color: #f6f4fd;
  }
`;

const Logo = styled.span`
  font-size: 2.25rem;
  font-weight: 700;
  border-radius: 50%;
  color: #a08cdd;
`;

const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 12px 12px 12px 12px;
  border-radius: 30px;
  &:hover {
    background-color: #f6f4fd;
  }
  &.active {
    font-weight: bold;
    color: #a08cdd;
  }
  &:hover > div {
    color: #a08cdd;
  }
`;

const MenuIcon = styled.div`
  min-width: 28px;
`;

const MenuText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoutBtn = styled.span`
  margin-top: 8px;
  display: flex;
  padding: 16px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #ec7f69;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.7;
  }
`;

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

  const clickLogout = async () => {
    await auth.signOut();
    navigate('/login');
  }

  return (
    <MenuWrapper>
      <MenuSubWrapper>
        <LogoWrapper>
          <Logo>𝕏</Logo>
        </LogoWrapper>
        <MenuItem to='/'>
          <MenuIcon>
            {location.pathname === '/' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
                <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Home</MenuText>
        </MenuItem>
        <MenuItem to='/explore'>
          <MenuIcon>
            {location.pathname === '/explore' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
                />
              </svg>
            ) : (
              <svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Explore</MenuText>
        </MenuItem>
        <MenuItem to='/notifications'>
          <MenuIcon>
            {location.pathname === '/notifications' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z'
                />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Notifications</MenuText>
        </MenuItem>
        <MenuItem to='/messages'>
          <MenuIcon>
            {location.pathname === '/messages' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Messages</MenuText>
        </MenuItem>
        <MenuItem to='/lists'>
          <MenuIcon>
            {location.pathname === '/lists' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
                />
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z'
                />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Lists</MenuText>
        </MenuItem>
        <MenuItem to='/bookmarks'>
          <MenuIcon>
            {location.pathname === '/bookmarks' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z'
                />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Bookmarks</MenuText>
        </MenuItem>
        <MenuItem to='communities'>
          <MenuIcon>
            {location.pathname === '/communities' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
                />
                <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Communities</MenuText>
        </MenuItem>
        <MenuItem to='premium'>
          <MenuIcon>
            <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <path d='M 0.0703125 0.0585938 C 0.0585938 0.0742188 0.855469 1.226562 1.835938 2.617188 C 2.8125 4.007812 4.894531 6.96875 6.457031 9.1875 L 9.300781 13.226562 L 9.117188 13.449219 C 9.015625 13.566406 6.925781 15.96875 4.476562 18.777344 C 2.027344 21.597656 0.015625 23.917969 0.0117188 23.941406 C 0 23.96875 0.429688 23.988281 1.042969 23.984375 L 2.089844 23.980469 L 2.433594 23.578125 C 2.625 23.355469 4.40625 21.3125 6.394531 19.03125 C 8.378906 16.746094 10.0625 14.8125 10.132812 14.726562 L 10.253906 14.578125 L 11.238281 15.976562 C 11.777344 16.746094 13.269531 18.867188 14.546875 20.6875 L 16.878906 23.988281 L 20.445312 23.988281 C 23.410156 23.988281 24.003906 23.980469 23.984375 23.921875 C 23.96875 23.878906 23.066406 22.582031 21.972656 21.03125 C 20.882812 19.484375 19.632812 17.707031 19.199219 17.089844 C 18.761719 16.472656 17.480469 14.640625 16.335938 13.023438 C 15.195312 11.402344 14.261719 10.054688 14.261719 10.035156 C 14.261719 10 20.292969 3.042969 22.34375 0.714844 L 22.929688 0.0507812 L 21.851562 0.0507812 L 20.777344 0.0585938 L 19.523438 1.5 C 18.835938 2.292969 17.148438 4.238281 15.773438 5.8125 L 13.277344 8.675781 L 10.253906 4.378906 L 7.222656 0.078125 L 3.660156 0.0507812 C 1.695312 0.0351562 0.078125 0.0429688 0.0703125 0.0585938 Z M 8.519531 4.6875 C 9.683594 6.351562 11.484375 8.90625 12.515625 10.375 C 13.550781 11.839844 15.839844 15.097656 17.613281 17.613281 C 19.382812 20.132812 20.847656 22.21875 20.871094 22.253906 C 20.902344 22.300781 20.550781 22.316406 19.277344 22.316406 L 17.652344 22.316406 L 14.425781 17.726562 C 6.980469 7.15625 3.222656 1.8125 3.175781 1.734375 C 3.148438 1.6875 3.480469 1.671875 4.765625 1.671875 L 6.394531 1.671875 Z M 8.519531 4.6875 ' />
            </svg>
          </MenuIcon>
          <MenuText>Premium</MenuText>
        </MenuItem>
        <MenuItem to='/profile'>
          <MenuIcon>
            {location.pathname === '/profile' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>Profile</MenuText>
        </MenuItem>
        <MenuItem to='/more'>
          <MenuIcon>
            {location.pathname === '/more' ? (
              <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z'
                />
              </svg>
            ) : (
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            )}
          </MenuIcon>
          <MenuText>More</MenuText>
        </MenuItem>
        <LogoutBtn onClick={clickLogout}>Logout</LogoutBtn>
      </MenuSubWrapper>
    </MenuWrapper>
  );
}
