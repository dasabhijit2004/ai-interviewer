import { Briefcase, Calendar, Code, Component, LayoutDashboard, List, Puzzle, Settings, User, WalletCards } from "lucide-react";

export const SidebarOptions = [
    {
        name: 'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard'
    },
    {
        name: 'Scheduled Interview',
        icon: Calendar,
        path: '/scheduled-interview'
    },
    {
        name: 'All Interview',
        icon: List,
        path: '/all-interview'
    },
    {
        name: 'Billing',
        icon: WalletCards,
        path: '/billing'
    },
    {
        name: 'Settings',
        icon: Settings,
        path: '/settings'
    },
]

export const InterviewOptions = [
    {
        icon: Code,
        type: 'Technical'
    },
    {
        icon: User,
        type: 'Behavioral'
    },
    {
        icon: Briefcase,
        type: 'Experience'
    },
    {
        icon: Puzzle,
        type: 'Problem Solving'
    },
    {
        icon: Component,
        type: 'Leadership'
    },
]