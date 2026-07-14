import { useState } from 'react';
import Sidebar, { TabId } from './components/Sidebar';
import Header from './components/Header';
import HomeView from './components/views/HomeView';
import OpportunitiesView from './components/views/OpportunitiesView';
import ProfileView from './components/views/ProfileView';
import ProjectsView from './components/views/ProjectsView';
import ServicesView from './components/views/ServicesView';
import LiveChat from './components/LiveChat';
import PlaceholderView from './components/views/PlaceholderView';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home': return <HomeView />;
      case 'opportunities': return <OpportunitiesView />;
      case 'profile': return <ProfileView />;
      case 'projects': return <ProjectsView />;
      case 'services': return <ServicesView />;
      case 'messages': return (
        <div className="max-w-4xl mx-auto py-8">
          <LiveChat />
        </div>
      );
      default: return <PlaceholderView tabId={activeTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-enki-dark text-white font-jakarta">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header activeTab={activeTab} />
        <main className="ml-64 flex-1 overflow-x-hidden">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
