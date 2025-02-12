export interface IPlaylistsItem {
  id: number
  name: string
  lang_id: number
  title: string
  is_has_video: boolean
  url_alias: string
}

export interface ISpecificCateDataItem<T = IPlaylistsItem> {
  id: number
  name: string
  title: string
  first_playlist_id: number
  category_id: number
  category_name: string
  category_caption: string
  category_url_alias: string
  playlists: Array<T>
  isExpand?: boolean
}

interface IAtomsItem<T = any> {
  id: number
  type: string
  value: T
}

export interface IArticleDataRecord<T = IAtomsItem> {
  id: number
  name: string
  title: string
  meta: null
  category_id: number
  category_name: string
  category_title: string
  category_url_alias: string
  bundle_id: number
  url_alias: string
  atoms: Array<T>
  next_playlist: any
}
