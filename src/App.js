import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoutiresPage from './pages/Favourites';
import Layout from './components/layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage/>} />
          <Route path="/new-meetup" element={<NewMeetupPage/>} />
          <Route path="/favourites" element={<FavoutiresPage/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
