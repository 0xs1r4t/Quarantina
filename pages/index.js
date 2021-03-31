import Head from "next/head";
import {
   ChatBg,
   ChatName,
   Msgs,
   SentMsg,
   RecMsg,
   Send,
   TxtBox,
   Txt,
   SendBtn,
   Mic,
} from "@styles/chats";

/* components */

/* main */
export default function Home() {
   return (
      <>
         <Head>
            <title>Quarantina</title>
            <meta
               name="description"
               content="this is quarantina, at ur service, ready to keep ur mind a lil busy during this boring ass quarantine 🤠"
            />
         </Head>
         <ChatBg>
            <ChatName>quarantina</ChatName>
            <Msgs>
               <SentMsg>omg so</SentMsg>
               <RecMsg>ye??</RecMsg>
               <SentMsg>hey there 🤠</SentMsg>
               <RecMsg>hi 🥺 uwu</RecMsg>
               <SentMsg>i wanna tell u smn</SentMsg>
               <RecMsg>ok go on 👀</RecMsg>
            </Msgs>
            <Send>
               <TxtBox>
                  <Mic className="fas fa-microphone" />
                  <Txt defaultValue="idk where to start lol" />
               </TxtBox>
               <SendBtn>send</SendBtn>
            </Send>
         </ChatBg>
      </>
   );
}
