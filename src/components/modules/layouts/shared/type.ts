export interface NavbarWrapperProps {
    children?: React.ReactNode;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SideBarWrapperProps {
    collapsed: boolean
}