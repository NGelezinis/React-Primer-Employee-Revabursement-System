import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GetAllUsers from '../components/getallusers';

describe('\'Get users page\' rendering', () => {
    it('Displays the correct user info', async () => {
        const { getByText } = render(<GetAllUsers />);
        expect(await screen.findByText(/Users:/)).toBeVisible();
    
    
        const userid = getByText(/Users:/);
        expect(userid).toHaveTextContent(/Users:/);
    });
})