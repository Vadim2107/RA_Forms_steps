import React from 'react';

function Form(props) {
    const {form, onSubmit, onChange} = props;
    
    return (
        <form onSubmit={onSubmit}>        
            <div className='form'>
                <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
                <input id="date" name="date" value={form.date} onChange={onChange} />
            </div>
            <div className='form'>
                <label htmlFor="distance">Пройдено км</label>
                <input id="distance" name="distance" value={form.distance} onChange={onChange} />
            </div>
            <button type="submit" className="submit" onClick={onSubmit}>ОК</button>
        </form>
    );
}

export default Form;
