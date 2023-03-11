import { LayoutPage } from '@/layout/LayoutPage'
import { AuthView } from '@/View/AuthView'

export function Auth () {
  return (
    <LayoutPage bgPrimary slug>
      <AuthView />
    </LayoutPage>
  )
}

export default Auth
