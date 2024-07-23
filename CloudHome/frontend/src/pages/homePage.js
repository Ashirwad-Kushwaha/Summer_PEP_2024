import React, { useState } from 'react'
import Navbar from '../components/navbar'
import useCreateFolder from '../hooks/useCreateFolder';
import useGetFileFolders from '../hooks/useGetFileFolders';

const HomePage = () => {
  const [newFolder, setNewFolder] = useState("");
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const {createFolder} = useCreateFolder();
  const {getFileFolders, fileFolders} = useGetFileFolders();

  const handleAllowCreateFolder = () => {
    setShowCreateFolder(true);
  }

  const handleCreateFolder = async () => {
    if(newFolder.length > 0) {
      await createFolder({
        name: newFolder,
      });
      getFileFolders();
      setShowCreateFolder(false);
    }
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
            <div className='create-folder'>
            <input type="text" value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
            <button onClick={handleCreateFolder}>Yes</button>
            <button onClick={() => setShowCreateFolder(false)}>No</button>
            </div>
          )
        }
     </div>
     <div className="get-file-folders">
     {
       fileFolders.map((folder) => (
         <div key={folder._id} className="file-folder">
           {folder.name}
         </div>
       ))
     }
     </div>
     </div> 

    </>
  )
}

export default HomePage
