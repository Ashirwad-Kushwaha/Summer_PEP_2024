import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import useCreateFolder from '../hooks/useCreateFolder';
import useGetFileFolders from '../hooks/useGetFileFolders';

const HomePage = () => {
  const [newFolder, setNewFolder] = useState("");
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const {createFolder} = useCreateFolder();
  const {getFileFolders, fileFolders} = useGetFileFolders();
  const [folderStructure, setFoldersStructure] = useState([{_id:null}]);

  const parentFolder = folderStructure[folderStructure.length - 1];

  const handleDoubleClick = (elem) => {
    setFoldersStructure([...folderStructure, elem]);
  }

  const handleAllowCreateFolder = () => {
    setShowCreateFolder(true);
  }

  const handleCreateFolder = async () => {
    if(newFolder.length > 0) {
      await createFolder({
        name: newFolder,
        parentId: parentFolder._id
      });
      getFileFolders(parentFolder._id);
      setShowCreateFolder(false);
    }
  }

  useEffect(() => {
    getFileFolders(parentFolder._id);
  }, [folderStructure])

  return (
    <>
      <Navbar />
     <div className="homepage-main-container">
     <h3>Welcome, User</h3>
     <div className="buttons">
     <button onClick={handleAllowCreateFolder} className='file-create'>Create Folder</button>
     <button className='file-upload'>Upload File</button>
     </div>
     <div className="create-folder-container">
        {
          showCreateFolder && (
            <div className='create-folder'>
            <input type="text" value={newFolder} onChange={(e) => setNewFolder(e.target.value)} />
            <button onClick={handleCreateFolder} className='yes-no'>Yes</button>
            <button onClick={() => setShowCreateFolder(false)} className='yes-no'>No</button>
            </div>
          )
        }
     </div>
     <div className="get-file-folders">
     {
       fileFolders.map((elem) => (
         <div key={elem._id} className="file-folder" onDoubleClick={() => handleDoubleClick(elem)}>
           {elem.name}
         </div>
       ))
     }
     </div>
     </div> 

    </>
  )
}

export default HomePage
