type User = {
  readonly firstName?: string | null
  readonly middleName?: string | null
  readonly lastName?: string | null
}

export const formattedName = (user: User) => {
  if (!user) return null

  return [
    user.firstName,
    user.middleName,
    user.lastName
  ]
    .filter(Boolean)
    .join(' ')
}
