import Link from "next/link";
import logoImg from "@/assets/icon.png";

export default function MainHeader() {
    return (
        <header>
            <Link href="/">
                <img src={logoImg.src} alt="Kawa Logo" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}