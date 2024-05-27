import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';
import NavBar from '../src/components/NavBar';
import AboutFurniture from '../src/components/AboutFurniture';
import ShopNow from '../src/components/ShopNow';
import NavPopUp from '../src/components/NavPopUp';

describe('App Component', () => {
  test('renders App component with NavBar, ShopNow, and AboutFurniture components', () => {
    render(<App />);
    
    // Check for NavBar
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
    
    // Check for initial ShopNow image
    const initialShopNowImage = screen.getByAltText('Product');
    expect(initialShopNowImage).toBeInTheDocument();
    
    // Check for AboutFurniture heading
    const aboutFurnitureHeading = screen.getByText('About our furniture');
    expect(aboutFurnitureHeading).toBeInTheDocument();
  });
});

describe('NavBar Component', () => {
  test('renders NavBar with logo and navigation links', () => {
    render(<NavBar />);
    
    // Check for logo
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
    
    // Check for navigation links
    const navLinks = screen.getAllByRole('listitem');
    expect(navLinks).toHaveLength(4);
  });
  
  test('opens NavPopUp when hamburger button is clicked', () => {
    render(<NavBar />);
    
    // Simulate click on hamburger button
    const hamburgerButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(hamburgerButton);
    
    // Check for NavPopUp
    const navPopup = screen.getByTestId('nav-popup');
    expect(navPopup).toBeInTheDocument();
  });
  
  test('closes NavPopUp when close button is clicked', () => {
    render(<NavBar />);
    
    // Simulate click on hamburger button to open NavPopUp
    const hamburgerButton = screen.getByLabelText('Open navigation menu');
    fireEvent.click(hamburgerButton);
    
    // Simulate click on close button to close NavPopUp
    const closeButton = screen.getByLabelText('Close navigation menu');
    fireEvent.click(closeButton);
    
    // Check that NavPopUp is not in the document
    const navPopup = screen.queryByTestId('nav-popup');
    expect(navPopup).not.toBeInTheDocument();
  });
});

describe('AboutFurniture Component', () => {
  test('renders AboutFurniture component with images and text', () => {
    render(<AboutFurniture />);
    
    // Check for dark image
    const darkImage = screen.getByAltText('image_dark');
    expect(darkImage).toBeInTheDocument();
    
    // Check for light image
    const lightImage = screen.getByAltText('image_light');
    expect(lightImage).toBeInTheDocument();
    
    // Check for heading
    const heading = screen.getByText('About our furniture');
    expect(heading).toBeInTheDocument();
    
    // Check for paragraph
    const paragraph = screen.getByText(/Our multifunctional collection blends design and function/);
    expect(paragraph).toBeInTheDocument();
  });
});

describe('ShopNow Component', () => {
  test('renders ShopNow component with initial image and text', () => {
    render(<ShopNow />);
    
    // Check for initial product image
    const initialImage = screen.getByAltText('Product');
    expect(initialImage).toBeInTheDocument();
    
    // Check for initial heading and caption
    const heading = screen.getByText('Discover innovative ways to decorate');
    expect(heading).toBeInTheDocument();
    
    const caption = screen.getByText(/We provide unmatched quality, comfort, and style/);
    expect(caption).toBeInTheDocument();
  });
  
  test('navigates to next image on right arrow click', () => {
    render(<ShopNow />);
    
    // Simulate click on right arrow
    const rightArrow = screen.getByAltText('Right Arrow');
    fireEvent.click(rightArrow);
    
    // Check for next image heading
    const nextHeading = screen.getByText('We are available all across the globe');
    expect(nextHeading).toBeInTheDocument();
  });
  
  test('navigates to previous image on left arrow click', () => {
    render(<ShopNow />);
    
    // Simulate click on left arrow
    const leftArrow = screen.getByAltText('Left Arrow');
    fireEvent.click(leftArrow);
    
    // Check for previous image heading
    const prevHeading = screen.getByText('Manufactured with the best materials');
    expect(prevHeading).toBeInTheDocument();
  });
});

describe('NavPopUp Component', () => {
  test('renders NavPopUp component with navigation links and close button', () => {
    const closePopup = jest.fn();
    render(<NavPopUp closePopup={closePopup} />);
    
    // Check for close button
    const closeButton = screen.getByLabelText('Close navigation menu');
    expect(closeButton).toBeInTheDocument();
    
    // Check for navigation links
    const navLinks = screen.getAllByRole('listitem');
    expect(navLinks).toHaveLength(4);
  });
  
  test('calls closePopup when close button is clicked', () => {
    const closePopup = jest.fn();
    render(<NavPopUp closePopup={closePopup} />);
    
    // Simulate click on close button
    const closeButton = screen.getByLabelText('Close navigation menu');
    fireEvent.click(closeButton);
    
    // Check that closePopup was called
    expect(closePopup).toHaveBeenCalledTimes(1);
  });
});
