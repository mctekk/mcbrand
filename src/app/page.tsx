import { translate } from "@/locales";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{translate('base.hello')}</h1>
    </main>
  )
}
