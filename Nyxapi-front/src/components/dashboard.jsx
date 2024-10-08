import React from 'react';
import Navbar from './navbar';
import nyx from '../assets/nyxLogo.webp';  // Importing the logo

const ProjectDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-10 text-white bg-gray-900">
        {/* Main container */}
        <div className="px-6 mx-auto max-w-7xl">
  
          {/* Tabs Section (Projects, Members, etc.) */}
          <div className="flex mb-6 space-x-6 text-gray-400">
            <button className="text-white">Projects</button>
            <button>Members</button>
            <button>Usage</button>
            <button>Billing</button>
            <button>Settings</button>
          </div>
  
          {/* Projects Section */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <button className="px-4 py-2 font-semibold text-white bg-pink-600 rounded hover:bg-pink-700">
              + Create Project
            </button>
          </div>
  
          {/* Projects Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* First Project Card with Logo */}
            <div className="relative p-6 bg-gray-800 rounded-lg">
              <div className="flex items-center">
                {/* Small Logo */}
                <img 
                  src={nyx}  // Using the imported image for the logo
                  alt="Project Logo"
                  className="w-10 h-10 mr-3"
                />
                {/* Project Title */}
                <h3 className="text-lg font-semibold">NyxAPI Demo</h3>
              </div>
              <p className="mt-2 text-sm text-gray-400">NO APPS</p>
              <p className="mt-1 text-sm text-gray-400">Frankfurt</p>
            </div>
  
            {/* Create New Project Card */}
            <div className="flex items-center justify-center p-6 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700">
              <span className="text-xl">+ Create a new project</span>
            </div>
          </div>
  
          {/* Pagination and Project Count */}
          <div className="flex items-center justify-between mt-6">
            {/* Dropdown to select projects per page */}
            <div className="flex items-center space-x-2">
              <label className="text-gray-400">Projects per page:</label>
              <select className="px-3 py-2 text-white bg-gray-800 rounded">
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>
              <span className="text-gray-400">Total results: 1</span>
            </div>
  
            {/* Pagination Controls */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-400">Prev</button>
              <span className="text-gray-400">1</span>
              <button className="text-gray-400">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDashboard;
