import AppFooter from "@/components/common/AppFooter"
import AppHeader from "@/components/common/AppHeader"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}
