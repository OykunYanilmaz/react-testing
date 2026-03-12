import { it, describe } from 'vitest'
// import { faker } from '@faker-js/faker';
import { db } from './mocks/db';

describe('group', () => {
    // it('should', async () => {
    //     const response = await fetch('/categories');
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     const data = await response.json();
    //     console.log(data);

    //     expect(data).toHaveLength(3);
    // })

    it('should', () => {
        const product = db.product.create();
        console.log(db.product.delete({ where: { id: { equals: product.id } } }));
    })
})