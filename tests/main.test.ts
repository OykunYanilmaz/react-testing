import { it, expect, describe } from 'vitest'
import { faker } from '@faker-js/faker';

describe('group', () => {
    it('should', async () => {
        const response = await fetch('/categories');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = await response.json();
        console.log(data);

        expect(data).toHaveLength(3);
    })

    it('should', () => {
        console.log({
            name: faker.commerce.productName(),
            price: faker.commerce.price({ min: 1, max: 100 })
        })
    })
})