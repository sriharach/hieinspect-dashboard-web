export interface BoxFileUploadProps {
    title?: string
    readonlySrc?: string
    checkPreview?: boolean
    onClick?():  void
    onChanageBoxFile?(event: React.ChangeEvent<HTMLInputElement>): void
    onRemoveCoverfile?(fileName: string): void
    isValid?: boolean
    messageError?: React.ReactNode
}