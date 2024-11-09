import SidebarAdmin from '../components/Admin/SidebarAdmin';
import FooterAdmin from '../components/Admin/FooterAdmin';
import NavbarAdmin from '../components/Admin/NavbarAdmin';

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden relative">
      <SidebarAdmin />
      <div className="flex flex-col flex-1">
        <NavbarAdmin />
        <div className="flex-1 overflow-auto bg-gray-100 px-8 pt-16 md:pt-10 md:ml-64">
          <div id="content" className="pt-6 md:pt-12">
            {children}
          </div>
        </div>
        <FooterAdmin />
      </div>
    </div>
  );
}

export default AdminLayout;
