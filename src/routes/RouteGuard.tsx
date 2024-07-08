import { ReactNode } from "react"
import { Menu } from "../submodule-components/src/components/Menu"

interface IProps {
  component: ReactNode
}

export const RouteGuard: React.FC<IProps> = ({ component }) => {
  return (
    <div>
      <Menu module="config" />
      {component}
    </div>
  )
}