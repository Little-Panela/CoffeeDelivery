import styled from "styled-components";

export const ItensContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0px px;
`;
export const ItensWrapper = styled.div`
  margin-left: 100px;
`;
export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`;
export const HomeWrapper = styled.section`

  position: absolute;
  height: 300px;
 
  left: 16px;
  right: -16px;
  top: 104px;

  background: #FAFAFA
  
  }
`;
export const CoffeeContainer = styled.div`
  margin-top: 80px;
  span {
    font-size: 25px;
    font-weight: bold;
  }
`;

export const TypeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding: 4px 8px;
  margin-top: 80px;
  margin-left: 80px;

  width: 81px;
  height: 21px;

  background: #f1e9c9;
  border-radius: 100px;

  a {
    width: 588px;
    height: 52px;
    margin-top: 40px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: bold;
    font-size: 12px;

    color: #c47f17;
    font-stretch: 100;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: center;
    flex-grow: 0;
  }
`;
export const TypeBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 8px 0 8px;
  margin-top: 80px;

  width: 61px;
  height: 21px;

  background: #f1e9c9;
  border-radius: 100px;

  a {
    width: 588px;
    height: 52px;
    margin-top: 40px;

    font-family: "Roboto";

    font-weight: bold;
    font-size: 9px;

    color: #c47f17;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: center;
    flex-grow: 0;
  }
`;
export const TypeName = styled.html`
  width: 588px;
  height: 52px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  color: #403937;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: center;
  flex-grow: 0;
`;

export const CoffeeName = styled.html``;

export const CoffeeWrapper = styled.div`
width: 256px;
height: 310px;
margin-left: 25px;
border-radius: 6px 36px;
background-color:#F3F2F2;
margin-bottom:20px;



h5{
 

/* Title/Title S */

font-family: 'Baloo 2';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
margin:10

display: flex;

text-align: center;

/* Base/Subtitle */

color: #403937;

}
h4{
  
  height: 36px;
  left: 20px;
  right: 20px;
  top: 183px;
  
  /* Text/Regular S */
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */
  
  text-align: center;
  
  /* Base/Label */
  
  color: #8D8686;
}
span{


width: 67px;
height: 31px;

font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 130%;
/* or 31px */

margin-right: 150px;

/* Base/Text */

color: #574F4D;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
`;
export const Counter = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 10px;

  width: 72px;
  height: 28px;

  background: #e6e5e5;
  border-radius: 6px;
`;

export const HomeTextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 150px;
  // max-width: 55ch;
  span {
    width: 400px;
    height: 100px;
    font-family: "Roboto";
    font-size: 16px;
    display: flex;
    align-self: flex-start;
    margin-bottom: 10px;
  }
  h1 {
    display: flex;
    flex-content: flex-start;
    margin-top: 10px;
    font-family: "Baloo 2";
    font-weight: bold;
    font-size: 25px;
    width: 410px;
    height: 70px;
  }
  p {
    width: 200px;
    height: 30px;
    font-size: 12px;
  }
  img {
    width: 261.64px;
    height: 340px;
  }
`;

export const ButtonPlus = styled.button`
  color: #8047f8;
  border-color: #e6e5e5;
`;
export const ButtonMenos = styled.button`
  color: #8047f8;
  border-color: #e6e5e5;
`;

export const ServicesWrapper = styled.section`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // gap: 4rem;
  // padding: 10rem 7.625rem;
  // @media (max-width: 900px) {
  //   gap: 3.75rem;
  //   padding: 10rem 1.9rem;
  // }
`;
export const ServicesTextField = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // gap: 1rem;
  // text-align: center;
  // strong {
  //   font-size: 0.87rem;
  //   color: ${(props) => props.theme["green-500"]};
  // }
  // span {
  //   max-width: 19ch;
  //   font-size: 2.5rem;
  //   font-weight: 700;
  //   line-height: 3.25rem;
  //   color: ${(props) => props.theme["gray-900"]};
  //   @media (max-width: 900px) {
  //     font-size: 1.875rem;
  //   }
  // }
`;
export const AboutUsWrapper = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // background-color: ${(props) => props.theme["gray-100"]};
  // padding: 10rem 7.6rem;
  // gap: 4.1rem;
`;
export const AboutUsTextField = styled.div`
  // strong {
  //   font-size: 0.87rem;
  //   color: ${(props) => props.theme["green-500"]};
  // }
  // h1 {
  //   font-weight: bold;
  //   font-size: 2.5rem;
  //   margin-bottom: 1.5rem;
  //   max-width: 15ch;
  // }
  // p {
  //   font-size: 1rem;
  //   max-width: 50ch;
  // }
`;
export const DoctorSeuZupa = styled.div`
  // background-color: ${(props) => props.theme["gray-400"]};
  // background-size: cover;
  // width: 480px;
  // height: 414px;
  // @media (max-width: 900px) {
  //   width: 261.64px;
  //   height: 340px;
  // }
`;
export const ContactWrapper = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // background-color: ${(props) => props.theme.white};
  // padding: 10rem 7.6rem;
  // gap: 4.1rem;
`;
export const ContactTextField = styled.div`
  // display: flex;
  // flex-direction: column;
  // //padding: 10px;
  // strong {
  //   font-size: 0.87rem;
  //   color: ${(props) => props.theme["green-500"]};
  // }
  // div {
  //   flex-direction: column;
  // }
  // span {
  //   gap: 1.5rem;
  // }
`;

export const ContactPic = styled.div`
  // display: flex;
  // flex-direction: column;
  // margin-top: 1.5rem;
  // margin-bottom: 1rem;
  // gap: 1rem;
  // div {
  //   display: flex;
  //   flex-direction: row;
  //   align-items: center;
  //   gap: 0.5rem;
  // }
`;

export const ButtonContact = styled.div``;
