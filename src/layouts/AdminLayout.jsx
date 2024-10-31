import Sidebar from '../components/Admin/Sidebar';
import Footbar from '../components/Admin/Footbar';

function AdminLayout({ children }) {
  return (
    <>
      <Sidebar />
      <div className='md:ml-64 bg-gray-100'>
        <div id="content" className="p-6 mt-20 md:mt-0 overflow-x-auto">
            {children}
        </div>
        <Footbar/>
      </div>
    </>
  );
}

export default AdminLayout;
