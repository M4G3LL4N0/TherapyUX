import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

function BaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

export const Icons = {
  menu: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  ),

  home: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
    </BaseIcon>
  ),

  sparkles: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      <path d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z" />
    </BaseIcon>
  ),

  spinner: (props: IconProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="3"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),

  plus: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </BaseIcon>
  ),

  session: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M12 21c4.97 0 9-3.36 9-7.5S16.97 6 12 6 3 9.36 3 13.5 7.03 21 12 21Z" />
      <path d="M8.5 12.5c.8-1.2 2-1.8 3.5-1.8s2.7.6 3.5 1.8" />
      <path d="M9 15.5c.9.7 1.9 1 3 1s2.1-.3 3-1" />
      <path d="M9 9V4h6v5" />
    </BaseIcon>
  ),

  journal: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M7 4.5h8.5A2.5 2.5 0 0 1 18 7v12.5H9.5A2.5 2.5 0 0 0 7 22V4.5Z" />
      <path d="M7 4.5H6A2 2 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H18" />
      <path d="M9.5 8H15" />
      <path d="M9.5 11H15" />
      <path d="M9.5 14H13.5" />
    </BaseIcon>
  ),

  emergency: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M12 3 21 19H3L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </BaseIcon>
  ),

  mic: (props: IconProps) => (
    <BaseIcon {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
      <path d="M9 21h6" />
    </BaseIcon>
  ),

  chevronRight: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="m9 6 6 6-6 6" />
    </BaseIcon>
  ),

  chevronLeft: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="m15 6-6 6 6 6" />
    </BaseIcon>
  ),

  arrowRight: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </BaseIcon>
  ),

  check: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="m5 12 4.2 4.2L19 6.5" />
    </BaseIcon>
  ),

  settings: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="m18.4 5.6-2.1 2.1" />
      <path d="m7.7 16.3-2.1 2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </BaseIcon>
  ),

  shield: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M12 3 5 6v5c0 5 3.4 8.5 7 10 3.6-1.5 7-5 7-10V6l-7-3Z" />
    </BaseIcon>
  ),

  lock: (props: IconProps) => (
    <BaseIcon {...props}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </BaseIcon>
  ),

  chart: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-7" />
    </BaseIcon>
  ),

  trendUp: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 16 10 10l4 4 6-6" />
      <path d="M14 8h6v6" />
    </BaseIcon>
  ),

  trendDown: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 8 10 14l4-4 6 6" />
      <path d="M14 16h6v-6" />
    </BaseIcon>
  ),

  trendNeutral: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 12h16" />
    </BaseIcon>
  ),

  user: (props: IconProps) => (
    <BaseIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.8-3.5 5-5 8-5s6.2 1.5 8 5" />
    </BaseIcon>
  ),

  heart: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="m12 20-1.4-1.3C5.4 14 2 10.9 2 7.1 2 4.5 4 2.5 6.6 2.5c1.5 0 2.9.7 3.8 1.9.9-1.2 2.3-1.9 3.8-1.9C20 2.5 22 4.5 22 7.1c0 3.8-3.4 6.9-8.6 11.6L12 20Z" />
    </BaseIcon>
  ),

  brain: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M9 4a3 3 0 0 0-3 3v1a2.5 2.5 0 0 0-2 2.5A2.5 2.5 0 0 0 6 13v1a3 3 0 0 0 3 3" />
      <path d="M15 4a3 3 0 0 1 3 3v1a2.5 2.5 0 0 1 2 2.5A2.5 2.5 0 0 1 18 13v1a3 3 0 0 1-3 3" />
      <path d="M9 4c0 1.5 1 2.5 3 3 2-.5 3-1.5 3-3" />
      <path d="M9 17c0-1.5 1-2.5 3-3 2 .5 3 1.5 3 3" />
      <path d="M12 7v10" />
    </BaseIcon>
  ),

  flame: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M12 3s3 3 3 6a3 3 0 1 1-6 0c0-2 1-3.5 3-6Z" />
      <path d="M8 14a4 4 0 1 0 8 0c0-2.5-1.5-4-4-6-2.5 2-4 3.5-4 6Z" />
    </BaseIcon>
  ),

  meditation: (props: IconProps) => (
    <BaseIcon {...props}>
      <circle cx="12" cy="5" r="2.5" />
      <path d="M8 10c1.2 1 2.5 1.5 4 1.5s2.8-.5 4-1.5" />
      <path d="M7 14l2.5-2" />
      <path d="M17 14l-2.5-2" />
      <path d="M8 19l2-4h4l2 4" />
      <path d="M6 19h12" />
    </BaseIcon>
  ),

  breath: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 12c2-3 4-4 6-4 2.5 0 3.5 2 5.5 2 1.5 0 2.8-.8 4.5-2" />
      <path d="M4 16c2-3 4-4 6-4 2.5 0 3.5 2 5.5 2 1.5 0 2.8-.8 4.5-2" />
    </BaseIcon>
  ),

  trash: (props: IconProps) => (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M9 7V4h6v3" />
    </BaseIcon>
  ),
} as const
