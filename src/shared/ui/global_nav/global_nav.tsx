import React from 'react';
import styled from 'styled-components';
import Logo from '~root/assets/logo-small.svg';
import { useTheme } from 'styled-components';

const Nav = styled.nav`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    display: block;
    margin: 0;
    width: 100%;
    min-width: 320px;
    height: 48px;
    max-height: 44px;
    -webkit-user-select: none;
`;

const Content = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    max-width: 1024px;
    padding-top: 0;
    padding-bottom: 0;
    z-index: 2;
    padding-right: 22px;
    padding-left: 22px;
`;

const List = styled.ul`
    cursor: default;
    margin: 0 -8px;
    width: auto;
    height: 44px;
    display: flex;
    justify-content: space-between;
    -webkit-user-select: none;
    user-select: none;
    list-style: none;
`;

const Item = styled.li`
    list-style: none;
`;

const Link = styled.a`
    height: 44px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const GlobalNav = () => {
    const theme = useTheme();
    return (
        <Nav>
            <Content>
                <List>
                    <Item>
                        <Link>
                            <Logo height={30} width={30} fill={theme.colors.danger} />
                        </Link>
                    </Item>
                    <Item>
                        <Link>List</Link>
                    </Item>
                    <Item>
                        <Link>List2</Link>
                    </Item>
                </List>
            </Content>
        </Nav>
    );
};
