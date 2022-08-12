import React from "react";
import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const cars = useSelector((state) => state.car.cars);
  console.log(cars);
  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p>
              <a href="#">{car}</a>
            </p>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu
        onClick={() => {
          setBurgerOpen(true);
        }}
      ></CustomMenu>

      {burgerOpen && (
        <BurgerNav>
          <CoseWrapper>
            <CustomClose
              onClick={() => {
                setBurgerOpen(false);
              }}
            />
          </CoseWrapper>

          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade In</a>
          </li>
          <li>
            <a href="#">Cyber-Truck</a>
          </li>
          <li>
            <a href="#">Roadster</a>
          </li>
          <li>
            <a href="#">Semi</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
          <li>
            <a href="#">Solar Roofs</a>
          </li>
          <li>
            <a href="#">Commercial Energy</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
        </BurgerNav>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px 30px;
    flex-wrap: nowrap;
  }
  a:hover {
    background: rgba(0, 0, 0, 0.2);

    border-radius: 10px;
    transition: all 0.5s ease;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 30px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;

const CustomClose = styled(CloseIcon)``;

const CoseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
