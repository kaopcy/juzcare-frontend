import { useState } from 'react';
import Link from '@/components/Link';
// icon
import { Icon } from '@iconify/react';
// context
import { useTheme } from '@/contexts/ThemeMode';
// components
import Sidebar from './Sidebar';
import Notification from './Notification';
// config
import { navItems } from './navbar.config'
import { PATH } from '@/routes/index';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isSidebar, setIsSidebar] = useState(false);
    
    return (
        <>
            <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
            <nav className="bg-paper-neutral w-full h-[60px] md:h-navbar flex items-center px-4 gap-x-4">
                <div className="w-full md:w-auto lg:w-full ">
                    <Icon icon="ic:twotone-menu" onClick={() => setIsSidebar(true)} className="w-6 h-6" />
                </div>
                <Link href={PATH.home} >
                    <h1 className="">JUZCARE</h1>
                </Link>
                <section className="flex  items-center gap-x-6 w-full justify-end">
                    {navItems.map((navItem) => (
                        <Link key={navItem.id} href={navItem.href}>
                            {({ isMatch }) => <h3 className={`hidden md:block cursor-pointer ${isMatch && ' underline '}`}>{navItem.name}</h3>}
                        </Link>
                    ))}
                    <Notification />
                    <Icon
                        onClick={() => toggleTheme()}
                        icon={theme === 'light' ? 'ic:twotone-dark-mode' : 'ic:twotone-light-mode'}
                        className="w-6 h-6"
                    />
                </section>
            </nav>
        </>
    );
};

export default NavBar;
