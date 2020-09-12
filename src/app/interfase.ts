export interface NodeTree {
  parentId: number;
  id: number;
  name: string;
  children?: NodeTree[];
}

export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
