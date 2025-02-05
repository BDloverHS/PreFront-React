'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { styled } from 'styled-components'
import { SlLogin } from 'react-icons/sl'
import { FaUserPlus, FaHome, FaSearch } from 'react-icons/fa'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'
import logo from '../../assets/images/logo.png'

const { primary, light } = colors
const { small, normal, medium, big } = sizes

const StyledHeader = styled.header`
  .site-top {
    background: ${light};
    height: 45px;

    .layout-width {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        height: 45px;

        a + a {
          margin-left: 10px;
        }
      }

      svg {
        font-size: ${big};
      }
    }
  }

  .logo-search {
    .layout-width {
      display: flex;
      justify-content: space-between;
    }
  }
`
const StyledForm = styled.form``
const StyledMenu = styled.menu``

const Header = () => {
  return (
    <StyledHeader>
      <div className="site-top">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <FaHome />
            </Link>
          </div>
          <div className="right">
            <Link href="/member/join">
              <FaUserPlus /> 회원가입
            </Link>
            <Link href="/member/login">
              <SlLogin /> 로그인
            </Link>
          </div>
        </div>
      </div>
      {/* site-top */}
      <div className="logo-search">
        <div className="layout-width">
          <div className="left">
            <Link href="/">
              <Image src={logo} alt="로고" />
            </Link>
          </div>

          <div className="right">
            <StyledForm method="GET" action="/board/search" autoComplete="off">
              <input
                type="text"
                name="skey"
                placeholder="검색어를 입력하세요."
              />
              <button type="submit">
                <FaSearch />
              </button>
            </StyledForm>
          </div>
        </div>
      </div>
      {/* logo-search */}
      <StyledMenu>
        <div className="layout-width"></div>
      </StyledMenu>
    </StyledHeader>
  )
}

export default React.memo(Header)
