export interface NavbarWrapperProps extends SideBarWrapperProps {
    children?: React.ReactNode;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SideBarWrapperProps {
    collapsed: boolean
}