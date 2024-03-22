import React from 'react';
import MySelect from "../../UI/MySelect/MySelect";
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";
import cl from'./Search.module.css'
const Search = ({setSearchQuery, searchQuery, setSearchSelector, searchSelector}) => {
    return (
        <div className={cl.search}>
            <MySelect
                value={searchSelector}
                onChange={setSearchSelector}
                defaultValue='Тип поиска'
                options={[
                    {name:'По городам', value:'city'},
                    {name:'По email', value: 'email'},
                    {name:'По имени', value: 'name'}
                ]}
            />
            <MyInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <MyButton onClick={()=>setSearchQuery('')}>Отчистить</MyButton>
        </div>
    );
};

export default Search;