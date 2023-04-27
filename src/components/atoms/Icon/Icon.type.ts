enum EIcons {
  WARNING,
}

interface IIconProps {
  icon: EIcons
  size?: string
  color?: string
}

export { EIcons }
export type { IIconProps }
