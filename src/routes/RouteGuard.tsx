import { ReactNode } from "react"

interface IProps {
  component: ReactNode
}

export const RouteGuard: React.FC<IProps> = ({ component }) => {
  return (
    <div>
      {component}
    </div>
  )
}