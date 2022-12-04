const rows = [
  { id: 1, name: 'Luke Skywalker', email: 'luke.skywalker@starwars.com' },
  { id: 2, name: 'R2-D2', email: 'r2d2@starwars.com' },
  { id: 3, name: 'Darth Vader', email: 'darth.vader@starwars.com' },
  { id: 4, name: 'Leia Organa', email: 'leia.organa@starwars.com' },
  { id: 5, name: 'Owen Lars', email: 'owen.lars@starwars.com' },
];

export const getCustomers = (): Promise<Array<{ id: number, name: string, email: string}>> => {
  return new Promise((resolve) => {
      resolve(rows);
  });
};

export const getCustomerById = (id: number): Promise<{ id: number, name: string, email: string}> => {
    return new Promise((resolve) => {
        const result = rows.find(row => row.id === id);
        resolve(result);
    });
}