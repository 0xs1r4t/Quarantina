import styled from "styled-components";

export const ChatBg = styled.div`
   width: 20em;
   height: 30em;
   margin: 20px;
   padding: 10px;
   background: var(--white);
   border: 2px solid var(--black);
   border-radius: 20px;
   box-shadow: 5px 5px #000;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
`;

export const ChatName = styled.div`
   text-align: center;
   text-transform: capitalize;
   font-size: 1.25em;
   font-weight: bold;
`;

export const Msgs = styled.div`
   width: 100%;
   height: 85%;

   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: baseline;
   overflow: hidden;
   overflow: -moz-scrollbars-none;
   -ms-overflow-style: none;

   ::-webkit-scrollbar {
      width: 0 !important;
   }
`;

export const SentMsg = styled.span`
   text-align: right;
   align-self: flex-end;
   background: var(--purple2);

   /* common styles */
   min-height: 1.75em;
   min-width: 1ch;
   max-width: 11em;
   border: 2px solid var(--black);
   border-radius: 15px;
   margin: 8px;
   padding: 6px 10px;
   font-weight: 500;
   position: relative;
`;

export const RecMsg = styled.span`
   text-align: left;

   /* common styles */
   min-height: 1.75em;
   min-width: 1ch;
   max-width: 11em;
   border: 2px solid var(--black);
   border-radius: 15px;
   margin: 8px;
   padding: 6px 10px;
   font-weight: 500;
   position: relative;
`;

export const Send = styled.div`
   width: 100%;
   display: flex;
   margin: 0 0 5px 0;
   height: 1.75em;
`;

export const TxtBox = styled.div`
   width: 100%;
   border: 2px solid var(--black);
   border-radius: 10px;
   margin: 0 10px 0 0;
   padding: 3px 10px;
   font-weight: 500;
   overflow: hidden;

   display: flex;
   justify-content: space-between;
`;

export const Mic = styled.button`
   border: 0;
   color: inherit;
   background-color: #0000;

   :hover {
      transform: scale(1.025);
   }

   :focus {
      border: 0;
      outline: none;
   }
`;

export const Txt = styled.textarea`
   text-align: right;
   border: 0;
   padding: 0;
   margin: 0;
   font-size: inherit;
   font-family: inherit;
   font-weight: inherit;
   resize: none;
   overflow: hidden;
   overflow: -moz-scrollbars-none;
   -ms-overflow-style: none;

   ::-webkit-scrollbar {
      width: 0 !important;
   }

   :focus {
      outline: none;
      border: 0;
   }
`;

export const SendBtn = styled.button`
   color: var(--white);
   background: var(--black);
   width: 5em;
   border: 1px solid #0000;
   border-radius: 10px;

   font-size: inherit;
   font-family: inherit;
   font-weight: 600;
   transition: all 0.25s linear;
   transform: scale(1);

   :hover {
      transform: scale(1.025);
   }

   :focus {
      border: 0;
      outline: none;
   }
`;
