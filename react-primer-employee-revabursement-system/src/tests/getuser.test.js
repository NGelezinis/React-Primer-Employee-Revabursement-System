import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GetUserById from '../components/getuser';

describe('\'Get users page\' rendering', () => {
    const id = '1';

    it('Displays the correct user info', async () => {
        const { getByText } = render(<GetUserById userid={id} />);
        expect(await screen.findByText(/Id:/)).toBeVisible();
    
    
        const userid = getByText(/Id:/);
        expect(userid).toHaveTextContent(/Id:/);
    });

    it('Displays \'no user info\'', () => {
        const { getByText } = render(<GetUserById username='Bob' />);
        expect(getByText(/No data found/)).toHaveTextContent('No data found')
    })
})