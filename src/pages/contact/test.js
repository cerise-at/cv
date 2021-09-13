import { screen } from '@testing-library/react';
import Contact from '.'
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Contact', () => {

    let numLinks;

    beforeEach(async ()=> {
        render(<Contact />)
        numLinks = await screen.getAllByRole('link');
    })

    test('it shows three links', async () => {
        expect(numLinks).toHaveLength(3)
    })

})