import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);
  height: 100vh;
  padding: 80px;
  div {
    width: 100%;
    h1 {
      color: #fff;
    }
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  overflow: hidden;

  text-align: center;
  color: transparent;
  backface-visibility: hidden;
  span {
    display: inline-block;
    text-shadow: 0 0 0 whitesmoke;
    animation: smoky 5s 1s both;
  }

  span:nth-child(even) {
    animation-name: smoky-mirror;
  }

  @keyframes smoky {
    60% {
      text-shadow: 0 0 40px whitesmoke;
    }
    to {
      transform: translate3d(15rem, -8rem, 0) rotate(-40deg) skewX(70deg)
        scale(1.5);
      text-shadow: 0 0 20px whitesmoke;
      opacity: 0;
    }
  }

  @keyframes smoky-mirror {
    60% {
      text-shadow: 0 0 40px whitesmoke;
    }
    to {
      transform: translate3d(18rem, -8rem, 0) rotate(-40deg) skewX(-70deg)
        scale(2);
      text-shadow: 0 0 20px whitesmoke;
      opacity: 0;
    }
  }

  @for $item from 1 through 21 {
    span:nth-of-type(#{$item}) {
      animation-delay: #{(3 + ($item/10))}s;
    }
  }
`;

export const Error404 = styled.img`
  margin-top: 80px;
  width: 500px;
  opacity: 0;
  transform: scale(1.5);
  animation: animeleft 3s forwards;
  @keyframes animeleft {
    to {
      opacity: initial;
      transform: rotateZ(0);
    }
  }
`;
