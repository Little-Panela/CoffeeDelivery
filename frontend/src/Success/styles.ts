import styled from "styled-components";

export const SuccessBox = styled.main`
h1{
  position: absolute;
width: 353px;
height: 42px;
left: calc(50% - 353px/2 - 383.5px);
top: 184px;

/* Title/Title L */

font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 130%;
/* identical to box height, or 42px */


/* Brand / Yellow Dark */

color: #C47F17;
}
h2{
  position: absolute;
  width: 552px;
  height: 26px;
  left: 240px;
  top: 230px;
  
  /* Text/Regular L */
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */
  
  
  /* Base/Subtitle */
  
  color: #403937;
  font-stretch: 100;

}
`
export const ClientInfo= styled.div`

box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

position: absolute;
width: 526px;
height: 270px;
left: calc(50% - 526px/2 - 297px);
top: 296px;

border-radius: 6px 36px;
border:1px solid rgba(219, 172, 44, 1);


h1{
width: 310px;
height: 42px;



/ width: 262px;
height: 42px;

/* Text/Regular M */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* or 21px */


/* Base/Text */

color: #574F4D;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}

h2{
  width: 141px;
height: 42px;



/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}

h3{
  width: 300px;
  height: 2px;
margin-bottom: 20px;

/* Text/Regular M */

font-family: 'Roboto';

font-weight: 400;
font-size: 16px;

/* or 21px */


/* Base/Text */

color: #574F4D;


/* Inside auto layout */

// flex: none;
// order: 1;
// flex-grow: 0;
}
`