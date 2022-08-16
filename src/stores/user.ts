import { writable } from 'svelte/store';

type User = {
  id: number,
  email: string,
  name: string
}

function createUser() {
	const { subscribe, set, update } = writable(null as User | null);

	return {
		subscribe,
		create: (data: User) => update(n => {
      // localStorage.setItem('user', JSON.stringify(data));
      return data
    }),
		reset: () => {
      // localStorage.setItem('user', 'null');
      set(null)
    }
	};
}

function createToken() {
	const { subscribe, set, update } = writable(null as string | null);

	return {
		subscribe,
		create: (data: string) => update(n => {
      // localStorage.setItem('token', JSON.stringify(data));
      return data
    }),
		reset: () => {
      // localStorage.setItem('token', 'null');
      set(null)
    }
	};
}

export const user = createUser();

export const token = createToken();