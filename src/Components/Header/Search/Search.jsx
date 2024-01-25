import './Search.css';

const Search = () => {
    return (
        <div className="header__search search">
            <form className="search__form">
                <label className="search__label">
                    <span className="search__icon">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_3_322" fill="white">
                                <path d="M21.0312 18.8438C21.6172 19.4688 21.6172 20.4453 21.0312 21.0703C20.4062 21.6562 19.4297 21.6562 18.8047 21.0703L14.1562 16.3828C12.5547 17.4375 10.6016 17.9844 8.49219 17.7109C4.89844 17.2031 2.00781 14.2734 1.53906 10.7188C0.875 5.40625 5.36719 0.914062 10.6797 1.57812C14.2344 2.04688 17.1641 4.9375 17.6719 8.53125C17.9453 10.6406 17.3984 12.5938 16.3438 14.1562L21.0312 18.8438ZM4.58594 9.625C4.58594 12.3984 6.8125 14.625 9.58594 14.625C12.3203 14.625 14.5859 12.3984 14.5859 9.625C14.5859 6.89062 12.3203 4.625 9.58594 4.625C6.8125 4.625 4.58594 6.89062 4.58594 9.625Z"></path>
                            </mask>
                            <path d="M21.0312 18.8438C21.6172 19.4688 21.6172 20.4453 21.0312 21.0703C20.4062 21.6562 19.4297 21.6562 18.8047 21.0703L14.1562 16.3828C12.5547 17.4375 10.6016 17.9844 8.49219 17.7109C4.89844 17.2031 2.00781 14.2734 1.53906 10.7188C0.875 5.40625 5.36719 0.914062 10.6797 1.57812C14.2344 2.04688 17.1641 4.9375 17.6719 8.53125C17.9453 10.6406 17.3984 12.5938 16.3438 14.1562L21.0312 18.8438ZM4.58594 9.625C4.58594 12.3984 6.8125 14.625 9.58594 14.625C12.3203 14.625 14.5859 12.3984 14.5859 9.625C14.5859 6.89062 12.3203 4.625 9.58594 4.625C6.8125 4.625 4.58594 6.89062 4.58594 9.625Z" fill="#1E2832"></path>
                            <path d="M21.0312 18.8438L21.396 18.5018L21.3905 18.4959L21.3848 18.4902L21.0312 18.8438ZM21.0312 21.0703L21.3732 21.4351L21.385 21.424L21.396 21.4123L21.0312 21.0703ZM18.8047 21.0703L18.4497 21.4224L18.4561 21.4289L18.4627 21.4351L18.8047 21.0703ZM14.1562 16.3828L14.5113 16.0307L14.2231 15.7401L13.8813 15.9652L14.1562 16.3828ZM8.49219 17.7109L8.42223 18.2061L8.42791 18.2068L8.49219 17.7109ZM1.53906 10.7188L1.04291 10.7808L1.04335 10.7841L1.53906 10.7188ZM10.6797 1.57812L10.7451 1.08241L10.7417 1.08199L10.6797 1.57812ZM17.6719 8.53125L18.1678 8.46697L18.167 8.46129L17.6719 8.53125ZM16.3438 14.1562L15.9293 13.8765L15.6986 14.2183L15.9902 14.5098L16.3438 14.1562ZM20.6665 19.1857C21.0721 19.6184 21.0721 20.2957 20.6665 20.7283L21.396 21.4123C22.1623 20.595 22.1623 19.3191 21.396 18.5018L20.6665 19.1857ZM20.6893 20.7055C20.2566 21.1112 19.5793 21.1112 19.1467 20.7055L18.4627 21.4351C19.28 22.2013 20.5559 22.2013 21.3732 21.4351L20.6893 20.7055ZM19.1597 20.7182L14.5113 16.0307L13.8012 16.7349L18.4497 21.4224L19.1597 20.7182ZM13.8813 15.9652C12.3709 16.9599 10.5369 17.4718 8.55646 17.2151L8.42791 18.2068C10.6662 18.4969 12.7385 17.9151 14.4312 16.8004L13.8813 15.9652ZM8.56214 17.2159C5.19013 16.7394 2.4741 13.9849 2.03477 10.6534L1.04335 10.7841C1.54153 14.5619 4.60675 17.6669 8.42223 18.206L8.56214 17.2159ZM2.0352 10.6567C1.41158 5.66777 5.62871 1.45064 10.6177 2.07426L10.7417 1.08199C5.10567 0.377481 0.338419 5.14473 1.04292 10.7808L2.0352 10.6567ZM10.6143 2.07383C13.9459 2.51316 16.7003 5.22919 17.1768 8.60121L18.167 8.46129C17.6278 4.64581 14.5229 1.58059 10.7451 1.08242L10.6143 2.07383ZM17.176 8.59553C17.4329 10.5771 16.92 12.4089 15.9293 13.8765L16.7582 14.436C17.8769 12.7786 18.4577 10.7042 18.1677 8.46697L17.176 8.59553ZM15.9902 14.5098L20.6777 19.1973L21.3848 18.4902L16.6973 13.8027L15.9902 14.5098ZM4.08594 9.625C4.08594 12.6746 6.53636 15.125 9.58594 15.125V14.125C7.08864 14.125 5.08594 12.1223 5.08594 9.625H4.08594ZM9.58594 15.125C12.5939 15.125 15.0859 12.6771 15.0859 9.625H14.0859C14.0859 12.1198 12.0467 14.125 9.58594 14.125V15.125ZM15.0859 9.625C15.0859 6.61448 12.5965 4.125 9.58594 4.125V5.125C12.0442 5.125 14.0859 7.16677 14.0859 9.625H15.0859ZM9.58594 4.125C6.53382 4.125 4.08594 6.61703 4.08594 9.625H5.08594C5.08594 7.16422 7.09118 5.125 9.58594 5.125V4.125Z" fill="white" mask="url(#path-1-inside-1_3_322)"></path>
                        </svg>
                    </span>
                    <input type="search" className="search__input input" placeholder='Search'/>
                </label>
            </form>
        </div>
    )
}

export default Search;