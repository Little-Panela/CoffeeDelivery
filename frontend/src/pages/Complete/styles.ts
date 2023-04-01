import styled from "styled-components";

export const CompleteContainer = styled.main`
`;

export const AddressContainer = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;

position: absolute;
width: 640px;
height: 591px;
left: 160px;
top: 182px;`;
export const AddressCard = styled.div`
Width:640px
Height(372px)
Radius
6px
Padding
40px
Gap
32px
Base/Card
#F3F2F2
/* Coffee Card */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;

width: 640px;
height: 320px;

/* Base/Card */

background: #F3F2F2;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

h1{
  width: 530px;
height: 21px;

/* Text/Regular M */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */

display: flex;
align-items: center;

/* Base/Subtitle */

color: #403937;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}

h2{
  width: 530px;
height: 21px;

/* Text/Regular S */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;


display: flex;
align-items: center;
margin-left: 20px;
margin-bottom: 20px;

/* Base/Text */

color: #574F4D;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}
`;

export const CEPInput = styled.input`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

width: 200px;
height: 42px;

maring-top: 20px;
/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

export const NumberInput = styled.input`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;


width: 200px;
height: 42px;

/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;`;
export const InforBox = styled.div `
/* Info */


/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;

margin-top: 20px;
width: 560px;
height: 42px;


/* Inside auto layout */

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;
`;

export const NeighborhoodInput = styled.input`
/* Input */


box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;


width: 200px;
height: 42px;

/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;`;

export const CityInput = styled.input `
/* Input */


box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

width: 276px;
height: 42px;

/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;`;

export const BillInput = styled.input`
/* Input */


box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

width: 60px;
height: 42px;

/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`;

export const AddressInfoBox = styled.div`
/* Info */


/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 12px;

margin-top: 20px;
width: 560px;
height: 42px;


/* Inside auto layout */

flex: none;
order: 3;
align-self: stretch;
flex-grow: 0;
`;

export const AddressInput = styled.input`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

margin-top: 20px;
width: 560px;
height: 42px;

/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`;

export const ComplementoInput = styled.input`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 12px;
gap: 4px;

width: 348px;
height: 42px;

/* Base/Input */

background: #EEEDED;
/* Base/Button */

border: 1px solid #E6E5E5;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;`;
export const PaymentCard = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 32px;
margin-top: 10px;

width: 640px;
height: 170px;

/* Base/Card */

background: #F3F2F2;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

h3{
  width: 530px;
height: 21px;

/* Text/Regular M */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
/* identical to box height, or 21px */

display: flex;
align-items: center;

/* Base/Subtitle */

color: #403937;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}

p{

  width: 530px;
height: 21px;

/* Text/Regular S */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 130%;
/* or 18px */

display: flex;
align-items: center;
margin-left: 20px;
/* Base/Text */

color: #574F4D;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

}
`;

export const PaymenteContainer = styled.div``
export const PaymentInforBox = styled.div `
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 8px;

width: 560px;
height: 44px;


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;




`;

export const UserPayment = styled.button`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 16px;
gap: 12px;

width: 178.67px;
height: 51px;

/* Brand/Purple Light */

background: #EBE5F9;
/* Brand/Purple */

border: 1px solid #8047F8;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 1;

h1{
  
width: 125px;
height: 19px;
margin-bottom: 20px;
margin-left: 5px;

/* Components/Button S */

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 160%;
/* or 19px */

text-transform: uppercase;

/* Base/Text */

color: #574F4D;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
`

export const CoffeeCard = styled.div`
/* Coffee Card */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 24px;

position: absolute;
width: 448px;
height: 498px;
left: 832px;
top: 182px;

/* Base/Card */

background: #F3F2F2;
border-radius: 6px 44px;
`;

export const InfoCard = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 20px;

width: 255px;
height: 64px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

h1{
  /* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 20px;

width: 255px;
height: 64px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
`;

export const TotalCard = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;
gap: 12px;

width: 368px;
height: 92px;


/* Inside auto layout */

flex: none;
order: 4;
align-self: stretch;
flex-grow: 0;
`;

export const ConfirmButton = styled.button`
/* Button */


/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 8px;
gap: 4px;

width: 368px;
height: 46px;

/* Brand / Yellow */

background: #DBAC2C;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 5;
align-self: stretch;
flex-grow: 0;

h2{
  width: 133px;
height: 22px;

/* Components/Button G */

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 160%;
/* or 22px */

text-transform: uppercase;

/* Base/White */

color: #FFFFFF;
font-stretch: 100;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
`;