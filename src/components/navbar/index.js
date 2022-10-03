import { useState } from 'react';
import Link from 'next/link';

// icon
import { Icon } from '@iconify/react';

// context
import { useTheme } from '@/contexts/ThemeMode';

// components
import Sidebar from './Sidebar';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <>
            <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
            <nav className="bg-paper-neutral w-full  h-navbar flex items-center px-4 gap-x-4">
                <Icon icon="ic:twotone-menu" onClick={() => setIsSidebar(true)} className="w-6 h-6" />
                <h1 className="mr-auto">juzcare</h1>
                <section className="flex  items-center gap-x-6">
                    <Link href="/">
                        <h3>home</h3>
                    </Link>
                    <Link href="/rickandmorty">
                        <h3>Rick</h3>
                    </Link>
                    <Link href="/rickandmorty-serverside">
                        <h3>Rick-ssr</h3>
                    </Link>
                </section>
                <div className="flex items-center gap-x-6">
                    <h3 className="ml-auto">about us</h3>
                    <Icon
                        onClick={() => toggleTheme()}
                        icon={theme === 'light' ? 'ic:twotone-dark-mode' : 'ic:twotone-light-mode'}
                        className="w-5 h-5"
                    />
                </div>
            </nav>
        </>
    );
};

export default NavBar;
