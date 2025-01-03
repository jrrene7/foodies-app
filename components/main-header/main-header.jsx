"use client"
import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MainHeaderBackground from "../main-header-background/main-header-background";
import NavLink from "../nav-link/nav-link";

export default function MainHeader () {
  const path = usePathname();
  return (
    <>
    <MainHeaderBackground />
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={LogoImg} alt="a plate with food on it as a logo" priority />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}