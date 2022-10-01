import React from 'react';
import Link from 'next/link';

const NavBar = () => (
    <nav className="bg-paper-neutral w-full  h-navbar flex items-center">
        <h1 className="mr-auto">juzcare</h1>
        <section className="flex  items-center gap-x-3">
            <Link href="/">
                <h1>home</h1>
            </Link>
            <Link href="/rickandmorty">
                <h1>rickmorty</h1>
            </Link>
            <Link href="/rickandmorty-serverside">
                <h1>rickandmorty-serverside</h1>
            </Link>
        </section>
        <div className="ml-auto">about us</div>
    </nav>
);

export default NavBar;
