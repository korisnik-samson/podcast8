'use client';

import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
    const pathname = usePathname();
    const router: AppRouterInstance = useRouter();

    return (
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6'>
                <Link href='/' className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                    <Image src='/logo-rb-text.svg' alt='logo' width={246} height={246} />
                    {/*<h1 className='text-24 font-extrabold text-white max-lg:hidden'></h1>*/}
                </Link>

                {sidebarLinks.map(({ route, imgURL, label }) => {
                    const isActive = pathname === route || pathname.startsWith(`${route}/`);

                    return (
                        <Link key={label} href={route} className={cn('flex gap-3 items-center py-4 max-lg:px04 justify-center' +
                            ' lg:justify-start', {'bg-nav-focus border-r-4 border-red-500': isActive})}>
                            <Image src={imgURL} alt='label' width={24} height={24} />
                            <p>{label}</p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    );
}

export default LeftSidebar;