import { LabelName } from '@/utils/constants/labelName'

/**
 * フォームラベルの名前
 */
export const getFormLabelName = (status: string): string => {
  switch (status) {
    case LabelName.EMAIL:
      return 'メールアドレス'
    case LabelName.PASSWORD:
      return 'パスワード'
    case LabelName.PASSWORD_CONFIRM:
      return 'パスワード(再確認)'
    default:
      return 'TOP'
  }
}
