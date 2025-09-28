// Système d'authentification simple avec comptes pré-enregistrés
export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  type: 'owner' | 'sitter' | 'admin';
  isVerified: boolean;
}

// Base de données simulée des utilisateurs
export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'admin@dogwalking.fr',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'DogWalking',
    type: 'admin',
    isVerified: true
  },
  {
    id: '2',
    email: 'marie.sitter@dogwalking.fr',
    password: 'sitter123',
    firstName: 'Marie',
    lastName: 'Dupont',
    type: 'sitter',
    isVerified: true
  },
  {
    id: '3',
    email: 'jean.owner@dogwalking.fr',
    password: 'owner123',
    firstName: 'Jean',
    lastName: 'Martin',
    type: 'owner',
    isVerified: true
  }
];

export const authenticateUser = (email: string, password: string): User | null => {
  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  return user || null;
};

export const registerUser = (userData: Omit<User, 'id' | 'isVerified'>): User => {
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    isVerified: false
  };
  
  MOCK_USERS.push(newUser);
  return newUser;
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const setCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

export const logout = (): void => {
  localStorage.removeItem('currentUser');
};
