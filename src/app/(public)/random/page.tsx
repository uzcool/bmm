import MainPage from '@/components/MainPage'
import PublicBookmarkController from '@/controllers/PublicBookmark.controller'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: '随便看看',
}

export default async function Page() {
  const res = await PublicBookmarkController.random()
  return <MainPage bookmarks={res.list} />
}
