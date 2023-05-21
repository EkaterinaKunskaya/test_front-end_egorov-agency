import './Modal.scss';
import cross from '../assets/images/cross.svg';

export const Modal = props => {
    const { isOpened, onModalClose, success } = props;

    
        return (
            <div className={`modal__wrapper ${isOpened ? 'open' : 'close'}`} onClick={onModalClose}>
                <div className='modal__content'>
                <button className='button-close-cross' >
                    <img alt='' src={cross} onClick={onModalClose}/>
                </button>
                    <div className='modal__info'>
                        
                        <span className={`modal__info-title ${(!success)? 'modal-error': '' }`}>
                            {(success)? 'SUCCESS!' : 'ERROR!'}
                        </span>
                        <span className='modal__info-text'>
                        {(success)? 
                            'You have successfully subscribed to the email newsletter' : 
                            'Something went wrong.'}
                        </span>
                        <button className='button-close' onClick={onModalClose}>Close</button>
                        
                    </div>
                </div>
            </div>
        );
    
}