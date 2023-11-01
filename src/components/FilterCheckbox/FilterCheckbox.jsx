
import './FilterCheckbox.css';

export default function FilterCheckbox({ isCheck, changeShort }) {

    return (
        <label className='search__label-container'>
          <div className='search__input-container'>
            <input type="checkbox" className='search__check' onChange={() => changeShort()} />
            <svg className='search__check-svg' width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="smalltumb">
                <rect
                  className={`search__check-svg-rect ${!isCheck ? 'search__check-svg-rect_active' : ''}`}
                  id="tumb__COLOR:tumbler-on" width="34" height="16" rx="10" fill="#2BE080"
                />
                <circle
                  className={`search__check-svg-circle ${!isCheck ? 'search__check-svg-circle_active' : ''}`}
                  id="tumb__COLOR:tumbler-on-2" cx="24" cy="7" r="5" fill="white"
                />
              </g>
            </svg>
          </div>
          <span className='search__check-text'>Короткометражки</span>
        </label>
      )
    }