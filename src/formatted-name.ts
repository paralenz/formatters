type User = {
  readonly firstName?: string | null
  readonly middleName?: string | null
  readonly lastName?: string | null
}

export const formattedName = (user: Partial<User> | null | undefined) => {
  if (!user) return null

  return [
    user.firstName,
    user.middleName,
    user.lastName
  ]
    .filter(Boolean)
    .join(' ')
}
