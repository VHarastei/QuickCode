import { fireEvent, render } from '@testing-library/react';
import { CustomModal } from 'components/CustomModal';

describe('CustomModal component', () => {
  it('modal shows the children and a close button', () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <CustomModal isOpen={true} setIsOpen={handleClose}>
        <div>test</div>
        <button onClick={handleClose}>close</button>
      </CustomModal>
    );
    expect(getByText('test')).toBeTruthy();

    fireEvent.click(getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
