import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage/HomePage";
import { Suspense } from "react";
import {TailSpin} from 'react-loader-spinner'
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import InboxPage from "./InboxPage/InboxPage";
import LivePollPage from "./LivePollPage/LivePollPage";
import AskQuestion from "./AskQuestionPage/AskQuestion";
import Participants from "./ParticipantsPage/Participants";
import EventAgenda from "./EventAgendaPage/EventAgenda";
import ParticipantProfile from "./ParticipantsPage/ParticipantProfile/ParticipantProfile";
import ParticipantChat from "./ParticipantsPage/ParticipantChat/ParticipantChat";
import ForgetPassword from "./SignUpPage/ForgetPassword";

function App() {
  return (
    <Layout>
      <Suspense 
          fallback={
            <TailSpin color="#00BFFF" height={80} width={80} />
          }
        />
      <Routes>
        <Route path="/" element={< HomePage />} />  
        <Route path="/sign-in" element={< SignInPage />} />  
        <Route path="/sign-up" element={< SignUpPage />} />  
        <Route path="/inbox" element={< InboxPage />} />  
        <Route path="/live-poll" element={< LivePollPage />} />  
        <Route path="/questions" element={< AskQuestion />} />  
        <Route path="/participants" element={< Participants />} />  
        <Route path="/participant-profile" element={< ParticipantProfile />} />  
        <Route path="/participant-chat" element={< ParticipantChat />} />  
        <Route path="/event-agenda" element={< EventAgenda />} />  
        <Route path="/forgot-password" element={< ForgetPassword />} />  
      </Routes>
    </Layout>
  );
}

export default App;