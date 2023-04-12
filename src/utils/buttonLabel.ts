import { LinkStatus } from '@/utils/constants'

/**
 * ボタンラベルの名前
 */
export const getLabelName = (status: string | undefined): string => {
  switch (status) {
    case LinkStatus.LOGIN:
      return 'ログイン'
    case LinkStatus.REGISTER:
      return '新規登録'
    default:
      return 'TOP'
  }
}
