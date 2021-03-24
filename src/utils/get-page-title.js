import defaultSettings from '@/settings'

const title = defaultSettings.title || '记账本'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
