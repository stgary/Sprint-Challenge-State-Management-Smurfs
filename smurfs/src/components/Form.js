import React, { useContext } from 'react';
import { FormContext } from '../contexts'

const Form = () => {

    const { formValues, onInputChange, onSubmit } = useContext(FormContext);

    return (
        <div>
            <form className='form-container' onSubmit={onSubmit}>
                <div className='form-inputs'>
                    <label>Name&nbsp;
                    <input
                        value={formValues.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                    </label>
                    <label>Age&nbsp;
                    <input
                        value={formValues.age}
                        onChange={onInputChange}
                        name='age'
                        type='text'
                    />
                    </label>
                    <label>Height&nbsp;
                    <input
                        value={formValues.height}
                        onChange={onInputChange}
                        name='height'
                        type='text'
                    />
                    </label>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;