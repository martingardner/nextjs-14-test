import Link from 'next/link';

export default function DashboardLayout({ children }) {
    return (
        <section>
        <nav>
            <Link href="/lizard/raptor">Raptor</Link>
            <Link href="/lizard/tyrant">Tyrant</Link>
        </nav>
        {children}
        </section>
    )
}