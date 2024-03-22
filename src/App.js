import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import './style/style.css'
import MySelect from "./UI/MySelect/MySelect";
import Search from "./Components/Search/Search";
import Table from "./Components/Table/Table";
import MyButton from "./UI/MyButton/MyButton";
import API from "./API/API";
function App() {
  const [users, setUsers]=useState([])
  const [searchSelector, setSearchSelector]=useState('city')
  const [searchQuery, setSearchQuery]=useState('')
  const [limit, setLimit]=useState(5)
  const [page, setPage]=useState(1)

    useEffect(()=>{
        getPost()
    }, [])
    async function getPost(){
        const responce = await API.getUsers()
        setUsers(responce.data)
    }

  const sortedUsers = useMemo(()=>{
      setPage(1)
    if(searchQuery===''){
        return users
    }
    if(searchSelector==='city'){
        return users.filter(user =>user.address.city.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    if(searchSelector==='name'){
      return users.filter(user =>user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    if(searchSelector==='email'){
      return users.filter(user =>user.email.toLowerCase().includes(searchQuery.toLowerCase()))
    }

  },[searchQuery, users])


  function setCity(value){
      setSearchSelector('city')
      setSearchQuery(value)
  }


  return (
    <div className="App">
      <Search searchSelector={searchSelector} setSearchSelector={setSearchSelector} setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <MySelect
          value={searchQuery}
          onChange={setCity}
          defaultValue='Выбор города'
          options={[
            {name:'Gwenborough', value:'Gwenborough'},
            {name:'Wisokyburgh', value:'Wisokyburgh'},
            {name:'McKenziehaven', value:'McKenziehaven'},
            {name:'South Elvis', value:'South Elvis'},
            {name:'Roscoeview', value:'Roscoeview'},
            {name:'South Christy', value:'South Christy'},
            {name:'Howemouth', value:'Howemouth'},
            {name:'Aliyaview', value:'Aliyaview'},
            {name:'Bartholomebury', value:'Bartholomebury'},
            {name:'Lebsackbury', value:'Lebsackbury'}
          ]}
      />

      <Table page={page} sortedUsers={sortedUsers}/>
      <div className={sortedUsers.length>limit ?'buttons' : 'buttons__disable' }>
          <MyButton disabled={page===1}  onClick={()=>setPage(page-1)}>Предыдущая страница</MyButton>
          <MyButton disabled={sortedUsers.length<=(limit*page)} onClick={()=>setPage(page+1)}>Следующая страница</MyButton>
      </div>

    </div>
  );
}

export default App;
