type TWithSnackbar<TResponse> = TResponse & {
  snackbar: {
    message: string
    type: string
    description: string
  }
}

export type { TWithSnackbar }
