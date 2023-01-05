import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailsHeader from '../components/DetailsHeader';

describe('DetailsHeader', () => {
  it('renders the logo image and the "Back" link', () => {
    render(<BrowserRouter><DetailsHeader /></BrowserRouter>);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
  });
});
