import React, { useState } from 'react'
import Navbar from '../components/navbar'
import useCreateFolder from '../hooks/useCreateFolder';

const HomePage = () => {
  const [newFolder, setNewFolder] = useState("");
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const {createFolder} = useCreateFolder();

  const handleAllowCreateFolder = () => {
    setShowCreateFolder(true);
  }

  const handleCreateFolder = () => {
    if(newFolder.length > 0) {
      createFolder({
        name: newFolder,
      });
    }
    setShowCreateFolder(false);
  }



  return (
    <>
      <Navbar />
     <div className="homepage-main-container">
     <h3>Welcome, User</h3>
     <button onClick={handleAllowCreateFolder}>Create Folder</button>
     <button>Upload File</button>
     <div>
        {
          showCreateFolder && (
            <div>
            <input type="text" value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
            <button onClick={handleCreateFolder}>Yes</button>
            <button onClick={() => setShowCreateFolder(false)}>No</button>
            </div>
          )
        }
     </div>
     </div> 

    </>
  )
}

export default HomePage
