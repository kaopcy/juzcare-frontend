import '../test/matchMedia.mock';
import Home from './index';

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('react-apexcharts', () => ({
      __esModule: true,
      default: () => <div />,
   }));
describe('Testing Home', () => {
   test('render navbar', () => {
      render(<Home />);
      expect(screen.getByDisplayValue("ให้เราช่วยเหลือคุณสิ!")).toBeInTheDocument()
   });
});
