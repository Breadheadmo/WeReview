import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "./tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: FileText }
  ]

  return <NavBar items={navItems} />
}
