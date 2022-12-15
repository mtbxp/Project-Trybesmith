export interface User {
  id?: number,
  username: string,
  vocation: string,
  level: number,
}

export interface NewUser extends User {
  password: string,
}

export interface FoundUser extends User {
  password: string,
}

export interface Body {
  productsIds: number[],
  currentUser: {
    id: number,
    username: string,
    vocation: string,
    level: number,
    iat: number,
    exp: number
  }
}
